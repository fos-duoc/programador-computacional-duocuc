<div align="center">

![State](https://img.shields.io/badge/State-Management-FF6F00?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-04-blue?style=flat-square)

# `Estado en Compose`

</div>

---

### 🔄 Remember & State

```kotlin
@Composable
fun Counter() {
    var count by remember { mutableStateOf(0) }

    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        Text(text = "Contador: $count")
        Button(onClick = { count++ }) {
            Text("Incrementar")
        }
    }
}

// ViewModel
class ProductoViewModel : ViewModel() {

    private val _productos = MutableStateFlow<List<Producto>>(emptyList())
    val productos: StateFlow<List<Producto>> = _productos.asStateFlow()

    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading.asStateFlow()

    fun loadProductos() {
        viewModelScope.launch {
            _isLoading.value = true
            _productos.value = repository.getAll()
            _isLoading.value = false
        }
    }
}

// Uso en Composable
@Composable
fun ProductoScreen(viewModel: ProductoViewModel = viewModel()) {
    val productos by viewModel.productos.collectAsState()
    val isLoading by viewModel.isLoading.collectAsState()
}
```

| Estado | Uso |
|:-------|:----|
| `remember` | Sobrevive recomposición |
| `StateFlow` | Observable en ViewModel |
| `collectAsState()` | Flow a Compose State |

---

<div align="center">
<sub>Mobile I · Experiencia 2</sub>
</div>
