<div align="center">

![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-05-blue?style=flat-square)

# `RDS - Base de Datos`

</div>

---

### 📋 Contenido

| Motor | Descripción |
|:------|:------------|
| MySQL | Relacional open source |
| PostgreSQL | Avanzado, extensible |
| Oracle | Enterprise |
| Aurora | AWS optimizado |

---

### 💻 Crear RDS

```bash
# Crear instancia RDS
aws rds create-db-instance \
  --db-instance-identifier mi-bd \
  --db-instance-class db.t3.micro \
  --engine mysql \
  --master-username admin \
  --master-user-password password123 \
  --allocated-storage 20

# Endpoint de conexión
aws rds describe-db-instances \
  --db-instance-identifier mi-bd \
  --query 'DBInstances[0].Endpoint'
```

```
Conexión: mysql -h endpoint -u admin -p
```

---

<div align="center">
<sub>Computación en la Nube · Experiencia 2</sub>
</div>
