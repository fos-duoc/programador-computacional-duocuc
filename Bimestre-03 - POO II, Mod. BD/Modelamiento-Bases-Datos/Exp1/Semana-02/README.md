<div align="center">

![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-02-blue?style=flat-square)

# `Modelo Entidad-Relación`

</div>

---

### 📋 Contenido

| Tema | Descripción |
|:-----|:------------|
| Entidad | Objeto del mundo real |
| Atributo | Característica de entidad |
| Relación | Asociación entre entidades |
| Clave primaria | Identificador único |

---

### 📝 Diagrama ER

```
┌─────────────┐         ┌─────────────┐
│  CLIENTE    │         │   PEDIDO    │
├─────────────┤  tiene  ├─────────────┤
│ ● id        │────────▷│ ● id        │
│ ○ nombre    │   1:N   │ ○ fecha     │
│ ○ email     │         │ ○ total     │
└─────────────┘         └─────────────┘
   (Entidad)              (Entidad)

● = Clave primaria    ○ = Atributo
```

---

<div align="center">
<sub>Modelamiento de BD · Experiencia 1</sub>
</div>
