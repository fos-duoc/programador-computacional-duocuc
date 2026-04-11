<div align="center">

![Architecture](https://img.shields.io/badge/System-Design-2196F3?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-02-blue?style=flat-square)

# `Diseño de Arquitectura`

</div>

---

### 🏗️ Stack Completo

```
┌─────────────────────────────────────────────────────┐
│                   ARQUITECTURA                      │
├─────────────────────────────────────────────────────┤
│  Frontend    │  Angular/Ionic PWA                   │
│  Backend     │  Spring Boot (Java 17)               │
│  Database    │  PostgreSQL + Redis (cache)          │
│  Auth        │  JWT + OAuth2                        │
│  Cloud       │  AWS (ECS, RDS, S3)                  │
│  CI/CD       │  GitHub Actions                      │
│  Monitoring  │  Prometheus + Grafana                │
└─────────────────────────────────────────────────────┘
```

```
┌─────────┐     ┌─────────┐     ┌─────────┐
│   PWA   │────►│   API   │────►│   DB    │
│ Angular │     │ Spring  │     │PostgreSQL│
└─────────┘     └────┬────┘     └─────────┘
                     │
              ┌──────▼──────┐
              │    Redis    │
              │   (Cache)   │
              └─────────────┘
```

| Decisión | Justificación |
|:---------|:--------------|
| Spring Boot | Experiencia equipo, ecosistema |
| PostgreSQL | ACID, JSON, extensiones |
| Angular | PWA ready, RxJS |
| AWS | Escalabilidad, servicios |

---

<div align="center">
<sub>Taller de Título · Experiencia 1</sub>
</div>
