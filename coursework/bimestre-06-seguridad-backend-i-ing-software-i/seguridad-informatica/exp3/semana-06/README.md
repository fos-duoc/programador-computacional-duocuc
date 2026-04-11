<div align="center">

![Security](https://img.shields.io/badge/Security-Informática-red?style=flat-square&logo=security&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-06-blue?style=flat-square)

# `XSS - Cross-Site Scripting`

</div>

---

### 📋 Contenido

| Tipo | Descripción |
|:-----|:------------|
| Reflejado | En URL/parámetros |
| Almacenado | En base de datos |
| DOM-based | En JavaScript |

---

### 💻 Prevención

```html
<!-- ❌ VULNERABLE -->
<div>${userInput}</div>

<!-- ✓ SEGURO - Escapar HTML -->
<div th:text="${userInput}"></div>
```

```java
// Sanitizar entrada
String safe = HtmlUtils.htmlEscape(userInput);

// Content Security Policy
response.setHeader("Content-Security-Policy",
    "default-src 'self'; script-src 'self'");

// HttpOnly cookies
Cookie cookie = new Cookie("session", value);
cookie.setHttpOnly(true);
cookie.setSecure(true);
```

---

<div align="center">
<sub>Seguridad Informática · Experiencia 3</sub>
</div>
