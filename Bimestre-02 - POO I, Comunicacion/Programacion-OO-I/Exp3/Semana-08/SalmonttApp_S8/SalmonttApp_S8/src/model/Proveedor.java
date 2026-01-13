package model;

/**
 * Clase que representa un proveedor de Salmontt
 * @author Fuad Oñate
 */
public class Proveedor extends Persona {
    
    private String empresa;
    private String rubro;
    private String telefono;
    
    public Proveedor() {
        super();
        this.empresa = "";
        this.rubro = "";
        this.telefono = "";
    }
    
    public Proveedor(String nombre, String rut, String email, 
                     String empresa, String rubro, String telefono) {
        super(nombre, rut, email);
        this.empresa = empresa;
        this.rubro = rubro;
        this.telefono = telefono;
    }
    
    // Getters y Setters
    public String getEmpresa() { return empresa; }
    public void setEmpresa(String empresa) { this.empresa = empresa; }
    public String getRubro() { return rubro; }
    public void setRubro(String rubro) { this.rubro = rubro; }
    public String getTelefono() { return telefono; }
    public void setTelefono(String telefono) { this.telefono = telefono; }
    
    @Override
    public void mostrarResumen() {
        System.out.println("[PROVEEDOR] " + nombre + " (" + rut + ") - " + 
                          empresa + " | Rubro: " + rubro + 
                          " | Tel: " + telefono);
    }
    
    @Override
    public String getTipo() { return "Proveedor"; }
    
    @Override
    public String toString() {
        return "Proveedor: " + nombre + " | RUT: " + rut + " | Empresa: " + empresa + 
               " | Rubro: " + rubro + " | Tel: " + telefono;
    }
}
