package com.mycompany.duocproyectos8;
import java.util.Scanner;
import java.util.ArrayList;

/**
 * Sistema Optimizado Teatro Moro - Semana 8
 * Optimización de la gestión de datos en Java
 * @author Fuad Onate
 */
public class DuocProyectoS8 {
    
    // ARREGLOS PARA DATOS FIJOS (mejor rendimiento)
    int[] numeroAsiento = new int[100];
    String[] estadoAsiento = new String[100];  // disponible, vendido
    String[] nombreCliente = new String[100];
    String[] rutCliente = new String[100];
    String[] ubicacionAsiento = new String[100];  // VIP, Platea, General
    int[] precioVenta = new int[100];
    int[] descuentoAplicado = new int[100];
    
    // LISTAS PARA DATOS DINAMICOS (flexibilidad)
    ArrayList<String> listaEventos = new ArrayList<>();
    ArrayList<String> listaPromociones = new ArrayList<>();
    ArrayList<Integer> listaPorcentajes = new ArrayList<>();
    
    // variables estaticas
    static int totalVentas = 0;
    static int ingresosTotales = 0;
    static int totalDescuentos = 0;
    static int asientosDisponibles = 100;
    
    public static void main(String[] args) {
        
        DuocProyectoS8 teatro = new DuocProyectoS8();
        Scanner sc = new Scanner(System.in);
        
        // variables locales
        String nombreTeatro = "Teatro Moro";
        int capacidad = 100;
        int opcion = 0;
        
        // INICIALIZAR SISTEMA
        for (int i = 0; i < 100; i++) {
            teatro.numeroAsiento[i] = i + 1;
            teatro.estadoAsiento[i] = "disponible";
            teatro.nombreCliente[i] = "";
            teatro.rutCliente[i] = "";
            
            // asignar ubicaciones
            if (i < 20) {
                teatro.ubicacionAsiento[i] = "VIP";
            } else if (i < 60) {
                teatro.ubicacionAsiento[i] = "Platea";  
            } else {
                teatro.ubicacionAsiento[i] = "General";
            }
            
            teatro.precioVenta[i] = 0;
            teatro.descuentoAplicado[i] = 0;
        }
        
        // inicializar promociones basicas
        teatro.listaPromociones.add("Estudiante");
        teatro.listaPorcentajes.add(10);
        teatro.listaPromociones.add("Tercera Edad");
        teatro.listaPorcentajes.add(15);
        
        // agregar evento inicial
        teatro.listaEventos.add("Gran Gala Teatro Moro 2024");
        
        System.out.println("=== " + nombreTeatro + " ===");
        System.out.println("Sistema Optimizado - Semana 8");
        System.out.println("Capacidad: " + capacidad + " asientos");
        
        do {
            System.out.println("\n--- MENU PRINCIPAL ---");
            System.out.println("1. Vender entrada");
            System.out.println("2. Modificar asiento");
            System.out.println("3. Eliminar venta");
            System.out.println("4. Agregar promocion");
            System.out.println("5. Ver asientos");
            System.out.println("6. Imprimir boleta");
            System.out.println("7. Ver resumen");
            System.out.println("8. Ejecutar pruebas");
            System.out.println("9. Salir");
            System.out.print("Seleccione opcion >> ");
            
            try {
                opcion = sc.nextInt();
                sc.nextLine();
            } catch (Exception e) {
                System.out.println("Error: ingrese numero valido");
                sc.nextLine();
                continue;
            }
            
            if (opcion == 1) {
                // VENDER ENTRADA
                System.out.println("\n--- VENDER ENTRADA ---");
                
                if (asientosDisponibles == 0) {
                    System.out.println("Teatro completo");
                    continue;
                }
                
                // mostrar disponibles
                System.out.println("Asientos disponibles:");
                System.out.println("VIP (1-20) | Platea (21-60) | General (61-100)");
                
                for (int i = 0; i < 100; i++) {
                    if (teatro.estadoAsiento[i].equals("disponible")) {
                        System.out.print((i + 1) + " ");
                        if ((i + 1) % 20 == 0) System.out.println();
                    }
                }
                System.out.println();
                
                System.out.print("Numero de asiento >> ");
                int asiento = sc.nextInt();
                sc.nextLine();
                
                // validar asiento
                if (asiento < 1 || asiento > 100) {
                    System.out.println("Asiento invalido");
                    continue;
                }
                
                int indice = asiento - 1;
                
                // validar disponibilidad
                if (!teatro.estadoAsiento[indice].equals("disponible")) {
                    System.out.println("Asiento no disponible");
                    continue;
                }
                
                // datos cliente
                System.out.print("Nombre cliente >> ");
                String nombre = sc.nextLine();
                
                System.out.print("RUT cliente (sin puntos ni guion) >> ");
                String rut = sc.nextLine();
                
                // validar rut basico
                if (rut.length() < 8 || rut.length() > 9) {
                    System.out.println("RUT invalido");
                    continue;
                }
                
                // verificar rut no duplicado
                boolean rutDuplicado = false;
                for (int i = 0; i < 100; i++) {
                    if (teatro.rutCliente[i].equals(rut) && !rut.isEmpty()) {
                        rutDuplicado = true;
                        break;
                    }
                }
                
                if (rutDuplicado) {
                    System.out.println("Cliente ya tiene una compra");
                    continue;
                }
                
                // calcular precio base
                int precioBase = 0;
                if (teatro.ubicacionAsiento[indice].equals("VIP")) {
                    precioBase = 50000;
                } else if (teatro.ubicacionAsiento[indice].equals("Platea")) {
                    precioBase = 35000;
                } else {
                    precioBase = 25000;
                }
                
                // aplicar descuentos
                int descuento = 0;
                System.out.print("Es estudiante? (s/n) >> ");
                String esEstudiante = sc.nextLine();
                
                if (esEstudiante.equalsIgnoreCase("s")) {
                    descuento = precioBase * 10 / 100;
                    System.out.println("Descuento estudiante 10% aplicado");
                } else {
                    System.out.print("Es tercera edad? (s/n) >> ");
                    String esTerceraEdad = sc.nextLine();
                    
                    if (esTerceraEdad.equalsIgnoreCase("s")) {
                        descuento = precioBase * 15 / 100;
                        System.out.println("Descuento tercera edad 15% aplicado");
                    }
                }
                
                int precioFinal = precioBase - descuento;
                
                // guardar venta
                teatro.estadoAsiento[indice] = "vendido";
                teatro.nombreCliente[indice] = nombre;
                teatro.rutCliente[indice] = rut;
                teatro.precioVenta[indice] = precioFinal;
                teatro.descuentoAplicado[indice] = descuento;
                
                // actualizar estadisticas
                totalVentas++;
                asientosDisponibles--;
                ingresosTotales += precioFinal;
                totalDescuentos += descuento;
                
                System.out.println("\n=== VENTA EXITOSA ===");
                System.out.println("Asiento: " + asiento + " (" + teatro.ubicacionAsiento[indice] + ")");
                System.out.println("Cliente: " + nombre);
                System.out.println("Precio base: $" + precioBase);
                System.out.println("Descuento: $" + descuento);
                System.out.println("TOTAL: $" + precioFinal);
                
            } else if (opcion == 2) {
                // MODIFICAR ASIENTO
                System.out.println("\n--- MODIFICAR ASIENTO ---");
                System.out.print("Asiento actual >> ");
                int asientoActual = sc.nextInt();
                sc.nextLine();
                
                if (asientoActual < 1 || asientoActual > 100) {
                    System.out.println("Asiento invalido");
                    continue;
                }
                
                int indiceActual = asientoActual - 1;
                
                if (!teatro.estadoAsiento[indiceActual].equals("vendido")) {
                    System.out.println("No hay venta en ese asiento");
                    continue;
                }
                
                System.out.print("Nuevo asiento >> ");
                int asientoNuevo = sc.nextInt();
                sc.nextLine();
                
                if (asientoNuevo < 1 || asientoNuevo > 100) {
                    System.out.println("Asiento invalido");
                    continue;
                }
                
                int indiceNuevo = asientoNuevo - 1;
                
                if (!teatro.estadoAsiento[indiceNuevo].equals("disponible")) {
                    System.out.println("Asiento no disponible");
                    continue;
                }
                
                // copiar datos al nuevo asiento
                teatro.estadoAsiento[indiceNuevo] = "vendido";
                teatro.nombreCliente[indiceNuevo] = teatro.nombreCliente[indiceActual];
                teatro.rutCliente[indiceNuevo] = teatro.rutCliente[indiceActual];
                
                // recalcular precio si cambia ubicacion
                int precioBaseNuevo = 0;
                if (teatro.ubicacionAsiento[indiceNuevo].equals("VIP")) {
                    precioBaseNuevo = 50000;
                } else if (teatro.ubicacionAsiento[indiceNuevo].equals("Platea")) {
                    precioBaseNuevo = 35000;
                } else {
                    precioBaseNuevo = 25000;
                }
                
                // mantener mismo porcentaje de descuento
                int descuentoNuevo = 0;
                if (teatro.descuentoAplicado[indiceActual] > 0) {
                    // calcular porcentaje original
                    int precioBaseAnterior = teatro.precioVenta[indiceActual] + teatro.descuentoAplicado[indiceActual];
                    int porcentaje = teatro.descuentoAplicado[indiceActual] * 100 / precioBaseAnterior;
                    descuentoNuevo = precioBaseNuevo * porcentaje / 100;
                }
                
                int precioFinalNuevo = precioBaseNuevo - descuentoNuevo;
                
                // actualizar totales
                ingresosTotales = ingresosTotales - teatro.precioVenta[indiceActual] + precioFinalNuevo;
                totalDescuentos = totalDescuentos - teatro.descuentoAplicado[indiceActual] + descuentoNuevo;
                
                teatro.precioVenta[indiceNuevo] = precioFinalNuevo;
                teatro.descuentoAplicado[indiceNuevo] = descuentoNuevo;
                
                // limpiar asiento anterior
                teatro.estadoAsiento[indiceActual] = "disponible";
                teatro.nombreCliente[indiceActual] = "";
                teatro.rutCliente[indiceActual] = "";
                teatro.precioVenta[indiceActual] = 0;
                teatro.descuentoAplicado[indiceActual] = 0;
                
                System.out.println("Cambio exitoso!");
                System.out.println("Asiento " + asientoActual + " -> " + asientoNuevo);
                System.out.println("Nueva ubicacion: " + teatro.ubicacionAsiento[indiceNuevo]);
                System.out.println("Nuevo precio: $" + precioFinalNuevo);
                
            } else if (opcion == 3) {
                // ELIMINAR VENTA
                System.out.println("\n--- ELIMINAR VENTA ---");
                System.out.print("Numero de asiento >> ");
                int asiento = sc.nextInt();
                sc.nextLine();
                
                if (asiento < 1 || asiento > 100) {
                    System.out.println("Asiento invalido");
                    continue;
                }
                
                int indice = asiento - 1;
                
                if (!teatro.estadoAsiento[indice].equals("vendido")) {
                    System.out.println("No hay venta en ese asiento");
                    continue;
                }
                
                // mostrar datos antes de eliminar
                System.out.println("Cliente: " + teatro.nombreCliente[indice]);
                System.out.println("Reembolso: $" + teatro.precioVenta[indice]);
                
                // actualizar totales
                ingresosTotales -= teatro.precioVenta[indice];
                totalDescuentos -= teatro.descuentoAplicado[indice];
                totalVentas--;
                asientosDisponibles++;
                
                // limpiar datos
                teatro.estadoAsiento[indice] = "disponible";
                teatro.nombreCliente[indice] = "";
                teatro.rutCliente[indice] = "";
                teatro.precioVenta[indice] = 0;
                teatro.descuentoAplicado[indice] = 0;
                
                System.out.println("Venta eliminada exitosamente");
                
            } else if (opcion == 4) {
                // AGREGAR PROMOCION
                System.out.println("\n--- AGREGAR PROMOCION ---");
                System.out.print("Nombre de la promocion >> ");
                String nombrePromo = sc.nextLine();
                
                System.out.print("Porcentaje de descuento (sin %) >> ");
                int porcentaje = 0;
                
                try {
                    String entrada = sc.nextLine();
                    // quitar el simbolo % si lo tiene
                    entrada = entrada.replace("%", "").trim();
                    porcentaje = Integer.parseInt(entrada);
                } catch (Exception e) {
                    System.out.println("Error: ingrese solo el numero");
                    continue;
                }
                
                if (porcentaje < 0 || porcentaje > 100) {
                    System.out.println("Porcentaje invalido");
                    continue;
                }
                
                teatro.listaPromociones.add(nombrePromo);
                teatro.listaPorcentajes.add(porcentaje);
                
                System.out.println("Promocion agregada: " + nombrePromo + " (" + porcentaje + "%)");
                
            } else if (opcion == 5) {
                // VER ASIENTOS
                System.out.println("\n--- ESTADO DE ASIENTOS ---");
                System.out.println("D=Disponible  V=Vendido");
                System.out.println();
                
                // mostrar matriz de asientos
                for (int fila = 0; fila < 10; fila++) {
                    System.out.print("Fila " + (fila + 1) + ": ");
                    for (int col = 0; col < 10; col++) {
                        int pos = fila * 10 + col;
                        if (teatro.estadoAsiento[pos].equals("disponible")) {
                            System.out.print("[D]");
                        } else {
                            System.out.print("[V]");
                        }
                    }
                    System.out.println();
                }
                
                System.out.println("\nResumen:");
                System.out.println("Vendidos: " + totalVentas);
                System.out.println("Disponibles: " + asientosDisponibles);
                
            } else if (opcion == 6) {
                // IMPRIMIR BOLETA
                System.out.println("\n--- IMPRIMIR BOLETA ---");
                System.out.print("Numero de asiento >> ");
                int asiento = sc.nextInt();
                sc.nextLine();
                
                if (asiento < 1 || asiento > 100) {
                    System.out.println("Asiento invalido");
                    continue;
                }
                
                int indice = asiento - 1;
                
                if (!teatro.estadoAsiento[indice].equals("vendido")) {
                    System.out.println("No hay venta en ese asiento");
                    continue;
                }
                
                System.out.println("\n********************************");
                System.out.println("        TEATRO MORO");
                System.out.println("         BOLETA");
                System.out.println("********************************");
                System.out.println("Cliente: " + teatro.nombreCliente[indice]);
                System.out.println("RUT: " + teatro.rutCliente[indice]);
                System.out.println("Asiento: " + asiento);
                System.out.println("Ubicacion: " + teatro.ubicacionAsiento[indice]);
                System.out.println("--------------------------------");
                int precioBase = teatro.precioVenta[indice] + teatro.descuentoAplicado[indice];
                System.out.println("Precio base: $" + precioBase);
                System.out.println("Descuento: $" + teatro.descuentoAplicado[indice]);
                System.out.println("--------------------------------");
                System.out.println("TOTAL: $" + teatro.precioVenta[indice]);
                System.out.println("********************************");
                System.out.println("Gracias por su compra!");
                System.out.println("********************************");
                
            } else if (opcion == 7) {
                // VER RESUMEN
                System.out.println("\n--- RESUMEN DEL SISTEMA ---");
                System.out.println("Total de ventas: " + totalVentas);
                System.out.println("Asientos disponibles: " + asientosDisponibles + "/100");
                System.out.println("Ocupacion: " + (totalVentas * 100 / 100) + "%");
                System.out.println("Ingresos totales: $" + ingresosTotales);
                System.out.println("Descuentos aplicados: $" + totalDescuentos);
                System.out.println("Ingresos brutos: $" + (ingresosTotales + totalDescuentos));
                
                // contar por ubicacion
                int ventasVIP = 0, ventasPlatea = 0, ventasGeneral = 0;
                for (int i = 0; i < 100; i++) {
                    if (teatro.estadoAsiento[i].equals("vendido")) {
                        if (teatro.ubicacionAsiento[i].equals("VIP")) {
                            ventasVIP++;
                        } else if (teatro.ubicacionAsiento[i].equals("Platea")) {
                            ventasPlatea++;
                        } else {
                            ventasGeneral++;
                        }
                    }
                }
                
                System.out.println("\n--- Por Ubicacion ---");
                System.out.println("VIP: " + ventasVIP + " ventas");
                System.out.println("Platea: " + ventasPlatea + " ventas");
                System.out.println("General: " + ventasGeneral + " ventas");
                
                System.out.println("\n--- Eventos ---");
                for (String evento : teatro.listaEventos) {
                    System.out.println("- " + evento);
                }
                
                System.out.println("\n--- Promociones ---");
                for (int i = 0; i < teatro.listaPromociones.size(); i++) {
                    System.out.println("- " + teatro.listaPromociones.get(i) + 
                                     ": " + teatro.listaPorcentajes.get(i) + "%");
                }
                
            } else if (opcion == 8) {
                // EJECUTAR PRUEBAS
                System.out.println("\n--- PRUEBAS DEL SISTEMA ---");
                
                // prueba 1: velocidad de busqueda
                System.out.print("Prueba 1 - Busqueda en arreglos... ");
                long inicio = System.currentTimeMillis();
                for (int i = 0; i < 1000; i++) {
                    for (int j = 0; j < 100; j++) {
                        String estado = teatro.estadoAsiento[j];
                    }
                }
                long tiempo = System.currentTimeMillis() - inicio;
                System.out.println("OK (" + tiempo + "ms)");
                
                // prueba 2: integridad de datos
                System.out.print("Prueba 2 - Integridad de datos... ");
                boolean integridad = true;
                for (int i = 0; i < 100; i++) {
                    if (teatro.estadoAsiento[i] == null || teatro.ubicacionAsiento[i] == null) {
                        integridad = false;
                        break;
                    }
                }
                System.out.println(integridad ? "OK" : "ERROR");
                
                // prueba 3: consistencia
                System.out.print("Prueba 3 - Consistencia de contadores... ");
                int ventasContadas = 0;
                for (int i = 0; i < 100; i++) {
                    if (teatro.estadoAsiento[i].equals("vendido")) {
                        ventasContadas++;
                    }
                }
                boolean consistente = (ventasContadas == totalVentas);
                System.out.println(consistente ? "OK" : "ERROR");
                
                System.out.println("\nSistema optimizado funcionando correctamente");
                
            } else if (opcion == 9) {
                // SALIR
                System.out.println("\n=== CIERRE DEL SISTEMA ===");
                System.out.println("Total vendido: $" + ingresosTotales);
                System.out.println("Entradas vendidas: " + totalVentas);
                System.out.println("Gracias por usar el sistema!");
            }
            
        } while (opcion != 9);
        
        sc.close();
    }
}