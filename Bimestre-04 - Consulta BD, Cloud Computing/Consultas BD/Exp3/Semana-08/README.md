<div align="center">

![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-08-blue?style=flat-square)

# `Transacciones y Vistas`

</div>

---

### 💻 Código

```sql
-- TRANSACCIONES
BEGIN
    UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;
    UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;
    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
END;

-- SAVEPOINT
SAVEPOINT punto1;
-- operaciones...
ROLLBACK TO punto1;

-- VISTAS
CREATE VIEW v_empleados_activos AS
SELECT id, nombre, departamento, salario
FROM empleados
WHERE activo = 'S';

-- Usar vista
SELECT * FROM v_empleados_activos
WHERE departamento = 'IT';

-- Eliminar vista
DROP VIEW v_empleados_activos;
```

---

<div align="center">
<sub>SQL Consultas · Experiencia 3</sub>
</div>
