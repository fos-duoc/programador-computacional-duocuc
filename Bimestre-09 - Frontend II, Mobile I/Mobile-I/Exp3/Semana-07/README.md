<div align="center">

![Room](https://img.shields.io/badge/Room-Database-4285F4?style=flat-square&logo=sqlite&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-07-blue?style=flat-square)

# `Persistencia Local`

</div>

---

### 💾 Room Database

```kotlin
// Entity
@Entity(tableName = "productos")
data class ProductoEntity(
    @PrimaryKey(autoGenerate = true)
    val id: Long = 0,
    val nombre: String,
    val precio: Double,
    val categoria: String
)

// DAO
@Dao
interface ProductoDao {

    @Query("SELECT * FROM productos")
    fun getAll(): Flow<List<ProductoEntity>>

    @Query("SELECT * FROM productos WHERE id = :id")
    suspend fun getById(id: Long): ProductoEntity?

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insert(producto: ProductoEntity)

    @Delete
    suspend fun delete(producto: ProductoEntity)
}

// Database
@Database(entities = [ProductoEntity::class], version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun productoDao(): ProductoDao
}

// Uso
val db = Room.databaseBuilder(context, AppDatabase::class.java, "app.db")
    .build()
```

| Componente | Función |
|:-----------|:--------|
| Entity | Tabla SQL |
| DAO | Operaciones CRUD |
| Database | Contenedor |

---

<div align="center">
<sub>Mobile I · Experiencia 3</sub>
</div>
