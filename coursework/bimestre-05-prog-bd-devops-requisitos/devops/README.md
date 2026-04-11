# ◈ DevOps

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Bimestre 03 · Git · CI/CD · Docker · Automatización                         │
└──────────────────────────────────────────────────────────────────────────────┘
```

## ⚡ Tabla de Contenidos

- [Git Esencial](#-git-esencial)
- [Branching Strategies](#-branching-strategies)
- [Docker](#-docker)
- [CI/CD](#-cicd)
- [Automatización](#-automatización)

---

## 📌 Git Esencial

```bash
# ═══════════════════════════════════════════════════════════════════════
# CONFIGURACIÓN INICIAL
# ═══════════════════════════════════════════════════════════════════════

git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
git config --global init.defaultBranch main

# ═══════════════════════════════════════════════════════════════════════
# INICIAR REPOSITORIO
# ═══════════════════════════════════════════════════════════════════════

git init                          # Crear repo local
git clone <url>                   # Clonar repo remoto

# ═══════════════════════════════════════════════════════════════════════
# FLUJO BÁSICO
# ═══════════════════════════════════════════════════════════════════════

git status                        # Ver estado
git add .                         # Agregar todo al staging
git add archivo.txt               # Agregar archivo específico
git commit -m "mensaje"           # Crear commit
git push origin main              # Subir a remoto
git pull origin main              # Bajar cambios

# ═══════════════════════════════════════════════════════════════════════
# RAMAS
# ═══════════════════════════════════════════════════════════════════════

git branch                        # Listar ramas
git branch feature-login          # Crear rama
git checkout feature-login        # Cambiar a rama
git checkout -b feature-login     # Crear y cambiar
git merge feature-login           # Fusionar rama
git branch -d feature-login       # Eliminar rama

# ═══════════════════════════════════════════════════════════════════════
# HISTORIAL
# ═══════════════════════════════════════════════════════════════════════

git log --oneline                 # Historial compacto
git log --graph --all             # Gráfico de ramas
git diff                          # Ver cambios
git diff --staged                 # Ver cambios en staging

# ═══════════════════════════════════════════════════════════════════════
# DESHACER
# ═══════════════════════════════════════════════════════════════════════

git checkout -- archivo.txt       # Descartar cambios locales
git reset HEAD archivo.txt        # Quitar del staging
git reset --soft HEAD~1           # Deshacer último commit (mantener cambios)
git reset --hard HEAD~1           # Deshacer último commit (eliminar cambios)
git revert <commit>               # Revertir commit (crea nuevo commit)

# ═══════════════════════════════════════════════════════════════════════
# STASH
# ═══════════════════════════════════════════════════════════════════════

git stash                         # Guardar cambios temporalmente
git stash list                    # Listar stashes
git stash pop                     # Recuperar último stash
git stash drop                    # Eliminar último stash
```

---

## 📌 Branching Strategies

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                              GIT FLOW                                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║   main ─────●─────────────────●─────────────────●───────▶                   ║
║              ╲               ╱                 ╱                             ║
║   release     ╲─────────────●                 ╱                              ║
║                ╲           ╱                 ╱                               ║
║   develop ──────●─────●───●─────●───────────●────────▶                       ║
║                  ╲   ╱     ╲   ╱                                             ║
║   feature         ●─●       ●─●                                              ║
║                                                                              ║
║   Ramas:                                                                     ║
║   ├── main       → Producción (siempre estable)                              ║
║   ├── develop    → Desarrollo (integración)                                  ║
║   ├── feature/*  → Nuevas funcionalidades                                    ║
║   ├── release/*  → Preparación de release                                    ║
║   └── hotfix/*   → Correcciones urgentes                                     ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

```bash
# Crear feature
git checkout develop
git checkout -b feature/login

# Trabajar...
git add .
git commit -m "feat: agregar login"

# Terminar feature
git checkout develop
git merge feature/login
git branch -d feature/login
```

---

## 📌 Docker

```dockerfile
# ═══════════════════════════════════════════════════════════════════════
# DOCKERFILE BÁSICO (Java)
# ═══════════════════════════════════════════════════════════════════════

FROM openjdk:17-slim

WORKDIR /app

COPY target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
```

```dockerfile
# ═══════════════════════════════════════════════════════════════════════
# DOCKERFILE MULTI-STAGE (optimizado)
# ═══════════════════════════════════════════════════════════════════════

# Etapa de build
FROM maven:3.9-openjdk-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Etapa de producción
FROM openjdk:17-slim
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

```bash
# ═══════════════════════════════════════════════════════════════════════
# COMANDOS DOCKER
# ═══════════════════════════════════════════════════════════════════════

# Imágenes
docker build -t mi-app:1.0 .           # Construir imagen
docker images                           # Listar imágenes
docker rmi mi-app:1.0                   # Eliminar imagen

# Contenedores
docker run -d -p 8080:8080 mi-app:1.0  # Ejecutar en background
docker run -it mi-app:1.0 /bin/bash    # Ejecutar interactivo
docker ps                               # Contenedores activos
docker ps -a                            # Todos los contenedores
docker stop <id>                        # Detener
docker rm <id>                          # Eliminar
docker logs <id>                        # Ver logs
docker exec -it <id> /bin/bash         # Entrar al contenedor

# Limpieza
docker system prune                     # Limpiar recursos no usados
```

```yaml
# ═══════════════════════════════════════════════════════════════════════
# DOCKER COMPOSE
# ═══════════════════════════════════════════════════════════════════════

version: '3.8'

services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - DB_HOST=db
      - DB_PORT=5432
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

```bash
docker-compose up -d          # Levantar servicios
docker-compose down           # Detener servicios
docker-compose logs -f        # Ver logs
docker-compose ps             # Estado de servicios
```

---

## 📌 CI/CD

```yaml
# ═══════════════════════════════════════════════════════════════════════
# GITHUB ACTIONS (.github/workflows/ci.yml)
# ═══════════════════════════════════════════════════════════════════════

name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout código
        uses: actions/checkout@v4

      - name: Setup Java
        uses: actions/setup-java@v4
        with:
          distribution: 'temurin'
          java-version: '17'

      - name: Cache Maven
        uses: actions/cache@v3
        with:
          path: ~/.m2
          key: ${{ runner.os }}-maven-${{ hashFiles('**/pom.xml') }}

      - name: Build con Maven
        run: mvn clean package

      - name: Ejecutar tests
        run: mvn test

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Build Docker image
        run: docker build -t mi-app:${{ github.sha }} .

      - name: Push to registry
        run: |
          echo ${{ secrets.DOCKER_PASSWORD }} | docker login -u ${{ secrets.DOCKER_USERNAME }} --password-stdin
          docker push mi-app:${{ github.sha }}
```

### Pipeline CI/CD

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   COMMIT → BUILD → TEST → SCAN → DEPLOY STAGING → TEST → DEPLOY PROD       │
│                                                                             │
│   ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐   │
│   │ Commit │→ │ Build  │→ │  Test  │→ │  Scan  │→ │Staging │→ │  Prod  │   │
│   │        │  │        │  │ Unit   │  │Security│  │ Deploy │  │ Deploy │   │
│   └────────┘  └────────┘  └────────┘  └────────┘  └────────┘  └────────┘   │
│       ↓           ↓           ↓           ↓           ↓           ↓        │
│    GitHub      Maven       JUnit       SonarQube    Docker      K8s        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 📌 Automatización

```bash
# ═══════════════════════════════════════════════════════════════════════
# MAKEFILE
# ═══════════════════════════════════════════════════════════════════════

.PHONY: build test run clean docker-build docker-run

build:
	mvn clean package -DskipTests

test:
	mvn test

run:
	java -jar target/*.jar

clean:
	mvn clean

docker-build:
	docker build -t mi-app:latest .

docker-run:
	docker run -p 8080:8080 mi-app:latest

all: clean build test docker-build
```

```bash
# ═══════════════════════════════════════════════════════════════════════
# SCRIPT DE DEPLOY (deploy.sh)
# ═══════════════════════════════════════════════════════════════════════

#!/bin/bash
set -e

VERSION=$1
ENV=$2

echo "🚀 Deploying version $VERSION to $ENV..."

# Build
mvn clean package -DskipTests

# Docker
docker build -t mi-app:$VERSION .
docker tag mi-app:$VERSION registry.com/mi-app:$VERSION
docker push registry.com/mi-app:$VERSION

# Deploy
kubectl set image deployment/mi-app mi-app=registry.com/mi-app:$VERSION

echo "✅ Deploy completed!"
```

---

<div align="center">

`{ Automatiza todo · Despliega con confianza }`

</div>
