package com.mycompany.dooiexp1s3.model;

import com.mycompany.dooiexp1s3.exceptions.ValidacionException;

// Exp1_S3_Fuad_Onate
// Clase Direccion - composicion con Persona

public class Direccion {
    
    private String calle;
    private int numero;
    private String comuna;
    private String ciudad;
    
    public Direccion() {
        this.calle = "sin calle";
        this.numero = 0;
        this.comuna = "sin comuna";
        this.ciudad = "Puerto Montt";  // ciudad por defecto para Salmontt
    }
    
    public Direccion(String calle, int numero, String comuna, String ciudad) throws ValidacionException {
        setCalle(calle);
        setNumero(numero);
        setComuna(comuna);
        setCiudad(ciudad);
    }
    
    public String getCalle() {
        return calle;
    }
    
    public void setCalle(String calle) throws ValidacionException {
        if (calle == null || calle.trim().isEmpty()) {
            throw new ValidacionException("Calle no puede estar vacia");
        }
        if (calle.trim().length() < 3) {
            throw new ValidacionException("Calle debe tener al menos 3 caracteres");
        }
        this.calle = calle;
    }
    
    public int getNumero() {
        return numero;
    }
    
    public void setNumero(int numero) throws ValidacionException {
        if (numero <= 0) {
            throw new ValidacionException("Numero debe ser mayor a 0");
        }
        if (numero > 99999) {
            throw new ValidacionException("Numero invalido");
        }
        this.numero = numero;
    }
    
    public String getComuna() {
        return comuna;
    }
    
    public void setComuna(String comuna) throws ValidacionException {
        if (comuna == null || comuna.trim().isEmpty()) {
            throw new ValidacionException("Comuna no puede estar vacia");
        }
        if (comuna.trim().length() < 3) {
            throw new ValidacionException("Comuna debe tener al menos 3 caracteres");
        }
        this.comuna = comuna;
    }
    
    public String getCiudad() {
        return ciudad;
    }
    
    public void setCiudad(String ciudad) throws ValidacionException {
        if (ciudad == null || ciudad.trim().isEmpty()) {
            throw new ValidacionException("Ciudad no puede estar vacia");
        }
        if (ciudad.trim().length() < 3) {
            throw new ValidacionException("Ciudad debe tener al menos 3 caracteres");
        }
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
