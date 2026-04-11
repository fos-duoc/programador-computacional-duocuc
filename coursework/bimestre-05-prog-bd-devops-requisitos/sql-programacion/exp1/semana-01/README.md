<div align="center">

![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)
![PL/SQL](https://img.shields.io/badge/PL%2FSQL-Programación-orange?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-01-blue?style=flat-square)

# `PL/SQL Fundamentos`

</div>

---

### 💻 Código

```sql
-- Bloque anónimo
DECLARE
    v_nombre VARCHAR2(100);
    v_salario NUMBER(10,2) := 50000;
    v_fecha DATE := SYSDATE;
BEGIN
    v_nombre := 'Juan Pérez';
    DBMS_OUTPUT.PUT_LINE('Nombre: ' || v_nombre);
    DBMS_OUTPUT.PUT_LINE('Salario: $' || v_salario);
EXCEPTION
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/
```

---

<div align="center">
<sub>SQL Programación · Experiencia 1</sub>
</div>
