package com.mycompany.dooiexp1s3.model;

import com.mycompany.dooiexp1s3.exceptions.ValidacionException;

// Exp1_S3_Fuad_Onate
// Clase Persona base para Salmontt

public class Persona {
    
    private String rut;
    private String nombre;
    private int edad;
    private String telefono;
    private Direccion direccion;  // composicion
    
    public Persona() {
        this.rut = "sin rut";
        this.nombre = "sin nombre";
        this.edad = 0;
        this.telefono = "sin telefono";
        this.direccion = new Direccion();
    }
    
    public Persona(String rut, String nombre, int edad, String telefono, 
                   String calle, int numero, String comuna, String ciudad) throws ValidacionException {
        setRut(rut);
        setNombre(nombre);
        setEdad(edad);
        setTelefono(telefono);
        this.direccion = new Direccion(calle, numero, comuna, ciudad);
    }
    
    public String getRut() {
        return rut;
    }
    
    public void setRut(String rut) throws ValidacionException {
        // validacion basica del RUT
        if (rut == null || rut.trim().isEmpty()) {
            throw new ValidacionException("RUT no puede estar vacio");
        }
        
        // quito puntos y guion para validar
        String rutLimpio = rut.replace(".", "").replace("-", "").toUpperCase();
        
        // valido formato basico (8-9 digitos + verificador)
        if (rutLimpio.length() < 8 || rutLimpio.length() > 10) {
            throw new ValidacionException("RUT invalido: debe tener entre 8 y 10 caracteres");
        }
        
        // verifico que sean numeros excepto el ultimo caracter
        String numeros = rutLimpio.substring(0, rutLimpio.length() - 1);
        try {
            Integer.parseInt(numeros);
        } catch (NumberFormatException e) {
            throw new ValidacionException("RUT invalido: formato incorrecto");
        }
        
        this.rut = rut;
    }
    
    public String getNombre() {
        return nombre;
    }
    
    public void setNombre(String nombre) throws ValidacionException {
        if (nombre == null || nombre.trim().isEmpty()) {
            throw new ValidacionException("Nombre no puede estar vacio");
        }
        if (nombre.trim().length() < 3) {
            throw new ValidacionException("Nombre debe tener al menos 3 caracteres");
        }
        this.nombre = nombre;
    }
    
    public int getEdad() {
        return edad;
    }
    
    public void setEdad(int edad) throws ValidacionException {
        if (edad < 18) {
            throw new ValidacionException("Edad debe ser mayor o igual a 18");
        }
        if (edad > 70) {
            throw new ValidacionException("Edad debe ser menor o igual a 70");
        }
        this.edad = edad;
    }
    
    public String getTelefono() {
        return telefono;
    }
    
    public void setTelefono(String telefono) throws ValidacionException {
        if (telefono == null || telefono.trim().isEmpty()) {
            throw new ValidacionException("Telefono no puede estar vacio");
        }
        
        // quito espacios y signos para validar
        String telefonoLimpio = telefono.replace(" ", "").replace("+", "");
        
        // valido que sea numero y tenga entre 8 y 12 digitos
        if (telefonoLimpio.length() < 8 || telefonoLimpio.length() > 12) {
            throw new ValidacionException("Telefono debe tener entre 8 y 12 digitos");
        }
        
        try {
            Long.parseLong(telefonoLimpio);
        } catch (NumberFormatException e) {
            throw new ValidacionException("Telefono solo debe contener numeros");
        }
        
        this.telefono = telefono;
    }
    
    public Direccion getDireccion() {
        return direccion;
    }
    
    public void setDireccion(Direccion direccion) {
        this.direccion = direccion;
    }
    
    /**
     * Metodo toString para mostrar datos de la persona
     */
    @Override
    public String toString() {
        return "RUT: " + rut +
               "\nNombre: " + nombre +
               "\nEdad: " + edad +
               "\nTelefono: " + telefono +
               "\n" + direccion.toString();
    }
}
