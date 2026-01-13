<div align="center">

![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-08-blue?style=flat-square)

# `Patrones de Diseño`

</div>

---

### 📋 Contenido

| Patrón | Tipo |
|:-------|:-----|
| Singleton | Creacional |
| Factory | Creacional |
| Observer | Comportamiento |
| Strategy | Comportamiento |

---

### 💻 Código

```java
// SINGLETON
public class Config {
    private static Config instance;

    private Config() {}

    public static Config getInstance() {
        if (instance == null) {
            instance = new Config();
        }
        return instance;
    }
}

// FACTORY
public interface Vehiculo { void mover(); }

public class VehiculoFactory {
    public static Vehiculo crear(String tipo) {
        return switch(tipo) {
            case "auto" -> new Auto();
            case "moto" -> new Moto();
            default -> throw new IllegalArgumentException();
        };
    }
}
```

---

<div align="center">
<sub>Programación OO II · Experiencia 3</sub>
</div>
