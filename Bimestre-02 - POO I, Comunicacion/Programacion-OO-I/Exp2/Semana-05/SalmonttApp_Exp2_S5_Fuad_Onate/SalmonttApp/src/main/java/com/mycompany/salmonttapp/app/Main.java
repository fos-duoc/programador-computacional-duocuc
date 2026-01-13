package com.mycompany.salmonttapp.app;

import com.mycompany.salmonttapp.model.*;
import com.mycompany.salmonttapp.service.GestorDatos;
import com.mycompany.salmonttapp.util.ValidacionUtil;
import java.util.List;
import java.util.Scanner;

/**
 * Clase Main - Sistema SalmonttApp
 * Exp2_S5_Fuad_Onate
 */
public class Main {
    
    private static GestorDatos gestor;
    private static Scanner scanner;
    
    public static void main(String[] args) {
        System.out.println("=================================");
        System.out.println("    SISTEMA SALMONTT v2.0");
        System.out.println("    Gestion Integrada");
        System.out.println("=================================\n");
        
        gestor = new GestorDatos();
        scanner = new Scanner(System.in);
        
        // Cargar datos de archivos
        cargarDatosIniciales();
        
        // Menu principal
        mostrarMenu();
        
        scanner.close();
    }
    
    private static void cargarDatosIniciales() {
        System.out.println("Cargando datos desde archivos...\n");
        
        // Cargar centros
        gestor.cargarCentrosDesdeArchivo("centros.txt");
        
        // Cargar empleados
        gestor.cargarEmpleadosDesdeArchivo("empleados.txt");
        
        System.out.println("\n✓ Datos cargados exitosamente");
    }
    
    private static void mostrarMenu() {
        int opcion;
        
        do {
            System.out.println("\n=== MENU PRINCIPAL ===");
            System.out.println("1. Ver todos los centros de cultivo");
            System.out.println("2. Buscar centros por produccion");
            System.out.println("3. Buscar centros por comuna");
            System.out.println("4. Ver todos los empleados");
            System.out.println("5. Buscar empleados por area");
            System.out.println("6. Ver estadisticas generales");
            System.out.println("7. Agregar nuevo centro");
            System.out.println("8. Validar RUT");
            System.out.println("0. Salir");
            System.out.print("\nSeleccione opcion: ");
            
            try {
                opcion = scanner.nextInt();
                scanner.nextLine(); // Limpiar buffer
                
                switch (opcion) {
                    case 1:
                        gestor.mostrarTodosLosCentros();
                        break;
                        
                    case 2:
                        buscarCentrosPorProduccion();
                        break;
                        
                    case 3:
                        buscarCentrosPorComuna();
                        break;
                        
                    case 4:
                        gestor.mostrarTodosLosEmpleados();
                        break;
                        
                    case 5:
                        buscarEmpleadosPorArea();
                        break;
                        
                    case 6:
                        gestor.mostrarEstadisticas();
                        break;
                        
                    case 7:
                        agregarNuevoCentro();
                        break;
                        
                    case 8:
                        validarRut();
                        break;
                        
                    case 0:
                        System.out.println("\n✓ Gracias por usar Sistema Salmontt");
                        break;
                        
                    default:
                        System.out.println("⚠ Opcion invalida");
                }
                
            } catch (Exception e) {
                System.out.println("⚠ Error: Ingrese un numero valido");
                scanner.nextLine(); // Limpiar buffer
                opcion = -1;
            }
            
        } while (opcion != 0);
    }
    
    private static void buscarCentrosPorProduccion() {
        System.out.print("\nIngrese produccion minima (toneladas): ");
        try {
            double minTon = scanner.nextDouble();
            scanner.nextLine();
            
            List<CentroCultivo> filtrados = gestor.buscarCentrosPorProduccion(minTon);
            
            System.out.println("\n=== CENTROS CON PRODUCCION > " + minTon + " TONELADAS ===");
            if (filtrados.isEmpty()) {
                System.out.println("No se encontraron centros");
            } else {
                for (CentroCultivo centro : filtrados) {
                    System.out.println(centro);
                }
                System.out.println("\nTotal: " + filtrados.size() + " centros");
            }
            
        } catch (Exception e) {
            System.out.println("⚠ Error: Ingrese un numero valido");
            scanner.nextLine();
        }
    }
    
    private static void buscarCentrosPorComuna() {
        System.out.print("\nIngrese comuna a buscar: ");
        String comuna = scanner.nextLine();
        
        List<CentroCultivo> filtrados = gestor.buscarCentrosPorComuna(comuna);
        
        System.out.println("\n=== CENTROS EN " + comuna.toUpperCase() + " ===");
        if (filtrados.isEmpty()) {
            System.out.println("No se encontraron centros en esa comuna");
        } else {
            for (CentroCultivo centro : filtrados) {
                System.out.println(centro);
            }
            System.out.println("\nTotal: " + filtrados.size() + " centros");
        }
    }
    
    private static void buscarEmpleadosPorArea() {
        System.out.println("\nAreas disponibles: Cultivo, Proceso, Logistica, Administracion, Calidad");
        System.out.print("Ingrese area a buscar: ");
        String area = scanner.nextLine();
        
        List<Empleado> filtrados = gestor.buscarEmpleadosPorArea(area);
        
        System.out.println("\n=== EMPLEADOS DEL AREA " + area.toUpperCase() + " ===");
        if (filtrados.isEmpty()) {
            System.out.println("No se encontraron empleados en esa area");
        } else {
            for (Empleado emp : filtrados) {
                System.out.println(emp);
            }
            System.out.println("\nTotal: " + filtrados.size() + " empleados");
        }
    }
    
    private static void agregarNuevoCentro() {
        System.out.println("\n=== AGREGAR NUEVO CENTRO ===");
        
        try {
            CentroCultivo nuevoCentro = new CentroCultivo();
            
            System.out.print("ID: ");
            nuevoCentro.setId(scanner.nextInt());
            scanner.nextLine();
            
            System.out.print("Nombre: ");
            nuevoCentro.setNombre(scanner.nextLine());
            
            System.out.print("Comuna: ");
            nuevoCentro.setComuna(scanner.nextLine());
            
            System.out.print("Toneladas producidas: ");
            nuevoCentro.setToneladasProducidas(scanner.nextDouble());
            
            System.out.print("Cantidad empleados: ");
            nuevoCentro.setCantidadEmpleados(scanner.nextInt());
            scanner.nextLine();
            
            // Crear direccion
            Direccion dir = new Direccion();
            System.out.println("\n-- Direccion del centro --");
            
            System.out.print("Calle: ");
            dir.setCalle(scanner.nextLine());
            
            System.out.print("Numero: ");
            dir.setNumero(scanner.nextInt());
            scanner.nextLine();
            
            System.out.print("Ciudad: ");
            dir.setCiudad(scanner.nextLine());
            
            System.out.print("Region: ");
            dir.setRegion(scanner.nextLine());
            
            nuevoCentro.setDireccion(dir);
            
            // Agregar a la lista
            gestor.getCentros().add(nuevoCentro);
            
            System.out.println("\n✓ Centro agregado exitosamente");
            System.out.println(nuevoCentro);
            
        } catch (Exception e) {
            System.out.println("⚠ Error: " + e.getMessage());
            scanner.nextLine(); // Limpiar buffer
        }
    }
    
    private static void validarRut() {
        System.out.print("\nIngrese RUT a validar (formato: 12.345.678-9): ");
        String rut = scanner.nextLine();
        
        if (ValidacionUtil.validarRut(rut)) {
            System.out.println("✓ RUT valido");
            System.out.println("Formato: " + ValidacionUtil.formatearRut(rut));
        } else {
            System.out.println("✗ RUT invalido");
        }
    }
}
