<div align="center">

![Layers](https://img.shields.io/badge/Layered-Architecture-3498DB?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-02-blue?style=flat-square)

# `Arquitectura en Capas`

</div>

---

### 📚 Capas Típicas

```
┌─────────────────────────────────────┐
│         Presentation Layer          │
│    Controllers, Views, DTOs         │
├─────────────────────────────────────┤
│          Business Layer             │
│    Services, Use Cases, Domain      │
├─────────────────────────────────────┤
│         Persistence Layer           │
│    Repositories, DAOs, Entities     │
├─────────────────────────────────────┤
│          Database Layer             │
│    SQL, NoSQL, Cache                │
└─────────────────────────────────────┘
```

```java
// Flujo típico
@RestController     // Presentation
class ProductController {
    @Autowired
    ProductService service;  // Business
}

@Service            // Business
class ProductService {
    @Autowired
    ProductRepository repo;  // Persistence
}

@Repository         // Persistence
interface ProductRepository extends JpaRepository<Product, Long> { }
```

| Capa | Responsabilidad |
|:-----|:----------------|
| Presentation | UI, HTTP |
| Business | Lógica negocio |
| Persistence | Datos |

---

<div align="center">
<sub>Arquitectura de Software · Experiencia 1</sub>
</div>
