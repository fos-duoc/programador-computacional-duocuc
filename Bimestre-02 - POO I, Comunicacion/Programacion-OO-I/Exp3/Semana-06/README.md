# SalmonttApp - Semana 6

## Descripción

Proyecto de la empresa **Salmontt** para el curso Desarrollo Orientado a Objetos I.

**Objetivo de esta semana:** Implementar una jerarquía de clases con herencia simple para representar las unidades operativas de la empresa.

## Jerarquía de Clases

```
UnidadOperativa (superclase)
├── CentroCultivo (subclase)
└── PlantaProceso (subclase)
```

### Clases Creadas

| Clase | Tipo | Atributos |
|-------|------|-----------|
| `UnidadOperativa` | Superclase | `nombre`, `comuna` |
| `CentroCultivo` | Subclase | Hereda + `toneladasProduccion` |
| `PlantaProceso` | Subclase | Hereda + `capacidadProceso` |
| `GestorUnidades` | Gestión | Crea instancias de prueba |
| `Main` | UI | Ejecuta y muestra resultados |

### Conceptos Aplicados

- **Herencia simple:** Las subclases extienden de `UnidadOperativa`
- **super():** Se usa en constructores para inicializar atributos heredados
- **Sobrescritura de toString():** Cada subclase implementa su propia versión
- **Atributos protected:** Permiten acceso desde las subclases

## Estructura del Proyecto

```
SalmonttApp/
└── src/main/java/com/mycompany/salmonttapp/
    ├── model/
    │   ├── UnidadOperativa.java
    │   ├── CentroCultivo.java
    │   └── PlantaProceso.java
    ├── data/
    │   └── GestorUnidades.java
    └── ui/
        └── Main.java
```

## Instrucciones para Ejecutar

1. Abrir el proyecto en NetBeans
2. Click derecho en `Main.java` (en ui/) → Run File
3. O ejecutar: `mvn compile exec:java -Dexec.mainClass=com.mycompany.salmonttapp.ui.Main`

## Salida Esperada

```
=====================================
   SISTEMA SALMONTT - SEMANA 6
   Jerarquia de Clases con Herencia
=====================================

Unidades Operativas de Salmontt:
---------------------------------

Centro de Cultivo: Centro Chiloe Norte | Comuna: Ancud | Produccion: 1500.5 toneladas
Centro de Cultivo: Centro Calbuco Sur | Comuna: Calbuco | Produccion: 2200.0 toneladas
Planta de Proceso: Planta Puerto Montt | Comuna: Puerto Montt | Capacidad: 150.0 ton/dia
Planta de Proceso: Planta Quellon | Comuna: Quellon | Capacidad: 200.0 ton/dia

---------------------------------
Total de unidades: 4
=====================================
```

## Autor

**Fuad Oñate**  
Desarrollo Orientado a Objetos I - DuocUC  
Experiencia 2 - Semana 6
