<div align="center">

![A11y](https://img.shields.io/badge/Accessibility-A11y-0066CC?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-07-blue?style=flat-square)

# `Accesibilidad Web`

</div>

---

### ♿ ARIA & Best Practices

```html
<!-- Formulario accesible -->
<form>
  <label for="email">Email</label>
  <input
    id="email"
    type="email"
    aria-required="true"
    aria-describedby="email-hint"
  >
  <span id="email-hint">Ej: usuario@correo.com</span>
</form>

<!-- Botón con descripción -->
<button
  aria-label="Cerrar diálogo"
  (click)="close()"
>
  <mat-icon>close</mat-icon>
</button>

<!-- Live regions -->
<div
  role="alert"
  aria-live="polite"
>
  {{ mensaje }}
</div>

<!-- Skip link -->
<a href="#main-content" class="skip-link">
  Saltar al contenido principal
</a>
```

| Atributo | Propósito |
|:---------|:----------|
| `aria-label` | Descripción invisible |
| `aria-describedby` | Texto de ayuda |
| `role` | Tipo de elemento |
| `aria-live` | Anuncios dinámicos |
| `tabindex` | Orden de navegación |

---

<div align="center">
<sub>Frontend III · Experiencia 3</sub>
</div>
