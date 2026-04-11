package com.mycompany.duocproyectos4;

import java.util.Scanner;

public class DuocProyectoS4 {
    
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        int opcion;
        String zona;
        int edad;
        int precio = 0;
        int descuento = 0;
        int total = 0;
        
        do {
            // menu con for
            System.out.println("\nTEATRO MORO");
            for (int i = 1; i <= 2; i++) {
                if (i == 1) {
                    System.out.println("1. Comprar entrada");
                }
                if (i == 2) {
                    System.out.println("2. Salir");
                }
            }
            
            System.out.print("Opcion: ");
            opcion = sc.nextInt();
            
            if (opcion == 1) {
                // mostrar zonas
                System.out.println("\nZonas:");
                System.out.println("A = 50000");
                System.out.println("B = 35000");
                System.out.println("C = 20000");
                
                System.out.print("Que zona quiere: ");
                zona = sc.next();
                
                // precios con if
                if (zona.equals("A") || zona.equals("a")) {
                    precio = 50000;
                } else if (zona.equals("B") || zona.equals("b")) {
                    precio = 35000;
                } else if (zona.equals("C") || zona.equals("c")) {
                    precio = 20000;
                } else {
                    System.out.println("zona incorrecta");
                    continue;
                }
                
                System.out.print("Su edad: ");
                edad = sc.nextInt();
                
                // validar edad
                if (edad < 0 || edad > 100) {
                    System.out.println("edad incorrecta");
                    continue;
                }
                
                // descuentos con if else
                if (edad >= 18 && edad <= 25) {
                    descuento = precio * 10 / 100;
                    System.out.println("descuento estudiante 10%");
                } else if (edad >= 65) {
                    descuento = precio * 15 / 100;
                    System.out.println("descuento tercera edad 15%");
                } else {
                    descuento = 0;
                }
                
                // calcular total con while
                int i = 0;
                while (i < 1) {
                    total = precio - descuento;
                    i++;
                }
                
                // resumen
                System.out.println("\nRESUMEN:");
                System.out.println("Zona: " + zona.toUpperCase());
                System.out.println("Precio base: " + precio);
                System.out.println("Descuento: " + descuento);
                System.out.println("Total: " + total);
                
                System.out.print("\nOtra compra? (s/n): ");
                String resp = sc.next();
                if (resp.equals("n") || resp.equals("N")) {
                    opcion = 2;
                }
            }
            
        } while (opcion != 2);
        
        System.out.println("chau");
    }
}