<div align="center">

![Refactoring](https://img.shields.io/badge/Refactoring-Code_Smells-E74C3C?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-05-blue?style=flat-square)

# `Refactoring & Code Smells`

</div>

---

### 🔧 Técnicas de Refactoring

```java
// ANTES - Long Method
public void processOrder(Order order) {
    // 100+ líneas de código...
}

// DESPUÉS - Extract Method
public void processOrder(Order order) {
    validateOrder(order);
    calculatePricing(order);
    applyDiscounts(order);
    sendConfirmation(order);
}

// ANTES - Feature Envy
class Order {
    void printInvoice(Customer c) {
        System.out.println(c.getName());
        System.out.println(c.getAddress());
    }
}

// DESPUÉS - Move Method
class Customer {
    String getInvoiceHeader() { ... }
}
```

| Code Smell | Solución |
|:-----------|:---------|
| Long Method | Extract Method |
| Feature Envy | Move Method |
| Data Clumps | Extract Class |
| Primitive Obsession | Value Object |

---

<div align="center">
<sub>Ingeniería de Software II · Experiencia 2</sub>
</div>
