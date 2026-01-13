package com.mycompany.salmonttapps6.model;

/**
 * Clase base que representa una unidad operativa de Salmontt
 * @author Fuad Oñate
 */
public class UnidadOperativa {
    
    protected String nombre;
    protected String comuna;
    
    public UnidadOperativa() {
        this.nombre = "";
        this.comuna = "";
    }
    
    public UnidadOperativa(String nombre, String comuna) {
        this.nombre = nombre;
        this.comuna = comuna;
    }
    
    public String getNombre() {
        return nombre;
    }
    
    public String getComuna() {
        return comuna;
    }
    
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    public void setComuna(String comuna) {
        this.comuna = comuna;
    }
    
    @Override
    public String toString() {
        return "Unidad: " + nombre + " | Comuna: " + comuna;
    }
}
