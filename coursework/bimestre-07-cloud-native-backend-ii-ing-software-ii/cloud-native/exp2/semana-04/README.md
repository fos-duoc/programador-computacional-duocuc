<div align="center">

![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-04-blue?style=flat-square)

# `Services y Networking`

</div>

---

### 💻 service.yaml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mi-app-svc
spec:
  type: ClusterIP  # o NodePort, LoadBalancer
  selector:
    app: mi-app
  ports:
  - port: 80
    targetPort: 8080
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: mi-app-ingress
spec:
  rules:
  - host: mi-app.ejemplo.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: mi-app-svc
            port:
              number: 80
```

---

<div align="center">
<sub>Cloud Native · Experiencia 2</sub>
</div>
