<div align="center">

![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-05-blue?style=flat-square)

# `JOINs`

</div>

---

### 💻 Código

```sql
-- INNER JOIN (solo coincidencias)
SELECT e.nombre, d.nombre as departamento
FROM empleados e
INNER JOIN departamentos d ON e.depto_id = d.id;

-- LEFT JOIN (todos de izquierda)
SELECT c.nombre, p.id as pedido_id
FROM clientes c
LEFT JOIN pedidos p ON c.id = p.cliente_id;

-- RIGHT JOIN (todos de derecha)
SELECT e.nombre, d.nombre
FROM empleados e
RIGHT JOIN departamentos d ON e.depto_id = d.id;

-- FULL OUTER JOIN (todos de ambas)
SELECT e.nombre, d.nombre
FROM empleados e
FULL OUTER JOIN departamentos d ON e.depto_id = d.id;

-- Múltiples JOINs
SELECT p.id, c.nombre, pr.nombre
FROM pedidos p
JOIN clientes c ON p.cliente_id = c.id
JOIN productos pr ON p.producto_id = pr.id;
```

---

<div align="center">
<sub>SQL Consultas · Experiencia 2</sub>
</div>
