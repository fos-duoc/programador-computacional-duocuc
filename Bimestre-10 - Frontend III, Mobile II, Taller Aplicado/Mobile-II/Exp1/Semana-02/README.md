<div align="center">

![Ionic](https://img.shields.io/badge/Ionic-Components-3880FF?style=flat-square&logo=ionic&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-02-blue?style=flat-square)

# `Componentes UI`

</div>

---

### 🎨 Formularios & Modales

```html
<!-- Formulario -->
<ion-item>
  <ion-label position="floating">Email</ion-label>
  <ion-input type="email" [(ngModel)]="email"></ion-input>
</ion-item>

<ion-item>
  <ion-label>Categoría</ion-label>
  <ion-select [(ngModel)]="categoria">
    <ion-select-option value="1">Electrónica</ion-select-option>
    <ion-select-option value="2">Ropa</ion-select-option>
  </ion-select>
</ion-item>

<ion-button expand="block" (click)="guardar()">
  Guardar
</ion-button>
```

```typescript
// Modal
async presentModal() {
  const modal = await this.modalCtrl.create({
    component: DetalleComponent,
    componentProps: { id: this.productoId }
  });
  await modal.present();

  const { data } = await modal.onDidDismiss();
  if (data) {
    this.refresh();
  }
}

// Alert
async presentAlert() {
  const alert = await this.alertCtrl.create({
    header: 'Confirmar',
    message: '¿Eliminar item?',
    buttons: ['Cancelar', 'Eliminar']
  });
  await alert.present();
}
```

| UI | Componente |
|:---|:-----------|
| Diálogo | `ion-alert` |
| Modal | `ion-modal` |
| Loading | `ion-loading` |
| Toast | `ion-toast` |

---

<div align="center">
<sub>Mobile II · Experiencia 1</sub>
</div>
