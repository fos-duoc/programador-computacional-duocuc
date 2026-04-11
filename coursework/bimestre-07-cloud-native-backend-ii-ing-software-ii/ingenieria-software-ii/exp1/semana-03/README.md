<div align="center">

![Patterns](https://img.shields.io/badge/Design-Patterns-9B59B6?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-03-blue?style=flat-square)

# `Patrones de Comportamiento`

</div>

---

### 🎭 Strategy & Observer

```java
// Strategy
public interface PricingStrategy {
    double calculate(Order order);
}

public class DiscountPricing implements PricingStrategy {
    public double calculate(Order order) {
        return order.getTotal() * 0.9;
    }
}

public class OrderService {
    private PricingStrategy pricing;

    public void setPricing(PricingStrategy pricing) {
        this.pricing = pricing;
    }
}

// Observer
public interface OrderObserver {
    void onOrderCreated(Order order);
}

public class NotificationService implements OrderObserver {
    public void onOrderCreated(Order order) {
        sendEmail(order.getCustomerEmail());
    }
}
```

| Patrón | Propósito |
|:-------|:----------|
| Strategy | Algoritmos intercambiables |
| Observer | Notificación eventos |
| Template | Esqueleto algoritmo |

---

<div align="center">
<sub>Ingeniería de Software II · Experiencia 1</sub>
</div>
