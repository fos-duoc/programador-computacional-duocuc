package model;

/**
 * Clase base que representa una unidad operativa de Salmontt
 * Contiene atributos comunes a todas las unidades
 * 
 * @author Fuad Oñate
 * Desarrollo Orientado a Objetos I - Semana 6
 */
public class UnidadOperativa {
    
    // Atributos comunes heredables
    protected String nombre;
    protected String comuna;
    
    /**
     * Constructor sin parametros
     */
    public UnidadOperativa() {
        this.nombre = "";
        this.comuna = "";
    }
    
    /**
     * Constructor con parametros
     * @param nombre Nombre de la unidad operativa
     * @param comuna Comuna donde se ubica
     */
    public UnidadOperativa(String nombre, String comuna) {
        this.nombre = nombre;
        this.comuna = comuna;
    }
    
    // Getters
    public String getNombre() {
        return nombre;
    }
    
    public String getComuna() {
        return comuna;
    }
    
    // Setters
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    public void setComuna(String comuna) {
        this.comuna = comuna;
    }
    
    /**
     * Metodo toString de la clase base
     * @return String con informacion de la unidad
     */
    @Override
    public String toString() {
        return "Unidad: " + nombre + " | Comuna: " + comuna;
    }
}
