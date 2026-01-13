<div align="center">

![Spring](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=spring-boot&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-03-blue?style=flat-square)

# `Spring Data JPA`

</div>

---

### 💻 Código

```java
// Entidad
@Entity
@Table(name = "productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    private Double precio;

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;
}

// Repository
public interface ProductoRepository
        extends JpaRepository<Producto, Long> {

    List<Producto> findByNombreContaining(String nombre);
    List<Producto> findByPrecioGreaterThan(Double precio);

    @Query("SELECT p FROM Producto p WHERE p.categoria.id = :catId")
    List<Producto> findByCategoria(@Param("catId") Long catId);
}
```

---

<div align="center">
<sub>Backend I · Experiencia 1</sub>
</div>
