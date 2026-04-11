# ◈ Frontend I-II

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Bimestre 08 · Angular · TypeScript · Components · Services                  │
└──────────────────────────────────────────────────────────────────────────────┘
```

## ⚡ Contenido

- [TypeScript](#-typescript)
- [Angular Basics](#-angular-basics)
- [Components & Services](#-components--services)

---

## 📌 TypeScript

```typescript
// ═══════════════════════════════════════════════════════════════════════
// TIPOS BÁSICOS
// ═══════════════════════════════════════════════════════════════════════

let nombre: string = "Juan";
let edad: number = 25;
let activo: boolean = true;
let lista: number[] = [1, 2, 3];
let tupla: [string, number] = ["Juan", 25];

// ═══════════════════════════════════════════════════════════════════════
// INTERFACES Y TIPOS
// ═══════════════════════════════════════════════════════════════════════

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad?: number;  // Opcional
}

type Estado = 'activo' | 'inactivo' | 'pendiente';

// ═══════════════════════════════════════════════════════════════════════
// CLASES
// ═══════════════════════════════════════════════════════════════════════

class Producto {
  constructor(
    public id: number,
    public nombre: string,
    private precio: number
  ) {}

  getPrecioConIva(): number {
    return this.precio * 1.19;
  }
}
```

---

## 📌 Angular Basics

```typescript
// ═══════════════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════════════

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  loading = false;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.loading = true;
    this.productoService.getAll().subscribe({
      next: (data) => this.productos = data,
      error: (err) => console.error(err),
      complete: () => this.loading = false
    });
  }
}
```

```html
<!-- TEMPLATE -->
<div *ngIf="loading">Cargando...</div>

<div *ngFor="let producto of productos">
  <h3>{{ producto.nombre }}</h3>
  <p>{{ producto.precio | currency:'CLP' }}</p>
  <button (click)="agregarCarrito(producto)">Agregar</button>
</div>

<!-- Two-way binding -->
<input [(ngModel)]="busqueda" (keyup)="buscar()">
```

---

## 📌 Components & Services

```typescript
// ═══════════════════════════════════════════════════════════════════════
// SERVICE
// ═══════════════════════════════════════════════════════════════════════

@Injectable({ providedIn: 'root' })
export class ProductoService {
  private apiUrl = 'http://localhost:8080/api/productos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  getById(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  create(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, producto);
  }

  update(id: number, producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.apiUrl}/${id}`, producto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

// ═══════════════════════════════════════════════════════════════════════
// ROUTING
// ═══════════════════════════════════════════════════════════════════════

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:id', component: ProductoDetalleComponent },
  { path: '**', redirectTo: '' }
];
```

---

<div align="center">

`{ Interfaces dinámicas · UX moderna }`

</div>
