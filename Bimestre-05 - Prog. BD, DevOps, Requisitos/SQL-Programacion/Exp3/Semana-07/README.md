<div align="center">

![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-07-blue?style=flat-square)

# `Triggers`

</div>

---

### 💻 Código

```sql
-- Trigger BEFORE INSERT
CREATE OR REPLACE TRIGGER trg_empleado_bi
BEFORE INSERT ON empleados
FOR EACH ROW
BEGIN
    :NEW.fecha_creacion := SYSDATE;
    :NEW.usuario_creacion := USER;
END;
/

-- Trigger AFTER UPDATE
CREATE OR REPLACE TRIGGER trg_auditoria_salario
AFTER UPDATE OF salario ON empleados
FOR EACH ROW
BEGIN
    INSERT INTO auditoria_salarios (
        emp_id, salario_anterior, salario_nuevo, fecha, usuario
    ) VALUES (
        :OLD.id, :OLD.salario, :NEW.salario, SYSDATE, USER
    );
END;
/

-- Trigger de tabla (statement level)
CREATE OR REPLACE TRIGGER trg_log_operacion
AFTER INSERT OR UPDATE OR DELETE ON empleados
BEGIN
    INSERT INTO log_operaciones VALUES (SYSDATE, USER, 'EMPLEADOS');
END;
/
```

---

<div align="center">
<sub>SQL Programación · Experiencia 3</sub>
</div>
