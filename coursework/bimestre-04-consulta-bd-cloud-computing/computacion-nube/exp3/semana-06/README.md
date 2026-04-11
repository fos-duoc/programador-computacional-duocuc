<div align="center">

![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-06-blue?style=flat-square)

# `IAM - Seguridad`

</div>

---

### 📋 Contenido

| Concepto | Descripción |
|:---------|:------------|
| Usuario | Identidad individual |
| Grupo | Colección de usuarios |
| Rol | Permisos asumibles |
| Política | Documento de permisos |

---

### 💻 Política JSON

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::mi-bucket/*"
    },
    {
      "Effect": "Deny",
      "Action": "s3:DeleteObject",
      "Resource": "*"
    }
  ]
}
```

---

<div align="center">
<sub>Computación en la Nube · Experiencia 3</sub>
</div>
