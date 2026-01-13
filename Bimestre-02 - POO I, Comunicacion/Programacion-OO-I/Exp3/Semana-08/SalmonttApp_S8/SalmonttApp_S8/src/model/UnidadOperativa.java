package model;

/**
 * Superclase abstracta que representa una unidad operativa de Salmontt
 * Implementa la interfaz Registrable
 * 
 * @author Fuad Oñate
 * Desarrollo Orientado a Objetos I - Semana 8
 */
public abstract class UnidadOperativa implements Registrable {
    
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
    
    // Getters y Setters
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getComuna() { return comuna; }
    public void setComuna(String comuna) { this.comuna = comuna; }
    
    @Override
    public abstract void mostrarResumen();
    
    @Override
    public abstract String getTipo();
}
