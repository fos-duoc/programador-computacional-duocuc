<div align="center">

![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-06-blue?style=flat-square)

# `DDL - CREATE TABLE`

</div>

---

### 📋 Contenido

| Comando | Uso |
|:--------|:----|
| `CREATE TABLE` | Crear tabla |
| `PRIMARY KEY` | Clave primaria |
| `NOT NULL` | Campo obligatorio |
| `UNIQUE` | Valor único |

---

### 💻 Código SQL

```sql
CREATE TABLE cliente (
    id          NUMBER(10)    PRIMARY KEY,
    rut         VARCHAR2(12)  UNIQUE NOT NULL,
    nombre      VARCHAR2(100) NOT NULL,
    email       VARCHAR2(100),
    fecha_reg   DATE          DEFAULT SYSDATE
);

CREATE TABLE pedido (
    id          NUMBER(10)    PRIMARY KEY,
    cliente_id  NUMBER(10)    NOT NULL,
    fecha       DATE          DEFAULT SYSDATE,
    FOREIGN KEY (cliente_id)
        REFERENCES cliente(id)
);
```

---

<div align="center">
<sub>Modelamiento de BD · Experiencia 3</sub>
</div>
