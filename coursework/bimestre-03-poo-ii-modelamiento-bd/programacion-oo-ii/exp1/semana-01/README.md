<div align="center">

![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-01-blue?style=flat-square)

# `Clases Abstractas`

</div>

---

### 📋 Contenido

| Tema | Descripción |
|:-----|:------------|
| `abstract` | Clase no instanciable |
| Métodos abstractos | Sin implementación |
| Herencia | Obligar implementación |

---

### 💻 Código

```java
public abstract class Figura {
    protected String color;

    public abstract double area();
    public abstract double perimetro();

    public void mostrarColor() {
        System.out.println("Color: " + color);
    }
}

public class Circulo extends Figura {
    private double radio;

    @Override
    public double area() {
        return Math.PI * radio * radio;
    }

    @Override
    public double perimetro() {
        return 2 * Math.PI * radio;
    }
}
```

---

<div align="center">
<sub>Programación OO II · Experiencia 1</sub>
</div>
