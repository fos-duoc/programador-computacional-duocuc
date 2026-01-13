<div align="center">

![Firestore](https://img.shields.io/badge/Cloud-Firestore-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Semana](https://img.shields.io/badge/Semana-05-blue?style=flat-square)

# `Cloud Firestore`

</div>

---

### 🗃️ CRUD Realtime

```typescript
@Injectable({ providedIn: 'root' })
export class ProductoService {
  private db = getFirestore();
  private collection = collection(this.db, 'productos');

  getAll(): Observable<Producto[]> {
    return collectionData(this.collection, { idField: 'id' }) as
      Observable<Producto[]>;
  }

  getById(id: string): Observable<Producto> {
    const docRef = doc(this.db, 'productos', id);
    return docData(docRef, { idField: 'id' }) as Observable<Producto>;
  }

  async create(producto: Producto): Promise<string> {
    const docRef = await addDoc(this.collection, producto);
    return docRef.id;
  }

  async update(id: string, data: Partial<Producto>): Promise<void> {
    const docRef = doc(this.db, 'productos', id);
    await updateDoc(docRef, data);
  }

  async delete(id: string): Promise<void> {
    const docRef = doc(this.db, 'productos', id);
    await deleteDoc(docRef);
  }

  // Query
  getByCategoria(categoria: string): Observable<Producto[]> {
    const q = query(this.collection, where('categoria', '==', categoria));
    return collectionData(q, { idField: 'id' }) as Observable<Producto[]>;
  }
}
```

| Operación | Función |
|:----------|:--------|
| Read | `collectionData()` |
| Create | `addDoc()` |
| Update | `updateDoc()` |
| Delete | `deleteDoc()` |

---

<div align="center">
<sub>Mobile II · Experiencia 2</sub>
</div>
