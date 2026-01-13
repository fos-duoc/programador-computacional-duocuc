<div align="center">

![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-05-blue?style=flat-square)

# `Optional`

</div>

---

### 📋 Contenido

| Método | Descripción |
|:-------|:------------|
| `of()` | Crea con valor |
| `empty()` | Crea vacío |
| `isPresent()` | Verifica si hay valor |
| `orElse()` | Valor por defecto |

---

### 💻 Código

```java
// Evitar NullPointerException
public Optional<Usuario> buscar(String id) {
    Usuario u = repository.findById(id);
    return Optional.ofNullable(u);
}

// Uso
Optional<Usuario> opt = buscar("123");

// Verificar
if (opt.isPresent()) {
    System.out.println(opt.get().getNombre());
}

// Valor por defecto
String nombre = opt
    .map(Usuario::getNombre)
    .orElse("Anónimo");

// Lanzar excepción
Usuario u = opt.orElseThrow(
    () -> new NotFoundException("No existe"));
```

---

<div align="center">
<sub>Programación OO II · Experiencia 2</sub>
</div>
