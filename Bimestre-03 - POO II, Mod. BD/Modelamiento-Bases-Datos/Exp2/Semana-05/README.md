<div align="center">

![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-05-blue?style=flat-square)

# `Normalización 3FN`

</div>

---

### 📋 Contenido

| Forma Normal | Regla |
|:-------------|:------|
| **3FN** | 2FN + sin dependencias transitivas |

---

### 📝 Ejemplo

```
❌ DEPENDENCIA TRANSITIVA:
┌────────────────────────────────────┐
│ emp_id │ nombre │ depto │ ubicacion│
└────────────────────────────────────┘
         ubicacion depende de depto
                  (no de emp_id)

✓ EN 3FN:
┌─────────────────────┐
│     EMPLEADO        │
├─────────────────────┤
│ emp_id │ nombre     │
│ depto_id (FK)       │
└─────────────────────┘

┌─────────────────────┐
│    DEPARTAMENTO     │
├─────────────────────┤
│ depto_id │ nombre   │
│ ubicacion           │
└─────────────────────┘
```

---

<div align="center">
<sub>Modelamiento de BD · Experiencia 2</sub>
</div>
