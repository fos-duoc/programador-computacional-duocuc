package ui;

import data.GestorEntidades;

/**
 * Clase principal del sistema Salmontt
 * Punto de entrada de la aplicacion
 * 
 * @author Fuad Oñate
 * Desarrollo Orientado a Objetos I - Semana 8
 * Integrando interfaces, polimorfismo y estructuras dinamicas
 */
public class Main {
    
    public static void main(String[] args) {
        System.out.println("========================================");
        System.out.println("   SISTEMA SALMONTT - SEMANA 8");
        System.out.println("   Interfaces, Polimorfismo y GUI");
        System.out.println("========================================\n");
        
        // Crear gestor de entidades
        GestorEntidades gestor = new GestorEntidades();
        
        // Cargar datos de prueba iniciales
        gestor.cargarDatosPrueba();
        System.out.println(">> Datos de prueba cargados exitosamente");
        
        // Mostrar entidades en consola (usando instanceof)
        gestor.mostrarTodas();
        
        // Iniciar interfaz grafica
        System.out.println(">> Iniciando interfaz grafica...\n");
        VentanaPrincipal ventana = new VentanaPrincipal(gestor);
        ventana.mostrarMenu();
        
        // Mostrar resumen final
        System.out.println("\n>> Resumen final del sistema:");
        gestor.mostrarTodas();
        
        System.out.println("========================================");
        System.out.println("   FIN DEL PROGRAMA");
        System.out.println("========================================");
    }
}
