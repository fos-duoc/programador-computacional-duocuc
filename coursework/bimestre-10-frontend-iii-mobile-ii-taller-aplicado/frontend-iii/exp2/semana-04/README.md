<div align="center">

![Performance](https://img.shields.io/badge/Performance-Optimization-4CAF50?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-04-blue?style=flat-square)

# `Optimización de Rendimiento`

</div>

---

### ⚡ Técnicas

```typescript
// Lazy Loading
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule)
  }
];

// OnPush Change Detection
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductoComponent { }

// TrackBy en *ngFor
<div *ngFor="let item of items; trackBy: trackById">

trackById(index: number, item: Producto): number {
  return item.id;
}

// Preload Strategy
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ]
})
```

| Técnica | Impacto |
|:--------|:--------|
| Lazy Loading | Bundle inicial menor |
| OnPush | Menos detecciones |
| TrackBy | Menos re-renders |
| Preloading | Navegación rápida |
| Tree Shaking | Código no usado eliminado |

---

<div align="center">
<sub>Frontend III · Experiencia 2</sub>
</div>
