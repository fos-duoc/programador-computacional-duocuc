# 🐟 SalmonttApp - Sistema de Gestión de Centros de Cultivo

## 📋 Descripción

**SalmonttApp** es una aplicación Java desarrollada para la empresa salmonera Salmontt, con sede en Puerto Montt. El sistema permite cargar información de centros de cultivo desde un archivo de texto y realizar operaciones de consulta, filtrado y análisis de datos de producción.

Este proyecto fue desarrollado como parte de la **Experiencia 2 - Semana 4** del curso **Desarrollo Orientado a Objetos I** en DuocUC.

## 🎯 Caso de Uso

**Salmontt** es una empresa salmonera dedicada desde hace más de 15 años a la producción, procesamiento y exportación de salmón. La empresa necesita:
- Cargar información de sus centros de cultivo desde archivos
- Identificar centros de alta producción (> 1000 toneladas)
- Realizar búsquedas por ubicación (comuna)
- Obtener estadísticas de producción

## 🏗️ Estructura del Proyecto

```
SalmonttApp/
│
├── src/
│   ├── model/
│   │   └── CentroCultivo.java       # Clase modelo con atributos del centro
│   │
│   ├── data/
│   │   └── GestorDatos.java         # Gestión de lectura y filtrado de datos
│   │
│   ├── ui/
│   │   └── Main.java                # Punto de entrada de la aplicación
│   │
│   └── resources/
│       └── centros.txt              # Archivo de datos con información de centros
│
└── README.md
```

## 🔧 Tecnologías Utilizadas

- **Java** (JDK 8 o superior)
- **IntelliJ IDEA** (IDE recomendado)
- **ArrayList** para manejo de colecciones dinámicas
- **BufferedReader** para lectura de archivos

## 📊 Funcionalidades

### 1. Carga de Datos
- Lee el archivo `centros.txt` con formato CSV (separado por punto y coma)
- Crea objetos `CentroCultivo` desde los datos del archivo
- Almacena los objetos en un `ArrayList` para fácil manipulación

### 2. Visualización
- Muestra todos los centros de cultivo registrados
- Presenta información formateada con nombre, comuna y producción

### 3. Filtrado
- **Filtro por producción**: Identifica centros con producción mayor a 1000 toneladas
- **Búsqueda por comuna**: Encuentra todos los centros en una ubicación específica

### 4. Estadísticas
- Producción total de todos los centros
- Producción promedio
- Centro con mayor producción
- Centro con menor producción

## 📝 Formato del Archivo de Datos

El archivo `centros.txt` debe seguir este formato:

```
NombreCentro;Comuna;ToneladasProducidas
```

**Ejemplo:**
```
Centro Quillaipe;Puerto Montt;1250.5
Centro Hueihue;Castro;890.3
Centro Chaica;Quellón;1580.75
```

⚠️ **Importante**: 
- No usar espacios entre los campos
- Usar punto (.) como separador decimal
- Cada línea representa un centro de cultivo

## 🚀 Cómo Ejecutar

### Opción 1: Desde IntelliJ IDEA
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/salmontt-colecciones.git
   ```
2. Abre el proyecto en IntelliJ IDEA
3. Verifica que la ruta del archivo en `Main.java` sea correcta
4. Ejecuta la clase `Main.java`

### Opción 2: Desde la Terminal
```bash
# Compilar
javac -d bin src/model/*.java src/data/*.java src/ui/*.java

# Ejecutar
java -cp bin ui.Main
```

## 📖 Clases Principales

### `CentroCultivo.java`
Representa un centro de cultivo con:
- `nombre` (String)
- `comuna` (String)
- `toneladasProducidas` (double)

Incluye getters, setters y método `toString()`.

### `GestorDatos.java`
Gestiona la carga y manipulación de datos:
- `cargarDatosDesdeArchivo()`: Lee el archivo y crea objetos
- `getCentros()`: Retorna todos los centros
- `filtrarPorProduccion()`: Filtra por toneladas mínimas
- `buscarPorComuna()`: Busca por ubicación

### `Main.java`
Clase principal que:
- Carga los datos
- Muestra todos los centros
- Aplica filtros
- Calcula estadísticas

## 📈 Ejemplo de Salida

```
=== SISTEMA DE GESTIÓN SALMONTT ===
Cargando datos desde archivo...

✓ Datos cargados exitosamente

--- TODOS LOS CENTROS DE CULTIVO ---
Centro: Centro Quillaipe | Comuna: Puerto Montt | Producción: 1250.5 toneladas
Centro: Centro Hueihue | Comuna: Castro | Producción: 890.3 toneladas
...

--- CENTROS DE ALTA PRODUCCIÓN (> 1000 toneladas) ---
Centro: Centro Quillaipe | Comuna: Puerto Montt | Producción: 1250.5 toneladas
Centro: Centro Chaica | Comuna: Quellón | Producción: 1580.75 toneladas
...
```

## 🎓 Conceptos Aplicados

- ✅ Programación Orientada a Objetos (POO)
- ✅ Encapsulamiento (getters/setters)
- ✅ Colecciones dinámicas (ArrayList)
- ✅ Lectura de archivos (BufferedReader)
- ✅ Manipulación de Strings (.split())
- ✅ Estructuras de control (for, if)
- ✅ Organización en paquetes

## 👨‍💻 Autor

Desarrollado por **Fuad** como parte del curso Desarrollo Orientado a Objetos I - DuocUC

## 📅 Fecha

Noviembre 2025

## 📄 Licencia

Este proyecto es de carácter académico y está desarrollado con fines educativos.

---

**Nota**: Este proyecto cumple con todos los requisitos especificados en las instrucciones de la Experiencia 2, Semana 4.
