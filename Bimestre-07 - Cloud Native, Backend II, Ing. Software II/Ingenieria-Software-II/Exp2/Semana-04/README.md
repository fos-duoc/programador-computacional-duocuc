<div align="center">

![SOLID](https://img.shields.io/badge/SOLID-Principles-2ECC71?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-04-blue?style=flat-square)

# `Principios SOLID`

</div>

---

### 📐 Los 5 Principios

```java
// S - Single Responsibility
class UserService { }      // Solo lógica usuarios
class EmailService { }     // Solo envío emails

// O - Open/Closed
interface Discount {
    double apply(double price);
}
// Extender sin modificar

// L - Liskov Substitution
class Rectangle { }
class Square extends Rectangle { }  // Debe funcionar igual

// I - Interface Segregation
interface Readable { void read(); }
interface Writable { void write(); }
// Interfaces pequeñas y específicas

// D - Dependency Inversion
class OrderService {
    private final PaymentGateway gateway;  // Depende de abstracción
}
```

| Principio | Clave |
|:----------|:------|
| SRP | Una razón para cambiar |
| OCP | Extensible sin modificar |
| LSP | Subtipos sustituibles |
| ISP | Interfaces específicas |
| DIP | Depender de abstracciones |

---

<div align="center">
<sub>Ingeniería de Software II · Experiencia 2</sub>
</div>
