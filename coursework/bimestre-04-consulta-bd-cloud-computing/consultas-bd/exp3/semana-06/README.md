<div align="center">

![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-06-blue?style=flat-square)

# `Subconsultas`

</div>

---

### 💻 Código

```sql
-- Subconsulta en WHERE
SELECT * FROM empleados
WHERE salario > (SELECT AVG(salario) FROM empleados);

-- Subconsulta con IN
SELECT * FROM productos
WHERE categoria_id IN (
    SELECT id FROM categorias WHERE activa = 'S'
);

-- Subconsulta correlacionada
SELECT e.nombre, e.salario
FROM empleados e
WHERE e.salario > (
    SELECT AVG(salario)
    FROM empleados
    WHERE depto_id = e.depto_id
);

-- EXISTS
SELECT * FROM clientes c
WHERE EXISTS (
    SELECT 1 FROM pedidos p WHERE p.cliente_id = c.id
);
```

---

<div align="center">
<sub>SQL Consultas · Experiencia 3</sub>
</div>
