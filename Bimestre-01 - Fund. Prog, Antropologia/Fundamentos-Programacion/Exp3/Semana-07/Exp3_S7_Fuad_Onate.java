package com.mycompany.duocproyectos7;

import java.util.Scanner;
import java.util.ArrayList;

public class DuocProyectoS7 {
    
    // variables de instancia - listas para almacenar datos
    ArrayList<String> listaUbicaciones = new ArrayList<>();
    ArrayList<Integer> listaCostoBase = new ArrayList<>();
    ArrayList<Integer> listaDescuentos = new ArrayList<>();
    ArrayList<Integer> listaCostoFinal = new ArrayList<>();
    
    // variables estaticas
    static int totalVentas = 0;
    static int ingresosTotales = 0;
    static int totalDescuentos = 0;
    
    public static void main(String[] args) {
        
        DuocProyectoS7 teatro = new DuocProyectoS7();
        Scanner sc = new Scanner(System.in);
        
        // variables locales
        String nombreTeatro = "Teatro Moro";
        int capacidad = 100;
        int opcion = 0;
        String continuar = "s";
        
        System.out.println("=== " + nombreTeatro + " ===");
        System.out.println("Sistema de Venta de Entradas");
        
        do {
            System.out.println("\n--- MENU PRINCIPAL ---");
            System.out.println("1. Venta de entradas");
            System.out.println("2. Visualizar resumen de ventas");
            System.out.println("3. Generar boleta");
            System.out.println("4. Calcular ingresos totales");
            System.out.println("5. Salir");
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
                // VENTA DE ENTRADAS
                System.out.println("\n--- VENTA DE ENTRADAS ---");
                
                // seleccionar ubicacion
                System.out.println("Ubicaciones disponibles:");
                System.out.println("1. VIP ($50000)");
                System.out.println("2. Platea ($35000)");
                System.out.println("3. Balcon ($20000)");
                System.out.print("Seleccione ubicacion >> ");
                int tipoUbicacion = sc.nextInt();
                sc.nextLine();
                
                // variables locales para esta venta
                String ubicacion = "";
                int costoBase = 0;
                int descuento = 0;
                int costoFinal = 0;
                
                // determinar precio base segun ubicacion
                if (tipoUbicacion == 1) {
                    ubicacion = "VIP";
                    costoBase = 50000;
                } else if (tipoUbicacion == 2) {
                    ubicacion = "Platea";
                    costoBase = 35000;
                } else {
                    ubicacion = "Balcon";
                    costoBase = 20000;
                }
                
                // preguntar por descuentos
                System.out.print("Es estudiante? (s/n) >> ");
                String esEstudiante = sc.nextLine();
                
                if (esEstudiante.equalsIgnoreCase("s")) {
                    descuento = costoBase * 10 / 100;
                    System.out.println("Descuento estudiante 10% aplicado");
                } else {
                    System.out.print("Es tercera edad? (s/n) >> ");
                    String esTerceraEdad = sc.nextLine();
                    
                    if (esTerceraEdad.equalsIgnoreCase("s")) {
                        descuento = costoBase * 15 / 100;
                        System.out.println("Descuento tercera edad 15% aplicado");
                    }
                }
                
                // calcular costo final
                costoFinal = costoBase - descuento;
                
                // almacenar en listas
                teatro.listaUbicaciones.add(ubicacion);
                teatro.listaCostoBase.add(costoBase);
                teatro.listaDescuentos.add(descuento);
                teatro.listaCostoFinal.add(costoFinal);
                
                // actualizar estadisticas
                totalVentas++;
                ingresosTotales += costoFinal;
                totalDescuentos += descuento;
                
                System.out.println("\n=== VENTA REGISTRADA ===");
                System.out.println("Ubicacion: " + ubicacion);
                System.out.println("Costo base: $" + costoBase);
                System.out.println("Descuento: $" + descuento);
                System.out.println("Costo final: $" + costoFinal);
                System.out.println("Venta #" + totalVentas + " registrada exitosamente");
                
            } else if (opcion == 2) {
                // VISUALIZAR RESUMEN
                System.out.println("\n--- RESUMEN DE VENTAS ---");
                
                if (teatro.listaUbicaciones.isEmpty()) {
                    System.out.println("No hay ventas registradas");
                } else {
                    for (int i = 0; i < teatro.listaUbicaciones.size(); i++) {
                        System.out.println("\nVenta #" + (i + 1));
                        System.out.println("Ubicacion: " + teatro.listaUbicaciones.get(i));
                        System.out.println("Costo base: $" + teatro.listaCostoBase.get(i));
                        System.out.println("Descuento: $" + teatro.listaDescuentos.get(i));
                        System.out.println("Costo final: $" + teatro.listaCostoFinal.get(i));
                        System.out.println("------------------------");
                    }
                }
                
            } else if (opcion == 3) {
                // GENERAR BOLETA
                System.out.println("\n--- GENERAR BOLETA ---");
                
                if (teatro.listaUbicaciones.isEmpty()) {
                    System.out.println("No hay ventas para generar boleta");
                } else {
                    System.out.print("Ingrese numero de venta (1-" + teatro.listaUbicaciones.size() + ") >> ");
                    int numVenta = sc.nextInt() - 1;
                    sc.nextLine();
                    
                    if (numVenta >= 0 && numVenta < teatro.listaUbicaciones.size()) {
                        System.out.println("\n********************************");
                        System.out.println("        TEATRO MORO");
                        System.out.println("      BOLETA DE VENTA");
                        System.out.println("********************************");
                        System.out.println("Venta #" + (numVenta + 1));
                        System.out.println("--------------------------------");
                        System.out.println("Ubicacion: " + teatro.listaUbicaciones.get(numVenta));
                        System.out.println("Costo base: $" + teatro.listaCostoBase.get(numVenta));
                        System.out.println("Descuento: $" + teatro.listaDescuentos.get(numVenta));
                        System.out.println("--------------------------------");
                        System.out.println("TOTAL A PAGAR: $" + teatro.listaCostoFinal.get(numVenta));
                        System.out.println("********************************");
                        System.out.println("¡Gracias por su compra!");
                        System.out.println("¡Disfrute la funcion!");
                        System.out.println("********************************");
                    } else {
                        System.out.println("Numero de venta invalido");
                    }
                }
                
            } else if (opcion == 4) {
                // CALCULAR INGRESOS TOTALES
                System.out.println("\n--- INGRESOS TOTALES ---");
                System.out.println("Total de ventas: " + totalVentas);
                System.out.println("Ingresos brutos: $" + (ingresosTotales + totalDescuentos));
                System.out.println("Total descuentos: $" + totalDescuentos);
                System.out.println("INGRESOS NETOS: $" + ingresosTotales);
                
                // calcular promedio si hay ventas
                if (totalVentas > 0) {
                    int promedio = ingresosTotales / totalVentas;
                    System.out.println("Promedio por venta: $" + promedio);
                }
                
            } else if (opcion == 5) {
                // SALIR
                System.out.println("\n=== CIERRE DEL SISTEMA ===");
                System.out.println("Total vendido hoy: $" + ingresosTotales);
                System.out.println("Gracias por su compra");
                System.out.println("¡Hasta pronto!");
            }
            
        } while (opcion != 5);
        
        sc.close();
    }
}