<div align="center">

![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-02-blue?style=flat-square)

# `Docker Básico`

</div>

---

### 📋 Contenido

| Concepto | Descripción |
|:---------|:------------|
| Imagen | Plantilla read-only |
| Contenedor | Instancia en ejecución |
| Dockerfile | Instrucciones de build |
| Registry | Repositorio de imágenes |

---

### 💻 Comandos

```bash
# Descargar imagen
docker pull nginx

# Ejecutar contenedor
docker run -d -p 80:80 nginx

# Listar contenedores
docker ps
docker ps -a

# Detener/iniciar
docker stop <id>
docker start <id>

# Logs
docker logs <id>

# Eliminar
docker rm <id>
docker rmi <imagen>
```

---

<div align="center">
<sub>DevOps · Experiencia 1</sub>
</div>
