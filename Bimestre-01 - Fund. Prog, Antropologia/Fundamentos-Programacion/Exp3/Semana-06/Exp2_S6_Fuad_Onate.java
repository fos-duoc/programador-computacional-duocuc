package com.mycompany.duocproyectos6;

import java.util.Scanner;

public class DuocProyectoS6 {
    
    // Sistema de reservas con transiciones de estado:
    // disponible -> reservado (24hrs limite) -> vendido
    // disponible -> vendido (compra directa)
    
    // variables de instancia
    int[] numeroAsiento = new int[50];
    String[] estadoAsiento = new String[50]; // disponible -> reservado -> vendido
    String[] nombreCliente = new String[50];
    int[] precioAsiento = new int[50];
    
    // variables estaticas (contadores globales)
    static int totalDisponibles = 50;
    static int totalReservados = 0;
    static int totalVendidos = 0;
    
    public static void main(String[] args) {
        
        DuocProyectoS6 teatro = new DuocProyectoS6();
        Scanner sc = new Scanner(System.in);
        
        // variables locales
        String nombreTeatro = "Teatro Moro";
        int capacidad = 50;
        int precioBase = 30000;
        int opcion = 0;
        int asiento = 0;
        String accion = "";
        
        // inicializar asientos
        for (int i = 0; i < 50; i++) {
            teatro.numeroAsiento[i] = i + 1;
            teatro.estadoAsiento[i] = "disponible";
            teatro.nombreCliente[i] = "";
            teatro.precioAsiento[i] = 0;
        }
        
        System.out.println("=== " + nombreTeatro + " ===");
        System.out.println("Capacidad: " + capacidad + " asientos");
        
        do {
            System.out.println("\n--- MENU PRINCIPAL ---");
            System.out.println("1. Reservar asiento");
            System.out.println("2. Modificar reserva");
            System.out.println("3. Comprar entrada");
            System.out.println("4. Imprimir boleta");
            System.out.println("5. Ver asientos");
            System.out.println("6. Salir");
            System.out.print("Opcion >> ");
            
            try {
                opcion = sc.nextInt();
                sc.nextLine(); // limpiar
            } catch (Exception e) {
                System.out.println("Error: ingrese un numero");
                sc.nextLine();
                continue;
            }
            
            // PUNTO DE DEPURACION 1
            System.out.println("[DEBUG] Opcion seleccionada: " + opcion);
            
            if (opcion == 1) {
                // RESERVAR
                System.out.println("\n--- RESERVAR ASIENTO ---");
                
                // mostrar disponibles
                System.out.println("Asientos disponibles:");
                for (int i = 0; i < 50; i++) {
                    if (teatro.estadoAsiento[i].equals("disponible")) {
                        System.out.print((i + 1) + " ");
                    }
                }
                System.out.println();
                
                System.out.print("Numero de asiento >> ");
                asiento = sc.nextInt();
                sc.nextLine();
                
                // validar asiento
                if (asiento < 1 || asiento > 50) {
                    System.out.println("Asiento invalido");
                    continue;
                }
                
                // PUNTO DE DEPURACION 2
                System.out.println("[DEBUG] Estado actual asiento " + asiento + ": " + teatro.estadoAsiento[asiento - 1]);
                
                // Transicion: disponible -> reservado (24 horas para confirmar compra)
                if (teatro.estadoAsiento[asiento - 1].equals("disponible")) {
                    System.out.print("Nombre cliente >> ");
                    String nombre = sc.nextLine();
                    
                    teatro.estadoAsiento[asiento - 1] = "reservado";
                    teatro.nombreCliente[asiento - 1] = nombre;
                    teatro.precioAsiento[asiento - 1] = precioBase;
                    
                    totalDisponibles--;
                    totalReservados++;
                    
                    System.out.println("Asiento " + asiento + " reservado para " + nombre);
                    System.out.println("Tiene 24 horas para confirmar la compra");
                } else {
                    System.out.println("Asiento no disponible");
                }
                
            } else if (opcion == 2) {
                // MODIFICAR RESERVA
                System.out.println("\n--- MODIFICAR RESERVA ---");
                System.out.print("Asiento actual >> ");
                int asientoActual = sc.nextInt();
                sc.nextLine();
                
                if (teatro.estadoAsiento[asientoActual - 1].equals("reservado")) {
                    System.out.print("Nuevo asiento >> ");
                    int nuevoAsiento = sc.nextInt();
                    sc.nextLine();
                    
                    if (teatro.estadoAsiento[nuevoAsiento - 1].equals("disponible")) {
                        // cambiar asiento
                        String nombreTemp = teatro.nombreCliente[asientoActual - 1];
                        
                        // liberar actual
                        teatro.estadoAsiento[asientoActual - 1] = "disponible";
                        teatro.nombreCliente[asientoActual - 1] = "";
                        teatro.precioAsiento[asientoActual - 1] = 0;
                        
                        // ocupar nuevo
                        teatro.estadoAsiento[nuevoAsiento - 1] = "reservado";
                        teatro.nombreCliente[nuevoAsiento - 1] = nombreTemp;
                        teatro.precioAsiento[nuevoAsiento - 1] = precioBase;
                        
                        System.out.println("Reserva modificada: asiento " + nuevoAsiento);
                    } else {
                        System.out.println("Nuevo asiento no disponible");
                    }
                } else {
                    System.out.println("No hay reserva en ese asiento");
                }
                
            } else if (opcion == 3) {
                // COMPRAR
                System.out.println("\n--- COMPRAR ENTRADA ---");
                System.out.print("Numero de asiento >> ");
                asiento = sc.nextInt();
                sc.nextLine();
                
                if (asiento < 1 || asiento > 50) {
                    System.out.println("Asiento invalido");
                    continue;
                }
                
                // PUNTO DE DEPURACION 3
                System.out.println("[DEBUG] Procesando compra asiento " + asiento);
                
                if (teatro.estadoAsiento[asiento - 1].equals("reservado")) {
                    // Transicion: reservado -> vendido (confirmar reserva existente)
                    teatro.estadoAsiento[asiento - 1] = "vendido";
                    totalReservados--;
                    totalVendidos++;
                    
                    System.out.println("Compra exitosa!");
                    System.out.println("Cliente: " + teatro.nombreCliente[asiento - 1]);
                    System.out.println("Asiento: " + asiento);
                    System.out.println("Total a pagar: $" + teatro.precioAsiento[asiento - 1]);
                    
                } else if (teatro.estadoAsiento[asiento - 1].equals("disponible")) {
                    // Transicion directa: disponible -> vendido (sin reserva previa)
                    System.out.print("Nombre cliente >> ");
                    String nombre = sc.nextLine();
                    
                    teatro.estadoAsiento[asiento - 1] = "vendido";
                    teatro.nombreCliente[asiento - 1] = nombre;
                    teatro.precioAsiento[asiento - 1] = precioBase;
                    
                    totalDisponibles--;
                    totalVendidos++;
                    
                    System.out.println("Compra exitosa!");
                    System.out.println("Cliente: " + nombre);
                    System.out.println("Asiento: " + asiento);
                    System.out.println("Total a pagar: $" + precioBase);
                    
                } else {
                    System.out.println("Asiento ya vendido");
                }
                
            } else if (opcion == 4) {
                // IMPRIMIR BOLETA
                System.out.println("\n--- IMPRIMIR BOLETA ---");
                System.out.print("Numero de asiento >> ");
                asiento = sc.nextInt();
                sc.nextLine();
                
                if (teatro.estadoAsiento[asiento - 1].equals("vendido")) {
                    System.out.println("\n=======================");
                    System.out.println("     BOLETA TEATRO MORO");
                    System.out.println("=======================");
                    System.out.println("Cliente: " + teatro.nombreCliente[asiento - 1]);
                    System.out.println("Asiento: " + asiento);
                    System.out.println("Fila: " + ((asiento - 1) / 10 + 1));
                    System.out.println("Columna: " + ((asiento - 1) % 10 + 1));
                    System.out.println("Precio: $" + teatro.precioAsiento[asiento - 1]);
                    System.out.println("Estado: PAGADO");
                    System.out.println("=======================");
                    System.out.println("Gracias por su compra!");
                } else {
                    System.out.println("No hay boleta para ese asiento");
                }
                
            } else if (opcion == 5) {
                // VER ASIENTOS
                System.out.println("\n--- ESTADO ASIENTOS ---");
                System.out.println("D=Disponible R=Reservado V=Vendido");
                System.out.println();
                
                // estructura de control 1: for anidado para mostrar matriz
                for (int fila = 0; fila < 5; fila++) {
                    System.out.print("Fila " + (fila + 1) + ": ");
                    for (int col = 0; col < 10; col++) {
                        int pos = fila * 10 + col;
                        if (teatro.estadoAsiento[pos].equals("disponible")) {
                            System.out.print("[D]");
                        } else if (teatro.estadoAsiento[pos].equals("reservado")) {
                            System.out.print("[R]");
                        } else {
                            System.out.print("[V]");
                        }
                    }
                    System.out.println();
                }
                
                System.out.println("\nResumen:");
                System.out.println("Disponibles: " + totalDisponibles);
                System.out.println("Reservados: " + totalReservados);
                System.out.println("Vendidos: " + totalVendidos);
                
            } else if (opcion == 6) {
                System.out.println("\nGracias por usar el sistema!");
            }
            
        } while (opcion != 6); // estructura de control 2: do-while
        
        sc.close();
    }
}