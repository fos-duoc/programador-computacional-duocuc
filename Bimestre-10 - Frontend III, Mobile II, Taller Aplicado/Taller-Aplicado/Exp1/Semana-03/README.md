<div align="center">

![Setup](https://img.shields.io/badge/Project-Setup-4CAF50?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-03-blue?style=flat-square)

# `Configuración Inicial`

</div>

---

### ⚙️ Estructura Repositorio

```
proyecto-titulo/
├── backend/
│   ├── src/main/java/
│   ├── src/main/resources/
│   ├── src/test/
│   ├── Dockerfile
│   └── pom.xml
├── frontend/
│   ├── src/app/
│   ├── src/assets/
│   ├── angular.json
│   └── Dockerfile
├── docker-compose.yml
├── .github/
│   └── workflows/
│       ├── backend-ci.yml
│       └── frontend-ci.yml
└── README.md
```

```yaml
# docker-compose.yml
services:
  backend:
    build: ./backend
    ports:
      - "8080:8080"
    depends_on:
      - postgres
    environment:
      - SPRING_DATASOURCE_URL=jdbc:postgresql://postgres:5432/app

  frontend:
    build: ./frontend
    ports:
      - "4200:80"

  postgres:
    image: postgres:15
    environment:
      - POSTGRES_DB=app
      - POSTGRES_PASSWORD=secret
```

| Herramienta | Propósito |
|:------------|:----------|
| Docker Compose | Desarrollo local |
| GitHub Actions | CI/CD |
| SonarQube | Calidad código |

---

<div align="center">
<sub>Taller de Título · Experiencia 1</sub>
</div>
