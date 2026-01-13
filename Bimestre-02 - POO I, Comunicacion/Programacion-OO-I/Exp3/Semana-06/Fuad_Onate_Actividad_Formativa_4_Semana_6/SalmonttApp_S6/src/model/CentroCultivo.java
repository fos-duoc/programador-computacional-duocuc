package model;

/**
 * Subclase que representa un centro de cultivo de salmon
 * Hereda de UnidadOperativa y agrega atributos especificos
 * 
 * @author Fuad Oñate
 * Desarrollo Orientado a Objetos I - Semana 6
 */
public class CentroCultivo extends UnidadOperativa {
    
    // Atributo especifico de centro de cultivo
    private double toneladasProduccion;
    
    /**
     * Constructor sin parametros
     * Usa super() para inicializar atributos heredados
     */
    public CentroCultivo() {
        super();
        this.toneladasProduccion = 0.0;
    }
    
    /**
     * Constructor con parametros
     * Usa super(nombre, comuna) para inicializar atributos de la superclase
     * @param nombre Nombre del centro de cultivo
     * @param comuna Comuna donde se ubica
     * @param toneladasProduccion Toneladas de salmon producidas
     */
    public CentroCultivo(String nombre, String comuna, double toneladasProduccion) {
        super(nombre, comuna);
        this.toneladasProduccion = toneladasProduccion;
    }
    
    // Getter
    public double getToneladasProduccion() {
        return toneladasProduccion;
    }
    
    // Setter
    public void setToneladasProduccion(double toneladasProduccion) {
        this.toneladasProduccion = toneladasProduccion;
    }
    
    /**
     * Sobrescribe toString() para mostrar toda la informacion
     * Incluye atributos heredados y propios
     * @return String con informacion completa del centro
     */
    @Override
    public String toString() {
        return "Centro de Cultivo: " + nombre + 
               " | Comuna: " + comuna + 
               " | Produccion: " + toneladasProduccion + " toneladas";
    }
}
