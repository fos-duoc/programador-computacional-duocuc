package com.mycompany.salmonttapps6.ui;

import com.mycompany.salmonttapps6.data.GestorUnidades;
import com.mycompany.salmonttapps6.model.UnidadOperativa;
import java.util.ArrayList;

/**
 * Clase principal que ejecuta el programa
 * @author Fuad Oñate
 */
public class Main {
    
    public static void main(String[] args) {
        
        System.out.println("=====================================");
        System.out.println("   SISTEMA SALMONTT - SEMANA 6");
        System.out.println("   Jerarquia de Clases con Herencia");
        System.out.println("=====================================");
        System.out.println();
        
        GestorUnidades gestor = new GestorUnidades();
        ArrayList<UnidadOperativa> unidades = gestor.crearUnidadesPrueba();
        
        System.out.println("Unidades Operativas de Salmontt:");
        System.out.println("---------------------------------");
        System.out.println();
        
        for (UnidadOperativa unidad : unidades) {
            System.out.println(unidad.toString());
        }
        
        System.out.println();
        System.out.println("---------------------------------");
        System.out.println("Total de unidades: " + unidades.size());
        System.out.println("=====================================");
    }
}
