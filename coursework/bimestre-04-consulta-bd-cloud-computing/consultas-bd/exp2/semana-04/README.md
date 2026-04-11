<div align="center">

![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-04-blue?style=flat-square)

# `Funciones de Grupo`

</div>

---

### 💻 Código

```sql
-- AGREGACIÓN
SELECT COUNT(*) FROM empleados;
SELECT COUNT(DISTINCT departamento) FROM empleados;
SELECT SUM(salario) FROM empleados;
SELECT AVG(salario) FROM empleados;
SELECT MAX(salario), MIN(salario) FROM empleados;

-- GROUP BY
SELECT departamento, COUNT(*), AVG(salario)
FROM empleados
GROUP BY departamento;

-- HAVING (filtro de grupos)
SELECT departamento, AVG(salario) as promedio
FROM empleados
GROUP BY departamento
HAVING AVG(salario) > 50000;

-- Orden de ejecución
-- FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY
```

---

<div align="center">
<sub>SQL Consultas · Experiencia 2</sub>
</div>
