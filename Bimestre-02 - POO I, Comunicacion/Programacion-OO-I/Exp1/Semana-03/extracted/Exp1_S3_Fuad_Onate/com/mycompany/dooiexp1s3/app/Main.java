package com.mycompany.dooiexp1s3.app;

import com.mycompany.dooiexp1s3.model.*;
import com.mycompany.dooiexp1s3.exceptions.ValidacionException;

// Exp1_S3_Fuad_Onate
// Clase Main para probar el sistema Salmontt

public class Main {
    
    public static void main(String[] args) {
        
        System.out.println("=========================================");
        System.out.println("    SALMONTT - SISTEMA DE EMPLEADOS     ");
        System.out.println("=========================================\n");
        
        // Prueba 1: Crear empleado valido
        System.out.println("PRUEBA 1: Crear empleado valido");
        System.out.println("---------------------------------");
        try {
            Empleado emp1 = new Empleado(
                "12.345.678-9",
                "Juan Perez Gonzalez",
                35,
                "+56987654321",
                "Av. Costanera",
                1500,
                "Puerto Varas",
                "Puerto Montt",
                "EMP-0001",
                "Supervisor",
                "Cultivo",
                1500000
            );
            
            System.out.println(emp1);
            System.out.println("\n✓ Empleado creado exitosamente\n");
            
        } catch (ValidacionException e) {
            System.out.println("✗ Error: " + e.getMessage());
        }
        
        // Prueba 2: Crear persona con validaciones
        System.out.println("\nPRUEBA 2: Crear persona con validaciones");
        System.out.println("------------------------------------------");
        try {
            Persona persona1 = new Persona();
            
            // seteo valores uno por uno para probar validaciones
            persona1.setRut("98.765.432-1");
            persona1.setNombre("Maria Silva Rodriguez");
            persona1.setEdad(28);
            persona1.setTelefono("56912345678");
            
            // creo direccion por separado
            Direccion dir = new Direccion();
            dir.setCalle("Calle Benavente");
            dir.setNumero(789);
            dir.setComuna("Puerto Montt");
            dir.setCiudad("Puerto Montt");
            persona1.setDireccion(dir);
            
            System.out.println("=== PERSONA ===" );
            System.out.println(persona1);
            System.out.println("\n✓ Persona creada exitosamente\n");
            
        } catch (ValidacionException e) {
            System.out.println("✗ Error: " + e.getMessage());
        }
        
        // Prueba 3: Validacion de RUT invalido
        System.out.println("\nPRUEBA 3: Validacion de RUT invalido");
        System.out.println("--------------------------------------");
        try {
            Empleado emp2 = new Empleado();
            emp2.setRut("123");  // RUT muy corto
            
        } catch (ValidacionException e) {
            System.out.println("✓ Validacion correcta - " + e.getMessage());
        }
        
        // Prueba 4: Validacion de edad invalida
        System.out.println("\nPRUEBA 4: Validacion de edad invalida");
        System.out.println("---------------------------------------");
        try {
            Persona persona2 = new Persona();
            persona2.setEdad(16);  // menor de 18
            
        } catch (ValidacionException e) {
            System.out.println("✓ Validacion correcta - " + e.getMessage());
        }
        
        // Prueba 5: Validacion de cargo invalido
        System.out.println("\nPRUEBA 5: Validacion de cargo invalido");
        System.out.println("----------------------------------------");
        try {
            Empleado emp3 = new Empleado();
            emp3.setCargo("Vendedor");  // cargo no permitido
            
        } catch (ValidacionException e) {
            System.out.println("✓ Validacion correcta - " + e.getMessage());
        }
        
        // Prueba 6: Validacion de sueldo invalido
        System.out.println("\nPRUEBA 6: Validacion de sueldo invalido");
        System.out.println("-----------------------------------------");
        try {
            Empleado emp4 = new Empleado();
            emp4.setSueldo(300000);  // menor al minimo
            
        } catch (ValidacionException e) {
            System.out.println("✓ Validacion correcta - " + e.getMessage());
        }
        
        // Prueba 7: Crear empleado completo con todos los valores
        System.out.println("\nPRUEBA 7: Empleado completo del area Proceso");
        System.out.println("----------------------------------------------");
        try {
            Empleado empProceso = new Empleado(
                "15.888.999-K",
                "Carlos Munoz Soto",
                42,
                "56956781234",
                "Pasaje Los Alerces",
                234,
                "Alerce",
                "Puerto Montt",
                "EMP-0025",
                "Jefe",
                "Proceso",
                2800000
            );
            
            System.out.println(empProceso);
            System.out.println("\n✓ Empleado del area Proceso creado exitosamente\n");
            
        } catch (ValidacionException e) {
            System.out.println("✗ Error: " + e.getMessage());
        }
        
        // Prueba 8: Validacion de codigo empleado invalido
        System.out.println("\nPRUEBA 8: Validacion de codigo empleado");
        System.out.println("-----------------------------------------");
        try {
            Empleado emp5 = new Empleado();
            emp5.setCodigo("E-001");  // formato incorrecto
            
        } catch (ValidacionException e) {
            System.out.println("✓ Validacion correcta - " + e.getMessage());
        }
        
        // Prueba 9: Validacion de telefono invalido
        System.out.println("\nPRUEBA 9: Validacion de telefono");
        System.out.println("----------------------------------");
        try {
            Persona persona3 = new Persona();
            persona3.setTelefono("abc123");  // letras en telefono
            
        } catch (ValidacionException e) {
            System.out.println("✓ Validacion correcta - " + e.getMessage());
        }
        
        // Resumen final
        System.out.println("\n=========================================");
        System.out.println("       PRUEBAS FINALIZADAS              ");
        System.out.println("=========================================");
        System.out.println("Sistema Salmontt - Gestion de Empleados");
        System.out.println("Validaciones y excepciones funcionando correctamente");
    }
}
