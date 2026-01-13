<div align="center">

![Angular](https://img.shields.io/badge/Angular-Components-DD0031?style=flat-square&logo=angular&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-02-blue?style=flat-square)

# `Componentes & Data Binding`

</div>

---

### 🔗 Tipos de Binding

```html
<!-- Interpolación -->
<h1>{{ titulo }}</h1>

<!-- Property Binding -->
<img [src]="imagenUrl">
<button [disabled]="isLoading">Enviar</button>

<!-- Event Binding -->
<button (click)="guardar()">Guardar</button>
<input (keyup.enter)="buscar()">

<!-- Two-Way Binding -->
<input [(ngModel)]="nombre">
```

```typescript
@Component({
  selector: 'app-producto',
  template: `
    <div class="card">
      <h3>{{ producto.nombre }}</h3>
      <p>{{ producto.precio | currency }}</p>
      <button (click)="agregar()">Agregar</button>
    </div>
  `
})
export class ProductoComponent {
  @Input() producto!: Producto;
  @Output() agregado = new EventEmitter<Producto>();

  agregar() {
    this.agregado.emit(this.producto);
  }
}
```

| Binding | Sintaxis |
|:--------|:---------|
| Interpolación | `{{ }}` |
| Property | `[prop]` |
| Event | `(event)` |
| Two-way | `[(ngModel)]` |

---

<div align="center">
<sub>Frontend I-II · Experiencia 1</sub>
</div>
