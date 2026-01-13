<div align="center">

![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-03-blue?style=flat-square)

# `EC2 - Máquinas Virtuales`

</div>

---

### 📋 Contenido

| Concepto | Descripción |
|:---------|:------------|
| AMI | Imagen de máquina |
| Instance Type | t2.micro, t3.medium |
| Security Group | Firewall virtual |
| Key Pair | Acceso SSH |

---

### 💻 Lanzar Instancia

```bash
# Crear instancia EC2
aws ec2 run-instances \
  --image-id ami-0abcdef1234567890 \
  --instance-type t2.micro \
  --key-name mi-llave \
  --security-group-ids sg-xxx

# Conectar por SSH
ssh -i "mi-llave.pem" ec2-user@<ip-publica>

# Ver estado
aws ec2 describe-instance-status \
  --instance-ids i-xxx
```

---

<div align="center">
<sub>Computación en la Nube · Experiencia 1</sub>
</div>
