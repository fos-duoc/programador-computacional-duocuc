<div align="center">

![Spring](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=spring-boot&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-06-blue?style=flat-square)

# `Relaciones JPA`

</div>

---

### 💻 Código

```java
// One-to-Many
@Entity
public class Categoria {
    @Id @GeneratedValue
    private Long id;

    @OneToMany(mappedBy = "categoria", cascade = CascadeType.ALL)
    private List<Producto> productos;
}

// Many-to-One
@Entity
public class Producto {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;
}

// Many-to-Many
@Entity
public class Pedido {
    @ManyToMany
    @JoinTable(
        name = "pedido_producto",
        joinColumns = @JoinColumn(name = "pedido_id"),
        inverseJoinColumns = @JoinColumn(name = "producto_id")
    )
    private Set<Producto> productos;
}
```

---

<div align="center">
<sub>Backend I · Experiencia 3</sub>
</div>
