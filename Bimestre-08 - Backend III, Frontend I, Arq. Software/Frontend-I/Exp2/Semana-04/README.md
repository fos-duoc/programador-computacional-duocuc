<div align="center">

![Angular](https://img.shields.io/badge/Angular-Services-DD0031?style=flat-square&logo=angular&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-04-blue?style=flat-square)

# `Servicios & HTTP`

</div>

---

### 🌐 HttpClient

```typescript
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'http://api.example.com/productos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  getById(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  create(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, producto);
  }

  update(id: number, producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.apiUrl}/${id}`, producto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
```

| Método | HTTP |
|:-------|:-----|
| `get()` | GET |
| `post()` | POST |
| `put()` | PUT |
| `delete()` | DELETE |

---

<div align="center">
<sub>Frontend I-II · Experiencia 2</sub>
</div>
