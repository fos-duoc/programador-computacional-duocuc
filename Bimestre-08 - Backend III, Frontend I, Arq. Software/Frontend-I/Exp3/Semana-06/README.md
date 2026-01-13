<div align="center">

![Angular](https://img.shields.io/badge/Angular-Forms-DD0031?style=flat-square&logo=angular&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-06-blue?style=flat-square)

# `Reactive Forms`

</div>

---

### 📝 FormGroup & Validators

```typescript
@Component({
  selector: 'app-registro',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input formControlName="nombre" placeholder="Nombre">
      <div *ngIf="form.get('nombre')?.errors?.['required']">
        Nombre requerido
      </div>

      <input formControlName="email" placeholder="Email">
      <input formControlName="password" type="password">

      <button [disabled]="form.invalid">Registrar</button>
    </form>
  `
})
export class RegistroComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
```

| Validator | Uso |
|:----------|:----|
| `required` | Campo obligatorio |
| `email` | Formato email |
| `minLength` | Largo mínimo |
| `pattern` | Regex |

---

<div align="center">
<sub>Frontend I-II · Experiencia 3</sub>
</div>
