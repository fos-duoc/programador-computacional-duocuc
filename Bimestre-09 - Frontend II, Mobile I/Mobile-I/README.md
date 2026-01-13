# ◈ Mobile I

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Bimestre 09 · Android · Kotlin · Jetpack · Arquitectura MVVM               │
└──────────────────────────────────────────────────────────────────────────────┘
```

## ⚡ Contenido

- [Kotlin Fundamentos](#-kotlin)
- [Android Basics](#-android-basics)
- [Jetpack Components](#-jetpack)

---

## 📌 Kotlin

```kotlin
// ═══════════════════════════════════════════════════════════════════════
// VARIABLES Y TIPOS
// ═══════════════════════════════════════════════════════════════════════

val nombre: String = "Juan"    // Inmutable (final)
var edad: Int = 25             // Mutable
val lista = listOf(1, 2, 3)    // Inferencia de tipo

// Nullable
var email: String? = null
email?.length                  // Safe call
email ?: "default"             // Elvis operator
email!!.length                 // Not-null assertion

// ═══════════════════════════════════════════════════════════════════════
// DATA CLASS
// ═══════════════════════════════════════════════════════════════════════

data class Usuario(
    val id: Long,
    val nombre: String,
    val email: String
)

// ═══════════════════════════════════════════════════════════════════════
// FUNCIONES
// ═══════════════════════════════════════════════════════════════════════

fun saludar(nombre: String): String {
    return "Hola, $nombre"
}

// Función de expresión
fun sumar(a: Int, b: Int) = a + b

// Parámetros por defecto
fun log(mensaje: String, nivel: String = "INFO") { }

// Extension function
fun String.capitalizar() = this.replaceFirstChar { it.uppercase() }

// Lambdas
val numeros = listOf(1, 2, 3, 4, 5)
val pares = numeros.filter { it % 2 == 0 }
val cuadrados = numeros.map { it * it }
```

---

## 📌 Android Basics

```kotlin
// ═══════════════════════════════════════════════════════════════════════
// ACTIVITY
// ═══════════════════════════════════════════════════════════════════════

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.btnSaludar.setOnClickListener {
            val nombre = binding.etNombre.text.toString()
            binding.tvSaludo.text = "Hola, $nombre"
        }
    }
}

// ═══════════════════════════════════════════════════════════════════════
// FRAGMENT
// ═══════════════════════════════════════════════════════════════════════

class ProductosFragment : Fragment() {

    private var _binding: FragmentProductosBinding? = null
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentProductosBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}
```

---

## 📌 Jetpack

```kotlin
// ═══════════════════════════════════════════════════════════════════════
// VIEWMODEL
// ═══════════════════════════════════════════════════════════════════════

class ProductoViewModel : ViewModel() {

    private val _productos = MutableLiveData<List<Producto>>()
    val productos: LiveData<List<Producto>> = _productos

    private val _loading = MutableLiveData<Boolean>()
    val loading: LiveData<Boolean> = _loading

    fun cargarProductos() {
        viewModelScope.launch {
            _loading.value = true
            try {
                _productos.value = repository.getProductos()
            } catch (e: Exception) {
                // Manejar error
            } finally {
                _loading.value = false
            }
        }
    }
}

// En el Fragment
class ProductosFragment : Fragment() {
    private val viewModel: ProductoViewModel by viewModels()

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        viewModel.productos.observe(viewLifecycleOwner) { productos ->
            adapter.submitList(productos)
        }

        viewModel.cargarProductos()
    }
}

// ═══════════════════════════════════════════════════════════════════════
// ROOM (Database)
// ═══════════════════════════════════════════════════════════════════════

@Entity(tableName = "productos")
data class Producto(
    @PrimaryKey val id: Long,
    val nombre: String,
    val precio: Double
)

@Dao
interface ProductoDao {
    @Query("SELECT * FROM productos")
    suspend fun getAll(): List<Producto>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insert(producto: Producto)

    @Delete
    suspend fun delete(producto: Producto)
}

@Database(entities = [Producto::class], version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun productoDao(): ProductoDao
}
```

---

<div align="center">

`{ Apps nativas · Experiencia fluida }`

</div>
