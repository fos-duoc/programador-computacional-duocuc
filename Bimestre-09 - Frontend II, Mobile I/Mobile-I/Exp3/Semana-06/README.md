<div align="center">

![Retrofit](https://img.shields.io/badge/Retrofit-HTTP-48B983?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-06-blue?style=flat-square)

# `Consumo de APIs`

</div>

---

### 🌐 Retrofit + Coroutines

```kotlin
// API Interface
interface ProductoApi {

    @GET("productos")
    suspend fun getAll(): List<ProductoDto>

    @GET("productos/{id}")
    suspend fun getById(@Path("id") id: Long): ProductoDto

    @POST("productos")
    suspend fun create(@Body producto: ProductoDto): ProductoDto
}

// Configuración Retrofit
object RetrofitClient {
    private const val BASE_URL = "https://api.example.com/"

    val api: ProductoApi by lazy {
        Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(ProductoApi::class.java)
    }
}

// Repository
class ProductoRepository {
    suspend fun getAll(): Result<List<Producto>> {
        return try {
            val response = RetrofitClient.api.getAll()
            Result.success(response.map { it.toDomain() })
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}
```

| Anotación | HTTP |
|:----------|:-----|
| `@GET` | GET |
| `@POST` | POST |
| `@PUT` | PUT |
| `@DELETE` | DELETE |

---

<div align="center">
<sub>Mobile I · Experiencia 3</sub>
</div>
