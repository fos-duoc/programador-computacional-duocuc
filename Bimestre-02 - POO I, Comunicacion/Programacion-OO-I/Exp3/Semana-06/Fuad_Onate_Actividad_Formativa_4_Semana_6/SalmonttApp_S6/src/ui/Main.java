package ui;

import data.GestorUnidades;
import model.UnidadOperativa;
import java.util.ArrayList;

/**
 * Clase principal que ejecuta el programa
 * Muestra las unidades operativas creadas usando toString()
 * 
 * @author Fuad Oñate
 * Desarrollo Orientado a Objetos I - Semana 6
 */
public class Main {
    
    public static void main(String[] args) {
        
        System.out.println("=====================================");
        System.out.println("   SISTEMA SALMONTT - SEMANA 6");
        System.out.println("   Jerarquia de Clases con Herencia");
        System.out.println("=====================================\n");
        
        // Crear instancia del gestor
        GestorUnidades gestor = new GestorUnidades();
        
        // Obtener las unidades de prueba
        ArrayList<UnidadOperativa> unidades = gestor.crearUnidadesPrueba();
        
        System.out.println("Unidades Operativas de Salmontt:");
        System.out.println("---------------------------------\n");
        
        // Recorrer y mostrar cada unidad usando toString()
        for (UnidadOperativa unidad : unidades) {
            System.out.println(unidad.toString());
        }
        
        System.out.println("\n---------------------------------");
        System.out.println("Total de unidades: " + unidades.size());
        System.out.println("=====================================");
    }
}
