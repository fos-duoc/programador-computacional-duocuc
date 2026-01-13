package com.mycompany.dooiexp1s1;

public class Main {
    
    public static void main(String[] args) {
        
        System.out.println("COOPERATIVA RAICES DEL SUR");
        System.out.println("==========================\n");
        
        ProductoAgricola producto1 = new ProductoAgricola("Papas Chiloe", "Tuberculo", 1500.0, true);
        
        ProductoAgricola producto2 = new ProductoAgricola("Manzanas", "Fruta", 2000.0, false);
        
        ProductoAgricola producto3 = new ProductoAgricola();
        producto3.setNombre("Tomates");
        producto3.setTipo("Verdura");
        producto3.setPrecioPorKilo(1200.0);
        producto3.setExportable(true);
        
        System.out.println("Productos en inventario:");
        System.out.println(producto1);
        System.out.println();
        System.out.println(producto2);
        System.out.println();
        System.out.println(producto3);
        
        System.out.println("\n--- Prueba de getters ---");
        System.out.println("Nombre del producto 1: " + producto1.getNombre());
        System.out.println("Precio del producto 2: $" + producto2.getPrecioPorKilo());
        System.out.println("Es exportable producto 3: " + producto3.isExportable());
    }
}