<div align="center">

![Ionic](https://img.shields.io/badge/Ionic-Framework-3880FF?style=flat-square&logo=ionic&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-01-blue?style=flat-square)

# `Ionic Fundamentos`

</div>

---

### 📱 Proyecto Inicial

```bash
npm install -g @ionic/cli
ionic start myApp blank --type=angular
ionic serve
```

```typescript
// home.page.ts
@Component({
  selector: 'app-home',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Mi App</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item *ngFor="let item of items">
          <ion-label>{{ item.nombre }}</ion-label>
          <ion-badge slot="end">{{ item.cantidad }}</ion-badge>
        </ion-item>
      </ion-list>

      <ion-fab vertical="bottom" horizontal="end">
        <ion-fab-button (click)="agregar()">
          <ion-icon name="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  `
})
export class HomePage { }
```

| Componente | Uso |
|:-----------|:----|
| `ion-header` | Cabecera |
| `ion-content` | Contenido scroll |
| `ion-list` | Lista items |
| `ion-fab` | Botón flotante |

---

<div align="center">
<sub>Mobile II · Experiencia 1</sub>
</div>
