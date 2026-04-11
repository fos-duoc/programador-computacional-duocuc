/**
 * bestPractices.ts
 * Datos de mejores prácticas empresariales para la Sala de Estudio
 * Cada práctica se mapea a asignaturas relevantes
 */

// ============================================
// INTERFACES
// ============================================

export interface Principio {
    nombre: string;
    letra?: string;              // Para acrónimos como SOLID (S, O, L, I, D)
    descripcion: string;
    ejemplo?: string;
}

export interface Ejemplo {
    titulo: string;
    lenguaje: 'python' | 'java' | 'typescript' | 'sql' | 'yaml' | 'text';
    codigo: string;
    explicacion?: string;
}

export interface Recurso {
    tipo: 'Documentacion' | 'Tutorial' | 'Video' | 'Libro' | 'Articulo';
    nombre: string;
    url: string;
}

export type BestPracticeCategory =
    | 'programacion'    // SOLID, DRY, KISS, Clean Code, Design Patterns, TDD/BDD
    | 'datos'           // Data Quality, ETL Best Practices, Data Modeling, Normalization
    | 'devops'          // CI/CD, IaC, GitFlow, Containerization, Monitoring
    | 'cloud'           // Well-Architected Framework, Security, Cost Optimization
    | 'arquitectura';   // Microservices, Event-Driven, CQRS, Clean Architecture

export interface BestPractice {
    id: string;
    nombre: string;
    nombreCorto: string;
    acronimo?: string;
    categoria: BestPracticeCategory;
    icon: string;
    color: 'cyan' | 'purple' | 'green' | 'amber' | 'rose';
    descripcionCorta: string;
    descripcion: string;
    principios: Principio[];
    beneficios: string[];
    antipatrones: string[];
    ejemplos: Ejemplo[];
    recursos: Recurso[];
    relacionadas: string[];
}

// ============================================
// DATOS DE MEJORES PRÁCTICAS (~25)
// ============================================

export const bestPractices: Record<string, BestPractice> = {
    // ========== PROGRAMACIÓN ==========
    'solid': {
        id: 'solid',
        nombre: 'Principios SOLID',
        nombreCorto: 'SOLID',
        acronimo: 'SOLID',
        categoria: 'programacion',
        icon: 'fas fa-cubes',
        color: 'cyan',
        descripcionCorta: '5 principios de diseño orientado a objetos',
        descripcion: 'SOLID es un acrónimo que representa cinco principios de diseño orientado a objetos que, cuando se aplican juntos, hacen que el software sea más comprensible, flexible y mantenible. Fueron popularizados por Robert C. Martin (Uncle Bob).',
        principios: [
            { nombre: 'Single Responsibility', letra: 'S', descripcion: 'Una clase debe tener una única razón para cambiar' },
            { nombre: 'Open/Closed', letra: 'O', descripcion: 'Las entidades deben estar abiertas para extensión, cerradas para modificación' },
            { nombre: 'Liskov Substitution', letra: 'L', descripcion: 'Los objetos de una superclase deben poder reemplazarse por objetos de sus subclases' },
            { nombre: 'Interface Segregation', letra: 'I', descripcion: 'Los clientes no deben depender de interfaces que no usan' },
            { nombre: 'Dependency Inversion', letra: 'D', descripcion: 'Los módulos de alto nivel no deben depender de módulos de bajo nivel' }
        ],
        beneficios: [
            'Código más mantenible y escalable',
            'Facilita pruebas unitarias',
            'Reduce el acoplamiento entre componentes',
            'Mejora la reutilización de código'
        ],
        antipatrones: [
            'Clases con múltiples responsabilidades (God Class)',
            'Herencia profunda sin justificación',
            'Dependencias directas de implementaciones concretas'
        ],
        ejemplos: [
            {
                titulo: 'Single Responsibility Principle',
                lenguaje: 'python',
                codigo: `# Mal: Clase con múltiples responsabilidades
class Usuario:
    def guardar_en_bd(self): ...
    def enviar_email(self): ...
    def generar_reporte(self): ...

# Bien: Separar responsabilidades
class Usuario: ...
class UsuarioRepository:
    def guardar(self, usuario): ...
class NotificacionService:
    def enviar_email(self, usuario): ...`,
                explicacion: 'Cada clase tiene una única razón para cambiar'
            }
        ],
        recursos: [
            { tipo: 'Documentacion', nombre: 'SOLID Principles (Refactoring Guru)', url: 'https://refactoring.guru/design-patterns/solid' },
            { tipo: 'Video', nombre: 'SOLID Principles in 8 Minutes', url: 'https://www.youtube.com/watch?v=yxf2spbpTSw' },
            { tipo: 'Libro', nombre: 'Clean Architecture - Robert C. Martin', url: 'https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164' }
        ],
        relacionadas: ['clean-code', 'design-patterns', 'clean-architecture']
    },

    'dry': {
        id: 'dry',
        nombre: 'DRY - Don\'t Repeat Yourself',
        nombreCorto: 'DRY',
        acronimo: 'DRY',
        categoria: 'programacion',
        icon: 'fas fa-clone',
        color: 'green',
        descripcionCorta: 'Evita duplicación de código y conocimiento',
        descripcion: 'DRY (Don\'t Repeat Yourself) es un principio que establece que cada pieza de conocimiento debe tener una representación única y autoritativa dentro de un sistema. Fue formulado por Andy Hunt y Dave Thomas en "The Pragmatic Programmer".',
        principios: [
            { nombre: 'Single Source of Truth', descripcion: 'Cada dato o lógica debe existir en un solo lugar' },
            { nombre: 'Abstracción', descripcion: 'Extraer patrones comunes en funciones o clases reutilizables' },
            { nombre: 'Configuración centralizada', descripcion: 'Constantes y configuraciones en un solo lugar' }
        ],
        beneficios: [
            'Menos bugs al corregir en un solo lugar',
            'Mantenimiento simplificado',
            'Código más limpio y legible',
            'Reduce el tamaño del codebase'
        ],
        antipatrones: [
            'Copy-paste de código',
            'Constantes duplicadas en múltiples archivos',
            'Lógica repetida en diferentes métodos'
        ],
        ejemplos: [
            {
                titulo: 'Extraer función común',
                lenguaje: 'python',
                codigo: `# Mal: Código duplicado
def procesar_usuario(user):
    if not user.email or '@' not in user.email:
        raise ValueError("Email inválido")
    ...

def procesar_admin(admin):
    if not admin.email or '@' not in admin.email:
        raise ValueError("Email inválido")
    ...

# Bien: Extraer validación
def validar_email(email: str) -> bool:
    return email and '@' in email

def procesar_usuario(user):
    if not validar_email(user.email):
        raise ValueError("Email inválido")`,
                explicacion: 'La validación existe en un solo lugar'
            }
        ],
        recursos: [
            { tipo: 'Articulo', nombre: 'DRY Principle Explained', url: 'https://en.wikipedia.org/wiki/Don%27t_repeat_yourself' },
            { tipo: 'Libro', nombre: 'The Pragmatic Programmer', url: 'https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/' }
        ],
        relacionadas: ['kiss', 'clean-code', 'solid']
    },

    'kiss': {
        id: 'kiss',
        nombre: 'KISS - Keep It Simple, Stupid',
        nombreCorto: 'KISS',
        acronimo: 'KISS',
        categoria: 'programacion',
        icon: 'fas fa-feather-alt',
        color: 'amber',
        descripcionCorta: 'La simplicidad debe ser un objetivo clave del diseño',
        descripcion: 'KISS es un principio de diseño que establece que la mayoría de los sistemas funcionan mejor si se mantienen simples en lugar de hacerlos complicados. La simplicidad debe ser un objetivo clave del diseño y debe evitarse la complejidad innecesaria.',
        principios: [
            { nombre: 'Evitar complejidad innecesaria', descripcion: 'No sobreingeniería, resolver el problema actual' },
            { nombre: 'Código legible', descripcion: 'Preferir claridad sobre cleverness' },
            { nombre: 'Solución mínima viable', descripcion: 'Implementar lo necesario, no más' }
        ],
        beneficios: [
            'Código más fácil de entender',
            'Menos bugs',
            'Onboarding más rápido para nuevos desarrolladores',
            'Debugging más sencillo'
        ],
        antipatrones: [
            'Sobreingeniería',
            'Abstracciones prematuras',
            'Optimización prematura',
            'Usar patrones complejos para problemas simples'
        ],
        ejemplos: [
            {
                titulo: 'Simplicidad vs Complejidad',
                lenguaje: 'python',
                codigo: `# Complejo innecesariamente
class FactoryFactoryBuilder:
    def build_factory(self):
        return Factory()

# Simple y directo
def crear_objeto():
    return MiObjeto()`,
                explicacion: 'No crear abstracciones que no añaden valor'
            }
        ],
        recursos: [
            { tipo: 'Articulo', nombre: 'KISS Principle', url: 'https://en.wikipedia.org/wiki/KISS_principle' }
        ],
        relacionadas: ['dry', 'yagni', 'clean-code']
    },

    'clean-code': {
        id: 'clean-code',
        nombre: 'Clean Code',
        nombreCorto: 'Clean Code',
        categoria: 'programacion',
        icon: 'fas fa-broom',
        color: 'purple',
        descripcionCorta: 'Escribir código legible, mantenible y elegante',
        descripcion: 'Clean Code es un conjunto de prácticas para escribir código que sea fácil de leer, entender y mantener. Se basa en el libro de Robert C. Martin y enfatiza que el código se lee muchas más veces de las que se escribe.',
        principios: [
            { nombre: 'Nombres significativos', descripcion: 'Variables, funciones y clases con nombres que revelen intención' },
            { nombre: 'Funciones pequeñas', descripcion: 'Funciones cortas que hacen una sola cosa' },
            { nombre: 'Comentarios mínimos', descripcion: 'El código debe ser autoexplicativo' },
            { nombre: 'Formateo consistente', descripcion: 'Estilo de código uniforme en todo el proyecto' },
            { nombre: 'Sin efectos secundarios', descripcion: 'Funciones predecibles y sin sorpresas' }
        ],
        beneficios: [
            'Mayor productividad del equipo',
            'Menos bugs',
            'Facilita code reviews',
            'Reduce deuda técnica'
        ],
        antipatrones: [
            'Magic numbers sin explicación',
            'Funciones gigantes de cientos de líneas',
            'Código espagueti',
            'Nombres crípticos (x, temp, data)'
        ],
        ejemplos: [
            {
                titulo: 'Nombres significativos',
                lenguaje: 'python',
                codigo: `# Mal
d = 7  # días
def calc(x, y):
    return x * y

# Bien
DIAS_POR_SEMANA = 7
def calcular_area_rectangulo(ancho, alto):
    return ancho * alto`,
                explicacion: 'Los nombres revelan la intención del código'
            }
        ],
        recursos: [
            { tipo: 'Libro', nombre: 'Clean Code - Robert C. Martin', url: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882' },
            { tipo: 'Video', nombre: 'Clean Code - Uncle Bob', url: 'https://www.youtube.com/watch?v=7EmboKQH8lM' }
        ],
        relacionadas: ['solid', 'dry', 'kiss']
    },

    'tdd': {
        id: 'tdd',
        nombre: 'Test-Driven Development',
        nombreCorto: 'TDD',
        acronimo: 'TDD',
        categoria: 'programacion',
        icon: 'fas fa-vial',
        color: 'rose',
        descripcionCorta: 'Escribir tests antes del código de producción',
        descripcion: 'TDD es una metodología de desarrollo donde se escriben las pruebas antes del código. Sigue el ciclo Red-Green-Refactor: escribir un test que falle, escribir el código mínimo para que pase, y luego refactorizar.',
        principios: [
            { nombre: 'Red', descripcion: 'Escribir un test que falle' },
            { nombre: 'Green', descripcion: 'Escribir el código mínimo para que pase' },
            { nombre: 'Refactor', descripcion: 'Mejorar el código manteniendo los tests verdes' }
        ],
        beneficios: [
            'Alta cobertura de tests',
            'Diseño emergente (el código se diseña mientras se desarrolla)',
            'Confianza al refactorizar',
            'Documentación viva del comportamiento'
        ],
        antipatrones: [
            'Escribir tests después del código',
            'Tests frágiles que fallan por cambios menores',
            'Ignorar el paso de refactor',
            'Tests que prueban implementación, no comportamiento'
        ],
        ejemplos: [
            {
                titulo: 'Ciclo Red-Green-Refactor',
                lenguaje: 'python',
                codigo: `# 1. RED - Test que falla
def test_suma():
    assert suma(2, 3) == 5  # NameError: suma no existe

# 2. GREEN - Código mínimo
def suma(a, b):
    return a + b  # Test pasa

# 3. REFACTOR - Mejorar si es necesario
def suma(a: int, b: int) -> int:
    """Suma dos números enteros."""
    return a + b`,
                explicacion: 'El test guía el desarrollo del código'
            }
        ],
        recursos: [
            { tipo: 'Libro', nombre: 'Test Driven Development - Kent Beck', url: 'https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530' },
            { tipo: 'Video', nombre: 'TDD Tutorial', url: 'https://www.youtube.com/watch?v=H4Hf3pji7Fw' }
        ],
        relacionadas: ['clean-code', 'bdd', 'ci-cd']
    },

    'design-patterns': {
        id: 'design-patterns',
        nombre: 'Design Patterns',
        nombreCorto: 'Patrones',
        categoria: 'programacion',
        icon: 'fas fa-puzzle-piece',
        color: 'cyan',
        descripcionCorta: 'Soluciones probadas a problemas comunes de diseño',
        descripcion: 'Los patrones de diseño son soluciones típicas a problemas comunes en el diseño de software. Son plantillas que describen cómo resolver un problema de diseño. Fueron catalogados por el Gang of Four (GoF) en 1994.',
        principios: [
            { nombre: 'Creacionales', descripcion: 'Factory, Singleton, Builder, Prototype, Abstract Factory' },
            { nombre: 'Estructurales', descripcion: 'Adapter, Decorator, Facade, Proxy, Composite, Bridge' },
            { nombre: 'Comportamiento', descripcion: 'Observer, Strategy, Command, State, Iterator, Template Method' }
        ],
        beneficios: [
            'Vocabulario común entre desarrolladores',
            'Soluciones probadas y optimizadas',
            'Código más reutilizable',
            'Facilita la comunicación en el equipo'
        ],
        antipatrones: [
            'Usar patrones innecesariamente (Patternitis)',
            'Forzar un patrón donde no aplica',
            'Implementar patrones sin entender el problema'
        ],
        ejemplos: [
            {
                titulo: 'Strategy Pattern',
                lenguaje: 'python',
                codigo: `from abc import ABC, abstractmethod

class PaymentStrategy(ABC):
    @abstractmethod
    def pay(self, amount): pass

class CreditCardPayment(PaymentStrategy):
    def pay(self, amount):
        return f"Pagado {amount} con tarjeta"

class PayPalPayment(PaymentStrategy):
    def pay(self, amount):
        return f"Pagado {amount} con PayPal"

# Uso
payment = CreditCardPayment()
payment.pay(100)`,
                explicacion: 'Permite cambiar algoritmos en tiempo de ejecución'
            }
        ],
        recursos: [
            { tipo: 'Documentacion', nombre: 'Refactoring Guru - Design Patterns', url: 'https://refactoring.guru/design-patterns' },
            { tipo: 'Libro', nombre: 'Design Patterns - Gang of Four', url: 'https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612' }
        ],
        relacionadas: ['solid', 'clean-architecture', 'clean-code']
    },

    // ========== DATOS ==========
    'data-quality': {
        id: 'data-quality',
        nombre: 'Data Quality',
        nombreCorto: 'Calidad Datos',
        categoria: 'datos',
        icon: 'fas fa-check-double',
        color: 'green',
        descripcionCorta: 'Asegurar exactitud, completitud y consistencia de datos',
        descripcion: 'Data Quality se refiere a las prácticas para asegurar que los datos sean precisos, completos, consistentes y confiables para su uso previsto. Es fundamental para tomar decisiones basadas en datos.',
        principios: [
            { nombre: 'Exactitud', descripcion: 'Los datos reflejan correctamente la realidad' },
            { nombre: 'Completitud', descripcion: 'No hay datos faltantes donde se esperan' },
            { nombre: 'Consistencia', descripcion: 'Los datos no se contradicen entre fuentes' },
            { nombre: 'Oportunidad', descripcion: 'Los datos están disponibles cuando se necesitan' },
            { nombre: 'Validez', descripcion: 'Los datos cumplen con formatos y reglas definidas' }
        ],
        beneficios: [
            'Decisiones más confiables',
            'Menos errores en procesos downstream',
            'Cumplimiento regulatorio (GDPR, etc.)',
            'Mayor confianza en analytics y ML'
        ],
        antipatrones: [
            'Datos sin validación en ingesta',
            'Duplicados sin control',
            'Falta de linaje de datos (data lineage)',
            'Sin monitoreo de calidad'
        ],
        ejemplos: [
            {
                titulo: 'Validación con Great Expectations',
                lenguaje: 'python',
                codigo: `import great_expectations as gx

# Definir expectativas
expectation_suite = gx.ExpectationSuite("users")
expectation_suite.add_expectation(
    gx.expectations.ExpectColumnValuesToNotBeNull(
        column="email"
    )
)
expectation_suite.add_expectation(
    gx.expectations.ExpectColumnValuesToMatchRegex(
        column="email",
        regex=r"^[\\w.-]+@[\\w.-]+\\.\\w+$"
    )
)`,
                explicacion: 'Validar datos automáticamente en pipelines'
            }
        ],
        recursos: [
            { tipo: 'Documentacion', nombre: 'Great Expectations', url: 'https://docs.greatexpectations.io/' },
            { tipo: 'Articulo', nombre: 'Data Quality Dimensions', url: 'https://www.dataversity.net/data-quality-dimensions/' }
        ],
        relacionadas: ['etl-best-practices', 'normalization']
    },

    'normalization': {
        id: 'normalization',
        nombre: 'Normalización de BD',
        nombreCorto: 'Normalización',
        categoria: 'datos',
        icon: 'fas fa-layer-group',
        color: 'amber',
        descripcionCorta: 'Organizar datos para reducir redundancia',
        descripcion: 'La normalización es el proceso de organizar los datos en una base de datos para reducir la redundancia y mejorar la integridad de los datos. Define formas normales (1FN, 2FN, 3FN, BCNF) como estándares.',
        principios: [
            { nombre: '1FN (Primera Forma Normal)', descripcion: 'Valores atómicos, sin grupos repetitivos' },
            { nombre: '2FN (Segunda Forma Normal)', descripcion: 'Cumple 1FN + dependencia completa de la clave primaria' },
            { nombre: '3FN (Tercera Forma Normal)', descripcion: 'Cumple 2FN + sin dependencias transitivas' },
            { nombre: 'BCNF (Boyce-Codd)', descripcion: 'Toda dependencia funcional es de una superclave' }
        ],
        beneficios: [
            'Elimina redundancia de datos',
            'Mejora integridad de datos',
            'Facilita mantenimiento',
            'Reduce anomalías de actualización'
        ],
        antipatrones: [
            'Desnormalización excesiva sin justificación',
            'Tablas con cientos de columnas',
            'Datos redundantes en múltiples tablas',
            'Sin claves foráneas definidas'
        ],
        ejemplos: [
            {
                titulo: 'De 1FN a 3FN',
                lenguaje: 'sql',
                codigo: `-- Sin normalizar (problemas)
CREATE TABLE pedidos (
    pedido_id INT,
    cliente_nombre VARCHAR(100),
    cliente_email VARCHAR(100),  -- Redundante
    producto VARCHAR(100),
    precio DECIMAL
);

-- Normalizado (3FN)
CREATE TABLE clientes (
    cliente_id INT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE pedidos (
    pedido_id INT PRIMARY KEY,
    cliente_id INT REFERENCES clientes,
    producto_id INT REFERENCES productos,
    cantidad INT
);`,
                explicacion: 'Separar entidades en tablas relacionadas'
            }
        ],
        recursos: [
            { tipo: 'Tutorial', nombre: 'Database Normalization', url: 'https://www.guru99.com/database-normalization.html' }
        ],
        relacionadas: ['data-quality', 'data-modeling']
    },

    'etl-best-practices': {
        id: 'etl-best-practices',
        nombre: 'ETL Best Practices',
        nombreCorto: 'ETL',
        acronimo: 'ETL',
        categoria: 'datos',
        icon: 'fas fa-exchange-alt',
        color: 'purple',
        descripcionCorta: 'Prácticas para Extract, Transform, Load de datos',
        descripcion: 'Mejores prácticas para procesos de extracción, transformación y carga de datos en pipelines de datos. Incluye patrones para ETL tradicional y ELT moderno.',
        principios: [
            { nombre: 'Idempotencia', descripcion: 'Ejecutar múltiples veces produce el mismo resultado' },
            { nombre: 'Incremental vs Full', descripcion: 'Cargas incrementales cuando sea posible' },
            { nombre: 'Manejo de errores', descripcion: 'Logging, alertas y reintentos' },
            { nombre: 'Observabilidad', descripcion: 'Métricas, logs y trazabilidad' }
        ],
        beneficios: [
            'Pipelines confiables y predecibles',
            'Datos consistentes',
            'Trazabilidad completa',
            'Recuperación ante fallos'
        ],
        antipatrones: [
            'ETL sin logging ni monitoreo',
            'Sin validaciones de datos',
            'Procesos no idempotentes',
            'Sin manejo de datos tardíos (late arriving)'
        ],
        ejemplos: [
            {
                titulo: 'Pipeline idempotente con dbt',
                lenguaje: 'sql',
                codigo: `-- models/staging/stg_orders.sql
{{ config(
    materialized='incremental',
    unique_key='order_id'
) }}

SELECT
    order_id,
    customer_id,
    order_date,
    total_amount,
    _loaded_at
FROM {{ source('raw', 'orders') }}
{% if is_incremental() %}
    WHERE _loaded_at > (SELECT MAX(_loaded_at) FROM {{ this }})
{% endif %}`,
                explicacion: 'Carga incremental con deduplicación'
            }
        ],
        recursos: [
            { tipo: 'Documentacion', nombre: 'dbt Best Practices', url: 'https://docs.getdbt.com/best-practices' },
            { tipo: 'Video', nombre: 'Modern Data Stack', url: 'https://www.youtube.com/watch?v=9B-M4d4RBnE' }
        ],
        relacionadas: ['data-quality', 'ci-cd']
    },

    // ========== DEVOPS ==========
    'ci-cd': {
        id: 'ci-cd',
        nombre: 'CI/CD',
        nombreCorto: 'CI/CD',
        acronimo: 'CI/CD',
        categoria: 'devops',
        icon: 'fas fa-infinity',
        color: 'cyan',
        descripcionCorta: 'Integración y despliegue continuos',
        descripcion: 'CI/CD es la práctica de integrar cambios de código frecuentemente y automatizar el proceso de despliegue a producción. CI (Continuous Integration) y CD (Continuous Delivery/Deployment) son prácticas fundamentales de DevOps.',
        principios: [
            { nombre: 'Commits frecuentes', descripcion: 'Integrar cambios pequeños regularmente' },
            { nombre: 'Build automatizado', descripcion: 'Cada commit dispara un build' },
            { nombre: 'Tests automatizados', descripcion: 'Suite de tests ejecutada en cada build' },
            { nombre: 'Deploy automatizado', descripcion: 'Despliegue sin intervención manual' }
        ],
        beneficios: [
            'Feedback rápido sobre errores',
            'Menos errores en producción',
            'Releases más frecuentes',
            'Mayor confianza del equipo'
        ],
        antipatrones: [
            'Deploys manuales',
            'Branches de larga duración',
            'Tests flakey (inestables)',
            'Sin pipeline de staging'
        ],
        ejemplos: [
            {
                titulo: 'GitHub Actions Pipeline',
                lenguaje: 'yaml',
                codigo: `name: CI/CD Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run tests
        run: npm test

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to production
        run: ./deploy.sh`,
                explicacion: 'Pipeline que testea y despliega automáticamente'
            }
        ],
        recursos: [
            { tipo: 'Documentacion', nombre: 'GitHub Actions', url: 'https://docs.github.com/en/actions' },
            { tipo: 'Tutorial', nombre: 'CI/CD with GitLab', url: 'https://docs.gitlab.com/ee/ci/' }
        ],
        relacionadas: ['gitflow', 'iac', 'containerization', 'tdd']
    },

    'gitflow': {
        id: 'gitflow',
        nombre: 'GitFlow',
        nombreCorto: 'GitFlow',
        categoria: 'devops',
        icon: 'fab fa-git-alt',
        color: 'green',
        descripcionCorta: 'Estrategia de branching para Git',
        descripcion: 'GitFlow es un modelo de branching para Git que define roles específicos para diferentes ramas y cómo deben interactuar. Fue propuesto por Vincent Driessen y es ampliamente adoptado.',
        principios: [
            { nombre: 'main/master', descripcion: 'Código en producción, siempre estable' },
            { nombre: 'develop', descripcion: 'Rama de integración de features' },
            { nombre: 'feature/*', descripcion: 'Desarrollo de nuevas funcionalidades' },
            { nombre: 'release/*', descripcion: 'Preparación de releases' },
            { nombre: 'hotfix/*', descripcion: 'Correcciones urgentes de producción' }
        ],
        beneficios: [
            'Releases organizados y predecibles',
            'Desarrollo paralelo sin conflictos',
            'Hotfixes controlados',
            'Historial de Git limpio'
        ],
        antipatrones: [
            'Commits directos a main',
            'Features en develop sin branch',
            'Branches abandonados sin merge',
            'Hotfixes sin merge a develop'
        ],
        ejemplos: [
            {
                titulo: 'Flujo de Feature',
                lenguaje: 'text',
                codigo: `# Crear feature branch
git checkout develop
git checkout -b feature/nueva-funcionalidad

# Trabajar en la feature...
git commit -m "feat: implementar X"

# Merge a develop
git checkout develop
git merge --no-ff feature/nueva-funcionalidad
git branch -d feature/nueva-funcionalidad`,
                explicacion: 'Flujo típico de desarrollo de una feature'
            }
        ],
        recursos: [
            { tipo: 'Articulo', nombre: 'GitFlow Original', url: 'https://nvie.com/posts/a-successful-git-branching-model/' },
            { tipo: 'Tutorial', nombre: 'Atlassian GitFlow', url: 'https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow' }
        ],
        relacionadas: ['ci-cd']
    },

    'iac': {
        id: 'iac',
        nombre: 'Infrastructure as Code',
        nombreCorto: 'IaC',
        acronimo: 'IaC',
        categoria: 'devops',
        icon: 'fas fa-file-code',
        color: 'purple',
        descripcionCorta: 'Gestionar infraestructura mediante código',
        descripcion: 'IaC es la práctica de gestionar y provisionar infraestructura mediante archivos de configuración en lugar de procesos manuales. Permite versionar, revisar y automatizar la infraestructura.',
        principios: [
            { nombre: 'Versionado', descripcion: 'Infraestructura en control de versiones (Git)' },
            { nombre: 'Idempotencia', descripcion: 'Aplicar múltiples veces = mismo resultado' },
            { nombre: 'Declarativo', descripcion: 'Describir el estado deseado, no los pasos' },
            { nombre: 'Inmutabilidad', descripcion: 'Reemplazar en vez de modificar' }
        ],
        beneficios: [
            'Reproducibilidad de ambientes',
            'Auditoria y compliance',
            'Colaboración mediante code review',
            'Recuperación ante desastres'
        ],
        antipatrones: [
            'Configuración manual de servidores',
            'Secretos hardcodeados en el código',
            'Sin versionado de infraestructura',
            'Drift entre código y realidad'
        ],
        ejemplos: [
            {
                titulo: 'Terraform - AWS EC2',
                lenguaje: 'text',
                codigo: `# main.tf
provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name        = "web-server"
    Environment = "production"
  }
}`,
                explicacion: 'Definir infraestructura de forma declarativa'
            }
        ],
        recursos: [
            { tipo: 'Documentacion', nombre: 'Terraform', url: 'https://developer.hashicorp.com/terraform/docs' },
            { tipo: 'Tutorial', nombre: 'AWS CDK', url: 'https://docs.aws.amazon.com/cdk/v2/guide/home.html' }
        ],
        relacionadas: ['containerization', 'ci-cd', 'well-architected']
    },

    'containerization': {
        id: 'containerization',
        nombre: 'Containerization',
        nombreCorto: 'Containers',
        categoria: 'devops',
        icon: 'fab fa-docker',
        color: 'cyan',
        descripcionCorta: 'Empaquetar aplicaciones en contenedores',
        descripcion: 'La containerización es el empaquetado de código junto con todas sus dependencias para que pueda ejecutarse de manera consistente en cualquier entorno. Docker es la tecnología más popular.',
        principios: [
            { nombre: 'Imágenes inmutables', descripcion: 'Las imágenes no cambian después de construirse' },
            { nombre: 'Un proceso por contenedor', descripcion: 'Contenedores single-purpose' },
            { nombre: 'Efímeros', descripcion: 'Contenedores pueden destruirse y recrearse' },
            { nombre: 'Capas', descripcion: 'Optimizar cache de builds con capas ordenadas' }
        ],
        beneficios: [
            'Portabilidad entre ambientes',
            'Consistencia dev/prod',
            'Escalabilidad horizontal',
            'Aislamiento de aplicaciones'
        ],
        antipatrones: [
            'Imágenes gigantes con dependencias innecesarias',
            'Datos persistentes dentro del contenedor',
            'Correr como root por defecto',
            'Sin health checks'
        ],
        ejemplos: [
            {
                titulo: 'Dockerfile optimizado',
                lenguaje: 'text',
                codigo: `# Multi-stage build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
USER node
EXPOSE 3000
CMD ["node", "server.js"]`,
                explicacion: 'Multi-stage para imagen pequeña y segura'
            }
        ],
        recursos: [
            { tipo: 'Documentacion', nombre: 'Docker Docs', url: 'https://docs.docker.com/' },
            { tipo: 'Tutorial', nombre: 'Kubernetes Basics', url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/' }
        ],
        relacionadas: ['ci-cd', 'microservices', 'iac']
    },

    // ========== CLOUD ==========
    'well-architected': {
        id: 'well-architected',
        nombre: 'Well-Architected Framework',
        nombreCorto: 'Well-Arch',
        categoria: 'cloud',
        icon: 'fas fa-cloud',
        color: 'amber',
        descripcionCorta: 'Marco de referencia para arquitecturas cloud',
        descripcion: 'El Well-Architected Framework es un conjunto de mejores prácticas para diseñar y operar sistemas confiables, seguros, eficientes y rentables en la nube. Desarrollado por AWS y adoptado por Azure y GCP.',
        principios: [
            { nombre: 'Excelencia Operacional', descripcion: 'Ejecutar y monitorear sistemas, mejora continua' },
            { nombre: 'Seguridad', descripcion: 'Proteger información, sistemas y activos' },
            { nombre: 'Confiabilidad', descripcion: 'Recuperarse de fallas, cumplir demanda' },
            { nombre: 'Eficiencia de Rendimiento', descripcion: 'Usar recursos eficientemente' },
            { nombre: 'Optimización de Costos', descripcion: 'Evitar gastos innecesarios' },
            { nombre: 'Sostenibilidad', descripcion: 'Minimizar impacto ambiental' }
        ],
        beneficios: [
            'Arquitecturas robustas y escalables',
            'Costos optimizados',
            'Alta disponibilidad',
            'Cumplimiento de estándares'
        ],
        antipatrones: [
            'Single point of failure',
            'Sin monitoreo ni alertas',
            'Recursos sobredimensionados',
            'Sin backups ni DR plan'
        ],
        ejemplos: [],
        recursos: [
            { tipo: 'Documentacion', nombre: 'AWS Well-Architected', url: 'https://aws.amazon.com/architecture/well-architected/' },
            { tipo: 'Documentacion', nombre: 'Azure Well-Architected', url: 'https://learn.microsoft.com/en-us/azure/well-architected/' }
        ],
        relacionadas: ['security-cloud', 'iac', 'microservices']
    },

    'security-cloud': {
        id: 'security-cloud',
        nombre: 'Cloud Security',
        nombreCorto: 'Seguridad',
        categoria: 'cloud',
        icon: 'fas fa-shield-alt',
        color: 'rose',
        descripcionCorta: 'Proteger recursos y datos en la nube',
        descripcion: 'Prácticas de seguridad específicas para entornos cloud, incluyendo identity management, encriptación, seguridad de red y cumplimiento regulatorio.',
        principios: [
            { nombre: 'Least Privilege', descripcion: 'Mínimos permisos necesarios para cada rol' },
            { nombre: 'Defense in Depth', descripcion: 'Múltiples capas de seguridad' },
            { nombre: 'Zero Trust', descripcion: 'Nunca confiar, siempre verificar' },
            { nombre: 'Encryption Everywhere', descripcion: 'Encriptar datos en tránsito y en reposo' }
        ],
        beneficios: [
            'Protección de datos sensibles',
            'Cumplimiento regulatorio (GDPR, HIPAA, SOC2)',
            'Reducción de superficie de ataque',
            'Detección temprana de amenazas'
        ],
        antipatrones: [
            'Credenciales hardcodeadas',
            'Puertos abiertos innecesarios',
            'Sin MFA habilitado',
            'Datos sin encriptar',
            'Sin logging de seguridad'
        ],
        ejemplos: [
            {
                titulo: 'IAM Policy - Least Privilege',
                lenguaje: 'text',
                codigo: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::my-bucket/*",
      "Condition": {
        "IpAddress": {
          "aws:SourceIp": "203.0.113.0/24"
        }
      }
    }
  ]
}`,
                explicacion: 'Permisos específicos con condiciones'
            }
        ],
        recursos: [
            { tipo: 'Documentacion', nombre: 'AWS Security Best Practices', url: 'https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/' },
            { tipo: 'Tutorial', nombre: 'OWASP Cloud Security', url: 'https://owasp.org/www-project-cloud-security/' }
        ],
        relacionadas: ['well-architected']
    },

    // ========== ARQUITECTURA ==========
    'microservices': {
        id: 'microservices',
        nombre: 'Microservicios',
        nombreCorto: 'Microservices',
        categoria: 'arquitectura',
        icon: 'fas fa-cubes',
        color: 'purple',
        descripcionCorta: 'Arquitectura de servicios pequeños e independientes',
        descripcion: 'Los microservicios son un estilo arquitectónico que estructura una aplicación como una colección de servicios pequeños, autónomos y desplegables independientemente. Cada servicio tiene su propia base de datos y se comunica via APIs.',
        principios: [
            { nombre: 'Single Responsibility', descripcion: 'Cada servicio hace una cosa bien' },
            { nombre: 'Autonomía', descripcion: 'Servicios desplegables independientemente' },
            { nombre: 'Bounded Context', descripcion: 'Límites claros de dominio (DDD)' },
            { nombre: 'Resilience', descripcion: 'Fallos aislados, no en cascada' },
            { nombre: 'Decentralized Data', descripcion: 'Cada servicio con su propia BD' }
        ],
        beneficios: [
            'Escalabilidad independiente por servicio',
            'Equipos autónomos y pequeños',
            'Flexibilidad tecnológica (polyglot)',
            'Despliegues independientes'
        ],
        antipatrones: [
            'Distributed monolith (acoplamiento fuerte)',
            'Comunicación síncrona excesiva',
            'Sin API Gateway',
            'Base de datos compartida'
        ],
        ejemplos: [],
        recursos: [
            { tipo: 'Libro', nombre: 'Building Microservices - Sam Newman', url: 'https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018/' },
            { tipo: 'Video', nombre: 'Microservices - Martin Fowler', url: 'https://www.youtube.com/watch?v=wgdBVIX9ifA' }
        ],
        relacionadas: ['clean-architecture', 'event-driven', 'containerization', 'api-design']
    },

    'clean-architecture': {
        id: 'clean-architecture',
        nombre: 'Clean Architecture',
        nombreCorto: 'Clean Arch',
        categoria: 'arquitectura',
        icon: 'fas fa-bullseye',
        color: 'cyan',
        descripcionCorta: 'Arquitectura en capas con dominio al centro',
        descripcion: 'Clean Architecture es un patrón que organiza el código en capas concéntricas con el dominio de negocio en el centro, aislado de frameworks y detalles externos. Propuesto por Robert C. Martin (Uncle Bob).',
        principios: [
            { nombre: 'Independencia de frameworks', descripcion: 'El negocio no depende de frameworks' },
            { nombre: 'Testabilidad', descripcion: 'Reglas de negocio testeables sin UI/DB' },
            { nombre: 'Independencia de UI', descripcion: 'La UI puede cambiar sin afectar negocio' },
            { nombre: 'Independencia de BD', descripcion: 'Puedes cambiar Oracle por Mongo fácilmente' },
            { nombre: 'Dependency Rule', descripcion: 'Dependencias apuntan hacia adentro' }
        ],
        beneficios: [
            'Alta mantenibilidad',
            'Testabilidad completa',
            'Flexibilidad ante cambios',
            'Separación clara de responsabilidades'
        ],
        antipatrones: [
            'Lógica de negocio en controllers',
            'Entidades con dependencias de frameworks',
            'Acceso directo a BD desde use cases',
            'UI acoplada al modelo de datos'
        ],
        ejemplos: [
            {
                titulo: 'Estructura de capas',
                lenguaje: 'text',
                codigo: `src/
├── domain/           # Entidades y reglas de negocio
│   ├── entities/
│   └── value_objects/
├── application/      # Use cases / Application services
│   ├── use_cases/
│   └── interfaces/   # Puertos (interfaces)
├── infrastructure/   # Implementaciones externas
│   ├── persistence/  # Repositorios
│   ├── http/         # Controllers
│   └── external/     # APIs externas
└── main.py           # Composición y DI`,
                explicacion: 'Capas con dependencias hacia el centro'
            }
        ],
        recursos: [
            { tipo: 'Libro', nombre: 'Clean Architecture - Robert C. Martin', url: 'https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164' },
            { tipo: 'Articulo', nombre: 'The Clean Architecture', url: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html' }
        ],
        relacionadas: ['solid', 'microservices', 'design-patterns']
    },

    'event-driven': {
        id: 'event-driven',
        nombre: 'Event-Driven Architecture',
        nombreCorto: 'EDA',
        acronimo: 'EDA',
        categoria: 'arquitectura',
        icon: 'fas fa-bolt',
        color: 'amber',
        descripcionCorta: 'Arquitectura basada en eventos asíncronos',
        descripcion: 'La arquitectura orientada a eventos es un patrón donde la producción, detección y consumo de eventos determina el flujo del programa. Ideal para sistemas distribuidos y microservicios.',
        principios: [
            { nombre: 'Eventos inmutables', descripcion: 'Los eventos no se modifican después de emitirse' },
            { nombre: 'Desacoplamiento', descripcion: 'Productores y consumidores independientes' },
            { nombre: 'Event Sourcing', descripcion: 'Estado derivado de secuencia de eventos' },
            { nombre: 'Eventual Consistency', descripcion: 'Consistencia eventual, no inmediata' }
        ],
        beneficios: [
            'Alta escalabilidad',
            'Desacoplamiento total',
            'Auditoría natural (event log)',
            'Resiliencia ante fallos'
        ],
        antipatrones: [
            'Eventos síncronos bloqueantes',
            'Sin schema de eventos definido',
            'Acoplamiento temporal',
            'Sin dead letter queue'
        ],
        ejemplos: [
            {
                titulo: 'Evento de dominio',
                lenguaje: 'python',
                codigo: `from dataclasses import dataclass
from datetime import datetime

@dataclass(frozen=True)  # Inmutable
class OrderCreatedEvent:
    event_id: str
    order_id: str
    customer_id: str
    total: float
    created_at: datetime

# Publicar evento
event_bus.publish(OrderCreatedEvent(
    event_id=uuid4(),
    order_id="ORD-123",
    customer_id="CUST-456",
    total=99.99,
    created_at=datetime.utcnow()
))`,
                explicacion: 'Evento inmutable que representa un hecho del dominio'
            }
        ],
        recursos: [
            { tipo: 'Libro', nombre: 'Designing Event-Driven Systems', url: 'https://www.confluent.io/resources/ebook/designing-event-driven-systems/' },
            { tipo: 'Documentacion', nombre: 'Apache Kafka', url: 'https://kafka.apache.org/documentation/' }
        ],
        relacionadas: ['microservices', 'cqrs']
    },

    'cqrs': {
        id: 'cqrs',
        nombre: 'CQRS',
        nombreCorto: 'CQRS',
        acronimo: 'CQRS',
        categoria: 'arquitectura',
        icon: 'fas fa-code-branch',
        color: 'green',
        descripcionCorta: 'Separar lecturas de escrituras',
        descripcion: 'CQRS (Command Query Responsibility Segregation) es un patrón que separa las operaciones de lectura y escritura en modelos diferentes. Permite optimizar cada lado independientemente.',
        principios: [
            { nombre: 'Commands', descripcion: 'Operaciones que modifican estado (Create, Update, Delete)' },
            { nombre: 'Queries', descripcion: 'Operaciones que leen estado sin modificar' },
            { nombre: 'Modelos separados', descripcion: 'Modelo de escritura vs modelo de lectura optimizados' },
            { nombre: 'Sincronización', descripcion: 'Eventual consistency entre modelos' }
        ],
        beneficios: [
            'Escalabilidad independiente read/write',
            'Optimización por caso de uso',
            'Modelos de lectura desnormalizados',
            'Complejidad manejable en dominios complejos'
        ],
        antipatrones: [
            'CQRS para CRUD simple (overkill)',
            'Sin manejo de eventual consistency',
            'Modelos de lectura desactualizados',
            'Commands que retornan datos'
        ],
        ejemplos: [
            {
                titulo: 'Command vs Query',
                lenguaje: 'python',
                codigo: `# Command - Modifica estado
class CreateOrderCommand:
    customer_id: str
    items: list[OrderItem]

class CreateOrderHandler:
    def handle(self, cmd: CreateOrderCommand):
        order = Order.create(cmd.customer_id, cmd.items)
        self.repository.save(order)
        self.event_bus.publish(OrderCreatedEvent(...))

# Query - Solo lee
class GetOrderQuery:
    order_id: str

class GetOrderHandler:
    def handle(self, query: GetOrderQuery):
        return self.read_db.get_order_view(query.order_id)`,
                explicacion: 'Separación clara de comandos y consultas'
            }
        ],
        recursos: [
            { tipo: 'Articulo', nombre: 'CQRS - Martin Fowler', url: 'https://martinfowler.com/bliki/CQRS.html' }
        ],
        relacionadas: ['event-driven', 'microservices']
    },

    'api-design': {
        id: 'api-design',
        nombre: 'API Design Best Practices',
        nombreCorto: 'API Design',
        categoria: 'arquitectura',
        icon: 'fas fa-plug',
        color: 'rose',
        descripcionCorta: 'Diseño de APIs RESTful y GraphQL',
        descripcion: 'Prácticas para diseñar APIs que sean intuitivas, consistentes y fáciles de usar. Incluye principios REST, versionado, paginación, manejo de errores y documentación.',
        principios: [
            { nombre: 'RESTful', descripcion: 'Verbos HTTP, recursos como sustantivos' },
            { nombre: 'Versionado', descripcion: '/v1/, /v2/ en URL o headers' },
            { nombre: 'Paginación', descripcion: 'Limit/offset o cursor para colecciones grandes' },
            { nombre: 'Códigos HTTP correctos', descripcion: '200, 201, 400, 401, 404, 500' },
            { nombre: 'HATEOAS', descripcion: 'Links en respuestas para descubrimiento' }
        ],
        beneficios: [
            'APIs consistentes y predecibles',
            'Facilidad de uso para consumidores',
            'Documentación autodescriptiva',
            'Evolución sin romper clientes'
        ],
        antipatrones: [
            'Verbos en URLs (/getUsers, /createOrder)',
            'Sin versionado',
            'Respuestas inconsistentes',
            'Sin paginación en colecciones',
            'Errores sin detalle'
        ],
        ejemplos: [
            {
                titulo: 'Diseño RESTful',
                lenguaje: 'text',
                codigo: `# Recursos y verbos HTTP
GET    /api/v1/users          # Listar usuarios
POST   /api/v1/users          # Crear usuario
GET    /api/v1/users/{id}     # Obtener usuario
PUT    /api/v1/users/{id}     # Actualizar usuario
DELETE /api/v1/users/{id}     # Eliminar usuario

# Respuesta con paginación
{
  "data": [...],
  "pagination": {
    "total": 100,
    "page": 1,
    "per_page": 20,
    "next": "/api/v1/users?page=2"
  }
}`,
                explicacion: 'Convenciones REST estándar'
            }
        ],
        recursos: [
            { tipo: 'Documentacion', nombre: 'OpenAPI Specification', url: 'https://swagger.io/specification/' },
            { tipo: 'Articulo', nombre: 'REST API Best Practices', url: 'https://restfulapi.net/' }
        ],
        relacionadas: ['microservices', 'clean-architecture']
    },

    // ========== ADICIONALES ==========
    'yagni': {
        id: 'yagni',
        nombre: 'YAGNI',
        nombreCorto: 'YAGNI',
        acronimo: 'YAGNI',
        categoria: 'programacion',
        icon: 'fas fa-ban',
        color: 'amber',
        descripcionCorta: 'No implementes algo hasta que lo necesites',
        descripcion: 'YAGNI (You Aren\'t Gonna Need It) es un principio de Extreme Programming que establece que no debes agregar funcionalidad hasta que sea necesaria. Evita la sobreingeniería.',
        principios: [
            { nombre: 'Implementar solo lo necesario', descripcion: 'No código especulativo' },
            { nombre: 'Evitar abstracciones prematuras', descripcion: 'Esperar hasta tener 3+ casos de uso' },
            { nombre: 'Simplicidad', descripcion: 'El código más simple que funcione' }
        ],
        beneficios: [
            'Menos código que mantener',
            'Desarrollo más rápido',
            'Menos complejidad accidental',
            'Enfoque en lo que importa'
        ],
        antipatrones: [
            'Frameworks propios "por si acaso"',
            'Configurabilidad excesiva',
            'Abstracciones para un solo caso de uso'
        ],
        ejemplos: [],
        recursos: [
            { tipo: 'Articulo', nombre: 'YAGNI - Martin Fowler', url: 'https://martinfowler.com/bliki/Yagni.html' }
        ],
        relacionadas: ['kiss', 'dry']
    },

    'observability': {
        id: 'observability',
        nombre: 'Observability',
        nombreCorto: 'Observability',
        categoria: 'devops',
        icon: 'fas fa-eye',
        color: 'rose',
        descripcionCorta: 'Logs, métricas y trazas para entender sistemas',
        descripcion: 'Observabilidad es la capacidad de entender el estado interno de un sistema a partir de sus outputs. Se basa en tres pilares: logs, métricas y trazas distribuidas.',
        principios: [
            { nombre: 'Logs', descripcion: 'Registro de eventos con contexto' },
            { nombre: 'Métricas', descripcion: 'Datos numéricos agregados (latencia, errores, saturación)' },
            { nombre: 'Trazas', descripcion: 'Seguimiento de requests a través de servicios' },
            { nombre: 'Alerting', descripcion: 'Notificaciones proactivas ante anomalías' }
        ],
        beneficios: [
            'Debugging más rápido',
            'Detección proactiva de problemas',
            'Entender comportamiento en producción',
            'Cumplimiento de SLOs'
        ],
        antipatrones: [
            'Logs sin estructura (texto plano)',
            'Métricas sin contexto',
            'Sin trazas en microservicios',
            'Alertas ruidosas (alert fatigue)'
        ],
        ejemplos: [
            {
                titulo: 'Structured Logging',
                lenguaje: 'python',
                codigo: `import structlog

logger = structlog.get_logger()

logger.info(
    "order_created",
    order_id="ORD-123",
    customer_id="CUST-456",
    total=99.99,
    items_count=3
)
# Output JSON estructurado
# {"event": "order_created", "order_id": "ORD-123", ...}`,
                explicacion: 'Logs estructurados facilitan búsqueda y análisis'
            }
        ],
        recursos: [
            { tipo: 'Documentacion', nombre: 'OpenTelemetry', url: 'https://opentelemetry.io/docs/' },
            { tipo: 'Articulo', nombre: 'Three Pillars of Observability', url: 'https://www.oreilly.com/library/view/distributed-systems-observability/9781492033431/' }
        ],
        relacionadas: ['ci-cd', 'microservices']
    },

    'twelve-factor': {
        id: 'twelve-factor',
        nombre: '12-Factor App',
        nombreCorto: '12-Factor',
        categoria: 'arquitectura',
        icon: 'fas fa-list-ol',
        color: 'purple',
        descripcionCorta: '12 principios para apps cloud-native',
        descripcion: 'The Twelve-Factor App es una metodología para construir aplicaciones software-as-a-service que son portables, escalables y mantenibles. Creada por desarrolladores de Heroku.',
        principios: [
            { nombre: 'I. Codebase', descripcion: 'Un codebase en control de versiones, muchos deploys' },
            { nombre: 'II. Dependencies', descripcion: 'Declarar y aislar dependencias explícitamente' },
            { nombre: 'III. Config', descripcion: 'Configuración en variables de entorno' },
            { nombre: 'IV. Backing Services', descripcion: 'Tratar servicios externos como recursos adjuntos' },
            { nombre: 'V. Build, Release, Run', descripcion: 'Separar etapas de build y ejecución' },
            { nombre: 'VI. Processes', descripcion: 'Ejecutar como procesos stateless' }
        ],
        beneficios: [
            'Portabilidad entre plataformas cloud',
            'Escalabilidad horizontal',
            'Paridad dev/staging/prod',
            'Despliegues continuos'
        ],
        antipatrones: [
            'Configuración hardcodeada',
            'Estado en filesystem local',
            'Dependencias implícitas',
            'Procesos de larga duración con estado'
        ],
        ejemplos: [],
        recursos: [
            { tipo: 'Documentacion', nombre: '12factor.net', url: 'https://12factor.net/' }
        ],
        relacionadas: ['containerization', 'microservices', 'ci-cd']
    }
};

// ============================================
// MAPEO DE ASIGNATURAS A PRÁCTICAS
// ============================================

export const subjectToBestPractices: Record<string, string[]> = {
    // Bimestre 01
    'fundamentos-programacion': ['dry', 'kiss', 'clean-code', 'yagni'],
    'modelamiento-datos': ['normalization', 'data-quality'],
    'antropologia': [],

    // Bimestre 02
    'poo-i': ['solid', 'clean-code', 'dry', 'design-patterns'],
    'computacion-nube': ['well-architected', 'security-cloud', 'twelve-factor'],
    'comunicacion': [],

    // Bimestre 03
    'poo-ii': ['solid', 'design-patterns', 'tdd', 'clean-code'],
    'devops': ['ci-cd', 'gitflow', 'iac', 'containerization', 'observability'],
    'etica': [],

    // Bimestre 04
    'sql-consultas': ['data-quality', 'normalization'],
    'seguridad-informatica': ['security-cloud'],

    // Bimestre 05
    'sql-programacion': ['data-quality', 'normalization', 'etl-best-practices'],
    'cloud-native': ['containerization', 'microservices', 'well-architected', 'twelve-factor'],
    'ingenieria-requisitos': [],

    // Bimestre 06
    'backend-i': ['solid', 'clean-architecture', 'tdd', 'api-design'],
    'ingenieria-software-i': ['design-patterns', 'clean-code', 'gitflow'],

    // Bimestre 07
    'backend-ii-iii': ['solid', 'clean-architecture', 'microservices', 'api-design', 'tdd'],
    'ingenieria-software-ii': ['tdd', 'ci-cd', 'observability'],

    // Bimestre 08
    'frontend-i-ii': ['clean-code', 'dry', 'design-patterns', 'kiss'],
    'arquitectura-software': ['clean-architecture', 'microservices', 'event-driven', 'cqrs'],

    // Bimestre 09
    'mobile-i': ['clean-architecture', 'solid', 'dry'],
    'frontend-iii': ['clean-code', 'design-patterns'],

    // Bimestre 10
    'mobile-ii': ['clean-architecture', 'solid'],
    'taller-titulo': ['ci-cd', 'tdd', 'clean-code', 'gitflow'],

    // Ingeniería (B11-B17)
    'fullstack-i': ['solid', 'clean-architecture', 'api-design', 'tdd'],
    'bd-aplicada': ['normalization', 'data-quality', 'etl-best-practices'],
    'fullstack-ii': ['solid', 'clean-code', 'tdd', 'microservices'],
    'cloud-computing': ['well-architected', 'security-cloud', 'iac', 'twelve-factor'],
    'fullstack-iii': ['microservices', 'event-driven', 'api-design', 'cqrs'],
    'app-moviles': ['clean-architecture', 'solid', 'dry'],
    'cloud-native-i': ['containerization', 'microservices', 'ci-cd', 'observability'],
    'cloud-native-ii': ['well-architected', 'iac', 'security-cloud', 'observability'],
    'seguridad-calidad': ['security-cloud', 'tdd', 'ci-cd'],
    'evaluacion-proyectos-sw': [],
    'gestion-proyectos-sw': ['ci-cd', 'gitflow', 'observability'],
    'etica-profesional': [],
    'taller-aplicado-sw': ['clean-architecture', 'microservices', 'ci-cd', 'tdd', 'api-design']
};

// ============================================
// HELPERS
// ============================================

/**
 * Obtiene las mejores prácticas asociadas a una asignatura
 */
export function getBestPracticesForSubject(subjectId: string): BestPractice[] {
    const practiceIds = subjectToBestPractices[subjectId] || [];
    return practiceIds.map(id => bestPractices[id]).filter(Boolean);
}

/**
 * Obtiene mejores prácticas por categoría
 */
export function getBestPracticesByCategory(categoria: BestPracticeCategory): BestPractice[] {
    return Object.values(bestPractices).filter(bp => bp.categoria === categoria);
}

/**
 * Obtiene todas las categorías disponibles
 */
export function getAllCategories(): BestPracticeCategory[] {
    return ['programacion', 'datos', 'devops', 'cloud', 'arquitectura'];
}

/**
 * Obtiene el color CSS para una categoría
 */
export function getCategoryColor(categoria: BestPracticeCategory): string {
    const colors: Record<BestPracticeCategory, string> = {
        programacion: '#06b6d4',  // cyan
        datos: '#22c55e',         // green
        devops: '#8b5cf6',        // purple
        cloud: '#f59e0b',         // amber
        arquitectura: '#f43f5e'   // rose
    };
    return colors[categoria];
}

/**
 * Obtiene el nombre legible de una categoría
 */
export function getCategoryName(categoria: BestPracticeCategory): string {
    const names: Record<BestPracticeCategory, string> = {
        programacion: 'Programación',
        datos: 'Datos',
        devops: 'DevOps',
        cloud: 'Cloud',
        arquitectura: 'Arquitectura'
    };
    return names[categoria];
}
