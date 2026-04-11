<div align="center">

![Hilt](https://img.shields.io/badge/Hilt-DI-3DDC84?style=flat-square&logo=android&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-08-blue?style=flat-square)

# `Inyección de Dependencias`

</div>

---

### 💉 Hilt

```kotlin
// Application
@HiltAndroidApp
class MyApp : Application()

// Module
@Module
@InstallIn(SingletonComponent::class)
object AppModule {

    @Provides
    @Singleton
    fun provideDatabase(@ApplicationContext context: Context): AppDatabase {
        return Room.databaseBuilder(context, AppDatabase::class.java, "app.db")
            .build()
    }

    @Provides
    fun provideProductoDao(database: AppDatabase): ProductoDao {
        return database.productoDao()
    }

    @Provides
    @Singleton
    fun provideRetrofit(): ProductoApi {
        return Retrofit.Builder()
            .baseUrl("https://api.example.com/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(ProductoApi::class.java)
    }
}

// ViewModel con Hilt
@HiltViewModel
class ProductoViewModel @Inject constructor(
    private val repository: ProductoRepository
) : ViewModel() { }

// Activity
@AndroidEntryPoint
class MainActivity : ComponentActivity() { }
```

| Anotación | Uso |
|:----------|:----|
| `@Inject` | Inyectar dependencia |
| `@Provides` | Crear instancia |
| `@Singleton` | Una instancia |

---

<div align="center">
<sub>Mobile I · Experiencia 3</sub>
</div>
