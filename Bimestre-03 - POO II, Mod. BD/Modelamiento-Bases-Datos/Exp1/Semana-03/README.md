<div align="center">

![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-03-blue?style=flat-square)

# `Cardinalidad`

</div>

---

### 📋 Contenido

| Tipo | Ejemplo |
|:-----|:--------|
| `1:1` | Persona → Pasaporte |
| `1:N` | Cliente → Pedidos |
| `N:M` | Estudiante ↔ Curso |

---

### 📝 Representación

```
1:1 (Uno a Uno)
┌────────┐      ┌────────┐
│ PERSONA│──────│PASAPORTE│
└────────┘  1 1 └────────┘

1:N (Uno a Muchos)
┌────────┐      ┌────────┐
│ CLIENTE│─────▷│ PEDIDO │
└────────┘  1 N └────────┘

N:M (Muchos a Muchos)
┌────────┐      ┌────────┐
│ALUMNO  │◁────▷│ CURSO  │
└────────┘  N M └────────┘
```

---

<div align="center">
<sub>Modelamiento de BD · Experiencia 1</sub>
</div>
