<div align="center">

![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-03-blue?style=flat-square)

# `Expresiones Lambda`

</div>

---

### 📋 Contenido

| Tema | Descripción |
|:-----|:------------|
| Lambda | Función anónima |
| Sintaxis | `(params) -> expresión` |
| Functional Interface | Un solo método abstracto |

---

### 💻 Código

```java
// Sin lambda
Comparator<String> comp1 = new Comparator<>() {
    @Override
    public int compare(String a, String b) {
        return a.compareTo(b);
    }
};

// Con lambda
Comparator<String> comp2 = (a, b) -> a.compareTo(b);

// Ejemplos
list.forEach(item -> System.out.println(item));
list.sort((a, b) -> a.length() - b.length());
list.removeIf(s -> s.isEmpty());

// Method reference
list.forEach(System.out::println);
```

---

<div align="center">
<sub>Programación OO II · Experiencia 1</sub>
</div>
