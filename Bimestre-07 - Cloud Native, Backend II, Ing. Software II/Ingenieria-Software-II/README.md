# ◈ Ingeniería de Software II

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Bimestre 07 · Patrones Avanzados · Clean Code · SOLID                       │
└──────────────────────────────────────────────────────────────────────────────┘
```

## ⚡ Contenido

- [SOLID](#-solid)
- [Patrones de Diseño](#-patrones)
- [Clean Code](#-clean-code)

---

## 📌 SOLID

```
╔══════════════════════════════════════════════════════════════════════════════╗
║   S - Single Responsibility    │ Una clase, una responsabilidad             ║
║   O - Open/Closed              │ Abierto a extensión, cerrado a modificación║
║   L - Liskov Substitution      │ Subtipos reemplazables por su tipo base    ║
║   I - Interface Segregation    │ Interfaces pequeñas y específicas          ║
║   D - Dependency Inversion     │ Depender de abstracciones, no concretos    ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

```java
// Dependency Inversion
public interface PaymentProcessor {
    void process(Payment payment);
}

public class StripeProcessor implements PaymentProcessor { ... }
public class PayPalProcessor implements PaymentProcessor { ... }

public class OrderService {
    private final PaymentProcessor processor;  // Depende de abstracción

    public OrderService(PaymentProcessor processor) {
        this.processor = processor;  // Inyección de dependencia
    }
}
```

---

## 📌 Patrones

```java
// ═══════════════════════════════════════════════════════════════════════
// REPOSITORY PATTERN
// ═══════════════════════════════════════════════════════════════════════

public interface ProductoRepository {
    Optional<Producto> findById(Long id);
    List<Producto> findAll();
    Producto save(Producto producto);
    void deleteById(Long id);
}

// ═══════════════════════════════════════════════════════════════════════
// SERVICE LAYER
// ═══════════════════════════════════════════════════════════════════════

@Service
public class ProductoService {
    private final ProductoRepository repository;
    private final ProductoMapper mapper;

    public ProductoDTO findById(Long id) {
        return repository.findById(id)
            .map(mapper::toDTO)
            .orElseThrow(() -> new NotFoundException("Producto no encontrado"));
    }
}

// ═══════════════════════════════════════════════════════════════════════
// DTO PATTERN
// ═══════════════════════════════════════════════════════════════════════

public record ProductoDTO(Long id, String nombre, Double precio) {}

@Mapper
public interface ProductoMapper {
    ProductoDTO toDTO(Producto entity);
    Producto toEntity(ProductoDTO dto);
}
```

---

## 📌 Clean Code

```
┌─────────────────────────────────────────────────────────────────────────────┐
│   PRINCIPIOS CLEAN CODE                                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ✓ Nombres descriptivos y pronunciables                                    │
│   ✓ Funciones pequeñas (< 20 líneas)                                        │
│   ✓ Una función = una responsabilidad                                       │
│   ✓ Evitar comentarios obvios                                               │
│   ✓ Código autoexplicativo                                                  │
│   ✓ DRY (Don't Repeat Yourself)                                             │
│   ✓ KISS (Keep It Simple, Stupid)                                           │
│   ✓ Manejo explícito de errores                                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

<div align="center">

`{ Código legible → Mantenible → Escalable }`

</div>
