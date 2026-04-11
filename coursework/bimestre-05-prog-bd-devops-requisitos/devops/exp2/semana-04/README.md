<div align="center">

![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-04-blue?style=flat-square)

# `Docker Compose`

</div>

---

### 📋 Contenido

| Concepto | Descripción |
|:---------|:------------|
| Compose | Multi-contenedor |
| Services | Definir servicios |
| Networks | Comunicación |
| Volumes | Persistencia |

---

### 💻 docker-compose.yml

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - DB_HOST=db
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      POSTGRES_DB: mydb
      POSTGRES_PASSWORD: secret
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

```bash
docker-compose up -d
docker-compose down
docker-compose logs -f
```

---

<div align="center">
<sub>DevOps · Experiencia 2</sub>
</div>
