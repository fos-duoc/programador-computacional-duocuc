<div align="center">

![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-02-blue?style=flat-square)

# `AWS Fundamentos`

</div>

---

### 📋 Contenido

| Servicio | Descripción |
|:---------|:------------|
| **EC2** | Máquinas virtuales |
| **S3** | Almacenamiento objetos |
| **RDS** | Base de datos |
| **IAM** | Identidad y acceso |

---

### 💻 CLI Básico

```bash
# Configurar credenciales
aws configure

# S3 - Listar buckets
aws s3 ls

# S3 - Subir archivo
aws s3 cp archivo.txt s3://mi-bucket/

# EC2 - Listar instancias
aws ec2 describe-instances

# EC2 - Iniciar instancia
aws ec2 start-instances --instance-ids i-xxx
```

---

<div align="center">
<sub>Computación en la Nube · Experiencia 1</sub>
</div>
