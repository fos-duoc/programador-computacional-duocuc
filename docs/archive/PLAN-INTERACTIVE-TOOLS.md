# Plan de Implementación: 4 Herramientas Interactivas

## Resumen Ejecutivo

Implementar 4 generadores interactivos en la sección "Recursos" del sitio Astro:

1. **Generador de Carta Gantt** - Planificación de proyectos estudiantiles
2. **Generador de Queries SQL** - Constructor visual de consultas
3. **Generador de Passwords** - Contraseñas seguras con crypto API
4. **Generador de Tests/Quizzes** - Práctica para certificaciones

---

## Arquitectura Técnica (Astro Islands)

### Enfoque Recomendado

Basado en la documentación oficial de Astro, usaremos el patrón **Islands Architecture**:

```
┌─────────────────────────────────────────────────────┐
│                   recursos.astro                     │
│  ┌──────────────┐  ┌──────────────┐                 │
│  │ GanttGen     │  │ SQLQueryGen  │   ← Islands     │
│  │ client:idle  │  │ client:idle  │     (JS)        │
│  └──────────────┘  └──────────────┘                 │
│  ┌──────────────┐  ┌──────────────┐                 │
│  │ PasswordGen  │  │ QuizGen      │                 │
│  │ client:load  │  │ client:visible│                │
│  └──────────────┘  └──────────────┘                 │
│                                                      │
│        Static HTML (ocean)                          │
└─────────────────────────────────────────────────────┘
```

### Directivas de Cliente por Componente

| Componente | Directiva | Justificación |
|------------|-----------|---------------|
| Gantt Generator | `client:idle` | Interacción no inmediata, carga pesada |
| SQL Query Builder | `client:idle` | Secundario, puede esperar |
| Password Generator | `client:load` | Uso inmediato esperado |
| Quiz Generator | `client:visible` | Below-the-fold, carga bajo demanda |

---

## 1. Generador de Carta Gantt

### Librería Seleccionada: Frappe Gantt

**¿Por qué Frappe Gantt?**
- Zero dependencies (ligero)
- MIT License (open source)
- Drag & drop nativo
- Vistas: Day, Week, Month, Year
- ~50KB minificado
- 5.8K+ GitHub stars

### Funcionalidades

```
┌─────────────────────────────────────────────────────┐
│  📊 Generador de Carta Gantt                        │
├─────────────────────────────────────────────────────┤
│  [+ Agregar Tarea]  [Vista: Semana ▼]  [Exportar]  │
├─────────────────────────────────────────────────────┤
│                                                      │
│  ████████░░░░  Diseño UI          (3 días)         │
│  ░░░░████████  Desarrollo Backend (5 días)         │
│  ░░░░░░░░████  Testing            (2 días)         │
│                                                      │
├─────────────────────────────────────────────────────┤
│  Templates: [Proyecto Web] [Sprint Scrum] [Tesis]  │
└─────────────────────────────────────────────────────┘
```

### Features Específicas

1. **Templates predefinidos para estudiantes:**
   - Proyecto de programación (4 semanas)
   - Sprint Scrum (2 semanas)
   - Tesis/Trabajo final (3 meses)
   - Práctica profesional (8 semanas)

2. **Acciones:**
   - Agregar/editar/eliminar tareas
   - Drag & drop para ajustar fechas
   - Cambiar vistas (día/semana/mes)
   - Exportar a PNG/PDF
   - Guardar en localStorage

3. **Campos por tarea:**
   - Nombre
   - Fecha inicio/fin
   - Progreso (%)
   - Dependencias
   - Asignado (opcional)

### Implementación

```astro
<!-- GanttGeneratorSection.astro -->
<section id="gantt-generator" class="tool-section">
  <div class="tool-header">
    <h2>Generador de Carta Gantt</h2>
    <p>Planifica tus proyectos académicos visualmente</p>
  </div>

  <div id="gantt-container"></div>

  <div class="gantt-controls">
    <button id="add-task">+ Agregar Tarea</button>
    <select id="view-mode">
      <option value="Day">Día</option>
      <option value="Week" selected>Semana</option>
      <option value="Month">Mes</option>
    </select>
    <button id="export-gantt">Exportar PNG</button>
  </div>

  <div class="templates-row">
    <button data-template="web-project">Proyecto Web</button>
    <button data-template="scrum-sprint">Sprint Scrum</button>
    <button data-template="thesis">Tesis</button>
  </div>
</section>

<script>
  import Gantt from 'frappe-gantt';

  // Inicialización con client:idle
  document.addEventListener('astro:page-load', initGantt);

  function initGantt() {
    const tasks = loadFromLocalStorage() || getDefaultTasks();
    const gantt = new Gantt('#gantt-container', tasks, {
      view_mode: 'Week',
      language: 'es',
      on_date_change: saveToLocalStorage,
      on_progress_change: saveToLocalStorage
    });
  }
</script>
```

### Dependencias
```json
{
  "frappe-gantt": "^0.6.1"
}
```

---

## 2. Generador de Queries SQL

### Enfoque: Constructor Visual Personalizado

**¿Por qué no usar una librería externa?**
- Las librerías como Syncfusion son de pago
- Knex.js es para Node.js (backend)
- jQuery QueryBuilder es pesado
- **Solución:** Crear un builder visual ligero y educativo

### Funcionalidades

```
┌─────────────────────────────────────────────────────┐
│  🗃️ Generador de Queries SQL                       │
├─────────────────────────────────────────────────────┤
│  Tipo: [SELECT ▼]                                   │
│                                                      │
│  Columnas: [id] [nombre] [email] [+]               │
│  Tabla:    [usuarios ▼]                             │
│                                                      │
│  WHERE:                                              │
│  ┌─────────────────────────────────────────────┐   │
│  │ [edad] [>=] [18]                    [🗑️]   │   │
│  │ [AND ▼]                                      │   │
│  │ [activo] [=] [true]                 [🗑️]   │   │
│  └─────────────────────────────────────────────┘   │
│  [+ Agregar Condición]                              │
│                                                      │
│  ORDER BY: [nombre ▼] [ASC ▼]                      │
│  LIMIT: [10]                                        │
├─────────────────────────────────────────────────────┤
│  📋 Query Generada:                                 │
│  ┌─────────────────────────────────────────────┐   │
│  │ SELECT id, nombre, email                     │   │
│  │ FROM usuarios                                │   │
│  │ WHERE edad >= 18 AND activo = true          │   │
│  │ ORDER BY nombre ASC                          │   │
│  │ LIMIT 10;                                    │   │
│  └─────────────────────────────────────────────┘   │
│  [Copiar] [Formatear] [Limpiar]                    │
└─────────────────────────────────────────────────────┘
```

### Features Específicas

1. **Tipos de Query soportados:**
   - SELECT (con JOIN)
   - INSERT
   - UPDATE
   - DELETE
   - CREATE TABLE

2. **Tablas de ejemplo predefinidas:**
   - usuarios (id, nombre, email, edad, activo)
   - productos (id, nombre, precio, stock, categoria)
   - pedidos (id, usuario_id, fecha, total, estado)
   - categorias (id, nombre, descripcion)

3. **Validaciones en tiempo real:**
   - Syntax highlighting
   - Detección de errores comunes
   - Sugerencias de optimización

4. **Educativo:**
   - Tooltips explicativos por cada parte del query
   - Ejemplos de uso común
   - Links a documentación SQL

### Implementación

```astro
<!-- SQLQueryGeneratorSection.astro -->
<section id="sql-generator" class="tool-section">
  <div class="sql-builder">
    <div class="query-type-selector">
      <button class="active" data-type="select">SELECT</button>
      <button data-type="insert">INSERT</button>
      <button data-type="update">UPDATE</button>
      <button data-type="delete">DELETE</button>
    </div>

    <div class="builder-grid">
      <!-- Columnas, tablas, condiciones -->
    </div>

    <div class="query-preview">
      <pre><code id="generated-sql"></code></pre>
    </div>
  </div>
</section>

<script>
  class SQLQueryBuilder {
    constructor() {
      this.queryType = 'SELECT';
      this.columns = [];
      this.table = '';
      this.conditions = [];
      this.orderBy = null;
      this.limit = null;
    }

    generateQuery() {
      // Lógica de generación
    }

    validateSyntax() {
      // Validación básica
    }
  }
</script>
```

### Dependencias
- Ninguna (vanilla JavaScript)
- Opcional: Prism.js para syntax highlighting

---

## 3. Generador de Passwords

### Enfoque: Web Crypto API (Seguro)

**Principios de seguridad aplicados:**
- ❌ NO usar `Math.random()` (predecible)
- ✅ Usar `crypto.getRandomValues()` (criptográficamente seguro)
- ✅ Rejection sampling para evitar modulo bias
- ✅ Mínimo 15 caracteres recomendado

### Funcionalidades

```
┌─────────────────────────────────────────────────────┐
│  🔐 Generador de Contraseñas Seguras               │
├─────────────────────────────────────────────────────┤
│                                                      │
│  Longitud: ████████████████░░░░ 16                 │
│            8                    32                  │
│                                                      │
│  Opciones:                                          │
│  [✓] Mayúsculas (A-Z)                              │
│  [✓] Minúsculas (a-z)                              │
│  [✓] Números (0-9)                                 │
│  [✓] Símbolos (!@#$%^&*)                           │
│  [ ] Excluir ambiguos (0, O, l, 1, I)              │
│                                                      │
│  ┌─────────────────────────────────────────────┐   │
│  │  K7$mP2@xN9#qR4&v                           │   │
│  └─────────────────────────────────────────────┘   │
│                                                      │
│  Fortaleza: ████████████████████ EXCELENTE         │
│  Entropía: 95.2 bits                               │
│                                                      │
│  [🔄 Generar Nueva]  [📋 Copiar]  [👁️ Mostrar]    │
├─────────────────────────────────────────────────────┤
│  💡 Tips:                                           │
│  • Usa una contraseña única por cada cuenta        │
│  • Considera usar un gestor de contraseñas         │
│  • Nunca compartas tus contraseñas                 │
└─────────────────────────────────────────────────────┘
```

### Features Específicas

1. **Configuración:**
   - Slider de longitud (8-64 caracteres)
   - Checkboxes para tipos de caracteres
   - Exclusión de caracteres ambiguos
   - Exclusión de caracteres similares

2. **Indicadores:**
   - Barra de fortaleza visual
   - Cálculo de entropía en bits
   - Tiempo estimado de crackeo

3. **Acciones:**
   - Generar nueva
   - Copiar al portapapeles
   - Mostrar/ocultar contraseña
   - Historial de últimas 5 (solo sesión)

### Implementación

```astro
<!-- PasswordGeneratorSection.astro -->
<section id="password-generator" class="tool-section">
  <div class="password-tool">
    <!-- UI aquí -->
  </div>
</section>

<script>
  // Generador criptográficamente seguro
  function generateSecurePassword(length, options) {
    const charsets = {
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      numbers: '0123456789',
      symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
    };

    let chars = '';
    if (options.uppercase) chars += charsets.uppercase;
    if (options.lowercase) chars += charsets.lowercase;
    if (options.numbers) chars += charsets.numbers;
    if (options.symbols) chars += charsets.symbols;

    if (options.excludeAmbiguous) {
      chars = chars.replace(/[0OlI1]/g, '');
    }

    // Usar Web Crypto API con rejection sampling
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    let password = '';
    for (let i = 0; i < length; i++) {
      // Rejection sampling para evitar modulo bias
      const max = Math.floor(0xFFFFFFFF / chars.length) * chars.length;
      let randomValue = array[i];
      while (randomValue >= max) {
        crypto.getRandomValues(array.subarray(i, i + 1));
        randomValue = array[i];
      }
      password += chars[randomValue % chars.length];
    }

    return password;
  }

  function calculateEntropy(password, charsetSize) {
    return Math.log2(Math.pow(charsetSize, password.length));
  }

  function getStrengthLevel(entropy) {
    if (entropy < 28) return { level: 'muy-debil', text: 'Muy Débil' };
    if (entropy < 36) return { level: 'debil', text: 'Débil' };
    if (entropy < 60) return { level: 'moderada', text: 'Moderada' };
    if (entropy < 80) return { level: 'fuerte', text: 'Fuerte' };
    return { level: 'excelente', text: 'Excelente' };
  }
</script>
```

### Dependencias
- Ninguna (Web Crypto API nativa)

---

## 4. Generador de Tests/Quizzes para Certificaciones

### Enfoque: Motor de Quiz Personalizado

**Estructura del banco de preguntas:**

```typescript
interface Question {
  id: string;
  category: 'javascript' | 'python' | 'sql' | 'java' | 'aws' | 'docker';
  certification: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  timeLimit?: number; // segundos
}
```

### Funcionalidades

```
┌─────────────────────────────────────────────────────┐
│  📝 Generador de Tests - Práctica Certificaciones  │
├─────────────────────────────────────────────────────┤
│  Certificación: [JavaScript Developer ▼]           │
│  Dificultad:    [● Fácil  ● Media  ● Difícil]     │
│  Preguntas:     [10 ▼]                              │
│  Tiempo límite: [✓] 60 segundos por pregunta       │
│                                                      │
│  [🚀 Iniciar Test]                                  │
├─────────────────────────────────────────────────────┤
│                                                      │
│  Pregunta 3 de 10                    ⏱️ 0:45       │
│                                                      │
│  ¿Cuál es el output de este código?                │
│  ```javascript                                      │
│  console.log(typeof null);                          │
│  ```                                                │
│                                                      │
│  ○ A) "null"                                        │
│  ○ B) "undefined"                                   │
│  ● C) "object"                                      │
│  ○ D) "number"                                      │
│                                                      │
│  [← Anterior]  [Marcar para revisar]  [Siguiente →]│
├─────────────────────────────────────────────────────┤
│  Progreso: ███████░░░░░░░░░░░░░░ 3/10              │
└─────────────────────────────────────────────────────┘
```

### Features Específicas

1. **Categorías de certificación:**
   - JavaScript (JSI, Salesforce JS-Dev-I)
   - Python (PCAP, PCEP)
   - SQL (Oracle, PostgreSQL)
   - Java (Oracle OCA/OCP)
   - AWS (Cloud Practitioner, SAA)
   - Docker (DCA)
   - Kubernetes (CKA/CKAD)

2. **Modos de práctica:**
   - Examen simulado (tiempo límite)
   - Práctica libre (sin tiempo)
   - Review de errores
   - Flashcards

3. **Tracking de progreso:**
   - Historial de intentos
   - Estadísticas por categoría
   - Áreas de mejora identificadas
   - Guardar en localStorage

4. **Al finalizar:**
   - Puntuación con desglose
   - Explicación de cada respuesta
   - Recomendaciones de estudio
   - Opción de reintentar solo incorrectas

### Banco de Preguntas Inicial

Incluiremos ~50 preguntas por certificación, organizadas por tema:

```
questions/
├── javascript/
│   ├── fundamentals.json    (15 preguntas)
│   ├── dom-events.json      (10 preguntas)
│   ├── async-promises.json  (15 preguntas)
│   └── es6-features.json    (10 preguntas)
├── python/
│   ├── basics.json
│   ├── data-structures.json
│   └── oop.json
├── sql/
│   ├── select-queries.json
│   ├── joins.json
│   └── aggregations.json
└── ...
```

### Implementación

```astro
<!-- QuizGeneratorSection.astro -->
<section id="quiz-generator" class="tool-section">
  <div class="quiz-tool">
    <!-- Configuración inicial -->
    <div class="quiz-setup" id="quiz-setup">
      <select id="certification">
        <option value="javascript">JavaScript Developer</option>
        <option value="python">Python PCEP/PCAP</option>
        <option value="sql">SQL Fundamentals</option>
        <option value="aws">AWS Cloud Practitioner</option>
      </select>
      <div class="difficulty-selector">...</div>
      <button id="start-quiz">Iniciar Test</button>
    </div>

    <!-- Quiz activo -->
    <div class="quiz-active hidden" id="quiz-active">
      <div class="quiz-header">
        <span class="question-counter"></span>
        <span class="timer"></span>
      </div>
      <div class="question-content"></div>
      <div class="options-grid"></div>
      <div class="quiz-navigation">...</div>
    </div>

    <!-- Resultados -->
    <div class="quiz-results hidden" id="quiz-results">
      <div class="score-display"></div>
      <div class="answers-review"></div>
    </div>
  </div>
</section>

<script>
  class QuizEngine {
    constructor(questions, options) {
      this.questions = this.shuffleArray(questions);
      this.currentIndex = 0;
      this.answers = [];
      this.timeLimit = options.timeLimit;
      this.timer = null;
    }

    startQuiz() {
      this.showQuestion(0);
      if (this.timeLimit) this.startTimer();
    }

    showQuestion(index) {
      const q = this.questions[index];
      // Render pregunta y opciones
    }

    submitAnswer(answerIndex) {
      this.answers[this.currentIndex] = answerIndex;
      // Siguiente pregunta o finalizar
    }

    calculateScore() {
      let correct = 0;
      this.answers.forEach((answer, i) => {
        if (answer === this.questions[i].correctAnswer) {
          correct++;
        }
      });
      return {
        correct,
        total: this.questions.length,
        percentage: (correct / this.questions.length) * 100
      };
    }

    showResults() {
      const score = this.calculateScore();
      // Render resultados con explicaciones
    }
  }
</script>
```

### Dependencias
- Ninguna (vanilla JavaScript)
- Datos: JSON files con preguntas

---

## Estructura de Archivos

```
astro-site/
├── src/
│   ├── components/
│   │   ├── tools/                    # Nueva carpeta
│   │   │   ├── GanttGeneratorSection.astro
│   │   │   ├── SQLQueryGeneratorSection.astro
│   │   │   ├── PasswordGeneratorSection.astro
│   │   │   └── QuizGeneratorSection.astro
│   │   └── ...
│   ├── data/
│   │   └── quiz-questions/           # Banco de preguntas
│   │       ├── javascript.json
│   │       ├── python.json
│   │       ├── sql.json
│   │       └── aws.json
│   └── pages/
│       └── recursos.astro            # Integrar componentes
├── public/
│   └── assets/
│       └── css/
│           └── style.css             # Estilos adicionales
└── package.json                       # +frappe-gantt
```

---

## Integración en recursos.astro

```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
// ... otros imports existentes

// Nuevos componentes de herramientas
import GanttGeneratorSection from '../components/tools/GanttGeneratorSection.astro';
import SQLQueryGeneratorSection from '../components/tools/SQLQueryGeneratorSection.astro';
import PasswordGeneratorSection from '../components/tools/PasswordGeneratorSection.astro';
import QuizGeneratorSection from '../components/tools/QuizGeneratorSection.astro';
---

<Layout title="Recursos de Aprendizaje | DuocUC">
    <Header />

    <!-- Hero existente con nuevos quick-nav links -->
    <section class="page-hero">
      <!-- Agregar links a nuevas herramientas -->
      <a href="#gantt-generator" class="quick-nav">
        <i class="fas fa-project-diagram"></i>
        <span>Gantt</span>
      </a>
      <a href="#sql-generator" class="quick-nav">
        <i class="fas fa-database"></i>
        <span>SQL Builder</span>
      </a>
      <a href="#password-generator" class="quick-nav">
        <i class="fas fa-key"></i>
        <span>Passwords</span>
      </a>
      <a href="#quiz-generator" class="quick-nav">
        <i class="fas fa-clipboard-check"></i>
        <span>Quiz</span>
      </a>
    </section>

    <!-- Secciones existentes -->
    <AIToolsSection />
    <!-- ... -->

    <!-- NUEVAS HERRAMIENTAS INTERACTIVAS -->
    <GanttGeneratorSection />
    <SQLQueryGeneratorSection />
    <PasswordGeneratorSection />
    <QuizGeneratorSection />

    <!-- Resto de secciones -->
    <Footer />
</Layout>
```

---

## Orden de Implementación

### Fase 1: Password Generator (Más simple)
- Componente standalone
- Sin dependencias externas
- Base para patrón de herramientas

### Fase 2: SQL Query Builder
- Lógica de construcción de queries
- UI de builder visual
- Validación básica

### Fase 3: Quiz Generator
- Motor de quiz
- Banco de preguntas inicial (50 preguntas)
- Sistema de puntuación

### Fase 4: Gantt Chart Generator
- Integración de Frappe Gantt
- Templates predefinidos
- Persistencia en localStorage

---

## Estimación de Código

| Componente | Líneas Astro | Líneas JS | Líneas CSS |
|------------|--------------|-----------|------------|
| Password Generator | ~80 | ~100 | ~150 |
| SQL Query Builder | ~150 | ~200 | ~200 |
| Quiz Generator | ~200 | ~300 | ~250 |
| Gantt Generator | ~120 | ~150 | ~200 |
| **Total** | **~550** | **~750** | **~800** |

---

## Referencias

- [Astro Client-Side Scripts](https://docs.astro.build/en/guides/client-side-scripts/)
- [Astro Islands Architecture](https://docs.astro.build/en/concepts/islands/)
- [Frappe Gantt](https://frappe.io/gantt)
- [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
- [Secure Random Password Best Practices](https://blog.hboeck.de/archives/907-How-to-create-a-Secure,-Random-Password-with-JavaScript.html)
