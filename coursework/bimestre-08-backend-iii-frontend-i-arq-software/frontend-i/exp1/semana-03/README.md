<div align="center">

![Angular](https://img.shields.io/badge/Angular-Directives-DD0031?style=flat-square&logo=angular&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-03-blue?style=flat-square)

# `Directivas & Pipes`

</div>

---

### 📋 Directivas Estructurales

```html
<!-- *ngIf -->
<div *ngIf="usuario; else loading">
  Bienvenido {{ usuario.nombre }}
</div>
<ng-template #loading>Cargando...</ng-template>

<!-- *ngFor -->
<ul>
  <li *ngFor="let item of items; let i = index; trackBy: trackById">
    {{ i + 1 }}. {{ item.nombre }}
  </li>
</ul>

<!-- *ngSwitch -->
<div [ngSwitch]="estado">
  <p *ngSwitchCase="'activo'">Usuario activo</p>
  <p *ngSwitchCase="'inactivo'">Usuario inactivo</p>
  <p *ngSwitchDefault>Estado desconocido</p>
</div>
```

### 🔧 Pipes

```html
{{ fecha | date:'dd/MM/yyyy' }}
{{ precio | currency:'CLP' }}
{{ texto | uppercase }}
{{ lista | async }}
```

| Directiva | Uso |
|:----------|:----|
| `*ngIf` | Condicional |
| `*ngFor` | Iteración |
| `[ngClass]` | Clases dinámicas |
| `[ngStyle]` | Estilos dinámicos |

---

<div align="center">
<sub>Frontend I-II · Experiencia 1</sub>
</div>
