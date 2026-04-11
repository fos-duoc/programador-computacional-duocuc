package model;

/**
 * Subclase que representa una planta de proceso
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
    
    public double getCapacidadProceso() { return capacidadProceso; }
    public void setCapacidadProceso(double capacidad) { this.capacidadProceso = capacidad; }
    
    @Override
    public void mostrarResumen() {
        System.out.println("[PLANTA PROCESO] " + nombre + " - " + comuna + 
                          " | Capacidad: " + capacidadProceso + " ton/dia");
    }
    
    @Override
    public String getTipo() { return "Planta de Proceso"; }
    
    @Override
    public String toString() {
        return "Planta de Proceso: " + nombre + " | Comuna: " + comuna + 
               " | Capacidad: " + capacidadProceso + " ton/dia";
    }
}
