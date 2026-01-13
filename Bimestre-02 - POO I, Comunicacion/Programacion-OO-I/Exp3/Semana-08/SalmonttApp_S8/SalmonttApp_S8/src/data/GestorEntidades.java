package data;

import model.*;
import java.util.ArrayList;

/**
 * Gestor de entidades del sistema Salmontt
 * Utiliza coleccion generica y instanceof para diferenciar tipos
 * @author Fuad Oñate
 */
public class GestorEntidades {
    
    private ArrayList<Registrable> entidades;
    
    public GestorEntidades() {
        this.entidades = new ArrayList<>();
    }
    
    // Agregar entidad a la coleccion
    public void agregarEntidad(Registrable entidad) {
        entidades.add(entidad);
    }
    
    // Obtener lista de entidades
    public ArrayList<Registrable> getEntidades() {
        return entidades;
    }
    
    // Mostrar todas las entidades con instanceof
    public void mostrarTodas() {
        System.out.println("\n========================================");
        System.out.println("   LISTADO DE ENTIDADES REGISTRADAS");
        System.out.println("========================================\n");
        
        int centros = 0, plantas = 0, empleados = 0, proveedores = 0;
        
        for (Registrable r : entidades) {
            // Uso de instanceof para diferenciar tipos
            if (r instanceof CentroCultivo) {
                CentroCultivo cc = (CentroCultivo) r;
                System.out.println(">> Centro de Cultivo detectado:");
                cc.mostrarResumen();
                System.out.println("   Produccion anual estimada: " + 
                                   (cc.getToneladasProduccion() * 12) + " ton/año");
                centros++;
            } 
            else if (r instanceof PlantaProceso) {
                PlantaProceso pp = (PlantaProceso) r;
                System.out.println(">> Planta de Proceso detectada:");
                pp.mostrarResumen();
                System.out.println("   Capacidad mensual: " + 
                                   (pp.getCapacidadProceso() * 30) + " ton/mes");
                plantas++;
            }
            else if (r instanceof Empleado) {
                Empleado emp = (Empleado) r;
                System.out.println(">> Empleado detectado:");
                emp.mostrarResumen();
                System.out.println("   Sueldo liquido aprox: $" + 
                                   (int)(emp.getSueldoBase() * 0.8));
                empleados++;
            }
            else if (r instanceof Proveedor) {
                Proveedor prov = (Proveedor) r;
                System.out.println(">> Proveedor detectado:");
                prov.mostrarResumen();
                System.out.println("   Contacto: " + prov.getEmail());
                proveedores++;
            }
            System.out.println();
        }
        
        System.out.println("----------------------------------------");
        System.out.println("RESUMEN POR TIPO:");
        System.out.println("  - Centros de Cultivo: " + centros);
        System.out.println("  - Plantas de Proceso: " + plantas);
        System.out.println("  - Empleados: " + empleados);
        System.out.println("  - Proveedores: " + proveedores);
        System.out.println("  - TOTAL: " + entidades.size());
        System.out.println("========================================\n");
    }
    
    // Cargar datos de prueba
    public void cargarDatosPrueba() {
        // Centros de Cultivo
        agregarEntidad(new CentroCultivo("Centro Chiloe Norte", "Ancud", 1500.5));
        agregarEntidad(new CentroCultivo("Centro Calbuco Sur", "Calbuco", 2200.0));
        
        // Plantas de Proceso
        agregarEntidad(new PlantaProceso("Planta Puerto Montt", "Puerto Montt", 150.0));
        agregarEntidad(new PlantaProceso("Planta Quellon", "Quellon", 200.0));
        
        // Empleados
        agregarEntidad(new Empleado("Juan Perez", "12345678-9", "jperez@salmontt.cl",
                                    "Operador", "Produccion", 850000));
        agregarEntidad(new Empleado("Maria Lopez", "98765432-1", "mlopez@salmontt.cl",
                                    "Jefa de Planta", "Operaciones", 1500000));
        
        // Proveedores
        agregarEntidad(new Proveedor("Pedro Gonzalez", "11222333-4", "pgonzalez@insumos.cl",
                                     "Insumos Acuicolas Ltda", "Alimentacion", "+56912345678"));
        agregarEntidad(new Proveedor("Ana Martinez", "55666777-8", "amartinez@transporte.cl",
                                     "Transportes del Sur SA", "Logistica", "+56987654321"));
    }
    
    // Buscar por tipo usando instanceof
    public ArrayList<Registrable> buscarPorTipo(String tipo) {
        ArrayList<Registrable> resultado = new ArrayList<>();
        for (Registrable r : entidades) {
            if (tipo.equalsIgnoreCase("centro") && r instanceof CentroCultivo) {
                resultado.add(r);
            } else if (tipo.equalsIgnoreCase("planta") && r instanceof PlantaProceso) {
                resultado.add(r);
            } else if (tipo.equalsIgnoreCase("empleado") && r instanceof Empleado) {
                resultado.add(r);
            } else if (tipo.equalsIgnoreCase("proveedor") && r instanceof Proveedor) {
                resultado.add(r);
            }
        }
        return resultado;
    }
    
    // Obtener resumen como String para GUI
    public String obtenerResumenTexto() {
        StringBuilder sb = new StringBuilder();
        sb.append("=== ENTIDADES REGISTRADAS ===\n\n");
        
        for (Registrable r : entidades) {
            sb.append("[").append(r.getTipo()).append("]\n");
            sb.append(r.toString()).append("\n\n");
        }
        
        sb.append("Total: ").append(entidades.size()).append(" entidades");
        return sb.toString();
    }
}
