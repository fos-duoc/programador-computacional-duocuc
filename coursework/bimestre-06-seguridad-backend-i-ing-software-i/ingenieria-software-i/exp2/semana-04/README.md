<div align="center">

![UML](https://img.shields.io/badge/UML-Diagramas-orange?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-04-blue?style=flat-square)

# `Diagramas UML`

</div>

---

### 📋 Tipos

| Diagrama | Propósito |
|:---------|:----------|
| **Clases** | Estructura estática |
| **Secuencia** | Interacción temporal |
| **Casos de Uso** | Funcionalidades |
| **Actividad** | Flujo de trabajo |

---

### 📝 Diagrama de Clases

```
┌─────────────────────┐
│      <<interface>>  │
│      Repository     │
├─────────────────────┤
│ + findAll(): List   │
│ + findById(id): T   │
│ + save(entity): T   │
└──────────▲──────────┘
           │
           │ implements
           │
┌──────────┴──────────┐
│  ProductoRepository │
├─────────────────────┤
│ - entityManager     │
├─────────────────────┤
│ + findByCategoria() │
└─────────────────────┘
```

---

<div align="center">
<sub>Ingeniería de Software I · Experiencia 2</sub>
</div>
