<div align="center">

![Deploy](https://img.shields.io/badge/Deployment-Production-FF9800?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-06-blue?style=flat-square)

# `Deploy a Producción`

</div>

---

### 🚀 Pipeline CI/CD

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run tests
        run: ./mvnw test

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Build Docker image
        run: docker build -t app:${{ github.sha }} .
      - name: Push to ECR
        run: |
          aws ecr get-login-password | docker login --username AWS --password-stdin $ECR_URL
          docker push $ECR_URL/app:${{ github.sha }}

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to ECS
        run: |
          aws ecs update-service --cluster prod --service app \
            --force-new-deployment
```

| Ambiente | URL | Propósito |
|:---------|:----|:----------|
| Dev | dev.app.com | Desarrollo |
| Staging | staging.app.com | QA |
| Prod | app.com | Producción |

---

<div align="center">
<sub>Taller de Título · Experiencia 3</sub>
</div>
