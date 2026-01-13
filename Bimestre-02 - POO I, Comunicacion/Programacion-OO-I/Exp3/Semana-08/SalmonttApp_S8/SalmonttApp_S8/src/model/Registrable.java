package model;

/**
 * Interfaz que define el contrato comun para todas las entidades
 * registrables en el sistema Salmontt
 * 
 * @author Fuad Oñate
 * Desarrollo Orientado a Objetos I - Semana 8
 */
public interface Registrable {
    
    /**
     * Muestra un resumen de la informacion de la entidad
     * Cada clase implementa este metodo de forma personalizada
     */
    void mostrarResumen();
    
    /**
     * Obtiene el tipo de entidad como String
     * @return Tipo de la entidad
     */
    String getTipo();
}
