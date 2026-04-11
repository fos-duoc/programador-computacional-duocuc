package com.mycompany.duocproyectoetf;

import java.util.Scanner;
import java.util.ArrayList;

/**
 * Sistema Teatro Moro - Evaluación Final Transversal
 * @author fonat
 */
public class DuocProyectoETF {
    
    // DISEÑO DEL SISTEMA - Arreglos para datos fijos
    private static final int CAPACIDAD = 150;
    private int[] numeroAsiento = new int[CAPACIDAD];
    private String[] estadoAsiento = new String[CAPACIDAD];
    private String[] ubicacionAsiento = new String[CAPACIDAD];
    private String[] nombreCliente = new String[CAPACIDAD];
    private String[] rutCliente = new String[CAPACIDAD];
    private String[] tipoCliente = new String[CAPACIDAD];
    private int[] edadCliente = new int[CAPACIDAD];
    private int[] precioBase = new int[CAPACIDAD];
    private int[] descuentoAplicado = new int[CAPACIDAD];
    private int[] precioFinal = new int[CAPACIDAD];
    
    // Listas para datos dinámicos
    private ArrayList<String> historialVentas = new ArrayList<>();
    
    // Variables estáticas
    private static int totalVentas = 0;
    private static int ingresosTotales = 0;
    private static int totalDescuentos = 0;
    private static int asientosDisponibles = CAPACIDAD;
    
    // Precios por ubicación
    private static final int PRECIO_VIP = 60000;
    private static final int PRECIO_PALCO = 50000;
    private static final int PRECIO_PLATEA_BAJA = 40000;
    private static final int PRECIO_PLATEA_ALTA = 30000;
    private static final int PRECIO_GALERIA = 20000;
    
    // Constructor
    public DuocProyectoETF() {
        inicializarSistema();
    }
    
    // Inicialización del sistema
    private void inicializarSistema() {
        for (int i = 0; i < CAPACIDAD; i++) {
            numeroAsiento[i] = i + 1;
            estadoAsiento[i] = "disponible";
            
            // Asignar ubicaciones (30 asientos por sección)
            if (i < 30) {
                ubicacionAsiento[i] = "VIP";
                precioBase[i] = PRECIO_VIP;
            } else if (i < 60) {
                ubicacionAsiento[i] = "Palco";
                precioBase[i] = PRECIO_PALCO;
            } else if (i < 90) {
                ubicacionAsiento[i] = "Platea Baja";
                precioBase[i] = PRECIO_PLATEA_BAJA;
            } else if (i < 120) {
                ubicacionAsiento[i] = "Platea Alta";
                precioBase[i] = PRECIO_PLATEA_ALTA;
            } else {
                ubicacionAsiento[i] = "Galeria";
                precioBase[i] = PRECIO_GALERIA;
            }
            
            nombreCliente[i] = "";
            rutCliente[i] = "";
            tipoCliente[i] = "";
            edadCliente[i] = 0;
            descuentoAplicado[i] = 0;
            precioFinal[i] = 0;
        }
    }
    
    // VENDER ENTRADA
    public void venderEntrada(Scanner sc) {
        System.out.println("\n=== VENTA DE ENTRADAS ===");
        
        if (asientosDisponibles == 0) {
            System.out.println("Teatro completo");
            return;
        }
        
        // Mostrar disponibilidad
        mostrarDisponibilidad();
        
        // Seleccionar ubicación
        System.out.println("\nSeleccione ubicacion:");
        System.out.println("1. VIP ($60,000)");
        System.out.println("2. Palco ($50,000)");
        System.out.println("3. Platea Baja ($40,000)");
        System.out.println("4. Platea Alta ($30,000)");
        System.out.println("5. Galeria ($20,000)");
        System.out.print("Opcion >> ");
        
        int opcionUbicacion;
        try {
            opcionUbicacion = sc.nextInt();
            sc.nextLine();
        } catch (Exception e) {
            System.out.println("Error: opcion invalida");
            sc.nextLine();
            return;
        }
        
        String ubicacion = "";
        switch(opcionUbicacion) {
            case 1: ubicacion = "VIP"; break;
            case 2: ubicacion = "Palco"; break;
            case 3: ubicacion = "Platea Baja"; break;
            case 4: ubicacion = "Platea Alta"; break;
            case 5: ubicacion = "Galeria"; break;
            default:
                System.out.println("Ubicacion invalida");
                return;
        }
        
        // Mostrar asientos disponibles
        System.out.println("\nAsientos disponibles en " + ubicacion + ":");
        boolean hayDisponibles = false;
        for (int i = 0; i < CAPACIDAD; i++) {
            if (ubicacionAsiento[i].equals(ubicacion) && estadoAsiento[i].equals("disponible")) {
                System.out.print((i + 1) + " ");
                hayDisponibles = true;
            }
        }
        
        if (!hayDisponibles) {
            System.out.println("\nNo hay asientos disponibles en esta ubicacion");
            return;
        }
        
        System.out.print("\n\nNumero de asiento >> ");
        int numAsiento;
        try {
            numAsiento = sc.nextInt();
            sc.nextLine();
        } catch (Exception e) {
            System.out.println("Error: numero invalido");
            sc.nextLine();
            return;
        }
        
        // Validar asiento
        if (numAsiento < 1 || numAsiento > CAPACIDAD) {
            System.out.println("Asiento fuera de rango");
            return;
        }
        
        int indice = numAsiento - 1;
        
        if (!estadoAsiento[indice].equals("disponible")) {
            System.out.println("Asiento no disponible");
            return;
        }
        
        if (!ubicacionAsiento[indice].equals(ubicacion)) {
            System.out.println("El asiento no pertenece a la ubicacion seleccionada");
            return;
        }
        
        // DATOS DEL CLIENTE
        System.out.println("\n--- DATOS DEL CLIENTE ---");
        System.out.print("Nombre completo >> ");
        String nombre = sc.nextLine().trim();
        
        System.out.print("RUT (sin puntos ni guion) >> ");
        String rut = sc.nextLine().trim();
        if (!validarRut(rut)) {
            return;
        }
        
        // VALIDACION DE EDAD
        System.out.print("Edad >> ");
        int edad;
        try {
            edad = sc.nextInt();
            sc.nextLine();
        } catch (Exception e) {
            System.out.println("Error: edad invalida");
            sc.nextLine();
            return;
        }
        
        if (edad < 0 || edad > 120) {
            System.out.println("Edad invalida");
            return;
        }
        
        // DETERMINAR DESCUENTO
        String tipo = "general";
        int porcentajeDescuento = 0;
        
        // Automatico para niños y tercera edad
        if (edad < 12) {
            tipo = "nino";
            porcentajeDescuento = 5;
            System.out.println("Descuento nino aplicado: 5%");
        } else if (edad >= 65) {
            tipo = "tercera_edad";
            porcentajeDescuento = 30;
            System.out.println("Descuento tercera edad aplicado: 30%");
        } else {
            // Preguntar para otros descuentos
            System.out.print("Es mujer? (s/n) >> ");
            String esMujer = sc.nextLine().toLowerCase();
            if (esMujer.equals("s")) {
                tipo = "mujer";
                porcentajeDescuento = 7;
                System.out.println("Descuento mujer aplicado: 7%");
            } else {
                System.out.print("Es estudiante? (s/n) >> ");
                String esEstudiante = sc.nextLine().toLowerCase();
                if (esEstudiante.equals("s")) {
                    tipo = "estudiante";
                    porcentajeDescuento = 25;
                    System.out.println("Descuento estudiante aplicado: 25%");
                }
            }
        }
        
        // CALCULAR PRECIOS
        int precio = precioBase[indice];
        int descuento = (precio * porcentajeDescuento) / 100;
        int total = precio - descuento;
        
        // REGISTRAR VENTA
        totalVentas++;
        estadoAsiento[indice] = "vendido";
        nombreCliente[indice] = nombre;
        rutCliente[indice] = rut;
        tipoCliente[indice] = tipo;
        edadCliente[indice] = edad;
        descuentoAplicado[indice] = descuento;
        precioFinal[indice] = total;
        
        asientosDisponibles--;
        ingresosTotales += total;
        totalDescuentos += descuento;
        
        // Agregar al historial
        String registro = "Venta #" + totalVentas + " - " + nombre + " - Asiento " + numAsiento;
        historialVentas.add(registro);
        
        // MOSTRAR RESUMEN
        System.out.println("\n=== VENTA EXITOSA ===");
        System.out.println("Cliente: " + nombre);
        System.out.println("Edad: " + edad + " anos");
        System.out.println("Tipo: " + tipo);
        System.out.println("Asiento: " + numAsiento + " - " + ubicacion);
        System.out.println("Precio base: $" + precio);
        System.out.println("Descuento: $" + descuento + " (" + porcentajeDescuento + "%)");
        System.out.println("TOTAL: $" + total);
    }
    
    // MODIFICAR ASIENTO
    public void modificarAsiento(Scanner sc) {
        System.out.println("\n=== MODIFICAR ASIENTO ===");
        System.out.print("Asiento actual >> ");
        
        try {
            int asientoActual = sc.nextInt();
            sc.nextLine();
            
            if (asientoActual < 1 || asientoActual > CAPACIDAD) {
                System.out.println("Asiento invalido");
                return;
            }
            
            int indiceActual = asientoActual - 1;
            
            if (!estadoAsiento[indiceActual].equals("vendido")) {
                System.out.println("No hay venta en ese asiento");
                return;
            }
            
            System.out.print("Asiento nuevo >> ");
            int asientoNuevo = sc.nextInt();
            sc.nextLine();
            
            if (asientoNuevo < 1 || asientoNuevo > CAPACIDAD) {
                System.out.println("Asiento invalido");
                return;
            }
            
            int indiceNuevo = asientoNuevo - 1;
            
            if (!estadoAsiento[indiceNuevo].equals("disponible")) {
                System.out.println("Asiento no disponible");
                return;
            }
            
            // Copiar datos
            estadoAsiento[indiceNuevo] = "vendido";
            nombreCliente[indiceNuevo] = nombreCliente[indiceActual];
            rutCliente[indiceNuevo] = rutCliente[indiceActual];
            tipoCliente[indiceNuevo] = tipoCliente[indiceActual];
            edadCliente[indiceNuevo] = edadCliente[indiceActual];
            
            // Recalcular precio si cambia ubicacion
            if (!ubicacionAsiento[indiceNuevo].equals(ubicacionAsiento[indiceActual])) {
                int nuevoPrecio = precioBase[indiceNuevo];
                int porcentaje = (descuentoAplicado[indiceActual] * 100) / precioBase[indiceActual];
                descuentoAplicado[indiceNuevo] = (nuevoPrecio * porcentaje) / 100;
                precioFinal[indiceNuevo] = nuevoPrecio - descuentoAplicado[indiceNuevo];
                
                // Ajustar totales
                ingresosTotales += (precioFinal[indiceNuevo] - precioFinal[indiceActual]);
                totalDescuentos += (descuentoAplicado[indiceNuevo] - descuentoAplicado[indiceActual]);
            } else {
                descuentoAplicado[indiceNuevo] = descuentoAplicado[indiceActual];
                precioFinal[indiceNuevo] = precioFinal[indiceActual];
            }
            
            // Limpiar asiento anterior
            estadoAsiento[indiceActual] = "disponible";
            nombreCliente[indiceActual] = "";
            rutCliente[indiceActual] = "";
            tipoCliente[indiceActual] = "";
            edadCliente[indiceActual] = 0;
            descuentoAplicado[indiceActual] = 0;
            precioFinal[indiceActual] = 0;
            
            System.out.println("Cambio exitoso: Asiento " + asientoActual + " -> " + asientoNuevo);
            
        } catch (Exception e) {
            System.out.println("Error en la entrada");
            sc.nextLine();
        }
    }
    
    // ELIMINAR VENTA
    public void eliminarVenta(Scanner sc) {
        System.out.println("\n=== ELIMINAR VENTA ===");
        System.out.print("Numero de asiento >> ");
        
        try {
            int asiento = sc.nextInt();
            sc.nextLine();
            
            if (asiento < 1 || asiento > CAPACIDAD) {
                System.out.println("Asiento invalido");
                return;
            }
            
            int indice = asiento - 1;
            
            if (!estadoAsiento[indice].equals("vendido")) {
                System.out.println("No hay venta en ese asiento");
                return;
            }
            
            System.out.println("Cliente: " + nombreCliente[indice]);
            System.out.println("Reembolso: $" + precioFinal[indice]);
            
            System.out.print("Confirmar eliminacion? (s/n) >> ");
            String confirmar = sc.nextLine().toLowerCase();
            
            if (confirmar.equals("s")) {
                // Actualizar totales
                ingresosTotales -= precioFinal[indice];
                totalDescuentos -= descuentoAplicado[indice];
                asientosDisponibles++;
                
                // Limpiar datos
                estadoAsiento[indice] = "disponible";
                nombreCliente[indice] = "";
                rutCliente[indice] = "";
                tipoCliente[indice] = "";
                edadCliente[indice] = 0;
                descuentoAplicado[indice] = 0;
                precioFinal[indice] = 0;
                
                System.out.println("Venta eliminada");
            }
            
        } catch (Exception e) {
            System.out.println("Error en la entrada");
            sc.nextLine();
        }
    }
    
    // IMPRIMIR BOLETA
    public void imprimirBoleta(Scanner sc) {
        System.out.println("\n=== IMPRIMIR BOLETA ===");
        System.out.print("Numero de asiento >> ");
        
        try {
            int asiento = sc.nextInt();
            sc.nextLine();
            
            if (asiento < 1 || asiento > CAPACIDAD) {
                System.out.println("Asiento invalido");
                return;
            }
            
            int indice = asiento - 1;
            
            if (!estadoAsiento[indice].equals("vendido")) {
                System.out.println("No hay venta en ese asiento");
                return;
            }
            
            System.out.println("\n********************************");
            System.out.println("        TEATRO MORO");
            System.out.println("      BOLETA DE VENTA");
            System.out.println("********************************");
            System.out.println("Cliente: " + nombreCliente[indice]);
            System.out.println("RUT: " + rutCliente[indice]);
            System.out.println("Edad: " + edadCliente[indice] + " anos");
            System.out.println("Tipo: " + tipoCliente[indice]);
            System.out.println("--------------------------------");
            System.out.println("Asiento: " + asiento);
            System.out.println("Ubicacion: " + ubicacionAsiento[indice]);
            System.out.println("Fila: " + ((asiento - 1) / 10 + 1));
            System.out.println("Columna: " + ((asiento - 1) % 10 + 1));
            System.out.println("--------------------------------");
            System.out.println("Precio base: $" + precioBase[indice]);
            System.out.println("Descuento: $" + descuentoAplicado[indice]);
            System.out.println("--------------------------------");
            System.out.println("TOTAL: $" + precioFinal[indice]);
            System.out.println("********************************");
            System.out.println("Gracias por su preferencia!");
            
        } catch (Exception e) {
            System.out.println("Error en la entrada");
            sc.nextLine();
        }
    }
    
    // VER ASIENTOS
    public void verAsientos() {
        System.out.println("\n=== ESTADO DE ASIENTOS ===");
        System.out.println("D = Disponible  |  V = Vendido\n");
        
        String[] secciones = {"VIP", "Palco", "Platea Baja", "Platea Alta", "Galeria"};
        
        for (int s = 0; s < secciones.length; s++) {
            System.out.println("\n--- " + secciones[s] + " ---");
            int inicio = s * 30;
            
            for (int fila = 0; fila < 3; fila++) {
                System.out.print("Fila " + (fila + 1) + ": ");
                for (int col = 0; col < 10; col++) {
                    int pos = inicio + (fila * 10) + col;
                    if (estadoAsiento[pos].equals("disponible")) {
                        System.out.print("[D]");
                    } else {
                        System.out.print("[V]");
                    }
                }
                System.out.println();
            }
        }
        
        System.out.println("\nTotal vendidos: " + (CAPACIDAD - asientosDisponibles));
        System.out.println("Total disponibles: " + asientosDisponibles);
    }
    
    // GENERAR REPORTE
    public void generarReporte() {
        System.out.println("\n=== REPORTE DEL SISTEMA ===");
        System.out.println("Total de ventas: " + totalVentas);
        System.out.println("Asientos vendidos: " + (CAPACIDAD - asientosDisponibles) + "/" + CAPACIDAD);
        System.out.println("Ocupacion: " + ((CAPACIDAD - asientosDisponibles) * 100 / CAPACIDAD) + "%");
        System.out.println("Ingresos totales: $" + ingresosTotales);
        System.out.println("Descuentos aplicados: $" + totalDescuentos);
        System.out.println("Ingresos brutos: $" + (ingresosTotales + totalDescuentos));
        
        // Por ubicacion
        System.out.println("\n--- POR UBICACION ---");
        String[] ubicaciones = {"VIP", "Palco", "Platea Baja", "Platea Alta", "Galeria"};
        for (String ubi : ubicaciones) {
            int ventas = 0;
            int ingresos = 0;
            for (int i = 0; i < CAPACIDAD; i++) {
                if (ubicacionAsiento[i].equals(ubi) && estadoAsiento[i].equals("vendido")) {
                    ventas++;
                    ingresos += precioFinal[i];
                }
            }
            System.out.println(ubi + ": " + ventas + " ventas, $" + ingresos);
        }
        
        // Por tipo de cliente
        System.out.println("\n--- POR TIPO DE CLIENTE ---");
        int ninos = 0, mujeres = 0, estudiantes = 0, terceraEdad = 0, general = 0;
        for (int i = 0; i < CAPACIDAD; i++) {
            if (estadoAsiento[i].equals("vendido")) {
                switch(tipoCliente[i]) {
                    case "nino": ninos++; break;
                    case "mujer": mujeres++; break;
                    case "estudiante": estudiantes++; break;
                    case "tercera_edad": terceraEdad++; break;
                    default: general++; break;
                }
            }
        }
        System.out.println("Ninos (5%): " + ninos);
        System.out.println("Mujeres (7%): " + mujeres);
        System.out.println("Estudiantes (25%): " + estudiantes);
        System.out.println("Tercera edad (30%): " + terceraEdad);
        System.out.println("General: " + general);
    }
    
    // EJECUTAR PRUEBAS
    public void ejecutarPruebas() {
        System.out.println("\n=== PRUEBAS DEL SISTEMA ===");
        
        // Prueba 1: Integridad
        System.out.print("Prueba 1 - Integridad de datos... ");
        boolean integridad = true;
        for (int i = 0; i < CAPACIDAD; i++) {
            if (estadoAsiento[i] == null || ubicacionAsiento[i] == null) {
                integridad = false;
                break;
            }
        }
        System.out.println(integridad ? "OK" : "ERROR");
        
        // Prueba 2: Consistencia
        System.out.print("Prueba 2 - Consistencia... ");
        int ventas = 0;
        for (int i = 0; i < CAPACIDAD; i++) {
            if (estadoAsiento[i].equals("vendido")) {
                ventas++;
            }
        }
        boolean consistente = (ventas == (CAPACIDAD - asientosDisponibles));
        System.out.println(consistente ? "OK" : "ERROR");
        
        // Prueba 3: Precios
        System.out.print("Prueba 3 - Validacion de precios... ");
        boolean preciosOk = true;
        for (int i = 0; i < CAPACIDAD; i++) {
            if (precioBase[i] <= 0) {
                preciosOk = false;
                break;
            }
        }
        System.out.println(preciosOk ? "OK" : "ERROR");
        
        // Prueba 4: Rendimiento
        System.out.print("Prueba 4 - Rendimiento... ");
        long inicio = System.currentTimeMillis();
        for (int i = 0; i < 10000; i++) {
            for (int j = 0; j < CAPACIDAD; j++) {
                String estado = estadoAsiento[j];
            }
        }
        long tiempo = System.currentTimeMillis() - inicio;
        System.out.println("OK (" + tiempo + "ms)");
        
        System.out.println("\nSistema funcionando correctamente");
    }
    
    // FUNCIONES AUXILIARES
    private void mostrarDisponibilidad() {
        String[] ubicaciones = {"VIP", "Palco", "Platea Baja", "Platea Alta", "Galeria"};
        System.out.println("\nDisponibilidad:");
        
        for (String ubi : ubicaciones) {
            int disponibles = 0;
            for (int i = 0; i < CAPACIDAD; i++) {
                if (ubicacionAsiento[i].equals(ubi) && estadoAsiento[i].equals("disponible")) {
                    disponibles++;
                }
            }
            System.out.println(ubi + ": " + disponibles + " asientos disponibles");
        }
    }
    
    private boolean validarRut(String rut) {
        if (rut.length() < 8 || rut.length() > 9) {
            System.out.println("RUT invalido");
            return false;
        }
        
        // Verificar que sean numeros
        for (char c : rut.toCharArray()) {
            if (!Character.isDigit(c)) {
                System.out.println("RUT debe contener solo numeros");
                return false;
            }
        }
        
        // Verificar duplicados
        for (int i = 0; i < CAPACIDAD; i++) {
            if (rutCliente[i] != null && rutCliente[i].equals(rut) && estadoAsiento[i].equals("vendido")) {
                System.out.println("Cliente ya tiene una compra");
                return false;
            }
        }
        
        return true;
    }
    
    // METODO PRINCIPAL
    public static void main(String[] args) {
        DuocProyectoETF teatro = new DuocProyectoETF();
        Scanner sc = new Scanner(System.in);
        
        System.out.println("================================");
        System.out.println("     SISTEMA TEATRO MORO");
        System.out.println("  EVALUACION FINAL TRANSVERSAL");
        System.out.println("================================");
        
        int opcion = 0;
        
        do {
            System.out.println("\n=== MENU PRINCIPAL ===");
            System.out.println("1. Vender entrada");
            System.out.println("2. Modificar asiento");
            System.out.println("3. Eliminar venta");
            System.out.println("4. Imprimir boleta");
            System.out.println("5. Ver asientos");
            System.out.println("6. Generar reporte");
            System.out.println("7. Ejecutar pruebas");
            System.out.println("8. Salir");
            System.out.print("Seleccione opcion >> ");
            
            try {
                opcion = sc.nextInt();
                sc.nextLine();
                
                switch(opcion) {
                    case 1:
                        teatro.venderEntrada(sc);
                        break;
                    case 2:
                        teatro.modificarAsiento(sc);
                        break;
                    case 3:
                        teatro.eliminarVenta(sc);
                        break;
                    case 4:
                        teatro.imprimirBoleta(sc);
                        break;
                    case 5:
                        teatro.verAsientos();
                        break;
                    case 6:
                        teatro.generarReporte();
                        break;
                    case 7:
                        teatro.ejecutarPruebas();
                        break;
                    case 8:
                        System.out.println("\n=== CIERRE DEL SISTEMA ===");
                        System.out.println("Total vendido: $" + ingresosTotales);
                        System.out.println("Ventas realizadas: " + totalVentas);
                        System.out.println("Gracias por usar el sistema!");
                        break;
                    default:
                        System.out.println("Opcion invalida");
                }
                
            } catch (Exception e) {
                System.out.println("Error: Ingrese un numero valido");
                sc.nextLine();
            }
            
        } while (opcion != 8);
        
        sc.close();
    }
}