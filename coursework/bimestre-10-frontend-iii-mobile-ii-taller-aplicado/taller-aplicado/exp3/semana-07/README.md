<div align="center">

![QA](https://img.shields.io/badge/QA-Testing-9C27B0?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-07-blue?style=flat-square)

# `Testing & QA Final`

</div>

---

### ✅ Checklist Pre-Release

```
┌─────────────────────────────────────────┐
│           QA CHECKLIST                  │
├─────────────────────────────────────────┤
│  □ Unit tests passing (>80% coverage)   │
│  □ Integration tests passing            │
│  □ E2E tests passing                    │
│  □ Performance testing (k6/JMeter)      │
│  □ Security scan (OWASP ZAP)            │
│  □ Accessibility audit (Lighthouse)     │
│  □ Cross-browser testing                │
│  □ Mobile responsive check              │
│  □ API documentation (Swagger)          │
│  □ Error handling verificado            │
└─────────────────────────────────────────┘
```

```bash
# Performance test con k6
k6 run --vus 100 --duration 30s load-test.js

# Security scan
docker run owasp/zap2docker-stable zap-baseline.py \
  -t https://app.com

# Lighthouse
npx lighthouse https://app.com --output html
```

| Métrica | Objetivo |
|:--------|:---------|
| Response time | < 200ms |
| Uptime | 99.9% |
| Lighthouse Score | > 90 |
| Coverage | > 80% |

---

<div align="center">
<sub>Taller de Título · Experiencia 3</sub>
</div>
