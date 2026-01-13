<div align="center">

![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-02-blue?style=flat-square)

# `Generics`

</div>

---

### 📋 Contenido

| Tema | Descripción |
|:-----|:------------|
| `<T>` | Tipo parametrizado |
| Clase genérica | Reutilización |
| Método genérico | Flexibilidad |

---

### 💻 Código

```java
// Clase genérica
public class Caja<T> {
    private T contenido;

    public void guardar(T item) {
        this.contenido = item;
    }

    public T obtener() {
        return contenido;
    }
}

// Uso
Caja<String> cajaTexto = new Caja<>();
cajaTexto.guardar("Hola");
String texto = cajaTexto.obtener();

Caja<Integer> cajaNumero = new Caja<>();
cajaNumero.guardar(42);
int numero = cajaNumero.obtener();
```

---

<div align="center">
<sub>Programación OO II · Experiencia 1</sub>
</div>
