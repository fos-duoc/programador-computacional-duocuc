<div align="center">

![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-02-blue?style=flat-square)

# `WHERE y Filtros`

</div>

---

### 💻 Código

```sql
-- Comparación
SELECT * FROM productos WHERE precio > 1000;
SELECT * FROM empleados WHERE departamento = 'Ventas';

-- BETWEEN
SELECT * FROM pedidos
WHERE fecha BETWEEN '2024-01-01' AND '2024-12-31';

-- IN
SELECT * FROM empleados
WHERE departamento IN ('Ventas', 'Marketing', 'IT');

-- LIKE
SELECT * FROM clientes WHERE nombre LIKE 'A%';    -- Empieza con A
SELECT * FROM clientes WHERE email LIKE '%@gmail.com';

-- NULL
SELECT * FROM empleados WHERE telefono IS NULL;
SELECT * FROM empleados WHERE telefono IS NOT NULL;

-- AND / OR
SELECT * FROM productos
WHERE precio > 500 AND stock > 0;
```

---

<div align="center">
<sub>SQL Consultas · Experiencia 1</sub>
</div>
