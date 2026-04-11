package com.mycompany.salmonttapp.util;

/**
 * Clase ValidacionUtil - Utilidades de validacion
 * Exp2_S5_Fuad_Onate
 */
public class ValidacionUtil {
    
    // Validar RUT chileno
    public static boolean validarRut(String rut) {
        if (rut == null || rut.isEmpty()) {
            return false;
        }
        
        // Formato basico XX.XXX.XXX-X
        if (!rut.matches("\\d{1,2}\\.\\d{3}\\.\\d{3}-[\\dkK]")) {
            return false;
        }
        
        try {
            // Limpiar RUT
            String rutLimpio = rut.replace(".", "").replace("-", "");
            String numero = rutLimpio.substring(0, rutLimpio.length() - 1);
            String dv = rutLimpio.substring(rutLimpio.length() - 1).toUpperCase();
            
            // Calcular digito verificador
            int suma = 0;
            int factor = 2;
            
            for (int i = numero.length() - 1; i >= 0; i--) {
                suma += Integer.parseInt(String.valueOf(numero.charAt(i))) * factor;
                factor = factor == 7 ? 2 : factor + 1;
            }
            
            int resto = suma % 11;
            String dvCalculado = String.valueOf(11 - resto);
            
            if (dvCalculado.equals("11")) dvCalculado = "0";
            if (dvCalculado.equals("10")) dvCalculado = "K";
            
            return dv.equals(dvCalculado);
            
        } catch (Exception e) {
            return false;
        }
    }
    
    // Validar email
    public static boolean validarEmail(String email) {
        if (email == null || email.isEmpty()) {
            return false;
        }
        return email.matches("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$");
    }
    
    // Validar telefono
    public static boolean validarTelefono(String telefono) {
        if (telefono == null || telefono.isEmpty()) {
            return false;
        }
        // Acepta formatos: 912345678, +56912345678
        return telefono.matches("^(\\+56)?[9][0-9]{8}$");
    }
    
    // Validar rango numerico
    public static boolean validarRango(double valor, double min, double max) {
        return valor >= min && valor <= max;
    }
    
    // Validar texto no vacio
    public static boolean validarTextoNoVacio(String texto) {
        return texto != null && !texto.trim().isEmpty();
    }
    
    // Formatear RUT
    public static String formatearRut(String rut) {
        if (rut == null || rut.length() < 2) {
            return rut;
        }
        
        String rutLimpio = rut.replace(".", "").replace("-", "");
        if (rutLimpio.length() < 2) {
            return rut;
        }
        
        String dv = rutLimpio.substring(rutLimpio.length() - 1);
        String numero = rutLimpio.substring(0, rutLimpio.length() - 1);
        
        StringBuilder rutFormateado = new StringBuilder();
        int contador = 0;
        
        for (int i = numero.length() - 1; i >= 0; i--) {
            if (contador == 3) {
                rutFormateado.insert(0, ".");
                contador = 0;
            }
            rutFormateado.insert(0, numero.charAt(i));
            contador++;
        }
        
        return rutFormateado.toString() + "-" + dv;
    }
    
    // Formatear moneda
    public static String formatearMoneda(int monto) {
        return String.format("$%,d", monto);
    }
}
