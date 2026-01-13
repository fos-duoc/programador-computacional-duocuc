<div align="center">

![Observability](https://img.shields.io/badge/Observability-Monitoring-green?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-08-blue?style=flat-square)

# `Observabilidad`

</div>

---

### 📋 Tres Pilares

| Pilar | Herramienta |
|:------|:------------|
| **Logs** | ELK Stack, Loki |
| **Metrics** | Prometheus, Grafana |
| **Traces** | Jaeger, Zipkin |

---

### 💻 Prometheus + Grafana

```yaml
# Annotations para scraping
metadata:
  annotations:
    prometheus.io/scrape: "true"
    prometheus.io/port: "8080"
    prometheus.io/path: "/metrics"
```

```java
// Spring Boot Actuator
@RestController
public class HealthController {

    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("UP");
    }

    @GetMapping("/metrics")
    public ResponseEntity<Metrics> metrics() {
        // Exponer métricas
    }
}
```

---

<div align="center">
<sub>Cloud Native · Experiencia 3</sub>
</div>
