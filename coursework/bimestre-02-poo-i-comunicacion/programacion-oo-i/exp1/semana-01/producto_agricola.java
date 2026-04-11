// Exp1_S1_Fuad_Onate
// Desarrollo Orientado a Objetos I
// Clase para productos agricolas

public class ProductoAgricola {
    
    // declaro los atributos privados
    private String nombre;
    private String tipo;
    private double precioPorKilo;
    private boolean exportable;
    
    /**
     * Constructor sin parámetros
     * Inicializa con valores por defecto
     */
    public ProductoAgricola() {
        this.nombre = "Sin nombre";
        this.tipo = "Sin clasificar";
        this.precioPorKilo = 0.0;
        this.exportable = false;
        this.stockDisponible = 0;
    }
    
    /**
     * Constructor con parámetros
     * @param nombre Nombre del producto agrícola
     * @param tipo Tipo o categoría del producto
     * @param precioPorKilo Precio por kilogramo en pesos
     * @param exportable Si el producto está disponible para exportación
     * @param stockDisponible Stock disponible en kilogramos
     */
    public ProductoAgricola(String nombre, String tipo, double precioPorKilo, 
                          boolean exportable, int stockDisponible) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.precioPorKilo = precioPorKilo;
        this.exportable = exportable;
        this.stockDisponible = stockDisponible;
    }
    
    // Métodos getter (acceso)
    public String getNombre() {
        return nombre;
    }
    
    public String getTipo() {
        return tipo;
    }
    
    public double getPrecioPorKilo() {
        return precioPorKilo;
    }
    
    public boolean isExportable() {
        return exportable;
    }
    
    public int getStockDisponible() {
        return stockDisponible;
    }
    
    // Métodos setter (modificación)
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
    
    public void setPrecioPorKilo(double precioPorKilo) {
        if (precioPorKilo >= 0) {
            this.precioPorKilo = precioPorKilo;
        }
    }
    
    public void setExportable(boolean exportable) {
        this.exportable = exportable;
    }
    
    public void setStockDisponible(int stockDisponible) {
        if (stockDisponible >= 0) {
            this.stockDisponible = stockDisponible;
        }
    }
    
    /**
     * Sobrescribe el método toString para retornar una descripción legible
     * @return String con la información del producto agrícola
     */
    @Override
    public String toString() {
        String disponibilidadExportacion = exportable ? "Sí" : "No";
        return "=== PRODUCTO AGRÍCOLA ===" +
               "\nNombre: " + nombre +
               "\nTipo: " + tipo +
               "\nPrecio por kilo: $" + String.format("%.2f", precioPorKilo) + " CLP" +
               "\nDisponible para exportación: " + disponibilidadExportacion +
               "\nStock disponible: " + stockDisponible + " kg" +
               "\n========================";
    }
}