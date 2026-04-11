package com.mycompany.dooiexp1s2.app;

import com.mycompany.dooiexp1s2.model.Cliente;
import com.mycompany.dooiexp1s2.model.Direccion;

// Exp1_S2_Fuad_Onate
// Clase Main para probar Cliente y Direccion

public class Main {
    
    public static void main(String[] args) {
        
        System.out.println("PUERTOGAMES - DISTRIBUIDORA DE VIDEOJUEGOS");
        System.out.println("==========================================\n");
        
        // creo el primer cliente con el constructor con parametros
        Cliente cliente1 = new Cliente(
            "Juan Perez",
            "juan.perez@gmail.com", 
            "+56912345678",
            "Av. Libertad",
            1234,
            "Santiago Centro",
            "Santiago"
        );
        
        // muestro el primer cliente
        System.out.println("Cliente 1:");
        System.out.println(cliente1);
        System.out.println();
        
        // creo el segundo cliente con constructor vacio
        Cliente cliente2 = new Cliente();
        cliente2.setNombre("Maria Silva");
        cliente2.setCorreo("maria.silva@hotmail.com");
        cliente2.setTelefono("+56987654321");
        
        // creo la direccion por separado
        Direccion direccion2 = new Direccion();
        direccion2.setCalle("Calle Moneda");
        direccion2.setNumero(567);
        direccion2.setComuna("Providencia");
        direccion2.setCiudad("Santiago");
        cliente2.setDireccion(direccion2);
        
        // muestro el segundo cliente
        System.out.println("Cliente 2:");
        System.out.println(cliente2);
        System.out.println();
        
        // pruebo algunos getters
        System.out.println("Prueba de getters:");
        System.out.println("Nombre del cliente 1: " + cliente1.getNombre());
        System.out.println("Correo del cliente 2: " + cliente2.getCorreo());
        System.out.println("Comuna del cliente 1: " + cliente1.getDireccion().getComuna());
    }
}