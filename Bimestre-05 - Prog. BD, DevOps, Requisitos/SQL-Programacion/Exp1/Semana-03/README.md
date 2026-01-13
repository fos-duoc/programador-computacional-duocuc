<div align="center">

![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-03-blue?style=flat-square)

# `Bucles`

</div>

---

### 💻 Código

```sql
DECLARE
    v_contador NUMBER := 1;
BEGIN
    -- LOOP básico
    LOOP
        DBMS_OUTPUT.PUT_LINE(v_contador);
        v_contador := v_contador + 1;
        EXIT WHEN v_contador > 5;
    END LOOP;

    -- WHILE
    v_contador := 1;
    WHILE v_contador <= 5 LOOP
        DBMS_OUTPUT.PUT_LINE(v_contador);
        v_contador := v_contador + 1;
    END LOOP;

    -- FOR
    FOR i IN 1..5 LOOP
        DBMS_OUTPUT.PUT_LINE(i);
    END LOOP;

    -- FOR reverso
    FOR i IN REVERSE 1..5 LOOP
        DBMS_OUTPUT.PUT_LINE(i);
    END LOOP;
END;
/
```

---

<div align="center">
<sub>SQL Programación · Experiencia 1</sub>
</div>
