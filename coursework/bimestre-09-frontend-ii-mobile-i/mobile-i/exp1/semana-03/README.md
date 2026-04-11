<div align="center">

![Compose](https://img.shields.io/badge/Jetpack-Compose-4285F4?style=flat-square&logo=jetpackcompose&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-03-blue?style=flat-square)

# `Jetpack Compose`

</div>

---

### 🎨 UI Declarativa

```kotlin
@Composable
fun Greeting(name: String) {
    Text(text = "Hola, $name!")
}

@Composable
fun ProductCard(producto: Producto) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(8.dp)
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(
                text = producto.nombre,
                style = MaterialTheme.typography.headlineSmall
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = "$${producto.precio}",
                style = MaterialTheme.typography.bodyLarge
            )
            Button(
                onClick = { /* agregar */ },
                modifier = Modifier.fillMaxWidth()
            ) {
                Text("Agregar al carrito")
            }
        }
    }
}
```

| Componente | Uso |
|:-----------|:----|
| `Column` | Vertical |
| `Row` | Horizontal |
| `Box` | Stack/Overlay |
| `LazyColumn` | Lista eficiente |

---

<div align="center">
<sub>Mobile I · Experiencia 1</sub>
</div>
