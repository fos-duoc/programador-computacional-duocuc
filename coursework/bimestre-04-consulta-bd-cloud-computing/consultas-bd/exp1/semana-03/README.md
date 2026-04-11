<div align="center">

![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-03-blue?style=flat-square)

# `Funciones SQL`

</div>

---

### 💻 Código

```sql
-- NUMÉRICAS
SELECT ROUND(15.678, 2);     -- 15.68
SELECT TRUNC(15.678, 2);     -- 15.67
SELECT MOD(10, 3);           -- 1
SELECT ABS(-5);              -- 5

-- TEXTO
SELECT UPPER(nombre) FROM empleados;
SELECT LOWER(email) FROM empleados;
SELECT LENGTH(nombre) FROM empleados;
SELECT SUBSTR(nombre, 1, 3) FROM empleados;
SELECT TRIM('  texto  ');

-- FECHA
SELECT SYSDATE FROM dual;
SELECT TO_CHAR(fecha, 'DD/MM/YYYY') FROM pedidos;
SELECT ADD_MONTHS(SYSDATE, 3);
SELECT MONTHS_BETWEEN(fecha_fin, fecha_inicio);

-- CONVERSIÓN
SELECT TO_NUMBER('123');
SELECT TO_DATE('01/12/2024', 'DD/MM/YYYY');
```

---

<div align="center">
<sub>SQL Consultas · Experiencia 1</sub>
</div>
