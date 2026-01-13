package data;

import model.CentroCultivo;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

/**
 * Clase encargada de gestionar la lectura de datos desde archivo
 * y la creación de objetos CentroCultivo
 */
public class GestorDatos {
    private ArrayList<CentroCultivo> centros;

    /**
     * Constructor que inicializa el ArrayList
     */
    public GestorDatos() {
        this.centros = new ArrayList<>();
    }

    /**
     * Lee el archivo centros.txt y crea objetos CentroCultivo
     * @param rutaArchivo Ruta del archivo a leer
     * @return true si la lectura fue exitosa, false en caso contrario
     */
    public boolean cargarDatosDesdeArchivo(String rutaArchivo) {
        try (BufferedReader br = new BufferedReader(new FileReader(rutaArchivo))) {
            String linea;
            
            // Leer el archivo línea por línea
            while ((linea = br.readLine()) != null) {
                // Separar los datos usando el delimitador ";"
                String[] datos = linea.split(";");
                
                // Validar que la línea tenga 3 campos
                if (datos.length == 3) {
                    // Extraer los datos
                    String nombre = datos[0].trim();
                    String comuna = datos[1].trim();
                    double toneladas = Double.parseDouble(datos[2].trim());
                    
                    // Crear el objeto CentroCultivo
                    CentroCultivo centro = new CentroCultivo(nombre, comuna, toneladas);
                    
                    // Agregar el objeto al ArrayList
                    centros.add(centro);
                }
            }
            
            return true;
            
        } catch (IOException e) {
            System.out.println("Error al leer el archivo: " + e.getMessage());
            return false;
        } catch (NumberFormatException e) {
            System.out.println("Error al convertir las toneladas: " + e.getMessage());
            return false;
        }
    }

    /**
     * Retorna la lista completa de centros de cultivo
     * @return ArrayList con todos los centros cargados
     */
    public ArrayList<CentroCultivo> getCentros() {
        return centros;
    }

    /**
     * Filtra los centros de cultivo según un mínimo de toneladas producidas
     * @param minimoToneladas Cantidad mínima de toneladas para filtrar
     * @return ArrayList con los centros que cumplen la condición
     */
    public ArrayList<CentroCultivo> filtrarPorProduccion(double minimoToneladas) {
        ArrayList<CentroCultivo> centrosFiltrados = new ArrayList<>();
        
        // Recorrer la colección y agregar solo los que cumplen la condición
        for (CentroCultivo centro : centros) {
            if (centro.getToneladasProducidas() > minimoToneladas) {
                centrosFiltrados.add(centro);
            }
        }
        
        return centrosFiltrados;
    }

    /**
     * Busca centros de cultivo por comuna
     * @param comuna Nombre de la comuna a buscar
     * @return ArrayList con los centros de esa comuna
     */
    public ArrayList<CentroCultivo> buscarPorComuna(String comuna) {
        ArrayList<CentroCultivo> centrosEnComuna = new ArrayList<>();
        
        for (CentroCultivo centro : centros) {
            if (centro.getComuna().equalsIgnoreCase(comuna)) {
                centrosEnComuna.add(centro);
            }
        }
        
        return centrosEnComuna;
    }
}
