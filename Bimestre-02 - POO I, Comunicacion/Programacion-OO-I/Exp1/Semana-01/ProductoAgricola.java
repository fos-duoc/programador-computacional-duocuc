package com.mycompany.dooiexp1s1;

public class ProductoAgricola {
    
    private String nombre;
    private String tipo;
    private double precioPorKilo;
    private boolean exportable;
    
    public ProductoAgricola() {
        this.nombre = "sin definir";
        this.tipo = "sin tipo";
        this.precioPorKilo = 0.0;
        this.exportable = false;
    }
    
    public ProductoAgricola(String nombre, String tipo, double precioPorKilo, boolean exportable) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.precioPorKilo = precioPorKilo;
        this.exportable = exportable;
    }
    
    public String getNombre() {
        return nombre;
    }
    
    public String getTipo() {
        return tipo;
    }
    
    public double getPrecioPorKilo() {
        return precioPorKilo;
    }
    
    public boolean isExportable() {
        return exportable;
    }
    
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
    
    public void setPrecioPorKilo(double precioPorKilo) {
        this.precioPorKilo = precioPorKilo;
    }
    
    public void setExportable(boolean exportable) {
        this.exportable = exportable;
    }
    
    @Override
    public String toString() {
        return "ProductoAgricola: " + nombre + 
               ", Tipo: " + tipo + 
               ", Precio: $" + precioPorKilo + 
               ", Exportable: " + (exportable ? "Si" : "No");
    }
}