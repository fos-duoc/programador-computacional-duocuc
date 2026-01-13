<div align="center">

![Sprint](https://img.shields.io/badge/Sprint-1-673AB7?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-04-blue?style=flat-square)

# `Sprint 1: Core Features`

</div>

---

### 🎯 Objetivos Sprint 1

```
┌─────────────────────────────────────────┐
│              SPRINT 1                   │
├─────────────────────────────────────────┤
│  ✓ Autenticación (registro/login)       │
│  ✓ CRUD principal del dominio           │
│  ✓ UI base con navegación               │
│  ✓ Tests unitarios (>70% coverage)      │
│  ✓ CI pipeline funcionando              │
└─────────────────────────────────────────┘
```

```java
// Entidad principal
@Entity
public class [Dominio] {
    @Id @GeneratedValue
    private Long id;
    // campos...
}

// Controller base
@RestController
@RequestMapping("/api/v1/[dominio]")
public class [Dominio]Controller {
    @GetMapping
    public List<[Dominio]DTO> findAll() { }

    @PostMapping
    public [Dominio]DTO create(@Valid @RequestBody CreateRequest req) { }
}
```

| Story | Puntos |
|:------|:-------|
| Auth - Registro | 5 |
| Auth - Login | 3 |
| CRUD Entidad Principal | 8 |
| UI - Navegación | 5 |

---

<div align="center">
<sub>Taller de Título · Experiencia 2</sub>
</div>
