<div align="center">

![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-03-blue?style=flat-square)

# `Pods y Deployments`

</div>

---

### 💻 pod.yaml

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mi-app
  labels:
    app: mi-app
spec:
  containers:
  - name: mi-app
    image: mi-app:1.0
    ports:
    - containerPort: 8080
    resources:
      limits:
        memory: "256Mi"
        cpu: "500m"
    livenessProbe:
      httpGet:
        path: /health
        port: 8080
      initialDelaySeconds: 30
```

```bash
kubectl apply -f pod.yaml
kubectl get pods
kubectl describe pod mi-app
kubectl logs mi-app
kubectl delete pod mi-app
```

---

<div align="center">
<sub>Cloud Native · Experiencia 1</sub>
</div>
