<div align="center">

![Patterns](https://img.shields.io/badge/Design-Patterns-9B59B6?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-01-blue?style=flat-square)

# `Patrones Creacionales`

</div>

---

### 🏭 Factory & Singleton

```java
// Factory Method
public interface PaymentFactory {
    Payment createPayment();
}

public class CreditCardFactory implements PaymentFactory {
    public Payment createPayment() {
        return new CreditCardPayment();
    }
}

// Singleton
public class DatabaseConnection {
    private static volatile DatabaseConnection instance;

    private DatabaseConnection() {}

    public static DatabaseConnection getInstance() {
        if (instance == null) {
            synchronized (DatabaseConnection.class) {
                if (instance == null) {
                    instance = new DatabaseConnection();
                }
            }
        }
        return instance;
    }
}
```

| Patrón | Propósito |
|:-------|:----------|
| Factory | Delegar creación |
| Singleton | Única instancia |
| Builder | Construcción paso a paso |

---

<div align="center">
<sub>Ingeniería de Software II · Experiencia 1</sub>
</div>
