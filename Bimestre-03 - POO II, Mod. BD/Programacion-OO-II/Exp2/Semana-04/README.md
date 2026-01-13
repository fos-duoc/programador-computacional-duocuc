<div align="center">

![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-04-blue?style=flat-square)

# `Streams API`

</div>

---

### 📋 Contenido

| Operación | Tipo |
|:----------|:-----|
| `filter` | Intermedia |
| `map` | Intermedia |
| `collect` | Terminal |
| `reduce` | Terminal |

---

### 💻 Código

```java
List<Producto> productos = getProductos();

// Filtrar y transformar
List<String> nombres = productos.stream()
    .filter(p -> p.getPrecio() > 1000)
    .map(Producto::getNombre)
    .collect(Collectors.toList());

// Sumar precios
double total = productos.stream()
    .mapToDouble(Producto::getPrecio)
    .sum();

// Agrupar
Map<String, List<Producto>> porCategoria =
    productos.stream()
        .collect(Collectors.groupingBy(
            Producto::getCategoria));
```

---

<div align="center">
<sub>Programación OO II · Experiencia 2</sub>
</div>
