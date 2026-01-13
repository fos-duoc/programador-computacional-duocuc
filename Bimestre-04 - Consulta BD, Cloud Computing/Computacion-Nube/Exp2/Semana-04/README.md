<div align="center">

![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-04-blue?style=flat-square)

# `S3 - Almacenamiento`

</div>

---

### 📋 Contenido

| Concepto | Descripción |
|:---------|:------------|
| Bucket | Contenedor de objetos |
| Object | Archivo + metadata |
| Clases | Standard, IA, Glacier |
| Políticas | Permisos de acceso |

---

### 💻 Comandos S3

```bash
# Crear bucket
aws s3 mb s3://mi-bucket-unico

# Subir archivo
aws s3 cp archivo.txt s3://mi-bucket/

# Subir carpeta
aws s3 sync ./local/ s3://mi-bucket/

# Descargar
aws s3 cp s3://mi-bucket/archivo.txt ./

# Listar contenido
aws s3 ls s3://mi-bucket/

# Eliminar
aws s3 rm s3://mi-bucket/archivo.txt
```

---

<div align="center">
<sub>Computación en la Nube · Experiencia 2</sub>
</div>
