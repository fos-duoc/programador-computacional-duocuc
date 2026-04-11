package com.mycompany.dooiexp1s3.model;

import com.mycompany.dooiexp1s3.exceptions.ValidacionException;
import java.time.LocalDate;

// Exp1_S3_Fuad_Onate
// Clase Empleado - hereda de Persona

public class Empleado extends Persona {
    
    private String codigo;
    private String cargo;
    private String area;
    private double sueldo;
    private LocalDate fechaContrato;
    
    public Empleado() {
        super();
        this.codigo = "sin codigo";
        this.cargo = "sin cargo";
        this.area = "sin area";
        this.sueldo = 0;
        this.fechaContrato = LocalDate.now();
    }
    
    public Empleado(String rut, String nombre, int edad, String telefono,
                    String calle, int numero, String comuna, String ciudad,
                    String codigo, String cargo, String area, double sueldo) throws ValidacionException {
        super(rut, nombre, edad, telefono, calle, numero, comuna, ciudad);
        setCodigo(codigo);
        setCargo(cargo);
        setArea(area);
        setSueldo(sueldo);
        this.fechaContrato = LocalDate.now();
    }
    
    public String getCodigo() {
        return codigo;
    }
    
    public void setCodigo(String codigo) throws ValidacionException {
        if (codigo == null || codigo.trim().isEmpty()) {
            throw new ValidacionException("Codigo empleado no puede estar vacio");
        }
        
        // valido formato: EMP-XXXX
        if (!codigo.matches("EMP-\\d{4}")) {
            throw new ValidacionException("Codigo debe tener formato EMP-XXXX (ej: EMP-0001)");
        }
        
        this.codigo = codigo;
    }
    
    public String getCargo() {
        return cargo;
    }
    
    public void setCargo(String cargo) throws ValidacionException {
        if (cargo == null || cargo.trim().isEmpty()) {
            throw new ValidacionException("Cargo no puede estar vacio");
        }
        
        // valido cargos permitidos en Salmontt
        String cargoUpper = cargo.toUpperCase();
        if (!cargoUpper.equals("OPERARIO") && 
            !cargoUpper.equals("SUPERVISOR") && 
            !cargoUpper.equals("JEFE") &&
            !cargoUpper.equals("GERENTE") &&
            !cargoUpper.equals("ADMINISTRATIVO")) {
            throw new ValidacionException("Cargo invalido. Cargos validos: Operario, Supervisor, Jefe, Administrativo, Gerente");
        }
        
        this.cargo = cargo;
    }
    
    public String getArea() {
        return area;
    }
    
    public void setArea(String area) throws ValidacionException {
        if (area == null || area.trim().isEmpty()) {
            throw new ValidacionException("Area no puede estar vacia");
        }
        
        // valido areas de Salmontt
        String areaUpper = area.toUpperCase();
        if (!areaUpper.equals("CULTIVO") && 
            !areaUpper.equals("PROCESO") && 
            !areaUpper.equals("LOGISTICA") &&
            !areaUpper.equals("ADMINISTRACION") &&
            !areaUpper.equals("CALIDAD")) {
            throw new ValidacionException("Area invalida. Areas validas: Cultivo, Proceso, Logistica, Administracion, Calidad");
        }
        
        this.area = area;
    }
    
    public double getSueldo() {
        return sueldo;
    }
    
    public void setSueldo(double sueldo) throws ValidacionException {
        // valido sueldo minimo
        if (sueldo < 500000) {
            throw new ValidacionException("Sueldo debe ser mayor o igual a $500.000");
        }
        
        // valido sueldo maximo
        if (sueldo > 10000000) {
            throw new ValidacionException("Sueldo debe ser menor o igual a $10.000.000");
        }
        
        this.sueldo = sueldo;
    }
    
    public LocalDate getFechaContrato() {
        return fechaContrato;
    }
    
    public void setFechaContrato(LocalDate fechaContrato) {
        this.fechaContrato = fechaContrato;
    }
    
    /**
     * Metodo toString
     */
    @Override
    public String toString() {
        return "=== EMPLEADO SALMONTT ===" +
               "\n" + super.toString() +
               "\nCodigo: " + codigo +
               "\nCargo: " + cargo +
               "\nArea: " + area +
               "\nSueldo: $" + String.format("%,.0f", sueldo) +
               "\nFecha contrato: " + fechaContrato;
    }
}
