<div align="center">

![SSR](https://img.shields.io/badge/Angular-Universal-DD0031?style=flat-square&logo=angular&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-05-blue?style=flat-square)

# `Server-Side Rendering`

</div>

---

### 🖥️ Angular Universal

```bash
ng add @angular/ssr
```

```typescript
// server.ts
import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';

export function app(): express.Express {
  const server = express();
  const engine = new CommonEngine();

  server.set('view engine', 'html');

  server.get('*', (req, res, next) => {
    engine.render({
      bootstrap: AppServerModule,
      documentFilePath: indexHtml,
      url: req.originalUrl,
      providers: [
        { provide: APP_BASE_HREF, useValue: req.baseUrl }
      ]
    })
    .then(html => res.send(html))
    .catch(err => next(err));
  });

  return server;
}
```

| Tipo | Cuándo Renderiza |
|:-----|:-----------------|
| CSR | En el navegador |
| SSR | En el servidor (cada request) |
| SSG | En build time |
| ISR | Revalidación periódica |

---

<div align="center">
<sub>Frontend III · Experiencia 2</sub>
</div>
