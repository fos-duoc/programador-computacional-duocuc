package model;

/**
 * Clase que representa un empleado de Salmontt
 * @author Fuad Oñate
 */
public class Empleado extends Persona {
    
    private String cargo;
    private String departamento;
    private int sueldoBase;
    
    public Empleado() {
        super();
        this.cargo = "";
        this.departamento = "";
        this.sueldoBase = 0;
    }
    
    public Empleado(String nombre, String rut, String email, 
                    String cargo, String departamento, int sueldoBase) {
        super(nombre, rut, email);
        this.cargo = cargo;
        this.departamento = departamento;
        this.sueldoBase = sueldoBase;
    }
    
    // Getters y Setters
    public String getCargo() { return cargo; }
    public void setCargo(String cargo) { this.cargo = cargo; }
    public String getDepartamento() { return departamento; }
    public void setDepartamento(String depto) { this.departamento = depto; }
    public int getSueldoBase() { return sueldoBase; }
    public void setSueldoBase(int sueldo) { this.sueldoBase = sueldo; }
    
    @Override
    public void mostrarResumen() {
        System.out.println("[EMPLEADO] " + nombre + " (" + rut + ") - " + 
                          cargo + " | Depto: " + departamento + 
                          " | Sueldo: $" + sueldoBase);
    }
    
    @Override
    public String getTipo() { return "Empleado"; }
    
    @Override
    public String toString() {
        return "Empleado: " + nombre + " | RUT: " + rut + " | Cargo: " + cargo + 
               " | Depto: " + departamento + " | Sueldo: $" + sueldoBase;
    }
}
