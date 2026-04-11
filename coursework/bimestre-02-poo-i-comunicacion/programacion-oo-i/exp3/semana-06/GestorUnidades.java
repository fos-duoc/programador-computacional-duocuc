package com.mycompany.salmonttapps6.data;

import com.mycompany.salmonttapps6.model.CentroCultivo;
import com.mycompany.salmonttapps6.model.PlantaProceso;
import com.mycompany.salmonttapps6.model.UnidadOperativa;
import java.util.ArrayList;

/**
 * Clase encargada de crear instancias de prueba
 * @author Fuad Oñate
 */
public class GestorUnidades {
    
    public ArrayList<UnidadOperativa> crearUnidadesPrueba() {
        ArrayList<UnidadOperativa> unidades = new ArrayList<>();
        
        // Crear 2 centros de cultivo
        CentroCultivo centro1 = new CentroCultivo("Centro Chiloe Norte", "Ancud", 1500.5);
        CentroCultivo centro2 = new CentroCultivo("Centro Calbuco Sur", "Calbuco", 2200.0);
        
        // Crear 2 plantas de proceso
        PlantaProceso planta1 = new PlantaProceso("Planta Puerto Montt", "Puerto Montt", 150.0);
        PlantaProceso planta2 = new PlantaProceso("Planta Quellon", "Quellon", 200.0);
        
        unidades.add(centro1);
        unidades.add(centro2);
        unidades.add(planta1);
        unidades.add(planta2);
        
        return unidades;
    }
}
