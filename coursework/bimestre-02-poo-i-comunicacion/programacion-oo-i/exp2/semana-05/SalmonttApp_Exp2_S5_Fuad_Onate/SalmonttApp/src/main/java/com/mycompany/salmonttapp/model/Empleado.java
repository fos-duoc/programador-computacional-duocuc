package com.mycompany.salmonttapp.model;

/**
 * Clase Empleado - Salmontt
 * Exp2_S5_Fuad_Onate
 */
public class Empleado {
    
    private String rut;
    private String nombre;
    private String cargo;
    private String area;
    private int sueldo;
    private Direccion direccion; // Composicion
    
    // Constructor vacio
    public Empleado() {
        this.direccion = new Direccion();
    }
    
    // Constructor completo
    public Empleado(String rut, String nombre, String cargo, String area, int sueldo, Direccion direccion) {
        this.rut = rut;
        this.nombre = nombre;
        this.cargo = cargo;
        this.area = area;
        this.sueldo = sueldo;
        this.direccion = direccion;
    }
    
    // Getters y Setters con validacion
    public String getRut() {
        return rut;
    }
    
    public void setRut(String rut) throws Exception {
        if (rut == null || rut.isEmpty()) {
            throw new Exception("RUT no puede estar vacio");
        }
        // Validacion formato chileno basico
        if (!rut.matches("\\d{1,2}\\.\\d{3}\\.\\d{3}-[\\dkK]")) {
            throw new Exception("Formato RUT invalido (ej: 12.345.678-9)");
        }
        this.rut = rut;
    }
    
    public String getNombre() {
        return nombre;
    }
    
    public void setNombre(String nombre) throws Exception {
        if (nombre == null || nombre.isEmpty()) {
            throw new Exception("Nombre no puede estar vacio");
        }
        this.nombre = nombre;
    }
    
    public String getCargo() {
        return cargo;
    }
    
    public void setCargo(String cargo) throws Exception {
        String[] cargosValidos = {"Operario", "Supervisor", "Jefe", "Gerente", "Administrativo"};
        boolean valido = false;
        for (String c : cargosValidos) {
            if (c.equalsIgnoreCase(cargo)) {
                valido = true;
                break;
            }
        }
        if (!valido) {
            throw new Exception("Cargo invalido. Debe ser: Operario, Supervisor, Jefe, Gerente o Administrativo");
        }
        this.cargo = cargo;
    }
    
    public String getArea() {
        return area;
    }
    
    public void setArea(String area) throws Exception {
        String[] areasValidas = {"Cultivo", "Proceso", "Logistica", "Administracion", "Calidad"};
        boolean valido = false;
        for (String a : areasValidas) {
            if (a.equalsIgnoreCase(area)) {
                valido = true;
                break;
            }
        }
        if (!valido) {
            throw new Exception("Area invalida. Debe ser: Cultivo, Proceso, Logistica, Administracion o Calidad");
        }
        this.area = area;
    }
    
    public int getSueldo() {
        return sueldo;
    }
    
    public void setSueldo(int sueldo) throws Exception {
        if (sueldo < 500000 || sueldo > 10000000) {
            throw new Exception("Sueldo debe estar entre $500.000 y $10.000.000");
        }
        this.sueldo = sueldo;
    }
    
    public Direccion getDireccion() {
        return direccion;
    }
    
    public void setDireccion(Direccion direccion) {
        this.direccion = direccion;
    }
    
    @Override
    public String toString() {
        return "Empleado [RUT: " + rut + 
               ", Nombre: " + nombre + 
               ", Cargo: " + cargo + 
               ", Area: " + area + 
               ", Sueldo: $" + sueldo +
               ", Direccion: " + direccion + "]";
    }
}
