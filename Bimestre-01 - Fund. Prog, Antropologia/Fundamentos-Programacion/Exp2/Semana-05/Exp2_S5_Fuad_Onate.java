package com.mycompany.duocproyectos5;

import java.util.Scanner;

/*
 * Sistema de Ventas - Teatro Moro
 */
public class DuocProyectoS5 {
    
    // VARIABLES DE INSTANCIA (4)
    int[] numeroEntrada = new int[100];
    int[] precio = new int[100];
    String[] ubicacion = new String[100];
    String[] tipo = new String[100];
    
    // VARIABLES ESTATICAS (3)
    static int totalVendidas = 0;
    static int ingresos = 0;
    static int descuentos = 0;
    
    public static void main(String[] args) {
        DuocProyectoS5 teatro = new DuocProyectoS5();
        Scanner sc = new Scanner(System.in);
        
        // VARIABLES LOCALES (5)
        String nombreTeatro = "Teatro Moro";
        int capacidad = 100;
        int disponibles = 100;
        int opcion = 0;
        String[] precios = {"50000", "35000", "25000"};
        
        System.out.println("=== " + nombreTeatro + " ===");
        System.out.println("Capacidad: " + capacidad + " asientos\n");
        
        // CICLO ITERATIVO PRINCIPAL
        do {
            System.out.println("MENU PRINCIPAL");
            System.out.println("1. Vender entrada");
            System.out.println("2. Ver promociones");
            System.out.println("3. Buscar entrada");
            System.out.println("4. Eliminar entrada");
            System.out.println("5. Ver disponibilidad");
            System.out.println("6. Salir");
            System.out.print("Ingrese opcion: ");
            
            if (!sc.hasNextInt()) {
                System.out.println("Error: Ingrese un numero del 1 al 6\n");
                sc.next();
                continue;
            }
            opcion = sc.nextInt();
            
            // ESTRUCTURA CONDICIONAL
            if (opcion == 1) {
                System.out.println("\n--- VENTA DE ENTRADA ---");
                System.out.print("Cantidad de entradas: ");
                
                if (!sc.hasNextInt()) {
                    System.out.println("Error: Debe ingresar un numero\n");
                    sc.next();
                    continue;
                }
                int cantidad = sc.nextInt();
                
                if (cantidad <= 0 || cantidad > disponibles) {
                    System.out.println("Error: Cantidad invalida\n");
                    continue;
                }
                
                System.out.print("Dia (1=Lun...7=Dom): ");
                int dia = sc.hasNextInt() ? sc.nextInt() : 1;
                
                System.out.println("Ubicacion: 1.VIP(50000) 2.Platea(35000) 3.General(25000)");
                System.out.print("Seleccione: ");
                int ubi = sc.hasNextInt() ? sc.nextInt() : 3;
                
                // Variables locales
                int precioUnit = ubi == 1 ? 50000 : ubi == 2 ? 35000 : 25000;
                String ubicNombre = ubi == 1 ? "VIP" : ubi == 2 ? "Platea" : "General";
                String estudiante = "", terceraEdad = "";
                
                // Validacion estudiante
                while (true) {
                    System.out.print("Es estudiante? (s/n/m): ");
                    estudiante = sc.next().toLowerCase();
                    if (estudiante.equals("s") || estudiante.equals("n")) break;
                    if (estudiante.equals("m")) {
                        estudiante = "m";
                        break;
                    }
                    System.out.println("Error: Ingrese 's', 'n' o 'm' para menu");
                }
                if (estudiante.equals("m")) continue;
                
                // Validacion tercera edad
                while (true) {
                    System.out.print("Es tercera edad? (s/n/m): ");
                    terceraEdad = sc.next().toLowerCase();
                    if (terceraEdad.equals("s") || terceraEdad.equals("n")) break;
                    if (terceraEdad.equals("m")) {
                        terceraEdad = "m";
                        break;
                    }
                    System.out.println("Error: Ingrese 's', 'n' o 'm' para menu");
                }
                if (terceraEdad.equals("m")) continue;
                
                // Calcular descuentos
                int desc = 0;
                String tipoCliente = "Normal";
                
                if (terceraEdad.equals("s")) {
                    desc = precioUnit * 15 / 100;
                    tipoCliente = estudiante.equals("s") ? "T.Edad/Est" : "T.Edad";
                } else if (estudiante.equals("s")) {
                    desc = precioUnit * 10 / 100;
                    tipoCliente = "Estudiante";
                }
                
                int precioFinal = precioUnit - desc;
                int total = precioFinal * cantidad;
                
                // Promociones
                if (dia == 2 && ubi == 3) {
                    total = precioFinal * ((cantidad + 1) / 2);
                    System.out.println("Promo Martes 2x1!");
                } else if (cantidad >= 5) {
                    total = total * 80 / 100;
                    System.out.println("20% desc grupal!");
                }
                
                // Guardar entradas
                for (int i = 0; i < cantidad; i++) {
                    teatro.numeroEntrada[totalVendidas] = totalVendidas + 1;
                    teatro.precio[totalVendidas] = precioFinal;
                    teatro.ubicacion[totalVendidas] = ubicNombre;
                    teatro.tipo[totalVendidas] = tipoCliente;
                    totalVendidas++;
                }
                
                disponibles -= cantidad;
                ingresos += total;
                descuentos += desc * cantidad;
                
                // Resumen
                System.out.println("\n=== RESUMEN ===");
                System.out.println("Cantidad: " + cantidad);
                System.out.println("Ubicacion: " + ubicNombre);
                System.out.println("Tipo: " + tipoCliente);
                System.out.println("Precio unit: $" + precioUnit);
                System.out.println("Descuento: -$" + desc);
                System.out.println("TOTAL: $" + total);
                System.out.println("Disponibles: " + disponibles + "\n");
                
            } else if (opcion == 2) {
                System.out.println("\n--- PROMOCIONES ---");
                System.out.println("* 10% estudiantes");
                System.out.println("* 15% tercera edad");
                System.out.println("* Martes 2x1 en General");
                System.out.println("* 20% por 5+ entradas\n");
                
            } else if (opcion == 3) {
                System.out.println("\n--- BUSCAR ENTRADA ---");
                System.out.print("Numero de entrada: ");
                if (!sc.hasNextInt()) {
                    System.out.println("Error\n");
                    sc.next();
                    continue;
                }
                int num = sc.nextInt();
                boolean encontrada = false;
                
                for (int i = 0; i < totalVendidas; i++) {
                    if (teatro.numeroEntrada[i] == num) {
                        System.out.println("Entrada #" + num);
                        System.out.println("Ubicacion: " + teatro.ubicacion[i]);
                        System.out.println("Tipo: " + teatro.tipo[i]);
                        System.out.println("Precio: $" + teatro.precio[i] + "\n");
                        encontrada = true;
                        break;
                    }
                }
                if (!encontrada) System.out.println("No encontrada\n");
                
            } else if (opcion == 4) {
                System.out.println("\n--- ELIMINAR ENTRADA ---");
                System.out.print("Numero a eliminar: ");
                if (!sc.hasNextInt()) {
                    System.out.println("Error\n");
                    sc.next();
                    continue;
                }
                int eliminar = sc.nextInt();
                boolean eliminada = false;
                
                for (int i = 0; i < totalVendidas; i++) {
                    if (teatro.numeroEntrada[i] == eliminar) {
                        ingresos -= teatro.precio[i];
                        teatro.numeroEntrada[i] = 0;
                        disponibles++;
                        System.out.println("Eliminada #" + eliminar);
                        System.out.println("Reembolso: $" + teatro.precio[i] + "\n");
                        eliminada = true;
                        break;
                    }
                }
                if (!eliminada) System.out.println("No encontrada\n");
                
            } else if (opcion == 5) {
                System.out.println("\n--- ESTADO TEATRO ---");
                System.out.println("Capacidad: " + capacidad);
                System.out.println("Vendidas: " + totalVendidas);
                System.out.println("Disponibles: " + disponibles);
                System.out.println("Ocupacion: " + (totalVendidas * 100 / capacidad) + "%\n");
                
            } else if (opcion == 6) {
                System.out.println("\n--- ESTADISTICAS FINALES ---");
                System.out.println("Total vendidas: " + totalVendidas);
                System.out.println("Ingresos: $" + ingresos);
                System.out.println("Descuentos: $" + descuentos);
                System.out.println("Gracias por usar el sistema");
                
            } else {
                System.out.println("Error: Opcion invalida\n");
            }
            
        } while (opcion != 6);
        
        sc.close();
    }
}