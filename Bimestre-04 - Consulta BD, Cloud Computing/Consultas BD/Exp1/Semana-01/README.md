<div align="center">

![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-01-blue?style=flat-square)

# `SELECT Básico`

</div>

---

### 💻 Código

```sql
-- Seleccionar todo
SELECT * FROM empleados;

-- Columnas específicas
SELECT nombre, salario FROM empleados;

-- Alias
SELECT nombre AS "Nombre Completo",
       salario AS sueldo
FROM empleados;

-- Concatenar
SELECT nombre || ' ' || apellido AS nombre_completo
FROM empleados;

-- Eliminar duplicados
SELECT DISTINCT departamento FROM empleados;

-- Ordenar
SELECT * FROM empleados ORDER BY salario DESC;
```

---

<div align="center">
<sub>SQL Consultas · Experiencia 1</sub>
</div>
