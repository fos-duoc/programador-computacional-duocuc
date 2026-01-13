# SalmonttApp - Semana 8

## Desarrollo Orientado a Objetos I - DuocUC
**Experiencia 2 - Semana 8: Integrando interfaces, polimorfismo y estructuras dinámicas**

## Descripción

Sistema de gestión para la empresa salmonera Salmontt que integra:
- **Interfaz Registrable**: Contrato común para todas las entidades
- **Herencia**: Jerarquías `UnidadOperativa` y `Persona` con subclases especializadas
- **Polimorfismo con instanceof**: Diferenciación de comportamientos según tipo de objeto
- **GUI con JOptionPane**: Interfaz gráfica para ingreso y visualización de datos

## Jerarquía de Clases

```
Registrable (interfaz)
├── UnidadOperativa (abstracta)
│   ├── CentroCultivo
│   └── PlantaProceso
└── Persona (abstracta)
    ├── Empleado
    └── Proveedor
```

## Clases Implementadas

| Clase | Tipo | Descripción |
|-------|------|-------------|
| `Registrable` | Interfaz | Define `mostrarResumen()` y `getTipo()` |
| `UnidadOperativa` | Superclase abstracta | Base para unidades operativas |
| `CentroCultivo` | Subclase | Centro de cultivo de salmón |
| `PlantaProceso` | Subclase | Planta de procesamiento |
| `Persona` | Superclase abstracta | Base para entidades tipo persona |
| `Empleado` | Subclase | Empleado de la empresa |
| `Proveedor` | Subclase | Proveedor externo |
| `GestorEntidades` | Gestión | Colección `ArrayList<Registrable>` con `instanceof` |
| `VentanaPrincipal` | UI | Interfaz gráfica con JOptionPane |
| `Main` | Entrada | Punto de inicio del programa |

## Estructura del Proyecto

```
SalmonttApp/
├── README.md
└── src/
    ├── model/
    │   ├── Registrable.java      ← Interfaz común
    │   ├── UnidadOperativa.java  ← Superclase abstracta
    │   ├── CentroCultivo.java    ← Subclase
    │   ├── PlantaProceso.java    ← Subclase
    │   ├── Persona.java          ← Superclase abstracta
    │   ├── Empleado.java         ← Subclase
    │   └── Proveedor.java        ← Subclase
    ├── data/
    │   └── GestorEntidades.java  ← ArrayList<Registrable> + instanceof
    └── ui/
        ├── VentanaPrincipal.java ← GUI con JOptionPane
        └── Main.java             ← Punto de entrada
```

## Funcionalidades

1. **Ingreso de entidades** via GUI (JOptionPane):
   - Empleados
   - Proveedores
   - Centros de Cultivo
   - Plantas de Proceso

2. **Visualización de datos**:
   - Listado completo en consola y GUI
   - Resumen por tipo de entidad
   - Búsqueda filtrada por tipo

3. **Polimorfismo con instanceof**:
   - Identificación automática del tipo de objeto
   - Comportamiento diferenciado según clase
   - Cálculos específicos por tipo

## Instrucciones para Ejecutar

### IntelliJ IDEA (Recomendado)
1. Abrir el proyecto
2. Compilar: Build → Build Project
3. Ejecutar: Click derecho en `Main.java` → Run

### NetBeans
1. File → Open Project
2. Click derecho en `Main.java` → Run File

### Línea de Comandos
```bash
cd SalmonttApp/src
javac model/*.java data/*.java ui/*.java
java ui.Main
```

## Salida Esperada

```
========================================
   SISTEMA SALMONTT - SEMANA 8
   Interfaces, Polimorfismo y GUI
========================================

>> Datos de prueba cargados exitosamente

========================================
   LISTADO DE ENTIDADES REGISTRADAS
========================================

>> Centro de Cultivo detectado:
[CENTRO CULTIVO] Centro Chiloe Norte - Ancud | Produccion: 1500.5 ton
   Produccion anual estimada: 18006.0 ton/año

>> Planta de Proceso detectada:
[PLANTA PROCESO] Planta Puerto Montt - Puerto Montt | Capacidad: 150.0 ton/dia
   Capacidad mensual: 4500.0 ton/mes

>> Empleado detectado:
[EMPLEADO] Juan Perez (12345678-9) - Operador | Depto: Produccion | Sueldo: $850000
   Sueldo liquido aprox: $680000

>> Proveedor detectado:
[PROVEEDOR] Pedro Gonzalez (11222333-4) - Insumos Acuicolas Ltda | Rubro: Alimentacion | Tel: +56912345678
   Contacto: pgonzalez@insumos.cl

----------------------------------------
RESUMEN POR TIPO:
  - Centros de Cultivo: 2
  - Plantas de Proceso: 2
  - Empleados: 2
  - Proveedores: 2
  - TOTAL: 8
========================================

>> Iniciando interfaz grafica...
```

## Criterios Cumplidos

| Criterio | Estado | Implementación |
|----------|--------|----------------|
| 1. Interfaz común | ✅ | `Registrable` con `mostrarResumen()` implementada por 4 clases |
| 2. Herencia funcional | ✅ | 2 superclases abstractas + 4 subclases |
| 3. instanceof | ✅ | Diferenciación en `GestorEntidades.mostrarTodas()` |
| 4. GUI funcional | ✅ | JOptionPane para CRUD de 4 tipos de entidades |
| 5. Repositorio GitHub | ✅ | Estructura ordenada con README |
| 6. Video explicativo | 🔜 | Pendiente grabar |
| 7. Buenas prácticas | ✅ | Código comentado, nombres claros |

## Autor

**Fuad Oñate**  
Desarrollo Orientado a Objetos I - DuocUC  
Experiencia 2 - Semana 8
