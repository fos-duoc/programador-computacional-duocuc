package ui;

import model.*;
import data.GestorEntidades;
import javax.swing.JOptionPane;

/**
 * Interfaz grafica simple para el sistema Salmontt
 * Usa JOptionPane para entrada y visualizacion de datos
 * @author Fuad Oñate
 */
public class VentanaPrincipal {
    
    private GestorEntidades gestor;
    
    public VentanaPrincipal(GestorEntidades gestor) {
        this.gestor = gestor;
    }
    
    // Mostrar menu principal
    public void mostrarMenu() {
        String[] opciones = {"Ingresar Empleado", "Ingresar Proveedor", 
                            "Ingresar Centro Cultivo", "Ingresar Planta Proceso",
                            "Ver Entidades", "Buscar por Tipo", "Salir"};
        
        boolean continuar = true;
        while (continuar) {
            int opcion = JOptionPane.showOptionDialog(null,
                "=== SISTEMA SALMONTT S8 ===\nSeleccione una opcion:",
                "Menu Principal",
                JOptionPane.DEFAULT_OPTION,
                JOptionPane.INFORMATION_MESSAGE,
                null, opciones, opciones[0]);
            
            switch (opcion) {
                case 0: ingresarEmpleado(); break;
                case 1: ingresarProveedor(); break;
                case 2: ingresarCentroCultivo(); break;
                case 3: ingresarPlantaProceso(); break;
                case 4: mostrarEntidades(); break;
                case 5: buscarPorTipo(); break;
                case 6: 
                case -1:
                    continuar = false;
                    JOptionPane.showMessageDialog(null, 
                        "Gracias por usar el Sistema Salmontt!\nHasta pronto.");
                    break;
            }
        }
    }
    
    // Ingresar nuevo empleado
    private void ingresarEmpleado() {
        try {
            String nombre = JOptionPane.showInputDialog("Nombre del empleado:");
            if (nombre == null || nombre.isEmpty()) return;
            
            String rut = JOptionPane.showInputDialog("RUT (ej: 12345678-9):");
            if (rut == null || rut.isEmpty()) return;
            
            String email = JOptionPane.showInputDialog("Email:");
            if (email == null || email.isEmpty()) return;
            
            String cargo = JOptionPane.showInputDialog("Cargo:");
            if (cargo == null || cargo.isEmpty()) return;
            
            String depto = JOptionPane.showInputDialog("Departamento:");
            if (depto == null || depto.isEmpty()) return;
            
            String sueldoStr = JOptionPane.showInputDialog("Sueldo base:");
            int sueldo = Integer.parseInt(sueldoStr);
            
            Empleado emp = new Empleado(nombre, rut, email, cargo, depto, sueldo);
            gestor.agregarEntidad(emp);
            
            JOptionPane.showMessageDialog(null, 
                "Empleado registrado exitosamente!\n\n" + emp.toString(),
                "Registro Exitoso", JOptionPane.INFORMATION_MESSAGE);
                
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null, 
                "Error al ingresar empleado: " + e.getMessage(),
                "Error", JOptionPane.ERROR_MESSAGE);
        }
    }
    
    // Ingresar nuevo proveedor
    private void ingresarProveedor() {
        try {
            String nombre = JOptionPane.showInputDialog("Nombre del contacto:");
            if (nombre == null || nombre.isEmpty()) return;
            
            String rut = JOptionPane.showInputDialog("RUT (ej: 12345678-9):");
            if (rut == null || rut.isEmpty()) return;
            
            String email = JOptionPane.showInputDialog("Email:");
            if (email == null || email.isEmpty()) return;
            
            String empresa = JOptionPane.showInputDialog("Nombre de la empresa:");
            if (empresa == null || empresa.isEmpty()) return;
            
            String rubro = JOptionPane.showInputDialog("Rubro:");
            if (rubro == null || rubro.isEmpty()) return;
            
            String telefono = JOptionPane.showInputDialog("Telefono:");
            if (telefono == null || telefono.isEmpty()) return;
            
            Proveedor prov = new Proveedor(nombre, rut, email, empresa, rubro, telefono);
            gestor.agregarEntidad(prov);
            
            JOptionPane.showMessageDialog(null, 
                "Proveedor registrado exitosamente!\n\n" + prov.toString(),
                "Registro Exitoso", JOptionPane.INFORMATION_MESSAGE);
                
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null, 
                "Error al ingresar proveedor: " + e.getMessage(),
                "Error", JOptionPane.ERROR_MESSAGE);
        }
    }
    
    // Ingresar centro de cultivo
    private void ingresarCentroCultivo() {
        try {
            String nombre = JOptionPane.showInputDialog("Nombre del centro:");
            if (nombre == null || nombre.isEmpty()) return;
            
            String comuna = JOptionPane.showInputDialog("Comuna:");
            if (comuna == null || comuna.isEmpty()) return;
            
            String toneladasStr = JOptionPane.showInputDialog("Toneladas produccion:");
            double toneladas = Double.parseDouble(toneladasStr);
            
            CentroCultivo cc = new CentroCultivo(nombre, comuna, toneladas);
            gestor.agregarEntidad(cc);
            
            JOptionPane.showMessageDialog(null, 
                "Centro de Cultivo registrado!\n\n" + cc.toString(),
                "Registro Exitoso", JOptionPane.INFORMATION_MESSAGE);
                
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null, 
                "Error al ingresar centro: " + e.getMessage(),
                "Error", JOptionPane.ERROR_MESSAGE);
        }
    }
    
    // Ingresar planta de proceso
    private void ingresarPlantaProceso() {
        try {
            String nombre = JOptionPane.showInputDialog("Nombre de la planta:");
            if (nombre == null || nombre.isEmpty()) return;
            
            String comuna = JOptionPane.showInputDialog("Comuna:");
            if (comuna == null || comuna.isEmpty()) return;
            
            String capacidadStr = JOptionPane.showInputDialog("Capacidad proceso (ton/dia):");
            double capacidad = Double.parseDouble(capacidadStr);
            
            PlantaProceso pp = new PlantaProceso(nombre, comuna, capacidad);
            gestor.agregarEntidad(pp);
            
            JOptionPane.showMessageDialog(null, 
                "Planta de Proceso registrada!\n\n" + pp.toString(),
                "Registro Exitoso", JOptionPane.INFORMATION_MESSAGE);
                
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null, 
                "Error al ingresar planta: " + e.getMessage(),
                "Error", JOptionPane.ERROR_MESSAGE);
        }
    }
    
    // Mostrar todas las entidades
    private void mostrarEntidades() {
        if (gestor.getEntidades().isEmpty()) {
            JOptionPane.showMessageDialog(null, 
                "No hay entidades registradas.",
                "Sin Datos", JOptionPane.WARNING_MESSAGE);
            return;
        }
        
        JOptionPane.showMessageDialog(null, 
            gestor.obtenerResumenTexto(),
            "Entidades Registradas", JOptionPane.INFORMATION_MESSAGE);
        
        // Tambien mostrar en consola con instanceof
        gestor.mostrarTodas();
    }
    
    // Buscar por tipo
    private void buscarPorTipo() {
        String[] tipos = {"Centro de Cultivo", "Planta de Proceso", "Empleado", "Proveedor"};
        String tipo = (String) JOptionPane.showInputDialog(null,
            "Seleccione el tipo a buscar:",
            "Buscar por Tipo",
            JOptionPane.QUESTION_MESSAGE,
            null, tipos, tipos[0]);
        
        if (tipo == null) return;
        
        String tipoCorto = "";
        if (tipo.contains("Centro")) tipoCorto = "centro";
        else if (tipo.contains("Planta")) tipoCorto = "planta";
        else if (tipo.contains("Empleado")) tipoCorto = "empleado";
        else if (tipo.contains("Proveedor")) tipoCorto = "proveedor";
        
        var resultado = gestor.buscarPorTipo(tipoCorto);
        
        if (resultado.isEmpty()) {
            JOptionPane.showMessageDialog(null, 
                "No se encontraron entidades del tipo: " + tipo,
                "Sin Resultados", JOptionPane.WARNING_MESSAGE);
        } else {
            StringBuilder sb = new StringBuilder();
            sb.append("=== ").append(tipo.toUpperCase()).append(" ===\n\n");
            for (Registrable r : resultado) {
                sb.append(r.toString()).append("\n\n");
            }
            sb.append("Total: ").append(resultado.size());
            
            JOptionPane.showMessageDialog(null, sb.toString(),
                "Resultados de Busqueda", JOptionPane.INFORMATION_MESSAGE);
        }
    }
}
