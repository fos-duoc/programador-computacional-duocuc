<div align="center">

![ADR](https://img.shields.io/badge/Architecture-Decision_Records-E74C3C?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-08-blue?style=flat-square)

# `Documentación Arquitectónica`

</div>

---

### 📋 Architecture Decision Record

```markdown
# ADR-001: Uso de PostgreSQL como base de datos

## Estado
Aceptado

## Contexto
Necesitamos una base de datos relacional para el sistema
de pedidos que maneje transacciones ACID.

## Decisión
Usar PostgreSQL 15 como motor de base de datos.

## Alternativas Consideradas
- MySQL: Menos features avanzadas
- MongoDB: No soporta ACID nativo

## Consecuencias
+ Soporte ACID completo
+ JSON nativo para flexibilidad
+ Buena comunidad y documentación
- Requiere DBA para optimización
- Mayor consumo de recursos que MySQL
```

| Diagrama | Propósito |
|:---------|:----------|
| C4 Context | Vista alto nivel |
| C4 Container | Aplicaciones/servicios |
| C4 Component | Componentes internos |
| Sequence | Flujos de interacción |

---

<div align="center">
<sub>Arquitectura de Software · Experiencia 3</sub>
</div>
