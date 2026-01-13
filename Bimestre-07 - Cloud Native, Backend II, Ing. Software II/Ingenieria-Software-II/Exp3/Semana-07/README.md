<div align="center">

![DDD](https://img.shields.io/badge/Domain-Driven_Design-1ABC9C?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-07-blue?style=flat-square)

# `Domain-Driven Design`

</div>

---

### 📦 Conceptos Clave

```java
// Entity (identidad)
public class Order {
    private OrderId id;
    private List<OrderLine> lines;

    public Money calculateTotal() { ... }
}

// Value Object (inmutable)
public record Money(BigDecimal amount, Currency currency) {
    public Money add(Money other) {
        return new Money(amount.add(other.amount), currency);
    }
}

// Aggregate Root
public class Order {  // Root
    private List<OrderLine> lines;  // Parte del agregado

    public void addLine(Product product, int qty) {
        // Regla de negocio
    }
}

// Repository
public interface OrderRepository {
    Order findById(OrderId id);
    void save(Order order);
}
```

| Concepto | Descripción |
|:---------|:------------|
| Entity | Tiene identidad |
| Value Object | Inmutable, por valor |
| Aggregate | Consistencia transaccional |
| Repository | Persistencia agregados |

---

<div align="center">
<sub>Ingeniería de Software II · Experiencia 3</sub>
</div>
