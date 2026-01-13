<div align="center">

![Navigation](https://img.shields.io/badge/Navigation-Compose-00BCD4?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-05-blue?style=flat-square)

# `Navegación`

</div>

---

### 🧭 Navigation Component

```kotlin
// Definir rutas
sealed class Screen(val route: String) {
    object Home : Screen("home")
    object Detail : Screen("detail/{id}") {
        fun createRoute(id: Long) = "detail/$id"
    }
}

// NavHost
@Composable
fun AppNavigation() {
    val navController = rememberNavController()

    NavHost(navController, startDestination = Screen.Home.route) {

        composable(Screen.Home.route) {
            HomeScreen(
                onProductClick = { id ->
                    navController.navigate(Screen.Detail.createRoute(id))
                }
            )
        }

        composable(
            route = Screen.Detail.route,
            arguments = listOf(navArgument("id") { type = NavType.LongType })
        ) { backStackEntry ->
            val id = backStackEntry.arguments?.getLong("id") ?: 0L
            DetailScreen(productId = id)
        }
    }
}
```

| Función | Uso |
|:--------|:----|
| `navigate()` | Ir a destino |
| `popBackStack()` | Volver atrás |
| `navArgument()` | Pasar parámetros |

---

<div align="center">
<sub>Mobile I · Experiencia 2</sub>
</div>
