<div align="center">

![RxJS](https://img.shields.io/badge/RxJS-Observables-B7178C?style=flat-square&logo=reactivex&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-07-blue?style=flat-square)

# `RxJS & Observables`

</div>

---

### 🔄 Operadores Comunes

```typescript
// Operadores de transformación
this.searchTerm$.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(term => this.productoService.search(term))
).subscribe(results => this.results = results);

// Combinar observables
combineLatest([
  this.usuario$,
  this.permisos$
]).pipe(
  map(([usuario, permisos]) => ({
    ...usuario,
    permisos
  }))
);

// Manejo de errores
this.http.get('/api/data').pipe(
  retry(3),
  catchError(error => {
    console.error(error);
    return of([]);  // valor por defecto
  })
);
```

| Operador | Uso |
|:---------|:----|
| `map` | Transformar valor |
| `filter` | Filtrar emisiones |
| `switchMap` | Cancelar anterior |
| `mergeMap` | Paralelo |
| `debounceTime` | Esperar pausa |
| `catchError` | Manejar error |

---

<div align="center">
<sub>Frontend I-II · Experiencia 3</sub>
</div>
