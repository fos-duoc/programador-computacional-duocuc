# ◈ Mobile II

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Bimestre 10 · Ionic/Capacitor · Apps Híbridas · PWA                         │
└──────────────────────────────────────────────────────────────────────────────┘
```

## ⚡ Contenido

- [Ionic Framework](#-ionic)
- [Capacitor](#-capacitor)
- [PWA](#-pwa)

---

## 📌 Ionic

```typescript
// ═══════════════════════════════════════════════════════════════════════
// IONIC PAGE
// ═══════════════════════════════════════════════════════════════════════

@Component({
  selector: 'app-home',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Productos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-refresher slot="fixed" (ionRefresh)="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <ion-list>
        <ion-item *ngFor="let producto of productos">
          <ion-label>
            <h2>{{ producto.nombre }}</h2>
            <p>{{ producto.precio | currency }}</p>
          </ion-label>
          <ion-button slot="end" (click)="agregar(producto)">
            <ion-icon name="add"></ion-icon>
          </ion-button>
        </ion-item>
      </ion-list>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button (click)="openModal()">
          <ion-icon name="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  `
})
export class HomePage {
  productos: Producto[] = [];

  async refresh(event: any) {
    await this.cargarProductos();
    event.target.complete();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ProductoFormComponent
    });
    await modal.present();
  }
}
```

---

## 📌 Capacitor

```typescript
// ═══════════════════════════════════════════════════════════════════════
// PLUGINS NATIVOS
// ═══════════════════════════════════════════════════════════════════════

import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { LocalNotifications } from '@capacitor/local-notifications';

// Cámara
async tomarFoto() {
  const photo = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    quality: 90
  });
  this.imagenUrl = photo.webPath;
}

// Geolocalización
async obtenerUbicacion() {
  const position = await Geolocation.getCurrentPosition();
  console.log(position.coords.latitude, position.coords.longitude);
}

// Notificaciones
async programarNotificacion() {
  await LocalNotifications.schedule({
    notifications: [{
      title: 'Recordatorio',
      body: 'Tu pedido está listo',
      id: 1,
      schedule: { at: new Date(Date.now() + 3600000) }
    }]
  });
}
```

```bash
# Comandos Ionic/Capacitor
ionic start myApp tabs --type=angular
ionic serve                           # Desarrollo web
ionic build                           # Build producción
npx cap add android                   # Agregar plataforma
npx cap sync                          # Sincronizar
npx cap open android                  # Abrir en Android Studio
```

---

## 📌 PWA

```json
// manifest.json
{
  "name": "Mi App",
  "short_name": "App",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#3880ff",
  "icons": [
    { "src": "icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

```typescript
// Service Worker (ngsw-config.json)
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
        "strategy": "freshness",
        "maxAge": "1h"
      }
    }
  ]
}
```

---

<div align="center">

`{ Una base de código · Múltiples plataformas }`

</div>
