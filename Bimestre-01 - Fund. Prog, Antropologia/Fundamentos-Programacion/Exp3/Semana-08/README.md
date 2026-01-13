<div align="center">

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-08-blue?style=flat-square)

# `Diccionarios y Archivos`

</div>

---

### 📋 Contenido

| Tema | Descripción |
|:-----|:------------|
| Diccionarios | Pares clave-valor |
| Acceso | `dict[key]`, `.get()` |
| Archivos | `open()`, `read()`, `write()` |
| Context manager | `with open()` |

---

### 💻 Código Clave

```python
# Diccionarios
alumno = {"nombre": "Juan", "edad": 20}
print(alumno["nombre"])       # Juan
alumno["carrera"] = "Info"    # Agregar

# Archivos
with open("datos.txt", "w") as f:
    f.write("Hola Mundo")

with open("datos.txt", "r") as f:
    contenido = f.read()
```

---

<div align="center">
<sub>Fundamentos de Programación · Experiencia 3</sub>
</div>
