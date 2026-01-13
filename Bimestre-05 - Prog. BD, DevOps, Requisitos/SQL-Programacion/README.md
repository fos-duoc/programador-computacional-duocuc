# ◈ SQL Programación

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Bimestre 05 · PL/SQL · Procedimientos · Funciones · Triggers                │
└──────────────────────────────────────────────────────────────────────────────┘
```

## ⚡ Tabla de Contenidos

- [Fundamentos PL/SQL](#-fundamentos-plsql)
- [Procedimientos](#-procedimientos)
- [Funciones](#-funciones)
- [Cursores](#-cursores)
- [Triggers](#-triggers)
- [Excepciones](#-excepciones)

---

## 📌 Fundamentos PL/SQL

```sql
-- ═══════════════════════════════════════════════════════════════════════
-- BLOQUE ANÓNIMO
-- ═══════════════════════════════════════════════════════════════════════

DECLARE
    -- Variables
    v_nombre VARCHAR2(100);
    v_salario NUMBER(10,2) := 0;
    v_fecha DATE := SYSDATE;
    v_activo BOOLEAN := TRUE;

BEGIN
    -- Código ejecutable
    v_nombre := 'Juan Pérez';
    v_salario := 1500000;

    DBMS_OUTPUT.PUT_LINE('Nombre: ' || v_nombre);
    DBMS_OUTPUT.PUT_LINE('Salario: $' || v_salario);

EXCEPTION
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/

-- ═══════════════════════════════════════════════════════════════════════
-- TIPOS DE DATOS
-- ═══════════════════════════════════════════════════════════════════════

v_numero    NUMBER(10,2);
v_texto     VARCHAR2(100);
v_fecha     DATE;
v_booleano  BOOLEAN;
v_rowid     ROWID;

-- Referencia a columna de tabla
v_nombre    empleados.nombre%TYPE;

-- Referencia a fila completa
v_empleado  empleados%ROWTYPE;

-- ═══════════════════════════════════════════════════════════════════════
-- ESTRUCTURAS DE CONTROL
-- ═══════════════════════════════════════════════════════════════════════

-- IF-THEN-ELSIF-ELSE
IF v_salario < 1000000 THEN
    v_categoria := 'Bajo';
ELSIF v_salario < 2000000 THEN
    v_categoria := 'Medio';
ELSE
    v_categoria := 'Alto';
END IF;

-- CASE
v_categoria := CASE
    WHEN v_salario < 1000000 THEN 'Bajo'
    WHEN v_salario < 2000000 THEN 'Medio'
    ELSE 'Alto'
END;

-- LOOP básico
LOOP
    v_contador := v_contador + 1;
    EXIT WHEN v_contador > 10;
END LOOP;

-- FOR LOOP
FOR i IN 1..10 LOOP
    DBMS_OUTPUT.PUT_LINE('Iteración: ' || i);
END LOOP;

-- FOR LOOP reverso
FOR i IN REVERSE 1..10 LOOP
    DBMS_OUTPUT.PUT_LINE('Iteración: ' || i);
END LOOP;

-- WHILE LOOP
WHILE v_contador <= 10 LOOP
    v_contador := v_contador + 1;
END LOOP;
```

---

## 📌 Procedimientos

```sql
-- ═══════════════════════════════════════════════════════════════════════
-- CREAR PROCEDIMIENTO
-- ═══════════════════════════════════════════════════════════════════════

CREATE OR REPLACE PROCEDURE aumentar_salario(
    p_empleado_id IN NUMBER,
    p_porcentaje  IN NUMBER
)
IS
    v_salario_actual NUMBER;
    v_nuevo_salario  NUMBER;
BEGIN
    -- Obtener salario actual
    SELECT salario INTO v_salario_actual
    FROM empleados
    WHERE empleado_id = p_empleado_id;

    -- Calcular nuevo salario
    v_nuevo_salario := v_salario_actual * (1 + p_porcentaje/100);

    -- Actualizar
    UPDATE empleados
    SET salario = v_nuevo_salario
    WHERE empleado_id = p_empleado_id;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Salario actualizado de $' ||
                         v_salario_actual || ' a $' || v_nuevo_salario);

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Empleado no encontrado');
    WHEN OTHERS THEN
        ROLLBACK;
        RAISE;
END;
/

-- ═══════════════════════════════════════════════════════════════════════
-- PROCEDIMIENTO CON PARÁMETROS OUT
-- ═══════════════════════════════════════════════════════════════════════

CREATE OR REPLACE PROCEDURE obtener_info_empleado(
    p_empleado_id IN  NUMBER,
    p_nombre      OUT VARCHAR2,
    p_salario     OUT NUMBER,
    p_depto       OUT VARCHAR2
)
IS
BEGIN
    SELECT e.nombre, e.salario, d.nombre
    INTO p_nombre, p_salario, p_depto
    FROM empleados e
    JOIN departamentos d ON e.departamento_id = d.departamento_id
    WHERE e.empleado_id = p_empleado_id;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        p_nombre := NULL;
        p_salario := NULL;
        p_depto := NULL;
END;
/

-- ═══════════════════════════════════════════════════════════════════════
-- EJECUTAR PROCEDIMIENTO
-- ═══════════════════════════════════════════════════════════════════════

-- Ejecutar directamente
EXEC aumentar_salario(101, 10);

-- Desde bloque PL/SQL
DECLARE
    v_nombre  VARCHAR2(100);
    v_salario NUMBER;
    v_depto   VARCHAR2(100);
BEGIN
    obtener_info_empleado(101, v_nombre, v_salario, v_depto);
    DBMS_OUTPUT.PUT_LINE(v_nombre || ' - $' || v_salario || ' - ' || v_depto);
END;
/
```

---

## 📌 Funciones

```sql
-- ═══════════════════════════════════════════════════════════════════════
-- CREAR FUNCIÓN
-- ═══════════════════════════════════════════════════════════════════════

CREATE OR REPLACE FUNCTION calcular_bonus(
    p_empleado_id IN NUMBER
) RETURN NUMBER
IS
    v_salario NUMBER;
    v_antiguedad NUMBER;
    v_bonus NUMBER;
BEGIN
    -- Obtener datos
    SELECT salario,
           TRUNC(MONTHS_BETWEEN(SYSDATE, fecha_contrato)/12)
    INTO v_salario, v_antiguedad
    FROM empleados
    WHERE empleado_id = p_empleado_id;

    -- Calcular bonus según antigüedad
    v_bonus := CASE
        WHEN v_antiguedad < 1 THEN v_salario * 0.05
        WHEN v_antiguedad < 5 THEN v_salario * 0.10
        ELSE v_salario * 0.15
    END;

    RETURN v_bonus;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        RETURN 0;
END;
/

-- ═══════════════════════════════════════════════════════════════════════
-- USAR FUNCIÓN
-- ═══════════════════════════════════════════════════════════════════════

-- En SELECT
SELECT nombre, salario, calcular_bonus(empleado_id) AS bonus
FROM empleados;

-- En PL/SQL
DECLARE
    v_bonus NUMBER;
BEGIN
    v_bonus := calcular_bonus(101);
    DBMS_OUTPUT.PUT_LINE('Bonus: $' || v_bonus);
END;
/

-- ═══════════════════════════════════════════════════════════════════════
-- FUNCIÓN QUE RETORNA TABLA
-- ═══════════════════════════════════════════════════════════════════════

-- Crear tipo
CREATE OR REPLACE TYPE t_empleado_rec AS OBJECT (
    empleado_id NUMBER,
    nombre VARCHAR2(100),
    salario NUMBER
);
/

CREATE OR REPLACE TYPE t_empleado_tab AS TABLE OF t_empleado_rec;
/

-- Crear función
CREATE OR REPLACE FUNCTION obtener_empleados_depto(
    p_depto_id IN NUMBER
) RETURN t_empleado_tab PIPELINED
IS
BEGIN
    FOR r IN (SELECT empleado_id, nombre, salario
              FROM empleados
              WHERE departamento_id = p_depto_id)
    LOOP
        PIPE ROW(t_empleado_rec(r.empleado_id, r.nombre, r.salario));
    END LOOP;
    RETURN;
END;
/

-- Usar
SELECT * FROM TABLE(obtener_empleados_depto(10));
```

---

## 📌 Cursores

```sql
-- ═══════════════════════════════════════════════════════════════════════
-- CURSOR IMPLÍCITO
-- ═══════════════════════════════════════════════════════════════════════

DECLARE
    v_nombre VARCHAR2(100);
BEGIN
    SELECT nombre INTO v_nombre
    FROM empleados
    WHERE empleado_id = 101;

    -- Atributos del cursor implícito
    IF SQL%FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Encontrado: ' || v_nombre);
    END IF;

    DBMS_OUTPUT.PUT_LINE('Filas afectadas: ' || SQL%ROWCOUNT);
END;
/

-- ═══════════════════════════════════════════════════════════════════════
-- CURSOR EXPLÍCITO
-- ═══════════════════════════════════════════════════════════════════════

DECLARE
    CURSOR c_empleados IS
        SELECT empleado_id, nombre, salario
        FROM empleados
        WHERE departamento_id = 10;

    v_empleado c_empleados%ROWTYPE;
BEGIN
    OPEN c_empleados;

    LOOP
        FETCH c_empleados INTO v_empleado;
        EXIT WHEN c_empleados%NOTFOUND;

        DBMS_OUTPUT.PUT_LINE(v_empleado.nombre || ': $' || v_empleado.salario);
    END LOOP;

    CLOSE c_empleados;
END;
/

-- ═══════════════════════════════════════════════════════════════════════
-- CURSOR FOR LOOP (recomendado)
-- ═══════════════════════════════════════════════════════════════════════

DECLARE
    CURSOR c_empleados IS
        SELECT nombre, salario FROM empleados;
BEGIN
    FOR emp IN c_empleados LOOP
        DBMS_OUTPUT.PUT_LINE(emp.nombre || ': $' || emp.salario);
    END LOOP;
END;
/

-- Sin declarar cursor
BEGIN
    FOR emp IN (SELECT nombre, salario FROM empleados) LOOP
        DBMS_OUTPUT.PUT_LINE(emp.nombre || ': $' || emp.salario);
    END LOOP;
END;
/

-- ═══════════════════════════════════════════════════════════════════════
-- CURSOR CON PARÁMETROS
-- ═══════════════════════════════════════════════════════════════════════

DECLARE
    CURSOR c_empleados(p_depto_id NUMBER, p_salario_min NUMBER) IS
        SELECT nombre, salario
        FROM empleados
        WHERE departamento_id = p_depto_id
        AND salario > p_salario_min;
BEGIN
    FOR emp IN c_empleados(10, 1000000) LOOP
        DBMS_OUTPUT.PUT_LINE(emp.nombre || ': $' || emp.salario);
    END LOOP;
END;
/
```

---

## 📌 Triggers

```sql
-- ═══════════════════════════════════════════════════════════════════════
-- TRIGGER BEFORE INSERT
-- ═══════════════════════════════════════════════════════════════════════

CREATE OR REPLACE TRIGGER trg_empleado_before_insert
BEFORE INSERT ON empleados
FOR EACH ROW
BEGIN
    -- Generar ID si no viene
    IF :NEW.empleado_id IS NULL THEN
        :NEW.empleado_id := seq_empleados.NEXTVAL;
    END IF;

    -- Establecer fecha de creación
    :NEW.fecha_creacion := SYSDATE;
    :NEW.usuario_creacion := USER;
END;
/

-- ═══════════════════════════════════════════════════════════════════════
-- TRIGGER BEFORE UPDATE
-- ═══════════════════════════════════════════════════════════════════════

CREATE OR REPLACE TRIGGER trg_empleado_before_update
BEFORE UPDATE ON empleados
FOR EACH ROW
BEGIN
    -- Registrar modificación
    :NEW.fecha_modificacion := SYSDATE;
    :NEW.usuario_modificacion := USER;

    -- Validar aumento de salario (máx 20%)
    IF :NEW.salario > :OLD.salario * 1.2 THEN
        RAISE_APPLICATION_ERROR(-20001, 'Aumento de salario no puede exceder 20%');
    END IF;
END;
/

-- ═══════════════════════════════════════════════════════════════════════
-- TRIGGER AFTER (Auditoría)
-- ═══════════════════════════════════════════════════════════════════════

CREATE OR REPLACE TRIGGER trg_empleado_audit
AFTER INSERT OR UPDATE OR DELETE ON empleados
FOR EACH ROW
DECLARE
    v_accion VARCHAR2(10);
BEGIN
    IF INSERTING THEN
        v_accion := 'INSERT';
    ELSIF UPDATING THEN
        v_accion := 'UPDATE';
    ELSE
        v_accion := 'DELETE';
    END IF;

    INSERT INTO empleados_audit (
        empleado_id, accion, fecha, usuario,
        salario_anterior, salario_nuevo
    ) VALUES (
        COALESCE(:NEW.empleado_id, :OLD.empleado_id),
        v_accion,
        SYSDATE,
        USER,
        :OLD.salario,
        :NEW.salario
    );
END;
/

-- ═══════════════════════════════════════════════════════════════════════
-- TRIGGER DE TABLA (Statement level)
-- ═══════════════════════════════════════════════════════════════════════

CREATE OR REPLACE TRIGGER trg_empleado_statement
AFTER UPDATE ON empleados
BEGIN
    -- Se ejecuta una vez por statement, no por fila
    DBMS_OUTPUT.PUT_LINE('Tabla empleados actualizada');
END;
/
```

---

## 📌 Excepciones

```sql
-- ═══════════════════════════════════════════════════════════════════════
-- EXCEPCIONES PREDEFINIDAS
-- ═══════════════════════════════════════════════════════════════════════

BEGIN
    -- Código
    SELECT nombre INTO v_nombre
    FROM empleados
    WHERE empleado_id = 999999;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Empleado no encontrado');
    WHEN TOO_MANY_ROWS THEN
        DBMS_OUTPUT.PUT_LINE('Múltiples resultados');
    WHEN DUP_VAL_ON_INDEX THEN
        DBMS_OUTPUT.PUT_LINE('Valor duplicado');
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLCODE || ' - ' || SQLERRM);
END;
/

-- ═══════════════════════════════════════════════════════════════════════
-- EXCEPCIONES PERSONALIZADAS
-- ═══════════════════════════════════════════════════════════════════════

DECLARE
    e_salario_negativo EXCEPTION;
    v_salario NUMBER := -1000;
BEGIN
    IF v_salario < 0 THEN
        RAISE e_salario_negativo;
    END IF;

EXCEPTION
    WHEN e_salario_negativo THEN
        DBMS_OUTPUT.PUT_LINE('Error: Salario no puede ser negativo');
END;
/

-- ═══════════════════════════════════════════════════════════════════════
-- RAISE_APPLICATION_ERROR
-- ═══════════════════════════════════════════════════════════════════════

CREATE OR REPLACE PROCEDURE validar_salario(p_salario NUMBER)
IS
BEGIN
    IF p_salario < 0 THEN
        RAISE_APPLICATION_ERROR(-20001, 'Salario no puede ser negativo');
    END IF;

    IF p_salario > 10000000 THEN
        RAISE_APPLICATION_ERROR(-20002, 'Salario excede límite permitido');
    END IF;
END;
/
```

---

<div align="center">

`{ Lógica en la base de datos · Automatización robusta }`

</div>
