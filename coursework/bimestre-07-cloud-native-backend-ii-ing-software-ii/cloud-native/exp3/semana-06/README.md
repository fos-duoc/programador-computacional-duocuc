<div align="center">

![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-06-blue?style=flat-square)

# `Scaling y HPA`

</div>

---

### 💻 Escalamiento

```yaml
# Deployment con réplicas
apiVersion: apps/v1
kind: Deployment
spec:
  replicas: 3
  # ...

---
# Horizontal Pod Autoscaler
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: mi-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: mi-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
```

```bash
kubectl scale deployment mi-app --replicas=5
kubectl get hpa
```

---

<div align="center">
<sub>Cloud Native · Experiencia 3</sub>
</div>
