<div align="center">

![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-05-blue?style=flat-square)

# `Procedimientos y Funciones`

</div>

---

### 💻 Código

```sql
-- PROCEDIMIENTO
CREATE OR REPLACE PROCEDURE sp_aumentar_salario(
    p_emp_id IN NUMBER,
    p_porcentaje IN NUMBER
) AS
BEGIN
    UPDATE empleados
    SET salario = salario * (1 + p_porcentaje/100)
    WHERE id = p_emp_id;
    COMMIT;
END;
/

-- Ejecutar
EXEC sp_aumentar_salario(101, 10);

-- FUNCIÓN
CREATE OR REPLACE FUNCTION fn_calcular_edad(
    p_fecha_nac DATE
) RETURN NUMBER AS
BEGIN
    RETURN TRUNC(MONTHS_BETWEEN(SYSDATE, p_fecha_nac) / 12);
END;
/

-- Usar función
SELECT nombre, fn_calcular_edad(fecha_nac) AS edad
FROM empleados;
```

---

<div align="center">
<sub>SQL Programación · Experiencia 2</sub>
</div>
