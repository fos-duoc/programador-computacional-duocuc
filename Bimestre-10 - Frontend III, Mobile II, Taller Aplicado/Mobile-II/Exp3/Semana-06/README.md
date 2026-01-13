<div align="center">

![Push](https://img.shields.io/badge/Push-Notifications-FF6F00?style=flat-square&logo=firebase&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-06-blue?style=flat-square)

# `Push Notifications`

</div>

---

### 🔔 Firebase Cloud Messaging

```typescript
import { PushNotifications } from '@capacitor/push-notifications';

@Injectable({ providedIn: 'root' })
export class NotificationService {

  async init() {
    // Pedir permisos
    const permission = await PushNotifications.requestPermissions();

    if (permission.receive === 'granted') {
      await PushNotifications.register();
    }

    // Obtener token
    PushNotifications.addListener('registration', token => {
      console.log('FCM Token:', token.value);
      // Guardar en backend
    });

    // Recibir notificación (app en foreground)
    PushNotifications.addListener('pushNotificationReceived',
      notification => {
        console.log('Notification:', notification);
      }
    );

    // Click en notificación
    PushNotifications.addListener('pushNotificationActionPerformed',
      action => {
        console.log('Action:', action);
        // Navegar a pantalla específica
      }
    );
  }
}
```

| Evento | Cuándo |
|:-------|:-------|
| `registration` | Token obtenido |
| `pushNotificationReceived` | App abierta |
| `pushNotificationActionPerformed` | Click en notif |

---

<div align="center">
<sub>Mobile II · Experiencia 3</sub>
</div>
