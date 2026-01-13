package com.mycompany.salmonttapp.service;

import com.mycompany.salmonttapp.model.*;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Clase GestorDatos - Servicio para manejar datos
 * Exp2_S5_Fuad_Onate
 */
public class GestorDatos {
    
    private List<CentroCultivo> centros;
    private List<Empleado> empleados;
    
    public GestorDatos() {
        this.centros = new ArrayList<>();
        this.empleados = new ArrayList<>();
    }
    
    // Cargar centros desde archivo
    public void cargarCentrosDesdeArchivo(String rutaArchivo) {
        try (BufferedReader br = new BufferedReader(new FileReader(rutaArchivo))) {
            String linea;
            br.readLine(); // Saltar encabezado
            
            while ((linea = br.readLine()) != null) {
                String[] datos = linea.split(";");
                
                if (datos.length >= 8) {
                    try {
                        CentroCultivo centro = new CentroCultivo();
                        centro.setId(Integer.parseInt(datos[0].trim()));
                        centro.setNombre(datos[1].trim());
                        centro.setComuna(datos[2].trim());
                        centro.setToneladasProducidas(Double.parseDouble(datos[3].trim()));
                        centro.setCantidadEmpleados(Integer.parseInt(datos[4].trim()));
                        
                        // Crear direccion desde archivo
                        Direccion dir = new Direccion();
                        dir.setCalle(datos[5].trim());
                        dir.setNumero(Integer.parseInt(datos[6].trim()));
                        dir.setCiudad(datos[2].trim()); // Usar comuna como ciudad
                        dir.setRegion(datos[7].trim());
                        
                        centro.setDireccion(dir);
                        centros.add(centro);
                        
                    } catch (Exception e) {
                        System.err.println("Error procesando linea: " + e.getMessage());
                    }
                }
            }
            System.out.println("✓ Cargados " + centros.size() + " centros de cultivo");
            
        } catch (IOException e) {
            System.err.println("Error leyendo archivo: " + e.getMessage());
        }
    }
    
    // Cargar empleados desde archivo
    public void cargarEmpleadosDesdeArchivo(String rutaArchivo) {
        try (BufferedReader br = new BufferedReader(new FileReader(rutaArchivo))) {
            String linea;
            br.readLine(); // Saltar encabezado
            
            while ((linea = br.readLine()) != null) {
                String[] datos = linea.split(";");
                
                if (datos.length >= 9) {
                    try {
                        Empleado emp = new Empleado();
                        emp.setRut(datos[0].trim());
                        emp.setNombre(datos[1].trim());
                        emp.setCargo(datos[2].trim());
                        emp.setArea(datos[3].trim());
                        emp.setSueldo(Integer.parseInt(datos[4].trim()));
                        
                        // Crear direccion
                        Direccion dir = new Direccion();
                        dir.setCalle(datos[5].trim());
                        dir.setNumero(Integer.parseInt(datos[6].trim()));
                        dir.setCiudad(datos[7].trim());
                        dir.setRegion(datos[8].trim());
                        
                        emp.setDireccion(dir);
                        empleados.add(emp);
                        
                    } catch (Exception e) {
                        System.err.println("Error procesando empleado: " + e.getMessage());
                    }
                }
            }
            System.out.println("✓ Cargados " + empleados.size() + " empleados");
            
        } catch (IOException e) {
            System.err.println("Error leyendo archivo: " + e.getMessage());
        }
    }
    
    // Mostrar todos los centros
    public void mostrarTodosLosCentros() {
        System.out.println("\n=== CENTROS DE CULTIVO ===");
        for (CentroCultivo centro : centros) {
            System.out.println(centro);
        }
    }
    
    // Buscar centros por produccion
    public List<CentroCultivo> buscarCentrosPorProduccion(double minToneladas) {
        List<CentroCultivo> filtrados = new ArrayList<>();
        for (CentroCultivo centro : centros) {
            if (centro.getToneladasProducidas() > minToneladas) {
                filtrados.add(centro);
            }
        }
        return filtrados;
    }
    
    // Buscar centros por comuna
    public List<CentroCultivo> buscarCentrosPorComuna(String comuna) {
        List<CentroCultivo> filtrados = new ArrayList<>();
        for (CentroCultivo centro : centros) {
            if (centro.getComuna().equalsIgnoreCase(comuna)) {
                filtrados.add(centro);
            }
        }
        return filtrados;
    }
    
    // Mostrar todos los empleados
    public void mostrarTodosLosEmpleados() {
        System.out.println("\n=== EMPLEADOS ===");
        for (Empleado emp : empleados) {
            System.out.println(emp);
        }
    }
    
    // Buscar empleados por area
    public List<Empleado> buscarEmpleadosPorArea(String area) {
        List<Empleado> filtrados = new ArrayList<>();
        for (Empleado emp : empleados) {
            if (emp.getArea().equalsIgnoreCase(area)) {
                filtrados.add(emp);
            }
        }
        return filtrados;
    }
    
    // Obtener estadisticas
    public void mostrarEstadisticas() {
        System.out.println("\n=== ESTADISTICAS GENERALES ===");
        
        // Estadisticas centros
        double totalToneladas = 0;
        int totalEmpleadosCentros = 0;
        for (CentroCultivo centro : centros) {
            totalToneladas += centro.getToneladasProducidas();
            totalEmpleadosCentros += centro.getCantidadEmpleados();
        }
        
        System.out.println("Total centros: " + centros.size());
        System.out.println("Produccion total: " + String.format("%.2f", totalToneladas) + " toneladas");
        System.out.println("Promedio produccion: " + 
            String.format("%.2f", (centros.size() > 0 ? totalToneladas/centros.size() : 0)) + " ton/centro");
        System.out.println("Total empleados en centros: " + totalEmpleadosCentros);
        
        // Estadisticas empleados
        if (!empleados.isEmpty()) {
            int sueldoTotal = 0;
            for (Empleado emp : empleados) {
                sueldoTotal += emp.getSueldo();
            }
            System.out.println("\nTotal empleados registrados: " + empleados.size());
            System.out.println("Sueldo promedio: $" + 
                String.format("%,d", sueldoTotal/empleados.size()));
        }
    }
    
    // Getters
    public List<CentroCultivo> getCentros() {
        return centros;
    }
    
    public List<Empleado> getEmpleados() {
        return empleados;
    }
}
