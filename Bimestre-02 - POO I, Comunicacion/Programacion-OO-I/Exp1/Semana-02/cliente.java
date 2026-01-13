package com.mycompany.dooiexp1s2.model;

// Exp1_S2_Fuad_Onate
// Clase Cliente para PuertoGames

public class Cliente {
    
    private String nombre;
    private String correo;
    private String telefono;
    private Direccion direccion;  // composicion
    
    public Cliente() {
        this.nombre = "sin definir";
        this.correo = "sin correo";
        this.telefono = "sin telefono";
        this.direccion = new Direccion();
    }
    
    public Cliente(String nombre, String correo, String telefono, 
                   String calle, int numero, String comuna, String ciudad) {
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.direccion = new Direccion(calle, numero, comuna, ciudad);
    }
    
    public String getNombre() {
        return nombre;
    }
    
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    public String getCorreo() {
        return correo;
    }
    
    public void setCorreo(String correo) {
        this.correo = correo;
    }
    
    public String getTelefono() {
        return telefono;
    }
    
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
    
    public Direccion getDireccion() {
        return direccion;
    }
    
    public void setDireccion(Direccion direccion) {
        this.direccion = direccion;
    }
    
    /**
     * Metodo toString para mostrar datos del cliente
     */
    @Override
    public String toString() {
        return "Cliente: " + nombre +
               "\nCorreo: " + correo +
               "\nTelefono: " + telefono +
               "\n" + direccion.toString();
    }
}