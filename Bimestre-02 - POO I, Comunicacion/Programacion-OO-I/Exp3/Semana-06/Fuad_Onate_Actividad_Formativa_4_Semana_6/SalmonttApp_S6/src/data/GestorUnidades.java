package data;

import model.CentroCultivo;
import model.PlantaProceso;
import model.UnidadOperativa;
import java.util.ArrayList;

/**
 * Clase encargada de gestionar las unidades operativas
 * Crea instancias de prueba de centros y plantas
 * 
 * @author Fuad Oñate
 * Desarrollo Orientado a Objetos I - Semana 6
 */
public class GestorUnidades {
    
    /**
     * Crea y retorna una lista con instancias de prueba
     * Incluye 2 centros de cultivo y 2 plantas de proceso
     * @return ArrayList con objetos UnidadOperativa
     */
    public ArrayList<UnidadOperativa> crearUnidadesPrueba() {
        ArrayList<UnidadOperativa> unidades = new ArrayList<>();
        
        // Crear 2 centros de cultivo
        CentroCultivo centro1 = new CentroCultivo("Centro Chiloe Norte", "Ancud", 1500.5);
        CentroCultivo centro2 = new CentroCultivo("Centro Calbuco Sur", "Calbuco", 2200.0);
        
        // Crear 2 plantas de proceso
        PlantaProceso planta1 = new PlantaProceso("Planta Puerto Montt", "Puerto Montt", 150.0);
        PlantaProceso planta2 = new PlantaProceso("Planta Quellon", "Quellon", 200.0);
        
        // Agregar todas las unidades a la lista
        unidades.add(centro1);
        unidades.add(centro2);
        unidades.add(planta1);
        unidades.add(planta2);
        
        return unidades;
    }
}
