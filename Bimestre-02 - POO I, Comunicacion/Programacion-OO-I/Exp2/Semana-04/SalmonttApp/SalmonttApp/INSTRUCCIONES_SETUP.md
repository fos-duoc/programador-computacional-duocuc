# 📋 INSTRUCCIONES DE CONFIGURACIÓN

## Pasos para configurar el proyecto en IntelliJ IDEA

### 1. Crear el proyecto en IntelliJ
1. Abre IntelliJ IDEA
2. File → New → Project
3. Selecciona "Java" y asegúrate de tener un JDK configurado
4. Nombre del proyecto: **SalmonttApp**
5. Click en "Create"

### 2. Organizar la estructura
Crea la siguiente estructura de carpetas dentro de `src/`:
```
src/
├── model/
├── data/
├── ui/
└── resources/
```

### 3. Copiar los archivos
Copia cada archivo Java a su paquete correspondiente:
- `CentroCultivo.java` → `src/model/`
- `GestorDatos.java` → `src/data/`
- `Main.java` → `src/ui/`
- `centros.txt` → `src/resources/`

### 4. Verificar la ruta del archivo
En `Main.java`, asegúrate de que la ruta del archivo sea correcta:
```java
String rutaArchivo = "src/resources/centros.txt";
```

### 5. Ejecutar el proyecto
1. Haz clic derecho en `Main.java`
2. Selecciona "Run 'Main.main()'"
3. Verifica que la salida muestre todos los centros y los filtros aplicados

## Subir a GitHub

### 1. Crear repositorio
```bash
# En la carpeta del proyecto
git init
git add .
git commit -m "Initial commit: SalmonttApp - Sistema de gestión de centros de cultivo"
```

### 2. Conectar con GitHub
```bash
# Reemplaza 'tu-usuario' con tu usuario de GitHub
git remote add origin https://github.com/tu-usuario/salmontt-colecciones.git
git branch -M main
git push -u origin main
```

### 3. Verificar
- Ve a tu repositorio en GitHub
- Asegúrate de que todos los archivos estén visibles
- Copia el enlace del repositorio

### 4. Entregar en AVA
Pega el enlace de tu repositorio GitHub en la plataforma AVA.

## Solución de Problemas Comunes

### Error: "File not found"
- Verifica que `centros.txt` esté en `src/resources/`
- Verifica la ruta en `Main.java`

### Error de compilación
- Asegúrate de que cada archivo esté en su paquete correcto
- Verifica que los `import` estén correctos

### No se muestran resultados
- Verifica que `centros.txt` tenga datos
- Verifica que no haya espacios extra en el archivo
- El formato debe ser: `nombre;comuna;toneladas`

## Criterios de Evaluación ✅

- [x] Clase con 3+ atributos, getters, setters y toString()
- [x] Paquetes organizados: model, data, ui, resources
- [x] Lectura correcta del archivo con 5+ objetos en ArrayList
- [x] Recorrido y filtrado de la colección
- [x] Proyecto completo, estructurado, con README funcional

## Mejoras Opcionales

Si quieres agregar funcionalidades extra:
1. Ordenar centros por producción (mayor a menor)
2. Agregar interfaz con Scanner para búsquedas interactivas
3. Exportar resultados filtrados a un nuevo archivo
4. Validar que no haya centros duplicados

¡Éxito con tu entrega! 🚀
