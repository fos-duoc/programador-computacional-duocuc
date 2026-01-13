<div align="center">

![i18n](https://img.shields.io/badge/i18n-Internationalization-2196F3?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-06-blue?style=flat-square)

# `Internacionalización`

</div>

---

### 🌍 Angular i18n

```html
<!-- Template con i18n -->
<h1 i18n="@@welcomeTitle">Bienvenido</h1>

<p i18n="@@itemCount">
  {count, plural,
    =0 {No hay items}
    =1 {Hay un item}
    other {Hay {{count}} items}
  }
</p>
```

```bash
# Extraer traducciones
ng extract-i18n --output-path src/locale
```

```xml
<!-- messages.en.xlf -->
<trans-unit id="welcomeTitle">
  <source>Bienvenido</source>
  <target>Welcome</target>
</trans-unit>
```

```typescript
// angular.json
"i18n": {
  "sourceLocale": "es",
  "locales": {
    "en": "src/locale/messages.en.xlf"
  }
}
```

| Concepto | Uso |
|:---------|:----|
| `i18n` | Marcar texto |
| `@@id` | Identificador único |
| Plural | Formas plurales |
| XLIFF | Formato traducción |

---

<div align="center">
<sub>Frontend III · Experiencia 3</sub>
</div>
