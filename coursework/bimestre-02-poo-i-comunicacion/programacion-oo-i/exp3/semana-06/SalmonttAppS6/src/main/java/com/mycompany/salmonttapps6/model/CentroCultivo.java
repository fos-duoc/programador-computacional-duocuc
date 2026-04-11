package com.mycompany.salmonttapps6.model;

/**
 * Subclase que representa un centro de cultivo
 * Hereda de UnidadOperativa
 * @author Fuad Oñate
 */
public class CentroCultivo extends UnidadOperativa {
    
    private double toneladasProduccion;
    
    public CentroCultivo() {
        super();
        this.toneladasProduccion = 0.0;
    }
    
    public CentroCultivo(String nombre, String comuna, double toneladasProduccion) {
        super(nombre, comuna);
        this.toneladasProduccion = toneladasProduccion;
    }
    
    public double getToneladasProduccion() {
        return toneladasProduccion;
    }
    
    public void setToneladasProduccion(double toneladasProduccion) {
        this.toneladasProduccion = toneladasProduccion;
    }
    
    @Override
    public String toString() {
        return "Centro de Cultivo: " + nombre + 
               " | Comuna: " + comuna + 
               " | Produccion: " + toneladasProduccion + " toneladas";
    }
}
