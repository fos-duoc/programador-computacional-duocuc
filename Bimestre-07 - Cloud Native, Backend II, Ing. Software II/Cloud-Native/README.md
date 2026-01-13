# ◈ Cloud Native

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Bimestre 05 · Contenedores · Kubernetes · Microservicios                    │
└──────────────────────────────────────────────────────────────────────────────┘
```

## ⚡ Contenido

- [Principios Cloud Native](#-principios)
- [Kubernetes Fundamentos](#-kubernetes)
- [Microservicios](#-microservicios)

---

## 📌 Principios

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         12 FACTOR APP                                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║   1. Codebase      → Un repo, múltiples deploys                              ║
║   2. Dependencies  → Declarar y aislar dependencias                          ║
║   3. Config        → Configuración en variables de entorno                   ║
║   4. Backing Services → Tratar servicios como recursos adjuntos              ║
║   5. Build/Release/Run → Separar etapas estrictamente                        ║
║   6. Processes     → Ejecutar como procesos stateless                        ║
║   7. Port Binding  → Exportar servicios via puerto                           ║
║   8. Concurrency   → Escalar via procesos                                    ║
║   9. Disposability → Maximizar robustez con inicio/parada rápida             ║
║  10. Dev/Prod Parity → Mantener entornos similares                           ║
║  11. Logs          → Tratar logs como streams de eventos                     ║
║  12. Admin Processes → Ejecutar tareas admin como procesos únicos            ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 📌 Kubernetes

```yaml
# ═══════════════════════════════════════════════════════════════════════
# DEPLOYMENT
# ═══════════════════════════════════════════════════════════════════════

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
        env:
        - name: DB_HOST
          valueFrom:
            configMapKeyRef:
              name: app-config
              key: db_host
        resources:
          limits:
            memory: "256Mi"
            cpu: "500m"
```

```yaml
# ═══════════════════════════════════════════════════════════════════════
# SERVICE
# ═══════════════════════════════════════════════════════════════════════

apiVersion: v1
kind: Service
metadata:
  name: mi-app-service
spec:
  selector:
    app: mi-app
  ports:
  - port: 80
    targetPort: 8080
  type: LoadBalancer
```

```bash
# Comandos kubectl esenciales
kubectl get pods                    # Listar pods
kubectl get deployments             # Listar deployments
kubectl get services                # Listar servicios
kubectl apply -f deployment.yaml    # Aplicar configuración
kubectl logs <pod-name>             # Ver logs
kubectl exec -it <pod> -- /bin/sh   # Entrar al pod
kubectl scale deployment mi-app --replicas=5  # Escalar
```

---

## 📌 Microservicios

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     ARQUITECTURA MICROSERVICIOS                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐                 │
│   │ Usuarios│    │ Pedidos │    │Productos│    │  Pagos  │                 │
│   │ Service │    │ Service │    │ Service │    │ Service │                 │
│   └────┬────┘    └────┬────┘    └────┬────┘    └────┬────┘                 │
│        │              │              │              │                       │
│   ┌────▼────┐    ┌────▼────┐    ┌────▼────┐    ┌────▼────┐                 │
│   │   DB    │    │   DB    │    │   DB    │    │   DB    │                 │
│   └─────────┘    └─────────┘    └─────────┘    └─────────┘                 │
│                                                                             │
│   Cada servicio: independiente, su propia BD, desplegable por separado     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

<div align="center">

`{ Escalable · Resiliente · Distribuido }`

</div>
