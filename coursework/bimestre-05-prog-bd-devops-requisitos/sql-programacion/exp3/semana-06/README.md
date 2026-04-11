<div align="center">

![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-06-blue?style=flat-square)

# `Excepciones`

</div>

---

### 💻 Código

```sql
DECLARE
    v_nombre VARCHAR2(100);
    e_salario_negativo EXCEPTION;
    v_salario NUMBER := -1000;
BEGIN
    -- Excepción personalizada
    IF v_salario < 0 THEN
        RAISE e_salario_negativo;
    END IF;

    SELECT nombre INTO v_nombre
    FROM empleados WHERE id = 999;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Empleado no encontrado');

    WHEN TOO_MANY_ROWS THEN
        DBMS_OUTPUT.PUT_LINE('Múltiples resultados');

    WHEN e_salario_negativo THEN
        DBMS_OUTPUT.PUT_LINE('Salario no puede ser negativo');

    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLCODE || ' - ' || SQLERRM);
        ROLLBACK;
END;
/
```

---

<div align="center">
<sub>SQL Programación · Experiencia 3</sub>
</div>
