<div align="center">

![Scalability](https://img.shields.io/badge/Scalability-Patterns-27AE60?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-06-blue?style=flat-square)

# `Escalabilidad & Performance`

</div>

---

### 📈 Estrategias de Escalado

```
Escalado Vertical          Escalado Horizontal
     ┌───┐                   ┌───┐ ┌───┐ ┌───┐
     │ + │                   │   │ │   │ │   │
     │CPU│                   │ S │ │ S │ │ S │
     │RAM│                   │ 1 │ │ 2 │ │ 3 │
     └───┘                   └───┘ └───┘ └───┘
       │                           │
   Más potente              Más instancias
```

```java
// Caching
@Cacheable("productos")
public List<Producto> findAll() {
    return repository.findAll();
}

// Connection pooling
spring:
  datasource:
    hikari:
      maximum-pool-size: 20
      minimum-idle: 5

// Rate limiting
@RateLimiter(name = "api", fallbackMethod = "fallback")
public Response getResource() { ... }
```

| Técnica | Beneficio |
|:--------|:----------|
| Caching | Reduce latencia |
| CDN | Contenido estático |
| Load Balancer | Distribuir carga |
| DB Replication | Lecturas paralelas |

---

<div align="center">
<sub>Arquitectura de Software · Experiencia 3</sub>
</div>
