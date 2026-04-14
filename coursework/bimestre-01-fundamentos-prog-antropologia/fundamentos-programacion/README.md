<div align="center">

<!-- HEADER VISUAL -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:3776AB,100:FFD43B&height=120&section=header&text=Fundamentos%20de%20Programación&fontSize=28&fontColor=ffffff&animation=fadeIn&fontAlignY=35" width="100%"/>

<!-- BADGES -->
<img src="https://img.shields.io/badge/Bimestre-01-blue?style=for-the-badge&logo=calendar&logoColor=white"/>
<img src="https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
<img src="https://img.shields.io/badge/Paradigma-Estructurado-orange?style=for-the-badge&logo=code&logoColor=white"/>
<img src="https://img.shields.io/badge/Nivel-Fundamentos-green?style=for-the-badge&logo=seedling&logoColor=white"/>

<br><br>

<!-- QUICK STATS -->
<table>
<tr>
<td align="center"><b>🎯 Objetivo</b></td>
<td align="center"><b>⏱️ Duración</b></td>
<td align="center"><b>📚 Prerequisitos</b></td>
<td align="center"><b>🔗 Siguiente</b></td>
</tr>
<tr>
<td align="center">Lógica de programación<br>y pensamiento algorítmico</td>
<td align="center">8 semanas<br>3 experiencias</td>
<td align="center">Ninguno<br>(primer curso)</td>
<td align="center"><a href="../../bimestre-02-poo-i-comunicacion/programacion-oo-i/">POO I →</a></td>
</tr>
</table>

</div>

---

## 📑 Tabla de Contenidos

<table>
<tr>
<td width="50%" valign="top">

### 🔰 Fundamentos
- [Variables y Tipos](#-variables-y-tipos)
- [Operadores](#-operadores)
- [Estructuras de Control](#-estructuras-de-control)
- [Funciones](#-funciones)

</td>
<td width="50%" valign="top">

### 📦 Estructuras
- [Listas y Diccionarios](#-estructuras-de-datos)
- [Entrada/Salida](#-entradasalida)
- [Manejo de Errores](#-manejo-de-errores)
- [Patrones Comunes](#-patrones-comunes)

</td>
</tr>
</table>

---

## 🚀 Quick Reference

> [!TIP]
> **Cheatsheet rápido** - Los comandos más usados en una sola tabla

| Concepto | Sintaxis | Ejemplo |
|:---------|:---------|:--------|
| Variable | `nombre = valor` | `edad = 25` |
| Input | `input("mensaje")` | `nombre = input("Tu nombre: ")` |
| Print | `print(valor)` | `print(f"Hola {nombre}")` |
| Condicional | `if/elif/else` | `if x > 0: print("positivo")` |
| Bucle for | `for x in range(n)` | `for i in range(5): print(i)` |
| Bucle while | `while condicion:` | `while x < 10: x += 1` |
| Función | `def nombre():` | `def saludar(): print("Hola")` |
| Lista | `[elementos]` | `nums = [1, 2, 3]` |
| Diccionario | `{clave: valor}` | `persona = {"nombre": "Ana"}` |

---

## 📌 Variables y Tipos

<table>
<tr>
<td width="50%">

### Tipos Primitivos

```python
# ══════════════════════════════════
# NUMÉRICOS
# ══════════════════════════════════
entero = 42                 # int
decimal = 3.14159           # float
complejo = 2 + 3j           # complex

# ══════════════════════════════════
# TEXTO
# ══════════════════════════════════
texto = "Hola Mundo"        # str
caracter = 'A'              # str (no existe char)

# ══════════════════════════════════
# BOOLEANOS
# ══════════════════════════════════
verdadero = True            # bool
falso = False               # bool
nada = None                 # NoneType
```

</td>
<td width="50%">

### Conversión de Tipos

```python
# ══════════════════════════════════
# CASTING (conversión)
# ══════════════════════════════════
int("42")        # → 42
float("3.14")    # → 3.14
str(100)         # → "100"
bool(1)          # → True
bool(0)          # → False
bool("")         # → False
bool("texto")    # → True

# ══════════════════════════════════
# VERIFICAR TIPO
# ══════════════════════════════════
type(variable)          # Retorna tipo
isinstance(x, int)      # True si x es int
isinstance(x, (int, float))  # Múltiples
```

</td>
</tr>
</table>

> [!NOTE]
> **Python es dinámicamente tipado** - No necesitas declarar el tipo, Python lo infiere automáticamente.

---

## 📌 Operadores

<table>
<tr>
<td width="33%">

### ➕ Aritméticos

| Op | Descripción | Ejemplo |
|:--:|:------------|:--------|
| `+` | Suma | `5 + 3 → 8` |
| `-` | Resta | `5 - 3 → 2` |
| `*` | Multiplicación | `5 * 3 → 15` |
| `/` | División (float) | `7 / 2 → 3.5` |
| `//` | División entera | `7 // 2 → 3` |
| `%` | Módulo (resto) | `7 % 2 → 1` |
| `**` | Potencia | `2 ** 3 → 8` |

</td>
<td width="33%">

### ⚖️ Comparación

| Op | Descripción | Ejemplo |
|:--:|:------------|:--------|
| `==` | Igual | `5 == 5 → True` |
| `!=` | Diferente | `5 != 3 → True` |
| `>` | Mayor que | `5 > 3 → True` |
| `<` | Menor que | `3 < 5 → True` |
| `>=` | Mayor o igual | `5 >= 5 → True` |
| `<=` | Menor o igual | `3 <= 5 → True` |

</td>
<td width="33%">

### 🔗 Lógicos

| Op | Descripción | Ejemplo |
|:--:|:------------|:--------|
| `and` | Y lógico | `True and False → False` |
| `or` | O lógico | `True or False → True` |
| `not` | Negación | `not True → False` |

### 📝 Asignación

| Op | Equivale a |
|:--:|:-----------|
| `+=` | `x = x + n` |
| `-=` | `x = x - n` |
| `*=` | `x = x * n` |
| `/=` | `x = x / n` |

</td>
</tr>
</table>

---

## 📌 Estructuras de Control

### 🔀 Condicionales

```python
# ══════════════════════════════════════════════════════════════════════════════
# IF - ELIF - ELSE
# ══════════════════════════════════════════════════════════════════════════════

nota = 75

if nota >= 90:
    print("A - Excelente")
elif nota >= 80:
    print("B - Muy Bueno")
elif nota >= 70:
    print("C - Bueno")
elif nota >= 60:
    print("D - Suficiente")
else:
    print("F - Reprobado")

# ══════════════════════════════════════════════════════════════════════════════
# OPERADOR TERNARIO (una línea)
# ══════════════════════════════════════════════════════════════════════════════

resultado = "par" if x % 2 == 0 else "impar"
mayor = a if a > b else b
```

<details>
<summary><b>🆕 Match (Python 3.10+)</b> - Click para expandir</summary>

```python
# ══════════════════════════════════════════════════════════════════════════════
# MATCH - CASE (similar a switch)
# ══════════════════════════════════════════════════════════════════════════════

dia = 3

match dia:
    case 1:
        print("Lunes")
    case 2:
        print("Martes")
    case 3:
        print("Miércoles")
    case 4 | 5:                    # Múltiples valores
        print("Jueves o Viernes")
    case _:                        # Default (cualquier otro)
        print("Fin de semana")
```

</details>

### 🔄 Bucles

<table>
<tr>
<td width="50%">

#### While (condición)

```python
# Mientras la condición sea True
contador = 0
while contador < 5:
    print(f"Contador: {contador}")
    contador += 1

# Con break y continue
while True:
    opcion = input("Opción (s/n): ")
    if opcion == 's':
        continue    # Vuelve al inicio
    if opcion == 'n':
        break       # Sale del bucle
```

</td>
<td width="50%">

#### For (iteración)

```python
# Con range()
for i in range(5):          # 0,1,2,3,4
    print(i)

for i in range(1, 6):       # 1,2,3,4,5
    print(i)

for i in range(0, 10, 2):   # 0,2,4,6,8
    print(i)

for i in range(5, 0, -1):   # 5,4,3,2,1
    print(i)
```

</td>
</tr>
</table>

```python
# ══════════════════════════════════════════════════════════════════════════════
# ITERACIÓN SOBRE COLECCIONES
# ══════════════════════════════════════════════════════════════════════════════

frutas = ["manzana", "pera", "uva"]

# Solo elementos
for fruta in frutas:
    print(fruta)

# Con índice (enumerate) ⭐
for i, fruta in enumerate(frutas):
    print(f"{i}: {fruta}")

# Diccionarios
persona = {"nombre": "Ana", "edad": 25}
for clave, valor in persona.items():
    print(f"{clave}: {valor}")
```

> [!WARNING]
> **Control de flujo:**
> - `break` → Sale del bucle completamente
> - `continue` → Salta a la siguiente iteración
> - `pass` → No hace nada (placeholder)

---

## 📌 Funciones

```python
# ══════════════════════════════════════════════════════════════════════════════
# DEFINICIÓN BÁSICA
# ══════════════════════════════════════════════════════════════════════════════

def saludar():
    """Función simple sin parámetros ni retorno"""
    print("¡Hola!")

def sumar(a, b):
    """Función con parámetros y retorno"""
    return a + b

# ══════════════════════════════════════════════════════════════════════════════
# PARÁMETROS AVANZADOS
# ══════════════════════════════════════════════════════════════════════════════

def saludar(nombre="Mundo"):              # Valor por defecto
    print(f"Hola, {nombre}!")

saludar()           # → Hola, Mundo!
saludar("Ana")      # → Hola, Ana!

def sumar_todos(*numeros):                 # *args (tupla de argumentos)
    return sum(numeros)

sumar_todos(1, 2, 3, 4)    # → 10

def crear_perfil(**datos):                 # **kwargs (diccionario)
    for clave, valor in datos.items():
        print(f"{clave}: {valor}")

crear_perfil(nombre="Ana", edad=25, ciudad="Santiago")
```

<details>
<summary><b>🔥 Funciones Lambda</b> - Click para expandir</summary>

```python
# ══════════════════════════════════════════════════════════════════════════════
# FUNCIONES LAMBDA (anónimas, una línea)
# ══════════════════════════════════════════════════════════════════════════════

cuadrado = lambda x: x ** 2
sumar = lambda a, b: a + b

print(cuadrado(5))      # → 25
print(sumar(3, 4))      # → 7

# ══════════════════════════════════════════════════════════════════════════════
# USO CON FUNCIONES DE ORDEN SUPERIOR
# ══════════════════════════════════════════════════════════════════════════════

numeros = [1, 2, 3, 4, 5]

# map: aplica función a cada elemento
cuadrados = list(map(lambda x: x**2, numeros))      # [1, 4, 9, 16, 25]

# filter: filtra elementos que cumplen condición
pares = list(filter(lambda x: x % 2 == 0, numeros)) # [2, 4]

# sorted: ordena con criterio personalizado
nombres = ["Ana", "Pedro", "Bo"]
sorted(nombres, key=lambda x: len(x))               # ["Bo", "Ana", "Pedro"]
```

</details>

---

## 📌 Estructuras de Datos

### 📋 Listas `[ ]`

> [!NOTE]
> Las listas son **mutables** (se pueden modificar) y **ordenadas** (mantienen el orden).

```python
# ══════════════════════════════════════════════════════════════════════════════
# CREAR LISTAS
# ══════════════════════════════════════════════════════════════════════════════

lista = [1, 2, 3, 4, 5]
vacia = []
mixta = [1, "hola", True, 3.14]

# ══════════════════════════════════════════════════════════════════════════════
# ACCESO (indexación)
# ══════════════════════════════════════════════════════════════════════════════

lista[0]         # → 1 (primero)
lista[-1]        # → 5 (último)
lista[1:3]       # → [2, 3] (slice)
lista[::2]       # → [1, 3, 5] (cada 2)
lista[::-1]      # → [5, 4, 3, 2, 1] (reversa)
```

<table>
<tr>
<td width="50%">

#### ➕ Agregar

```python
lista.append(6)          # Al final
lista.insert(0, 0)       # En posición
lista.extend([7, 8])     # Concatenar
lista += [9, 10]         # Concatenar
```

</td>
<td width="50%">

#### ➖ Eliminar

```python
lista.remove(3)          # Por valor
lista.pop()              # Último
lista.pop(0)             # Por índice
del lista[0]             # Por índice
lista.clear()            # Vaciar
```

</td>
</tr>
</table>

```python
# ══════════════════════════════════════════════════════════════════════════════
# LIST COMPREHENSION ⭐ (forma pythonica)
# ══════════════════════════════════════════════════════════════════════════════

cuadrados = [x**2 for x in range(10)]           # [0, 1, 4, 9, 16, ...]
pares = [x for x in range(10) if x % 2 == 0]    # [0, 2, 4, 6, 8]
matriz = [[0]*3 for _ in range(3)]              # [[0,0,0], [0,0,0], [0,0,0]]
```

### 📖 Diccionarios `{ }`

> [!NOTE]
> Los diccionarios son pares **clave-valor**. Las claves deben ser únicas e inmutables.

```python
# ══════════════════════════════════════════════════════════════════════════════
# CREAR Y ACCEDER
# ══════════════════════════════════════════════════════════════════════════════

persona = {
    "nombre": "Ana",
    "edad": 25,
    "ciudad": "Santiago"
}

persona["nombre"]              # → "Ana" (KeyError si no existe)
persona.get("nombre")          # → "Ana" (None si no existe)
persona.get("pais", "Chile")   # → "Chile" (valor por defecto)

# ══════════════════════════════════════════════════════════════════════════════
# MODIFICAR
# ══════════════════════════════════════════════════════════════════════════════

persona["email"] = "ana@mail.com"      # Agregar/modificar
persona.update({"edad": 26})           # Actualizar múltiples
del persona["ciudad"]                   # Eliminar clave

# ══════════════════════════════════════════════════════════════════════════════
# ITERAR
# ══════════════════════════════════════════════════════════════════════════════

for clave in persona:                  # Solo claves
for clave, valor in persona.items():   # Clave y valor ⭐
for valor in persona.values():         # Solo valores

# Dict comprehension
cuadrados = {x: x**2 for x in range(5)}  # {0:0, 1:1, 2:4, 3:9, 4:16}
```

<table>
<tr>
<td width="50%">

### 📦 Tuplas `( )`

```python
# Inmutables (no se pueden modificar)
tupla = (1, 2, 3)
punto = (10, 20)
singleton = (1,)    # Un solo elemento

# Desempaquetado
x, y = punto
a, *resto = (1, 2, 3, 4)  # a=1, resto=[2,3,4]
```

</td>
<td width="50%">

### 🔢 Sets `{ }`

```python
# Elementos únicos, no ordenados
conjunto = {1, 2, 3, 4, 5}
unicos = set([1, 2, 2, 3])  # → {1, 2, 3}

# Operaciones
a | b    # Unión
a & b    # Intersección
a - b    # Diferencia
a ^ b    # Diferencia simétrica
```

</td>
</tr>
</table>

---

## 📌 Entrada/Salida

<table>
<tr>
<td width="50%">

### ⌨️ Input (entrada)

```python
nombre = input("Ingrese nombre: ")
edad = int(input("Ingrese edad: "))
precio = float(input("Ingrese precio: "))

# Múltiples valores en una línea
a, b = input("Dos números: ").split()
nums = list(map(int, input().split()))
```

</td>
<td width="50%">

### 🖥️ Print (salida)

```python
print("Hola Mundo")
print("a", "b", "c", sep="-")  # a-b-c
print("Sin salto", end="")
print("Continúa aquí")

# F-strings (recomendado) ⭐
print(f"Nombre: {nombre}")
print(f"Precio: ${precio:.2f}")
print(f"{'centrado':^20}")
```

</td>
</tr>
</table>

<details>
<summary><b>📁 Archivos</b> - Click para expandir</summary>

```python
# ══════════════════════════════════════════════════════════════════════════════
# LECTURA
# ══════════════════════════════════════════════════════════════════════════════

# Leer todo el contenido
with open("archivo.txt", "r", encoding="utf-8") as f:
    contenido = f.read()

# Leer línea por línea
with open("archivo.txt", "r", encoding="utf-8") as f:
    for linea in f:
        print(linea.strip())

# Leer como lista de líneas
with open("archivo.txt", "r", encoding="utf-8") as f:
    lineas = f.readlines()

# ══════════════════════════════════════════════════════════════════════════════
# ESCRITURA
# ══════════════════════════════════════════════════════════════════════════════

# Escribir (sobreescribe)
with open("archivo.txt", "w", encoding="utf-8") as f:
    f.write("Hola Mundo\n")
    f.writelines(["Línea 1\n", "Línea 2\n"])

# Agregar al final (append)
with open("archivo.txt", "a", encoding="utf-8") as f:
    f.write("Nueva línea\n")
```

> [!TIP]
> Siempre usa `with open()` - cierra el archivo automáticamente al terminar.

</details>

---

## 📌 Manejo de Errores

```python
# ══════════════════════════════════════════════════════════════════════════════
# TRY - EXCEPT BÁSICO
# ══════════════════════════════════════════════════════════════════════════════

try:
    numero = int(input("Número: "))
    resultado = 10 / numero
except ValueError:
    print("❌ Error: Ingrese un número válido")
except ZeroDivisionError:
    print("❌ Error: No se puede dividir por cero")

# ══════════════════════════════════════════════════════════════════════════════
# TRY - EXCEPT - ELSE - FINALLY
# ══════════════════════════════════════════════════════════════════════════════

try:
    archivo = open("datos.txt", "r")
    contenido = archivo.read()
except FileNotFoundError:
    print("❌ Archivo no encontrado")
except Exception as e:
    print(f"❌ Error inesperado: {e}")
else:
    print("✅ Archivo leído correctamente")  # Solo si no hubo error
    print(contenido)
finally:
    print("🔄 Limpieza ejecutada")           # Siempre se ejecuta
```

> [!WARNING]
> **Excepciones comunes:**
> - `ValueError` - Valor incorrecto (ej: `int("abc")`)
> - `TypeError` - Tipo incorrecto (ej: `"2" + 2`)
> - `ZeroDivisionError` - División por cero
> - `IndexError` - Índice fuera de rango
> - `KeyError` - Clave no existe en diccionario
> - `FileNotFoundError` - Archivo no encontrado

---

## 📌 Patrones Comunes

### 🔒 Validación de Entrada

```python
def leer_entero(mensaje):
    """Lee un entero con validación"""
    while True:
        try:
            return int(input(mensaje))
        except ValueError:
            print("⚠️ Ingrese un número válido")

def leer_rango(mensaje, minimo, maximo):
    """Lee un entero dentro de un rango"""
    while True:
        valor = leer_entero(mensaje)
        if minimo <= valor <= maximo:
            return valor
        print(f"⚠️ Debe estar entre {minimo} y {maximo}")

def leer_opcion(mensaje, opciones):
    """Lee una opción válida de una lista"""
    while True:
        opcion = input(mensaje).strip().lower()
        if opcion in opciones:
            return opcion
        print(f"⚠️ Opciones válidas: {', '.join(opciones)}")
```

### 📋 Menú Interactivo

```python
def mostrar_menu():
    print("""
    ╔═══════════════════════════════╗
    ║      SISTEMA DE GESTIÓN       ║
    ╠═══════════════════════════════╣
    ║  1. Agregar registro          ║
    ║  2. Listar registros          ║
    ║  3. Buscar registro           ║
    ║  4. Eliminar registro         ║
    ║  0. Salir                     ║
    ╚═══════════════════════════════╝
    """)

def main():
    while True:
        mostrar_menu()
        opcion = leer_rango("▸ Seleccione opción: ", 0, 4)

        if opcion == 1:
            print("📝 Agregando registro...")
        elif opcion == 2:
            print("📋 Listando registros...")
        elif opcion == 3:
            print("🔍 Buscando registro...")
        elif opcion == 4:
            print("🗑️ Eliminando registro...")
        elif opcion == 0:
            print("👋 ¡Hasta luego!")
            break

        input("\nPresione Enter para continuar...")

if __name__ == "__main__":
    main()
```

### 📊 CRUD Básico con Lista

<details>
<summary><b>Ver código completo</b></summary>

```python
# ══════════════════════════════════════════════════════════════════════════════
# CRUD: Create, Read, Update, Delete
# ══════════════════════════════════════════════════════════════════════════════

productos = []

def agregar_producto():
    nombre = input("Nombre: ")
    precio = float(input("Precio: "))
    productos.append({"nombre": nombre, "precio": precio})
    print("✅ Producto agregado")

def listar_productos():
    if not productos:
        print("📭 No hay productos")
        return
    print("\n" + "="*40)
    for i, p in enumerate(productos, 1):
        print(f"{i}. {p['nombre']} - ${p['precio']:,.0f}")
    print("="*40)

def buscar_producto():
    nombre = input("Buscar: ").lower()
    encontrados = [p for p in productos if nombre in p['nombre'].lower()]
    if encontrados:
        for p in encontrados:
            print(f"✓ {p['nombre']} - ${p['precio']:,.0f}")
    else:
        print("❌ No encontrado")

def eliminar_producto():
    listar_productos()
    if productos:
        idx = int(input("Número a eliminar: ")) - 1
        if 0 <= idx < len(productos):
            eliminado = productos.pop(idx)
            print(f"🗑️ {eliminado['nombre']} eliminado")
        else:
            print("❌ Índice inválido")
```

</details>

---

## 🧪 Ejercicios Propuestos

<table>
<tr>
<td width="33%" valign="top">

### 🟢 Básico

1. Calculadora básica (+, -, *, /)
2. Conversor de temperatura
3. Determinar si un número es primo
4. Tabla de multiplicar

</td>
<td width="33%" valign="top">

### 🟡 Intermedio

1. Gestión de contactos (CRUD)
2. Juego de adivinanza
3. Ordenamiento de lista
4. Contador de palabras

</td>
<td width="33%" valign="top">

### 🔴 Avanzado

1. Sistema de inventario
2. Análisis de texto
3. Cifrado César
4. Mini agenda con archivos

</td>
</tr>
</table>

---

<div align="center">

<!-- NAVEGACIÓN -->
<table>
<tr>
<td align="center" width="33%">

**◀️ Anterior**

---

*Es el primer curso*

</td>
<td align="center" width="33%">

**📚 Bimestre 01**

---

[Antropología](../antropologia/)

</td>
<td align="center" width="33%">

**▶️ Siguiente**

---

[POO I →](../../bimestre-02-poo-i-comunicacion/programacion-oo-i/)

</td>
</tr>
</table>

<br>

<!-- FOOTER -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:3776AB,100:FFD43B&height=80&section=footer" width="100%"/>

[![Volver al inicio](https://img.shields.io/badge/←_Volver_al_Inicio-blue?style=for-the-badge)](../../README.md)

**{ código limpio · buenas prácticas · aprendizaje continuo }**

</div>
