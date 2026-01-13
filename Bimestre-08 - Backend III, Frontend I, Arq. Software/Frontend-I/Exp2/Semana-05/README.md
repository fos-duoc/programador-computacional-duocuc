<div align="center">

![Angular](https://img.shields.io/badge/Angular-Routing-DD0031?style=flat-square&logo=angular&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-05-blue?style=flat-square)

# `Routing & Navigation`

</div>

---

### 🛣️ Configuración Rutas

```typescript
// app-routing.module.ts
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:id', component: ProductoDetalleComponent },
  { path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

```typescript
// Navegación programática
@Component({ ... })
export class ProductoComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  verDetalle(id: number) {
    this.router.navigate(['/productos', id]);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
  }
}
```

| Concepto | Uso |
|:---------|:----|
| `routerLink` | Navegación template |
| `Router` | Navegación código |
| `ActivatedRoute` | Parámetros ruta |
| Guards | Proteger rutas |

---

<div align="center">
<sub>Frontend I-II · Experiencia 2</sub>
</div>
