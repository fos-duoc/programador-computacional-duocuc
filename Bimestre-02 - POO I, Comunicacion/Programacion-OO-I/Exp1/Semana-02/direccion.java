package com.mycompany.dooiexp1s2.model;

// Exp1_S2_Fuad_Onate  
// Clase Direccion - composicion con Cliente

public class Direccion {
    
    private String calle;
    private int numero;
    private String comuna;
    private String ciudad;
    
    public Direccion() {
        this.calle = "sin calle";
        this.numero = 0;
        this.comuna = "sin comuna";
        this.ciudad = "sin ciudad";
    }
    
    public Direccion(String calle, int numero, String comuna, String ciudad) {
        this.calle = calle;
        this.numero = numero;
        this.comuna = comuna;
        this.ciudad = ciudad;
    }
    
    public String getCalle() {
        return calle;
    }
    
    public void setCalle(String calle) {
        this.calle = calle;
    }
    
    public int getNumero() {
        return numero;
    }
    
    public void setNumero(int numero) {
        this.numero = numero;
    }
    
    public String getComuna() {
        return comuna;
    }
    
    public void setComuna(String comuna) {
        this.comuna = comuna;
    }
    
    public String getCiudad() {
        return ciudad;
    }
    
    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }
    
    /**
     * Metodo toString
     */
    @Override
    public String toString() {
        return "Direccion: " + calle + " " + numero + ", " + comuna + ", " + ciudad;
    }
}