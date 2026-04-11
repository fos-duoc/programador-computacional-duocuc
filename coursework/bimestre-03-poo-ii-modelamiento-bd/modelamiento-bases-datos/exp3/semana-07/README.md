<div align="center">

![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-07-blue?style=flat-square)

# `DDL - ALTER & DROP`

</div>

---

### 📋 Contenido

| Comando | Uso |
|:--------|:----|
| `ALTER TABLE` | Modificar estructura |
| `ADD` | Agregar columna |
| `MODIFY` | Cambiar tipo |
| `DROP` | Eliminar columna/tabla |

---

### 💻 Código SQL

```sql
-- Agregar columna
ALTER TABLE cliente
ADD telefono VARCHAR2(20);

-- Modificar columna
ALTER TABLE cliente
MODIFY email VARCHAR2(150);

-- Eliminar columna
ALTER TABLE cliente
DROP COLUMN telefono;

-- Renombrar
ALTER TABLE cliente
RENAME COLUMN email TO correo;

-- Eliminar tabla
DROP TABLE pedido;
DROP TABLE cliente CASCADE CONSTRAINTS;
```

---

<div align="center">
<sub>Modelamiento de BD · Experiencia 3</sub>
</div>
