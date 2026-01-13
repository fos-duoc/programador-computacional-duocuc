package model;

/**
 * Clase que representa un centro de cultivo de la empresa Salmontt
 * Almacena información sobre nombre, ubicación y producción
 */
public class CentroCultivo {
    // Atributos
    private String nombre;
    private String comuna;
    private double toneladasProducidas;

    /**
     * Constructor vacío
     */
    public CentroCultivo() {
    }

    /**
     * Constructor con parámetros
     * @param nombre Nombre del centro de cultivo
     * @param comuna Comuna donde se ubica el centro
     * @param toneladasProducidas Toneladas de salmón producidas
     */
    public CentroCultivo(String nombre, String comuna, double toneladasProducidas) {
        this.nombre = nombre;
        this.comuna = comuna;
        this.toneladasProducidas = toneladasProducidas;
    }

    // Getters y Setters
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getComuna() {
        return comuna;
    }

    public void setComuna(String comuna) {
        this.comuna = comuna;
    }

    public double getToneladasProducidas() {
        return toneladasProducidas;
    }

    public void setToneladasProducidas(double toneladasProducidas) {
        this.toneladasProducidas = toneladasProducidas;
    }

    /**
     * Método toString para mostrar la información del centro de cultivo
     * @return String con los datos formateados
     */
    @Override
    public String toString() {
        return "Centro: " + nombre + 
               " | Comuna: " + comuna + 
               " | Producción: " + toneladasProducidas + " toneladas";
    }
}
