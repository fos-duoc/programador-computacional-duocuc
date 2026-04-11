<div align="center">

![Quality](https://img.shields.io/badge/Software-Quality-F39C12?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-08-blue?style=flat-square)

# `Métricas de Calidad`

</div>

---

### 📊 Métricas Clave

```java
// Complejidad Ciclomática
// if, while, for, case = +1
public int calculate(Order order) {  // CC=1
    if (order.isPremium()) {         // CC=2
        if (order.getTotal() > 100) { // CC=3
            return applyDiscount();
        }
    }
    return order.getTotal();
}

// Cobertura de Tests
@Test
void shouldApplyDiscount() {
    // Branch coverage: todos los caminos
    // Line coverage: todas las líneas
}
```

| Métrica | Objetivo |
|:--------|:---------|
| Cobertura | > 80% |
| Complejidad | < 10 |
| Duplicación | < 3% |
| Deuda Técnica | Minimizar |

```yaml
# SonarQube quality gate
sonar.qualitygate:
  coverage: 80
  duplications: 3
  maintainability: A
```

---

<div align="center">
<sub>Ingeniería de Software II · Experiencia 3</sub>
</div>
