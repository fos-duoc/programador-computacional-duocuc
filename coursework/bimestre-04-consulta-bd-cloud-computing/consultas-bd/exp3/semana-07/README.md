<div align="center">

![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-07-blue?style=flat-square)

# `DML - INSERT, UPDATE, DELETE`

</div>

---

### 💻 Código

```sql
-- INSERT
INSERT INTO empleados (id, nombre, salario)
VALUES (1, 'Juan Pérez', 50000);

-- INSERT múltiple
INSERT INTO empleados (id, nombre, salario)
SELECT id, nombre, salario FROM empleados_temp;

-- UPDATE
UPDATE empleados
SET salario = salario * 1.10
WHERE departamento = 'Ventas';

-- UPDATE con subconsulta
UPDATE empleados e
SET salario = (
    SELECT AVG(salario) FROM empleados
    WHERE depto_id = e.depto_id
);

-- DELETE
DELETE FROM empleados WHERE id = 100;

-- DELETE con subconsulta
DELETE FROM pedidos
WHERE cliente_id IN (
    SELECT id FROM clientes WHERE activo = 'N'
);
```

---

<div align="center">
<sub>SQL Consultas · Experiencia 3</sub>
</div>
