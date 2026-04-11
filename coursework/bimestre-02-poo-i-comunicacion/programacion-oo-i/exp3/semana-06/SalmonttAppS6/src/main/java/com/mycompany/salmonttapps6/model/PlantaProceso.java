package com.mycompany.salmonttapps6.model;

/**
 * Subclase que representa una planta de proceso
 * Hereda de UnidadOperativa
 * @author Fuad Oñate
 */
public class PlantaProceso extends UnidadOperativa {
    
    private double capacidadProceso;
    
    public PlantaProceso() {
        super();
        this.capacidadProceso = 0.0;
    }
    
    public PlantaProceso(String nombre, String comuna, double capacidadProceso) {
        super(nombre, comuna);
        this.capacidadProceso = capacidadProceso;
    }
    
    public double getCapacidadProceso() {
        return capacidadProceso;
    }
    
    public void setCapacidadProceso(double capacidadProceso) {
        this.capacidadProceso = capacidadProceso;
    }
    
    @Override
    public String toString() {
        return "Planta de Proceso: " + nombre + 
               " | Comuna: " + comuna + 
               " | Capacidad: " + capacidadProceso + " ton/dia";
    }
}
