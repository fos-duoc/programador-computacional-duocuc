<div align="center">

![Helm](https://img.shields.io/badge/Helm-0F1689?style=flat-square&logo=helm&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-07-blue?style=flat-square)

# `Helm Charts`

</div>

---

### 💻 Estructura

```
mi-chart/
├── Chart.yaml
├── values.yaml
└── templates/
    ├── deployment.yaml
    └── service.yaml
```

```yaml
# values.yaml
replicaCount: 3
image:
  repository: mi-app
  tag: "1.0"
service:
  port: 80

# templates/deployment.yaml
spec:
  replicas: {{ .Values.replicaCount }}
  containers:
  - image: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"
```

```bash
helm install mi-release ./mi-chart
helm upgrade mi-release ./mi-chart
helm list
helm uninstall mi-release
```

---

<div align="center">
<sub>Cloud Native · Experiencia 3</sub>
</div>
