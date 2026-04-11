<div align="center">

![Gateway](https://img.shields.io/badge/Spring-Cloud_Gateway-6DB33F?style=flat-square&logo=spring&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-07-blue?style=flat-square)

# `API Gateway & Service Discovery`

</div>

---

### 🌐 Configuración Gateway

```yaml
# application.yml
spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://USER-SERVICE
          predicates:
            - Path=/api/users/**
          filters:
            - StripPrefix=1

        - id: order-service
          uri: lb://ORDER-SERVICE
          predicates:
            - Path=/api/orders/**
```

```java
// Eureka Server
@SpringBootApplication
@EnableEurekaServer
public class DiscoveryServerApplication { }

// Eureka Client
@SpringBootApplication
@EnableDiscoveryClient
public class UserServiceApplication { }
```

| Componente | Función |
|:-----------|:--------|
| Eureka | Service Registry |
| Gateway | Routing, LB |
| Config | Configuración central |

---

<div align="center">
<sub>Backend II-III · Experiencia 3</sub>
</div>
