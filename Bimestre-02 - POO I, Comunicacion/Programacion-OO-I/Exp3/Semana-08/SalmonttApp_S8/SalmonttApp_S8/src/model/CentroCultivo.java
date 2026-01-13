package model;

/**
 * Subclase que representa un centro de cultivo de salmon
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
    
    public double getToneladasProduccion() { return toneladasProduccion; }
    public void setToneladasProduccion(double toneladas) { this.toneladasProduccion = toneladas; }
    
    @Override
    public void mostrarResumen() {
        System.out.println("[CENTRO CULTIVO] " + nombre + " - " + comuna + 
                          " | Produccion: " + toneladasProduccion + " ton");
    }
    
    @Override
    public String getTipo() { return "Centro de Cultivo"; }
    
    @Override
    public String toString() {
        return "Centro de Cultivo: " + nombre + " | Comuna: " + comuna + 
               " | Produccion: " + toneladasProduccion + " toneladas";
    }
}
