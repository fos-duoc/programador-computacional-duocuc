<div align="center">

![Event](https://img.shields.io/badge/Event_Driven-Architecture-9B59B6?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-05-blue?style=flat-square)

# `Arquitectura Event-Driven`

</div>

---

### 📨 Mensajería Asíncrona

```
┌────────────┐    ┌───────────────┐    ┌────────────┐
│  Producer  │───►│ Message Broker│───►│  Consumer  │
│  Service   │    │ (Kafka/RabbitMQ)   │  Service   │
└────────────┘    └───────────────┘    └────────────┘
                         │
                         ▼
                  ┌────────────┐
                  │  Consumer  │
                  │  Service 2 │
                  └────────────┘
```

```java
// Evento
public record OrderCreatedEvent(
    String orderId,
    String customerId,
    BigDecimal total,
    Instant createdAt
) { }

// Publisher
@Service
public class OrderService {
    @Autowired
    private ApplicationEventPublisher publisher;

    public Order createOrder(OrderRequest request) {
        Order order = // crear orden
        publisher.publishEvent(new OrderCreatedEvent(...));
        return order;
    }
}

// Consumer
@Component
public class NotificationHandler {
    @EventListener
    public void handle(OrderCreatedEvent event) {
        // Enviar email
    }
}
```

| Tipo | Descripción |
|:-----|:------------|
| Pub/Sub | Múltiples suscriptores |
| Queue | Un consumidor |
| Event Sourcing | Estado = eventos |

---

<div align="center">
<sub>Arquitectura de Software · Experiencia 2</sub>
</div>
