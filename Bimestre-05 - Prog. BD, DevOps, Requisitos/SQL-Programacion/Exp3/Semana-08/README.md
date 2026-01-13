<div align="center">

![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-08-blue?style=flat-square)

# `Packages`

</div>

---

### 💻 Código

```sql
-- ESPECIFICACIÓN (público)
CREATE OR REPLACE PACKAGE pkg_empleados AS
    PROCEDURE crear(p_nombre VARCHAR2, p_salario NUMBER);
    FUNCTION obtener_salario(p_id NUMBER) RETURN NUMBER;
    PROCEDURE aumentar_salario(p_id NUMBER, p_pct NUMBER);
END pkg_empleados;
/

-- CUERPO (implementación)
CREATE OR REPLACE PACKAGE BODY pkg_empleados AS

    PROCEDURE crear(p_nombre VARCHAR2, p_salario NUMBER) IS
    BEGIN
        INSERT INTO empleados (nombre, salario)
        VALUES (p_nombre, p_salario);
        COMMIT;
    END;

    FUNCTION obtener_salario(p_id NUMBER) RETURN NUMBER IS
        v_salario NUMBER;
    BEGIN
        SELECT salario INTO v_salario FROM empleados WHERE id = p_id;
        RETURN v_salario;
    END;

    PROCEDURE aumentar_salario(p_id NUMBER, p_pct NUMBER) IS
    BEGIN
        UPDATE empleados SET salario = salario * (1 + p_pct/100)
        WHERE id = p_id;
    END;

END pkg_empleados;
/

-- Uso
EXEC pkg_empleados.crear('Juan', 50000);
SELECT pkg_empleados.obtener_salario(1) FROM dual;
```

---

<div align="center">
<sub>SQL Programación · Experiencia 3</sub>
</div>
