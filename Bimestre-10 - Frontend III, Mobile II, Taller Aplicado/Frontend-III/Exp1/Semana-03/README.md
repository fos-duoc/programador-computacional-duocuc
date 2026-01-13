<div align="center">

![PWA](https://img.shields.io/badge/PWA-Progressive-5A0FC8?style=flat-square&logo=pwa&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-03-blue?style=flat-square)

# `Progressive Web Apps`

</div>

---

### 📱 Service Worker

```typescript
// Instalar PWA en Angular
ng add @angular/pwa

// ngsw-config.json
{
  "index": "/index.html",
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": {
        "files": ["/favicon.ico", "/index.html", "/*.css", "/*.js"]
      }
    },
    {
      "name": "assets",
      "installMode": "lazy",
      "updateMode": "prefetch",
      "resources": {
        "files": ["/assets/**"]
      }
    }
  ],
  "dataGroups": [
    {
      "name": "api",
      "urls": ["/api/**"],
      "cacheConfig": {
        "maxSize": 100,
        "maxAge": "1h",
        "strategy": "freshness"
      }
    }
  ]
}
```

```json
// manifest.webmanifest
{
  "name": "Mi App",
  "short_name": "App",
  "theme_color": "#1976d2",
  "background_color": "#fafafa",
  "display": "standalone",
  "start_url": "./"
}
```

| Característica | Beneficio |
|:---------------|:----------|
| Offline | Funciona sin conexión |
| Instalable | Como app nativa |
| Push | Notificaciones |

---

<div align="center">
<sub>Frontend III · Experiencia 1</sub>
</div>
