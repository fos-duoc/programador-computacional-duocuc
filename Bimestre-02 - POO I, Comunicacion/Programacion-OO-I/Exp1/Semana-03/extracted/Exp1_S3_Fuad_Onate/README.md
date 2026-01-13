# Sistema de Gestión de Empleados - Salmontt

## 📋 Descripción
Sistema de gestión de empleados para la empresa salmonera Salmontt, ubicada en Puerto Montt. Implementa clases con encapsulamiento, herencia, composición y validaciones con excepciones personalizadas.

## 👤 Autor
- **Nombre:** Fuad Oñate
- **Asignatura:** Desarrollo Orientado a Objetos I
- **Institución:** DuocUC
- **Experiencia:** 1 - Semana 3

## 📁 Estructura del Proyecto

```
com.mycompany.dooiexp1s3/
├── app/
│   └── Main.java              # Clase principal con pruebas
├── model/
│   ├── Persona.java           # Clase base
│   ├── Direccion.java         # Clase para composición
│   └── Empleado.java          # Clase que hereda de Persona
└── exceptions/
    └── ValidacionException.java  # Excepción personalizada
```

## 🔧 Clases Implementadas

### 1. **Persona** (Clase Base)
- Atributos: rut, nombre, edad, teléfono, dirección
- Validaciones: RUT formato chileno, edad 18-70, teléfono válido
- Relación de composición con Direccion

### 2. **Direccion** (Composición)
- Atributos: calle, número, comuna, ciudad
- Validaciones en todos los campos
- Usada por Persona mediante composición

### 3. **Empleado** (Herencia)
- Extiende de Persona
- Atributos adicionales: código, cargo, área, sueldo, fechaContrato
- Validaciones específicas: código formato EMP-XXXX, cargos y áreas permitidas

### 4. **ValidacionException** (Excepción Personalizada)
- Manejo de errores de validación
- Mensajes descriptivos para cada tipo de error

## ⚙️ Características Principales
- ✅ Encapsulamiento con atributos privados
- ✅ Herencia (Empleado extiende Persona)
- ✅ Composición (Persona contiene Direccion)
- ✅ Validaciones en todos los setters
- ✅ Manejo de excepciones con try-catch
- ✅ Organización en paquetes

## 📊 Validaciones Implementadas
- **RUT:** Formato chileno (XX.XXX.XXX-X)
- **Edad:** Entre 18 y 70 años
- **Teléfono:** 8-12 dígitos
- **Código Empleado:** Formato EMP-XXXX
- **Cargo:** Operario, Supervisor, Jefe, Administrativo, Gerente
- **Área:** Cultivo, Proceso, Logística, Administración, Calidad
- **Sueldo:** Entre $500.000 y $10.000.000

## 🚀 Instrucciones de Compilación y Ejecución

### En IntelliJ IDEA:
1. Abrir el proyecto
2. Click derecho en Main.java
3. Seleccionar "Run Main.main()"

### Por línea de comandos:
```bash
# Compilar
javac -d . *.java

# Ejecutar
java com.mycompany.dooiexp1s3.app.Main
```

## 📝 Pruebas Incluidas
El programa incluye 9 pruebas que validan:
1. Creación de empleado válido
2. Creación de persona con validaciones
3. Validación de RUT inválido
4. Validación de edad inválida
5. Validación de cargo inválido
6. Validación de sueldo inválido
7. Empleado completo del área Proceso
8. Validación de código empleado
9. Validación de teléfono

## 💼 Contexto del Proyecto
Salmontt es una empresa salmonera con más de 15 años en Puerto Montt. Este sistema resuelve problemas de:
- Duplicación de datos
- Desorganización estructural
- Ausencia de jerarquías claras
- Procesos manuales repetitivos

---

**Desarrollo Orientado a Objetos I** - Experiencia 1 - Semana 3
