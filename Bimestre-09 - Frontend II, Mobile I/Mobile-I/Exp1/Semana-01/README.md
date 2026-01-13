<div align="center">

![Kotlin](https://img.shields.io/badge/Kotlin-Android-7F52FF?style=flat-square&logo=kotlin&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-01-blue?style=flat-square)

# `Kotlin Fundamentos`

</div>

---

### 📱 Sintaxis Básica

```kotlin
// Variables
val inmutable: String = "No cambia"
var mutable: Int = 10

// Null Safety
var nombre: String? = null
val largo = nombre?.length ?: 0

// Data class
data class Usuario(
    val id: Long,
    val nombre: String,
    val email: String
)

// Funciones
fun saludar(nombre: String): String {
    return "Hola, $nombre"
}

// Lambda
val suma = { a: Int, b: Int -> a + b }

// Extension function
fun String.addExclamation() = "$this!"
```

| Concepto | Kotlin | Java |
|:---------|:-------|:-----|
| Null safe | `String?` | `@Nullable` |
| Data class | `data class` | Lombok/Record |
| Inmutable | `val` | `final` |

---

<div align="center">
<sub>Mobile I · Experiencia 1</sub>
</div>
