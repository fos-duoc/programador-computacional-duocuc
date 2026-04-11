package model;

/**
 * Subclase que representa una planta de proceso de salmon
 * Hereda de UnidadOperativa y agrega atributos especificos
 * 
 * @author Fuad Oñate
 * Desarrollo Orientado a Objetos I - Semana 6
 */
public class PlantaProceso extends UnidadOperativa {
    
    // Atributo especifico de planta de proceso
    private double capacidadProceso;
    
    /**
     * Constructor sin parametros
     * Usa super() para inicializar atributos heredados
     */
    public PlantaProceso() {
        super();
        this.capacidadProceso = 0.0;
    }
    
    /**
     * Constructor con parametros
     * Usa super(nombre, comuna) para inicializar atributos de la superclase
     * @param nombre Nombre de la planta de proceso
     * @param comuna Comuna donde se ubica
     * @param capacidadProceso Capacidad de procesamiento en toneladas/dia
     */
    public PlantaProceso(String nombre, String comuna, double capacidadProceso) {
        super(nombre, comuna);
        this.capacidadProceso = capacidadProceso;
    }
    
    // Getter
    public double getCapacidadProceso() {
        return capacidadProceso;
    }
    
    // Setter
    public void setCapacidadProceso(double capacidadProceso) {
        this.capacidadProceso = capacidadProceso;
    }
    
    /**
     * Sobrescribe toString() para mostrar toda la informacion
     * Incluye atributos heredados y propios
     * @return String con informacion completa de la planta
     */
    @Override
    public String toString() {
        return "Planta de Proceso: " + nombre + 
               " | Comuna: " + comuna + 
               " | Capacidad: " + capacidadProceso + " ton/dia";
    }
}
