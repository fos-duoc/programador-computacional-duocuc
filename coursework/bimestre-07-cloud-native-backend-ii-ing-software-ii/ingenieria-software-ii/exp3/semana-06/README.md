<div align="center">

![Architecture](https://img.shields.io/badge/Clean-Architecture-3498DB?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-06-blue?style=flat-square)

# `Clean Architecture`

</div>

---

### 🏛️ Capas

```
┌─────────────────────────────────────────┐
│           Frameworks & Drivers          │
│  ┌───────────────────────────────────┐  │
│  │      Interface Adapters          │  │
│  │  ┌─────────────────────────────┐  │  │
│  │  │     Application Layer      │  │  │
│  │  │  ┌───────────────────────┐  │  │  │
│  │  │  │   Domain Entities    │  │  │  │
│  │  │  └───────────────────────┘  │  │  │
│  │  └─────────────────────────────┘  │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

```java
// Entities (innermost)
public class Order { }

// Use Cases
public interface CreateOrderUseCase {
    OrderResponse execute(CreateOrderRequest request);
}

// Interface Adapters
@RestController
public class OrderController { }

// Frameworks
@Repository
public class JpaOrderRepository { }
```

| Regla | Descripción |
|:------|:------------|
| Dependency Rule | Hacia adentro |
| Entities | Lógica negocio pura |
| Use Cases | Reglas aplicación |

---

<div align="center">
<sub>Ingeniería de Software II · Experiencia 3</sub>
</div>
