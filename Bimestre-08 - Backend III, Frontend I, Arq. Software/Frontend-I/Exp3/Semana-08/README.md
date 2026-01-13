<div align="center">

![Angular](https://img.shields.io/badge/Angular-State_Management-DD0031?style=flat-square&logo=angular&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-08-blue?style=flat-square)

# `Estado Global & NgRx`

</div>

---

### 🗃️ Store Pattern

```typescript
// Actions
export const loadProducts = createAction('[Products] Load');
export const loadProductsSuccess = createAction(
  '[Products] Load Success',
  props<{ products: Product[] }>()
);

// Reducer
export const productsReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false
  }))
);

// Selector
export const selectAllProducts = createSelector(
  selectProductsState,
  (state) => state.products
);

// Effect
@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        this.productService.getAll().pipe(
          map(products => loadProductsSuccess({ products }))
        )
      )
    )
  );
}
```

| Concepto | Función |
|:---------|:--------|
| Store | Estado único |
| Actions | Eventos |
| Reducers | Transiciones |
| Selectors | Consultas |
| Effects | Side effects |

---

<div align="center">
<sub>Frontend I-II · Experiencia 3</sub>
</div>
