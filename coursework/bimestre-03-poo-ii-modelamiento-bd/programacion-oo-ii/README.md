# ◈ Programación Orientada a Objetos II

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Bimestre 03 · Lenguaje: Java · Herencia · Polimorfismo · Interfaces         │
└──────────────────────────────────────────────────────────────────────────────┘
```

## ⚡ Tabla de Contenidos

- [Herencia](#-herencia)
- [Polimorfismo](#-polimorfismo)
- [Clases Abstractas](#-clases-abstractas)
- [Interfaces](#-interfaces)
- [Colecciones](#-colecciones)
- [Excepciones Avanzadas](#-excepciones-avanzadas)

---

## 📌 Herencia

```java
// ═══════════════════════════════════════════════════════════════════════
// CLASE BASE (Superclase)
// ═══════════════════════════════════════════════════════════════════════

public class Persona {
    protected String nombre;
    protected String rut;

    public Persona(String nombre, String rut) {
        this.nombre = nombre;
        this.rut = rut;
    }

    public void mostrarDatos() {
        System.out.println("Nombre: " + nombre + ", RUT: " + rut);
    }
}

// ═══════════════════════════════════════════════════════════════════════
// CLASE DERIVADA (Subclase)
// ═══════════════════════════════════════════════════════════════════════

public class Empleado extends Persona {
    private String cargo;
    private double salario;

    public Empleado(String nombre, String rut, String cargo, double salario) {
        super(nombre, rut);  // Llamar constructor padre
        this.cargo = cargo;
        this.salario = salario;
    }

    @Override
    public void mostrarDatos() {
        super.mostrarDatos();
        System.out.println("Cargo: " + cargo + ", Salario: $" + salario);
    }

    public double calcularBonus() {
        return salario * 0.10;
    }
}
```

### Jerarquía

```
              ┌─────────────┐
              │   Persona   │  ← Superclase
              └──────┬──────┘
                     │
       ┌─────────────┼─────────────┐
       │             │             │
┌──────▼──────┐ ┌────▼────┐ ┌─────▼─────┐
│  Empleado   │ │ Cliente │ │ Proveedor │
└─────────────┘ └─────────┘ └───────────┘
```

---

## 📌 Polimorfismo

```java
// Referencia del padre, objeto del hijo
Persona p1 = new Empleado("Juan", "12345678-9", "Dev", 1500000);
Persona p2 = new Cliente("Ana", "98765432-1", "ana@mail.com");

// Cada objeto ejecuta SU versión del método
p1.mostrarDatos();  // Ejecuta Empleado.mostrarDatos()
p2.mostrarDatos();  // Ejecuta Cliente.mostrarDatos()

// ═══════════════════════════════════════════════════════════════════════
// ARRAY POLIMÓRFICO
// ═══════════════════════════════════════════════════════════════════════

Persona[] personas = {
    new Empleado("Juan", "123", "Dev", 1500000),
    new Cliente("Ana", "456", "ana@mail.com"),
    new Proveedor("TechCorp", "789", "Equipos")
};

for (Persona p : personas) {
    p.mostrarDatos();  // Polimorfismo en acción
}

// ═══════════════════════════════════════════════════════════════════════
// INSTANCEOF + CASTING
// ═══════════════════════════════════════════════════════════════════════

for (Persona p : personas) {
    if (p instanceof Empleado emp) {  // Java 16+
        System.out.println("Bonus: $" + emp.calcularBonus());
    }
}
```

---

## 📌 Clases Abstractas

```java
// ═══════════════════════════════════════════════════════════════════════
// CLASE ABSTRACTA - No se puede instanciar
// ═══════════════════════════════════════════════════════════════════════

public abstract class Figura {
    protected String color;

    public Figura(String color) {
        this.color = color;
    }

    // Método abstracto: SIN implementación
    public abstract double calcularArea();
    public abstract double calcularPerimetro();

    // Método concreto: CON implementación
    public void mostrarInfo() {
        System.out.printf("Color: %s, Área: %.2f%n", color, calcularArea());
    }
}

// ═══════════════════════════════════════════════════════════════════════
// SUBCLASES CONCRETAS
// ═══════════════════════════════════════════════════════════════════════

public class Rectangulo extends Figura {
    private double ancho, alto;

    public Rectangulo(String color, double ancho, double alto) {
        super(color);
        this.ancho = ancho;
        this.alto = alto;
    }

    @Override
    public double calcularArea() { return ancho * alto; }

    @Override
    public double calcularPerimetro() { return 2 * (ancho + alto); }
}

public class Circulo extends Figura {
    private double radio;

    public Circulo(String color, double radio) {
        super(color);
        this.radio = radio;
    }

    @Override
    public double calcularArea() { return Math.PI * radio * radio; }

    @Override
    public double calcularPerimetro() { return 2 * Math.PI * radio; }
}
```

---

## 📌 Interfaces

```java
// ═══════════════════════════════════════════════════════════════════════
// INTERFACE - Contrato de comportamiento
// ═══════════════════════════════════════════════════════════════════════

public interface Vendible {
    double getPrecio();
    void aplicarDescuento(double porcentaje);

    // Constante
    double IVA = 0.19;

    // Método default (Java 8+)
    default double getPrecioConIVA() {
        return getPrecio() * (1 + IVA);
    }
}

public interface Almacenable {
    void guardar();
    void cargar();
}

// ═══════════════════════════════════════════════════════════════════════
// IMPLEMENTACIÓN MÚLTIPLE
// ═══════════════════════════════════════════════════════════════════════

public class Producto implements Vendible, Almacenable {
    private String nombre;
    private double precio;

    @Override
    public double getPrecio() { return precio; }

    @Override
    public void aplicarDescuento(double porcentaje) {
        this.precio -= this.precio * (porcentaje / 100);
    }

    @Override
    public void guardar() { System.out.println("Guardando..."); }

    @Override
    public void cargar() { System.out.println("Cargando..."); }
}
```

### Comparación

```
┌─────────────────────────┬─────────────────────────┬─────────────────────────┐
│ Característica          │ Clase Abstracta         │ Interface               │
├─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ Herencia                │ extends (solo 1)        │ implements (múltiples)  │
│ Constructores           │ ✓ Sí                    │ ✗ No                    │
│ Atributos               │ Cualquier tipo          │ Solo constantes         │
│ Propósito               │ "Es un" (is-a)          │ "Puede hacer" (can-do)  │
└─────────────────────────┴─────────────────────────┴─────────────────────────┘
```

---

## 📌 Colecciones

```java
import java.util.*;

// ═══════════════════════════════════════════════════════════════════════
// ARRAYLIST
// ═══════════════════════════════════════════════════════════════════════

List<String> lista = new ArrayList<>();
lista.add("Java");
lista.add("Python");
lista.get(0);           // "Java"
lista.size();           // 2
lista.remove("Python");
lista.contains("Java"); // true

for (String item : lista) {
    System.out.println(item);
}

// ═══════════════════════════════════════════════════════════════════════
// HASHMAP
// ═══════════════════════════════════════════════════════════════════════

Map<String, Integer> mapa = new HashMap<>();
mapa.put("Juan", 25);
mapa.put("Ana", 30);
mapa.get("Juan");              // 25
mapa.getOrDefault("Pedro", 0); // 0
mapa.containsKey("Ana");       // true

for (Map.Entry<String, Integer> entry : mapa.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// ═══════════════════════════════════════════════════════════════════════
// STREAMS (Java 8+)
// ═══════════════════════════════════════════════════════════════════════

List<Producto> productos = Arrays.asList(
    new Producto("Laptop", 599990),
    new Producto("Mouse", 15990)
);

// Filtrar
List<Producto> baratos = productos.stream()
    .filter(p -> p.getPrecio() < 50000)
    .collect(Collectors.toList());

// Mapear
List<String> nombres = productos.stream()
    .map(Producto::getNombre)
    .collect(Collectors.toList());

// Sumar
double total = productos.stream()
    .mapToDouble(Producto::getPrecio)
    .sum();
```

---

## 📌 Excepciones Avanzadas

```java
// ═══════════════════════════════════════════════════════════════════════
// EXCEPCIÓN PERSONALIZADA
// ═══════════════════════════════════════════════════════════════════════

public class ValidacionException extends Exception {
    public ValidacionException(String mensaje) {
        super(mensaje);
    }
}

// ═══════════════════════════════════════════════════════════════════════
// USO
// ═══════════════════════════════════════════════════════════════════════

public void validarEdad(int edad) throws ValidacionException {
    if (edad < 0 || edad > 150) {
        throw new ValidacionException("Edad inválida: " + edad);
    }
}

// Try-with-resources
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    String linea = br.readLine();
} catch (IOException e) {
    e.printStackTrace();
}
```

---

<div align="center">

`{ Herencia inteligente · Polimorfismo elegante }`

</div>
