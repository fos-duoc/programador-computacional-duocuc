<div align="center">

![Hexagonal](https://img.shields.io/badge/Hexagonal-Architecture-E67E22?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-03-blue?style=flat-square)

# `Arquitectura Hexagonal`

</div>

---

### ⬡ Ports & Adapters

```
         ┌───────────────────────────────┐
         │        Primary Adapters       │
         │     REST, GraphQL, CLI        │
         └───────────┬───────────────────┘
                     │
         ┌───────────▼───────────────────┐
         │      Input Ports (API)        │
         │        Use Cases              │
         ├───────────────────────────────┤
         │         DOMAIN                │
         │    Entities, Services         │
         ├───────────────────────────────┤
         │     Output Ports (SPI)        │
         │      Repositories             │
         └───────────┬───────────────────┘
                     │
         ┌───────────▼───────────────────┐
         │      Secondary Adapters       │
         │   Database, External APIs     │
         └───────────────────────────────┘
```

```java
// Port (interface en dominio)
public interface OrderRepository {
    Order save(Order order);
}

// Adapter (implementación)
@Repository
public class JpaOrderAdapter implements OrderRepository {
    public Order save(Order order) { ... }
}
```

| Concepto | Ubicación |
|:---------|:----------|
| Ports | Dominio (interfaces) |
| Adapters | Infraestructura |
| Domain | Centro, sin dependencias |

---

<div align="center">
<sub>Arquitectura de Software · Experiencia 1</sub>
</div>
