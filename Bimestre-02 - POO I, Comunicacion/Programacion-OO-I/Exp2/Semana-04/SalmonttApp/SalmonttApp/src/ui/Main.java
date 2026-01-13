package ui;

import data.GestorDatos;
import model.CentroCultivo;
import java.util.ArrayList;

/**
 * Clase principal que ejecuta la aplicación Salmontt
 * Muestra los centros de cultivo y aplica filtros
 */
public class Main {
    public static void main(String[] args) {
        // Crear el gestor de datos
        GestorDatos gestor = new GestorDatos();
        
        // Ruta del archivo (ajustar según la ubicación de tu proyecto)
        String rutaArchivo = "src/resources/centros.txt";
        
        // Cargar los datos desde el archivo
        System.out.println("=== SISTEMA DE GESTIÓN SALMONTT ===");
        System.out.println("Cargando datos desde archivo...\n");
        
        if (gestor.cargarDatosDesdeArchivo(rutaArchivo)) {
            System.out.println("✓ Datos cargados exitosamente\n");
            
            // PASO 1: Mostrar todos los centros de cultivo (recorrido completo)
            System.out.println("--- TODOS LOS CENTROS DE CULTIVO ---");
            ArrayList<CentroCultivo> todosCentros = gestor.getCentros();
            
            if (todosCentros.isEmpty()) {
                System.out.println("No hay centros registrados.");
            } else {
                for (CentroCultivo centro : todosCentros) {
                    System.out.println(centro);
                }
                System.out.println("\nTotal de centros: " + todosCentros.size());
            }
            
            System.out.println("\n" + "=".repeat(50) + "\n");
            
            // PASO 2: Filtrar centros con producción mayor a 1000 toneladas
            System.out.println("--- CENTROS DE ALTA PRODUCCIÓN (> 1000 toneladas) ---");
            ArrayList<CentroCultivo> centrosAltaProduccion = gestor.filtrarPorProduccion(1000);
            
            if (centrosAltaProduccion.isEmpty()) {
                System.out.println("No hay centros con producción mayor a 1000 toneladas.");
            } else {
                for (CentroCultivo centro : centrosAltaProduccion) {
                    System.out.println(centro);
                }
                System.out.println("\nCentros de alta producción: " + centrosAltaProduccion.size());
            }
            
            System.out.println("\n" + "=".repeat(50) + "\n");
            
            // PASO 3: Buscar centros por comuna específica
            String comunaBuscar = "Puerto Montt";
            System.out.println("--- CENTROS EN " + comunaBuscar.toUpperCase() + " ---");
            ArrayList<CentroCultivo> centrosPuertoMontt = gestor.buscarPorComuna(comunaBuscar);
            
            if (centrosPuertoMontt.isEmpty()) {
                System.out.println("No hay centros en " + comunaBuscar + ".");
            } else {
                for (CentroCultivo centro : centrosPuertoMontt) {
                    System.out.println(centro);
                }
                System.out.println("\nCentros en " + comunaBuscar + ": " + centrosPuertoMontt.size());
            }
            
            System.out.println("\n" + "=".repeat(50) + "\n");
            
            // ESTADÍSTICAS ADICIONALES
            calcularEstadisticas(todosCentros);
            
        } else {
            System.out.println("✗ Error al cargar los datos del archivo.");
            System.out.println("Verifica que el archivo existe en: " + rutaArchivo);
        }
    }
    
    /**
     * Calcula y muestra estadísticas de producción
     * @param centros Lista de centros de cultivo
     */
    private static void calcularEstadisticas(ArrayList<CentroCultivo> centros) {
        if (centros.isEmpty()) {
            return;
        }
        
        System.out.println("--- ESTADÍSTICAS DE PRODUCCIÓN ---");
        
        double totalProduccion = 0;
        CentroCultivo centroMaxProduccion = centros.get(0);
        CentroCultivo centroMinProduccion = centros.get(0);
        
        // Calcular estadísticas
        for (CentroCultivo centro : centros) {
            double produccion = centro.getToneladasProducidas();
            totalProduccion += produccion;
            
            if (produccion > centroMaxProduccion.getToneladasProducidas()) {
                centroMaxProduccion = centro;
            }
            
            if (produccion < centroMinProduccion.getToneladasProducidas()) {
                centroMinProduccion = centro;
            }
        }
        
        double promedioProduccion = totalProduccion / centros.size();
        
        System.out.println("Producción total: " + totalProduccion + " toneladas");
        System.out.println("Producción promedio: " + String.format("%.2f", promedioProduccion) + " toneladas");
        System.out.println("\nCentro con mayor producción:");
        System.out.println("  → " + centroMaxProduccion);
        System.out.println("\nCentro con menor producción:");
        System.out.println("  → " + centroMinProduccion);
    }
}
