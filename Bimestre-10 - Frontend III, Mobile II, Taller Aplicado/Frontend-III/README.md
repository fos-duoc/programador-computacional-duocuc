# ◈ Frontend III

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Bimestre 09 · Angular Avanzado · RxJS · State Management · Testing          │
└──────────────────────────────────────────────────────────────────────────────┘
```

## ⚡ Contenido

- [RxJS](#-rxjs)
- [State Management](#-state-management)
- [Testing Angular](#-testing)

---

## 📌 RxJS

```typescript
// ═══════════════════════════════════════════════════════════════════════
// OBSERVABLES
// ═══════════════════════════════════════════════════════════════════════

import { of, from, interval, Subject, BehaviorSubject } from 'rxjs';
import { map, filter, switchMap, catchError, debounceTime } from 'rxjs/operators';

// Crear observables
const numeros$ = of(1, 2, 3, 4, 5);
const fromArray$ = from([1, 2, 3]);
const intervalo$ = interval(1000);

// Operadores
numeros$.pipe(
  filter(n => n % 2 === 0),
  map(n => n * 2)
).subscribe(console.log);  // 4, 8

// ═══════════════════════════════════════════════════════════════════════
// BÚSQUEDA CON DEBOUNCE
// ═══════════════════════════════════════════════════════════════════════

busqueda$ = new Subject<string>();

resultados$ = this.busqueda$.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(term => this.http.get(`/api/search?q=${term}`)),
  catchError(err => of([]))
);

// En template: (input)="busqueda$.next($event.target.value)"
```

---

## 📌 State Management

```typescript
// ═══════════════════════════════════════════════════════════════════════
// BEHAVIORSUBJECT (Simple State)
// ═══════════════════════════════════════════════════════════════════════

@Injectable({ providedIn: 'root' })
export class CarritoService {
  private items$ = new BehaviorSubject<Producto[]>([]);

  getItems(): Observable<Producto[]> {
    return this.items$.asObservable();
  }

  agregar(producto: Producto): void {
    const current = this.items$.getValue();
    this.items$.next([...current, producto]);
  }

  remover(id: number): void {
    const current = this.items$.getValue();
    this.items$.next(current.filter(p => p.id !== id));
  }

  getTotal(): Observable<number> {
    return this.items$.pipe(
      map(items => items.reduce((sum, p) => sum + p.precio, 0))
    );
  }
}

// ═══════════════════════════════════════════════════════════════════════
// NgRx (Redux Pattern) - Para apps grandes
// ═══════════════════════════════════════════════════════════════════════

// Actions
export const loadProductos = createAction('[Productos] Load');
export const loadProductosSuccess = createAction(
  '[Productos] Load Success',
  props<{ productos: Producto[] }>()
);

// Reducer
export const productosReducer = createReducer(
  initialState,
  on(loadProductosSuccess, (state, { productos }) => ({
    ...state, productos, loading: false
  }))
);

// Selector
export const selectProductos = (state: AppState) => state.productos.items;
```

---

## 📌 Testing

```typescript
// ═══════════════════════════════════════════════════════════════════════
// COMPONENT TEST
// ═══════════════════════════════════════════════════════════════════════

describe('ProductosComponent', () => {
  let component: ProductosComponent;
  let fixture: ComponentFixture<ProductosComponent>;
  let serviceMock: jasmine.SpyObj<ProductoService>;

  beforeEach(async () => {
    serviceMock = jasmine.createSpyObj('ProductoService', ['getAll']);
    serviceMock.getAll.and.returnValue(of([{ id: 1, nombre: 'Test' }]));

    await TestBed.configureTestingModule({
      declarations: [ProductosComponent],
      providers: [{ provide: ProductoService, useValue: serviceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load productos on init', () => {
    fixture.detectChanges();
    expect(serviceMock.getAll).toHaveBeenCalled();
    expect(component.productos.length).toBe(1);
  });
});
```

---

<div align="center">

`{ Frontend reactivo · Estado predecible }`

</div>
