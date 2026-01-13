<div align="center">

![Patterns](https://img.shields.io/badge/Design-Patterns-9B59B6?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-02-blue?style=flat-square)

# `Patrones Estructurales`

</div>

---

### 🔌 Adapter & Decorator

```java
// Adapter
public class PayPalAdapter implements PaymentGateway {
    private PayPalSDK paypal;

    public PayPalAdapter(PayPalSDK paypal) {
        this.paypal = paypal;
    }

    @Override
    public void processPayment(double amount) {
        paypal.makePayment(amount, "USD");
    }
}

// Decorator
public class LoggingServiceDecorator implements UserService {
    private final UserService delegate;
    private final Logger log;

    @Override
    public User findById(Long id) {
        log.info("Finding user: {}", id);
        return delegate.findById(id);
    }
}
```

| Patrón | Propósito |
|:-------|:----------|
| Adapter | Compatibilidad interfaces |
| Decorator | Agregar funcionalidad |
| Facade | Simplificar subsistema |

---

<div align="center">
<sub>Ingeniería de Software II · Experiencia 1</sub>
</div>
