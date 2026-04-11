// Exp1_S1_Fuad_Onate
// Clase Main para probar ProductoAgricola

public class Main {
    
    public static void main(String[] args) {
        
        System.out.println("COOPERATIVA RAICES DEL SUR");
        System.out.println("==========================\n");
        
        // creo el primer objeto con el constructor con parametros
        ProductoAgricola producto1 = new ProductoAgricola("Papas Chiloe", "Tuberculo", 1500, true);
        
        // creo el segundo objeto tambien con parametros
        ProductoAgricola producto2 = new ProductoAgricola("Manzanas", "Fruta", 2000, false);
        
        // creo un tercer objeto con el constructor vacio
        ProductoAgricola producto3 = new ProductoAgricola();
        
        // uso los setters para darle valores al producto3
        producto3.setNombre("Tomates");
        producto3.setTipo("Verdura");
        producto3.setPrecioPorKilo(1200);
        producto3.setExportable(true);
        
        // muestro los productos usando toString
        System.out.println("Productos en inventario:");
        System.out.println(producto1);
        System.out.println();
        System.out.println(producto2);
        System.out.println();
        System.out.println(producto3);
        
        // pruebo algunos getters
        System.out.println("\nPrueba de getters:");
        System.out.println("Nombre del producto 1: " + producto1.getNombre());
        System.out.println("Precio del producto 2: $" + producto2.getPrecioPorKilo());
        System.out.println("Es exportable producto 3: " + producto3.isExportable());
    }
}