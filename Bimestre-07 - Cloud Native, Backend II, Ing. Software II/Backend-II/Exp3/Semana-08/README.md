<div align="center">

![Observability](https://img.shields.io/badge/Observability-Monitoring-E6522C?style=flat-square&logo=grafana&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-08-blue?style=flat-square)

# `Distributed Tracing & Monitoring`

</div>

---

### 📊 Stack Observabilidad

```yaml
# docker-compose.yml
services:
  prometheus:
    image: prom/prometheus
    ports:
      - "9090:9090"

  grafana:
    image: grafana/grafana
    ports:
      - "3000:3000"

  zipkin:
    image: openzipkin/zipkin
    ports:
      - "9411:9411"
```

```java
// Micrometer Tracing
@RestController
public class OrderController {

    private final Tracer tracer;

    @GetMapping("/orders/{id}")
    public Order getOrder(@PathVariable Long id) {
        Span span = tracer.nextSpan().name("getOrder");
        try (Tracer.SpanInScope ws = tracer.withSpan(span.start())) {
            return orderService.findById(id);
        } finally {
            span.end();
        }
    }
}
```

| Herramienta | Uso |
|:------------|:----|
| Prometheus | Métricas |
| Grafana | Dashboards |
| Zipkin | Tracing |

---

<div align="center">
<sub>Backend II-III · Experiencia 3</sub>
</div>
