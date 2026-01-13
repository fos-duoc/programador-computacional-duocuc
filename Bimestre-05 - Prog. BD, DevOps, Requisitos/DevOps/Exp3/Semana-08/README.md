<div align="center">

![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-08-blue?style=flat-square)

# `Kubernetes Intro`

</div>

---

### 📋 Contenido

| Concepto | Descripción |
|:---------|:------------|
| Pod | Unidad mínima |
| Deployment | Gestiona réplicas |
| Service | Expone pods |
| Ingress | Enrutamiento HTTP |

---

### 💻 deployment.yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mi-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: mi-app
  template:
    metadata:
      labels:
        app: mi-app
    spec:
      containers:
      - name: mi-app
        image: mi-app:1.0
        ports:
        - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: mi-app-svc
spec:
  selector:
    app: mi-app
  ports:
  - port: 80
    targetPort: 8080
```

---

<div align="center">
<sub>DevOps · Experiencia 3</sub>
</div>
