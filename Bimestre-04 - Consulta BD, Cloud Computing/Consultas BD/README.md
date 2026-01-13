# ◈ SQL Consultas

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Bimestre 04 · Oracle SQL · SELECT · JOIN · Subconsultas                     │
└──────────────────────────────────────────────────────────────────────────────┘
```

## ⚡ Tabla de Contenidos

- [SELECT Básico](#-select-básico)
- [Filtros y Ordenamiento](#-filtros-y-ordenamiento)
- [Funciones](#-funciones)
- [JOIN](#-join)
- [Subconsultas](#-subconsultas)
- [Agrupación](#-agrupación)

---

## 📌 SELECT Básico

```sql
-- ═══════════════════════════════════════════════════════════════════════
-- SINTAXIS BÁSICA
-- ═══════════════════════════════════════════════════════════════════════

SELECT columna1, columna2
FROM tabla;

SELECT * FROM empleados;                    -- Todas las columnas

SELECT nombre, salario FROM empleados;      -- Columnas específicas

SELECT DISTINCT departamento FROM empleados; -- Valores únicos

-- ═══════════════════════════════════════════════════════════════════════
-- ALIAS
-- ═══════════════════════════════════════════════════════════════════════

SELECT nombre AS "Nombre Completo",
       salario AS sueldo,
       salario * 12 AS "Salario Anual"
FROM empleados;

SELECT e.nombre, e.salario
FROM empleados e;                           -- Alias de tabla

-- ═══════════════════════════════════════════════════════════════════════
-- CONCATENACIÓN
-- ═══════════════════════════════════════════════════════════════════════

SELECT nombre || ' ' || apellido AS nombre_completo
FROM empleados;

SELECT CONCAT(nombre, ' ', apellido) AS nombre_completo
FROM empleados;
```

---

## 📌 Filtros y Ordenamiento

```sql
-- ═══════════════════════════════════════════════════════════════════════
-- WHERE
-- ═══════════════════════════════════════════════════════════════════════

SELECT * FROM empleados WHERE departamento_id = 10;

SELECT * FROM empleados WHERE salario > 1000000;

SELECT * FROM empleados WHERE nombre = 'Juan';

-- ═══════════════════════════════════════════════════════════════════════
-- OPERADORES DE COMPARACIÓN
-- ═══════════════════════════════════════════════════════════════════════

=       -- Igual
<>      -- Diferente (también !=)
>       -- Mayor que
<       -- Menor que
>=      -- Mayor o igual
<=      -- Menor o igual

-- ═══════════════════════════════════════════════════════════════════════
-- OPERADORES LÓGICOS
-- ═══════════════════════════════════════════════════════════════════════

SELECT * FROM empleados
WHERE departamento_id = 10 AND salario > 1000000;

SELECT * FROM empleados
WHERE departamento_id = 10 OR departamento_id = 20;

SELECT * FROM empleados
WHERE NOT departamento_id = 10;

-- ═══════════════════════════════════════════════════════════════════════
-- BETWEEN, IN, LIKE
-- ═══════════════════════════════════════════════════════════════════════

SELECT * FROM empleados
WHERE salario BETWEEN 500000 AND 1500000;

SELECT * FROM empleados
WHERE departamento_id IN (10, 20, 30);

SELECT * FROM empleados
WHERE nombre LIKE 'J%';           -- Empieza con J

SELECT * FROM empleados
WHERE nombre LIKE '%ez';          -- Termina con ez

SELECT * FROM empleados
WHERE nombre LIKE '%an%';         -- Contiene an

SELECT * FROM empleados
WHERE nombre LIKE '_uan';         -- 4 letras, termina en uan

-- ═══════════════════════════════════════════════════════════════════════
-- NULL
-- ═══════════════════════════════════════════════════════════════════════

SELECT * FROM empleados WHERE comision IS NULL;

SELECT * FROM empleados WHERE comision IS NOT NULL;

SELECT NVL(comision, 0) FROM empleados;     -- Si es NULL, usar 0

SELECT COALESCE(comision, bonus, 0) FROM empleados;  -- Primer no-null

-- ═══════════════════════════════════════════════════════════════════════
-- ORDER BY
-- ═══════════════════════════════════════════════════════════════════════

SELECT * FROM empleados ORDER BY nombre;              -- ASC por defecto

SELECT * FROM empleados ORDER BY salario DESC;        -- Descendente

SELECT * FROM empleados
ORDER BY departamento_id ASC, salario DESC;          -- Múltiples

SELECT * FROM empleados ORDER BY 3;                   -- Por posición
```

---

## 📌 Funciones

```sql
-- ═══════════════════════════════════════════════════════════════════════
-- FUNCIONES NUMÉRICAS
-- ═══════════════════════════════════════════════════════════════════════

ROUND(45.926, 2)     -- 45.93
TRUNC(45.926, 2)     -- 45.92
MOD(10, 3)           -- 1 (resto)
ABS(-15)             -- 15
CEIL(9.2)            -- 10
FLOOR(9.8)           -- 9
POWER(2, 3)          -- 8
SQRT(16)             -- 4

-- ═══════════════════════════════════════════════════════════════════════
-- FUNCIONES DE TEXTO
-- ═══════════════════════════════════════════════════════════════════════

UPPER('hola')        -- HOLA
LOWER('HOLA')        -- hola
INITCAP('juan perez') -- Juan Perez
LENGTH('hola')       -- 4
SUBSTR('hola', 2, 3) -- ola (desde pos 2, 3 caracteres)
TRIM('  hola  ')     -- 'hola'
LTRIM('  hola')      -- 'hola'
RTRIM('hola  ')      -- 'hola'
REPLACE('hola', 'o', 'a') -- hala
INSTR('hola', 'o')   -- 2 (posición de 'o')
LPAD('5', 3, '0')    -- 005
RPAD('5', 3, '0')    -- 500

-- ═══════════════════════════════════════════════════════════════════════
-- FUNCIONES DE FECHA
-- ═══════════════════════════════════════════════════════════════════════

SYSDATE              -- Fecha actual
CURRENT_DATE         -- Fecha actual
ADD_MONTHS(SYSDATE, 3)  -- Agregar 3 meses
MONTHS_BETWEEN(fecha1, fecha2)  -- Meses entre fechas
NEXT_DAY(SYSDATE, 'MONDAY')     -- Próximo lunes
LAST_DAY(SYSDATE)    -- Último día del mes
TRUNC(SYSDATE, 'MONTH') -- Primer día del mes
EXTRACT(YEAR FROM SYSDATE)   -- Año
EXTRACT(MONTH FROM SYSDATE)  -- Mes
EXTRACT(DAY FROM SYSDATE)    -- Día

-- Formatear fecha
TO_CHAR(SYSDATE, 'DD/MM/YYYY')      -- 20/12/2025
TO_CHAR(SYSDATE, 'DD-MON-YYYY')     -- 20-DEC-2025
TO_CHAR(SYSDATE, 'Day, DD Month YYYY') -- Friday, 20 December 2025

-- Convertir texto a fecha
TO_DATE('20/12/2025', 'DD/MM/YYYY')

-- ═══════════════════════════════════════════════════════════════════════
-- FUNCIONES DE CONVERSIÓN
-- ═══════════════════════════════════════════════════════════════════════

TO_CHAR(salario, '$999,999.99')   -- Número a texto formateado
TO_NUMBER('1234.56')              -- Texto a número
TO_DATE('2025-12-20', 'YYYY-MM-DD') -- Texto a fecha

-- ═══════════════════════════════════════════════════════════════════════
-- CASE / DECODE
-- ═══════════════════════════════════════════════════════════════════════

SELECT nombre,
       CASE
           WHEN salario < 1000000 THEN 'Bajo'
           WHEN salario < 2000000 THEN 'Medio'
           ELSE 'Alto'
       END AS nivel_salario
FROM empleados;

SELECT nombre,
       DECODE(departamento_id,
              10, 'Ventas',
              20, 'Marketing',
              30, 'IT',
              'Otro') AS departamento
FROM empleados;
```

---

## 📌 JOIN

```sql
-- ═══════════════════════════════════════════════════════════════════════
-- INNER JOIN (solo coincidencias)
-- ═══════════════════════════════════════════════════════════════════════

SELECT e.nombre, d.nombre AS departamento
FROM empleados e
INNER JOIN departamentos d ON e.departamento_id = d.departamento_id;

-- Sintaxis alternativa
SELECT e.nombre, d.nombre
FROM empleados e, departamentos d
WHERE e.departamento_id = d.departamento_id;

-- ═══════════════════════════════════════════════════════════════════════
-- LEFT JOIN (todos de la izquierda)
-- ═══════════════════════════════════════════════════════════════════════

SELECT e.nombre, d.nombre AS departamento
FROM empleados e
LEFT JOIN departamentos d ON e.departamento_id = d.departamento_id;

-- ═══════════════════════════════════════════════════════════════════════
-- RIGHT JOIN (todos de la derecha)
-- ═══════════════════════════════════════════════════════════════════════

SELECT e.nombre, d.nombre AS departamento
FROM empleados e
RIGHT JOIN departamentos d ON e.departamento_id = d.departamento_id;

-- ═══════════════════════════════════════════════════════════════════════
-- FULL OUTER JOIN (todos de ambos lados)
-- ═══════════════════════════════════════════════════════════════════════

SELECT e.nombre, d.nombre AS departamento
FROM empleados e
FULL OUTER JOIN departamentos d ON e.departamento_id = d.departamento_id;

-- ═══════════════════════════════════════════════════════════════════════
-- SELF JOIN (tabla consigo misma)
-- ═══════════════════════════════════════════════════════════════════════

SELECT e.nombre AS empleado, m.nombre AS jefe
FROM empleados e
LEFT JOIN empleados m ON e.jefe_id = m.empleado_id;

-- ═══════════════════════════════════════════════════════════════════════
-- MÚLTIPLES JOINS
-- ═══════════════════════════════════════════════════════════════════════

SELECT e.nombre, d.nombre AS departamento, c.nombre AS ciudad
FROM empleados e
JOIN departamentos d ON e.departamento_id = d.departamento_id
JOIN ciudades c ON d.ciudad_id = c.ciudad_id;
```

### Diagrama de JOINs

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   INNER JOIN          LEFT JOIN           RIGHT JOIN        FULL OUTER      │
│   ┌───┬───┐          ┌───┬───┐           ┌───┬───┐         ┌───┬───┐       │
│   │   │███│          │███│███│           │███│███│         │███│███│       │
│   │ A │███│ B        │███│███│ B       A │███│███│       A │███│███│ B     │
│   │   │███│          │███│███│           │███│███│         │███│███│       │
│   └───┴───┘          └───┴───┘           └───┴───┘         └───┴───┘       │
│   Solo donde         Todos de A          Todos de B        Todos de        │
│   A = B              + coinciden B       + coinciden A     ambos           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 📌 Subconsultas

```sql
-- ═══════════════════════════════════════════════════════════════════════
-- SUBCONSULTA EN WHERE
-- ═══════════════════════════════════════════════════════════════════════

-- Empleados con salario mayor al promedio
SELECT nombre, salario
FROM empleados
WHERE salario > (SELECT AVG(salario) FROM empleados);

-- Empleados del departamento de 'Juan'
SELECT nombre
FROM empleados
WHERE departamento_id = (
    SELECT departamento_id FROM empleados WHERE nombre = 'Juan'
);

-- ═══════════════════════════════════════════════════════════════════════
-- SUBCONSULTA CON IN
-- ═══════════════════════════════════════════════════════════════════════

SELECT nombre
FROM empleados
WHERE departamento_id IN (
    SELECT departamento_id FROM departamentos WHERE ciudad = 'Santiago'
);

-- ═══════════════════════════════════════════════════════════════════════
-- SUBCONSULTA CON EXISTS
-- ═══════════════════════════════════════════════════════════════════════

SELECT d.nombre
FROM departamentos d
WHERE EXISTS (
    SELECT 1 FROM empleados e WHERE e.departamento_id = d.departamento_id
);

-- ═══════════════════════════════════════════════════════════════════════
-- SUBCONSULTA EN FROM (Inline View)
-- ═══════════════════════════════════════════════════════════════════════

SELECT dept, promedio
FROM (
    SELECT departamento_id AS dept, AVG(salario) AS promedio
    FROM empleados
    GROUP BY departamento_id
) subquery
WHERE promedio > 1500000;

-- ═══════════════════════════════════════════════════════════════════════
-- SUBCONSULTA EN SELECT
-- ═══════════════════════════════════════════════════════════════════════

SELECT nombre,
       salario,
       (SELECT AVG(salario) FROM empleados) AS promedio_general
FROM empleados;
```

---

## 📌 Agrupación

```sql
-- ═══════════════════════════════════════════════════════════════════════
-- FUNCIONES DE AGREGACIÓN
-- ═══════════════════════════════════════════════════════════════════════

SELECT COUNT(*) FROM empleados;              -- Contar filas
SELECT COUNT(comision) FROM empleados;       -- Contar no-nulls
SELECT SUM(salario) FROM empleados;          -- Suma
SELECT AVG(salario) FROM empleados;          -- Promedio
SELECT MIN(salario) FROM empleados;          -- Mínimo
SELECT MAX(salario) FROM empleados;          -- Máximo

-- ═══════════════════════════════════════════════════════════════════════
-- GROUP BY
-- ═══════════════════════════════════════════════════════════════════════

SELECT departamento_id, COUNT(*) AS total, AVG(salario) AS promedio
FROM empleados
GROUP BY departamento_id;

SELECT departamento_id, cargo, COUNT(*)
FROM empleados
GROUP BY departamento_id, cargo;

-- ═══════════════════════════════════════════════════════════════════════
-- HAVING (filtro para grupos)
-- ═══════════════════════════════════════════════════════════════════════

SELECT departamento_id, AVG(salario) AS promedio
FROM empleados
GROUP BY departamento_id
HAVING AVG(salario) > 1500000;

SELECT departamento_id, COUNT(*) AS total
FROM empleados
WHERE salario > 1000000
GROUP BY departamento_id
HAVING COUNT(*) >= 5
ORDER BY total DESC;

-- ═══════════════════════════════════════════════════════════════════════
-- ROLLUP / CUBE (totales)
-- ═══════════════════════════════════════════════════════════════════════

SELECT departamento_id, cargo, SUM(salario)
FROM empleados
GROUP BY ROLLUP(departamento_id, cargo);  -- Subtotales y total

SELECT departamento_id, cargo, SUM(salario)
FROM empleados
GROUP BY CUBE(departamento_id, cargo);    -- Todas las combinaciones
```

### Orden de Ejecución

```
┌─────────────────────────────────────────────────────────────────────────────┐
│   1. FROM       → De qué tablas                                             │
│   2. JOIN       → Unir tablas                                               │
│   3. WHERE      → Filtrar filas                                             │
│   4. GROUP BY   → Agrupar                                                   │
│   5. HAVING     → Filtrar grupos                                            │
│   6. SELECT     → Qué columnas                                              │
│   7. DISTINCT   → Eliminar duplicados                                       │
│   8. ORDER BY   → Ordenar                                                   │
│   9. LIMIT      → Limitar resultados                                        │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

<div align="center">

`{ Consultas eficientes · Datos con sentido }`

</div>
