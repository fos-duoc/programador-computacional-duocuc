<div align="center">

![Testing](https://img.shields.io/badge/Mobile-Testing-9C27B0?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-08-blue?style=flat-square)

# `Testing Mobile`

</div>

---

### 🧪 Estrategia de Testing

```typescript
// Unit Test - Service
describe('ProductoService', () => {
  let service: ProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

// Component Test
describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HomePage]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  });

  it('should display items', () => {
    component.items = [{ id: 1, nombre: 'Test' }];
    fixture.detectChanges();

    const items = fixture.nativeElement.querySelectorAll('ion-item');
    expect(items.length).toBe(1);
  });
});
```

| Nivel | Herramienta |
|:------|:------------|
| Unit | Jasmine, Jest |
| Component | TestBed |
| E2E | Appium, Detox |
| Manual | Firebase App Distribution |

---

<div align="center">
<sub>Mobile II · Experiencia 3</sub>
</div>
