<div align="center">

![Microservices](https://img.shields.io/badge/Microservices-Architecture-FF6B6B?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-06-blue?style=flat-square)

# `Arquitectura Microservicios`

</div>

---

### 🏗️ Estructura

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Gateway   │────►│   Service   │────►│   Service   │
│   :8080     │     │   Users     │     │   Orders    │
└─────────────┘     └──────┬──────┘     └──────┬──────┘
                           │                    │
                    ┌──────▼──────┐      ┌──────▼──────┐
                    │  Users DB   │      │  Orders DB  │
                    └─────────────┘      └─────────────┘
```

```java
// Comunicación entre servicios
@FeignClient(name = "user-service")
public interface UserClient {

    @GetMapping("/api/users/{id}")
    UserDTO findById(@PathVariable Long id);
}
```

| Patrón | Propósito |
|:-------|:----------|
| API Gateway | Punto entrada único |
| Service Discovery | Registro dinámico |
| Circuit Breaker | Tolerancia fallos |

---

<div align="center">
<sub>Backend II-III · Experiencia 3</sub>
</div>
