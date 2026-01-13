package com.mycompany.duocprojects3;

// sistema teatro moro

import java.util.Scanner;

public class DuocProjectS3 {
    
    public static void main(String[] args) {
        
        Scanner leer = new Scanner(System.in);
        
        // variables
        int tipoEntrada;
        int tipoPersona;
        int precioBase = 0;
        int descuentoEstudiante = 0;
        int precioFinal = 0;
        double porcentaje = 0;
        boolean entradaValida = true;
        
        System.out.println("TEATRO MORO - VENTA");
        System.out.println("");
        System.out.println("1. VIP");
        System.out.println("2. Platea baja");
        System.out.println("3. Platea alta");
        System.out.println("4. Palcos");
        System.out.print("Tipo de entrada: ");
        tipoEntrada = leer.nextInt();
        
        // validar entrada
        if (tipoEntrada < 1 || tipoEntrada > 4) {
            System.out.println("Error: opcion de entrada no valida");
            entradaValida = false;
        }
        
        if (entradaValida) {
            System.out.println("");
            System.out.println("1. Estudiante");
            System.out.println("2. Publico general");
            System.out.print("Tipo de persona: ");
            tipoPersona = leer.nextInt();
            
            // validar tipo persona
            if (tipoPersona < 1 || tipoPersona > 2) {
                System.out.println("Error: tipo de persona no valido");
                entradaValida = false;
            }
            
            if (entradaValida) {
                // precios base
                if (tipoEntrada == 1) {
                    precioBase = 35000;
                    descuentoEstudiante = 15000;
                } else if (tipoEntrada == 2) {
                    precioBase = 25000;
                    descuentoEstudiante = 10000;
                } else if (tipoEntrada == 3) {
                    precioBase = 15000;
                    descuentoEstudiante = 5000;
                } else if (tipoEntrada == 4) {
                    precioBase = 11000;
                    descuentoEstudiante = 6000;
                }
                
                // calcular precio con descuento si es estudiante
                if (tipoPersona == 1) {
                    // es estudiante, aplico descuento
                    precioFinal = precioBase - descuentoEstudiante;
                    porcentaje = (descuentoEstudiante * 100) / precioBase;
                } else {
                    // publico general
                    precioFinal = precioBase;
                    porcentaje = 0;
                }
                
                // mostrar resultado
                System.out.println("");
                System.out.println("Total a pagar: $" + precioFinal);
                
                if (porcentaje > 0) {
                    System.out.println("Descuento aplicado: " + porcentaje + "%");
                }
                
                System.out.println("Gracias por su compra, disfrute la funcion");
            }
        }
    }
}