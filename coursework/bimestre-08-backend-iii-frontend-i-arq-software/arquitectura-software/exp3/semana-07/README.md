<div align="center">

![Cloud](https://img.shields.io/badge/Cloud_Native-Architecture-FF9900?style=flat-square&logo=amazonaws&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-07-blue?style=flat-square)

# `Cloud Native Patterns`

</div>

---

### ☁️ The Twelve-Factor App

```
┌─────────────────────────────────────────────────┐
│              12 FACTOR APP                      │
├─────────────────────────────────────────────────┤
│  1. Codebase    │ Un repo, múltiples deploys   │
│  2. Dependencies│ Declarar y aislar            │
│  3. Config      │ Almacenar en environment     │
│  4. Backing     │ Servicios como recursos      │
│  5. Build/Run   │ Separar etapas               │
│  6. Processes   │ Stateless                    │
│  7. Port binding│ Exportar servicios vía port  │
│  8. Concurrency │ Escalar via procesos         │
│  9. Disposability│ Fast startup/shutdown       │
│ 10. Dev/Prod    │ Mantener similares           │
│ 11. Logs        │ Tratar como streams          │
│ 12. Admin       │ Tareas como procesos         │
└─────────────────────────────────────────────────┘
```

| Servicio | AWS | Azure | GCP |
|:---------|:----|:------|:----|
| Compute | ECS, Lambda | AKS, Functions | GKE, Cloud Run |
| Storage | S3 | Blob | Cloud Storage |
| Database | RDS, DynamoDB | CosmosDB | Cloud SQL |
| Queue | SQS | Service Bus | Pub/Sub |

---

<div align="center">
<sub>Arquitectura de Software · Experiencia 3</sub>
</div>
