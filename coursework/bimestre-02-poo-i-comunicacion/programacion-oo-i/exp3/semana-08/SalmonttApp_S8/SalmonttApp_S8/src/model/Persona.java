package model;

/**
 * Superclase abstracta para entidades tipo persona
 * @author Fuad Oñate
 */
public abstract class Persona implements Registrable {
    
    protected String nombre;
    protected String rut;
    protected String email;
    
    public Persona() {
        this.nombre = "";
        this.rut = "";
        this.email = "";
    }
    
    public Persona(String nombre, String rut, String email) {
        this.nombre = nombre;
        this.rut = rut;
        this.email = email;
    }
    
    // Getters y Setters
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getRut() { return rut; }
    public void setRut(String rut) { this.rut = rut; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    @Override
    public abstract void mostrarResumen();
    
    @Override
    public abstract String getTipo();
}
