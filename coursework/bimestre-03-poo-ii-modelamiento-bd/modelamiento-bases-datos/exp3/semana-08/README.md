<div align="center">

![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-08-blue?style=flat-square)

# `Constraints`

</div>

---

### 📋 Contenido

| Constraint | Descripción |
|:-----------|:------------|
| `PRIMARY KEY` | Identificador único |
| `FOREIGN KEY` | Referencia a otra tabla |
| `UNIQUE` | Valores no repetidos |
| `CHECK` | Validación de datos |
| `NOT NULL` | Valor obligatorio |

---

### 💻 Código SQL

```sql
CREATE TABLE producto (
    id        NUMBER(10)   PRIMARY KEY,
    codigo    VARCHAR2(20) UNIQUE NOT NULL,
    nombre    VARCHAR2(100) NOT NULL,
    precio    NUMBER(10,2) CHECK (precio > 0),
    stock     NUMBER(5)    DEFAULT 0,
    categoria VARCHAR2(20) CHECK (
        categoria IN ('A','B','C')
    )
);

-- Agregar constraint después
ALTER TABLE producto
ADD CONSTRAINT uk_nombre UNIQUE (nombre);

-- Eliminar constraint
ALTER TABLE producto
DROP CONSTRAINT uk_nombre;
```

---

<div align="center">
<sub>Modelamiento de BD · Experiencia 3</sub>
</div>
