<div align="center">

![Kafka](https://img.shields.io/badge/Apache-Kafka-231F20?style=flat-square&logo=apachekafka&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-05-blue?style=flat-square)

# `Messaging con Kafka`

</div>

---

### 📨 Producer & Consumer

```java
// Producer
@Service
public class OrderEventProducer {

    private final KafkaTemplate<String, OrderEvent> kafkaTemplate;

    public void sendOrderCreated(OrderEvent event) {
        kafkaTemplate.send("orders", event.getId(), event);
    }
}

// Consumer
@Service
public class OrderEventConsumer {

    @KafkaListener(topics = "orders", groupId = "order-service")
    public void handleOrderEvent(OrderEvent event) {
        log.info("Received: {}", event);
        // Procesar evento
    }
}
```

| Concepto | Descripción |
|:---------|:------------|
| Topic | Canal de mensajes |
| Partition | División paralela |
| Consumer Group | Escalabilidad |
| Offset | Posición lectura |

---

<div align="center">
<sub>Backend II-III · Experiencia 2</sub>
</div>
