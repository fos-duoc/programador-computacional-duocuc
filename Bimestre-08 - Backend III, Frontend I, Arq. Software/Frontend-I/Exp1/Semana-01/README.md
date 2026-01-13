<div align="center">

![Angular](https://img.shields.io/badge/Angular-Framework-DD0031?style=flat-square&logo=angular&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-01-blue?style=flat-square)

# `Angular Fundamentos`

</div>

---

### 🅰️ Estructura Proyecto

```
src/
├── app/
│   ├── components/
│   ├── services/
│   ├── models/
│   ├── app.component.ts
│   ├── app.module.ts
│   └── app-routing.module.ts
├── assets/
└── environments/
```

```typescript
// Componente básico
@Component({
  selector: 'app-hello',
  template: `<h1>Hola {{ nombre }}</h1>`,
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  nombre = 'Angular';
}

// Módulo
@NgModule({
  declarations: [HelloComponent],
  imports: [CommonModule],
  exports: [HelloComponent]
})
export class SharedModule { }
```

| Concepto | Descripción |
|:---------|:------------|
| Component | Vista + lógica |
| Module | Organización |
| Template | HTML + bindings |

---

<div align="center">
<sub>Frontend I-II · Experiencia 1</sub>
</div>
