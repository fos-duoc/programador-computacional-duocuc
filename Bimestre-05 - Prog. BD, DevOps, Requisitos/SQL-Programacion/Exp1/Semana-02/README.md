<div align="center">

![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-02-blue?style=flat-square)

# `Control de Flujo`

</div>

---

### 💻 Código

```sql
DECLARE
    v_nota NUMBER := 65;
    v_resultado VARCHAR2(20);
BEGIN
    -- IF-ELSIF-ELSE
    IF v_nota >= 90 THEN
        v_resultado := 'Excelente';
    ELSIF v_nota >= 60 THEN
        v_resultado := 'Aprobado';
    ELSE
        v_resultado := 'Reprobado';
    END IF;

    -- CASE
    v_resultado := CASE
        WHEN v_nota >= 90 THEN 'A'
        WHEN v_nota >= 80 THEN 'B'
        WHEN v_nota >= 60 THEN 'C'
        ELSE 'F'
    END;

    DBMS_OUTPUT.PUT_LINE(v_resultado);
END;
/
```

---

<div align="center">
<sub>SQL Programación · Experiencia 1</sub>
</div>
