package com.mycompany.salmonttapp.model;

/**
 * Clase Direccion - Composicion
 * Exp2_S5_Fuad_Onate
 */
public class Direccion {
    
    private String calle;
    private int numero;
    private String ciudad;
    private String region;
    
    // Constructor vacio
    public Direccion() {
    }
    
    // Constructor completo
    public Direccion(String calle, int numero, String ciudad, String region) {
        this.calle = calle;
        this.numero = numero;
        this.ciudad = ciudad;
        this.region = region;
    }
    
    // Getters y Setters
    public String getCalle() {
        return calle;
    }
    
    public void setCalle(String calle) throws Exception {
        if (calle == null || calle.isEmpty()) {
            throw new Exception("Calle no puede estar vacia");
        }
        this.calle = calle;
    }
    
    public int getNumero() {
        return numero;
    }
    
    public void setNumero(int numero) throws Exception {
        if (numero <= 0) {
            throw new Exception("Numero debe ser mayor a 0");
        }
        this.numero = numero;
    }
    
    public String getCiudad() {
        return ciudad;
    }
    
    public void setCiudad(String ciudad) throws Exception {
        if (ciudad == null || ciudad.isEmpty()) {
            throw new Exception("Ciudad no puede estar vacia");
        }
        this.ciudad = ciudad;
    }
    
    public String getRegion() {
        return region;
    }
    
    public void setRegion(String region) throws Exception {
        if (region == null || region.isEmpty()) {
            throw new Exception("Region no puede estar vacia");
        }
        this.region = region;
    }
    
    @Override
    public String toString() {
        return calle + " " + numero + ", " + ciudad + ", " + region;
    }
}
