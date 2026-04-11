<div align="center">

![Android](https://img.shields.io/badge/Android-Studio-3DDC84?style=flat-square&logo=androidstudio&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-02-blue?style=flat-square)

# `Proyecto Android`

</div>

---

### 📁 Estructura

```
app/
├── src/main/
│   ├── java/com/example/myapp/
│   │   ├── ui/
│   │   ├── data/
│   │   └── MainActivity.kt
│   ├── res/
│   │   ├── layout/
│   │   ├── values/
│   │   └── drawable/
│   └── AndroidManifest.xml
├── build.gradle.kts
└── proguard-rules.pro
```

```kotlin
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
```

| Archivo | Propósito |
|:--------|:----------|
| `AndroidManifest.xml` | Configuración app |
| `build.gradle` | Dependencias |
| `res/layout` | Diseño UI |

---

<div align="center">
<sub>Mobile I · Experiencia 1</sub>
</div>
