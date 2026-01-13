<div align="center">

![Build](https://img.shields.io/badge/Build-Deploy-4CAF50?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-07-blue?style=flat-square)

# `Build & Deploy`

</div>

---

### 📦 Compilación

```bash
# Android
ionic build
npx cap sync android
npx cap open android
# En Android Studio: Build > Generate Signed Bundle/APK

# iOS
ionic build
npx cap sync ios
npx cap open ios
# En Xcode: Product > Archive
```

```json
// capacitor.config.ts
const config: CapacitorConfig = {
  appId: 'com.miempresa.miapp',
  appName: 'Mi App',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#ffffff'
    }
  }
};
```

| Tienda | Requisitos |
|:-------|:-----------|
| Play Store | APK/AAB firmado, cuenta $25 |
| App Store | Xcode, Apple Developer $99/año |
| PWA | HTTPS, manifest, service worker |

---

<div align="center">
<sub>Mobile II · Experiencia 3</sub>
</div>
