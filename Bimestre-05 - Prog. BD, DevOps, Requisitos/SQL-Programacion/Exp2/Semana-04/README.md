<div align="center">

![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-04-blue?style=flat-square)

# `Cursores`

</div>

---

### 💻 Código

```sql
DECLARE
    -- Cursor explícito
    CURSOR c_empleados IS
        SELECT id, nombre, salario
        FROM empleados
        WHERE departamento = 'Ventas';

    v_emp c_empleados%ROWTYPE;
BEGIN
    OPEN c_empleados;
    LOOP
        FETCH c_empleados INTO v_emp;
        EXIT WHEN c_empleados%NOTFOUND;
        DBMS_OUTPUT.PUT_LINE(v_emp.nombre || ': $' || v_emp.salario);
    END LOOP;
    CLOSE c_empleados;

    -- Cursor FOR (más simple)
    FOR emp IN (SELECT nombre, salario FROM empleados) LOOP
        DBMS_OUTPUT.PUT_LINE(emp.nombre);
    END LOOP;
END;
/
```

---

<div align="center">
<sub>SQL Programación · Experiencia 2</sub>
</div>
