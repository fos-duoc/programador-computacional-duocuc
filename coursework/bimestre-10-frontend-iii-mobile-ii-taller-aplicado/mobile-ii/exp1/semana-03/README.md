<div align="center">

![Capacitor](https://img.shields.io/badge/Capacitor-Native-119EFF?style=flat-square&logo=capacitor&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-03-blue?style=flat-square)

# `Capacitor & Plugins`

</div>

---

### 🔌 APIs Nativas

```bash
npm install @capacitor/core @capacitor/cli
npx cap init
npx cap add android
npx cap add ios
```

```typescript
// Cámara
import { Camera, CameraResultType } from '@capacitor/camera';

async takePicture() {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Uri
  });
  this.imageUrl = image.webPath;
}

// Geolocation
import { Geolocation } from '@capacitor/geolocation';

async getCurrentPosition() {
  const coordinates = await Geolocation.getCurrentPosition();
  console.log('Lat:', coordinates.coords.latitude);
  console.log('Lng:', coordinates.coords.longitude);
}

// Storage
import { Preferences } from '@capacitor/preferences';

async setData(key: string, value: string) {
  await Preferences.set({ key, value });
}

async getData(key: string): Promise<string | null> {
  const { value } = await Preferences.get({ key });
  return value;
}
```

| Plugin | Función |
|:-------|:--------|
| Camera | Fotos/Galería |
| Geolocation | GPS |
| Preferences | Storage local |
| PushNotifications | Notificaciones |

---

<div align="center">
<sub>Mobile II · Experiencia 1</sub>
</div>
