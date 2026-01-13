package com.mycompany.salmonttapp.model;

/**
 * Clase CentroCultivo - Salmontt
 * Exp2_S5_Fuad_Onate
 */
public class CentroCultivo {
    
    private int id;
    private String nombre;
    private String comuna;
    private double toneladasProducidas;
    private int cantidadEmpleados;
    private Direccion direccion; // Composicion
    
    // Constructor vacio
    public CentroCultivo() {
        this.direccion = new Direccion();
    }
    
    // Constructor completo
    public CentroCultivo(int id, String nombre, String comuna, double toneladasProducidas, 
                         int cantidadEmpleados, Direccion direccion) {
        this.id = id;
        this.nombre = nombre;
        this.comuna = comuna;
        this.toneladasProducidas = toneladasProducidas;
        this.cantidadEmpleados = cantidadEmpleados;
        this.direccion = direccion;
    }
    
    // Getters y Setters con validacion
    public int getId() {
        return id;
    }
    
    public void setId(int id) throws Exception {
        if (id <= 0) {
            throw new Exception("ID debe ser mayor a 0");
        }
        this.id = id;
    }
    
    public String getNombre() {
        return nombre;
    }
    
    public void setNombre(String nombre) throws Exception {
        if (nombre == null || nombre.isEmpty()) {
            throw new Exception("Nombre no puede estar vacio");
        }
        this.nombre = nombre;
    }
    
    public String getComuna() {
        return comuna;
    }
    
    public void setComuna(String comuna) throws Exception {
        if (comuna == null || comuna.isEmpty()) {
            throw new Exception("Comuna no puede estar vacia");
        }
        this.comuna = comuna;
    }
    
    public double getToneladasProducidas() {
        return toneladasProducidas;
    }
    
    public void setToneladasProducidas(double toneladasProducidas) throws Exception {
        if (toneladasProducidas < 0) {
            throw new Exception("Toneladas no puede ser negativo");
        }
        this.toneladasProducidas = toneladasProducidas;
    }
    
    public int getCantidadEmpleados() {
        return cantidadEmpleados;
    }
    
    public void setCantidadEmpleados(int cantidadEmpleados) throws Exception {
        if (cantidadEmpleados < 0) {
            throw new Exception("Cantidad empleados no puede ser negativo");
        }
        this.cantidadEmpleados = cantidadEmpleados;
    }
    
    public Direccion getDireccion() {
        return direccion;
    }
    
    public void setDireccion(Direccion direccion) {
        this.direccion = direccion;
    }
    
    @Override
    public String toString() {
        return "Centro #" + id + ": " + nombre + 
               " [Comuna: " + comuna + 
               ", Produccion: " + toneladasProducidas + " ton" +
               ", Empleados: " + cantidadEmpleados +
               ", Direccion: " + direccion + "]";
    }
}
