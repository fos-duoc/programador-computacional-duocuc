<div align="center">

![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-06-blue?style=flat-square)

# `GitHub Actions`

</div>

---

### 📋 Contenido

| Concepto | Descripción |
|:---------|:------------|
| Workflow | Proceso automatizado |
| Job | Conjunto de pasos |
| Step | Acción individual |
| Trigger | Evento que activa |

---

### 💻 .github/workflows/ci.yml

```yaml
name: CI Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Java
        uses: actions/setup-java@v3
        with:
          java-version: '17'
          distribution: 'temurin'

      - name: Build
        run: mvn clean package

      - name: Test
        run: mvn test
```

---

<div align="center">
<sub>DevOps · Experiencia 3</sub>
</div>
