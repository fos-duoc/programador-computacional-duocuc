# ◈ Programación Orientada a Objetos I

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Bimestre 02 · Lenguaje: Java · Paradigma: POO Fundamentos                   │
└──────────────────────────────────────────────────────────────────────────────┘
```

## ⚡ Tabla de Contenidos

- [Clases y Objetos](#-clases-y-objetos)
- [Atributos y Métodos](#-atributos-y-métodos)
- [Constructores](#-constructores)
- [Encapsulamiento](#-encapsulamiento)
- [Modificadores de Acceso](#-modificadores-de-acceso)
- [Métodos Especiales](#-métodos-especiales)
- [Arreglos de Objetos](#-arreglos-de-objetos)
- [Relaciones entre Clases](#-relaciones-entre-clases)

---

## 📌 Clases y Objetos

```java
// ═══════════════════════════════════════════════════════════════════════
// DEFINICIÓN DE CLASE
// ═══════════════════════════════════════════════════════════════════════

public class Producto {
    // Atributos (estado)
    private int id;
    private String nombre;
    private double precio;
    private int stock;

    // Constructor
    public Producto(int id, String nombre, double precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = 0;
    }

    // Métodos (comportamiento)
    public void mostrarInfo() {
        System.out.println("Producto: " + nombre + " - $" + precio);
    }
}

// ═══════════════════════════════════════════════════════════════════════
// INSTANCIACIÓN DE OBJETOS
// ═══════════════════════════════════════════════════════════════════════

public class Main {
    public static void main(String[] args) {
        // Crear objeto (instancia)
        Producto laptop = new Producto(1, "Laptop HP", 599990);

        // Usar métodos del objeto
        laptop.mostrarInfo();
    }
}
```

### Anatomía de una Clase

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              CLASE                                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌─────────────┐                                                           │
│   │ ATRIBUTOS   │  ← Estado/Propiedades (variables de instancia)            │
│   └─────────────┘    - private String nombre;                               │
│                      - private int edad;                                    │
│                                                                             │
│   ┌─────────────┐                                                           │
│   │CONSTRUCTORES│  ← Inicializan el objeto                                  │
│   └─────────────┘    - public Clase() { }                                   │
│                      - public Clase(String nombre) { }                      │
│                                                                             │
│   ┌─────────────┐                                                           │
│   │  MÉTODOS    │  ← Comportamiento/Acciones                                │
│   └─────────────┘    - public void saludar() { }                            │
│                      - public int calcular() { }                            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 📌 Atributos y Métodos

```java
public class Empleado {

    // ═══════════════════════════════════════════════════════════════════
    // ATRIBUTOS
    // ═══════════════════════════════════════════════════════════════════

    // Atributos de instancia (cada objeto tiene su copia)
    private String nombre;
    private double salario;

    // Atributo de clase (compartido por todos los objetos)
    private static int contadorEmpleados = 0;

    // Constante
    private static final double SALARIO_MINIMO = 500000;

    // ═══════════════════════════════════════════════════════════════════
    // MÉTODOS DE INSTANCIA
    // ═══════════════════════════════════════════════════════════════════

    // Método sin retorno
    public void mostrarDatos() {
        System.out.println("Nombre: " + nombre);
        System.out.println("Salario: $" + salario);
    }

    // Método con retorno
    public double calcularBonus() {
        return salario * 0.10;
    }

    // Método con parámetros
    public void aumentarSalario(double porcentaje) {
        this.salario += this.salario * (porcentaje / 100);
    }

    // ═══════════════════════════════════════════════════════════════════
    // MÉTODOS DE CLASE (static)
    // ═══════════════════════════════════════════════════════════════════

    public static int getContadorEmpleados() {
        return contadorEmpleados;
    }

    public static double getSalarioMinimo() {
        return SALARIO_MINIMO;
    }
}
```

### Tipos de Métodos

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ Tipo                │ Descripción                                            │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ void                │ No retorna valor                                       │
│ Con retorno         │ return tipo (int, String, Object, etc.)                │
│ Con parámetros      │ Recibe datos para procesar                             │
│ static              │ Pertenece a la clase, no requiere instancia            │
│ Getter              │ Retorna valor de atributo                              │
│ Setter              │ Modifica valor de atributo                             │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

---

## 📌 Constructores

```java
public class Cliente {
    private int id;
    private String nombre;
    private String email;
    private String telefono;

    // ═══════════════════════════════════════════════════════════════════
    // CONSTRUCTOR POR DEFECTO
    // ═══════════════════════════════════════════════════════════════════

    public Cliente() {
        this.id = 0;
        this.nombre = "Sin nombre";
        this.email = "";
        this.telefono = "";
    }

    // ═══════════════════════════════════════════════════════════════════
    // CONSTRUCTOR PARAMETRIZADO
    // ═══════════════════════════════════════════════════════════════════

    public Cliente(int id, String nombre) {
        this.id = id;
        this.nombre = nombre;
        this.email = "";
        this.telefono = "";
    }

    // ═══════════════════════════════════════════════════════════════════
    // CONSTRUCTOR COMPLETO
    // ═══════════════════════════════════════════════════════════════════

    public Cliente(int id, String nombre, String email, String telefono) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }

    // ═══════════════════════════════════════════════════════════════════
    // ENCADENAMIENTO DE CONSTRUCTORES
    // ═══════════════════════════════════════════════════════════════════

    public Cliente(int id, String nombre, String email) {
        this(id, nombre, email, "");  // Llama al constructor completo
    }
}

// Uso:
Cliente c1 = new Cliente();                           // Constructor por defecto
Cliente c2 = new Cliente(1, "Juan");                  // Constructor con 2 params
Cliente c3 = new Cliente(2, "Ana", "ana@mail.com");   // Constructor con 3 params
Cliente c4 = new Cliente(3, "Pedro", "p@mail.com", "+56912345678");
```

---

## 📌 Encapsulamiento

```java
public class CuentaBancaria {

    // ═══════════════════════════════════════════════════════════════════
    // ATRIBUTOS PRIVADOS (encapsulados)
    // ═══════════════════════════════════════════════════════════════════

    private String numeroCuenta;
    private double saldo;
    private boolean activa;

    // ═══════════════════════════════════════════════════════════════════
    // GETTERS (accesores)
    // ═══════════════════════════════════════════════════════════════════

    public String getNumeroCuenta() {
        return numeroCuenta;
    }

    public double getSaldo() {
        return saldo;
    }

    public boolean isActiva() {  // Para boolean: is + nombre
        return activa;
    }

    // ═══════════════════════════════════════════════════════════════════
    // SETTERS (mutadores) - Con validación
    // ═══════════════════════════════════════════════════════════════════

    public void setNumeroCuenta(String numeroCuenta) {
        if (numeroCuenta != null && numeroCuenta.length() == 10) {
            this.numeroCuenta = numeroCuenta;
        }
    }

    // Saldo no tiene setter público - se modifica via depositar/retirar

    public void setActiva(boolean activa) {
        this.activa = activa;
    }

    // ═══════════════════════════════════════════════════════════════════
    // MÉTODOS DE NEGOCIO (operaciones controladas)
    // ═══════════════════════════════════════════════════════════════════

    public boolean depositar(double monto) {
        if (monto > 0 && activa) {
            this.saldo += monto;
            return true;
        }
        return false;
    }

    public boolean retirar(double monto) {
        if (monto > 0 && monto <= saldo && activa) {
            this.saldo -= monto;
            return true;
        }
        return false;
    }
}
```

### Principio de Encapsulamiento

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   ╔═══════════════════════════════════════════════════════════════════╗     │
│   ║                         CLASE                                     ║     │
│   ║  ┌─────────────────────────────────────────────────────────────┐  ║     │
│   ║  │              DATOS PRIVADOS                                 │  ║     │
│   ║  │     - saldo                                                 │  ║     │
│   ║  │     - numeroCuenta                                          │  ║     │
│   ║  └─────────────────────────────────────────────────────────────┘  ║     │
│   ║                           │                                       ║     │
│   ║                           ▼                                       ║     │
│   ║  ┌─────────────────────────────────────────────────────────────┐  ║     │
│   ║  │         INTERFAZ PÚBLICA (métodos)                          │  ║     │
│   ║  │     + getSaldo()                                            │  ║     │
│   ║  │     + depositar(monto)                                      │  ║     │
│   ║  │     + retirar(monto)                                        │  ║     │
│   ║  └─────────────────────────────────────────────────────────────┘  ║     │
│   ╚═══════════════════════════════════════════════════════════════════╝     │
│                                                                             │
│   ◈ Datos ocultos, acceso controlado                                        │
│   ◈ Validación en setters y métodos                                         │
│   ◈ Flexibilidad para cambiar implementación interna                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 📌 Modificadores de Acceso

```java
public class EjemploModificadores {

    public int publico;         // Accesible desde cualquier lugar
    protected int protegido;    // Accesible en paquete + subclases
    int paquete;                // (default) Solo accesible en el paquete
    private int privado;        // Solo accesible en esta clase

}
```

### Tabla de Visibilidad

```
┌─────────────────┬─────────┬──────────┬───────────┬────────────────┐
│ Modificador     │ Clase   │ Paquete  │ Subclase  │ Mundo exterior │
├─────────────────┼─────────┼──────────┼───────────┼────────────────┤
│ private         │   ✓     │    ✗     │     ✗     │       ✗        │
│ (default)       │   ✓     │    ✓     │     ✗     │       ✗        │
│ protected       │   ✓     │    ✓     │     ✓     │       ✗        │
│ public          │   ✓     │    ✓     │     ✓     │       ✓        │
└─────────────────┴─────────┴──────────┴───────────┴────────────────┘
```

### Regla General

```
◈ Atributos    → private (siempre)
◈ Getters/Setters → public (según necesidad)
◈ Métodos de negocio → public
◈ Métodos auxiliares → private
◈ Clases → public (una por archivo .java)
```

---

## 📌 Métodos Especiales

```java
public class Producto {
    private int id;
    private String nombre;
    private double precio;

    // Constructor
    public Producto(int id, String nombre, double precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    // ═══════════════════════════════════════════════════════════════════
    // toString() - Representación en texto
    // ═══════════════════════════════════════════════════════════════════

    @Override
    public String toString() {
        return String.format("Producto[id=%d, nombre=%s, precio=%.2f]",
                            id, nombre, precio);
    }

    // ═══════════════════════════════════════════════════════════════════
    // equals() - Comparación de objetos
    // ═══════════════════════════════════════════════════════════════════

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;

        Producto otro = (Producto) obj;
        return this.id == otro.id;
    }

    // ═══════════════════════════════════════════════════════════════════
    // hashCode() - Código hash (necesario si usas equals)
    // ═══════════════════════════════════════════════════════════════════

    @Override
    public int hashCode() {
        return Integer.hashCode(id);
    }
}

// Uso:
Producto p = new Producto(1, "Mouse", 15990);
System.out.println(p);              // Usa toString()
System.out.println(p.toString());   // Explícito

Producto p2 = new Producto(1, "Mouse Inalámbrico", 19990);
System.out.println(p.equals(p2));   // true (mismo id)
```

---

## 📌 Arreglos de Objetos

```java
public class GestionProductos {

    public static void main(String[] args) {

        // ═══════════════════════════════════════════════════════════════
        // DECLARACIÓN E INICIALIZACIÓN
        // ═══════════════════════════════════════════════════════════════

        // Arreglo vacío de 10 posiciones
        Producto[] productos = new Producto[10];

        // Arreglo con objetos
        Producto[] catalogo = {
            new Producto(1, "Laptop", 599990),
            new Producto(2, "Mouse", 15990),
            new Producto(3, "Teclado", 29990)
        };

        // ═══════════════════════════════════════════════════════════════
        // AGREGAR ELEMENTOS
        // ═══════════════════════════════════════════════════════════════

        productos[0] = new Producto(1, "Monitor", 199990);
        productos[1] = new Producto(2, "Webcam", 45990);

        // ═══════════════════════════════════════════════════════════════
        // RECORRER ARREGLO
        // ═══════════════════════════════════════════════════════════════

        // For clásico
        for (int i = 0; i < catalogo.length; i++) {
            System.out.println(catalogo[i]);
        }

        // For-each (recomendado para lectura)
        for (Producto p : catalogo) {
            System.out.println(p.getNombre() + ": $" + p.getPrecio());
        }

        // ═══════════════════════════════════════════════════════════════
        // BUSCAR EN ARREGLO
        // ═══════════════════════════════════════════════════════════════

        public Producto buscarPorId(Producto[] productos, int id) {
            for (Producto p : productos) {
                if (p != null && p.getId() == id) {
                    return p;
                }
            }
            return null;  // No encontrado
        }

        // ═══════════════════════════════════════════════════════════════
        // FILTRAR
        // ═══════════════════════════════════════════════════════════════

        public void mostrarBaratos(Producto[] productos, double maxPrecio) {
            for (Producto p : productos) {
                if (p != null && p.getPrecio() <= maxPrecio) {
                    System.out.println(p);
                }
            }
        }
    }
}
```

---

## 📌 Relaciones entre Clases

```java
// ═══════════════════════════════════════════════════════════════════════
// ASOCIACIÓN: "tiene un" (referencia)
// ═══════════════════════════════════════════════════════════════════════

public class Pedido {
    private int id;
    private Cliente cliente;    // Asociación: Pedido tiene un Cliente
    private Producto[] items;

    public Pedido(int id, Cliente cliente) {
        this.id = id;
        this.cliente = cliente;
        this.items = new Producto[50];
    }
}

// ═══════════════════════════════════════════════════════════════════════
// COMPOSICIÓN: "está compuesto de" (vida dependiente)
// ═══════════════════════════════════════════════════════════════════════

public class Factura {
    private int numero;
    private DetalleFactura[] detalles;  // Composición: detalles no existen sin factura

    public Factura(int numero) {
        this.numero = numero;
        this.detalles = new DetalleFactura[100];
    }

    public void agregarDetalle(Producto producto, int cantidad) {
        // Crear detalle dentro de la factura
        DetalleFactura detalle = new DetalleFactura(producto, cantidad);
        // agregar a array...
    }
}

class DetalleFactura {
    private Producto producto;
    private int cantidad;
    private double subtotal;

    DetalleFactura(Producto producto, int cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
        this.subtotal = producto.getPrecio() * cantidad;
    }
}
```

### Diagrama de Relaciones

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   ASOCIACIÓN (referencia débil)                                             │
│   ┌──────────┐           ┌──────────┐                                       │
│   │  Pedido  │ ────────▷ │ Cliente  │   Pedido conoce a Cliente             │
│   └──────────┘           └──────────┘   Cliente existe independiente        │
│                                                                             │
│   ─────────────────────────────────────────────────────────────────────     │
│                                                                             │
│   COMPOSICIÓN (vida dependiente)                                            │
│   ┌──────────┐           ┌──────────┐                                       │
│   │ Factura  │ ◆───────▷ │ Detalle  │   Detalle no existe sin Factura       │
│   └──────────┘           └──────────┘   Se crea y destruye con Factura      │
│                                                                             │
│   ─────────────────────────────────────────────────────────────────────     │
│                                                                             │
│   AGREGACIÓN (colección)                                                    │
│   ┌──────────┐           ┌──────────┐                                       │
│   │ Empresa  │ ◇───────▷ │Empleados │   Empresa tiene empleados             │
│   └──────────┘           └──────────┘   Empleados pueden existir solos      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Patrón Común: Clase de Servicio

```java
public class ProductoService {
    private Producto[] productos;
    private int cantidad;

    public ProductoService(int capacidad) {
        this.productos = new Producto[capacidad];
        this.cantidad = 0;
    }

    public boolean agregar(Producto p) {
        if (cantidad < productos.length) {
            productos[cantidad++] = p;
            return true;
        }
        return false;
    }

    public Producto buscarPorId(int id) {
        for (int i = 0; i < cantidad; i++) {
            if (productos[i].getId() == id) {
                return productos[i];
            }
        }
        return null;
    }

    public void listarTodos() {
        System.out.println("\n═══ LISTADO DE PRODUCTOS ═══");
        for (int i = 0; i < cantidad; i++) {
            System.out.println(productos[i]);
        }
    }

    public boolean eliminar(int id) {
        for (int i = 0; i < cantidad; i++) {
            if (productos[i].getId() == id) {
                // Mover elementos
                for (int j = i; j < cantidad - 1; j++) {
                    productos[j] = productos[j + 1];
                }
                productos[--cantidad] = null;
                return true;
            }
        }
        return false;
    }
}
```

---

<div align="center">

`{ Objetos bien diseñados → Código mantenible }`

</div>
