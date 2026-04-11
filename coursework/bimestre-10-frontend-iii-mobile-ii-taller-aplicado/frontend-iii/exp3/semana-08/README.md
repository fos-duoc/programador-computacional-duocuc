<div align="center">

![Micro](https://img.shields.io/badge/Micro-Frontends-673AB7?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-08-blue?style=flat-square)

# `Micro Frontends`

</div>

---

### 🧩 Module Federation

```javascript
// webpack.config.js - Shell
new ModuleFederationPlugin({
  name: 'shell',
  remotes: {
    productos: 'productos@http://localhost:4201/remoteEntry.js',
    carrito: 'carrito@http://localhost:4202/remoteEntry.js'
  },
  shared: ['@angular/core', '@angular/common', '@angular/router']
})

// webpack.config.js - Remote (productos)
new ModuleFederationPlugin({
  name: 'productos',
  filename: 'remoteEntry.js',
  exposes: {
    './ProductosModule': './src/app/productos/productos.module.ts'
  },
  shared: ['@angular/core', '@angular/common', '@angular/router']
})
```

```typescript
// Cargar remoto dinámicamente
const routes: Routes = [
  {
    path: 'productos',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'productos',
        exposedModule: './ProductosModule'
      })
  }
];
```

| Patrón | Uso |
|:-------|:----|
| Module Federation | Webpack 5 |
| Single-SPA | Framework agnostic |
| Web Components | Estándar web |

---

<div align="center">
<sub>Frontend III · Experiencia 3</sub>
</div>
