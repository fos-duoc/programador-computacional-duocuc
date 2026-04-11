# Analista Programador Computacional
## Guía Completa de Conceptos, Arquitectura y Aplicaciones

**Institución:** DuocUC - Escuela de Informática y Telecomunicaciones
**Modalidad:** 100% Online
**Duración:** 10 Bimestres (20 meses)
**Código Malla:** 1444729-2025
**Continuidad:** Ingeniería en Desarrollo de Software (7 bimestres adicionales)

---

## Tabla de Contenidos

1. [Perfil de la Carrera](#1-perfil-de-la-carrera)
2. [Competencias del Egresado](#2-competencias-del-egresado)
3. [Fundamentos de Programación](#3-fundamentos-de-programación)
4. [Programación Orientada a Objetos](#4-programación-orientada-a-objetos)
5. [Bases de Datos](#5-bases-de-datos)
6. [Desarrollo Frontend](#6-desarrollo-frontend)
7. [Desarrollo Backend](#7-desarrollo-backend)
8. [Desarrollo Fullstack](#8-desarrollo-fullstack)
9. [Computación en la Nube](#9-computación-en-la-nube)
10. [Desarrollo de Aplicaciones Móviles](#10-desarrollo-de-aplicaciones-móviles)
11. [Metodologías Ágiles](#11-metodologías-ágiles)
12. [Testing y Calidad de Software](#12-testing-y-calidad-de-software)
13. [Herramientas y Tecnologías](#13-herramientas-y-tecnologías)
14. [Campo Laboral](#14-campo-laboral)
15. [Certificaciones Obtenibles](#15-certificaciones-obtenibles)
16. [Referencias y Fuentes Oficiales](#16-referencias-y-fuentes-oficiales)

---

## 1. Perfil de la Carrera

### Descripción General

El **Analista Programador Computacional** es un profesional capacitado para desenvolverse en equipos multidisciplinarios, participando activamente en el análisis, diseño, desarrollo e implementación de soluciones basadas en software. Posee competencias técnicas y transversales que le permiten trabajar en organizaciones de diversas características, considerando criterios de seguridad y calidad.

### Objetivos Formativos

- Desarrollar componentes de software en diversas etapas del ciclo de vida
- Utilizar herramientas cloud para desarrollo, considerando escalabilidad
- Diseñar e implementar interfaces de usuario frontend
- Crear componentes backend usando patrones de diseño
- Desarrollar aplicaciones nativas para dispositivos móviles
- Aplicar ciclo de vida del software con buenas prácticas industriales

### Modalidad Online

La carrera se ofrece en modalidad **100% Online**, permitiendo a los estudiantes:
- Flexibilidad horaria para estudiar
- Acceso a plataformas de aprendizaje virtuales
- Interacción con docentes y compañeros en foros y sesiones sincrónicas
- Desarrollo de proyectos prácticos desde cualquier ubicación

---

## 2. Competencias del Egresado

### Competencias Técnicas

| Competencia | Descripción |
|-------------|-------------|
| **Desarrollo de Software** | Crear soluciones de software aplicando metodologías ágiles y buenas prácticas |
| **Programación** | Dominio de lenguajes como Java, Python, JavaScript y SQL |
| **Bases de Datos** | Diseño e implementación de bases de datos relacionales y NoSQL |
| **Cloud Computing** | Uso de servicios en la nube para despliegue y escalabilidad |
| **Frontend** | Desarrollo de interfaces de usuario responsivas y accesibles |
| **Backend** | Construcción de APIs y lógica de negocio |
| **Mobile** | Desarrollo de aplicaciones para Android e iOS |

### Competencias Transversales

- Trabajo en equipo y comunicación efectiva
- Pensamiento analítico y resolución de problemas
- Adaptabilidad a cambios tecnológicos
- Ética profesional y responsabilidad
- Aprendizaje continuo y autodidacta

---

## 3. Fundamentos de Programación

### Conceptos Esenciales

#### Algoritmos
Un **algoritmo** es una secuencia finita de instrucciones bien definidas que resuelven un problema o realizan una tarea específica.

```
Características de un buen algoritmo:
- Finito: Termina después de un número finito de pasos
- Definido: Cada paso está claramente especificado
- Entradas: Puede tener cero o más entradas
- Salidas: Produce al menos una salida
- Efectivo: Cada operación es suficientemente básica
```

#### Estructuras de Datos Fundamentales

| Estructura | Descripción | Uso Típico |
|------------|-------------|------------|
| **Array** | Colección ordenada de elementos del mismo tipo | Listas, matrices |
| **Lista** | Colección dinámica de elementos | Colas, pilas |
| **Diccionario** | Pares clave-valor | Configuraciones, cachés |
| **Conjunto** | Colección de elementos únicos | Eliminación de duplicados |

#### Estructuras de Control

```python
# Condicionales
if condicion:
    # bloque si es verdadero
elif otra_condicion:
    # bloque alternativo
else:
    # bloque por defecto

# Bucles
for elemento in coleccion:
    # iterar sobre elementos

while condicion:
    # repetir mientras sea verdadero
```

### Paradigmas de Programación

#### 1. Programación Imperativa
Describe **cómo** se debe ejecutar un programa paso a paso.

```python
# Ejemplo imperativo
suma = 0
numeros = [1, 2, 3, 4, 5]
for n in numeros:
    suma = suma + n
print(suma)  # 15
```

#### 2. Programación Declarativa
Describe **qué** resultado se desea obtener, sin especificar cómo.

```python
# Ejemplo declarativo con funciones de orden superior
numeros = [1, 2, 3, 4, 5]
suma = sum(numeros)
print(suma)  # 15
```

#### 3. Programación Funcional
Basada en funciones puras y datos inmutables.

```python
# Funciones puras - misma entrada, misma salida
def cuadrado(x):
    return x * x

# Funciones de orden superior
numeros = [1, 2, 3, 4, 5]
cuadrados = list(map(cuadrado, numeros))
print(cuadrados)  # [1, 4, 9, 16, 25]
```

---

## 4. Programación Orientada a Objetos

### Los Cuatro Pilares de la POO

La **Programación Orientada a Objetos (POO)** es un paradigma que organiza el código en torno a "objetos" que combinan datos y comportamiento.

#### 1. Encapsulamiento

El encapsulamiento protege los datos internos de un objeto, exponiendo solo lo necesario a través de una interfaz pública.

```java
public class CuentaBancaria {
    // Atributos privados (encapsulados)
    private String titular;
    private double saldo;

    // Constructor
    public CuentaBancaria(String titular, double saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    // Métodos públicos (interfaz)
    public void depositar(double monto) {
        if (monto > 0) {
            this.saldo += monto;
        }
    }

    public boolean retirar(double monto) {
        if (monto > 0 && monto <= this.saldo) {
            this.saldo -= monto;
            return true;
        }
        return false;
    }

    public double getSaldo() {
        return this.saldo;
    }
}
```

#### 2. Herencia

La herencia permite crear nuevas clases basadas en clases existentes, reutilizando código.

```java
// Clase base
public class Empleado {
    protected String nombre;
    protected double salarioBase;

    public double calcularSalario() {
        return salarioBase;
    }
}

// Clase derivada
public class Gerente extends Empleado {
    private double bono;

    @Override
    public double calcularSalario() {
        return salarioBase + bono;
    }
}
```

#### 3. Polimorfismo

El polimorfismo permite que objetos de diferentes clases respondan al mismo mensaje de manera diferente.

```java
public class Main {
    public static void main(String[] args) {
        Empleado[] empleados = new Empleado[2];
        empleados[0] = new Empleado();
        empleados[1] = new Gerente();

        // Polimorfismo: mismo método, diferente comportamiento
        for (Empleado e : empleados) {
            System.out.println(e.calcularSalario());
        }
    }
}
```

#### 4. Abstracción

La abstracción simplifica la complejidad modelando solo los aspectos relevantes.

```java
// Clase abstracta
public abstract class Figura {
    protected String color;

    public abstract double calcularArea();
    public abstract double calcularPerimetro();
}

// Implementación concreta
public class Rectangulo extends Figura {
    private double ancho;
    private double alto;

    @Override
    public double calcularArea() {
        return ancho * alto;
    }

    @Override
    public double calcularPerimetro() {
        return 2 * (ancho + alto);
    }
}
```

### Principios SOLID

Los principios SOLID son guías para escribir código orientado a objetos mantenible y escalable.

| Principio | Significado | Descripción |
|-----------|-------------|-------------|
| **S** | Single Responsibility | Una clase debe tener una sola razón para cambiar |
| **O** | Open/Closed | Abierto para extensión, cerrado para modificación |
| **L** | Liskov Substitution | Las clases derivadas deben ser sustituibles por sus clases base |
| **I** | Interface Segregation | Interfaces específicas son mejores que una interfaz general |
| **D** | Dependency Inversion | Depender de abstracciones, no de implementaciones |

---

## 5. Bases de Datos

### Bases de Datos Relacionales (SQL)

Las bases de datos relacionales almacenan datos en tablas con filas y columnas, utilizando SQL (Structured Query Language) para operaciones.

#### Conceptos Fundamentales

- **Tabla**: Estructura que almacena datos en filas y columnas
- **Clave Primaria (PK)**: Identificador único de cada registro
- **Clave Foránea (FK)**: Referencia a la clave primaria de otra tabla
- **Índice**: Estructura que acelera las consultas
- **Normalización**: Proceso de organizar datos para reducir redundancia

#### SQL Básico

```sql
-- Crear tabla
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar datos
INSERT INTO usuarios (nombre, email)
VALUES ('Juan Pérez', 'juan@email.com');

-- Consultar datos
SELECT nombre, email
FROM usuarios
WHERE fecha_registro > '2024-01-01'
ORDER BY nombre;

-- Actualizar datos
UPDATE usuarios
SET nombre = 'Juan Carlos Pérez'
WHERE id = 1;

-- Eliminar datos
DELETE FROM usuarios WHERE id = 1;

-- Joins (uniones)
SELECT u.nombre, p.titulo
FROM usuarios u
INNER JOIN publicaciones p ON u.id = p.usuario_id;
```

#### PostgreSQL

**PostgreSQL** es un sistema de gestión de bases de datos relacional-objeto de código abierto, conocido por:
- Cumplimiento estricto de SQL
- Soporte para JSON y datos geoespaciales
- Transacciones ACID
- Extensibilidad
- Alto rendimiento

### Bases de Datos NoSQL

Las bases de datos NoSQL ("Not Only SQL") ofrecen modelos de datos flexibles para casos de uso específicos.

#### Tipos de NoSQL

| Tipo | Descripción | Ejemplos |
|------|-------------|----------|
| **Documentos** | Almacena documentos JSON/BSON | MongoDB, CouchDB |
| **Clave-Valor** | Pares simples clave-valor | Redis, DynamoDB |
| **Columnar** | Optimizado para columnas | Cassandra, HBase |
| **Grafos** | Nodos y relaciones | Neo4j, Amazon Neptune |

#### MongoDB

**MongoDB** es una base de datos de documentos que utiliza documentos JSON-like (BSON).

```javascript
// Insertar documento
db.usuarios.insertOne({
    nombre: "María García",
    email: "maria@email.com",
    intereses: ["programación", "música"],
    direccion: {
        ciudad: "Santiago",
        pais: "Chile"
    }
});

// Consultar documentos
db.usuarios.find({
    "direccion.ciudad": "Santiago"
});

// Actualizar documento
db.usuarios.updateOne(
    { email: "maria@email.com" },
    { $set: { nombre: "María G." } }
);

// Agregaciones
db.usuarios.aggregate([
    { $match: { "direccion.pais": "Chile" } },
    { $group: { _id: "$direccion.ciudad", total: { $sum: 1 } } }
]);
```

### Teorema CAP

En sistemas distribuidos, solo se pueden garantizar dos de tres propiedades:

- **Consistency** (Consistencia): Todos los nodos ven los mismos datos
- **Availability** (Disponibilidad): El sistema siempre responde
- **Partition Tolerance** (Tolerancia a particiones): El sistema funciona ante fallos de red

---

## 6. Desarrollo Frontend

### Tecnologías Fundamentales

#### HTML5

HTML (HyperText Markup Language) es el lenguaje de marcado para estructurar contenido web.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Aplicación</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#servicios">Servicios</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="inicio">
            <h1>Bienvenido</h1>
            <p>Contenido principal</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Mi Empresa</p>
    </footer>
</body>
</html>
```

#### CSS3

CSS (Cascading Style Sheets) define la presentación visual de documentos HTML.

```css
/* Variables CSS */
:root {
    --color-primario: #3498db;
    --color-secundario: #2ecc71;
    --espaciado: 1rem;
}

/* Estilos base */
body {
    font-family: 'Segoe UI', sans-serif;
    line-height: 1.6;
    color: #333;
}

/* Flexbox */
.contenedor {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--espaciado);
}

/* Grid */
.galeria {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}

/* Media Queries (Responsive) */
@media (max-width: 768px) {
    .contenedor {
        flex-direction: column;
    }
}
```

#### JavaScript

JavaScript es el lenguaje de programación para interactividad web.

```javascript
// Variables y constantes
const API_URL = 'https://api.ejemplo.com';
let contador = 0;

// Funciones
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

// Arrow functions
const sumar = (a, b) => a + b;

// Async/Await
async function obtenerDatos() {
    try {
        const respuesta = await fetch(`${API_URL}/usuarios`);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Manipulación del DOM
document.querySelector('#boton').addEventListener('click', () => {
    contador++;
    document.querySelector('#resultado').textContent = contador;
});
```

### Frameworks Frontend

#### React

**React** es una biblioteca de JavaScript para construir interfaces de usuario, desarrollada por Meta.

```jsx
import React, { useState, useEffect } from 'react';

function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('/api/usuarios')
            .then(res => res.json())
            .then(data => {
                setUsuarios(data);
                setCargando(false);
            });
    }, []);

    if (cargando) return <p>Cargando...</p>;

    return (
        <ul>
            {usuarios.map(usuario => (
                <li key={usuario.id}>{usuario.nombre}</li>
            ))}
        </ul>
    );
}

export default ListaUsuarios;
```

#### Vue.js

**Vue.js** es un framework progresivo para construir interfaces de usuario.

```vue
<template>
    <div>
        <input v-model="nuevaTarea" @keyup.enter="agregarTarea">
        <ul>
            <li v-for="tarea in tareas" :key="tarea.id">
                {{ tarea.texto }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nuevaTarea: '',
            tareas: []
        };
    },
    methods: {
        agregarTarea() {
            this.tareas.push({
                id: Date.now(),
                texto: this.nuevaTarea
            });
            this.nuevaTarea = '';
        }
    }
};
</script>
```

---

## 7. Desarrollo Backend

### Conceptos Fundamentales

El **backend** es la capa de una aplicación que maneja:
- Lógica de negocio
- Acceso a bases de datos
- Autenticación y autorización
- APIs y servicios web

### Arquitectura de APIs REST

**REST** (Representational State Transfer) es un estilo arquitectónico para servicios web.

#### Principios REST

1. **Cliente-Servidor**: Separación de responsabilidades
2. **Sin estado**: Cada petición contiene toda la información necesaria
3. **Cacheable**: Las respuestas pueden ser cacheadas
4. **Interfaz uniforme**: URLs consistentes y métodos HTTP estándar

#### Métodos HTTP

| Método | Acción | Ejemplo |
|--------|--------|---------|
| GET | Obtener recurso | `GET /api/usuarios` |
| POST | Crear recurso | `POST /api/usuarios` |
| PUT | Actualizar completo | `PUT /api/usuarios/1` |
| PATCH | Actualizar parcial | `PATCH /api/usuarios/1` |
| DELETE | Eliminar recurso | `DELETE /api/usuarios/1` |

### Node.js y Express

**Node.js** permite ejecutar JavaScript en el servidor. **Express** es el framework más popular para Node.js.

```javascript
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Datos en memoria (ejemplo)
let usuarios = [
    { id: 1, nombre: 'Ana', email: 'ana@email.com' }
];

// GET - Obtener todos
app.get('/api/usuarios', (req, res) => {
    res.json(usuarios);
});

// GET - Obtener uno
app.get('/api/usuarios/:id', (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) return res.status(404).json({ error: 'No encontrado' });
    res.json(usuario);
});

// POST - Crear
app.post('/api/usuarios', (req, res) => {
    const nuevoUsuario = {
        id: usuarios.length + 1,
        nombre: req.body.nombre,
        email: req.body.email
    };
    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
});

// PUT - Actualizar
app.put('/api/usuarios/:id', (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) return res.status(404).json({ error: 'No encontrado' });

    usuario.nombre = req.body.nombre;
    usuario.email = req.body.email;
    res.json(usuario);
});

// DELETE - Eliminar
app.delete('/api/usuarios/:id', (req, res) => {
    usuarios = usuarios.filter(u => u.id !== parseInt(req.params.id));
    res.status(204).send();
});

app.listen(3000, () => console.log('Servidor en puerto 3000'));
```

### Java con Spring Boot

**Spring Boot** es el framework más utilizado para aplicaciones Java empresariales.

```java
// Entidad
@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String email;

    // Getters y setters
}

// Repositorio
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByEmail(String email);
}

// Servicio
@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository repository;

    public List<Usuario> obtenerTodos() {
        return repository.findAll();
    }

    public Usuario crear(Usuario usuario) {
        return repository.save(usuario);
    }
}

// Controlador
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {
    @Autowired
    private UsuarioService service;

    @GetMapping
    public List<Usuario> listar() {
        return service.obtenerTodos();
    }

    @PostMapping
    public ResponseEntity<Usuario> crear(@RequestBody Usuario usuario) {
        Usuario nuevo = service.crear(usuario);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevo);
    }
}
```

---

## 8. Desarrollo Fullstack

### Concepto de Fullstack

Un **desarrollador Fullstack** domina tanto el frontend como el backend, pudiendo construir aplicaciones web completas de manera independiente.

### Stacks Tecnológicos Populares

#### MERN Stack
- **M**ongoDB (Base de datos)
- **E**xpress.js (Backend)
- **R**eact (Frontend)
- **N**ode.js (Runtime)

#### MEAN Stack
- **M**ongoDB
- **E**xpress.js
- **A**ngular
- **N**ode.js

#### Stack Java
- PostgreSQL/MySQL
- Spring Boot
- React/Angular
- Maven/Gradle

### Arquitectura de Aplicación Fullstack

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENTE (Frontend)                    │
│  ┌─────────────────────────────────────────────────┐    │
│  │  React / Vue / Angular                          │    │
│  │  - Componentes UI                               │    │
│  │  - Estado de aplicación                         │    │
│  │  - Llamadas HTTP a API                          │    │
│  └─────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
                            │
                            │ HTTP/HTTPS
                            ▼
┌─────────────────────────────────────────────────────────┐
│                    SERVIDOR (Backend)                    │
│  ┌─────────────────────────────────────────────────┐    │
│  │  Node.js + Express / Spring Boot                │    │
│  │  - API REST                                     │    │
│  │  - Autenticación (JWT)                          │    │
│  │  - Lógica de negocio                            │    │
│  │  - Validación de datos                          │    │
│  └─────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
                            │
                            │ Query/ORM
                            ▼
┌─────────────────────────────────────────────────────────┐
│                    BASE DE DATOS                         │
│  ┌─────────────────────────────────────────────────┐    │
│  │  PostgreSQL / MongoDB                           │    │
│  │  - Almacenamiento persistente                   │    │
│  │  - Índices y optimización                       │    │
│  └─────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

---

## 9. Computación en la Nube

### Modelos de Servicio Cloud

#### IaaS (Infrastructure as a Service)
Proporciona infraestructura virtualizada: servidores, almacenamiento, redes.

**Ejemplos:** Amazon EC2, Google Compute Engine, Azure Virtual Machines

**El usuario gestiona:**
- Sistema operativo
- Middleware
- Runtime
- Datos
- Aplicaciones

#### PaaS (Platform as a Service)
Proporciona una plataforma completa para desarrollo y despliegue.

**Ejemplos:** Heroku, Google App Engine, Azure App Service

**El usuario gestiona:**
- Datos
- Aplicaciones

#### SaaS (Software as a Service)
Software completo entregado a través de internet.

**Ejemplos:** Google Workspace, Microsoft 365, Salesforce

**El usuario:**
- Solo utiliza la aplicación

### Proveedores Principales

| Proveedor | Descripción | Servicios Destacados |
|-----------|-------------|---------------------|
| **AWS** | Líder del mercado, amplio catálogo | EC2, S3, Lambda, RDS |
| **Azure** | Integración con Microsoft | App Service, CosmosDB, DevOps |
| **GCP** | Fuerte en datos y ML | BigQuery, Kubernetes Engine |

### Servicios Cloud Esenciales

```
┌────────────────────────────────────────────────────────┐
│                    SERVICIOS CLOUD                      │
├────────────────────────────────────────────────────────┤
│                                                         │
│  CÓMPUTO              ALMACENAMIENTO     BASES DE DATOS│
│  ├─ EC2/VM            ├─ S3/Blob         ├─ RDS        │
│  ├─ Lambda/Functions  ├─ EFS/Files       ├─ DynamoDB   │
│  └─ EKS/AKS           └─ Glacier         └─ CosmosDB   │
│                                                         │
│  REDES                SEGURIDAD          MONITOREO     │
│  ├─ VPC               ├─ IAM             ├─ CloudWatch │
│  ├─ Load Balancer     ├─ WAF             ├─ X-Ray      │
│  └─ CDN               └─ KMS             └─ Logs       │
│                                                         │
└────────────────────────────────────────────────────────┘
```

---

## 10. Desarrollo de Aplicaciones Móviles

### Enfoques de Desarrollo

#### Desarrollo Nativo

**Android (Kotlin/Java)**
```kotlin
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val boton = findViewById<Button>(R.id.miBoton)
        boton.setOnClickListener {
            Toast.makeText(this, "¡Hola!", Toast.LENGTH_SHORT).show()
        }
    }
}
```

**iOS (Swift)**
```swift
import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var miBoton: UIButton!

    override func viewDidLoad() {
        super.viewDidLoad()
    }

    @IBAction func botonPresionado(_ sender: UIButton) {
        let alert = UIAlertController(title: "Hola", message: "¡Mensaje!", preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: "OK", style: .default))
        present(alert, animated: true)
    }
}
```

#### Desarrollo Cross-Platform

**React Native**
```jsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
    const [contador, setContador] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Contador: {contador}</Text>
            <Button
                title="Incrementar"
                onPress={() => setContador(c => c + 1)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontSize: 24,
        marginBottom: 20,
    },
});
```

**Flutter (Dart)**
```dart
import 'package:flutter/material.dart';

void main() => runApp(MiApp());

class MiApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
        return MaterialApp(
            home: PaginaPrincipal(),
        );
    }
}

class PaginaPrincipal extends StatefulWidget {
    @override
    _PaginaPrincipalState createState() => _PaginaPrincipalState();
}

class _PaginaPrincipalState extends State<PaginaPrincipal> {
    int _contador = 0;

    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(title: Text('Mi App')),
            body: Center(
                child: Text('Contador: $_contador', style: TextStyle(fontSize: 24)),
            ),
            floatingActionButton: FloatingActionButton(
                onPressed: () => setState(() => _contador++),
                child: Icon(Icons.add),
            ),
        );
    }
}
```

### Comparativa de Frameworks

| Aspecto | React Native | Flutter |
|---------|--------------|---------|
| **Lenguaje** | JavaScript | Dart |
| **Rendimiento** | Bueno | Excelente |
| **UI Components** | Nativos | Propios (Skia) |
| **Hot Reload** | Sí | Sí |
| **Comunidad** | Muy grande | Grande y creciente |
| **Curva aprendizaje** | Media (si conoces React) | Media |

---

## 11. Metodologías Ágiles

### Scrum

**Scrum** es un marco de trabajo ágil para gestionar proyectos complejos.

#### Roles

| Rol | Responsabilidad |
|-----|-----------------|
| **Product Owner** | Define y prioriza el backlog |
| **Scrum Master** | Facilita el proceso, elimina impedimentos |
| **Development Team** | Desarrolla el incremento del producto |

#### Eventos

```
Sprint (2-4 semanas)
├── Sprint Planning (inicio)
│   └── Definir objetivo y seleccionar items del backlog
│
├── Daily Scrum (diario, 15 min)
│   └── ¿Qué hice? ¿Qué haré? ¿Impedimentos?
│
├── Desarrollo del incremento
│
├── Sprint Review (fin)
│   └── Demostrar lo construido a stakeholders
│
└── Sprint Retrospective (fin)
    └── ¿Qué mejorar para el próximo sprint?
```

#### Artefactos

- **Product Backlog**: Lista priorizada de todo lo que necesita el producto
- **Sprint Backlog**: Subset del Product Backlog para el sprint actual
- **Incremento**: Producto funcional al final de cada sprint

### Kanban

**Kanban** es un método visual para gestionar el flujo de trabajo.

#### Principios

1. Visualizar el trabajo
2. Limitar el trabajo en progreso (WIP)
3. Gestionar el flujo
4. Hacer políticas explícitas
5. Implementar ciclos de retroalimentación
6. Mejorar colaborativamente

#### Tablero Kanban

```
┌──────────────┬──────────────┬──────────────┬──────────────┐
│   POR HACER  │  EN PROGRESO │   REVISIÓN   │    HECHO     │
│              │   (WIP: 3)   │   (WIP: 2)   │              │
├──────────────┼──────────────┼──────────────┼──────────────┤
│ ┌──────────┐ │ ┌──────────┐ │ ┌──────────┐ │ ┌──────────┐ │
│ │ Tarea 5  │ │ │ Tarea 2  │ │ │ Tarea 1  │ │ │ Tarea 0  │ │
│ └──────────┘ │ └──────────┘ │ └──────────┘ │ └──────────┘ │
│ ┌──────────┐ │ ┌──────────┐ │              │              │
│ │ Tarea 6  │ │ │ Tarea 3  │ │              │              │
│ └──────────┘ │ └──────────┘ │              │              │
│ ┌──────────┐ │ ┌──────────┐ │              │              │
│ │ Tarea 7  │ │ │ Tarea 4  │ │              │              │
│ └──────────┘ │ └──────────┘ │              │              │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

### Comparativa Scrum vs Kanban

| Aspecto | Scrum | Kanban |
|---------|-------|--------|
| **Iteraciones** | Sprints fijos | Flujo continuo |
| **Roles** | Definidos (PO, SM, Team) | No prescribe roles |
| **Cambios** | No durante sprint | Permitidos en cualquier momento |
| **Métricas** | Velocity | Lead time, throughput |
| **Mejor para** | Proyectos con releases | Mantenimiento, soporte |

---

## 12. Testing y Calidad de Software

### Pirámide de Testing

```
                    ┌─────────┐
                   /│  E2E   │\     Lentos, costosos
                  / │ Tests  │ \    pero alta confianza
                 /  └────────┘  \
                /                 \
               /   ┌───────────┐   \
              /    │Integration│    \   Balance costo/valor
             /     │   Tests   │     \
            /      └───────────┘      \
           /                           \
          /       ┌─────────────┐       \
         /        │    Unit     │        \  Rápidos, económicos
        /         │    Tests    │         \ base de la pirámide
       /          └─────────────┘          \
      └─────────────────────────────────────┘
```

### Pruebas Unitarias

Verifican el funcionamiento de unidades individuales de código.

```javascript
// Función a probar
function calcularImpuesto(precio, tasa) {
    if (precio < 0) throw new Error('Precio inválido');
    return precio * (tasa / 100);
}

// Tests con Jest
describe('calcularImpuesto', () => {
    test('calcula correctamente el impuesto', () => {
        expect(calcularImpuesto(100, 19)).toBe(19);
    });

    test('retorna 0 para precio 0', () => {
        expect(calcularImpuesto(0, 19)).toBe(0);
    });

    test('lanza error para precio negativo', () => {
        expect(() => calcularImpuesto(-10, 19)).toThrow('Precio inválido');
    });
});
```

### Pruebas de Integración

Verifican que múltiples componentes funcionen juntos correctamente.

```javascript
// Test de integración con base de datos
describe('UsuarioService', () => {
    beforeAll(async () => {
        await conectarBaseDatos();
    });

    afterAll(async () => {
        await desconectarBaseDatos();
    });

    test('crear y obtener usuario', async () => {
        const nuevoUsuario = await usuarioService.crear({
            nombre: 'Test',
            email: 'test@email.com'
        });

        expect(nuevoUsuario.id).toBeDefined();

        const usuarioObtenido = await usuarioService.obtenerPorId(nuevoUsuario.id);
        expect(usuarioObtenido.nombre).toBe('Test');
    });
});
```

### Pruebas End-to-End (E2E)

Simulan el comportamiento de un usuario real.

```javascript
// Test E2E con Cypress
describe('Flujo de Login', () => {
    it('permite a un usuario iniciar sesión', () => {
        cy.visit('/login');

        cy.get('[data-testid="email"]').type('usuario@email.com');
        cy.get('[data-testid="password"]').type('password123');
        cy.get('[data-testid="submit"]').click();

        cy.url().should('include', '/dashboard');
        cy.get('[data-testid="welcome-message"]').should('contain', 'Bienvenido');
    });
});
```

### Herramientas de Testing

| Tipo | JavaScript | Java | Python |
|------|------------|------|--------|
| **Unitarias** | Jest, Mocha | JUnit, TestNG | pytest, unittest |
| **Integración** | Supertest | Spring Test | pytest |
| **E2E** | Cypress, Playwright | Selenium | Selenium, pytest |

---

## 13. Herramientas y Tecnologías

### Control de Versiones

**Git** es el sistema de control de versiones más utilizado.

```bash
# Configuración inicial
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Flujo básico
git clone https://github.com/usuario/repo.git  # Clonar repositorio
git checkout -b feature/nueva-funcionalidad     # Crear rama
git add .                                        # Agregar cambios
git commit -m "feat: agregar nueva funcionalidad" # Commit
git push origin feature/nueva-funcionalidad     # Subir cambios
git pull origin main                            # Actualizar desde main
git merge main                                  # Integrar main en rama actual
```

### Convenciones de Commits

```
<tipo>(<alcance>): <descripción>

Tipos comunes:
- feat: Nueva funcionalidad
- fix: Corrección de bug
- docs: Documentación
- style: Formato (no afecta código)
- refactor: Refactorización
- test: Agregar o modificar tests
- chore: Tareas de mantenimiento
```

### IDEs y Editores

| Herramienta | Uso Principal |
|-------------|---------------|
| **VS Code** | Desarrollo web, JavaScript, Python |
| **IntelliJ IDEA** | Java, Kotlin |
| **PyCharm** | Python |
| **Android Studio** | Android |
| **Xcode** | iOS/macOS |

### DevOps y CI/CD

#### Docker

```dockerfile
# Dockerfile para aplicación Node.js
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
```

#### Docker Compose

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://db:5432/mydb
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=mydb
      - POSTGRES_PASSWORD=secret
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

#### GitHub Actions

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
      - run: npm run build
```

---

## 14. Campo Laboral

### Roles Profesionales

| Rol | Descripción | Salario Referencial (CLP) |
|-----|-------------|---------------------------|
| **Desarrollador Junior** | 0-2 años experiencia | $800.000 - $1.200.000 |
| **Desarrollador Semi-Senior** | 2-4 años experiencia | $1.200.000 - $2.000.000 |
| **Desarrollador Senior** | 4+ años experiencia | $2.000.000 - $3.500.000 |
| **Tech Lead** | Liderazgo técnico | $3.000.000 - $4.500.000 |
| **Arquitecto de Software** | Diseño de sistemas | $3.500.000 - $5.000.000 |

### Industrias que Contratan

- Tecnología y Startups
- Banca y Finanzas (FinTech)
- Retail y E-commerce
- Telecomunicaciones
- Salud (HealthTech)
- Educación (EdTech)
- Gobierno y Sector Público
- Consultoría TI

### Modalidades de Trabajo

- **Presencial**: En oficinas de la empresa
- **Remoto**: 100% desde casa
- **Híbrido**: Combinación de presencial y remoto
- **Freelance**: Proyectos independientes
- **Consultoría**: Asesoría especializada

---

## 15. Certificaciones Obtenibles

### Certificaciones de la Carrera

Durante los 10 bimestres, los estudiantes pueden obtener certificaciones en:

| Certificación | Bimestre Aproximado |
|---------------|---------------------|
| Programación | B02-B03 |
| Frontend | B03-B04 |
| Backend | B05-B06 |
| Mobile | B06-B07 |
| Cloud | B07-B08 |
| Fullstack | B09-B10 |

### Certificaciones Industriales Recomendadas

| Certificación | Proveedor | Área |
|---------------|-----------|------|
| AWS Cloud Practitioner | Amazon | Cloud |
| Azure Fundamentals | Microsoft | Cloud |
| GitHub Foundations | GitHub | DevOps |
| Scrum Master (PSM I) | Scrum.org | Agile |
| Oracle Java SE | Oracle | Programación |
| MongoDB Associate | MongoDB | Bases de Datos |

---

## 16. Referencias y Fuentes Oficiales

### Fuentes DuocUC

- [Página oficial de la carrera](https://www.duoc.cl/carreras/analista-programador-computacional/)
- [Malla Curricular 2025 (PDF)](https://www.duoc.cl/wp-content/uploads/2025/09/Malla-Curricular-1444729-2025-Analista-Programador-Computacional-FOL.pdf)
- [Folleto informativo](https://issuu.com/duocuc/docs/11-analista_programador_fol)
- [Escuela de Informática y Telecomunicaciones](https://www.duoc.cl/escuela/informatica-telecomunicaciones/)

### Estándares y Cuerpos de Conocimiento

- [SWEBOK v4.0 - IEEE Computer Society](https://www.computer.org/education/bodies-of-knowledge/software-engineering)
- [OWASP Top 10](https://owasp.org/Top10/)

### Documentación Técnica

- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JavaScript
- [React Documentation](https://react.dev/)
- [Spring Framework](https://spring.io/projects/spring-boot)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [AWS Documentation](https://docs.aws.amazon.com/)
- [Docker Documentation](https://docs.docker.com/)

### Recursos de Aprendizaje

- [freeCodeCamp](https://www.freecodecamp.org/)
- [Coursera](https://www.coursera.org/)
- [DataCamp](https://www.datacamp.com/)
- [roadmap.sh](https://roadmap.sh/) - Roadmaps de carrera

---

## Glosario de Términos

| Término | Definición |
|---------|------------|
| **API** | Application Programming Interface - Interfaz de programación de aplicaciones |
| **CRUD** | Create, Read, Update, Delete - Operaciones básicas de datos |
| **DOM** | Document Object Model - Representación del documento HTML |
| **HTTP** | HyperText Transfer Protocol - Protocolo de comunicación web |
| **IDE** | Integrated Development Environment - Entorno de desarrollo integrado |
| **JSON** | JavaScript Object Notation - Formato de intercambio de datos |
| **JWT** | JSON Web Token - Token para autenticación |
| **MVC** | Model-View-Controller - Patrón de arquitectura |
| **ORM** | Object-Relational Mapping - Mapeo objeto-relacional |
| **REST** | Representational State Transfer - Estilo arquitectónico para APIs |
| **SDK** | Software Development Kit - Kit de desarrollo de software |
| **SQL** | Structured Query Language - Lenguaje de consulta estructurado |
| **UX/UI** | User Experience / User Interface - Experiencia e interfaz de usuario |

---

*Documento generado como material educativo para la carrera de Analista Programador Computacional de DuocUC.*

*Última actualización: Diciembre 2025*
