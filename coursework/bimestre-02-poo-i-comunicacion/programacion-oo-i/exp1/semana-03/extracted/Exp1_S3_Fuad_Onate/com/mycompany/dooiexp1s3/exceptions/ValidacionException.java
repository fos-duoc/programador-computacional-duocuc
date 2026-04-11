package com.mycompany.dooiexp1s3.exceptions;

// Exp1_S3_Fuad_Onate
// Excepcion personalizada para validaciones

public class ValidacionException extends Exception {
    
    public ValidacionException(String mensaje) {
        super(mensaje);
    }
    
    public ValidacionException(String mensaje, Throwable causa) {
        super(mensaje, causa);
    }
}
