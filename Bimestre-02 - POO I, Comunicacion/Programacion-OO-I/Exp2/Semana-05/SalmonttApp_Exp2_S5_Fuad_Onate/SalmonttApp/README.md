# SalmonttApp v2.0 - Sistema de Gestión Integrada

## 📋 Descripción
Sistema desarrollado para **Salmontt**, empresa salmonera con sede en Puerto Montt. Esta aplicación permite gestionar centros de cultivo y empleados de manera eficiente, con carga de datos desde archivos y funcionalidades de búsqueda y filtrado.

## 🎯 Características Principales
- **Gestión de Centros de Cultivo**: CRUD completo con validaciones
- **Gestión de Empleados**: Registro y búsqueda con validaciones de RUT chileno
- **Carga de Datos**: Lectura automática desde archivos CSV
- **Búsquedas y Filtros**: Por producción, comuna, área
- **Estadísticas**: Resumen general de la operación
- **Validaciones**: RUT, rangos numéricos, campos obligatorios
- **Composición**: Relación entre clases (Direccion)

## 📁 Estructura de Paquetes

```
com.mycompany.salmonttapp/
├── model/              # Clases del dominio
│   ├── CentroCultivo.java
│   ├── Direccion.java
│   └── Empleado.java
├── service/            # Lógica de negocio
│   └── GestorDatos.java
├── util/               # Utilidades
│   └── ValidacionUtil.java
└── app/                # Aplicación principal
    └── Main.java
```

## 🚀 Clases Implementadas

### Model
- **CentroCultivo**: Representa un centro de cultivo de salmón con sus datos operacionales
- **Empleado**: Gestiona la información de los empleados de la empresa
- **Direccion**: Clase compuesta que representa direcciones físicas (composición)

### Service
- **GestorDatos**: Servicio principal que maneja la carga de archivos y operaciones CRUD

### Util
- **ValidacionUtil**: Utilidades para validar RUT, email, teléfono y formateos

### App
- **Main**: Punto de entrada con menú interactivo

## ⚙️ Requisitos
- Java 8 o superior
- IDE: NetBeans o IntelliJ IDEA

## 📝 Archivos de Datos
El sistema requiere dos archivos en la raíz del proyecto:

### centros.txt
```
ID;Nombre;Comuna;Toneladas;Empleados;Calle;Numero;Region
1;Centro Chiloe Norte;Ancud;1850.5;45;Av. Costanera;100;Los Lagos
...
```

### empleados.txt
```
RUT;Nombre;Cargo;Area;Sueldo;Calle;Numero;Ciudad;Region
12.345.678-9;Juan Perez Soto;Supervisor;Cultivo;1200000;Los Alamos;123;Puerto Montt;Los Lagos
...
```

## 🎮 Instrucciones de Ejecución

### Desde IntelliJ IDEA:
1. Abrir el proyecto
2. Asegurarse de que los archivos `.txt` estén en la raíz
3. Ejecutar la clase `Main.java` desde el paquete `app`
4. Interactuar con el menú por consola

### Desde línea de comandos:
```bash
# Compilar
javac -d bin src/com/mycompany/salmonttapp/**/*.java

# Ejecutar
java -cp bin com.mycompany.salmonttapp.app.Main
```

## 📊 Funcionalidades del Menú
1. **Ver todos los centros de cultivo** - Lista completa de centros
2. **Buscar centros por producción** - Filtro por toneladas mínimas
3. **Buscar centros por comuna** - Búsqueda por ubicación
4. **Ver todos los empleados** - Lista completa del personal
5. **Buscar empleados por área** - Filtro por departamento
6. **Ver estadísticas generales** - Resumen de operaciones
7. **Agregar nuevo centro** - Registro con validaciones
8. **Validar RUT** - Verificador de RUT chileno

## 🔍 Validaciones Implementadas
- **RUT Chileno**: Formato XX.XXX.XXX-X con dígito verificador
- **Rangos numéricos**: Sueldos entre $500.000 y $10.000.000
- **Cargos válidos**: Operario, Supervisor, Jefe, Gerente, Administrativo
- **Áreas válidas**: Cultivo, Proceso, Logística, Administración, Calidad
- **Campos obligatorios**: Validación de campos no vacíos

## 📈 Ejemplo de Salida
```
=================================
    SISTEMA SALMONTT v2.0
    Gestion Integrada
=================================

Cargando datos desde archivos...

✓ Cargados 10 centros de cultivo
✓ Cargados 8 empleados

✓ Datos cargados exitosamente

=== MENU PRINCIPAL ===
1. Ver todos los centros de cultivo
2. Buscar centros por produccion
...
```

## 👨‍💻 Autor
**Fuad Onate**  
Desarrollo Orientado a Objetos I  
Experiencia 2 - Semana 5  
DuocUC

## 📄 Licencia
Proyecto académico - DuocUC 2024

---

*Sistema desarrollado como parte de la evaluación de Desarrollo Orientado a Objetos I*
