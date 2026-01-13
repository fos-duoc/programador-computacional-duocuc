<div align="center">

![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-03-blue?style=flat-square)

# `Dockerfile`

</div>

---

### 📋 Contenido

| Instrucción | Descripción |
|:------------|:------------|
| `FROM` | Imagen base |
| `COPY` | Copiar archivos |
| `RUN` | Ejecutar comando |
| `CMD` | Comando por defecto |
| `EXPOSE` | Puerto expuesto |

---

### 💻 Ejemplo

```dockerfile
# Imagen base
FROM openjdk:17-jdk-slim

# Directorio de trabajo
WORKDIR /app

# Copiar JAR
COPY target/app.jar app.jar

# Puerto
EXPOSE 8080

# Comando de inicio
CMD ["java", "-jar", "app.jar"]
```

```bash
# Construir imagen
docker build -t mi-app:1.0 .

# Ejecutar
docker run -d -p 8080:8080 mi-app:1.0
```

---

<div align="center">
<sub>DevOps · Experiencia 1</sub>
</div>
