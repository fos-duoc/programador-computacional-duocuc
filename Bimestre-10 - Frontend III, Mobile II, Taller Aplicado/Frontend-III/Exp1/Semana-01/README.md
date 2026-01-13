<div align="center">

![Testing](https://img.shields.io/badge/Angular-Testing-DD0031?style=flat-square&logo=angular&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-01-blue?style=flat-square)

# `Unit Testing Angular`

</div>

---

### 🧪 Jasmine & Karma

```typescript
// Component Test
describe('ProductoComponent', () => {
  let component: ProductoComponent;
  let fixture: ComponentFixture<ProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoComponent],
      providers: [
        { provide: ProductoService, useValue: mockService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display product name', () => {
    component.producto = { id: 1, nombre: 'Test', precio: 100 };
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('h3');
    expect(element.textContent).toContain('Test');
  });
});
```

| Función | Propósito |
|:--------|:----------|
| `describe()` | Suite de tests |
| `it()` | Test individual |
| `expect()` | Aserción |
| `beforeEach()` | Setup |

---

<div align="center">
<sub>Frontend III · Experiencia 1</sub>
</div>
