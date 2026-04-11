<div align="center">

![Spring](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=spring-boot&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-04-blue?style=flat-square)

# `Services y DTOs`

</div>

---

### 💻 Código

```java
// DTO
public record ProductoDTO(
    Long id,
    String nombre,
    Double precio,
    String categoriaNombre
) {}

// Service
@Service
@Transactional
public class ProductoService {

    private final ProductoRepository repository;

    public List<ProductoDTO> findAll() {
        return repository.findAll().stream()
            .map(this::toDTO)
            .toList();
    }

    public ProductoDTO save(ProductoDTO dto) {
        Producto p = toEntity(dto);
        return toDTO(repository.save(p));
    }

    private ProductoDTO toDTO(Producto p) {
        return new ProductoDTO(
            p.getId(),
            p.getNombre(),
            p.getPrecio(),
            p.getCategoria().getNombre()
        );
    }
}
```

---

<div align="center">
<sub>Backend I · Experiencia 2</sub>
</div>
