/**
 * Datos detallados de todas las asignaturas de la malla curricular
 * Analista Programador Computacional (B01-B10) e Ingeniería en Desarrollo de Software (B11-B17)
 *
 * Estructura basada en el modelo educativo DuocUC:
 * - 3 Experiencias de Aprendizaje por asignatura (Exp1, Exp2, Exp3)
 * - 8 semanas por bimestre
 * - Evaluaciones formativas y sumativas
 */

export interface Experiencia {
    numero: number;
    titulo: string;
    semanas: string;
    descripcion: string;
    contenidos: string[];
    actividades: string[];
}

export interface Evaluacion {
    tipo: string;
    nombre: string;
    ponderacion: number;
    descripcion: string;
}

export interface ProyectoSugerido {
    nombre: string;
    descripcion: string;
    nivel: 'principiante' | 'intermedio' | 'avanzado';
    duracionEstimada?: string;
}

export interface RelevanciaProfesional {
    rol: string;
    importancia: 'alta' | 'media' | 'baja';
    descripcion?: string;
}

export interface Asignatura {
    id: string;
    codigo: string;
    nombre: string;
    nombreCorto: string;
    bimestre: number;
    creditos: number;
    horasTeoricas: number;
    horasPracticas: number;
    descripcion: string;
    proposito: string;
    objetivos: string[];
    competencias: string[];
    experiencias: Experiencia[];
    tecnologias: {
        nombre: string;
        icon: string;
        iconType: 'devicon' | 'fontawesome' | 'simple';
    }[];
    evaluaciones: Evaluacion[];
    prerrequisitos: string[];
    conexiones: string[];
    recursos: {
        tipo: string;
        nombre: string;
        url: string;
    }[];
    color: string;
    area: 'programacion' | 'datos' | 'cloud' | 'transversal' | 'arquitectura' | 'mobile' | 'gestion';
    // Campos opcionales para contenido enriquecido
    dificultad?: 'basico' | 'intermedio' | 'avanzado' | 'experto';
    horasEstudioSemanal?: number;
    tips?: string[];
    palabrasClave?: string[];
    proyectosSugeridos?: ProyectoSugerido[];
    relevanciaProfesional?: RelevanciaProfesional[];
}

// =============================================
// BIMESTRE 01 - FUNDAMENTOS
// =============================================

export const asignaturas: Record<string, Asignatura> = {
    // PRY1101 - Fundamentos de Programación
    'fundamentos-programacion': {
        id: 'fundamentos-programacion',
        codigo: 'PRY1101',
        nombre: 'Fundamentos de Programación',
        nombreCorto: 'Fundamentos Prog.',
        bimestre: 1,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura introductoria que establece las bases del pensamiento computacional y la resolución de problemas mediante algoritmos. Los estudiantes aprenden a diseñar, codificar y depurar programas utilizando Python como lenguaje principal.',
        proposito: 'Desarrollar en el estudiante la capacidad de análisis y resolución de problemas mediante la construcción de algoritmos y su implementación en un lenguaje de programación, aplicando buenas prácticas de codificación.',
        objetivos: [
            'Comprender los conceptos fundamentales de la programación estructurada',
            'Diseñar algoritmos utilizando pseudocódigo y diagramas de flujo',
            'Implementar soluciones en Python aplicando estructuras de control',
            'Manipular estructuras de datos básicas: listas, tuplas y diccionarios',
            'Aplicar técnicas de depuración y testing básico',
            'Documentar código siguiendo estándares de la industria'
        ],
        competencias: [
            'Pensamiento algorítmico y resolución de problemas',
            'Diseño de algoritmos con pseudocódigo y diagramas de flujo',
            'Programación estructurada en Python',
            'Implementación de estructuras de control',
            'Modularización con funciones reutilizables',
            'Manipulación de estructuras de datos lineales',
            'Persistencia de datos en archivos',
            'Debugging y pruebas básicas de código'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Introducción a la Programación y Algoritmos',
                semanas: 'Semana 1-3',
                descripcion: 'Fundamentos del pensamiento computacional, diseño de algoritmos y primeros pasos en Python.',
                contenidos: [
                    'Pensamiento computacional y resolución de problemas',
                    'Conceptos básicos: variable, constante, identificador',
                    'Tipos de datos primitivos: int, float, str, bool',
                    'Operadores aritméticos (+, -, *, /, //, %, **)',
                    'Operadores relacionales y lógicos (and, or, not)',
                    'Entrada/salida de datos: input(), print(), f-strings',
                    'Pseudocódigo: estructuras y convenciones',
                    'Diagramas de flujo con símbolos estándar',
                    'Instalación de Python y configuración de VS Code',
                    'Sintaxis básica: indentación, comentarios, PEP 8'
                ],
                actividades: [
                    'Diseño de algoritmos en pseudocódigo para problemas cotidianos',
                    'Creación de diagramas de flujo con Draw.io',
                    'Primeros programas: calculadora con operaciones básicas',
                    'Conversión de unidades (temperatura, distancia, moneda)',
                    'Cálculo de áreas y perímetros de figuras geométricas',
                    'Ejercicios de debugging: encontrar errores en código dado'
                ]
            },
            {
                numero: 2,
                titulo: 'Estructuras de Control y Funciones',
                semanas: 'Semana 4-5',
                descripcion: 'Control de flujo del programa mediante condicionales, bucles y modularización con funciones.',
                contenidos: [
                    'Estructuras condicionales: if, elif, else',
                    'Operador ternario y expresiones condicionales',
                    'Estructuras repetitivas: while y for',
                    'Función range() y sus variantes',
                    'Control de bucles: break, continue, else en loops',
                    'Bucles anidados y patrones de iteración',
                    'Definición de funciones: def, parámetros, return',
                    'Argumentos posicionales, keyword y valores por defecto',
                    'Alcance de variables: local, global, nonlocal',
                    'Funciones lambda y expresiones anónimas'
                ],
                actividades: [
                    'Validación de datos con condicionales múltiples',
                    'Menús interactivos con bucles y validación de opciones',
                    'Algoritmos clásicos: factorial, fibonacci, números primos',
                    'Refactorización de código repetitivo en funciones',
                    'Mini-proyecto: Sistema de calificaciones con promedio',
                    'Ejercicios de patrones: pirámides, cuadrados con asteriscos'
                ]
            },
            {
                numero: 3,
                titulo: 'Estructuras de Datos y Proyecto Final',
                semanas: 'Semana 6-8',
                descripcion: 'Trabajo con colecciones de datos y desarrollo de un proyecto integrador.',
                contenidos: [
                    'Listas: creación, indexación, slicing',
                    'Métodos de listas: append, extend, insert, remove, pop, sort',
                    'Tuplas: inmutabilidad, desempaquetado, usos comunes',
                    'Diccionarios: claves, valores, métodos get, keys, values, items',
                    'Sets: conjuntos, operaciones de unión, intersección, diferencia',
                    'Comprensión de listas, diccionarios y sets',
                    'Manejo de archivos: open, read, write, with statement',
                    'Módulos útiles: random, math, datetime',
                    'Manejo básico de excepciones: try, except, finally',
                    'Documentación de código: docstrings y type hints básicos'
                ],
                actividades: [
                    'CRUD completo con listas y diccionarios',
                    'Manipulación de datos: filtrar, ordenar, buscar',
                    'Lectura y escritura de archivos CSV simples',
                    'Generación de reportes en archivos de texto',
                    'Mini-juego: Ahorcado o Piedra-Papel-Tijera',
                    'Proyecto integrador: Sistema de inventario con persistencia'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Python', icon: 'python-plain', iconType: 'devicon' },
            { nombre: 'VS Code', icon: 'vscode-plain', iconType: 'devicon' },
            { nombre: 'Git', icon: 'git-plain', iconType: 'devicon' },
            { nombre: 'Jupyter', icon: 'jupyter-plain', iconType: 'devicon' },
            { nombre: 'GitHub', icon: 'github-original', iconType: 'devicon' },
            { nombre: 'PyCharm', icon: 'pycharm-plain', iconType: 'devicon' },
            { nombre: 'Terminal', icon: 'fa-terminal', iconType: 'fontawesome' },
            { nombre: 'Draw.io', icon: 'fa-project-diagram', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Actividad Formativa 1', ponderacion: 0, descripcion: 'Ejercicios de pseudocódigo y primeros programas' },
            { tipo: 'Formativa', nombre: 'Actividad Formativa 2', ponderacion: 0, descripcion: 'Práctica de estructuras de control' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Desarrollo de programa con funciones' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Proyecto con estructuras de datos' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto integrador final' }
        ],
        prerrequisitos: [],
        conexiones: ['POO I', 'Desarrollo OO II', 'Backend I'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Python Official Docs', url: 'https://docs.python.org/3/' },
            { tipo: 'Tutorial', nombre: 'Real Python', url: 'https://realpython.com/' },
            { tipo: 'Práctica', nombre: 'HackerRank Python', url: 'https://www.hackerrank.com/domains/python' },
            { tipo: 'Práctica', nombre: 'Exercism Python Track', url: 'https://exercism.org/tracks/python' },
            { tipo: 'Curso', nombre: 'Python for Everybody', url: 'https://www.py4e.com/' },
            { tipo: 'Video', nombre: 'Curso Python - Pildoras Informaticas', url: 'https://www.youtube.com/playlist?list=PLU8oAlHdN5BlvPxziopYZRd55pdqFwkeS' },
            { tipo: 'Libro', nombre: 'Automate the Boring Stuff', url: 'https://automatetheboringstuff.com/' },
            { tipo: 'Herramienta', nombre: 'Python Tutor - Visualizer', url: 'https://pythontutor.com/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-01%20-%20Antropologia%2C%20Fundamentos%20Prog.%2C%20Modelamiento%20BD/Fundamentos-Programacion' }
        ],
        color: 'cyan',
        area: 'programacion',
        // Contenido enriquecido
        dificultad: 'basico',
        horasEstudioSemanal: 8,
        tips: [
            'Practica todos los dias al menos 30 minutos escribiendo codigo',
            'No copies y pegues: escribe el codigo tu mismo para internalizar la sintaxis',
            'Cuando te bloquees, usa Python Tutor para visualizar paso a paso',
            'Participa en foros como Stack Overflow o Reddit r/learnpython',
            'Documenta tu aprendizaje en un repositorio personal de GitHub',
            'Resuelve problemas en plataformas como HackerRank antes de cada clase'
        ],
        palabrasClave: [
            'Python 3', 'Pseudocódigo', 'Diagrama de Flujo', 'VS Code',
            'Variables', 'Funciones', 'Bucles For/While', 'Condicionales',
            'Listas', 'Diccionarios', 'PEP 8', 'Debugging', 'Type Hints'
        ],
        proyectosSugeridos: [
            {
                nombre: 'Calculadora Cientifica',
                descripcion: 'Calculadora con operaciones basicas y avanzadas (raiz, potencia, trigonometria)',
                nivel: 'principiante',
                duracionEstimada: '1 semana'
            },
            {
                nombre: 'Gestor de Tareas CLI',
                descripcion: 'Aplicacion de linea de comandos para crear, listar y completar tareas con persistencia',
                nivel: 'intermedio',
                duracionEstimada: '2 semanas'
            },
            {
                nombre: 'Analizador de Texto',
                descripcion: 'Herramienta que analiza archivos de texto: cuenta palabras, frecuencia, estadisticas',
                nivel: 'intermedio',
                duracionEstimada: '2 semanas'
            },
            {
                nombre: 'Juego Ahorcado',
                descripcion: 'Clasico juego del ahorcado con categorias de palabras y sistema de puntuacion',
                nivel: 'principiante',
                duracionEstimada: '1 semana'
            }
        ],
        relevanciaProfesional: [
            { rol: 'Desarrollador Backend', importancia: 'alta', descripcion: 'Python es uno de los lenguajes mas demandados para backend' },
            { rol: 'Data Scientist', importancia: 'alta', descripcion: 'Base fundamental para analisis de datos y ML' },
            { rol: 'DevOps Engineer', importancia: 'media', descripcion: 'Scripts de automatizacion y herramientas CLI' },
            { rol: 'QA Automation', importancia: 'alta', descripcion: 'Python es el lenguaje preferido para testing automatizado' }
        ]
    },

    // MDY1101 - Modelamiento de Datos
    'modelamiento-datos': {
        id: 'modelamiento-datos',
        codigo: 'MDY1101',
        nombre: 'Modelamiento de Datos',
        nombreCorto: 'Modelamiento BD',
        bimestre: 1,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que introduce los fundamentos del diseño de bases de datos relacionales, desde el análisis de requerimientos hasta la implementación del modelo físico en un SGBD.',
        proposito: 'Capacitar al estudiante en el análisis, diseño y documentación de modelos de datos que soporten los requerimientos de información de una organización, aplicando técnicas de normalización y estándares de modelamiento.',
        objetivos: [
            'Identificar y documentar requerimientos de datos de un sistema',
            'Diseñar modelos conceptuales utilizando diagramas E-R',
            'Aplicar técnicas de normalización hasta 3FN',
            'Transformar modelos conceptuales en modelos lógicos',
            'Implementar modelos físicos en un SGBD relacional',
            'Documentar diccionarios de datos profesionales'
        ],
        competencias: [
            'Levantamiento y análisis de requerimientos de datos',
            'Diseño de modelos conceptuales Entidad-Relación',
            'Aplicación de técnicas de normalización (1FN-3FN)',
            'Transformación de modelos conceptuales a lógicos',
            'Implementación de modelos físicos en SGBD',
            'Diseño de integridad referencial y restricciones',
            'Documentación técnica con diccionarios de datos',
            'Uso de herramientas CASE para modelamiento'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos y Modelo Conceptual',
                semanas: 'Semana 1-3',
                descripcion: 'Introducción a las bases de datos y diseño del modelo Entidad-Relación.',
                contenidos: [
                    'Conceptos fundamentales: dato, información, conocimiento',
                    'Sistema de Gestión de Bases de Datos (SGBD): funciones y componentes',
                    'Evolución histórica: jerárquico, red, relacional, NoSQL',
                    'Modelo relacional: tablas, filas, columnas, dominios',
                    'Modelo Entidad-Relación (E-R): origen y propósito',
                    'Entidades fuertes, débiles e identificadoras',
                    'Atributos: simples, compuestos, derivados, multivaluados, clave',
                    'Relaciones: binarias, ternarias, reflexivas',
                    'Cardinalidad y participación: (1:1), (1:N), (N:M)',
                    'Notaciones: Chen, Crow\'s Foot, UML'
                ],
                actividades: [
                    'Análisis de casos empresariales: retail, salud, educación',
                    'Identificación de entidades y atributos en escenarios reales',
                    'Diseño de diagramas E-R con Draw.io y Lucidchart',
                    'Determinación de cardinalidades y participación',
                    'Comparación de notaciones en un mismo modelo',
                    'Presentación grupal de modelo conceptual'
                ]
            },
            {
                numero: 2,
                titulo: 'Normalización y Modelo Lógico',
                semanas: 'Semana 4-5',
                descripcion: 'Técnicas de normalización y transformación al modelo relacional.',
                contenidos: [
                    'Anomalías de datos: inserción, actualización, eliminación',
                    'Dependencias funcionales: definición y notación',
                    'Dependencias parciales y transitivas',
                    'Primera Forma Normal (1FN): atomicidad',
                    'Segunda Forma Normal (2FN): dependencia completa',
                    'Tercera Forma Normal (3FN): eliminación de transitivas',
                    'Forma Normal de Boyce-Codd (BCNF) - introducción',
                    'Transformación de E-R a modelo relacional',
                    'Claves primarias: naturales vs surrogadas',
                    'Claves foráneas e integridad referencial'
                ],
                actividades: [
                    'Identificación de dependencias funcionales en tablas',
                    'Ejercicios progresivos de normalización (1FN → 2FN → 3FN)',
                    'Transformación de entidades fuertes y débiles a tablas',
                    'Resolución de relaciones N:M con tablas puente',
                    'Análisis de trade-offs: normalización vs rendimiento',
                    'Taller práctico de normalización con casos reales'
                ]
            },
            {
                numero: 3,
                titulo: 'Modelo Físico y Documentación',
                semanas: 'Semana 6-8',
                descripcion: 'Implementación del modelo en SGBD y documentación profesional.',
                contenidos: [
                    'DDL: CREATE TABLE, ALTER TABLE, DROP TABLE',
                    'Tipos de datos: VARCHAR2, NUMBER, DATE, CLOB, BLOB',
                    'Restricciones: PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK',
                    'Acciones referenciales: CASCADE, SET NULL, RESTRICT',
                    'Secuencias y autoincremento',
                    'Índices: B-tree, conceptos básicos',
                    'Diccionario de datos: estructura y contenido',
                    'Documentación de modelos: metadatos y descripciones',
                    'Herramientas CASE: Oracle Data Modeler, pgModeler',
                    'Versionamiento de esquemas de base de datos'
                ],
                actividades: [
                    'Creación de esquemas completos en Oracle y PostgreSQL',
                    'Implementación de restricciones de integridad',
                    'Elaboración de diccionario de datos profesional',
                    'Ingeniería inversa de base de datos existente',
                    'Generación de scripts DDL desde herramienta CASE',
                    'Proyecto final: Modelo completo para sistema empresarial'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Oracle', icon: 'oracle-original', iconType: 'devicon' },
            { nombre: 'PostgreSQL', icon: 'postgresql-plain', iconType: 'devicon' },
            { nombre: 'SQL Developer', icon: 'fa-database', iconType: 'fontawesome' },
            { nombre: 'Draw.io', icon: 'fa-project-diagram', iconType: 'fontawesome' },
            { nombre: 'MySQL', icon: 'mysql-plain', iconType: 'devicon' },
            { nombre: 'DBeaver', icon: 'fa-table', iconType: 'fontawesome' },
            { nombre: 'Lucidchart', icon: 'fa-sitemap', iconType: 'fontawesome' },
            { nombre: 'pgModeler', icon: 'postgresql-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Actividad Formativa 1', ponderacion: 0, descripcion: 'Diseño de diagrama E-R básico' },
            { tipo: 'Formativa', nombre: 'Actividad Formativa 2', ponderacion: 0, descripcion: 'Ejercicios de normalización' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Modelo conceptual completo' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Normalización y modelo lógico' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto: Modelo físico implementado' }
        ],
        prerrequisitos: [],
        conexiones: ['SQL Consultas', 'SQL Programación', 'BD Aplicada'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Oracle Database Docs', url: 'https://docs.oracle.com/en/database/' },
            { tipo: 'Tutorial', nombre: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com/' },
            { tipo: 'Herramienta', nombre: 'Draw.io', url: 'https://app.diagrams.net/' },
            { tipo: 'Curso', nombre: 'Database Design - freeCodeCamp', url: 'https://www.youtube.com/watch?v=ztHopE5Wnpc' },
            { tipo: 'Tutorial', nombre: 'Lucidchart ER Diagrams', url: 'https://www.lucidchart.com/pages/er-diagrams' },
            { tipo: 'Libro', nombre: 'Database Design for Mere Mortals', url: 'https://www.amazon.com/Database-Design-Mere-Mortals-Hands/dp/0136788041' },
            { tipo: 'Video', nombre: 'Normalización Explicada', url: 'https://www.youtube.com/watch?v=GFQaEYEc8_8' },
            { tipo: 'Práctica', nombre: 'SQL Practice - W3Schools', url: 'https://www.w3schools.com/sql/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-01%20-%20Antropologia%2C%20Fundamentos%20Prog.%2C%20Modelamiento%20BD/Modelamiento-Datos' }
        ],
        color: 'amber',
        area: 'datos',
        palabrasClave: [
            'Modelo E-R', 'Normalización 1FN-3FN', 'Oracle', 'PostgreSQL',
            'DDL', 'Claves Primarias', 'Claves Foráneas', 'Cardinalidad',
            'Crow\'s Foot', 'Diccionario de Datos', 'SGBD', 'Draw.io'
        ]
    },

    // ANT1101 - Antropología
    'antropologia': {
        id: 'antropologia',
        codigo: 'ANT1101',
        nombre: 'Antropología',
        nombreCorto: 'Antropología',
        bimestre: 1,
        creditos: 2,
        horasTeoricas: 2,
        horasPracticas: 2,
        descripcion: 'Asignatura de formación general que explora la condición humana desde una perspectiva antropológica, integrando dimensiones filosóficas, culturales y sociales para la formación integral del profesional.',
        proposito: 'Promover la reflexión crítica sobre la condición humana, la diversidad cultural y los desafíos éticos contemporáneos, desarrollando competencias para el trabajo colaborativo en contextos multiculturales.',
        objetivos: [
            'Comprender la naturaleza del ser humano desde distintas perspectivas',
            'Analizar la diversidad cultural y su impacto en el mundo globalizado',
            'Reflexionar sobre dilemas éticos en el ámbito profesional y tecnológico',
            'Desarrollar pensamiento crítico frente a problemáticas sociales',
            'Valorar el trabajo en equipo y la comunicación intercultural'
        ],
        competencias: [
            'Pensamiento crítico y reflexión filosófica',
            'Análisis de la condición humana desde múltiples perspectivas',
            'Sensibilidad y competencia intercultural',
            'Comunicación efectiva en contextos diversos',
            'Trabajo colaborativo en equipos multidisciplinarios',
            'Responsabilidad ética en el ejercicio profesional',
            'Conciencia social y ciudadanía activa',
            'Apertura al diálogo y respeto por la diversidad'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'El Ser Humano y su Naturaleza',
                semanas: 'Semana 1-3',
                descripcion: 'Exploración de las dimensiones fundamentales de la condición humana.',
                contenidos: [
                    'Antropología: definición, objeto de estudio y ramas',
                    'Antropología filosófica vs antropología cultural',
                    'Dimensiones del ser humano: biológica, psicológica, social, espiritual',
                    'El ser humano como ser cultural y simbólico',
                    'Concepto de persona: dignidad y derechos fundamentales',
                    'Identidad personal: construcción y desarrollo',
                    'Identidad colectiva: nación, comunidad, grupos',
                    'El trabajo como dimensión constitutiva del ser humano',
                    'Sentido de vida y trascendencia',
                    'La tecnología como extensión de lo humano'
                ],
                actividades: [
                    'Lectura y análisis de textos filosóficos clásicos',
                    'Debate estructurado sobre la naturaleza humana',
                    'Ensayo reflexivo: ¿Qué significa ser humano hoy?',
                    'Autobiografía reflexiva: mi identidad y valores',
                    'Análisis de película: La condición humana en el cine',
                    'Foro de discusión: Tecnología y humanidad'
                ]
            },
            {
                numero: 2,
                titulo: 'Cultura y Diversidad',
                semanas: 'Semana 4-5',
                descripcion: 'Análisis de la diversidad cultural y sus manifestaciones.',
                contenidos: [
                    'Concepto de cultura: definiciones y elementos',
                    'Componentes de la cultura: símbolos, lenguaje, valores, normas',
                    'Cultura material e inmaterial',
                    'Diversidad cultural en el mundo globalizado',
                    'Etnocentrismo: definición y manifestaciones',
                    'Relativismo cultural: alcances y límites',
                    'Interculturalidad: diálogo entre culturas',
                    'Multiculturalismo en el ámbito laboral tech',
                    'Equipos de trabajo globales y distribuidos',
                    'Tecnología y transformación cultural digital'
                ],
                actividades: [
                    'Investigación etnográfica básica de una subcultura',
                    'Análisis de casos de diversidad en empresas tech globales',
                    'Presentación grupal sobre una cultura del mundo',
                    'Simulación de trabajo en equipo multicultural',
                    'Mapa conceptual de elementos culturales',
                    'Entrevista a profesional de otra cultura'
                ]
            },
            {
                numero: 3,
                titulo: 'Ética y Sociedad Contemporánea',
                semanas: 'Semana 6-8',
                descripcion: 'Reflexión ética sobre los desafíos del mundo actual.',
                contenidos: [
                    'Fundamentos de ética: distinción ética-moral',
                    'Principales corrientes éticas: deontología, utilitarismo, ética de virtudes',
                    'Ética aplicada y ética profesional',
                    'Códigos de ética en tecnología (ACM, IEEE)',
                    'Responsabilidad Social Empresarial (RSE)',
                    'Desafíos éticos de la inteligencia artificial',
                    'Privacidad, vigilancia y datos personales',
                    'Sesgos algorítmicos y discriminación digital',
                    'Sostenibilidad ambiental y tecnología verde',
                    'Ciudadanía digital y participación cívica'
                ],
                actividades: [
                    'Análisis de dilemas éticos reales en la industria tech',
                    'Debate Oxford sobre IA y empleo',
                    'Estudio de caso: Escándalos éticos en Big Tech',
                    'Propuesta de código de ética para startup',
                    'Proyecto final: Plan de RSE para empresa tecnológica',
                    'Reflexión escrita sobre ética personal y profesional'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Google Slides', icon: 'google-plain', iconType: 'devicon' },
            { nombre: 'Canva', icon: 'canva-original', iconType: 'devicon' },
            { nombre: 'Notion', icon: 'notion-plain', iconType: 'devicon' },
            { nombre: 'Miro', icon: 'fa-chalkboard', iconType: 'fontawesome' },
            { nombre: 'Padlet', icon: 'fa-sticky-note', iconType: 'fontawesome' },
            { nombre: 'Zoom', icon: 'fa-video', iconType: 'fontawesome' },
            { nombre: 'Mentimeter', icon: 'fa-poll', iconType: 'fontawesome' },
            { nombre: 'Google Docs', icon: 'google-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Participación en clases', ponderacion: 0, descripcion: 'Aportes en debates y reflexiones' },
            { tipo: 'Sumativa', nombre: 'Ensayo reflexivo', ponderacion: 30, descripcion: 'Ensayo sobre identidad y cultura' },
            { tipo: 'Sumativa', nombre: 'Trabajo grupal', ponderacion: 30, descripcion: 'Investigación sobre diversidad cultural' },
            { tipo: 'Sumativa', nombre: 'Proyecto final', ponderacion: 40, descripcion: 'Análisis ético de caso tecnológico' }
        ],
        prerrequisitos: [],
        conexiones: ['Ética', 'Comunicación', 'Ética Profesional'],
        recursos: [
            { tipo: 'Video', nombre: 'TED Talks sobre cultura', url: 'https://www.ted.com/topics/culture' },
            { tipo: 'Video', nombre: 'Crash Course Philosophy', url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtNgK6MZucdYldNkMybYIHKR' },
            { tipo: 'Artículo', nombre: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/' },
            { tipo: 'Video', nombre: 'School of Life - Philosophy', url: 'https://www.youtube.com/c/theschooloflifetv' },
            { tipo: 'Documental', nombre: 'The Social Dilemma', url: 'https://www.thesocialdilemma.com/' },
            { tipo: 'Libro', nombre: 'Homo Deus - Yuval Noah Harari', url: 'https://www.ynharari.com/book/homo-deus/' },
            { tipo: 'Artículo', nombre: 'AI Ethics Guidelines - UNESCO', url: 'https://www.unesco.org/en/artificial-intelligence/recommendation-ethics' },
            { tipo: 'Podcast', nombre: 'Philosophize This!', url: 'https://www.philosophizethis.org/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-01%20-%20Antropologia%2C%20Fundamentos%20Prog.%2C%20Modelamiento%20BD/Antropologia' }
        ],
        color: 'rose',
        area: 'transversal',
        palabrasClave: [
            'Ética Profesional', 'Diversidad Cultural', 'Interculturalidad',
            'RSE', 'ACM Code of Ethics', 'Sesgos Algorítmicos', 'Privacidad',
            'Ciudadanía Digital', 'Pensamiento Crítico', 'Humanismo Digital'
        ]
    },

    // =============================================
    // BIMESTRE 02 - POO & CLOUD
    // =============================================

    // PRY2202 - Desarrollo Orientado a Objetos I
    'poo-i': {
        id: 'poo-i',
        codigo: 'PRY2202',
        nombre: 'Desarrollo Orientado a Objetos I',
        nombreCorto: 'POO I',
        bimestre: 2,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que introduce el paradigma de Programación Orientada a Objetos utilizando Java como lenguaje principal. Los estudiantes aprenden a modelar problemas del mundo real mediante clases, objetos y los cuatro pilares de la POO.',
        proposito: 'Desarrollar la capacidad de diseñar e implementar soluciones de software aplicando los principios fundamentales de la Programación Orientada a Objetos, utilizando Java como herramienta de implementación.',
        objetivos: [
            'Comprender los fundamentos del paradigma orientado a objetos',
            'Diseñar clases con atributos, métodos y constructores',
            'Aplicar los cuatro pilares: encapsulamiento, herencia, polimorfismo, abstracción',
            'Implementar relaciones entre clases: asociación, composición, agregación',
            'Manejar excepciones y validaciones de datos',
            'Trabajar con colecciones genéricas en Java'
        ],
        competencias: [
            'Análisis y diseño orientado a objetos',
            'Programación en Java SE',
            'Modelado con diagramas UML de clases',
            'Implementación de los 4 pilares de POO',
            'Diseño de jerarquías de herencia efectivas',
            'Uso de interfaces para abstracción',
            'Manejo robusto de excepciones',
            'Trabajo con colecciones genéricas'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos de POO y Clases en Java',
                semanas: 'Semana 1-3',
                descripcion: 'Introducción al paradigma OO y creación de clases básicas en Java.',
                contenidos: [
                    'Historia y evolución de la POO: Simula, Smalltalk, C++, Java',
                    'Paradigma orientado a objetos vs estructurado: comparación',
                    'Clases y objetos: definición, instanciación, ciclo de vida',
                    'Atributos: tipos primitivos, referencias, inicialización',
                    'Métodos: firma, parámetros, sobrecarga, return',
                    'Constructores: default, parametrizados, this()',
                    'Modificadores de acceso: public, private, protected, package-private',
                    'Encapsulamiento: getters, setters, validaciones',
                    'Palabra clave static: atributos y métodos de clase',
                    'Palabra clave final: constantes y prevención de herencia'
                ],
                actividades: [
                    'Diseño de clase Persona con atributos y validaciones',
                    'Implementación de clase Producto con múltiples constructores',
                    'Clase CuentaBancaria con encapsulamiento y operaciones',
                    'Ejercicio de sobrecarga de métodos en clase Calculadora',
                    'Práctica de atributos y métodos estáticos',
                    'Mini-proyecto: Sistema de registro de estudiantes'
                ]
            },
            {
                numero: 2,
                titulo: 'Herencia y Composición',
                semanas: 'Semana 4-5',
                descripcion: 'Relaciones entre clases: herencia simple y composición de objetos.',
                contenidos: [
                    'Herencia: concepto, beneficios y problemas',
                    'Palabra clave extends y acceso a miembros heredados',
                    'Constructor de superclase: super() y cadena de constructores',
                    'Sobrescritura de métodos: @Override y reglas',
                    'Clases abstractas: abstract class y métodos abstractos',
                    'Composición: "tiene-un" vs herencia "es-un"',
                    'Agregación vs composición: ciclo de vida de objetos',
                    'Asociación: relaciones entre objetos independientes',
                    'Diagramas de clase UML: notación y herramientas',
                    'Principio de sustitución de Liskov (introducción)'
                ],
                actividades: [
                    'Jerarquía de clases: Empleado → Gerente, Desarrollador',
                    'Sistema de figuras geométricas con clase abstracta',
                    'Implementación de composición: Auto contiene Motor',
                    'Modelado UML de sistema de biblioteca',
                    'Refactorización de herencia a composición',
                    'Mini-proyecto: Sistema de nómina con herencia'
                ]
            },
            {
                numero: 3,
                titulo: 'Polimorfismo, Interfaces y Colecciones',
                semanas: 'Semana 6-8',
                descripcion: 'Polimorfismo, interfaces y trabajo con colecciones genéricas.',
                contenidos: [
                    'Polimorfismo de subtipo: upcasting y binding dinámico',
                    'Polimorfismo paramétrico: introducción a genéricos',
                    'Interfaces: definición, implementación múltiple',
                    'Interfaces funcionales y expresiones lambda (introducción)',
                    'Colecciones: Collection, List, Set, Map',
                    'ArrayList vs LinkedList: características y uso',
                    'Iteración: for-each, Iterator, streams básicos',
                    'Excepciones: jerarquía, checked vs unchecked',
                    'Try-catch-finally y try-with-resources',
                    'Excepciones personalizadas: cuándo y cómo crearlas'
                ],
                actividades: [
                    'Sistema de pagos polimórfico: diferentes métodos de pago',
                    'Implementación de interfaces Comparable y Comparator',
                    'Gestión de colección de productos con ArrayList',
                    'Sistema de archivos con manejo de excepciones',
                    'Excepciones personalizadas para validación de negocio',
                    'Proyecto integrador: Sistema de gestión de inventario'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Java', icon: 'java-plain', iconType: 'devicon' },
            { nombre: 'IntelliJ IDEA', icon: 'intellij-plain', iconType: 'devicon' },
            { nombre: 'Maven', icon: 'maven-plain', iconType: 'devicon' },
            { nombre: 'Git', icon: 'git-plain', iconType: 'devicon' },
            { nombre: 'GitHub', icon: 'github-original', iconType: 'devicon' },
            { nombre: 'JUnit', icon: 'junit-plain', iconType: 'devicon' },
            { nombre: 'Draw.io', icon: 'fa-project-diagram', iconType: 'fontawesome' },
            { nombre: 'PlantUML', icon: 'fa-sitemap', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Actividad Formativa 1', ponderacion: 0, descripcion: 'Creación de clases básicas' },
            { tipo: 'Formativa', nombre: 'Actividad Formativa 2', ponderacion: 0, descripcion: 'Práctica de herencia' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 25, descripcion: 'Clases, encapsulamiento, composición' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 35, descripcion: 'Herencia y polimorfismo' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto integrador con interfaces' }
        ],
        prerrequisitos: ['Fundamentos de Programación'],
        conexiones: ['POO II', 'Backend I', 'Frontend I'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Java SE Documentation', url: 'https://docs.oracle.com/en/java/' },
            { tipo: 'Tutorial', nombre: 'Baeldung Java', url: 'https://www.baeldung.com/' },
            { tipo: 'Práctica', nombre: 'Exercism Java Track', url: 'https://exercism.org/tracks/java' },
            { tipo: 'Curso', nombre: 'Java Programming - MOOC.fi', url: 'https://java-programming.mooc.fi/' },
            { tipo: 'Video', nombre: 'Java Full Course - Bro Code', url: 'https://www.youtube.com/watch?v=xk4_1vDrzzo' },
            { tipo: 'Libro', nombre: 'Head First Java', url: 'https://www.oreilly.com/library/view/head-first-java/9781492091646/' },
            { tipo: 'Práctica', nombre: 'CodingBat Java', url: 'https://codingbat.com/java' },
            { tipo: 'Video', nombre: 'OOP in Java - freeCodeCamp', url: 'https://www.youtube.com/watch?v=Qmt0QwzEmh0' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-02%20-%20POO%20I%2C%20Cloud%2C%20Comunicacion/Programacion-OO-I' }
        ],
        color: 'orange',
        area: 'programacion',
        // Contenido enriquecido
        dificultad: 'intermedio',
        horasEstudioSemanal: 10,
        tips: [
            'Domina los 4 pilares de POO: encapsulamiento, herencia, polimorfismo, abstraccion',
            'Dibuja diagramas de clases UML antes de escribir codigo',
            'Practica creando jerarquias de clases con herencia y composicion',
            'Usa el debugger de tu IDE para entender el flujo de ejecucion',
            'Revisa codigo open source en GitHub para ver patrones reales',
            'Implementa los patrones de diseno mas comunes: Singleton, Factory, Observer'
        ],
        palabrasClave: [
            'Java 17+', 'Clases', 'Objetos', 'Herencia', 'Polimorfismo',
            'Encapsulamiento', 'Abstracción', 'Interfaces', 'UML',
            'ArrayList', 'HashMap', 'Excepciones', 'IntelliJ IDEA'
        ],
        proyectosSugeridos: [
            {
                nombre: 'Sistema de Biblioteca',
                descripcion: 'Sistema para gestionar libros, prestamos y usuarios usando herencia y polimorfismo',
                nivel: 'intermedio',
                duracionEstimada: '3 semanas'
            },
            {
                nombre: 'Juego de Cartas',
                descripcion: 'Implementar un juego de cartas usando clases abstractas e interfaces',
                nivel: 'intermedio',
                duracionEstimada: '2 semanas'
            },
            {
                nombre: 'Sistema de Empleados',
                descripcion: 'Jerarquia de empleados con diferentes roles y calculo de salarios polimorfico',
                nivel: 'principiante',
                duracionEstimada: '1 semana'
            }
        ],
        relevanciaProfesional: [
            { rol: 'Desarrollador Backend Java', importancia: 'alta', descripcion: 'Base fundamental para Spring Boot y frameworks empresariales' },
            { rol: 'Desarrollador Android', importancia: 'alta', descripcion: 'Java es uno de los lenguajes principales para Android' },
            { rol: 'Arquitecto de Software', importancia: 'alta', descripcion: 'POO es esencial para disenar sistemas escalables' },
            { rol: 'Full Stack Developer', importancia: 'media', descripcion: 'Conocimientos transferibles a cualquier lenguaje OO' }
        ]
    },

    // CLD2201 - Computación en la Nube
    'computacion-nube': {
        id: 'computacion-nube',
        codigo: 'CLD2201',
        nombre: 'Computación en la Nube',
        nombreCorto: 'Computación Nube',
        bimestre: 2,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que introduce los conceptos fundamentales de la computación en la nube, modelos de servicio (IaaS, PaaS, SaaS) y despliegue de aplicaciones en proveedores cloud como AWS.',
        proposito: 'Capacitar al estudiante en el uso de servicios cloud para el despliegue y administración de aplicaciones, comprendiendo los modelos de servicio y las mejores prácticas de arquitectura cloud.',
        objetivos: [
            'Comprender los fundamentos de la computación en la nube',
            'Diferenciar los modelos de servicio: IaaS, PaaS, SaaS',
            'Configurar y administrar instancias en AWS EC2',
            'Utilizar servicios de almacenamiento como S3',
            'Desplegar aplicaciones web en la nube',
            'Aplicar conceptos básicos de seguridad cloud'
        ],
        competencias: [
            'Comprensión de arquitecturas cloud y modelos de servicio',
            'Administración de servicios de cómputo AWS EC2',
            'Gestión de almacenamiento con Amazon S3',
            'Configuración de redes virtuales con Amazon VPC',
            'Despliegue de aplicaciones en la nube',
            'Gestión de bases de datos con Amazon RDS',
            'Implementación de seguridad básica con IAM',
            'Monitoreo y optimización de costos cloud'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos de Cloud Computing',
                semanas: 'Semana 1-3',
                descripcion: 'Introducción a los conceptos y modelos de computación en la nube.',
                contenidos: [
                    'Historia del cloud computing: de mainframes a la nube',
                    'Definición NIST de cloud computing',
                    'Modelos de servicio: IaaS, PaaS, SaaS, FaaS',
                    'Modelos de despliegue: público, privado, híbrido, multi-cloud',
                    'Comparativa de proveedores: AWS, Azure, GCP',
                    'Economía del cloud: CapEx vs OpEx',
                    'Introducción a AWS: historia y servicios principales',
                    'Regiones y zonas de disponibilidad',
                    'Consola de administración AWS',
                    'AWS CLI: instalación y configuración básica'
                ],
                actividades: [
                    'Comparación de precios entre proveedores cloud',
                    'Creación de cuenta AWS Academy/Free Tier',
                    'Exploración de la consola AWS',
                    'Instalación y configuración de AWS CLI',
                    'Ejercicio: Identificar servicios para casos de uso',
                    'Quiz de conceptos fundamentales de cloud'
                ]
            },
            {
                numero: 2,
                titulo: 'Cómputo y Almacenamiento en AWS',
                semanas: 'Semana 4-5',
                descripcion: 'Servicios de cómputo EC2 y almacenamiento S3.',
                contenidos: [
                    'Amazon EC2: arquitectura y componentes',
                    'Tipos de instancias: familias y casos de uso',
                    'AMIs: Amazon Machine Images',
                    'Creación y configuración de instancias EC2',
                    'Grupos de seguridad: reglas inbound/outbound',
                    'Key pairs y acceso SSH',
                    'Amazon S3: buckets, objetos, versionamiento',
                    'Clases de almacenamiento S3: Standard, IA, Glacier',
                    'Políticas de bucket y ACLs',
                    'Ciclo de vida de objetos y replicación'
                ],
                actividades: [
                    'Lanzamiento de instancia EC2 Linux',
                    'Conexión SSH y configuración básica',
                    'Instalación de servidor web Apache/Nginx',
                    'Creación de bucket S3 y carga de archivos',
                    'Configuración de bucket público para web estática',
                    'Mini-proyecto: Sitio web estático en S3'
                ]
            },
            {
                numero: 3,
                titulo: 'Redes, Bases de Datos y Despliegue',
                semanas: 'Semana 6-8',
                descripcion: 'Servicios de red, bases de datos y despliegue de aplicaciones.',
                contenidos: [
                    'Amazon VPC: conceptos fundamentales',
                    'Subredes públicas y privadas',
                    'Internet Gateway y NAT Gateway',
                    'Tablas de ruteo y Network ACLs',
                    'Amazon RDS: bases de datos administradas',
                    'Motores soportados: MySQL, PostgreSQL, etc.',
                    'IAM: usuarios, grupos, roles, políticas',
                    'Elastic Beanstalk: PaaS de AWS',
                    'CloudWatch: métricas, logs, alarmas',
                    'AWS Pricing Calculator y optimización de costos'
                ],
                actividades: [
                    'Diseño e implementación de VPC personalizada',
                    'Creación de instancia RDS MySQL/PostgreSQL',
                    'Conexión de EC2 a RDS en VPC privada',
                    'Configuración de IAM para equipo de desarrollo',
                    'Despliegue de aplicación con Elastic Beanstalk',
                    'Proyecto final: Aplicación web completa en AWS'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'AWS', icon: 'amazonwebservices-plain-wordmark', iconType: 'devicon' },
            { nombre: 'Linux', icon: 'linux-plain', iconType: 'devicon' },
            { nombre: 'SSH', icon: 'ssh-original', iconType: 'devicon' },
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' },
            { nombre: 'Bash', icon: 'bash-plain', iconType: 'devicon' },
            { nombre: 'Nginx', icon: 'nginx-original', iconType: 'devicon' },
            { nombre: 'MySQL', icon: 'mysql-plain', iconType: 'devicon' },
            { nombre: 'AWS CLI', icon: 'fa-terminal', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs AWS Academy', ponderacion: 0, descripcion: 'Laboratorios prácticos guiados' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Configuración de EC2 y S3' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Redes y bases de datos' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto: Despliegue de aplicación' }
        ],
        prerrequisitos: [],
        conexiones: ['Cloud Native', 'DevOps', 'Cloud Computing'],
        recursos: [
            { tipo: 'Plataforma', nombre: 'AWS Academy', url: 'https://aws.amazon.com/es/training/awsacademy/' },
            { tipo: 'Documentación', nombre: 'AWS Documentation', url: 'https://docs.aws.amazon.com/' },
            { tipo: 'Tutorial', nombre: 'AWS Skill Builder', url: 'https://skillbuilder.aws/' },
            { tipo: 'Curso', nombre: 'AWS Cloud Practitioner - freeCodeCamp', url: 'https://www.youtube.com/watch?v=SOTamWNgDKc' },
            { tipo: 'Guía', nombre: 'AWS Well-Architected', url: 'https://aws.amazon.com/architecture/well-architected/' },
            { tipo: 'Certificación', nombre: 'AWS Certified Cloud Practitioner', url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/' },
            { tipo: 'Práctica', nombre: 'AWS Workshops', url: 'https://workshops.aws/' },
            { tipo: 'Herramienta', nombre: 'AWS Pricing Calculator', url: 'https://calculator.aws/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-02%20-%20POO%20I%2C%20Cloud%2C%20Comunicacion/Computacion-Nube' }
        ],
        color: 'yellow',
        area: 'cloud',
        // Contenido enriquecido
        dificultad: 'intermedio',
        horasEstudioSemanal: 8,
        tips: [
            'Aprovecha el Free Tier de AWS para practicar sin costo',
            'Sigue el principio de minimo privilegio con IAM desde el inicio',
            'Documenta tu arquitectura con diagramas de AWS Architecture Icons',
            'Usa AWS CLI para automatizar tareas repetitivas',
            'Practica con labs de AWS Skill Builder y Workshops',
            'Prepara la certificacion Cloud Practitioner mientras estudias'
        ],
        palabrasClave: [
            'AWS', 'Amazon EC2', 'Amazon S3', 'Amazon VPC', 'IAM',
            'Amazon RDS', 'IaaS', 'PaaS', 'SaaS', 'CloudWatch',
            'Auto Scaling', 'Elastic Load Balancer', 'Free Tier'
        ],
        proyectosSugeridos: [
            {
                nombre: 'Website Estatico en S3',
                descripcion: 'Hosting de sitio web estatico con S3, CloudFront y Route53',
                nivel: 'principiante',
                duracionEstimada: '1 semana'
            },
            {
                nombre: 'App Serverless',
                descripcion: 'API REST con Lambda, API Gateway y DynamoDB',
                nivel: 'intermedio',
                duracionEstimada: '2 semanas'
            },
            {
                nombre: 'Arquitectura Multi-Tier',
                descripcion: 'Aplicacion web con EC2, RDS, Load Balancer y Auto Scaling',
                nivel: 'avanzado',
                duracionEstimada: '3 semanas'
            }
        ],
        relevanciaProfesional: [
            { rol: 'Cloud Engineer', importancia: 'alta', descripcion: 'AWS es el proveedor cloud mas demandado del mercado' },
            { rol: 'DevOps Engineer', importancia: 'alta', descripcion: 'Infraestructura cloud es fundamental para CI/CD' },
            { rol: 'Solutions Architect', importancia: 'alta', descripcion: 'Disenar soluciones cloud escalables y eficientes' },
            { rol: 'Backend Developer', importancia: 'media', descripcion: 'Desplegar y gestionar aplicaciones en la nube' }
        ]
    },

    // PLC2201 - Habilidades de Comunicación
    'comunicacion': {
        id: 'comunicacion',
        codigo: 'PLC2201',
        nombre: 'Habilidades de Comunicación',
        nombreCorto: 'Comunicación',
        bimestre: 2,
        creditos: 2,
        horasTeoricas: 2,
        horasPracticas: 2,
        descripcion: 'Asignatura de formación general orientada al desarrollo de competencias comunicativas esenciales para el desempeño profesional: comprensión lectora, producción escrita y comunicación oral efectiva.',
        proposito: 'Desarrollar habilidades comunicativas que permitan al estudiante expresarse de manera clara, coherente y efectiva en contextos académicos y profesionales del área de tecnología.',
        objetivos: [
            'Mejorar la comprensión de textos técnicos y académicos',
            'Redactar documentos profesionales con claridad y precisión',
            'Desarrollar habilidades de comunicación oral efectiva',
            'Argumentar ideas de forma lógica y estructurada',
            'Aplicar técnicas de presentación profesional'
        ],
        competencias: [
            'Comprensión lectora avanzada de textos técnicos',
            'Redacción técnica y profesional de documentación',
            'Comunicación oral efectiva en contextos profesionales',
            'Argumentación lógica y estructurada',
            'Diseño y ejecución de presentaciones profesionales',
            'Síntesis y análisis crítico de información',
            'Comunicación asertiva en equipos de trabajo',
            'Adaptación del mensaje según audiencia y contexto'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Comprensión Lectora',
                semanas: 'Semana 1-3',
                descripcion: 'Técnicas de lectura comprensiva, análisis crítico y síntesis de textos técnicos y profesionales.',
                contenidos: [
                    'Estrategias de lectura comprensiva y técnicas de skimming/scanning',
                    'Identificación de ideas principales, secundarias y de apoyo',
                    'Análisis de textos técnicos: documentación de software y manuales',
                    'Síntesis y resumen de información técnica compleja',
                    'Lectura crítica y evaluativa de fuentes digitales',
                    'Comprensión de documentación técnica en inglés',
                    'Identificación de sesgos y evaluación de credibilidad',
                    'Mapas conceptuales y organizadores gráficos',
                    'Técnicas de subrayado y anotación efectiva',
                    'Vocabulario técnico y terminología del área TI'
                ],
                actividades: [
                    'Análisis de artículos técnicos de TI y blogs especializados',
                    'Elaboración de resúmenes ejecutivos de documentación',
                    'Ejercicios de comprensión lectora con textos técnicos',
                    'Creación de mapas conceptuales de contenido técnico',
                    'Análisis comparativo de fuentes de información',
                    'Presentación oral de síntesis de lecturas'
                ]
            },
            {
                numero: 2,
                titulo: 'Producción Escrita',
                semanas: 'Semana 4-5',
                descripcion: 'Redacción de documentos profesionales, técnicos y comunicación escrita en entornos laborales.',
                contenidos: [
                    'Estructura de documentos profesionales y técnicos',
                    'Coherencia y cohesión textual: conectores y marcadores',
                    'Redacción de informes técnicos: estructura IMRyD',
                    'Correos electrónicos profesionales y formales',
                    'Minutas de reunión y actas de acuerdos',
                    'Citación APA y referencias bibliográficas',
                    'Documentación de software: README, CHANGELOG, wikis',
                    'Escritura colaborativa y control de versiones en docs',
                    'Redacción de propuestas de proyecto',
                    'Revisión, edición y corrección de estilo'
                ],
                actividades: [
                    'Redacción de informe técnico de proyecto de software',
                    'Elaboración de documentación README profesional',
                    'Práctica de redacción de correos formales (solicitudes, reportes)',
                    'Creación de minutas de reuniones de equipo simuladas',
                    'Revisión y edición entre pares con rúbrica',
                    'Taller de citación y manejo de referencias APA'
                ]
            },
            {
                numero: 3,
                titulo: 'Comunicación Oral y Presentaciones',
                semanas: 'Semana 6-8',
                descripcion: 'Técnicas de presentación profesional, comunicación oral efectiva y manejo de audiencias.',
                contenidos: [
                    'Técnicas de comunicación oral: claridad, dicción, volumen',
                    'Estructura de presentaciones efectivas: inicio, desarrollo, cierre',
                    'Diseño de recursos visuales: principios de diseño de slides',
                    'Manejo del nerviosismo y técnicas de respiración',
                    'Comunicación no verbal: postura, gestos, contacto visual',
                    'Storytelling técnico: contar historias con datos',
                    'Pitch de proyectos: elevator pitch y demo day',
                    'Manejo de preguntas y objeciones de la audiencia',
                    'Presentaciones en entornos virtuales (Zoom, Meet, Teams)',
                    'Retroalimentación constructiva: dar y recibir feedback'
                ],
                actividades: [
                    'Presentación de proyecto técnico ante panel evaluador',
                    'Práctica de pitch de ideas de 3 minutos (elevator pitch)',
                    'Sesiones de retroalimentación entre pares grabadas',
                    'Simulación de demo day de startup tecnológica',
                    'Presentación virtual con compartición de pantalla',
                    'Taller de manejo de preguntas difíciles'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'PowerPoint', icon: 'fa-file-powerpoint', iconType: 'fontawesome' },
            { nombre: 'Google Docs', icon: 'google-plain', iconType: 'devicon' },
            { nombre: 'Canva', icon: 'canva-original', iconType: 'devicon' },
            { nombre: 'Notion', icon: 'notion-plain', iconType: 'devicon' },
            { nombre: 'Slack', icon: 'slack-plain', iconType: 'devicon' },
            { nombre: 'Grammarly', icon: 'fa-spell-check', iconType: 'fontawesome' },
            { nombre: 'Google Slides', icon: 'google-plain', iconType: 'devicon' },
            { nombre: 'Zoom', icon: 'fa-video', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Ejercicios de comprensión', ponderacion: 0, descripcion: 'Análisis de textos técnicos' },
            { tipo: 'Sumativa', nombre: 'Diagnóstico', ponderacion: 10, descripcion: 'Evaluación inicial de habilidades' },
            { tipo: 'Sumativa', nombre: 'Informe escrito', ponderacion: 35, descripcion: 'Redacción de documento técnico' },
            { tipo: 'Sumativa', nombre: 'Presentación oral', ponderacion: 55, descripcion: 'Exposición de proyecto' }
        ],
        prerrequisitos: [],
        conexiones: ['Antropología', 'Ética', 'Gestión de Proyectos'],
        recursos: [
            { tipo: 'Guía', nombre: 'Material de estudio DuocUC', url: '#' },
            { tipo: 'Herramienta', nombre: 'Grammarly - Corrector de gramática', url: 'https://www.grammarly.com/' },
            { tipo: 'Tutorial', nombre: 'Technical Writing - Google Developers', url: 'https://developers.google.com/tech-writing' },
            { tipo: 'Curso', nombre: 'Writing in the Sciences - Stanford', url: 'https://www.coursera.org/learn/sciwrite' },
            { tipo: 'Video', nombre: 'TED Talks - Communication Skills', url: 'https://www.ted.com/topics/communication' },
            { tipo: 'Herramienta', nombre: 'Hemingway Editor - Claridad de escritura', url: 'https://hemingwayapp.com/' },
            { tipo: 'Guía', nombre: 'Purdue OWL - Writing Lab', url: 'https://owl.purdue.edu/owl/general_writing/' },
            { tipo: 'Curso', nombre: 'Public Speaking - Coursera', url: 'https://www.coursera.org/specializations/public-speaking' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-02%20-%20POO%20I%2C%20Cloud%2C%20Comunicacion/Comunicacion' }
        ],
        color: 'pink',
        area: 'transversal',
        palabrasClave: [
            'Redacción Técnica', 'Technical Writing', 'Presentaciones Efectivas',
            'Elevator Pitch', 'Documentación README', 'Formato APA',
            'Google Docs', 'Canva', 'Storytelling', 'Comunicación Asertiva',
            'Grammarly', 'Minutas', 'Informes IMRyD', 'Feedback 360°'
        ]
    },

    // =============================================
    // BIMESTRE 03 - POO II & DEVOPS
    // =============================================

    // PRY3203 - Desarrollo Orientado a Objetos II
    'poo-ii': {
        id: 'poo-ii',
        codigo: 'PRY3203',
        nombre: 'Desarrollo Orientado a Objetos II',
        nombreCorto: 'POO II',
        bimestre: 3,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que profundiza en el paradigma POO, introduciendo patrones de diseño, principios SOLID, acceso a bases de datos con JDBC y desarrollo de interfaces gráficas con JavaFX.',
        proposito: 'Desarrollar aplicaciones de escritorio robustas aplicando patrones de diseño, principios SOLID y buenas prácticas de arquitectura de software utilizando Java.',
        objetivos: [
            'Aplicar principios SOLID en el diseño de software',
            'Implementar patrones de diseño fundamentales (Factory, Singleton, Observer)',
            'Conectar aplicaciones Java con bases de datos usando JDBC',
            'Desarrollar interfaces gráficas con JavaFX',
            'Gestionar proyectos con Maven y testing con JUnit',
            'Aplicar buenas prácticas de código limpio'
        ],
        competencias: [
            'Aplicación rigurosa de principios SOLID en diseño de software',
            'Implementación de patrones de diseño GoF (creacionales, estructurales, comportamiento)',
            'Diseño e implementación de capa de persistencia con JDBC',
            'Desarrollo de interfaces gráficas profesionales con JavaFX',
            'Testing unitario sistemático con JUnit 5 y Mockito',
            'Gestión de dependencias y ciclo de vida con Maven',
            'Refactorización de código legacy aplicando clean code',
            'Diseño de arquitecturas MVC para aplicaciones de escritorio'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Principios SOLID y Patrones Creacionales',
                semanas: 'Semana 1-3',
                descripcion: 'Fundamentos de diseño de software orientado a objetos, principios SOLID y patrones creacionales GoF.',
                contenidos: [
                    'Principio de Responsabilidad Única (SRP): cohesión y separación de concerns',
                    'Principio Abierto/Cerrado (OCP): extensión vs modificación',
                    'Principio de Sustitución de Liskov (LSP): contratos y subtipos',
                    'Principio de Segregación de Interfaces (ISP): interfaces cohesivas',
                    'Principio de Inversión de Dependencias (DIP): abstracciones vs implementaciones',
                    'Patrón Singleton: instancia única, thread-safety, lazy initialization',
                    'Patrón Factory Method: creación polimórfica de objetos',
                    'Patrón Abstract Factory: familias de objetos relacionados',
                    'Patrón Builder: construcción paso a paso de objetos complejos',
                    'Code smells y técnicas de refactorización'
                ],
                actividades: [
                    'Análisis de código legacy identificando violaciones SOLID',
                    'Refactorización de clase monolítica aplicando SRP y DIP',
                    'Implementación de Factory Method para crear diferentes tipos de reportes',
                    'Implementación de Singleton thread-safe para configuración de app',
                    'Code review grupal con rúbrica de criterios SOLID',
                    'Kata de refactorización: transformar código proceduralOOP'
                ]
            },
            {
                numero: 2,
                titulo: 'JDBC y Patrones de Acceso a Datos',
                semanas: 'Semana 4-5',
                descripcion: 'Conexión a bases de datos relacionales con JDBC, patrones de persistencia y manejo de transacciones.',
                contenidos: [
                    'JDBC API: DriverManager, Connection, Statement, ResultSet',
                    'PreparedStatement: parámetros seguros y prevención de SQL Injection',
                    'Manejo de excepciones SQLException y try-with-resources',
                    'Patrón DAO (Data Access Object): abstracción de persistencia',
                    'Patrón Repository: colección de objetos de dominio',
                    'Connection Pooling con HikariCP: configuración y tuning',
                    'Transacciones: ACID, commit, rollback, savepoints',
                    'Batch processing para operaciones masivas',
                    'Mapeo objeto-relacional manual vs frameworks',
                    'Logging de queries con SLF4J para debugging'
                ],
                actividades: [
                    'Implementación de CRUD completo con patrón DAO',
                    'Configuración de HikariCP connection pool en proyecto Maven',
                    'Testing de capa de persistencia con H2 database en memoria',
                    'Implementación de transacciones con rollback en caso de error',
                    'Comparación de rendimiento: Statement vs PreparedStatement',
                    'Refactorización de DAO a Repository con abstracciones genéricas'
                ]
            },
            {
                numero: 3,
                titulo: 'JavaFX y Arquitectura MVC',
                semanas: 'Semana 6-8',
                descripcion: 'Desarrollo de interfaces gráficas profesionales con JavaFX, Scene Builder y patrón MVC.',
                contenidos: [
                    'JavaFX: Scene, Stage, Scene Graph y ciclo de vida',
                    'Controles básicos: Button, TextField, TableView, ListView',
                    'FXML: separación de vista y Scene Builder visual',
                    'Patrón MVC en aplicaciones desktop: responsabilidades de cada capa',
                    'Data binding bidireccional: Properties y Bindings API',
                    'Event handling: ActionEvent, MouseEvent, KeyEvent',
                    'Patrón Observer para actualización automática de UI',
                    'CSS en JavaFX: estilos personalizados y temas',
                    'Diálogos: Alert, TextInputDialog, FileChooser',
                    'Empaquetado de aplicaciones: JAR ejecutable y jpackage'
                ],
                actividades: [
                    'Diseño de interfaz completa con Scene Builder y FXML',
                    'Implementación de TableView con datos desde base de datos',
                    'Binding de formulario de edición con modelo de datos',
                    'Proyecto integrador: Aplicación CRUD completa JavaFX + JDBC',
                    'Testing de controllers con JUnit 5 y TestFX',
                    'Aplicación de CSS personalizado para look & feel profesional'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Java', icon: 'java-plain', iconType: 'devicon' },
            { nombre: 'JavaFX', icon: 'java-plain', iconType: 'devicon' },
            { nombre: 'Maven', icon: 'maven-plain', iconType: 'devicon' },
            { nombre: 'PostgreSQL', icon: 'postgresql-plain', iconType: 'devicon' },
            { nombre: 'JUnit', icon: 'junit-plain', iconType: 'devicon' },
            { nombre: 'Scene Builder', icon: 'fa-paint-brush', iconType: 'fontawesome' },
            { nombre: 'IntelliJ IDEA', icon: 'intellij-plain', iconType: 'devicon' },
            { nombre: 'Git', icon: 'git-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs de patrones', ponderacion: 0, descripcion: 'Práctica de patrones de diseño' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 25, descripcion: 'SOLID y patrones creacionales' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 35, descripcion: 'JDBC y patrón DAO' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto JavaFX completo' }
        ],
        prerrequisitos: ['POO I'],
        conexiones: ['Backend I', 'Frontend I', 'Arquitectura Software'],
        recursos: [
            { tipo: 'Documentación', nombre: 'JavaFX Documentation', url: 'https://openjfx.io/' },
            { tipo: 'Tutorial', nombre: 'Refactoring Guru - Patrones de Diseño', url: 'https://refactoring.guru/es/design-patterns' },
            { tipo: 'Práctica', nombre: 'Baeldung - JDBC Tutorial', url: 'https://www.baeldung.com/java-jdbc' },
            { tipo: 'Video', nombre: 'Design Patterns in Java - Derek Banas', url: 'https://www.youtube.com/watch?v=NU_1StN5Tkk' },
            { tipo: 'Libro', nombre: 'Clean Code - Robert C. Martin', url: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882' },
            { tipo: 'Libro', nombre: 'Head First Design Patterns', url: 'https://www.amazon.com/Head-First-Design-Patterns-Brain-Friendly/dp/0596007124' },
            { tipo: 'Tutorial', nombre: 'JUnit 5 User Guide', url: 'https://junit.org/junit5/docs/current/user-guide/' },
            { tipo: 'Práctica', nombre: 'Exercism - Java Track', url: 'https://exercism.org/tracks/java' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-03%20-%20POO%20II%2C%20DevOps%2C%20Etica/Desarrollo%20Orientado%20a%20Objetos%20II' }
        ],
        color: 'orange',
        area: 'programacion',
        palabrasClave: [
            'Java 17+', 'Principios SOLID', 'Design Patterns GoF', 'JDBC',
            'JavaFX', 'Singleton', 'Factory Method', 'Observer', 'MVC',
            'DAO Pattern', 'JUnit 5', 'Mockito', 'Clean Code', 'Maven'
        ]
    },

    // DVP3201 - DevOps
    'devops': {
        id: 'devops',
        codigo: 'DVP3201',
        nombre: 'DevOps',
        nombreCorto: 'DevOps',
        bimestre: 3,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que introduce la cultura y prácticas DevOps: automatización, CI/CD, contenedores Docker, y gestión de infraestructura como código.',
        proposito: 'Capacitar al estudiante en la implementación de prácticas DevOps para automatizar el ciclo de vida del desarrollo de software, mejorando la colaboración entre equipos de desarrollo y operaciones.',
        objetivos: [
            'Comprender la cultura y principios DevOps',
            'Implementar pipelines de CI/CD con GitHub Actions',
            'Containerizar aplicaciones con Docker',
            'Gestionar configuraciones con Docker Compose',
            'Aplicar prácticas de Infrastructure as Code',
            'Implementar monitoreo básico de aplicaciones'
        ],
        competencias: [
            'Adopción de cultura y principios DevOps (CALMS)',
            'Containerización de aplicaciones con Docker y Docker Compose',
            'Diseño e implementación de pipelines CI/CD con GitHub Actions',
            'Gestión de Infrastructure as Code con herramientas modernas',
            'Implementación de monitoreo, logging y observabilidad',
            'Automatización de tareas con scripts Bash y workflows',
            'Gestión de configuraciones y secretos de forma segura',
            'Estrategias de deployment y rollback en producción'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos DevOps y Control de Versiones',
                semanas: 'Semana 1-3',
                descripcion: 'Cultura y principios DevOps, Git avanzado, estrategias de branching y automatización inicial.',
                contenidos: [
                    'Principios DevOps: Culture, Automation, Lean, Measurement, Sharing (CALMS)',
                    'Three Ways: Flow, Feedback, Continuous Learning',
                    'Git Flow: feature branches, release branches, hotfixes',
                    'Trunk-based development y GitHub Flow',
                    'Pull Requests: templates, reviews, protección de ramas',
                    'Semantic Versioning (SemVer): MAJOR.MINOR.PATCH',
                    'Conventional Commits: feat, fix, docs, chore',
                    'Introducción a GitHub Actions: events, jobs, steps',
                    'Automatización básica con scripts Bash/PowerShell',
                    'Pre-commit hooks con Husky para validaciones locales'
                ],
                actividades: [
                    'Configuración de flujo Git Flow en repositorio de equipo',
                    'Implementación de branch protection rules en GitHub',
                    'Creación de primer workflow de GitHub Actions (CI básico)',
                    'Configuración de pre-commit hooks con linting y formatting',
                    'Práctica de code review con checklist de calidad',
                    'Automatización de changelog con Conventional Commits'
                ]
            },
            {
                numero: 2,
                titulo: 'Docker y Containerización',
                semanas: 'Semana 4-5',
                descripcion: 'Containerización de aplicaciones con Docker, Docker Compose y mejores prácticas de imágenes.',
                contenidos: [
                    'Contenedores vs máquinas virtuales: arquitectura y beneficios',
                    'Docker architecture: daemon, client, registry',
                    'Docker images: layers, caching, tagging strategies',
                    'Docker containers: lifecycle, networking, volumes',
                    'Dockerfile: instructions, multi-stage builds, .dockerignore',
                    'Docker Compose: services, networks, volumes, depends_on',
                    'Docker Hub: public/private repos, automated builds',
                    'Container security: non-root users, image scanning',
                    'Best practices: slim images, layer optimization, BuildKit',
                    'Docker networking: bridge, host, overlay'
                ],
                actividades: [
                    'Containerización de aplicación Java con multi-stage build',
                    'Containerización de aplicación Python con requirements.txt',
                    'Orquestación multi-servicio con Docker Compose (app + db)',
                    'Push de imágenes a Docker Hub con tags versionados',
                    'Análisis de seguridad de imagen con docker scan',
                    'Optimización de Dockerfile para reducir tamaño de imagen'
                ]
            },
            {
                numero: 3,
                titulo: 'CI/CD y Deployment',
                semanas: 'Semana 6-8',
                descripcion: 'Pipelines completos de CI/CD, deployment automatizado y monitoreo básico de aplicaciones.',
                contenidos: [
                    'Pipeline CI: checkout, build, test, lint, security scan',
                    'Pipeline CD: environments, staging, production',
                    'GitHub Actions: secrets, variables, contexts',
                    'Matrix builds para múltiples versiones/plataformas',
                    'Caching de dependencias para acelerar builds',
                    'Deploy a PaaS: Render, Railway, Vercel, Heroku',
                    'Blue-green deployment y canary releases',
                    'Rollback strategies y feature flags',
                    'Monitoreo básico: health checks, logging estructurado',
                    'Notificaciones: Slack, email, GitHub status checks'
                ],
                actividades: [
                    'Pipeline CI/CD completo con testing y linting',
                    'Configuración de environments staging y production',
                    'Deploy automatizado a Render/Railway con Docker',
                    'Implementación de health check endpoint',
                    'Configuración de notificaciones en Slack/Discord',
                    'Proyecto integrador: App full-stack con DevOps completo'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' },
            { nombre: 'GitHub Actions', icon: 'github-original', iconType: 'devicon' },
            { nombre: 'Linux', icon: 'linux-plain', iconType: 'devicon' },
            { nombre: 'Bash', icon: 'bash-plain', iconType: 'devicon' },
            { nombre: 'YAML', icon: 'fa-file-code', iconType: 'fontawesome' },
            { nombre: 'Git', icon: 'git-plain', iconType: 'devicon' },
            { nombre: 'VS Code', icon: 'vscode-plain', iconType: 'devicon' },
            { nombre: 'Render', icon: 'fa-cloud', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Docker', ponderacion: 0, descripcion: 'Prácticas de containerización' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 25, descripcion: 'Git avanzado y GitHub Actions básico' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 35, descripcion: 'Docker y Docker Compose' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Pipeline CI/CD completo' }
        ],
        prerrequisitos: ['Computación en la Nube'],
        conexiones: ['Cloud Native', 'Backend I', 'Arquitectura Software'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Docker Documentation', url: 'https://docs.docker.com/' },
            { tipo: 'Tutorial', nombre: 'GitHub Actions Documentation', url: 'https://docs.github.com/en/actions' },
            { tipo: 'Roadmap', nombre: 'DevOps Roadmap 2025', url: 'https://roadmap.sh/devops' },
            { tipo: 'Video', nombre: 'Docker Tutorial - TechWorld with Nana', url: 'https://www.youtube.com/watch?v=3c-iBn73dDE' },
            { tipo: 'Práctica', nombre: 'Play with Docker Labs', url: 'https://labs.play-with-docker.com/' },
            { tipo: 'Curso', nombre: 'Docker & Kubernetes - Udemy', url: 'https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/' },
            { tipo: 'Libro', nombre: 'The DevOps Handbook', url: 'https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations/dp/1950508404' },
            { tipo: 'Tutorial', nombre: 'Learn GitHub Actions', url: 'https://learn.microsoft.com/en-us/training/paths/automate-workflow-github-actions/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-03%20-%20POO%20II%2C%20DevOps%2C%20Etica/DevOps' }
        ],
        color: 'blue',
        area: 'cloud',
        palabrasClave: [
            'Docker', 'Docker Compose', 'GitHub Actions', 'CI/CD Pipelines',
            'Git Flow', 'Linux CLI', 'Bash Scripting', 'Nginx',
            'Infrastructure as Code', 'YAML', 'Containers', 'DevOps Culture'
        ]
    },

    // ETI3201 - Ética
    'etica': {
        id: 'etica',
        codigo: 'ETI3201',
        nombre: 'Ética',
        nombreCorto: 'Ética',
        bimestre: 3,
        creditos: 2,
        horasTeoricas: 2,
        horasPracticas: 2,
        descripcion: 'Asignatura de formación general que profundiza en la reflexión ética aplicada al ámbito profesional y tecnológico, abordando dilemas contemporáneos de la industria TI.',
        proposito: 'Desarrollar el juicio ético del estudiante para enfrentar dilemas profesionales en el ámbito tecnológico, promoviendo una práctica responsable y comprometida con la sociedad.',
        objetivos: [
            'Analizar fundamentos filosóficos de la ética',
            'Evaluar dilemas éticos en el desarrollo de software',
            'Comprender la ética del manejo de datos y privacidad',
            'Reflexionar sobre el impacto social de la tecnología',
            'Aplicar códigos de ética profesional en TI'
        ],
        competencias: [
            'Razonamiento ético basado en teorías filosóficas',
            'Responsabilidad profesional en el desarrollo de software',
            'Pensamiento crítico ante dilemas tecnológicos',
            'Conciencia social sobre el impacto de la tecnología',
            'Integridad profesional y códigos de conducta',
            'Análisis de sesgos algorítmicos y fairness en IA',
            'Evaluación ética de privacidad y protección de datos',
            'Compromiso con tecnología sostenible y responsable'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos de Ética',
                semanas: 'Semana 1-3',
                descripcion: 'Bases filosóficas, teorías éticas y su aplicación al ámbito profesional tecnológico.',
                contenidos: [
                    'Ética, moral y valores: definiciones y diferencias',
                    'Teoría deontológica de Kant: deber y universalidad',
                    'Utilitarismo de Bentham y Mill: consecuencias y bienestar',
                    'Ética de las virtudes de Aristóteles: carácter y excelencia',
                    'Relativismo vs universalismo ético: debate contemporáneo',
                    'Códigos de ética profesional: ACM Code of Ethics',
                    'Código de ética IEEE y responsabilidad del ingeniero',
                    'Responsabilidad del profesional TI ante la sociedad',
                    'Conflictos de interés en el desarrollo de software',
                    'Casos históricos de fallos éticos en tecnología'
                ],
                actividades: [
                    'Análisis comparativo de códigos ACM vs IEEE',
                    'Debate estructurado sobre teorías éticas aplicadas',
                    'Reflexión escrita sobre valores profesionales personales',
                    'Estudio de caso: Volkswagen Dieselgate y ética ingenieril',
                    'Elaboración de código de ética personal del programador',
                    'Discusión grupal sobre responsabilidad profesional'
                ]
            },
            {
                numero: 2,
                titulo: 'Ética en Tecnología',
                semanas: 'Semana 4-5',
                descripcion: 'Dilemas éticos específicos del sector tecnológico: privacidad, IA, propiedad intelectual.',
                contenidos: [
                    'Privacidad y protección de datos: GDPR, LGPD, Ley 19.628 Chile',
                    'Sesgos algorítmicos: racial, género, socioeconómico',
                    'Fairness en Machine Learning: métricas y trade-offs',
                    'Propiedad intelectual: copyright, patentes de software',
                    'Software libre vs propietario: filosofía y licencias (GPL, MIT)',
                    'Ciberseguridad y hacking ético: límites y responsabilidades',
                    'Dark patterns en UX: manipulación del usuario',
                    'Impacto ambiental de data centers y Green IT',
                    'Adicción tecnológica y diseño persuasivo',
                    'Fake news, desinformación y responsabilidad de plataformas'
                ],
                actividades: [
                    'Análisis de casos de violación de privacidad (Cambridge Analytica)',
                    'Debate sobre sesgos algorítmicos en sistemas de contratación',
                    'Investigación sobre iniciativas de Green IT en la industria',
                    'Evaluación de dark patterns en apps populares',
                    'Comparación de licencias de software libre',
                    'Análisis del impacto social de redes sociales'
                ]
            },
            {
                numero: 3,
                titulo: 'Ética Aplicada y Proyecto',
                semanas: 'Semana 6-8',
                descripcion: 'Aplicación práctica de principios éticos en proyectos tecnológicos y tech for good.',
                contenidos: [
                    'Framework para toma de decisiones éticas en proyectos',
                    'Whistleblowing: protección y dilemas del denunciante',
                    'Conflictos de interés: identificación y gestión',
                    'Responsabilidad social empresarial (RSE) en tech',
                    'Futuro del trabajo: automatización y desplazamiento laboral',
                    'Tecnología para el bien social: ejemplos y oportunidades',
                    'Diseño inclusivo y accesibilidad web (WCAG)',
                    'IA responsable: principios y governance',
                    'Sostenibilidad digital y economía circular',
                    'El rol del desarrollador como agente de cambio social'
                ],
                actividades: [
                    'Análisis de dilemas éticos reales en empresas tech',
                    'Proyecto grupal: Propuesta de tech for good para Chile',
                    'Presentación y defensa de caso ético ante panel',
                    'Evaluación de accesibilidad de sitio web existente',
                    'Elaboración de framework de decisión ética para equipo',
                    'Simulación de comité de ética empresarial'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Google Docs', icon: 'google-plain', iconType: 'devicon' },
            { nombre: 'Presentaciones', icon: 'fa-file-powerpoint', iconType: 'fontawesome' },
            { nombre: 'Miro', icon: 'fa-object-group', iconType: 'fontawesome' },
            { nombre: 'Notion', icon: 'notion-plain', iconType: 'devicon' },
            { nombre: 'Canva', icon: 'canva-original', iconType: 'devicon' },
            { nombre: 'Zoom', icon: 'fa-video', iconType: 'fontawesome' },
            { nombre: 'Mentimeter', icon: 'fa-chart-bar', iconType: 'fontawesome' },
            { nombre: 'Padlet', icon: 'fa-sticky-note', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Participación en debates', ponderacion: 0, descripcion: 'Aportes en discusiones éticas' },
            { tipo: 'Sumativa', nombre: 'Ensayo ético', ponderacion: 30, descripcion: 'Análisis de dilema tecnológico' },
            { tipo: 'Sumativa', nombre: 'Caso de estudio', ponderacion: 30, descripcion: 'Evaluación de caso real' },
            { tipo: 'Sumativa', nombre: 'Proyecto final', ponderacion: 40, descripcion: 'Propuesta de tecnología ética' }
        ],
        prerrequisitos: ['Antropología'],
        conexiones: ['Ética Profesional', 'Seguridad Informática'],
        recursos: [
            { tipo: 'Código', nombre: 'ACM Code of Ethics', url: 'https://www.acm.org/code-of-ethics' },
            { tipo: 'Código', nombre: 'IEEE Code of Ethics', url: 'https://www.ieee.org/about/corporate/governance/p7-8.html' },
            { tipo: 'Curso', nombre: 'Responsible AI Practices - Google', url: 'https://ai.google/responsibility/responsible-ai-practices/' },
            { tipo: 'Curso', nombre: 'Responsible AI - Microsoft', url: 'https://www.microsoft.com/en-us/ai/responsible-ai' },
            { tipo: 'Video', nombre: 'The Social Dilemma (Netflix)', url: 'https://www.thesocialdilemma.com/' },
            { tipo: 'Video', nombre: 'TED: The Era of Blind Faith in Big Data - Cathy O\'Neil', url: 'https://www.ted.com/talks/cathy_o_neil_the_era_of_blind_faith_in_big_data_must_end' },
            { tipo: 'Libro', nombre: 'Weapons of Math Destruction - Cathy O\'Neil', url: 'https://www.amazon.com/Weapons-Math-Destruction-Increases-Inequality/dp/0553418815' },
            { tipo: 'Artículo', nombre: 'AI Ethics Guidelines - EU', url: 'https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-03%20-%20POO%20II%2C%20DevOps%2C%20Etica/Etica' }
        ],
        color: 'rose',
        area: 'transversal',
        palabrasClave: [
            'ACM Code of Ethics', 'IEEE Ethics', 'Responsible AI', 'Privacidad de Datos',
            'Sesgos Algorítmicos', 'GDPR', 'Derechos Digitales', 'Ética Profesional',
            'Dilemas Éticos TI', 'Propiedad Intelectual', 'Open Source Licensing'
        ]
    },

    // =============================================
    // BIMESTRE 04 - SQL & SEGURIDAD
    // =============================================

    // BDD4201 - SQL Consultas
    'sql-consultas': {
        id: 'sql-consultas',
        codigo: 'BDD4201',
        nombre: 'Consultas SQL',
        nombreCorto: 'SQL Consultas',
        bimestre: 4,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que desarrolla competencias avanzadas en consultas SQL, desde sentencias básicas hasta queries complejos con múltiples tablas, subconsultas y funciones de agregación.',
        proposito: 'Capacitar al estudiante en la extracción y manipulación eficiente de datos mediante SQL, dominando desde consultas básicas hasta queries avanzados para análisis de información.',
        objetivos: [
            'Dominar la sintaxis SQL estándar (SELECT, WHERE, ORDER BY)',
            'Realizar consultas con múltiples tablas usando JOINs',
            'Aplicar funciones de agregación y GROUP BY',
            'Implementar subconsultas y CTEs',
            'Optimizar consultas para mejor rendimiento',
            'Utilizar funciones de ventana (Window Functions)'
        ],
        competencias: [
            'Dominio de sintaxis SQL DQL estándar (SELECT, JOINs, aggregations)',
            'Diseño y ejecución de JOINs complejos entre múltiples tablas',
            'Aplicación de funciones de agregación para análisis de datos',
            'Implementación de subconsultas escalares, correlacionadas y CTEs',
            'Optimización de consultas mediante análisis de plan de ejecución',
            'Uso de Window Functions para cálculos analíticos avanzados',
            'Extracción de insights de negocio mediante SQL analítico',
            'Resolución de problemas de datos complejos con SQL'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos SQL y Consultas Básicas',
                semanas: 'Semana 1-3',
                descripcion: 'Sintaxis SQL básica, filtrado, ordenamiento y funciones integradas sobre tablas individuales.',
                contenidos: [
                    'SELECT, FROM, WHERE, DISTINCT: anatomía de una consulta',
                    'Operadores de comparación: =, <>, <, >, <=, >=, BETWEEN, LIKE',
                    'Operadores lógicos: AND, OR, NOT y precedencia',
                    'ORDER BY ASC/DESC, LIMIT, OFFSET para paginación',
                    'Funciones de texto: UPPER, LOWER, CONCAT, SUBSTRING, TRIM',
                    'Funciones de fecha: CURRENT_DATE, EXTRACT, DATE_PART, AGE',
                    'NULL handling: IS NULL, IS NOT NULL, COALESCE, NULLIF',
                    'CASE WHEN para lógica condicional en SELECT',
                    'Alias de columnas y tablas para legibilidad',
                    'Comentarios y formato de código SQL'
                ],
                actividades: [
                    'Consultas sobre base de datos Northwind/Sakila',
                    'Filtrado avanzado con operadores combinados',
                    'Ejercicios de funciones de texto para limpieza de datos',
                    'Consultas con funciones de fecha para análisis temporal',
                    'Transformación de datos con CASE WHEN',
                    'Práctica en SQLZoo y HackerRank SQL'
                ]
            },
            {
                numero: 2,
                titulo: 'JOINs y Agregaciones',
                semanas: 'Semana 4-5',
                descripcion: 'Consultas multi-tabla con diferentes tipos de JOIN y funciones de agregación para análisis.',
                contenidos: [
                    'INNER JOIN: registros coincidentes en ambas tablas',
                    'LEFT/RIGHT OUTER JOIN: registros con o sin coincidencia',
                    'FULL OUTER JOIN: unión completa de registros',
                    'Self-joins para relaciones jerárquicas',
                    'CROSS JOIN para productos cartesianos',
                    'COUNT, SUM, AVG, MIN, MAX: funciones de agregación',
                    'GROUP BY: agrupación para cálculos agregados',
                    'HAVING: filtrado sobre grupos agregados',
                    'JOINs con múltiples tablas (3+)',
                    'Análisis de planes de ejecución con EXPLAIN'
                ],
                actividades: [
                    'Consultas con múltiples JOINs encadenados',
                    'Reportes de ventas con agregaciones por período',
                    'Análisis de datos con GROUP BY y HAVING',
                    'Self-join para estructura organizacional',
                    'Identificación de registros huérfanos con LEFT JOIN',
                    'Optimización de JOINs con análisis EXPLAIN'
                ]
            },
            {
                numero: 3,
                titulo: 'Subconsultas y Funciones Avanzadas',
                semanas: 'Semana 6-8',
                descripcion: 'Subconsultas, CTEs, funciones de ventana y técnicas avanzadas para análisis de datos.',
                contenidos: [
                    'Subconsultas escalares en SELECT y WHERE',
                    'Subconsultas de tabla (derived tables)',
                    'Subconsultas correlacionadas: referencia a query externo',
                    'EXISTS, NOT EXISTS para verificación de existencia',
                    'IN, ANY, ALL para comparaciones con conjuntos',
                    'Common Table Expressions (CTEs): WITH clause',
                    'CTEs recursivos para estructuras jerárquicas',
                    'Window Functions: ROW_NUMBER, RANK, DENSE_RANK',
                    'LAG, LEAD, FIRST_VALUE, LAST_VALUE para análisis temporal',
                    'OVER con PARTITION BY y ORDER BY para particionamiento'
                ],
                actividades: [
                    'Consultas con subconsultas correlacionadas',
                    'CTEs para simplificar queries complejos',
                    'CTE recursivo para árbol organizacional',
                    'Ranking de productos con Window Functions',
                    'Análisis de tendencias con LAG/LEAD',
                    'Proyecto integrador: Dashboard de análisis SQL'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'PostgreSQL', icon: 'postgresql-plain', iconType: 'devicon' },
            { nombre: 'Oracle', icon: 'oracle-original', iconType: 'devicon' },
            { nombre: 'MySQL', icon: 'mysql-plain', iconType: 'devicon' },
            { nombre: 'DBeaver', icon: 'fa-database', iconType: 'fontawesome' },
            { nombre: 'DataGrip', icon: 'intellij-plain', iconType: 'devicon' },
            { nombre: 'pgAdmin', icon: 'postgresql-plain', iconType: 'devicon' },
            { nombre: 'SQL Server', icon: 'microsoftsqlserver-plain', iconType: 'devicon' },
            { nombre: 'SQLite', icon: 'sqlite-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Ejercicios SQL', ponderacion: 0, descripcion: 'Práctica de consultas' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Consultas básicas y JOINs' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Agregaciones y subconsultas' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto de análisis SQL' }
        ],
        prerrequisitos: ['Modelamiento de Datos'],
        conexiones: ['SQL Programación', 'Backend I', 'BD Aplicada'],
        recursos: [
            { tipo: 'Práctica', nombre: 'SQLZoo - Interactive Tutorial', url: 'https://sqlzoo.net/' },
            { tipo: 'Tutorial', nombre: 'Mode SQL Tutorial', url: 'https://mode.com/sql-tutorial/' },
            { tipo: 'Documentación', nombre: 'PostgreSQL Documentation', url: 'https://www.postgresql.org/docs/' },
            { tipo: 'Práctica', nombre: 'LeetCode SQL Problems', url: 'https://leetcode.com/problemset/database/' },
            { tipo: 'Curso', nombre: 'SQL for Data Science - Coursera', url: 'https://www.coursera.org/learn/sql-for-data-science' },
            { tipo: 'Práctica', nombre: 'HackerRank SQL', url: 'https://www.hackerrank.com/domains/sql' },
            { tipo: 'Video', nombre: 'SQL Tutorial - freeCodeCamp', url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY' },
            { tipo: 'Libro', nombre: 'Learning SQL - Alan Beaulieu', url: 'https://www.amazon.com/Learning-SQL-Generate-Manipulate-Retrieve/dp/1492057614' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-04%20-%20SQL%20Consultas%2C%20Seguridad/SQL%20Consultas' }
        ],
        color: 'amber',
        area: 'datos',
        palabrasClave: [
            'SQL Avanzado', 'SELECT', 'JOIN', 'WHERE', 'GROUP BY',
            'Subqueries', 'Aggregate Functions', 'Window Functions',
            'CTEs', 'Query Optimization', 'Execution Plan', 'Índices B-Tree'
        ]
    },

    // SEG4201 - Seguridad Informática
    'seguridad-informatica': {
        id: 'seguridad-informatica',
        codigo: 'SEG4201',
        nombre: 'Seguridad Informática',
        nombreCorto: 'Seguridad Informática',
        bimestre: 4,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que introduce los fundamentos de ciberseguridad, vulnerabilidades comunes en aplicaciones web (OWASP Top 10), y prácticas de desarrollo seguro.',
        proposito: 'Desarrollar la capacidad de identificar, prevenir y mitigar vulnerabilidades de seguridad en aplicaciones de software, aplicando principios de seguridad desde el diseño.',
        objetivos: [
            'Comprender los principios de seguridad de la información (CIA)',
            'Identificar vulnerabilidades del OWASP Top 10',
            'Implementar prácticas de desarrollo seguro',
            'Aplicar técnicas de autenticación y autorización',
            'Realizar análisis básico de vulnerabilidades',
            'Implementar cifrado y manejo seguro de datos'
        ],
        competencias: [
            'Fundamentos de seguridad de la información (CIA triad)',
            'Identificación y explotación ética de vulnerabilidades OWASP Top 10',
            'Implementación de Secure Software Development Lifecycle (SSDLC)',
            'Diseño de sistemas de autenticación y autorización seguros',
            'Aplicación de criptografía para protección de datos',
            'Análisis de amenazas y modelado de ataques',
            'Configuración segura de infraestructura y aplicaciones',
            'Respuesta a incidentes y análisis forense básico'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos de Seguridad',
                semanas: 'Semana 1-3',
                descripcion: 'Principios de seguridad de la información, tipos de amenazas y análisis de riesgo.',
                contenidos: [
                    'Triada CIA: Confidencialidad, Integridad, Disponibilidad',
                    'Tipos de amenazas: internas, externas, APT',
                    'Perfil de atacantes: script kiddies, hacktivistas, estados',
                    'Ingeniería social: phishing, vishing, pretexting',
                    'Malware: virus, ransomware, troyanos, rootkits, spyware',
                    'Ataques de red: MitM, DDoS, ARP spoofing',
                    'Seguridad física y controles de acceso',
                    'Introducción a OWASP y estándares de seguridad',
                    'Análisis de riesgo y threat modeling (STRIDE)',
                    'Leyes y regulaciones: GDPR, PCI-DSS, ISO 27001'
                ],
                actividades: [
                    'Análisis de casos de brechas de seguridad famosas',
                    'Threat modeling de aplicación web con STRIDE',
                    'Laboratorio de phishing awareness y simulación',
                    'Identificación de amenazas en sistema real',
                    'Quiz de reconocimiento de ingeniería social',
                    'Evaluación de cumplimiento normativo básico'
                ]
            },
            {
                numero: 2,
                titulo: 'OWASP Top 10 y Vulnerabilidades Web',
                semanas: 'Semana 4-5',
                descripcion: 'Principales vulnerabilidades en aplicaciones web según OWASP 2021.',
                contenidos: [
                    'A01: Broken Access Control - IDOR, privilege escalation',
                    'A02: Cryptographic Failures - weak encryption, exposed secrets',
                    'A03: Injection - SQL, NoSQL, XSS, Command, LDAP',
                    'A04: Insecure Design - threat modeling failures',
                    'A05: Security Misconfiguration - defaults, verbose errors',
                    'A06: Vulnerable and Outdated Components - SCA',
                    'A07: Authentication Failures - brute force, session hijacking',
                    'A08: Software and Data Integrity Failures - supply chain',
                    'A09: Security Logging and Monitoring Failures',
                    'A10: Server-Side Request Forgery (SSRF)'
                ],
                actividades: [
                    'Laboratorio completo con OWASP WebGoat',
                    'Explotación guiada de SQL Injection (SQLi)',
                    'Explotación guiada de XSS reflected y stored',
                    'Identificación de IDOR en aplicación de prueba',
                    'Escaneo de vulnerabilidades con OWASP ZAP',
                    'Documentación de hallazgos en formato CVE'
                ]
            },
            {
                numero: 3,
                titulo: 'Desarrollo Seguro y Mitigación',
                semanas: 'Semana 6-8',
                descripcion: 'Prácticas de desarrollo seguro, remediación de vulnerabilidades y criptografía aplicada.',
                contenidos: [
                    'Secure SDLC: security requirements, code review, SAST/DAST',
                    'Validación de entrada: whitelist, sanitización, encoding',
                    'Output encoding para prevención de XSS',
                    'Autenticación segura: bcrypt, Argon2, MFA',
                    'Autorización: RBAC, ABAC, OAuth 2.0, OIDC',
                    'Session management: tokens, cookies seguras, JWT',
                    'Criptografía: hashing vs encryption, AES-256, RSA',
                    'TLS/HTTPS: certificados, HSTS, cipher suites',
                    'Secrets management: Vault, environment variables',
                    'Security headers: CSP, X-Frame-Options, X-XSS-Protection'
                ],
                actividades: [
                    'Implementación de autenticación segura con bcrypt',
                    'Remediación de vulnerabilidades en código existente',
                    'Configuración de security headers en servidor web',
                    'Implementación de HTTPS con Let\'s Encrypt',
                    'Code review con checklist de seguridad OWASP',
                    'Proyecto integrador: Aplicación web segura'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'OWASP ZAP', icon: 'fa-shield-alt', iconType: 'fontawesome' },
            { nombre: 'Burp Suite', icon: 'fa-bug', iconType: 'fontawesome' },
            { nombre: 'Kali Linux', icon: 'linux-plain', iconType: 'devicon' },
            { nombre: 'Wireshark', icon: 'fa-network-wired', iconType: 'fontawesome' },
            { nombre: 'Nmap', icon: 'fa-search', iconType: 'fontawesome' },
            { nombre: 'Git', icon: 'git-plain', iconType: 'devicon' },
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' },
            { nombre: 'Linux', icon: 'linux-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs de seguridad', ponderacion: 0, descripcion: 'Prácticas en WebGoat' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Fundamentos y amenazas' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'OWASP Top 10' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto de desarrollo seguro' }
        ],
        prerrequisitos: [],
        conexiones: ['Seguridad y Calidad', 'Backend I', 'Cloud Native'],
        recursos: [
            { tipo: 'Documentación', nombre: 'OWASP Top 10 2021', url: 'https://owasp.org/Top10/' },
            { tipo: 'Práctica', nombre: 'OWASP WebGoat', url: 'https://owasp.org/www-project-webgoat/' },
            { tipo: 'Curso', nombre: 'PortSwigger Web Security Academy', url: 'https://portswigger.net/web-security' },
            { tipo: 'Práctica', nombre: 'TryHackMe - Web Hacking', url: 'https://tryhackme.com/' },
            { tipo: 'Certificación', nombre: 'Google Cybersecurity Certificate', url: 'https://grow.google/certificates/cybersecurity/' },
            { tipo: 'Práctica', nombre: 'HackTheBox - Web Challenges', url: 'https://www.hackthebox.com/' },
            { tipo: 'Video', nombre: 'LiveOverflow - Web Hacking', url: 'https://www.youtube.com/c/LiveOverflow' },
            { tipo: 'Libro', nombre: 'The Web Application Hacker\'s Handbook', url: 'https://www.amazon.com/Web-Application-Hackers-Handbook-Exploiting/dp/1118026470' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-04%20-%20SQL%20Consultas%2C%20Seguridad/Seguridad%20Informatica' }
        ],
        color: 'red',
        area: 'arquitectura',
        palabrasClave: [
            'OWASP Top 10', 'SQL Injection', 'Cross-Site Scripting (XSS)',
            'CSRF', 'Criptografía AES/RSA', 'Hashing bcrypt', 'TLS/HTTPS',
            'CIA Triad', 'Penetration Testing', 'Burp Suite', 'Zero Trust'
        ]
    },

    // =============================================
    // BIMESTRE 05 - SQL AVANZADO & CLOUD NATIVE
    // =============================================

    // BDD5201 - SQL Programación
    'sql-programacion': {
        id: 'sql-programacion',
        codigo: 'BDD5201',
        nombre: 'Programación SQL',
        nombreCorto: 'SQL Programacion',
        bimestre: 5,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que desarrolla competencias avanzadas en programación de bases de datos: procedimientos almacenados, funciones, triggers, cursores, optimización de rendimiento y administración de transacciones para implementar lógica de negocio robusta en el servidor de datos.',
        proposito: 'Capacitar al estudiante en la programación avanzada de bases de datos relacionales para implementar lógica de negocio en el servidor, optimizar rendimiento de queries complejos, automatizar procesos de datos mediante triggers y procedimientos, y gestionar transacciones con garantías ACID.',
        objetivos: [
            'Crear y gestionar procedimientos almacenados con parámetros IN/OUT/INOUT',
            'Implementar funciones escalares y de tabla definidas por el usuario',
            'Diseñar triggers para auditoría, validación y sincronización de datos',
            'Utilizar cursores y estructuras de control de flujo avanzadas',
            'Optimizar queries mediante análisis de planes de ejecución',
            'Gestionar transacciones con niveles de aislamiento apropiados'
        ],
        competencias: [
            'Diseño e implementación de procedimientos almacenados modulares',
            'Creación de funciones escalares, de tabla y agregadas',
            'Programación de triggers para múltiples eventos de base de datos',
            'Dominio de PL/pgSQL (PostgreSQL) y PL/SQL (Oracle)',
            'Análisis y optimización de planes de ejecución con EXPLAIN ANALYZE',
            'Gestión de transacciones ACID y niveles de aislamiento',
            'Implementación de estrategias de indexación avanzadas',
            'Resolución de problemas de concurrencia y deadlocks'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Procedimientos Almacenados y Funciones',
                semanas: 'Semana 1-3',
                descripcion: 'Creación de lógica de negocio encapsulada en la base de datos.',
                contenidos: [
                    'Sintaxis CREATE PROCEDURE/FUNCTION en PostgreSQL y Oracle',
                    'Parámetros IN, OUT, INOUT y valores por defecto',
                    'Variables locales, constantes y tipos de datos compuestos',
                    'Estructuras de control: IF/ELSE, CASE, LOOP, WHILE, FOR',
                    'Funciones escalares que retornan un único valor',
                    'Funciones de tabla (RETURNS TABLE) y set-returning functions',
                    'Funciones agregadas personalizadas (CREATE AGGREGATE)',
                    'Bloques anónimos DO $$ para scripts ad-hoc',
                    'Diferencias sintácticas PL/pgSQL vs PL/SQL vs T-SQL',
                    'Packages en Oracle: especificación y body'
                ],
                actividades: [
                    'Implementación de CRUD completo usando stored procedures',
                    'Creación de funciones de validación con expresiones regulares',
                    'Desarrollo de funciones de cálculo financiero (interés, amortización)',
                    'Migración de procedimientos entre PostgreSQL y Oracle',
                    'Implementación de función de búsqueda con paginación',
                    'Proyecto: Librería de funciones utilitarias reutilizables'
                ]
            },
            {
                numero: 2,
                titulo: 'Triggers, Cursores y Manejo de Excepciones',
                semanas: 'Semana 4-5',
                descripcion: 'Automatización de procesos y procesamiento fila por fila.',
                contenidos: [
                    'Triggers BEFORE, AFTER, INSTEAD OF y su orden de ejecución',
                    'Triggers a nivel de fila (FOR EACH ROW) vs statement',
                    'Variables especiales NEW, OLD en triggers',
                    'Trigger functions y su reutilización entre tablas',
                    'Cursores implícitos y explícitos: DECLARE, OPEN, FETCH, CLOSE',
                    'Cursores con parámetros y cursores refcursor',
                    'Manejo de excepciones: EXCEPTION WHEN, RAISE NOTICE/WARNING/EXCEPTION',
                    'Excepciones predefinidas (NO_DATA_FOUND, TOO_MANY_ROWS, etc.)',
                    'Logging de errores y auditoría con triggers',
                    'Alternativas modernas a cursores: CTEs recursivas y LATERAL'
                ],
                actividades: [
                    'Sistema de auditoría automática con triggers (who/when/what)',
                    'Trigger de validación de reglas de negocio complejas',
                    'Trigger de sincronización entre tablas relacionadas',
                    'Procesamiento batch de registros usando cursores',
                    'Implementación de soft delete con trigger INSTEAD OF',
                    'Proyecto: Sistema de histórico de cambios (CDC manual)'
                ]
            },
            {
                numero: 3,
                titulo: 'Optimización, Transacciones y Concurrencia',
                semanas: 'Semana 6-8',
                descripcion: 'Rendimiento de base de datos, transacciones y control de concurrencia.',
                contenidos: [
                    'EXPLAIN y EXPLAIN ANALYZE: lectura de planes de ejecución',
                    'Tipos de índices: B-tree, Hash, GIN (full-text), GiST (geoespacial)',
                    'Índices parciales, funcionales y covering indexes (INCLUDE)',
                    'Estadísticas del planificador y VACUUM ANALYZE',
                    'Transacciones: BEGIN, COMMIT, ROLLBACK, SAVEPOINT',
                    'Niveles de aislamiento: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE',
                    'Bloqueos: row-level, table-level, advisory locks',
                    'Detección y resolución de deadlocks',
                    'Optimistic vs Pessimistic locking patterns',
                    'Query hints y configuración de parámetros del planificador'
                ],
                actividades: [
                    'Análisis de plan de ejecución y propuesta de optimización',
                    'Diseño de estrategia de índices para schema complejo',
                    'Simulación de escenarios de concurrencia y bloqueos',
                    'Implementación de patrón optimistic locking con versioning',
                    'Benchmark de queries antes/después de optimización',
                    'Proyecto integrador: Sistema transaccional con auditoría y optimización'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'PostgreSQL', icon: 'postgresql-plain', iconType: 'devicon' },
            { nombre: 'Oracle', icon: 'oracle-original', iconType: 'devicon' },
            { nombre: 'PL/pgSQL', icon: 'fa-code', iconType: 'fontawesome' },
            { nombre: 'DBeaver', icon: 'fa-database', iconType: 'fontawesome' },
            { nombre: 'pgAdmin', icon: 'postgresql-plain', iconType: 'devicon' },
            { nombre: 'SQL Developer', icon: 'oracle-original', iconType: 'devicon' },
            { nombre: 'DataGrip', icon: 'jetbrains-plain', iconType: 'devicon' },
            { nombre: 'Git', icon: 'git-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs de programación', ponderacion: 0, descripcion: 'Práctica de SP y funciones' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Procedimientos y funciones' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Triggers y cursores' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto optimización' }
        ],
        prerrequisitos: ['SQL Consultas'],
        conexiones: ['BD Aplicada', 'Backend I', 'Arquitectura Software'],
        recursos: [
            { tipo: 'Documentación', nombre: 'PostgreSQL PL/pgSQL', url: 'https://www.postgresql.org/docs/current/plpgsql.html' },
            { tipo: 'Documentación', nombre: 'Oracle PL/SQL Reference', url: 'https://docs.oracle.com/en/database/oracle/oracle-database/19/lnpls/' },
            { tipo: 'Tutorial', nombre: 'Use The Index, Luke! - SQL Indexing', url: 'https://use-the-index-luke.com/' },
            { tipo: 'Video', nombre: 'PostgreSQL Tutorial - freeCodeCamp', url: 'https://www.youtube.com/watch?v=qw--VYLpxG4' },
            { tipo: 'Curso', nombre: 'Advanced SQL for Data Scientists - DataCamp', url: 'https://www.datacamp.com/courses/advanced-sql' },
            { tipo: 'Libro', nombre: 'SQL Performance Explained - Markus Winand', url: 'https://sql-performance-explained.com/' },
            { tipo: 'Práctica', nombre: 'PostgreSQL Exercises', url: 'https://pgexercises.com/' },
            { tipo: 'Herramienta', nombre: 'explain.depesz.com - Plan Analyzer', url: 'https://explain.depesz.com/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-05%20-%20SQL%20Avanzado%2C%20Cloud%20Native/Programacion%20SQL' }
        ],
        color: 'amber',
        area: 'datos',
        palabrasClave: [
            'PL/pgSQL', 'PL/SQL', 'Stored Procedures', 'Functions',
            'Triggers', 'Cursores', 'Transacciones ACID', 'PostgreSQL',
            'Oracle Database', 'Índices B-Tree/Hash', 'Deadlocks', 'Explain Analyze'
        ]
    },

    // CLD5201 - Cloud Native
    'cloud-native': {
        id: 'cloud-native',
        codigo: 'CLD5201',
        nombre: 'Cloud Native',
        nombreCorto: 'Cloud Native',
        bimestre: 5,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que profundiza en el desarrollo de aplicaciones cloud-native según los estándares CNCF, introduciendo Kubernetes como orquestador de contenedores, arquitecturas de microservicios, service mesh, observabilidad distribuida y patrones serverless para construir sistemas escalables, resilientes y portables.',
        proposito: 'Capacitar al estudiante en el diseño, implementación y operación de aplicaciones nativas de la nube, aplicando los principios de los 12-Factor Apps, orquestación de contenedores con Kubernetes, patrones de microservicios y estrategias de observabilidad para sistemas distribuidos.',
        objetivos: [
            'Comprender los principios fundamentales de aplicaciones cloud-native (CNCF)',
            'Desplegar y gestionar aplicaciones en clústeres Kubernetes',
            'Diseñar arquitecturas de microservicios desacoplados y escalables',
            'Implementar patrones de comunicación síncrona y asíncrona entre servicios',
            'Aplicar observabilidad completa: logging, métricas y tracing distribuido',
            'Utilizar servicios serverless y arquitecturas event-driven'
        ],
        competencias: [
            'Dominio de Kubernetes: Pods, Deployments, Services, Ingress, ConfigMaps, Secrets',
            'Diseño de arquitecturas de microservicios con bounded contexts',
            'Implementación de patrones de comunicación: REST, gRPC, event-driven',
            'Configuración de API Gateway y service discovery',
            'Implementación de observabilidad con el stack Prometheus/Grafana/Loki',
            'Desarrollo y despliegue de funciones serverless',
            'Aplicación de patrones de resiliencia: circuit breaker, retry, timeout',
            'Gestión de configuración y secretos en entornos distribuidos'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos Cloud Native y Kubernetes',
                semanas: 'Semana 1-3',
                descripcion: 'Principios cloud-native según CNCF y orquestación con Kubernetes.',
                contenidos: [
                    'CNCF y el ecosistema cloud-native: definición y Trail Map',
                    '12-Factor Apps: los doce principios de aplicaciones modernas',
                    'Kubernetes architecture: control plane, worker nodes, etcd',
                    'Pods: unidad mínima, multi-container patterns (sidecar, ambassador)',
                    'Deployments: rolling updates, rollbacks, scaling',
                    'Services: ClusterIP, NodePort, LoadBalancer, ExternalName',
                    'ConfigMaps y Secrets: externalización de configuración',
                    'Namespaces, labels, selectors y resource quotas',
                    'kubectl: comandos esenciales y scripting',
                    'Manifiestos YAML: estructura, best practices, Kustomize intro'
                ],
                actividades: [
                    'Setup de cluster local con minikube, kind y k3d',
                    'Despliegue de aplicación multi-tier en Kubernetes',
                    'Configuración dinámica con ConfigMaps y Secrets',
                    'Implementación de health checks (liveness, readiness probes)',
                    'Práctica de rolling update y rollback de deployment',
                    'Proyecto: Aplicación 12-factor desplegada en K8s'
                ]
            },
            {
                numero: 2,
                titulo: 'Microservicios, Comunicación y Resiliencia',
                semanas: 'Semana 4-5',
                descripcion: 'Diseño e implementación de microservicios con patrones de comunicación.',
                contenidos: [
                    'Monolito vs microservicios: trade-offs y cuándo migrar',
                    'Domain-Driven Design (DDD): bounded contexts y aggregates',
                    'Patrones de descomposición: por dominio, por subdomain, strangler fig',
                    'Comunicación síncrona: REST con OpenAPI, gRPC con Protocol Buffers',
                    'Comunicación asíncrona: event-driven con message brokers',
                    'API Gateway patterns: routing, rate limiting, authentication',
                    'Service discovery: client-side vs server-side, DNS-based',
                    'Patrones de resiliencia: Circuit Breaker, Retry, Timeout, Bulkhead',
                    'Kubernetes Ingress: NGINX, Traefik, routing rules',
                    'Intro a Service Mesh: Istio/Linkerd concepts'
                ],
                actividades: [
                    'Diseño de sistema e-commerce con bounded contexts',
                    'Implementación de comunicación REST y gRPC entre servicios',
                    'Configuración de API Gateway con Kong o NGINX Ingress',
                    'Implementación de Circuit Breaker con Resilience4j',
                    'Práctica de service discovery con Kubernetes DNS',
                    'Proyecto: Sistema de microservicios con gateway y resiliencia'
                ]
            },
            {
                numero: 3,
                titulo: 'Observabilidad, Serverless y Operaciones',
                semanas: 'Semana 6-8',
                descripcion: 'Monitoreo de sistemas distribuidos, serverless y operaciones cloud-native.',
                contenidos: [
                    'Tres pilares de observabilidad: logs, métricas, traces',
                    'Logging centralizado: Fluentd/Fluent Bit → Loki/ELK',
                    'Métricas con Prometheus: PromQL, exporters, alerting',
                    'Dashboards con Grafana: visualización y alertas',
                    'Tracing distribuido: Jaeger, Zipkin, OpenTelemetry',
                    'Serverless: AWS Lambda, Cloud Functions, Azure Functions',
                    'FaaS patterns: event triggers, cold start optimization',
                    'Event-driven architectures: EventBridge, Cloud Events',
                    'GitOps: ArgoCD, Flux para continuous deployment',
                    'Cost optimization y FinOps basics en Kubernetes'
                ],
                actividades: [
                    'Despliegue del stack de observabilidad (Prometheus + Grafana + Loki)',
                    'Instrumentación de aplicación con OpenTelemetry',
                    'Creación de dashboards y alertas en Grafana',
                    'Desarrollo y despliegue de función serverless en AWS/GCP',
                    'Implementación de pipeline GitOps con ArgoCD',
                    'Proyecto integrador: Sistema cloud-native con observabilidad completa'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Kubernetes', icon: 'kubernetes-plain', iconType: 'devicon' },
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' },
            { nombre: 'AWS', icon: 'amazonwebservices-plain-wordmark', iconType: 'devicon' },
            { nombre: 'Prometheus', icon: 'prometheus-original', iconType: 'devicon' },
            { nombre: 'Grafana', icon: 'grafana-original', iconType: 'devicon' },
            { nombre: 'Helm', icon: 'fa-dharmachakra', iconType: 'fontawesome' },
            { nombre: 'ArgoCD', icon: 'argocd-plain', iconType: 'devicon' },
            { nombre: 'Istio', icon: 'fa-project-diagram', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Kubernetes', ponderacion: 0, descripcion: 'Prácticas de orquestación' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Kubernetes fundamentals' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Microservicios' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto cloud-native' }
        ],
        prerrequisitos: ['DevOps', 'Computación en la Nube'],
        conexiones: ['Cloud Native II', 'Arquitectura Software', 'Cloud Computing'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Kubernetes Official Docs', url: 'https://kubernetes.io/docs/' },
            { tipo: 'Guía', nombre: 'CNCF Trail Map', url: 'https://landscape.cncf.io/' },
            { tipo: 'Tutorial', nombre: 'Kubernetes Learning Path - Microsoft', url: 'https://learn.microsoft.com/en-us/training/paths/intro-to-kubernetes-on-azure/' },
            { tipo: 'Video', nombre: 'Kubernetes Course - TechWorld with Nana', url: 'https://www.youtube.com/watch?v=X48VuDVv0do' },
            { tipo: 'Libro', nombre: '12-Factor App Methodology', url: 'https://12factor.net/' },
            { tipo: 'Práctica', nombre: 'KillerCoda - Interactive K8s Labs', url: 'https://killercoda.com/playgrounds/scenario/kubernetes' },
            { tipo: 'Curso', nombre: 'Kubernetes Basics - Udacity', url: 'https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud615' },
            { tipo: 'Certificación', nombre: 'CKAD Prep - Linux Foundation', url: 'https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-05%20-%20SQL%20Avanzado%2C%20Cloud%20Native/Cloud%20Native' }
        ],
        color: 'blue',
        area: 'cloud',
        palabrasClave: [
            'Kubernetes', 'CNCF', 'Containers', '12-Factor Apps',
            'Prometheus', 'Grafana', 'Observability', 'Serverless',
            'AWS Lambda', 'API Gateway', 'Service Mesh', 'GitOps', 'Helm'
        ]
    },

    // IRS5201 - Ingeniería de Requisitos
    'ingenieria-requisitos': {
        id: 'ingenieria-requisitos',
        codigo: 'IRS5201',
        nombre: 'Ingeniería de Requisitos',
        nombreCorto: 'Ing. Requisitos',
        bimestre: 5,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que desarrolla competencias completas en el ciclo de vida de requisitos de software: elicitación con stakeholders, análisis y modelado, especificación según estándares IEEE/ISO, validación, trazabilidad y gestión del cambio para proyectos de desarrollo de software.',
        proposito: 'Capacitar al estudiante en las técnicas, metodologías y herramientas profesionales para gestionar requisitos de software de manera integral, desde la identificación de stakeholders y elicitación hasta la documentación formal, validación continua y gestión de cambios a lo largo del ciclo de vida del proyecto.',
        objetivos: [
            'Aplicar técnicas de elicitación de requisitos con diferentes tipos de stakeholders',
            'Clasificar y priorizar requisitos funcionales y no funcionales',
            'Documentar requisitos usando estándares de la industria (IEEE 830, ISO 29148)',
            'Modelar requisitos con casos de uso UML y user stories ágiles',
            'Gestionar cambios y mantener trazabilidad bidireccional de requisitos',
            'Validar requisitos con stakeholders mediante prototipos y revisiones'
        ],
        competencias: [
            'Identificación y análisis de stakeholders y sus necesidades',
            'Aplicación de múltiples técnicas de elicitación según contexto',
            'Modelado de requisitos con UML (casos de uso, diagramas de actividad)',
            'Redacción de User Stories con criterios de aceptación INVEST',
            'Documentación de SRS según IEEE 830 e ISO/IEC/IEEE 29148',
            'Priorización de requisitos con técnicas MoSCoW, Kano, WSJF',
            'Gestión de trazabilidad bidireccional requisito-diseño-test',
            'Facilitación de sesiones de validación y gestión de cambios'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos, Stakeholders y Elicitación',
                semanas: 'Semana 1-3',
                descripcion: 'Conceptos fundamentales y técnicas de obtención de requisitos.',
                contenidos: [
                    'Ingeniería de Requisitos: definición, importancia y costo del error',
                    'Tipos de requisitos: funcionales, no funcionales (calidad), de negocio',
                    'Stakeholders: identificación, análisis de poder/interés, matriz RACI',
                    'Técnicas de elicitación: entrevistas estructuradas y semi-estructuradas',
                    'Cuestionarios y encuestas: diseño y análisis de resultados',
                    'Observación etnográfica y análisis de tareas (task analysis)',
                    'Workshops JAD (Joint Application Development) y brainstorming',
                    'Prototipado como técnica de elicitación: wireframes, mockups',
                    'Análisis de documentos existentes y sistemas legacy',
                    'Técnicas creativas: card sorting, personas, journey maps'
                ],
                actividades: [
                    'Análisis de stakeholders para caso de estudio empresarial',
                    'Práctica de entrevista de elicitación con role-playing',
                    'Diseño y aplicación de cuestionario de requisitos',
                    'Facilitación de workshop de brainstorming',
                    'Creación de wireframes para validar requisitos',
                    'Proyecto: Plan de elicitación completo para sistema real'
                ]
            },
            {
                numero: 2,
                titulo: 'Análisis, Modelado y Especificación',
                semanas: 'Semana 4-5',
                descripcion: 'Modelado formal y documentación de requisitos según estándares.',
                contenidos: [
                    'Casos de uso UML: actores, casos, relaciones (include, extend, generalization)',
                    'Especificación de casos de uso: plantilla de Cockburn',
                    'User Stories: formato "Como... quiero... para...", criterios INVEST',
                    'Criterios de aceptación: Given-When-Then (Gherkin syntax)',
                    'Épicas, Features, User Stories: jerarquía y descomposición',
                    'Documento SRS según IEEE 830: estructura y secciones',
                    'ISO/IEC/IEEE 29148: requisitos y ciclo de vida',
                    'Requisitos no funcionales: FURPS+, ISO 25010 (calidad de producto)',
                    'Priorización: MoSCoW, Kano Model, WSJF (Weighted Shortest Job First)',
                    'Modelado de dominio: diagramas de clase y entidad-relación'
                ],
                actividades: [
                    'Creación de diagrama de casos de uso para sistema completo',
                    'Especificación detallada de 3 casos de uso críticos',
                    'Redacción de épica con User Stories descompuestas',
                    'Definición de criterios de aceptación en formato Gherkin',
                    'Priorización de backlog con técnica MoSCoW',
                    'Proyecto: Documento SRS parcial siguiendo IEEE 830'
                ]
            },
            {
                numero: 3,
                titulo: 'Validación, Trazabilidad y Gestión del Cambio',
                semanas: 'Semana 6-8',
                descripcion: 'Validación de requisitos, trazabilidad y control de cambios.',
                contenidos: [
                    'Validación vs Verificación de requisitos: diferencias y técnicas',
                    'Revisiones formales: inspecciones, walkthroughs, peer reviews',
                    'Validación con prototipos: de baja a alta fidelidad',
                    'Trazabilidad de requisitos: forward, backward, bidireccional',
                    'Matrices de trazabilidad: requisito → diseño → código → test',
                    'Gestión del cambio: CCB (Change Control Board), workflow de cambios',
                    'Herramientas de gestión: Jira, Azure DevOps, Confluence',
                    'Líneas base y versionamiento de requisitos',
                    'Métricas de requisitos: volatilidad, cobertura, completitud',
                    'Integración de requisitos en metodologías ágiles: Product Backlog refinement'
                ],
                actividades: [
                    'Conducción de sesión de validación con stakeholders simulados',
                    'Creación de matriz de trazabilidad bidireccional',
                    'Simulación de proceso de gestión de cambios',
                    'Configuración de proyecto de requisitos en Jira/Azure DevOps',
                    'Análisis de métricas de requisitos en proyecto real',
                    'Proyecto integrador: SRS completo con trazabilidad y validación'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Jira', icon: 'jira-plain', iconType: 'devicon' },
            { nombre: 'Azure DevOps', icon: 'azure-plain', iconType: 'devicon' },
            { nombre: 'Figma', icon: 'figma-plain', iconType: 'devicon' },
            { nombre: 'Draw.io', icon: 'fa-project-diagram', iconType: 'fontawesome' },
            { nombre: 'Notion', icon: 'notion-plain', iconType: 'devicon' },
            { nombre: 'Miro', icon: 'fa-object-group', iconType: 'fontawesome' },
            { nombre: 'Confluence', icon: 'confluence-plain', iconType: 'devicon' },
            { nombre: 'Lucidchart', icon: 'fa-sitemap', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Ejercicios de elicitación', ponderacion: 0, descripcion: 'Práctica de técnicas' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Elicitación y análisis' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Especificación y modelado' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto SRS completo' }
        ],
        prerrequisitos: [],
        conexiones: ['Ing. Software I', 'Ing. Software II', 'Gestión de Proyectos'],
        recursos: [
            { tipo: 'Estándar', nombre: 'IEEE 830 / ISO 29148 Standard', url: 'https://standards.ieee.org/' },
            { tipo: 'Libro', nombre: 'Software Requirements - Karl Wiegers', url: 'https://www.processimpact.com/books.html' },
            { tipo: 'Tutorial', nombre: 'User Story Mapping - Jeff Patton', url: 'https://www.jpattonassociates.com/user-story-mapping/' },
            { tipo: 'Herramienta', nombre: 'Jira Software Guide', url: 'https://www.atlassian.com/software/jira/guides' },
            { tipo: 'Video', nombre: 'Requirements Engineering Course - Udacity', url: 'https://www.udacity.com/course/software-architecture-design--ud821' },
            { tipo: 'Curso', nombre: 'Business Analysis - IIBA', url: 'https://www.iiba.org/' },
            { tipo: 'Guía', nombre: 'Atlassian Agile Requirements', url: 'https://www.atlassian.com/agile/product-management/requirements' },
            { tipo: 'Plantilla', nombre: 'SRS Template - IEEE', url: 'https://www.templatelab.com/srs-software-requirements-specification/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-05%20-%20SQL%20Avanzado%2C%20Cloud%20Native/Ingenieria%20de%20Requisitos' }
        ],
        color: 'purple',
        area: 'gestion',
        palabrasClave: [
            'Requirements Engineering', 'Elicitación', 'User Stories', 'Use Cases',
            'IEEE 830 SRS', 'Stakeholders', 'MoSCoW Prioritization', 'Gherkin',
            'BDD', 'User Story Mapping', 'Acceptance Criteria', 'Jira', 'Miro'
        ]
    },

    // =============================================
    // BIMESTRE 06 - BACKEND I & ING. SOFTWARE I
    // =============================================

    // BKE6201 - Backend I
    'backend-i': {
        id: 'backend-i',
        codigo: 'BKE6201',
        nombre: 'Desarrollo Backend I',
        nombreCorto: 'Backend I',
        bimestre: 6,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que introduce el desarrollo profesional de APIs REST con Spring Boot, incluyendo arquitectura de capas, inyección de dependencias, persistencia con JPA/Hibernate, validación robusta, manejo de excepciones y documentación con OpenAPI/Swagger para construir servicios backend escalables.',
        proposito: 'Capacitar al estudiante en el desarrollo de servicios backend robustos y mantenibles utilizando Spring Boot, aplicando patrones de arquitectura empresarial, buenas prácticas de diseño de APIs REST y técnicas de persistencia con Spring Data JPA.',
        objetivos: [
            'Comprender la arquitectura de Spring Framework y Spring Boot',
            'Desarrollar APIs REST siguiendo principios RESTful y mejores prácticas',
            'Implementar persistencia de datos con Spring Data JPA e Hibernate',
            'Aplicar arquitectura de capas (Controller-Service-Repository)',
            'Implementar validación robusta y manejo global de excepciones',
            'Documentar APIs profesionalmente con OpenAPI 3.0 y Swagger'
        ],
        competencias: [
            'Dominio de Spring Boot: auto-configuración, starters, properties',
            'Diseño e implementación de APIs REST según mejores prácticas',
            'Modelado de entidades JPA con relaciones complejas',
            'Implementación de arquitectura de capas desacoplada',
            'Uso de DTOs, validación y mapeo con MapStruct/ModelMapper',
            'Manejo global de excepciones con @ControllerAdvice',
            'Documentación de APIs con OpenAPI 3.0 y Swagger UI',
            'Testing de APIs con Postman y Spring MockMvc'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos Spring Boot y APIs REST',
                semanas: 'Semana 1-3',
                descripcion: 'Introducción al ecosistema Spring y desarrollo de APIs REST.',
                contenidos: [
                    'Spring Framework: IoC container, ApplicationContext, beans',
                    'Inyección de dependencias: @Autowired, constructor injection (best practice)',
                    'Spring Boot: auto-configuration, starters, application.properties/yml',
                    'Spring Initializr: creación y estructura de proyectos',
                    '@RestController vs @Controller: diferencias y usos',
                    'Mapping de endpoints: @GetMapping, @PostMapping, @PutMapping, @DeleteMapping',
                    '@RequestBody, @PathVariable, @RequestParam, @RequestHeader',
                    'ResponseEntity: control de status codes y headers',
                    'Content negotiation: JSON, XML con Jackson',
                    'CORS configuration: @CrossOrigin y configuración global'
                ],
                actividades: [
                    'Creación de proyecto Spring Boot con Spring Initializr',
                    'Implementación de API REST CRUD completa para entidad simple',
                    'Configuración de diferentes perfiles (dev, prod)',
                    'Testing manual de endpoints con Postman y cURL',
                    'Implementación de paginación y sorting en endpoints GET',
                    'Proyecto: API REST de gestión de productos con categorías'
                ]
            },
            {
                numero: 2,
                titulo: 'Persistencia con Spring Data JPA',
                semanas: 'Semana 4-5',
                descripcion: 'Acceso a datos con JPA/Hibernate y arquitectura de capas.',
                contenidos: [
                    'JPA vs Hibernate: especificación vs implementación',
                    'Entidades: @Entity, @Table, @Id, @GeneratedValue strategies',
                    'Mapeo de columnas: @Column, @Enumerated, @Temporal, @Lob',
                    'Relaciones: @OneToOne, @OneToMany, @ManyToOne, @ManyToMany',
                    'Fetch types: EAGER vs LAZY, problema N+1, @EntityGraph',
                    'Cascade types y orphan removal',
                    'Spring Data JPA: JpaRepository, PagingAndSortingRepository',
                    'Query Methods: findBy, countBy, existsBy, naming conventions',
                    '@Query con JPQL y native queries, @Param',
                    'Arquitectura de capas: Controller → Service → Repository'
                ],
                actividades: [
                    'Modelado de entidades JPA con relaciones complejas',
                    'Implementación de repositorios con query methods',
                    'Creación de capa Service con lógica de negocio',
                    'Solución del problema N+1 con @EntityGraph',
                    'Implementación de búsquedas dinámicas con Specifications',
                    'Proyecto: Sistema de órdenes con clientes y productos'
                ]
            },
            {
                numero: 3,
                titulo: 'DTOs, Validación, Excepciones y Documentación',
                semanas: 'Semana 6-8',
                descripcion: 'Robustez de APIs, patrones DTO y documentación profesional.',
                contenidos: [
                    'DTOs: por qué usarlos, patrones de diseño (Request/Response DTOs)',
                    'Mapeo DTO-Entity: MapStruct, ModelMapper, manual mapping',
                    'Bean Validation (JSR-380): @Valid, @NotNull, @NotBlank, @Size, @Email',
                    'Validaciones personalizadas: @Constraint, ConstraintValidator',
                    'Validación de grupos: @Validated con grupos de validación',
                    '@ControllerAdvice y @ExceptionHandler para manejo global',
                    'Problem Details (RFC 7807) para respuestas de error estandarizadas',
                    'OpenAPI 3.0 y Swagger UI: springdoc-openapi',
                    'Anotaciones de documentación: @Operation, @ApiResponse, @Schema',
                    'Versionamiento de APIs: URI path, header, query param'
                ],
                actividades: [
                    'Refactoring a DTOs con MapStruct para entidades existentes',
                    'Implementación de validaciones en DTOs de request',
                    'Creación de validador personalizado (ej: RUT chileno)',
                    'Sistema de excepciones con respuestas estandarizadas',
                    'Documentación completa de API con Swagger/OpenAPI',
                    'Proyecto integrador: API REST empresarial documentada'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Spring Boot', icon: 'spring-plain', iconType: 'devicon' },
            { nombre: 'Java', icon: 'java-plain', iconType: 'devicon' },
            { nombre: 'PostgreSQL', icon: 'postgresql-plain', iconType: 'devicon' },
            { nombre: 'Hibernate', icon: 'hibernate-plain', iconType: 'devicon' },
            { nombre: 'Maven', icon: 'maven-plain', iconType: 'devicon' },
            { nombre: 'Swagger', icon: 'swagger-plain', iconType: 'devicon' },
            { nombre: 'Postman', icon: 'postman-plain', iconType: 'devicon' },
            { nombre: 'IntelliJ IDEA', icon: 'intellij-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Spring Boot', ponderacion: 0, descripcion: 'Prácticas guiadas' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'API REST básica' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Persistencia JPA' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'API completa documentada' }
        ],
        prerrequisitos: ['POO II', 'SQL Consultas'],
        conexiones: ['Backend II-III', 'Frontend I-II', 'Arquitectura Software'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Spring Boot Reference', url: 'https://docs.spring.io/spring-boot/docs/current/reference/html/' },
            { tipo: 'Tutorial', nombre: 'Baeldung - Spring Tutorials', url: 'https://www.baeldung.com/spring-boot' },
            { tipo: 'Herramienta', nombre: 'Spring Initializr', url: 'https://start.spring.io/' },
            { tipo: 'Video', nombre: 'Spring Boot Full Course - Amigoscode', url: 'https://www.youtube.com/watch?v=9SGDpanrc8U' },
            { tipo: 'Curso', nombre: 'Spring Boot Masterclass - Udemy', url: 'https://www.udemy.com/course/spring-hibernate-tutorial/' },
            { tipo: 'Documentación', nombre: 'Spring Data JPA Reference', url: 'https://docs.spring.io/spring-data/jpa/docs/current/reference/html/' },
            { tipo: 'Guía', nombre: 'OpenAPI/Swagger Guide', url: 'https://springdoc.org/' },
            { tipo: 'Práctica', nombre: 'Spring Boot REST API Best Practices', url: 'https://www.baeldung.com/rest-with-spring-series' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-06%20-%20Backend%20I%2C%20Ing.%20Software%20I/Backend%20I' }
        ],
        color: 'green',
        area: 'programacion',
        palabrasClave: [
            'Spring Boot 3', 'REST API', 'JPA', 'Hibernate',
            'Microservices', 'DTOs', 'Bean Validation', 'OpenAPI/Swagger',
            'Dependency Injection', 'Maven', 'Layered Architecture', 'Lombok'
        ]
    },

    // ISW6201 - Ingeniería de Software I
    'ingenieria-software-i': {
        id: 'ingenieria-software-i',
        codigo: 'ISW6201',
        nombre: 'Ingeniería de Software I',
        nombreCorto: 'Ing. Software I',
        bimestre: 6,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que introduce metodologías ágiles con énfasis en el framework Scrum, gestión de proyectos de software, técnicas de estimación, planificación y seguimiento de sprints, y el uso de herramientas profesionales para la gestión efectiva de equipos de desarrollo.',
        proposito: 'Capacitar al estudiante en la aplicación práctica de metodologías ágiles, especialmente Scrum, para la gestión efectiva de proyectos de desarrollo de software, desarrollando habilidades de facilitación, estimación y uso de herramientas de gestión ágil.',
        objetivos: [
            'Comprender los principios y valores del Manifiesto Ágil',
            'Aplicar el framework Scrum completo en proyectos de software',
            'Gestionar eficientemente el Product Backlog y Sprint Backlog',
            'Realizar estimación ágil con técnicas como Planning Poker',
            'Facilitar ceremonias Scrum de manera efectiva',
            'Utilizar herramientas profesionales de gestión ágil'
        ],
        competencias: [
            'Comprensión profunda del Manifiesto Ágil y sus principios',
            'Dominio del framework Scrum: roles, eventos y artefactos',
            'Facilitación efectiva de ceremonias Scrum',
            'Técnicas de estimación ágil: Planning Poker, T-shirt, affinity',
            'Gestión de Product Backlog y Sprint Backlog',
            'Análisis de métricas ágiles: velocity, burndown, cycle time',
            'Configuración y uso de Jira/Azure DevOps para Scrum',
            'Conducción de retrospectivas efectivas y mejora continua'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos Ágiles y Framework Scrum',
                semanas: 'Semana 1-3',
                descripcion: 'Principios del Manifiesto Ágil y estructura del framework Scrum.',
                contenidos: [
                    'Historia del desarrollo de software: cascada, iterativo, ágil',
                    'Manifiesto Ágil: los 4 valores y 12 principios',
                    'Comparación: metodologías tradicionales vs ágiles (cuando usar cada una)',
                    'Framework Scrum: teoría, pilares (transparencia, inspección, adaptación)',
                    'Roles Scrum: Product Owner (responsabilidades y accountabilities)',
                    'Roles Scrum: Scrum Master (servant-leader, facilitador, coach)',
                    'Roles Scrum: Development Team (auto-organizado, cross-functional)',
                    'Eventos Scrum: Sprint (timebox, incremento potencialmente entregable)',
                    'Eventos Scrum: Sprint Planning (qué y cómo, Sprint Goal)',
                    'Eventos Scrum: Daily Scrum, Sprint Review, Sprint Retrospective'
                ],
                actividades: [
                    'Análisis de caso de éxito de adopción ágil en empresa real',
                    'Role-playing de roles Scrum con escenarios conflictivos',
                    'Simulación de Sprint Planning con Product Owner',
                    'Práctica de Daily Scrum con impedimentos reales',
                    'Conducción de Sprint Review con stakeholders simulados',
                    'Proyecto: Definición de equipo Scrum para caso de estudio'
                ]
            },
            {
                numero: 2,
                titulo: 'Gestión del Backlog y Técnicas de Estimación',
                semanas: 'Semana 4-5',
                descripcion: 'Product Backlog, User Stories, y técnicas de estimación ágil.',
                contenidos: [
                    'Product Backlog: características, ordenamiento, refinamiento continuo',
                    'User Stories: estructura "Como... quiero... para...", criterios INVEST',
                    'Criterios de aceptación: formato Given-When-Then (Gherkin)',
                    'Épicas, Features, User Stories, Tasks: jerarquía y descomposición',
                    'Definition of Ready (DoR) y Definition of Done (DoD)',
                    'Técnicas de estimación: Planning Poker (secuencia Fibonacci)',
                    'Técnicas de estimación: T-shirt sizing, affinity mapping',
                    'Story Points vs horas: por qué usar puntos relativos',
                    'Velocity: cálculo, estabilización, forecasting',
                    'Sprint Backlog: selección, compromiso, Sprint Goal'
                ],
                actividades: [
                    'Creación de Product Backlog desde visión de producto',
                    'Redacción de User Stories con criterios INVEST',
                    'Definición de DoR y DoD para equipo de desarrollo',
                    'Sesión de Planning Poker con equipo real',
                    'Cálculo de velocity y proyección de releases',
                    'Proyecto: Backlog refinement completo para MVP'
                ]
            },
            {
                numero: 3,
                titulo: 'Herramientas, Métricas y Mejora Continua',
                semanas: 'Semana 6-8',
                descripcion: 'Herramientas de gestión, métricas ágiles y retrospectivas efectivas.',
                contenidos: [
                    'Jira: configuración de proyecto Scrum, workflows, screens',
                    'Tableros Scrum y Kanban: diseño, columnas, WIP limits',
                    'Azure DevOps Boards: alternativa a Jira, integración con código',
                    'Burndown Chart: lectura, interpretación, señales de alerta',
                    'Burnup Chart y Cumulative Flow Diagram',
                    'Métricas de flujo: Lead Time, Cycle Time, Throughput',
                    'Velocity tracking y capacidad del equipo',
                    'Retrospectivas efectivas: formatos (Start-Stop-Continue, 4Ls, Starfish)',
                    'Facilitación de retrospectivas: ambiente seguro, accionables',
                    'Mejora continua: Kaizen, experimentos, hypothesis-driven development'
                ],
                actividades: [
                    'Configuración completa de proyecto Scrum en Jira',
                    'Creación de tablero Scrum con swimlanes y filtros',
                    'Análisis de burndown chart con escenarios problemáticos',
                    'Cálculo e interpretación de métricas de flujo',
                    'Facilitación de retrospectiva con formato seleccionado',
                    'Proyecto integrador: Sprint completo simulado con métricas'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Jira', icon: 'jira-plain', iconType: 'devicon' },
            { nombre: 'Confluence', icon: 'confluence-plain', iconType: 'devicon' },
            { nombre: 'Azure DevOps', icon: 'azure-plain', iconType: 'devicon' },
            { nombre: 'Trello', icon: 'trello-plain', iconType: 'devicon' },
            { nombre: 'Miro', icon: 'fa-chalkboard', iconType: 'fontawesome' },
            { nombre: 'Notion', icon: 'notion-plain', iconType: 'devicon' },
            { nombre: 'Slack', icon: 'slack-plain', iconType: 'devicon' },
            { nombre: 'Microsoft Teams', icon: 'fa-users', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Simulaciones Scrum', ponderacion: 0, descripcion: 'Práctica de ceremonias' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Fundamentos Scrum' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Gestión de Backlog' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto Sprint completo' }
        ],
        prerrequisitos: ['Ing. Requisitos'],
        conexiones: ['Ing. Software II', 'Arquitectura Software', 'Gestión de Proyectos'],
        recursos: [
            { tipo: 'Guía', nombre: 'The Scrum Guide (Official)', url: 'https://scrumguides.org/' },
            { tipo: 'Certificación', nombre: 'Scrum.org - PSM I', url: 'https://www.scrum.org/assessments/professional-scrum-master-i-certification' },
            { tipo: 'Tutorial', nombre: 'Atlassian Agile Coach', url: 'https://www.atlassian.com/agile' },
            { tipo: 'Video', nombre: 'Scrum in 16 Minutes', url: 'https://www.youtube.com/watch?v=vuBFzAdaHDY' },
            { tipo: 'Curso', nombre: 'Agile with Atlassian Jira - Coursera', url: 'https://www.coursera.org/learn/agile-atlassian-jira' },
            { tipo: 'Libro', nombre: 'Scrum: The Art of Doing Twice the Work', url: 'https://www.scruminc.com/new-scrum-the-book/' },
            { tipo: 'Práctica', nombre: 'Scrum Simulation - Lego4Scrum', url: 'https://www.lego4scrum.com/' },
            { tipo: 'Herramienta', nombre: 'Planning Poker Online', url: 'https://www.planningpoker.com/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-06%20-%20Backend%20I%2C%20Ing.%20Software%20I/Ingenieria%20Software%20I' }
        ],
        color: 'purple',
        area: 'gestion',
        palabrasClave: [
            'Scrum Framework', 'Agile Methodologies', 'Sprint Planning', 'Product Backlog',
            'Jira', 'Planning Poker', 'Sprint Retrospective', 'Velocity',
            'Burndown Chart', 'Product Owner', 'Scrum Master', 'Daily Standup'
        ]
    },

    // =============================================
    // BIMESTRE 07 - BACKEND II-III & ING. SOFTWARE II
    // =============================================

    // BKE7201 - Backend II-III
    'backend-ii-iii': {
        id: 'backend-ii-iii',
        codigo: 'BKE7201',
        nombre: 'Desarrollo Backend II-III',
        nombreCorto: 'Backend II-III',
        bimestre: 7,
        creditos: 6,
        horasTeoricas: 2,
        horasPracticas: 6,
        descripcion: 'Asignatura avanzada de backend que cubre seguridad empresarial con Spring Security, autenticación/autorización con JWT y OAuth2, testing automatizado con JUnit/Mockito, caching con Redis, mensajería asíncrona con RabbitMQ/Kafka, y patrones avanzados de arquitectura para construir APIs robustas y escalables.',
        proposito: 'Desarrollar competencias avanzadas en desarrollo backend empresarial, incluyendo implementación de seguridad robusta, testing automatizado integral, optimización de rendimiento con caching, y comunicación asíncrona para construir APIs de alta disponibilidad.',
        objetivos: [
            'Implementar autenticación y autorización empresarial con Spring Security',
            'Aplicar JWT y OAuth2/OpenID Connect para APIs stateless seguras',
            'Desarrollar testing unitario, integración y E2E automatizado',
            'Implementar patrones avanzados de backend y optimización',
            'Aplicar caching distribuido y optimización de rendimiento',
            'Integrar mensajería asíncrona para sistemas desacoplados'
        ],
        competencias: [
            'Implementación de seguridad con Spring Security y filtros personalizados',
            'Autenticación stateless con JWT: generación, validación, refresh tokens',
            'Integración OAuth2/OpenID Connect con proveedores externos',
            'Testing unitario con JUnit 5 y mocking con Mockito',
            'Testing de integración con @SpringBootTest y Testcontainers',
            'Implementación de caching distribuido con Redis',
            'Mensajería asíncrona con RabbitMQ y/o Apache Kafka',
            'Análisis de calidad de código con SonarQube'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Seguridad Empresarial con Spring Security',
                semanas: 'Semana 1-3',
                descripcion: 'Autenticación y autorización robusta para APIs empresariales.',
                contenidos: [
                    'Spring Security: arquitectura, SecurityFilterChain, filtros',
                    'Autenticación: form-based, HTTP Basic, custom authentication',
                    'JWT (JSON Web Tokens): estructura (header.payload.signature)',
                    'Generación de JWT: claims, expiración, signing con secret/RSA',
                    'Validación de JWT: JwtDecoder, filtro de autenticación',
                    'Refresh tokens: rotación segura, almacenamiento',
                    'Autorización: roles vs authorities, @PreAuthorize, @Secured',
                    'Method security: expresiones SpEL para permisos granulares',
                    'OAuth2 Resource Server: validación de tokens externos',
                    'OpenID Connect: integración con Google, Keycloak, Auth0'
                ],
                actividades: [
                    'Implementación completa de login/registro con JWT',
                    'Sistema de roles y permisos con base de datos',
                    'Refresh token rotation con invalidación de tokens anteriores',
                    'Protección de endpoints por rol y permiso específico',
                    'Integración OAuth2 con proveedor externo (Google/GitHub)',
                    'Proyecto: Sistema de autenticación multi-tenant'
                ]
            },
            {
                numero: 2,
                titulo: 'Testing Automatizado y Calidad de Código',
                semanas: 'Semana 4-5',
                descripcion: 'Testing integral y métricas de calidad de software.',
                contenidos: [
                    'JUnit 5: @Test, @ParameterizedTest, @Nested, lifecycle callbacks',
                    'Assertions avanzadas: assertAll, assertThrows, assertTimeout',
                    'Mockito: @Mock, @Spy, @InjectMocks, argument matchers',
                    'when/thenReturn, doThrow, verify interactions',
                    'Testing de controllers: MockMvc, @WebMvcTest',
                    'Testing de repositorios: @DataJpaTest, H2 in-memory',
                    'Testing de integración: @SpringBootTest, TestRestTemplate',
                    'Testcontainers: PostgreSQL, Redis, RabbitMQ en Docker',
                    'Cobertura de código: JaCoCo, reportes, umbrales',
                    'SonarQube: análisis estático, code smells, security hotspots'
                ],
                actividades: [
                    'Suite completa de tests unitarios para capa Service',
                    'Tests de controllers con MockMvc y seguridad',
                    'Tests de integración con Testcontainers',
                    'Configuración de JaCoCo con umbral mínimo 80%',
                    'Análisis de proyecto con SonarQube local',
                    'Proyecto: Pipeline de CI con quality gates'
                ]
            },
            {
                numero: 3,
                titulo: 'Caching, Mensajería y Patrones Avanzados',
                semanas: 'Semana 6-8',
                descripcion: 'Optimización de rendimiento y comunicación asíncrona.',
                contenidos: [
                    'Spring Cache abstraction: @Cacheable, @CacheEvict, @CachePut',
                    'Redis como cache distribuido: configuración, serialización',
                    'Estrategias de cache: TTL, LRU, write-through, write-behind',
                    'RabbitMQ: exchanges, queues, bindings, acknowledgments',
                    'Apache Kafka: topics, partitions, consumer groups, offsets',
                    'Patrón Specification para queries dinámicos complejos',
                    'Auditoría con Spring Data Envers: historial de cambios',
                    'Scheduling: @Scheduled, cron expressions, distributed locks',
                    'WebSockets con STOMP: tiempo real bidireccional',
                    'Rate limiting y throttling con Bucket4j/Resilience4j'
                ],
                actividades: [
                    'Implementación de cache Redis para entidades frecuentes',
                    'Sistema de eventos con RabbitMQ (notificaciones)',
                    'Consumer Kafka para procesamiento de eventos',
                    'Búsqueda dinámica con Specifications',
                    'Chat en tiempo real con WebSockets',
                    'Proyecto integrador: API empresarial con seguridad, cache y eventos'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Spring Boot', icon: 'spring-plain', iconType: 'devicon' },
            { nombre: 'Redis', icon: 'redis-plain', iconType: 'devicon' },
            { nombre: 'RabbitMQ', icon: 'rabbitmq-plain', iconType: 'devicon' },
            { nombre: 'Kafka', icon: 'apachekafka-original', iconType: 'devicon' },
            { nombre: 'JUnit', icon: 'junit-plain', iconType: 'devicon' },
            { nombre: 'Mockito', icon: 'fa-check-double', iconType: 'fontawesome' },
            { nombre: 'SonarQube', icon: 'sonarqube-plain', iconType: 'devicon' },
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs de seguridad', ponderacion: 0, descripcion: 'Prácticas de Spring Security' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Seguridad y JWT' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Testing automatizado' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'API empresarial' }
        ],
        prerrequisitos: ['Backend I'],
        conexiones: ['Arquitectura Software', 'Cloud Native', 'Frontend I-II'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Spring Security Reference', url: 'https://docs.spring.io/spring-security/reference/' },
            { tipo: 'Tutorial', nombre: 'JWT.io - Introduction', url: 'https://jwt.io/introduction' },
            { tipo: 'Video', nombre: 'Spring Security JWT - Amigoscode', url: 'https://www.youtube.com/watch?v=KxqlJblhzfI' },
            { tipo: 'Curso', nombre: 'Testing Spring Boot Apps - Baeldung', url: 'https://www.baeldung.com/spring-boot-testing' },
            { tipo: 'Documentación', nombre: 'Mockito Framework', url: 'https://site.mockito.org/' },
            { tipo: 'Guía', nombre: 'Testcontainers for Java', url: 'https://testcontainers.com/guides/getting-started-with-testcontainers-for-java/' },
            { tipo: 'Tutorial', nombre: 'Redis with Spring Boot', url: 'https://www.baeldung.com/spring-data-redis-tutorial' },
            { tipo: 'Video', nombre: 'RabbitMQ Tutorial - Amigoscode', url: 'https://www.youtube.com/watch?v=hfUIWe1tK8E' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-07%20-%20Backend%20II-III%2C%20Ing.%20Software%20II/Backend%20II-III' }
        ],
        color: 'green',
        area: 'programacion',
        palabrasClave: [
            'Spring Security', 'JWT', 'OAuth 2.0', 'JUnit 5',
            'Mockito', 'Redis Cache', 'RabbitMQ', 'Apache Kafka',
            'Async Messaging', 'SonarQube', 'Code Coverage', 'Integration Testing'
        ]
    },

    // ISW7201 - Ingeniería de Software II
    'ingenieria-software-ii': {
        id: 'ingenieria-software-ii',
        codigo: 'ISW7201',
        nombre: 'Ingeniería de Software II',
        nombreCorto: 'Ing. Software II',
        bimestre: 7,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que profundiza en calidad de software, testing avanzado con múltiples frameworks, automatización de pruebas E2E, testing de rendimiento y seguridad, integración continua con quality gates, y mejora continua de procesos de desarrollo según estándares ISTQB.',
        proposito: 'Desarrollar competencias integrales en aseguramiento de calidad de software, incluyendo diseño de estrategias de testing, automatización con frameworks modernos, testing de rendimiento y seguridad, y gestión de calidad en pipelines CI/CD para entregar software de alta calidad.',
        objetivos: [
            'Aplicar técnicas avanzadas de diseño de casos de prueba',
            'Implementar estrategias de testing automatizado con múltiples frameworks',
            'Configurar pipelines de CI/CD con quality gates',
            'Aplicar métricas de calidad de software según estándares',
            'Gestionar defectos y aplicar mejora continua',
            'Implementar testing de rendimiento y seguridad básico'
        ],
        competencias: [
            'Diseño de estrategias de testing según niveles y tipos de prueba',
            'Implementación de TDD (Test-Driven Development) y BDD',
            'Automatización de pruebas E2E con Selenium, Cypress y Playwright',
            'Testing de APIs con REST Assured y Postman',
            'Testing de rendimiento con JMeter y Gatling',
            'Configuración de quality gates en pipelines CI/CD',
            'Análisis de métricas de calidad: coverage, defect density, MTTR',
            'Gestión de defectos y trazabilidad con Jira/Azure DevOps'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Estrategias de Testing y TDD/BDD',
                semanas: 'Semana 1-3',
                descripcion: 'Niveles de testing, diseño de casos de prueba y desarrollo guiado por tests.',
                contenidos: [
                    'Fundamentos ISTQB: niveles de testing (unit, integration, system, acceptance)',
                    'Tipos de testing: funcional, no funcional, regresión, smoke, sanity',
                    'Técnicas de caja negra: partición de equivalencia, valores límite, decision table',
                    'Técnicas de caja blanca: statement, branch, path coverage',
                    'Testing basado en riesgos: priorización y matriz de riesgos',
                    'Test-Driven Development (TDD): Red-Green-Refactor cycle',
                    'Behavior-Driven Development (BDD): Given-When-Then, Gherkin syntax',
                    'Cucumber: features, steps, hooks, data tables',
                    'Estrategia de testing: test plan, test cases, traceability matrix',
                    'Testing exploratorio: session-based, charters, heurísticas'
                ],
                actividades: [
                    'Diseño de plan de pruebas para sistema e-commerce',
                    'Creación de test cases con técnicas de caja negra',
                    'Implementación de feature completa con TDD',
                    'Desarrollo de escenarios BDD con Cucumber',
                    'Matriz de trazabilidad requisitos → tests',
                    'Proyecto: Estrategia de testing para proyecto real'
                ]
            },
            {
                numero: 2,
                titulo: 'Automatización de Pruebas E2E y API',
                semanas: 'Semana 4-5',
                descripcion: 'Frameworks de automatización para UI y API testing.',
                contenidos: [
                    'Selenium WebDriver: locators, waits, WebDriverWait',
                    'Page Object Model (POM): encapsulación, Page Factory',
                    'Cypress: comandos, intercepts, fixtures, custom commands',
                    'Playwright: multi-browser, codegen, trace viewer',
                    'REST Assured: given/when/then, response validation, authentication',
                    'Postman/Newman: collections, environments, pre-request scripts',
                    'Data-driven testing: parametrización, external data sources',
                    'Cross-browser testing: BrowserStack, Sauce Labs',
                    'Visual regression testing: Percy, Chromatic',
                    'Reporting: Allure, ExtentReports, video recording'
                ],
                actividades: [
                    'Suite de tests E2E con Selenium y POM',
                    'Tests de UI con Cypress para SPA React',
                    'Automatización multi-browser con Playwright',
                    'Suite de API tests con REST Assured',
                    'Data-driven tests con archivos externos',
                    'Proyecto: Framework de automatización reutilizable'
                ]
            },
            {
                numero: 3,
                titulo: 'Performance Testing, Seguridad y Quality Gates',
                semanas: 'Semana 6-8',
                descripcion: 'Testing no funcional, métricas de calidad y pipelines de CI/CD.',
                contenidos: [
                    'Performance testing: load, stress, spike, soak testing',
                    'JMeter: thread groups, samplers, listeners, assertions',
                    'Gatling: simulaciones en Scala, reports detallados',
                    'Métricas de performance: response time, throughput, error rate',
                    'Security testing básico: OWASP ZAP, vulnerability scanning',
                    'Métricas de calidad: code coverage, defect density, MTTR, escape rate',
                    'Quality Gates: SonarQube, thresholds, políticas de calidad',
                    'CI/CD integration: test stages, parallel execution, fail fast',
                    'Gestión de defectos: severidad, prioridad, workflow, SLA',
                    'Mejora continua: retrospectivas de calidad, action items'
                ],
                actividades: [
                    'Plan de load testing con objetivos de rendimiento',
                    'Ejecución de tests de carga con JMeter',
                    'Escaneo de vulnerabilidades con OWASP ZAP',
                    'Configuración de quality gates en SonarQube',
                    'Pipeline CI/CD con stages de testing',
                    'Proyecto integrador: Plan de calidad completo con métricas'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Selenium', icon: 'selenium-original', iconType: 'devicon' },
            { nombre: 'Cypress', icon: 'fa-vial', iconType: 'fontawesome' },
            { nombre: 'Playwright', icon: 'playwright-plain', iconType: 'devicon' },
            { nombre: 'Cucumber', icon: 'cucumber-plain', iconType: 'devicon' },
            { nombre: 'JMeter', icon: 'fa-tachometer-alt', iconType: 'fontawesome' },
            { nombre: 'Postman', icon: 'postman-plain', iconType: 'devicon' },
            { nombre: 'SonarQube', icon: 'sonarqube-plain', iconType: 'devicon' },
            { nombre: 'GitHub Actions', icon: 'githubactions-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs de testing', ponderacion: 0, descripcion: 'Práctica de automatización' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Estrategias de testing' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Automatización E2E' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Plan de calidad' }
        ],
        prerrequisitos: ['Ing. Software I'],
        conexiones: ['Arquitectura Software', 'DevOps', 'Seguridad y Calidad'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Selenium WebDriver', url: 'https://www.selenium.dev/documentation/' },
            { tipo: 'Tutorial', nombre: 'Cypress Documentation', url: 'https://docs.cypress.io/' },
            { tipo: 'Documentación', nombre: 'Playwright Docs', url: 'https://playwright.dev/docs/intro' },
            { tipo: 'Video', nombre: 'Playwright Full Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=VELWdMWQN8c' },
            { tipo: 'Herramienta', nombre: 'Apache JMeter', url: 'https://jmeter.apache.org/usermanual/index.html' },
            { tipo: 'Certificación', nombre: 'ISTQB Foundation Level', url: 'https://www.istqb.org/certifications/certified-tester-foundation-level' },
            { tipo: 'Libro', nombre: 'Agile Testing - Lisa Crispin', url: 'https://agiletester.ca/' },
            { tipo: 'Tutorial', nombre: 'REST Assured Guide', url: 'https://rest-assured.io/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-07%20-%20Backend%20II-III%2C%20Ing.%20Software%20II/Ingenieria%20Software%20II' }
        ],
        color: 'purple',
        area: 'gestion',
        palabrasClave: [
            'QA Testing', 'Selenium WebDriver', 'Cypress', 'Playwright',
            'TDD', 'BDD', 'Cucumber', 'JMeter', 'Performance Testing',
            'Quality Gates', 'CI/CD', 'Code Coverage', 'Test Automation'
        ]
    },

    // =============================================
    // BIMESTRE 08 - FRONTEND I-II & ARQUITECTURA
    // =============================================

    // FRE8201 - Frontend I-II
    'frontend-i-ii': {
        id: 'frontend-i-ii',
        codigo: 'FRE8201',
        nombre: 'Desarrollo Frontend I-II',
        nombreCorto: 'Frontend I-II',
        bimestre: 8,
        creditos: 6,
        horasTeoricas: 2,
        horasPracticas: 6,
        descripcion: 'Asignatura que cubre desarrollo frontend moderno con React, incluyendo componentes, estado, hooks, routing y consumo de APIs.',
        proposito: 'Capacitar al estudiante en el desarrollo de interfaces de usuario modernas y reactivas utilizando React y su ecosistema.',
        objetivos: [
            'Dominar los fundamentos de React y JSX',
            'Implementar componentes funcionales con hooks',
            'Gestionar estado global con Context API y Redux',
            'Implementar routing con React Router',
            'Consumir APIs REST desde frontend',
            'Aplicar testing de componentes'
        ],
        competencias: [
            'Dominio de React 18+ y su modelo de componentes funcionales con JSX/TSX',
            'Implementación avanzada de hooks nativos y creación de custom hooks reutilizables',
            'Gestión de estado global con Context API, Redux Toolkit y Zustand',
            'Implementación de routing declarativo con React Router v6 y rutas protegidas',
            'Consumo eficiente de APIs REST con TanStack Query y manejo de cache',
            'Testing de componentes con Vitest, React Testing Library y MSW para mocking',
            'Aplicación de patrones de diseño frontend: compound components, render props, HOCs',
            'Optimización de rendimiento: memoization, code splitting, lazy loading y profiling'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos React y Componentes',
                semanas: 'Semana 1-3',
                descripcion: 'Introducción a React, JSX y componentes.',
                contenidos: [
                    'Arquitectura de React 18+: virtual DOM, fiber, reconciliación y concurrent mode',
                    'JSX/TSX: sintaxis, expresiones JavaScript, fragments y conditional rendering',
                    'Componentes funcionales: estructura, naming conventions, single responsibility',
                    'Sistema de Props: tipado con TypeScript, children, spread props, default values',
                    'useState: estado local, batching de actualizaciones, functional updates',
                    'useEffect: lifecycle, cleanup functions, dependency array, strict mode behavior',
                    'Eventos sintéticos: event handling, event pooling, preventing defaults',
                    'Formularios controlados vs no controlados: onChange, onSubmit, form validation',
                    'Composición de componentes: slots pattern, children manipulation, cloneElement',
                    'Styling en React: CSS modules, styled-components, Tailwind, CSS-in-JS trade-offs'
                ],
                actividades: [
                    'Setup de proyecto con Vite + React + TypeScript + ESLint + Prettier',
                    'Implementación de component library con Storybook para documentación',
                    'Creación de formulario multi-step con validación usando React Hook Form',
                    'Desarrollo de sistema de temas (dark/light mode) con CSS variables',
                    'Implementación de componentes accesibles siguiendo WCAG 2.1 guidelines',
                    'Proyecto parcial: Dashboard de widgets con drag & drop básico'
                ]
            },
            {
                numero: 2,
                titulo: 'Estado Avanzado y Routing',
                semanas: 'Semana 4-5',
                descripcion: 'Gestión de estado y navegación SPA.',
                contenidos: [
                    'useContext: creación de contextos, Provider pattern, consumer optimization',
                    'useReducer: acciones, dispatch, reducer puro, combinación con context',
                    'Custom hooks: extracción de lógica, composición, testing de hooks',
                    'React Router v6: createBrowserRouter, Outlet, loader, action functions',
                    'Navegación programática: useNavigate, useSearchParams, useLocation state',
                    'Rutas protegidas: guards, role-based access, redirect after login flow',
                    'Redux Toolkit: createSlice, configureStore, createAsyncThunk, RTK Query',
                    'Zustand: stores, selectors, persist middleware, devtools integration',
                    'Comparativa state management: Context vs Redux vs Zustand vs Jotai vs Recoil',
                    'URL state: sincronización de estado con query params, deep linking'
                ],
                actividades: [
                    'Implementación de auth context con token refresh y logout automático',
                    'Sistema de navegación completo con breadcrumbs y navegación anidada',
                    'Store de Redux Toolkit con múltiples slices y normalización de datos',
                    'Implementación de feature flags con Zustand y remote config',
                    'Rutas protegidas por rol con lazy loading de módulos por permiso',
                    'Proyecto parcial: Panel de administración con RBAC completo'
                ]
            },
            {
                numero: 3,
                titulo: 'APIs, Testing y Producción',
                semanas: 'Semana 6-8',
                descripcion: 'Integración con backend y preparación para producción.',
                contenidos: [
                    'Fetch API moderno: AbortController, streaming, error handling patterns',
                    'Axios: interceptors, request/response transformation, retry logic',
                    'TanStack Query: queries, mutations, cache invalidation, optimistic updates',
                    'Manejo de estados async: loading skeletons, error boundaries, suspense',
                    'Vitest: configuración, test runners, coverage, snapshot testing',
                    'React Testing Library: queries, user events, async utilities, custom renders',
                    'MSW (Mock Service Worker): handlers, scenarios, testing de integración',
                    'Bundle optimization: tree shaking, code splitting, dynamic imports, bundle analyzer',
                    'Performance profiling: React DevTools, Lighthouse, Core Web Vitals optimization',
                    'Deploy strategies: Vercel, Netlify, CloudFront, environment variables, CI/CD'
                ],
                actividades: [
                    'Integración completa con API REST usando TanStack Query y cache',
                    'Implementación de infinite scroll con virtualización de listas',
                    'Suite de tests unitarios con coverage >80% usando Vitest y RTL',
                    'Tests de integración con MSW simulando escenarios de backend',
                    'Auditoría de performance con mejoras documentadas en Lighthouse',
                    'Proyecto integrador: SPA e-commerce completa con deploy a producción'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'React', icon: 'react-original', iconType: 'devicon' },
            { nombre: 'TypeScript', icon: 'typescript-plain', iconType: 'devicon' },
            { nombre: 'Vite', icon: 'vitejs-plain', iconType: 'devicon' },
            { nombre: 'Tailwind', icon: 'tailwindcss-original', iconType: 'devicon' },
            { nombre: 'Redux', icon: 'redux-original', iconType: 'devicon' },
            { nombre: 'Vitest', icon: 'vitest-plain', iconType: 'devicon' },
            { nombre: 'Storybook', icon: 'storybook-plain', iconType: 'devicon' },
            { nombre: 'Vercel', icon: 'vercel-original', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs React', ponderacion: 0, descripcion: 'Prácticas de componentes' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Componentes y hooks' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Estado y routing' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto SPA' }
        ],
        prerrequisitos: ['POO II'],
        conexiones: ['Frontend III', 'Mobile I', 'Arquitectura Software'],
        recursos: [
            { tipo: 'Documentación', nombre: 'React Documentation', url: 'https://react.dev/' },
            { tipo: 'Tutorial', nombre: 'React Learn (Oficial)', url: 'https://react.dev/learn' },
            { tipo: 'Curso', nombre: 'Epic React by Kent C. Dodds', url: 'https://epicreact.dev/' },
            { tipo: 'Video', nombre: 'React 18 Full Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=bMknfKXIFA8' },
            { tipo: 'Documentación', nombre: 'TanStack Query Docs', url: 'https://tanstack.com/query/latest' },
            { tipo: 'Tutorial', nombre: 'Testing Library Recipes', url: 'https://testing-library.com/docs/react-testing-library/intro/' },
            { tipo: 'Herramienta', nombre: 'Storybook for React', url: 'https://storybook.js.org/docs/react/get-started/introduction' },
            { tipo: 'Práctica', nombre: 'Frontend Mentor Challenges', url: 'https://www.frontendmentor.io/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-08%20-%20Frontend%20I-II%2C%20Arquitectura%20SW/Frontend%20I-II' }
        ],
        color: 'cyan',
        area: 'programacion',
        palabrasClave: [
            'React 18+', 'JavaScript ES6+', 'TypeScript', 'React Hooks',
            'Components', 'SPA', 'State Management', 'React Router',
            'TanStack Query', 'Tailwind CSS', 'Responsive Design', 'Vite'
        ]
    },

    // ARQ8201 - Arquitectura de Software
    'arquitectura-software': {
        id: 'arquitectura-software',
        codigo: 'ARQ8201',
        nombre: 'Arquitectura de Software',
        nombreCorto: 'Arquitectura Software',
        bimestre: 8,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que introduce patrones de arquitectura de software, diseño de sistemas distribuidos y documentación arquitectónica.',
        proposito: 'Desarrollar la capacidad de diseñar y documentar arquitecturas de software escalables, mantenibles y alineadas con los requerimientos del negocio.',
        objetivos: [
            'Comprender los estilos y patrones arquitectónicos',
            'Diseñar arquitecturas de microservicios',
            'Aplicar patrones de diseño de sistemas',
            'Documentar arquitectura con ADRs y C4',
            'Evaluar trade-offs arquitectónicos',
            'Implementar patrones de resiliencia'
        ],
        competencias: [
            'Dominio de estilos arquitectónicos: monolito modular, microservicios, serverless, event-driven',
            'Diseño de sistemas distribuidos aplicando patrones de resiliencia y escalabilidad',
            'Implementación de Clean Architecture, Hexagonal Architecture y Onion Architecture',
            'Aplicación de Domain-Driven Design: bounded contexts, agregados, domain events',
            'Documentación arquitectónica profesional con modelo C4 y ADRs',
            'Evaluación de trade-offs arquitectónicos usando fitness functions y métricas',
            'Diseño de APIs y contratos: REST maturity model, GraphQL, gRPC, API versioning',
            'Aplicación de patrones de integración empresarial y messaging patterns'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos de Arquitectura',
                semanas: 'Semana 1-3',
                descripcion: 'Estilos arquitectónicos y principios de diseño.',
                contenidos: [
                    'Rol del arquitecto de software: responsabilidades, habilidades, career path',
                    'Atributos de calidad (ISO 25010): escalabilidad, mantenibilidad, disponibilidad, seguridad',
                    'Estilos arquitectónicos: monolito, monolito modular, capas, microservicios, serverless',
                    'Clean Architecture (Uncle Bob): entities, use cases, interface adapters, frameworks',
                    'Hexagonal Architecture (Ports & Adapters): inbound/outbound ports, adapters, domain',
                    'Onion Architecture: capas concéntricas, inversión de dependencias, domain core',
                    'Domain-Driven Design conceptos: ubiquitous language, bounded contexts, context mapping',
                    'Agregados, entities, value objects, domain events, domain services',
                    'Strategic DDD: core domain, supporting domain, generic domain, subdomains',
                    'Anti-corruption layer, shared kernel, customer-supplier, conformist patterns'
                ],
                actividades: [
                    'Análisis arquitectónico de sistemas open source (Netflix, Uber, Airbnb)',
                    'Diseño de bounded contexts para un dominio de e-commerce complejo',
                    'Refactoring de monolito a Clean Architecture con capas bien definidas',
                    'Implementación de Hexagonal Architecture en proyecto Spring Boot',
                    'Modelado de agregados y domain events para un sistema de pedidos',
                    'Presentación de context map con patrones de integración entre bounded contexts'
                ]
            },
            {
                numero: 2,
                titulo: 'Patrones de Sistemas Distribuidos',
                semanas: 'Semana 4-5',
                descripcion: 'Patrones para sistemas escalables y resilientes.',
                contenidos: [
                    'API Gateway pattern: routing, aggregation, rate limiting, authentication',
                    'Backend for Frontend (BFF): specialization, optimization, team ownership',
                    'Service Mesh: sidecar proxy, Istio/Linkerd, observability, mTLS',
                    'Circuit Breaker pattern: estados, thresholds, half-open, fallback strategies',
                    'Retry patterns: exponential backoff, jitter, idempotency, retry budgets',
                    'Timeout patterns: connection timeout, read timeout, request timeout, deadline propagation',
                    'Bulkhead pattern: thread pools, connection pools, semaphores, rate limiters',
                    'Event-Driven Architecture: event notification, event-carried state transfer, event sourcing',
                    'CQRS: command/query separation, read models, projections, eventual consistency',
                    'Saga pattern: choreography vs orchestration, compensating transactions, idempotency'
                ],
                actividades: [
                    'Diseño de API Gateway con Kong o AWS API Gateway',
                    'Implementación de Circuit Breaker con Resilience4j en microservicio',
                    'Diseño de arquitectura event-driven con domain events y message broker',
                    'Implementación de Saga pattern para proceso de checkout distribuido',
                    'Análisis de trade-offs: consistency vs availability (CAP theorem)',
                    'Proyecto parcial: Sistema de reservas con CQRS y Event Sourcing'
                ]
            },
            {
                numero: 3,
                titulo: 'Documentación y Decisiones',
                semanas: 'Semana 6-8',
                descripcion: 'Documentación arquitectónica y ADRs.',
                contenidos: [
                    'Modelo C4 detallado: Context, Container, Component, Code diagrams',
                    'Structurizr y Structurizr DSL: arquitectura como código, workspaces',
                    'Architecture Decision Records (ADRs): estructura, contexto, decision, consequences',
                    'Diagramas de secuencia y colaboración para flujos críticos',
                    'Fitness functions: automated testing de características arquitectónicas',
                    'Métricas arquitectónicas: coupling, cohesion, instability, abstractness',
                    'Evolutionary architecture: incremental change, fitness functions, last responsible moment',
                    'Tech Radar: adopt, trial, assess, hold; governance tecnológica',
                    'Architecture reviews: ATAM, lightweight ADRs, architecture katas',
                    'API design principles: REST maturity levels, contract-first, OpenAPI, versioning strategies'
                ],
                actividades: [
                    'Documentación C4 completa de sistema usando Structurizr DSL',
                    'Redacción de 5+ ADRs para decisiones arquitectónicas clave',
                    'Implementación de fitness functions con ArchUnit en proyecto Java',
                    'Creación de Tech Radar para stack tecnológico del equipo',
                    'Diseño de API REST nivel 3 (HATEOAS) con documentación OpenAPI',
                    'Proyecto integrador: Arquitectura completa de sistema distribuido con documentación'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Structurizr', icon: 'fa-cubes', iconType: 'fontawesome' },
            { nombre: 'PlantUML', icon: 'fa-sitemap', iconType: 'fontawesome' },
            { nombre: 'Draw.io', icon: 'fa-draw-polygon', iconType: 'fontawesome' },
            { nombre: 'Mermaid', icon: 'fa-project-diagram', iconType: 'fontawesome' },
            { nombre: 'Lucidchart', icon: 'fa-object-ungroup', iconType: 'fontawesome' },
            { nombre: 'Notion', icon: 'notion-plain', iconType: 'devicon' },
            { nombre: 'Confluence', icon: 'confluence-plain', iconType: 'devicon' },
            { nombre: 'ArchUnit', icon: 'fa-check-circle', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Análisis de arquitecturas', ponderacion: 0, descripcion: 'Estudio de casos' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Estilos y patrones' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Sistemas distribuidos' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Documentación arquitectónica' }
        ],
        prerrequisitos: ['Backend I', 'Cloud Native'],
        conexiones: ['Cloud Native II', 'Seguridad y Calidad', 'Fullstack I'],
        recursos: [
            { tipo: 'Libro', nombre: 'Fundamentals of Software Architecture - Richards & Ford', url: 'https://www.oreilly.com/library/view/fundamentals-of-software/9781492043447/' },
            { tipo: 'Libro', nombre: 'Clean Architecture - Robert C. Martin', url: 'https://www.oreilly.com/library/view/clean-architecture-a/9780134494272/' },
            { tipo: 'Libro', nombre: 'Building Microservices - Sam Newman', url: 'https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018/' },
            { tipo: 'Modelo', nombre: 'C4 Model - Simon Brown', url: 'https://c4model.com/' },
            { tipo: 'Herramienta', nombre: 'Structurizr DSL', url: 'https://structurizr.com/dsl' },
            { tipo: 'Tutorial', nombre: 'ADR GitHub Templates', url: 'https://adr.github.io/' },
            { tipo: 'Video', nombre: 'Software Architecture Fundamentals - Mark Richards', url: 'https://www.youtube.com/watch?v=DngAZyWMGR0' },
            { tipo: 'Curso', nombre: 'Developer to Architect - Mark Richards', url: 'https://developertoarchitect.com/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-08%20-%20Frontend%20I-II%2C%20Arquitectura%20SW/Arquitectura%20Software' }
        ],
        color: 'indigo',
        area: 'arquitectura',
        palabrasClave: [
            'Clean Architecture', 'Microservices', 'Domain-Driven Design',
            'CQRS', 'Design Patterns', 'C4 Model', 'ADRs', 'API Gateway',
            'Event-Driven Architecture', 'Hexagonal Architecture', 'Scalability'
        ]
    },

    // =============================================
    // BIMESTRE 09 - MOBILE I & FRONTEND III
    // =============================================

    // MOB9201 - Mobile I
    'mobile-i': {
        id: 'mobile-i',
        codigo: 'MOB9201',
        nombre: 'Desarrollo Mobile I',
        nombreCorto: 'Mobile I',
        bimestre: 9,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que introduce el desarrollo de aplicaciones móviles multiplataforma con React Native o Flutter.',
        proposito: 'Capacitar al estudiante en el desarrollo de aplicaciones móviles nativas multiplataforma, aplicando conocimientos previos de frontend.',
        objetivos: [
            'Comprender el ecosistema de desarrollo móvil',
            'Desarrollar aplicaciones con React Native',
            'Implementar navegación y UI nativa',
            'Gestionar estado en aplicaciones móviles',
            'Acceder a APIs del dispositivo',
            'Publicar aplicaciones en stores'
        ],
        competencias: [
            'Dominio de React Native y su arquitectura de bridge y nuevo modelo (Fabric, TurboModules)',
            'Desarrollo de componentes nativos reutilizables con TypeScript y estilos responsivos',
            'Implementación de navegación compleja con React Navigation (Stack, Tab, Drawer, Deep Linking)',
            'Gestión de estado en aplicaciones móviles con Context API, Zustand y Redux Toolkit',
            'Acceso a APIs nativas del dispositivo: cámara, geolocalización, sensores, notificaciones',
            'Persistencia de datos con AsyncStorage, SQLite y sincronización con backend',
            'Configuración de builds y publicación con Expo EAS para App Store y Play Store',
            'Implementación de UX móvil: gestos, animaciones, haptics y accesibilidad'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos React Native',
                semanas: 'Semana 1-3',
                descripcion: 'Introducción a React Native y componentes nativos.',
                contenidos: [
                    'Ecosistema mobile: React Native vs Flutter vs nativo vs PWA, trade-offs',
                    'Arquitectura React Native: bridge, JSI, Fabric, TurboModules, Hermes engine',
                    'Setup con Expo: managed vs bare workflow, expo-dev-client',
                    'Componentes core: View, Text, Image, ScrollView, TouchableOpacity, Pressable',
                    'StyleSheet API: estilos inline, objetos de estilo, Platform-specific styles',
                    'Flexbox mobile: layouts responsivos, SafeAreaView, KeyboardAvoidingView',
                    'Listas performantes: FlatList, SectionList, VirtualizedList, optimización de renders',
                    'Imágenes: Image component, caching, placeholder, progressive loading',
                    'Inputs y formularios: TextInput, controlled components, React Hook Form',
                    'Debugging: React DevTools, Flipper, console logs, error boundaries'
                ],
                actividades: [
                    'Setup de proyecto con Expo + TypeScript + ESLint + Prettier',
                    'Creación de design system con componentes reutilizables (Button, Card, Input)',
                    'Implementación de layouts responsivos para múltiples tamaños de pantalla',
                    'Lista con FlatList optimizada: keyExtractor, getItemLayout, windowSize',
                    'Formulario de registro con validación usando React Hook Form + Zod',
                    'Proyecto parcial: App de lista de tareas con CRUD local'
                ]
            },
            {
                numero: 2,
                titulo: 'Navegación y Estado',
                semanas: 'Semana 4-5',
                descripcion: 'React Navigation y gestión de estado.',
                contenidos: [
                    'React Navigation setup: NavigationContainer, linking configuration',
                    'Stack Navigator: screens, options, gestures, transitions, headerRight',
                    'Tab Navigator: bottom tabs, material top tabs, custom tab bar',
                    'Drawer Navigator: sidebar navigation, gestures, custom drawer content',
                    'Deep linking: configuración de URL schemes, universal links, deferred deep links',
                    'Paso de parámetros: route.params, navigation state, TypeScript navigation types',
                    'AsyncStorage: almacenamiento key-value, encriptación con expo-secure-store',
                    'Context API en mobile: providers, consumers, performance considerations',
                    'Zustand: stores, selectors, persist middleware, devtools',
                    'Redux Toolkit: slices, RTK Query, offline support, persistence'
                ],
                actividades: [
                    'Navegación completa: Stack + Tab + Drawer con TypeScript types',
                    'Sistema de autenticación con flujo login/logout y token persistence',
                    'Deep linking funcional con URL schemes para iOS y Android',
                    'State management con Zustand incluyendo persist y devtools',
                    'Implementación de Redux Toolkit para carrito de compras offline',
                    'Proyecto parcial: App con navegación completa y estado persistente'
                ]
            },
            {
                numero: 3,
                titulo: 'APIs Nativas y Publicación',
                semanas: 'Semana 6-8',
                descripcion: 'Acceso a hardware y proceso de publicación.',
                contenidos: [
                    'Expo Camera: foto, video, face detection, barcode scanning, permisos',
                    'Image Picker: selección de galería, crop, resize, compression',
                    'Geolocalización: expo-location, tracking, geocoding, mapas con react-native-maps',
                    'Notificaciones push: expo-notifications, FCM, APNs, local notifications',
                    'Sensores: acelerómetro, giroscopio, pedómetro, Device Motion',
                    'Haptics y audio: expo-haptics, expo-av para feedback táctil y sonidos',
                    'Expo EAS Build: configuración, profiles, credentials, OTA updates',
                    'App Store submission: certificates, provisioning profiles, App Store Connect',
                    'Play Store submission: keystore, bundle, Play Console, internal testing',
                    'App versioning: semver, build numbers, release notes, staged rollouts'
                ],
                actividades: [
                    'App con cámara: captura de fotos, galería, preview y upload',
                    'Feature de geolocalización con mapa interactivo y markers',
                    'Sistema de notificaciones push con Firebase Cloud Messaging',
                    'Build de desarrollo con expo-dev-client y custom native modules',
                    'Pipeline de publicación: build, submit, TestFlight/Internal Testing',
                    'Proyecto integrador: App móvil completa publicada en stores (beta)'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'React Native', icon: 'react-original', iconType: 'devicon' },
            { nombre: 'Expo', icon: 'fa-mobile-alt', iconType: 'fontawesome' },
            { nombre: 'TypeScript', icon: 'typescript-plain', iconType: 'devicon' },
            { nombre: 'Android Studio', icon: 'android-plain', iconType: 'devicon' },
            { nombre: 'Xcode', icon: 'xcode-plain', iconType: 'devicon' },
            { nombre: 'Firebase', icon: 'firebase-plain', iconType: 'devicon' },
            { nombre: 'Zustand', icon: 'fa-layer-group', iconType: 'fontawesome' },
            { nombre: 'React Navigation', icon: 'fa-route', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Mobile', ponderacion: 0, descripcion: 'Prácticas de componentes' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Fundamentos RN' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Navegación y estado' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'App móvil completa' }
        ],
        prerrequisitos: ['Frontend I-II'],
        conexiones: ['Mobile II', 'App Móviles'],
        recursos: [
            { tipo: 'Documentación', nombre: 'React Native Documentation', url: 'https://reactnative.dev/' },
            { tipo: 'Tutorial', nombre: 'Expo Documentation', url: 'https://docs.expo.dev/' },
            { tipo: 'Documentación', nombre: 'React Navigation Docs', url: 'https://reactnavigation.org/docs/getting-started' },
            { tipo: 'Video', nombre: 'React Native Full Course - Mosh', url: 'https://www.youtube.com/watch?v=0-S5a0eXPoc' },
            { tipo: 'Curso', nombre: 'React Native - The Practical Guide', url: 'https://www.udemy.com/course/react-native-the-practical-guide/' },
            { tipo: 'Herramienta', nombre: 'Expo Snack (Playground)', url: 'https://snack.expo.dev/' },
            { tipo: 'Tutorial', nombre: 'EAS Build Documentation', url: 'https://docs.expo.dev/build/introduction/' },
            { tipo: 'Referencia', nombre: 'App Store Review Guidelines', url: 'https://developer.apple.com/app-store/review/guidelines/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-09%20-%20Mobile%20I%2C%20Frontend%20III/Mobile%20I' }
        ],
        color: 'blue',
        area: 'mobile',
        palabrasClave: [
            'React Native', 'Expo SDK', 'iOS', 'Android',
            'React Navigation', 'Native Components', 'Zustand',
            'Native APIs', 'App Store', 'Google Play Store', 'Mobile UI/UX'
        ]
    },

    // FRE9201 - Frontend III
    'frontend-iii': {
        id: 'frontend-iii',
        codigo: 'FRE9201',
        nombre: 'Desarrollo Frontend III',
        nombreCorto: 'Frontend III',
        bimestre: 9,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura avanzada de frontend que cubre Next.js, SSR/SSG, optimización de rendimiento y accesibilidad.',
        proposito: 'Desarrollar competencias avanzadas en frontend moderno, incluyendo frameworks full-stack, optimización y mejores prácticas de la industria.',
        objetivos: [
            'Dominar Next.js y sus patrones de renderizado',
            'Implementar SSR, SSG e ISR',
            'Optimizar rendimiento con Core Web Vitals',
            'Aplicar accesibilidad (a11y)',
            'Implementar internacionalización (i18n)',
            'Desplegar aplicaciones Next.js'
        ],
        competencias: [
            'Dominio de Next.js 14+ App Router y su modelo de Server/Client Components',
            'Implementación de estrategias de renderizado: SSR, SSG, ISR y streaming',
            'Desarrollo de Server Actions y Route Handlers para APIs full-stack',
            'Optimización de Core Web Vitals: LCP, INP, CLS con técnicas avanzadas',
            'Implementación de accesibilidad web (WCAG 2.1) con testing automatizado',
            'Configuración de internacionalización (i18n) y localización completa',
            'Testing E2E con Playwright y testing de componentes con Vitest',
            'Despliegue y operaciones en Vercel con Edge Functions y Analytics'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Next.js y Renderizado',
                semanas: 'Semana 1-3',
                descripcion: 'Fundamentos de Next.js y estrategias de renderizado.',
                contenidos: [
                    'Next.js 14+ arquitectura: App Router, Turbopack, metadata API',
                    'Server Components: renderizado en servidor, zero-bundle, streaming HTML',
                    'Client Components: "use client" directive, hydration, interactividad',
                    'Server-Side Rendering (SSR): getServerSideProps equivalente, dynamic rendering',
                    'Static Site Generation (SSG): generateStaticParams, build-time rendering',
                    'Incremental Static Regeneration (ISR): revalidate, on-demand revalidation',
                    'Layouts y Templates: root layout, nested layouts, parallel routes',
                    'Route Groups: organización, shared layouts, (marketing) vs (shop)',
                    'Intercepting Routes: modals, photo galleries, (.)folder convention',
                    'Middleware: authentication, redirects, geolocation, A/B testing'
                ],
                actividades: [
                    'Setup de proyecto Next.js 14 con TypeScript, ESLint, Tailwind',
                    'Implementación de layout system con nested y parallel routes',
                    'Página con SSG y generateStaticParams para blog posts',
                    'Dashboard con SSR y datos dinámicos por usuario',
                    'Sistema de ISR con revalidación on-demand via webhook',
                    'Proyecto parcial: Landing page con múltiples estrategias de renderizado'
                ]
            },
            {
                numero: 2,
                titulo: 'Data Fetching y APIs',
                semanas: 'Semana 4-5',
                descripcion: 'Fetching de datos y API routes.',
                contenidos: [
                    'Server Actions: "use server", form actions, progressive enhancement',
                    'Route Handlers: GET, POST, PUT, DELETE, streaming responses',
                    'Data fetching patterns: parallel, sequential, preloading, caching',
                    'Cache strategies: force-cache, no-store, revalidate, tags',
                    'Streaming con Suspense: loading.tsx, skeleton UIs, progressive rendering',
                    'Error Handling: error.tsx, global-error.tsx, not-found.tsx',
                    'Optimistic Updates: useOptimistic hook, immediate feedback, rollback',
                    'Prisma ORM: schema, migrations, queries, relations, raw SQL',
                    'NextAuth.js v5: OAuth providers, credentials, JWT, session strategies',
                    'Rate Limiting y seguridad: tokens, CSRF protection, input validation'
                ],
                actividades: [
                    'CRUD completo con Server Actions y validación con Zod',
                    'API REST con Route Handlers incluyendo autenticación JWT',
                    'Sistema de autenticación con NextAuth.js (Google, GitHub, credentials)',
                    'Implementación de cache granular con tags y revalidación selectiva',
                    'Formularios con optimistic updates y error handling elegante',
                    'Proyecto parcial: Dashboard admin con CRUD, auth y roles'
                ]
            },
            {
                numero: 3,
                titulo: 'Optimización y Deploy',
                semanas: 'Semana 6-8',
                descripcion: 'Performance, accesibilidad y despliegue.',
                contenidos: [
                    'Core Web Vitals 2024: LCP (<2.5s), INP (<200ms), CLS (<0.1)',
                    'Image optimization: next/image, blur placeholder, responsive sizes, priority',
                    'Font optimization: next/font, local fonts, variable fonts, display swap',
                    'Script optimization: next/script, strategy, onLoad, worker',
                    'Bundle analysis: @next/bundle-analyzer, tree shaking, code splitting',
                    'Accesibilidad: WCAG 2.1 AA, aria-*, roles, focus management, screen readers',
                    'Testing a11y: axe-core, Lighthouse, pa11y, automated CI checks',
                    'i18n: next-intl, routing, messages, formatting, RTL support',
                    'Playwright testing: page objects, fixtures, assertions, visual regression',
                    'Vercel deployment: edge functions, analytics, speed insights, preview deployments'
                ],
                actividades: [
                    'Auditoría Lighthouse con plan de mejoras documentado',
                    'Optimización de imágenes con next/image y srcset responsive',
                    'Implementación de accesibilidad completa con testing axe-core',
                    'Suite de tests E2E con Playwright cubriendo user journeys críticos',
                    'Configuración de i18n con 2 idiomas y contenido traducido',
                    'Proyecto integrador: App full-stack Next.js con deploy en Vercel'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Next.js', icon: 'nextjs-original', iconType: 'devicon' },
            { nombre: 'React', icon: 'react-original', iconType: 'devicon' },
            { nombre: 'TypeScript', icon: 'typescript-plain', iconType: 'devicon' },
            { nombre: 'Vercel', icon: 'vercel-original', iconType: 'devicon' },
            { nombre: 'Prisma', icon: 'prisma-original', iconType: 'devicon' },
            { nombre: 'Playwright', icon: 'playwright-plain', iconType: 'devicon' },
            { nombre: 'NextAuth', icon: 'fa-user-shield', iconType: 'fontawesome' },
            { nombre: 'Tailwind', icon: 'tailwindcss-original', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Next.js', ponderacion: 0, descripcion: 'Prácticas de renderizado' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Next.js fundamentals' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Data fetching' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'App full-stack' }
        ],
        prerrequisitos: ['Frontend I-II'],
        conexiones: ['Fullstack I', 'Arquitectura Software'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Next.js Documentation', url: 'https://nextjs.org/docs' },
            { tipo: 'Tutorial', nombre: 'Next.js Learn (Oficial)', url: 'https://nextjs.org/learn' },
            { tipo: 'Video', nombre: 'Next.js 14 Full Course - Codevolution', url: 'https://www.youtube.com/watch?v=ZVnjOPwW4ZA' },
            { tipo: 'Documentación', nombre: 'Vercel Documentation', url: 'https://vercel.com/docs' },
            { tipo: 'Tutorial', nombre: 'Prisma Getting Started', url: 'https://www.prisma.io/docs/getting-started' },
            { tipo: 'Documentación', nombre: 'Playwright Documentation', url: 'https://playwright.dev/docs/intro' },
            { tipo: 'Referencia', nombre: 'web.dev Core Web Vitals', url: 'https://web.dev/vitals/' },
            { tipo: 'Herramienta', nombre: 'WCAG 2.1 Guidelines', url: 'https://www.w3.org/WAI/WCAG21/quickref/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-09%20-%20Mobile%20I%2C%20Frontend%20III/Frontend%20III' }
        ],
        color: 'cyan',
        area: 'programacion',
        palabrasClave: [
            'Next.js 14+', 'SSR', 'SSG', 'ISR', 'React Server Components',
            'Vercel', 'Prisma ORM', 'WCAG Accessibility', 'Core Web Vitals',
            'i18n', 'Server Actions', 'App Router', 'Playwright E2E'
        ]
    },

    // =============================================
    // BIMESTRE 10 - MOBILE II & TALLER DE TÍTULO
    // =============================================

    // MOB10201 - Mobile II
    'mobile-ii': {
        id: 'mobile-ii',
        codigo: 'MOB10201',
        nombre: 'Desarrollo Mobile II',
        nombreCorto: 'Mobile II',
        bimestre: 10,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura avanzada de desarrollo móvil que cubre patrones de arquitectura, testing, CI/CD y optimización de aplicaciones.',
        proposito: 'Desarrollar competencias avanzadas en desarrollo móvil, incluyendo arquitectura escalable, testing automatizado y optimización de rendimiento.',
        objetivos: [
            'Aplicar patrones de arquitectura en mobile',
            'Implementar testing automatizado de apps',
            'Configurar CI/CD para aplicaciones móviles',
            'Optimizar rendimiento y experiencia de usuario',
            'Implementar offline-first y sincronización',
            'Monetización y analytics'
        ],
        competencias: [
            'Diseño e implementación de Clean Architecture y patrones MVVM en aplicaciones móviles',
            'Desarrollo de aplicaciones offline-first con sincronización bidireccional y conflict resolution',
            'Testing automatizado completo: unit, integration y E2E con Jest, Testing Library y Detox',
            'Configuración de pipelines CI/CD con EAS Build, GitHub Actions y distribución automatizada',
            'Optimización de rendimiento: profiling, memory management, bundle size, startup time',
            'Integración de analytics, crash reporting y feature flags para decisiones data-driven',
            'Implementación de monetización: in-app purchases, subscriptions y ads',
            'Aplicación de ASO (App Store Optimization) y estrategias de crecimiento'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Arquitectura y Patrones',
                semanas: 'Semana 1-3',
                descripcion: 'Patrones de arquitectura para apps escalables.',
                contenidos: [
                    'Clean Architecture en mobile: domain, data, presentation layers',
                    'MVVM pattern: ViewModel, state management, bindings, separation of concerns',
                    'Repository pattern: abstracción de data sources, caching strategies',
                    'Dependency Injection: inversión de control, testing, módulos',
                    'Offline-first architecture: local-first, sync engine, conflict resolution',
                    'SQLite con expo-sqlite: schema, migrations, queries, transactions',
                    'WatermelonDB: reactive database, sync, lazy loading, performance',
                    'Sync strategies: optimistic vs pessimistic, delta sync, full sync',
                    'Background tasks: expo-task-manager, background fetch, sync',
                    'State machines: XState para flujos complejos, estados, transiciones'
                ],
                actividades: [
                    'Refactorización de app existente a Clean Architecture con capas definidas',
                    'Implementación de Repository pattern con múltiples data sources',
                    'Sistema de sync offline-first con cola de operaciones pendientes',
                    'Base de datos local con SQLite incluyendo migraciones',
                    'Resolución de conflictos de sync con estrategias configurables',
                    'Proyecto parcial: App de notas con sync offline/online seamless'
                ]
            },
            {
                numero: 2,
                titulo: 'Testing y CI/CD',
                semanas: 'Semana 4-5',
                descripcion: 'Testing automatizado y pipelines para mobile.',
                contenidos: [
                    'Unit testing con Jest: mocks, spies, async testing, coverage',
                    'Testing de componentes con React Native Testing Library',
                    'Integration testing: flujos multi-componente, navigation testing',
                    'E2E testing con Detox: device testing, synchronization, artifacts',
                    'Maestro: E2E testing declarativo, flows, CI integration',
                    'EAS Build: profiles, credentials, versioning, over-the-air updates',
                    'GitHub Actions mobile: build matrix, caching, secrets, artifacts',
                    'TestFlight distribution: internal, external testing, feedback',
                    'Google Play Internal Testing: tracks, staged rollouts, crashes',
                    'Code signing: iOS certificates, provisioning profiles, Android keystore'
                ],
                actividades: [
                    'Suite de unit tests con coverage >80% para business logic',
                    'Tests de componentes para UI crítica con Testing Library',
                    'Suite E2E con Detox cubriendo happy paths principales',
                    'Pipeline CI/CD completo: lint, test, build, deploy',
                    'Configuración de EAS Build con múltiples profiles (dev, staging, prod)',
                    'Proyecto parcial: App con testing automatizado y releases automatizados'
                ]
            },
            {
                numero: 3,
                titulo: 'Producción y Monetización',
                semanas: 'Semana 6-8',
                descripcion: 'Preparación para producción y estrategias de negocio.',
                contenidos: [
                    'Performance profiling: React DevTools, Flipper, systrace',
                    'Memory management: leaks detection, heap snapshots, optimization',
                    'Bundle optimization: metro bundler, tree shaking, lazy loading',
                    'Startup time optimization: hermes, preloading, splash optimization',
                    'Firebase Analytics: eventos, user properties, funnels, audiences',
                    'Crash reporting: Sentry, Crashlytics, simbolización, alertas',
                    'Feature flags: LaunchDarkly, remote config, A/B testing',
                    'In-app purchases: expo-in-app-purchases, StoreKit, Google Play Billing',
                    'Subscriptions: plans, trials, grace periods, renewal handling',
                    'ASO: keywords, screenshots, A/B testing, ratings optimization'
                ],
                actividades: [
                    'Profiling completo con identificación y fix de performance issues',
                    'Implementación de analytics con eventos y conversiones',
                    'Setup de crash reporting con Sentry incluyendo source maps',
                    'Sistema de feature flags para releases graduales',
                    'Implementación de in-app purchases (consumables o subscriptions)',
                    'Proyecto integrador: App production-ready con monetización y analytics'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'React Native', icon: 'react-original', iconType: 'devicon' },
            { nombre: 'Firebase', icon: 'firebase-plain', iconType: 'devicon' },
            { nombre: 'Jest', icon: 'jest-plain', iconType: 'devicon' },
            { nombre: 'GitHub Actions', icon: 'githubactions-plain', iconType: 'devicon' },
            { nombre: 'Sentry', icon: 'fa-bug', iconType: 'fontawesome' },
            { nombre: 'SQLite', icon: 'sqlite-plain', iconType: 'devicon' },
            { nombre: 'Detox', icon: 'fa-vial', iconType: 'fontawesome' },
            { nombre: 'Flipper', icon: 'fa-search', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs avanzados', ponderacion: 0, descripcion: 'Prácticas de arquitectura' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Arquitectura mobile' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Testing y CI/CD' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'App producción' }
        ],
        prerrequisitos: ['Mobile I'],
        conexiones: ['App Móviles', 'Cloud Native II'],
        recursos: [
            { tipo: 'Documentación', nombre: 'React Native Performance', url: 'https://reactnative.dev/docs/performance' },
            { tipo: 'Herramienta', nombre: 'Detox E2E Testing', url: 'https://wix.github.io/Detox/' },
            { tipo: 'Herramienta', nombre: 'Maestro Mobile Testing', url: 'https://maestro.mobile.dev/' },
            { tipo: 'Tutorial', nombre: 'EAS Build Documentation', url: 'https://docs.expo.dev/build/introduction/' },
            { tipo: 'Servicio', nombre: 'Firebase for Mobile', url: 'https://firebase.google.com/docs/guides' },
            { tipo: 'Herramienta', nombre: 'Sentry for React Native', url: 'https://docs.sentry.io/platforms/react-native/' },
            { tipo: 'Video', nombre: 'React Native Architecture Deep Dive', url: 'https://www.youtube.com/watch?v=UcqRXTriUVI' },
            { tipo: 'Guía', nombre: 'App Store Review Guidelines', url: 'https://developer.apple.com/app-store/review/guidelines/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-10%20-%20Mobile%20II%2C%20Taller%20de%20Titulo/Mobile%20II' }
        ],
        color: 'blue',
        area: 'mobile',
        palabrasClave: [
            'Mobile Architecture', 'Clean Architecture', 'MVVM Pattern',
            'Detox Testing', 'CI/CD Mobile', 'EAS Build', 'Offline-First',
            'Firebase', 'Analytics', 'App Monetization', 'Push Notifications'
        ]
    },

    // TTL10201 - Taller de Título
    'taller-titulo': {
        id: 'taller-titulo',
        codigo: 'TTL10201',
        nombre: 'Taller de Título',
        nombreCorto: 'Taller de Titulo',
        bimestre: 10,
        creditos: 6,
        horasTeoricas: 2,
        horasPracticas: 8,
        descripcion: 'Asignatura integradora donde los estudiantes desarrollan un proyecto de software completo, aplicando todos los conocimientos adquiridos durante la carrera.',
        proposito: 'Demostrar las competencias profesionales del estudiante mediante el desarrollo de un proyecto de software que resuelva una problemática real, siguiendo metodologías profesionales.',
        objetivos: [
            'Desarrollar un proyecto de software integral',
            'Aplicar metodologías ágiles en proyecto real',
            'Documentar técnicamente un proyecto profesional',
            'Presentar y defender el proyecto ante tribunal',
            'Trabajar en equipo multidisciplinario',
            'Gestionar un proyecto de principio a fin'
        ],
        competencias: [
            'Desarrollo de proyecto de software completo aplicando arquitectura full-stack profesional',
            'Aplicación de metodología Scrum con ceremonies, artefactos y métricas de seguimiento',
            'Elaboración de documentación técnica profesional: SRS, SAD, manuales de usuario',
            'Presentación y defensa de proyecto ante tribunal con comunicación técnica efectiva',
            'Trabajo en equipo multidisciplinario con roles definidos y gestión de conflictos',
            'Gestión integral de proyecto: scope, timeline, recursos, riesgos y calidad',
            'Implementación de CI/CD completo con testing automatizado y deployment',
            'Aplicación de estándares de calidad de código y mejores prácticas de la industria'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Definición y Planificación',
                semanas: 'Semana 1-3',
                descripcion: 'Definición del proyecto y planificación inicial.',
                contenidos: [
                    'Selección de idea: identificación de problema real, propuesta de valor',
                    'Análisis de factibilidad: técnica, operacional, económica, legal (FODA)',
                    'Benchmark: análisis de competencia, diferenciadores, market fit',
                    'Especificación de requisitos (IEEE 830): funcionales, no funcionales, constraints',
                    'User stories con criterios de aceptación INVEST y story points',
                    'Diseño de arquitectura: diagramas C4, decisiones arquitectónicas (ADRs)',
                    'Tech stack selection: justificación técnica de cada tecnología elegida',
                    'Product Backlog: priorización MoSCoW, roadmap de releases',
                    'Sprint Planning: velocity estimada, capacity planning, sprint goals',
                    'DevOps setup: repositorio, CI/CD pipeline, environments (dev, staging, prod)'
                ],
                actividades: [
                    'Pitch de propuesta de proyecto con validación de stakeholders',
                    'Documento de Especificación de Requisitos (SRS) completo',
                    'Diseño arquitectónico con diagramas C4 (Context, Container, Component)',
                    'Product Backlog refinado con >30 user stories estimadas',
                    'Setup completo de repositorio con branch strategy y CI/CD',
                    'Sprint 0: configuración de entorno, boilerplate, herramientas'
                ]
            },
            {
                numero: 2,
                titulo: 'Desarrollo e Iteraciones',
                semanas: 'Semana 4-5',
                descripcion: 'Desarrollo iterativo del proyecto.',
                contenidos: [
                    'Sprint 1: MVP funcional con core features implementadas',
                    'Sprint 2: Features secundarias, integración de APIs externas',
                    'Daily standups: formato 15 min, blockers, collaboration needs',
                    'Sprint Reviews: demo a stakeholders, feedback incorporado',
                    'Retrospectivas: what worked, improvements, action items',
                    'Code reviews: PR guidelines, feedback constructivo, merge policies',
                    'Testing automatizado: unit tests, integration tests, cobertura >70%',
                    'Documentación continua: JSDoc/TSDoc, README actualizado, changelog',
                    'Burndown charts: tracking de progreso, velocity, scope changes',
                    'Technical debt management: identificación, priorización, payoff strategy'
                ],
                actividades: [
                    'Desarrollo de MVP con todas las features críticas funcionando',
                    'Daily standups documentados y seguimiento de blockers',
                    'Sprint Reviews con demos grabadas y feedback de stakeholders',
                    'Retrospectivas con action items implementados en siguiente sprint',
                    'Pull Requests con code reviews y >2 approvals para merge',
                    'Suite de tests automatizados con coverage report'
                ]
            },
            {
                numero: 3,
                titulo: 'Cierre y Defensa',
                semanas: 'Semana 6-8',
                descripcion: 'Finalización del proyecto y presentación.',
                contenidos: [
                    'Sprint final: bug fixes, performance optimization, UI polish',
                    'QA completo: testing funcional, regresión, UAT con usuarios reales',
                    'Documentación técnica final: API docs, deployment guide, architecture',
                    'Manual de usuario: guías step-by-step, FAQ, troubleshooting',
                    'Video demo: 3-5 minutos, features principales, user journey',
                    'Métricas de proyecto: velocity, quality metrics, lessons learned',
                    'Presentación profesional: estructura, storytelling, manejo del tiempo',
                    'Defensa ante tribunal: dominio técnico, respuesta a preguntas',
                    'Handoff: documentación para mantenimiento, onboarding de nuevos devs',
                    'Release final: versión 1.0 en producción, monitoring configurado'
                ],
                actividades: [
                    'Testing completo con usuarios reales y corrección de bugs críticos',
                    'Documentación final: técnica, usuario, deployment',
                    'Video demo profesional mostrando el producto funcionando',
                    'Ensayo de presentación con feedback de profesores y pares',
                    'Defensa de proyecto ante tribunal evaluador',
                    'Release a producción con monitoring y alertas configuradas'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Git', icon: 'git-plain', iconType: 'devicon' },
            { nombre: 'GitHub', icon: 'github-original', iconType: 'devicon' },
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' },
            { nombre: 'Jira', icon: 'jira-plain', iconType: 'devicon' },
            { nombre: 'Vercel', icon: 'vercel-original', iconType: 'devicon' },
            { nombre: 'Notion', icon: 'notion-plain', iconType: 'devicon' },
            { nombre: 'Figma', icon: 'figma-plain', iconType: 'devicon' },
            { nombre: 'Loom', icon: 'fa-video', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Sumativa', nombre: 'Propuesta', ponderacion: 15, descripcion: 'Documento de propuesta' },
            { tipo: 'Sumativa', nombre: 'Avance 1', ponderacion: 20, descripcion: 'MVP funcional' },
            { tipo: 'Sumativa', nombre: 'Avance 2', ponderacion: 20, descripcion: 'Features completas' },
            { tipo: 'Sumativa', nombre: 'Producto final', ponderacion: 25, descripcion: 'Software terminado' },
            { tipo: 'Sumativa', nombre: 'Defensa', ponderacion: 20, descripcion: 'Presentación ante tribunal' }
        ],
        prerrequisitos: ['Backend II-III', 'Frontend I-II', 'Ing. Software II'],
        conexiones: ['Título Analista Programador'],
        recursos: [
            { tipo: 'Guía', nombre: 'GitHub README Best Practices', url: 'https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes' },
            { tipo: 'Template', nombre: 'Awesome README Templates', url: 'https://github.com/matiassingers/awesome-readme' },
            { tipo: 'Guía', nombre: 'Write the Docs - Documentation Guide', url: 'https://www.writethedocs.org/guide/' },
            { tipo: 'Video', nombre: 'How to Present Software Projects', url: 'https://www.youtube.com/watch?v=3rFMYMJd1Wc' },
            { tipo: 'Herramienta', nombre: 'Canva para Presentaciones', url: 'https://www.canva.com/' },
            { tipo: 'Tutorial', nombre: 'Technical Writing by Google', url: 'https://developers.google.com/tech-writing' },
            { tipo: 'Guía', nombre: 'IEEE 830 SRS Standard', url: 'https://ieeexplore.ieee.org/document/720574' },
            { tipo: 'Herramienta', nombre: 'Loom Video Recording', url: 'https://www.loom.com/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-10%20-%20Mobile%20II%2C%20Taller%20de%20Titulo/Taller%20de%20Titulo' }
        ],
        color: 'emerald',
        area: 'gestion',
        palabrasClave: [
            'Capstone Project', 'Scrum Methodology', 'MVP Development',
            'Technical Documentation', 'Project Defense', 'Teamwork',
            'Project Management', 'CI/CD Pipeline', 'Production Deploy', 'Portfolio'
        ]
    },

    // =============================================
    // BIMESTRE 11 - FULLSTACK I & BD APLICADA
    // =============================================

    // FST11201 - Desarrollo Fullstack I
    'fullstack-i': {
        id: 'fullstack-i',
        codigo: 'FST11201',
        nombre: 'Desarrollo Fullstack I',
        nombreCorto: 'Desarrollo Fullstack I',
        bimestre: 11,
        creditos: 6,
        horasTeoricas: 2,
        horasPracticas: 6,
        descripcion: 'Asignatura que integra desarrollo frontend y backend, cubriendo arquitecturas modernas, APIs RESTful avanzadas y patrones de integración fullstack.',
        proposito: 'Desarrollar competencias integrales en desarrollo fullstack, capacitando al estudiante para construir aplicaciones web completas desde el frontend hasta el backend.',
        objetivos: [
            'Integrar frontend y backend en aplicaciones completas',
            'Implementar autenticación y autorización end-to-end',
            'Diseñar arquitecturas fullstack escalables',
            'Aplicar patrones de comunicación cliente-servidor',
            'Gestionar estado compartido entre capas',
            'Desplegar aplicaciones fullstack en producción'
        ],
        competencias: [
            'Diseño de arquitecturas fullstack modernas con monorepos y tipos compartidos',
            'Implementación de autenticación end-to-end con JWT, OAuth 2.0 y OpenID Connect',
            'Desarrollo de APIs RESTful avanzadas con NestJS y validación robusta',
            'Gestión de estado compartido entre frontend y backend con type safety',
            'Integración de comunicación real-time con WebSockets y Server-Sent Events',
            'Configuración de deployment integrado con CI/CD para frontend y backend',
            'Aplicación de patrones de error handling unificado y logging estructurado',
            'Optimización de performance fullstack: caching, lazy loading, bundle optimization'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Arquitectura Fullstack',
                semanas: 'Semana 1-3',
                descripcion: 'Fundamentos de integración frontend-backend.',
                contenidos: [
                    'Arquitectura cliente-servidor moderna: separación de concerns, API contracts',
                    'Monorepos con Turborepo: workspaces, caching, task orchestration',
                    'Shared types: TypeScript definitions, zod schemas, OpenAPI generation',
                    'Environment configuration: dotenv, config services, secrets management',
                    'CORS y seguridad cross-origin: preflight, credentials, allowed origins',
                    'API versioning strategies: URL path, headers, query params, sunset headers',
                    'Error handling patterns: error codes, i18n messages, stack traces en dev',
                    'Request validation: DTOs, pipes, transformers, sanitization',
                    'Logging estructurado: correlation IDs, context propagation, log levels',
                    'Development workflow: hot reload, debugging, proxy configuration'
                ],
                actividades: [
                    'Setup de monorepo fullstack con Turborepo (Next.js + NestJS)',
                    'Configuración de tipos compartidos con generación automática desde OpenAPI',
                    'Implementación de CORS seguro con whitelist de orígenes',
                    'Sistema de configuración por ambiente (dev, staging, prod)',
                    'Error handling unificado con tipos compartidos',
                    'Proyecto parcial: Scaffold fullstack con autenticación básica'
                ]
            },
            {
                numero: 2,
                titulo: 'Autenticación End-to-End',
                semanas: 'Semana 4-5',
                descripcion: 'Implementación de autenticación completa.',
                contenidos: [
                    'JWT tokens: estructura, claims, signing algorithms (RS256 vs HS256)',
                    'Access tokens vs Refresh tokens: lifecycle, rotation, revocation',
                    'OAuth 2.0 flows: Authorization Code, PKCE, client credentials',
                    'OpenID Connect: ID tokens, userinfo endpoint, claims mapping',
                    'Social login integration: Google, GitHub, Microsoft providers',
                    'Session management seguro: httpOnly cookies, SameSite, secure flag',
                    'Protected routes frontend: route guards, auth context, redirects',
                    'Guards y middleware backend: JWT verification, role-based access',
                    'Multi-factor authentication: TOTP, SMS, email verification',
                    'Password policies: hashing (bcrypt/argon2), complexity, breach detection'
                ],
                actividades: [
                    'Sistema de login completo con JWT access + refresh tokens',
                    'Integración OAuth con Google usando PKCE flow',
                    'Refresh token rotation con invalidación de tokens anteriores',
                    'Protected routes con role-based access control (RBAC)',
                    'Email verification y password reset flows',
                    'Proyecto parcial: Auth service completo con múltiples providers'
                ]
            },
            {
                numero: 3,
                titulo: 'Integración y Deployment',
                semanas: 'Semana 6-8',
                descripcion: 'Patrones avanzados y despliegue.',
                contenidos: [
                    'WebSockets con Socket.io: namespaces, rooms, acknowledgments',
                    'Server-Sent Events (SSE): event streams, reconnection, last-event-id',
                    'Optimistic updates: local mutations, rollback on error, conflict resolution',
                    'Real-time data sync: live queries, subscriptions, delta updates',
                    'Error handling unificado: error boundaries, toast notifications, retry logic',
                    'Logging y monitoring: Sentry, LogRocket, custom analytics',
                    'CI/CD pipeline: GitHub Actions, Vercel preview deployments',
                    'Deploy strategies: Vercel (frontend) + Railway/Render (backend)',
                    'Database migrations: Prisma migrate, seed data, rollback strategies',
                    'Environment promotion: dev → staging → production workflows'
                ],
                actividades: [
                    'Chat real-time con WebSockets incluyendo typing indicators',
                    'Sistema de notificaciones push con SSE y persistencia',
                    'Optimistic UI updates con rollback automático',
                    'Pipeline CI/CD completo con preview deployments',
                    'Configuración de monitoring con alertas',
                    'Proyecto integrador: App fullstack completa desplegada en producción'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Next.js', icon: 'nextjs-original', iconType: 'devicon' },
            { nombre: 'NestJS', icon: 'nestjs-original', iconType: 'devicon' },
            { nombre: 'TypeScript', icon: 'typescript-plain', iconType: 'devicon' },
            { nombre: 'PostgreSQL', icon: 'postgresql-plain', iconType: 'devicon' },
            { nombre: 'Prisma', icon: 'prisma-original', iconType: 'devicon' },
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' },
            { nombre: 'Socket.io', icon: 'socketio-original', iconType: 'devicon' },
            { nombre: 'Turborepo', icon: 'fa-layer-group', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Fullstack', ponderacion: 0, descripcion: 'Integraciones prácticas' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Arquitectura fullstack' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Autenticación E2E' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto fullstack' }
        ],
        prerrequisitos: ['Frontend III', 'Backend II-III'],
        conexiones: ['Fullstack II', 'Cloud Computing'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Next.js Documentation', url: 'https://nextjs.org/docs' },
            { tipo: 'Documentación', nombre: 'NestJS Documentation', url: 'https://docs.nestjs.com/' },
            { tipo: 'Tutorial', nombre: 'Turborepo Handbook', url: 'https://turbo.build/repo/docs/handbook' },
            { tipo: 'Video', nombre: 'NestJS Full Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=GHTA143_b-s' },
            { tipo: 'Documentación', nombre: 'Socket.io Documentation', url: 'https://socket.io/docs/v4/' },
            { tipo: 'Tutorial', nombre: 'Prisma Getting Started', url: 'https://www.prisma.io/docs/getting-started' },
            { tipo: 'Video', nombre: 'JWT Authentication Deep Dive', url: 'https://www.youtube.com/watch?v=7Q17ubqLfaM' },
            { tipo: 'Guía', nombre: 'OAuth 2.0 Simplified', url: 'https://www.oauth.com/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-11%20-%20Desarrollo%20Fullstack%20I%2C%20BD%20Aplicada/Desarrollo%20Fullstack%20I' }
        ],
        color: 'teal',
        area: 'programacion',
        palabrasClave: [
            'Fullstack Development', 'NestJS', 'Next.js', 'Monorepo', 'Turborepo',
            'JWT Authentication', 'OAuth 2.0', 'WebSockets', 'REST API',
            'TypeScript', 'Frontend-Backend Integration', 'Prisma ORM'
        ]
    },

    // BDA11201 - BD Aplicada
    'bd-aplicada': {
        id: 'bd-aplicada',
        codigo: 'BDA11201',
        nombre: 'Bases de Datos Aplicada',
        nombreCorto: 'BD Aplicada',
        bimestre: 11,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que profundiza en bases de datos NoSQL, data modeling avanzado, optimización de queries y gestión de datos a escala.',
        proposito: 'Desarrollar competencias avanzadas en diseño y gestión de bases de datos, incluyendo NoSQL, optimización y arquitecturas de datos modernas.',
        objetivos: [
            'Diseñar schemas NoSQL eficientes',
            'Implementar bases de datos documentales y key-value',
            'Optimizar queries y performance',
            'Aplicar patrones de data modeling',
            'Gestionar migraciones y versioning',
            'Implementar estrategias de caching'
        ],
        competencias: [
            'Diseño de schemas NoSQL eficientes con MongoDB aplicando patrones de modelado',
            'Implementación de estrategias de caching con Redis para optimización de performance',
            'Dominio de aggregation pipeline de MongoDB para análisis de datos complejos',
            'Configuración de replicación, sharding y alta disponibilidad en bases de datos',
            'Optimización de queries mediante análisis de explain plans y profiling',
            'Gestión de migraciones de base de datos y versioning de schemas',
            'Implementación de arquitecturas polyglot persistence con múltiples motores de BD',
            'Aplicación de patrones de consistencia eventual y resolución de conflictos'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Bases de Datos NoSQL',
                semanas: 'Semana 1-3',
                descripcion: 'Fundamentos de bases de datos NoSQL.',
                contenidos: [
                    'NoSQL vs SQL: teorema CAP, BASE vs ACID, casos de uso por tipo',
                    'MongoDB arquitectura: documents, collections, databases, replica sets',
                    'Schema design patterns: embedded, referenced, bucket, outlier patterns',
                    'Embedded vs Referenced: cuando usar cada uno, denormalización estratégica',
                    'Indexes en MongoDB: single field, compound, multikey, text, geospatial',
                    'Aggregation pipeline: stages ($match, $group, $project, $lookup, $unwind)',
                    'Aggregation avanzado: $facet, $bucket, $graphLookup, window functions',
                    'MongoDB transactions: multi-document ACID, sessions, retryable writes',
                    'Change streams: real-time data changes, triggers, event-driven patterns',
                    'MongoDB Atlas: clusters, connection strings, monitoring, alerts'
                ],
                actividades: [
                    'Setup de MongoDB Atlas con cluster de producción',
                    'Modelado de datos NoSQL para e-commerce (productos, órdenes, usuarios)',
                    'Implementación de aggregation pipeline para reportes de ventas',
                    'Creación de índices optimizados basados en query patterns',
                    'Transacciones multi-documento para checkout process',
                    'Proyecto parcial: API con MongoDB y Mongoose incluyendo aggregations'
                ]
            },
            {
                numero: 2,
                titulo: 'Caching y Key-Value',
                semanas: 'Semana 4-5',
                descripcion: 'Redis y estrategias de caching.',
                contenidos: [
                    'Redis data structures: strings, hashes, lists, sets, sorted sets, streams',
                    'Cache-aside pattern: read-through, lazy loading, cache miss handling',
                    'Write-through y write-behind: synchronous vs asynchronous writes',
                    'TTL strategies: absolute, sliding expiration, refresh-ahead',
                    'Eviction policies: LRU, LFU, volatile-ttl, allkeys-random',
                    'Redis Pub/Sub: channels, patterns, message delivery guarantees',
                    'Redis Streams: consumer groups, message acknowledgment, XREAD',
                    'Session storage: distributed sessions, session affinity, serialization',
                    'Rate limiting: token bucket, sliding window, distributed rate limiters',
                    'Distributed locks: SETNX, Redlock algorithm, lock expiration'
                ],
                actividades: [
                    'Implementación de cache layer para API REST con invalidación',
                    'Session management distribuido con Redis en aplicación multi-instancia',
                    'Sistema de rate limiting por usuario/IP con sliding window',
                    'Real-time leaderboard con sorted sets',
                    'Pub/Sub para notificaciones en tiempo real',
                    'Proyecto parcial: Caching layer completo con métricas de hit rate'
                ]
            },
            {
                numero: 3,
                titulo: 'Optimización y Escalabilidad',
                semanas: 'Semana 6-8',
                descripcion: 'Performance y arquitecturas de datos.',
                contenidos: [
                    'Query optimization: explain(), executionStats, covered queries',
                    'Index optimization: selectivity, compound index order, index intersection',
                    'MongoDB profiler: slow query log, system.profile, threshold tuning',
                    'Sharding: shard keys, chunks, balancer, zone sharding',
                    'Replication: replica sets, elections, read preferences, write concerns',
                    'Database migrations: mongomigrate, versioning, rollback strategies',
                    'Backup strategies: mongodump, continuous backup, point-in-time recovery',
                    'Multi-database architectures: polyglot persistence, database per service',
                    'Data synchronization: CDC, dual writes, eventual consistency patterns',
                    'Elasticsearch integration: full-text search, sync strategies, hybrid queries'
                ],
                actividades: [
                    'Análisis y optimización de queries lentas con explain plans',
                    'Configuración de replica set de 3 nodos con failover automático',
                    'Implementación de sharding para collection de alta cardinalidad',
                    'Pipeline de migrations con rollback capability',
                    'Integración PostgreSQL + MongoDB + Redis en una aplicación',
                    'Proyecto integrador: Sistema multi-DB con caching, search y analytics'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'MongoDB', icon: 'mongodb-plain', iconType: 'devicon' },
            { nombre: 'Redis', icon: 'redis-plain', iconType: 'devicon' },
            { nombre: 'PostgreSQL', icon: 'postgresql-plain', iconType: 'devicon' },
            { nombre: 'Prisma', icon: 'prisma-original', iconType: 'devicon' },
            { nombre: 'DBeaver', icon: 'dbeaver-plain', iconType: 'devicon' },
            { nombre: 'Elasticsearch', icon: 'elasticsearch-plain', iconType: 'devicon' },
            { nombre: 'Mongoose', icon: 'fa-database', iconType: 'fontawesome' },
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs NoSQL', ponderacion: 0, descripcion: 'Prácticas de modelado' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'MongoDB y NoSQL' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Redis y caching' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto multi-DB' }
        ],
        prerrequisitos: ['SQL Programación'],
        conexiones: ['Fullstack I', 'Cloud Computing'],
        recursos: [
            { tipo: 'Documentación', nombre: 'MongoDB Documentation', url: 'https://www.mongodb.com/docs/' },
            { tipo: 'Documentación', nombre: 'Redis Documentation', url: 'https://redis.io/docs/' },
            { tipo: 'Curso', nombre: 'MongoDB University (Gratis)', url: 'https://university.mongodb.com/' },
            { tipo: 'Video', nombre: 'MongoDB Full Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=c2M-rlkkT5o' },
            { tipo: 'Tutorial', nombre: 'Redis Crash Course', url: 'https://www.youtube.com/watch?v=jgpVdJB2sKQ' },
            { tipo: 'Documentación', nombre: 'Mongoose ODM Guide', url: 'https://mongoosejs.com/docs/guide.html' },
            { tipo: 'Libro', nombre: 'MongoDB: The Definitive Guide', url: 'https://www.oreilly.com/library/view/mongodb-the-definitive/9781491954461/' },
            { tipo: 'Práctica', nombre: 'Redis Labs Tutorials', url: 'https://redis.io/learn' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-11%20-%20Desarrollo%20Fullstack%20I%2C%20BD%20Aplicada/BD%20Aplicada' }
        ],
        color: 'amber',
        area: 'datos',
        palabrasClave: [
            'MongoDB', 'NoSQL Databases', 'Redis Cache', 'Aggregation Pipeline',
            'Sharding', 'Replication', 'Query Optimization', 'Polyglot Persistence',
            'Elasticsearch', 'Document Databases', 'Key-Value Stores'
        ]
    },

    // =============================================
    // BIMESTRE 12 - FULLSTACK II & CLOUD COMPUTING
    // =============================================

    // FST12201 - Desarrollo Fullstack II
    'fullstack-ii': {
        id: 'fullstack-ii',
        codigo: 'FST12201',
        nombre: 'Desarrollo Fullstack II',
        nombreCorto: 'Desarrollo Fullstack II',
        bimestre: 12,
        creditos: 6,
        horasTeoricas: 2,
        horasPracticas: 6,
        descripcion: 'Asignatura avanzada de desarrollo fullstack que cubre microservicios, event-driven architecture, testing E2E y observabilidad.',
        proposito: 'Profundizar en arquitecturas fullstack avanzadas, preparando al estudiante para desarrollar sistemas distribuidos y aplicaciones enterprise.',
        objetivos: [
            'Diseñar arquitecturas de microservicios',
            'Implementar comunicación asíncrona entre servicios',
            'Aplicar testing E2E en fullstack',
            'Configurar observabilidad y monitoring',
            'Implementar feature flags y A/B testing',
            'Gestionar configuración distribuida'
        ],
        competencias: [
            'Diseño e implementación de arquitecturas de microservicios con NestJS y patrones DDD',
            'Comunicación inter-servicios usando gRPC, REST y message queues (RabbitMQ, Kafka)',
            'Implementación de patrones de resiliencia: Circuit Breaker, Retry, Bulkhead y Timeout',
            'Dominio de event-driven architecture con Saga pattern, Event Sourcing y CQRS',
            'Testing E2E completo con Playwright incluyendo contract testing con Pact',
            'Configuración de observability stack: distributed tracing, logging centralizado y métricas',
            'Implementación de feature flags, A/B testing y canary deployments',
            'Gestión de configuración distribuida con Consul, etcd o AWS Parameter Store'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Microservicios Fullstack',
                semanas: 'Semana 1-3',
                descripcion: 'Arquitectura de microservicios para aplicaciones fullstack enterprise.',
                contenidos: [
                    'Monolith decomposition: strangler fig pattern, bounded contexts, domain analysis',
                    'API Gateway patterns: Kong, AWS API Gateway, routing, rate limiting, authentication',
                    'Service discovery: Consul, etcd, Kubernetes DNS, client-side vs server-side',
                    'gRPC fundamentals: Protocol Buffers, streaming, deadlines, interceptors',
                    'REST vs gRPC: use cases, performance comparison, hybrid architectures',
                    'Inter-service communication: synchronous vs asynchronous, request-response vs events',
                    'Distributed tracing: OpenTelemetry, Jaeger, correlation IDs, span context propagation',
                    'Service mesh: Istio basics, sidecar pattern, traffic management, mTLS',
                    'Data consistency: distributed transactions, two-phase commit limitations, compensation',
                    'Anti-patterns: distributed monolith, shared databases, over-decomposition'
                ],
                actividades: [
                    'Análisis de dominio y definición de bounded contexts para descomponer monolito',
                    'Implementación de API Gateway con Kong incluyendo autenticación y rate limiting',
                    'Configuración de service discovery con Consul y health checks',
                    'Desarrollo de comunicación gRPC entre servicios con streaming bidireccional',
                    'Setup de distributed tracing con Jaeger y OpenTelemetry SDK',
                    'Proyecto parcial: Sistema de 3 microservicios con gateway y tracing'
                ]
            },
            {
                numero: 2,
                titulo: 'Event-Driven Architecture',
                semanas: 'Semana 4-5',
                descripcion: 'Sistemas distribuidos basados en eventos y mensajería.',
                contenidos: [
                    'Message queues: RabbitMQ exchanges, SQS/SNS, dead letter queues, retry policies',
                    'Event streaming: Apache Kafka, topics, partitions, consumer groups, offsets',
                    'Saga pattern: choreography vs orchestration, compensating transactions, state machines',
                    'Event Sourcing: event store, projections, snapshots, temporal queries',
                    'CQRS: command handlers, query handlers, read/write model separation, eventual consistency',
                    'Transactional outbox: ensuring exactly-once delivery, polling publisher, CDC',
                    'Idempotency: idempotency keys, deduplication strategies, at-least-once delivery',
                    'Schema evolution: Avro, schema registry, backwards/forwards compatibility',
                    'Event versioning: upcasting, event transformations, migration strategies',
                    'Debugging events: event replay, time travel debugging, audit logs'
                ],
                actividades: [
                    'Configuración de RabbitMQ con exchanges, routing y dead letter queues',
                    'Implementación de Saga pattern con orquestador usando estado persistido',
                    'Desarrollo de event store básico con PostgreSQL y proyecciones',
                    'Setup de Kafka con schema registry y consumer groups',
                    'Implementación de transactional outbox con Debezium CDC',
                    'Sistema event-driven completo con compensating transactions'
                ]
            },
            {
                numero: 3,
                titulo: 'Testing y Observabilidad',
                semanas: 'Semana 6-8',
                descripcion: 'Testing E2E de sistemas distribuidos y observability stack completo.',
                contenidos: [
                    'E2E testing con Playwright: page objects, fixtures, visual regression, parallelization',
                    'Contract testing: Pact, consumer-driven contracts, provider verification, pact broker',
                    'Integration testing: Testcontainers, database testing, message queue testing',
                    'Logging centralizado: ELK stack (Elasticsearch, Logstash, Kibana), structured logging',
                    'Metrics con Prometheus: instrumentación, PromQL, histograms, recording rules',
                    'Dashboards con Grafana: panels, variables, annotations, alerting integration',
                    'Distributed tracing analysis: flame graphs, latency analysis, dependency mapping',
                    'Alerting y on-call: PagerDuty, runbooks, SLOs, error budgets, post-mortems',
                    'Feature flags: LaunchDarkly, Unleash, gradual rollouts, kill switches',
                    'Chaos engineering: fault injection, Chaos Monkey principles, game days'
                ],
                actividades: [
                    'Suite E2E con Playwright incluyendo visual regression y cross-browser testing',
                    'Implementación de contract testing con Pact entre frontend y backend',
                    'Configuración de ELK stack con structured logging desde microservicios',
                    'Setup de Prometheus + Grafana con dashboards de RED metrics (Rate, Errors, Duration)',
                    'Definición de SLOs y configuración de alertas basadas en error budget',
                    'Proyecto integrador: Sistema distribuido con observability stack completo'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' },
            { nombre: 'RabbitMQ', icon: 'rabbitmq-original', iconType: 'devicon' },
            { nombre: 'Kafka', icon: 'apachekafka-original', iconType: 'devicon' },
            { nombre: 'Playwright', icon: 'playwright-plain', iconType: 'devicon' },
            { nombre: 'Grafana', icon: 'grafana-original', iconType: 'devicon' },
            { nombre: 'Prometheus', icon: 'prometheus-original', iconType: 'devicon' },
            { nombre: 'Jaeger', icon: 'fa-project-diagram', iconType: 'fontawesome' },
            { nombre: 'Kong', icon: 'fa-network-wired', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Microservicios', ponderacion: 0, descripcion: 'Prácticas distribuidas' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Microservicios' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Event-driven' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Sistema completo' }
        ],
        prerrequisitos: ['Fullstack I'],
        conexiones: ['Fullstack III', 'Cloud Computing'],
        recursos: [
            { tipo: 'Libro', nombre: 'Building Microservices (Sam Newman)', url: 'https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018/' },
            { tipo: 'Libro', nombre: 'Designing Data-Intensive Applications', url: 'https://dataintensive.net/' },
            { tipo: 'Documentación', nombre: 'RabbitMQ Tutorials', url: 'https://www.rabbitmq.com/tutorials' },
            { tipo: 'Documentación', nombre: 'Apache Kafka Documentation', url: 'https://kafka.apache.org/documentation/' },
            { tipo: 'Tutorial', nombre: 'Playwright Testing Guide', url: 'https://playwright.dev/docs/intro' },
            { tipo: 'Video', nombre: 'Microservices Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=Cy9fAvsXGZA' },
            { tipo: 'Tutorial', nombre: 'Prometheus + Grafana Monitoring', url: 'https://prometheus.io/docs/tutorials/getting_started/' },
            { tipo: 'Curso', nombre: 'Event-Driven Architecture - Udemy', url: 'https://www.udemy.com/course/event-driven-microservices-spring-boot-kafka/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-12%20-%20Desarrollo%20Fullstack%20II%2C%20Cloud%20Computing/Desarrollo%20Fullstack%20II' }
        ],
        color: 'teal',
        area: 'programacion',
        palabrasClave: [
            'Microservices Architecture', 'gRPC', 'RabbitMQ', 'Apache Kafka',
            'Event-Driven', 'CQRS Pattern', 'Saga Pattern', 'Observability',
            'Prometheus', 'Grafana', 'Distributed Tracing', 'Jaeger'
        ]
    },

    // CLC12201 - Cloud Computing
    'cloud-computing': {
        id: 'cloud-computing',
        codigo: 'CLC12201',
        nombre: 'Cloud Computing',
        nombreCorto: 'Cloud Computing',
        bimestre: 12,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que profundiza en servicios cloud, IaC (Infrastructure as Code), serverless y arquitecturas cloud-native.',
        proposito: 'Desarrollar competencias avanzadas en cloud computing, preparando al estudiante para diseñar e implementar soluciones escalables en la nube.',
        objetivos: [
            'Diseñar arquitecturas cloud escalables',
            'Implementar Infrastructure as Code',
            'Desarrollar aplicaciones serverless',
            'Configurar servicios managed de cloud',
            'Aplicar cost optimization',
            'Implementar disaster recovery'
        ],
        competencias: [
            'Diseño de arquitecturas cloud multi-tier con alta disponibilidad y tolerancia a fallos',
            'Dominio de servicios AWS core: EC2, S3, RDS, Lambda, VPC, IAM, CloudWatch',
            'Implementación de Infrastructure as Code con Terraform incluyendo módulos y workspaces',
            'Desarrollo de aplicaciones serverless con Lambda, API Gateway y Step Functions',
            'Configuración de networking avanzado: VPCs, subnets, NAT, Transit Gateway, PrivateLink',
            'Aplicación de Well-Architected Framework: security, reliability, performance, cost, sustainability',
            'Gestión de costos cloud con Reserved Instances, Savings Plans, Spot y right-sizing',
            'Implementación de disaster recovery con RTO/RPO definidos y multi-region failover'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Servicios Cloud Core',
                semanas: 'Semana 1-3',
                descripcion: 'Servicios fundamentales de AWS y arquitecturas cloud.',
                contenidos: [
                    'Compute services: EC2 instance types, AMIs, Auto Scaling Groups, Launch Templates',
                    'Container services: ECS, EKS, Fargate, task definitions, service discovery',
                    'Storage services: S3 storage classes, lifecycle policies, versioning, replication',
                    'Block storage: EBS volume types, snapshots, encryption, IOPS optimization',
                    'Networking fundamentals: VPC design, subnets (public/private), route tables, NAT Gateway',
                    'Security groups vs NACLs: stateful vs stateless, rule evaluation, best practices',
                    'Database services: RDS multi-AZ, read replicas, Aurora, DynamoDB capacity modes',
                    'IAM deep dive: policies, roles, instance profiles, permission boundaries, STS',
                    'CloudWatch: metrics, logs, alarms, dashboards, Log Insights queries',
                    'AWS CLI y SDK: configuration, profiles, programmatic access, boto3 basics'
                ],
                actividades: [
                    'Diseño e implementación de VPC multi-tier con subnets públicas y privadas',
                    'Configuración de Auto Scaling Group con Launch Template y scaling policies',
                    'Setup de RDS con multi-AZ y read replica con failover testing',
                    'Implementación de políticas IAM siguiendo principio de least privilege',
                    'Configuración de CloudWatch dashboards y alarmas para aplicación web',
                    'Proyecto parcial: Arquitectura 3-tier con alta disponibilidad en 2 AZs'
                ]
            },
            {
                numero: 2,
                titulo: 'Infrastructure as Code',
                semanas: 'Semana 4-5',
                descripcion: 'Automatización de infraestructura con Terraform y GitOps.',
                contenidos: [
                    'Terraform fundamentals: providers, resources, data sources, locals, outputs',
                    'HCL syntax: variables, types, expressions, functions, dynamic blocks',
                    'Terraform modules: structure, inputs/outputs, versioning, registry, composition',
                    'State management: remote backends (S3), state locking (DynamoDB), workspaces',
                    'Terraform workflows: init, plan, apply, destroy, import, state commands',
                    'AWS CDK: constructs, stacks, apps, assets, context, synthesis',
                    'CDK patterns: L1/L2/L3 constructs, custom constructs, best practices',
                    'GitOps for infrastructure: Atlantis, Terraform Cloud, drift detection',
                    'Testing IaC: terraform validate, tflint, checkov, infracost, terratest',
                    'Secrets management: AWS Secrets Manager, Parameter Store, external-secrets'
                ],
                actividades: [
                    'Desarrollo de módulos Terraform reutilizables para VPC, EC2 y RDS',
                    'Configuración de remote state con S3 y DynamoDB locking',
                    'Implementación de múltiples environments con workspaces',
                    'Setup de pipeline CI/CD para Terraform con plan y apply automatizado',
                    'Desarrollo de stack CDK para aplicación serverless',
                    'Integración de checkov y tflint en pipeline de validación'
                ]
            },
            {
                numero: 3,
                titulo: 'Serverless y Optimización',
                semanas: 'Semana 6-8',
                descripcion: 'Arquitecturas serverless, cost optimization y disaster recovery.',
                contenidos: [
                    'Lambda deep dive: layers, extensions, provisioned concurrency, SnapStart',
                    'Lambda optimization: cold starts, memory/CPU, packaging, container images',
                    'API Gateway: REST vs HTTP APIs, authorizers, throttling, caching, custom domains',
                    'Step Functions: state machines, Express vs Standard, error handling, parallel execution',
                    'EventBridge: event buses, rules, targets, schema registry, archive/replay',
                    'SQS y SNS: queues, topics, FIFO, message filtering, fan-out patterns',
                    'Cost optimization: Cost Explorer, budgets, anomaly detection, rightsizing',
                    'Reserved capacity: Reserved Instances, Savings Plans, Spot instances, Spot Fleet',
                    'Disaster recovery: RTO/RPO, backup strategies, pilot light, warm standby, multi-region',
                    'Well-Architected: security, reliability, performance, cost optimization pillars'
                ],
                actividades: [
                    'Desarrollo de API REST serverless con Lambda, API Gateway y DynamoDB',
                    'Implementación de workflow de procesamiento con Step Functions',
                    'Configuración de event-driven architecture con EventBridge y SQS',
                    'Análisis de costos y plan de optimización con Reserved Instances',
                    'Setup de disaster recovery con backup cross-region',
                    'Proyecto integrador: Aplicación cloud-native serverless con CI/CD'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'AWS', icon: 'amazonwebservices-plain-wordmark', iconType: 'devicon' },
            { nombre: 'Terraform', icon: 'terraform-plain', iconType: 'devicon' },
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' },
            { nombre: 'Kubernetes', icon: 'kubernetes-plain', iconType: 'devicon' },
            { nombre: 'AWS CDK', icon: 'fa-layer-group', iconType: 'fontawesome' },
            { nombre: 'CloudWatch', icon: 'fa-chart-line', iconType: 'fontawesome' },
            { nombre: 'Lambda', icon: 'fa-bolt', iconType: 'fontawesome' },
            { nombre: 'GitHub Actions', icon: 'github-original', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Cloud', ponderacion: 0, descripcion: 'Prácticas en AWS' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Servicios core' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'IaC con Terraform' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto serverless' }
        ],
        prerrequisitos: ['DevOps', 'Cloud Native'],
        conexiones: ['Fullstack II', 'Cloud Native I'],
        recursos: [
            { tipo: 'Certificación', nombre: 'AWS Cloud Practitioner', url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/' },
            { tipo: 'Certificación', nombre: 'AWS Solutions Architect Associate', url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/' },
            { tipo: 'Documentación', nombre: 'AWS Documentation', url: 'https://docs.aws.amazon.com/' },
            { tipo: 'Documentación', nombre: 'Terraform AWS Provider', url: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs' },
            { tipo: 'Tutorial', nombre: 'AWS Well-Architected Labs', url: 'https://www.wellarchitectedlabs.com/' },
            { tipo: 'Video', nombre: 'AWS Full Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=ulprqHHWlng' },
            { tipo: 'Curso', nombre: 'Terraform Associate Certification', url: 'https://developer.hashicorp.com/terraform/tutorials/certification' },
            { tipo: 'Práctica', nombre: 'AWS Free Tier Account', url: 'https://aws.amazon.com/free/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-12%20-%20Desarrollo%20Fullstack%20II%2C%20Cloud%20Computing/Cloud%20Computing' }
        ],
        color: 'orange',
        area: 'infraestructura',
        palabrasClave: [
            'AWS', 'Terraform', 'Infrastructure as Code', 'Serverless',
            'AWS Lambda', 'Amazon EC2', 'Amazon S3', 'Amazon VPC',
            'API Gateway', 'AWS Step Functions', 'Disaster Recovery', 'Well-Architected'
        ]
    },

    // =============================================
    // BIMESTRE 13 - FULLSTACK III
    // =============================================

    // FST13201 - Desarrollo Fullstack III
    'fullstack-iii': {
        id: 'fullstack-iii',
        codigo: 'FST13201',
        nombre: 'Desarrollo Fullstack III',
        nombreCorto: 'Desarrollo Fullstack III',
        bimestre: 13,
        creditos: 6,
        horasTeoricas: 2,
        horasPracticas: 6,
        descripcion: 'Asignatura de especialización fullstack que cubre GraphQL, real-time systems, performance optimization y arquitecturas avanzadas.',
        proposito: 'Consolidar y especializar las competencias fullstack del estudiante, preparándolo para liderar proyectos de desarrollo complejo.',
        objetivos: [
            'Implementar APIs GraphQL',
            'Desarrollar sistemas real-time escalables',
            'Optimizar performance frontend y backend',
            'Aplicar patrones de arquitectura avanzados',
            'Implementar CI/CD completo',
            'Liderar equipos de desarrollo fullstack'
        ],
        competencias: [
            'Diseño e implementación de APIs GraphQL con schema-first approach y federation',
            'Desarrollo de sistemas real-time escalables con WebSockets, SSE y GraphQL subscriptions',
            'Performance engineering: profiling, bundle optimization, lazy loading y caching strategies',
            'Aplicación de patrones de arquitectura avanzados: Hexagonal, DDD tactical patterns, CQRS',
            'Implementación de multi-tenancy con data isolation y configuración por tenant',
            'Dominio de deployment strategies: blue-green, canary, feature flags y A/B testing',
            'Liderazgo técnico: code reviews, pair programming, mentoring y technical writing',
            'Quality engineering: automated testing, SonarQube, technical debt management'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'GraphQL y APIs Avanzadas',
                semanas: 'Semana 1-3',
                descripcion: 'Diseño e implementación de APIs modernas con GraphQL y Apollo.',
                contenidos: [
                    'GraphQL schema design: types, interfaces, unions, enums, input types, directives',
                    'Query design: arguments, aliases, fragments, variables, inline fragments',
                    'Mutations: input validation, error handling, optimistic updates, file uploads',
                    'Subscriptions: WebSocket transport, pub/sub patterns, subscription filtering',
                    'Apollo Server: context, plugins, data sources, error formatting, caching',
                    'Apollo Client: cache policies, reactive variables, local state, cache manipulation',
                    'DataLoaders: batching, caching, per-request instances, N+1 problem resolution',
                    'Apollo Federation: subgraphs, entities, @key directive, supergraph composition',
                    'GraphQL security: query depth limiting, query complexity, persisted queries, rate limiting',
                    'GraphQL vs REST: trade-offs, migration strategies, hybrid approaches, BFF pattern'
                ],
                actividades: [
                    'Diseño de schema GraphQL para dominio e-commerce con tipos complejos',
                    'Implementación de Apollo Server con data sources para REST y database',
                    'Desarrollo de cliente Apollo React con cache optimizado y optimistic UI',
                    'Configuración de subscriptions real-time para notificaciones',
                    'Implementación de DataLoaders para resolver N+1 queries',
                    'Proyecto parcial: API GraphQL federada con 2 subgraphs'
                ]
            },
            {
                numero: 2,
                titulo: 'Performance Engineering',
                semanas: 'Semana 4-5',
                descripcion: 'Optimización de rendimiento fullstack y load testing.',
                contenidos: [
                    'Frontend performance: bundle analysis, code splitting, tree shaking, lazy loading',
                    'Core Web Vitals: LCP, FID, CLS optimization strategies, Lighthouse audits',
                    'Image optimization: formats (WebP, AVIF), responsive images, lazy loading, CDN',
                    'Backend optimization: connection pooling, query optimization, async processing',
                    'Caching strategies: HTTP caching, CDN, Redis, application-level caching, cache invalidation',
                    'Database performance: query analysis, indexing strategies, query plans, N+1 detection',
                    'Load testing: k6 scripts, scenarios, thresholds, virtual users, ramp-up patterns',
                    'Profiling: Chrome DevTools, Node.js profiler, flame graphs, memory leaks',
                    'APM tools: New Relic, Datadog, distributed tracing, bottleneck identification',
                    'Edge computing: Cloudflare Workers, Vercel Edge Functions, edge caching'
                ],
                actividades: [
                    'Auditoría de performance con Lighthouse y análisis de Core Web Vitals',
                    'Optimización de bundle con code splitting y lazy loading',
                    'Implementación de caching multi-nivel (CDN, Redis, HTTP headers)',
                    'Análisis y optimización de queries lentas con explain plans',
                    'Suite de load testing con k6 para endpoints críticos',
                    'Proyecto: Optimización completa reduciendo LCP 50%'
                ]
            },
            {
                numero: 3,
                titulo: 'Arquitecturas Avanzadas',
                semanas: 'Semana 6-8',
                descripcion: 'Patrones de arquitectura enterprise y liderazgo técnico.',
                contenidos: [
                    'Hexagonal architecture: ports, adapters, domain isolation, dependency inversion',
                    'DDD tactical patterns: aggregates, entities, value objects, domain events, repositories',
                    'Multi-tenant architectures: database per tenant, schema per tenant, shared database',
                    'Feature flags: LaunchDarkly, Unleash, trunk-based development, experimentation',
                    'Deployment strategies: blue-green, canary releases, progressive rollouts, rollback',
                    'Technical documentation: ADRs, C4 diagrams, API docs, runbooks, onboarding guides',
                    'Code quality: SonarQube, ESLint custom rules, pre-commit hooks, quality gates',
                    'Technical debt: identification, prioritization, refactoring strategies, boy scout rule',
                    'Code review best practices: review checklist, constructive feedback, PR templates',
                    'Team leadership: pair programming, mob programming, knowledge sharing, mentoring'
                ],
                actividades: [
                    'Refactoring de aplicación existente a arquitectura hexagonal',
                    'Implementación de bounded context con DDD tactical patterns',
                    'Configuración de multi-tenancy con aislamiento de datos',
                    'Setup de feature flags con LaunchDarkly para releases graduales',
                    'Creación de documentación técnica completa (ADRs, C4, runbooks)',
                    'Proyecto capstone: Sistema fullstack enterprise-grade con documentación'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'GraphQL', icon: 'graphql-plain', iconType: 'devicon' },
            { nombre: 'Apollo', icon: 'fa-project-diagram', iconType: 'fontawesome' },
            { nombre: 'Redis', icon: 'redis-plain', iconType: 'devicon' },
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' },
            { nombre: 'k6', icon: 'fa-chart-bar', iconType: 'fontawesome' },
            { nombre: 'Lighthouse', icon: 'fa-tachometer-alt', iconType: 'fontawesome' },
            { nombre: 'SonarQube', icon: 'sonarqube-plain', iconType: 'devicon' },
            { nombre: 'LaunchDarkly', icon: 'fa-flag', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Avanzados', ponderacion: 0, descripcion: 'Prácticas especializadas' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'GraphQL' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Performance' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Capstone project' }
        ],
        prerrequisitos: ['Fullstack II'],
        conexiones: ['Cloud Native I', 'App Móviles'],
        recursos: [
            { tipo: 'Documentación', nombre: 'GraphQL Official Docs', url: 'https://graphql.org/learn/' },
            { tipo: 'Documentación', nombre: 'Apollo GraphQL Docs', url: 'https://www.apollographql.com/docs/' },
            { tipo: 'Tutorial', nombre: 'Apollo Federation Guide', url: 'https://www.apollographql.com/docs/federation/' },
            { tipo: 'Herramienta', nombre: 'k6 Load Testing', url: 'https://k6.io/docs/' },
            { tipo: 'Video', nombre: 'GraphQL Full Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=ed8SzALpx1Q' },
            { tipo: 'Tutorial', nombre: 'web.dev Performance Guide', url: 'https://web.dev/learn/performance' },
            { tipo: 'Libro', nombre: 'Learning GraphQL (Eve Porcello)', url: 'https://www.oreilly.com/library/view/learning-graphql/9781492030706/' },
            { tipo: 'Curso', nombre: 'GraphQL by Example - Udemy', url: 'https://www.udemy.com/course/graphql-by-example/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-13%20-%20Desarrollo%20Fullstack%20III%2C%20DevOps/Desarrollo%20Fullstack%20III' }
        ],
        color: 'teal',
        area: 'programacion',
        palabrasClave: [
            'GraphQL', 'Apollo Server', 'Real-Time Apps', 'WebSockets',
            'Performance Optimization', 'Core Web Vitals', 'k6 Load Testing',
            'Multi-Tenancy', 'Domain-Driven Design', 'Hexagonal Architecture'
        ]
    },

    // =============================================
    // BIMESTRE 14 - APP MÓVILES & CLOUD NATIVE I
    // =============================================

    // MOB14201 - Desarrollo App Móviles
    'app-moviles': {
        id: 'app-moviles',
        codigo: 'MOB14201',
        nombre: 'Desarrollo de Aplicaciones Móviles',
        nombreCorto: 'Desarrollo App Móviles',
        bimestre: 14,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura avanzada de desarrollo móvil que cubre Flutter, desarrollo nativo avanzado, offline-first y publicación en stores.',
        proposito: 'Especializar al estudiante en desarrollo móvil multiplataforma, preparándolo para crear aplicaciones móviles profesionales.',
        objetivos: [
            'Desarrollar aplicaciones con Flutter',
            'Implementar arquitecturas móviles avanzadas',
            'Crear aplicaciones offline-first',
            'Integrar con servicios nativos',
            'Publicar en App Store y Play Store',
            'Optimizar rendimiento móvil'
        ],
        competencias: [
            'Dominio de Flutter framework y lenguaje Dart para desarrollo multiplataforma',
            'Implementación de state management avanzado con Riverpod, Bloc y Provider',
            'Diseño de arquitecturas móviles escalables: Clean Architecture, MVVM, Repository pattern',
            'Desarrollo de aplicaciones offline-first con sincronización y conflict resolution',
            'Integración con servicios nativos: cámara, GPS, biometría, notificaciones push',
            'Optimización de rendimiento móvil: rendering, memoria, batería, startup time',
            'Publicación en App Store y Play Store con CI/CD automatizado (Codemagic, Fastlane)',
            'Testing móvil: widget tests, integration tests, golden tests, device labs'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Flutter Development',
                semanas: 'Semana 1-3',
                descripcion: 'Fundamentos de Flutter framework y lenguaje Dart.',
                contenidos: [
                    'Dart fundamentals: null safety, async/await, streams, extensions, mixins',
                    'Dart advanced: isolates, generics, code generation, annotations',
                    'Flutter widget tree: StatelessWidget, StatefulWidget, InheritedWidget, lifecycle',
                    'Layout system: Row, Column, Stack, Expanded, Flexible, constraints, overflow',
                    'State management: Provider, Riverpod, Bloc/Cubit, GetX comparison',
                    'Riverpod deep dive: providers, modifiers, families, autodispose, dependency injection',
                    'Navigation: GoRouter, Navigator 2.0, deep linking, URL strategies',
                    'Flutter DevTools: widget inspector, performance overlay, memory profiler',
                    'Hot reload vs hot restart: cuando usar cada uno, limitaciones',
                    'Custom widgets: CustomPainter, RenderObject, platform views'
                ],
                actividades: [
                    'Desarrollo de app Flutter con arquitectura limpia y Riverpod',
                    'Implementación de navegación compleja con GoRouter y deep linking',
                    'Creación de custom widgets con CustomPainter',
                    'Profiling y optimización con Flutter DevTools',
                    'Testing: widget tests, golden tests, integration tests',
                    'Proyecto parcial: App Flutter con state management y navegación'
                ]
            },
            {
                numero: 2,
                titulo: 'Offline y Sincronización',
                semanas: 'Semana 4-5',
                descripcion: 'Aplicaciones offline-first con sincronización y manejo de conflictos.',
                contenidos: [
                    'Local storage options: SharedPreferences, Hive, Isar, SQLite (drift/sqflite)',
                    'Drift (moor): DAOs, type converters, migrations, reactive streams',
                    'Offline-first architecture: repository pattern, sync queue, optimistic updates',
                    'Sync strategies: pull-based, push-based, real-time sync, delta sync',
                    'Conflict resolution: last-write-wins, merge strategies, CRDTs basics',
                    'Background processing: WorkManager, background fetch, isolates for heavy tasks',
                    'Push notifications: FCM, APNs, local notifications, notification channels',
                    'Firebase integration: Firestore offline, Realtime Database, Cloud Functions',
                    'Connectivity handling: network monitoring, retry logic, exponential backoff',
                    'Data serialization: JSON, Protobuf, code generation con freezed y json_serializable'
                ],
                actividades: [
                    'Implementación de capa de persistencia con Drift y migrations',
                    'Desarrollo de sync engine con cola de operaciones y retry logic',
                    'Sistema de resolución de conflictos con timestamps y merge',
                    'Integración de push notifications con FCM y notificaciones locales',
                    'Manejo de conectividad con indicadores visuales y offline queue',
                    'Proyecto: App offline-first con sincronización bidireccional'
                ]
            },
            {
                numero: 3,
                titulo: 'Nativo y Publicación',
                semanas: 'Semana 6-8',
                descripcion: 'Integraciones nativas, optimización y publicación en stores.',
                contenidos: [
                    'Platform channels: MethodChannel, EventChannel, BasicMessageChannel',
                    'Federated plugins: platform interface, implementations, endorsement',
                    'Biometrics: local_auth, secure storage con flutter_secure_storage',
                    'Camera y media: camera package, image_picker, video_player, caching',
                    'Sensors y device: geolocation, accelerometer, gyroscope, battery',
                    'App signing: Android keystore, iOS certificates, profiles, entitlements',
                    'Play Store: release build, app bundle, staged rollout, A/B testing',
                    'App Store: Archive, App Store Connect, review guidelines, TestFlight',
                    'CI/CD móvil: Codemagic, Fastlane, GitHub Actions para mobile',
                    'Analytics y crashes: Firebase Analytics, Crashlytics, performance monitoring'
                ],
                actividades: [
                    'Desarrollo de plugin Flutter con platform channels',
                    'Implementación de autenticación biométrica y secure storage',
                    'Integración de cámara con preview y procesamiento de imagen',
                    'Configuración de app signing para Android y iOS',
                    'Setup de CI/CD con Codemagic para builds automatizados',
                    'Proyecto integrador: App publicable en ambas stores con CI/CD'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Flutter', icon: 'flutter-plain', iconType: 'devicon' },
            { nombre: 'Dart', icon: 'dart-plain', iconType: 'devicon' },
            { nombre: 'Firebase', icon: 'firebase-plain', iconType: 'devicon' },
            { nombre: 'SQLite', icon: 'sqlite-plain', iconType: 'devicon' },
            { nombre: 'Android Studio', icon: 'androidstudio-plain', iconType: 'devicon' },
            { nombre: 'Xcode', icon: 'xcode-plain', iconType: 'devicon' },
            { nombre: 'Codemagic', icon: 'fa-rocket', iconType: 'fontawesome' },
            { nombre: 'Fastlane', icon: 'fa-road', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Flutter', ponderacion: 0, descripcion: 'Prácticas móviles' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Flutter basics' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Offline-first' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'App completa' }
        ],
        prerrequisitos: ['Mobile II'],
        conexiones: ['Cloud Native I'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Flutter Official Docs', url: 'https://docs.flutter.dev/' },
            { tipo: 'Documentación', nombre: 'Dart Language Guide', url: 'https://dart.dev/guides' },
            { tipo: 'Tutorial', nombre: 'Flutter Codelabs', url: 'https://docs.flutter.dev/codelabs' },
            { tipo: 'Curso', nombre: 'Flutter Complete Course - Udemy', url: 'https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/' },
            { tipo: 'Video', nombre: 'Flutter Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=VPvVD8t02U8' },
            { tipo: 'Tutorial', nombre: 'Riverpod Documentation', url: 'https://riverpod.dev/docs/introduction/getting_started' },
            { tipo: 'Herramienta', nombre: 'Codemagic CI/CD', url: 'https://codemagic.io/' },
            { tipo: 'Libro', nombre: 'Flutter in Action (Eric Windmill)', url: 'https://www.manning.com/books/flutter-in-action' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-14%20-%20Desarrollo%20App%20Moviles%2C%20Cloud%20Native%20I/Desarrollo%20App%20Moviles' }
        ],
        color: 'blue',
        area: 'mobile',
        palabrasClave: [
            'Flutter', 'Dart Language', 'Riverpod', 'State Management',
            'Offline-First', 'Push Notifications', 'App Store', 'Play Store',
            'Mobile CI/CD', 'Codemagic', 'Fastlane', 'Cross-Platform'
        ]
    },

    // CLN14201 - Cloud Native I
    'cloud-native-i': {
        id: 'cloud-native-i',
        codigo: 'CLN14201',
        nombre: 'Cloud Native I',
        nombreCorto: 'Cloud Native I',
        bimestre: 14,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que introduce desarrollo cloud-native con Kubernetes, service mesh y observabilidad avanzada.',
        proposito: 'Desarrollar competencias en arquitecturas cloud-native, preparando al estudiante para operar aplicaciones en Kubernetes.',
        objetivos: [
            'Desplegar aplicaciones en Kubernetes',
            'Implementar service mesh',
            'Configurar observabilidad cloud-native',
            'Aplicar GitOps workflows',
            'Gestionar secrets y configuration',
            'Implementar auto-scaling'
        ],
        competencias: [
            'Dominio de arquitectura y operaciones de Kubernetes: deployments, services, networking',
            'Desarrollo y gestión de Helm charts para packaging de aplicaciones cloud-native',
            'Implementación de GitOps workflows con ArgoCD para continuous deployment',
            'Configuración de service mesh con Istio: traffic management, security, observability',
            'Gestión de secrets y configuration management con External Secrets y ConfigMaps',
            'Implementación de auto-scaling: HPA, VPA, KEDA para event-driven scaling',
            'Observabilidad cloud-native: Prometheus, Grafana, Jaeger, alerting avanzado',
            'Troubleshooting de clusters: debugging pods, network policies, resource issues'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Kubernetes Fundamentals',
                semanas: 'Semana 1-3',
                descripcion: 'Arquitectura y operaciones fundamentales de Kubernetes.',
                contenidos: [
                    'K8s architecture: control plane, nodes, kubelet, kube-proxy, container runtime',
                    'Pods: lifecycle, init containers, sidecar pattern, resource requests/limits',
                    'Workloads: Deployments, ReplicaSets, StatefulSets, DaemonSets, Jobs, CronJobs',
                    'Services: ClusterIP, NodePort, LoadBalancer, ExternalName, headless services',
                    'ConfigMaps y Secrets: creation, mounting, environment variables, immutable configs',
                    'Storage: PersistentVolumes, PersistentVolumeClaims, StorageClasses, dynamic provisioning',
                    'Networking: CNI plugins, DNS, Network Policies, pod-to-pod communication',
                    'Ingress: NGINX Ingress Controller, path-based routing, TLS termination, annotations',
                    'kubectl: essential commands, contexts, output formatting, port-forward, exec',
                    'k9s y Lens: GUI tools for cluster management, resource monitoring, log viewing'
                ],
                actividades: [
                    'Setup de cluster local con kind y múltiples nodes',
                    'Deployment de aplicación multi-tier con services y networking',
                    'Configuración de Ingress con TLS usando cert-manager',
                    'Gestión de storage con PV/PVC para base de datos',
                    'Implementación de Network Policies para aislamiento',
                    'Proyecto parcial: Aplicación 3-tier desplegada en K8s'
                ]
            },
            {
                numero: 2,
                titulo: 'Helm y GitOps',
                semanas: 'Semana 4-5',
                descripcion: 'Packaging de aplicaciones y deployment automatizado con GitOps.',
                contenidos: [
                    'Helm architecture: charts, templates, values, releases, hooks',
                    'Template syntax: built-in objects, functions, pipelines, control structures',
                    'Chart development: dependencies, library charts, chart testing, linting',
                    'Chart repositories: hosting, OCI registries, artifacthub.io',
                    'ArgoCD architecture: Application CRD, sync policies, health checks',
                    'GitOps principles: declarative, versioned, automated, auditable',
                    'ApplicationSets: cluster generator, git generator, matrix generator',
                    'Sync strategies: auto-sync, manual, selective sync, prune policies',
                    'Progressive delivery: Argo Rollouts, canary, blue-green, analysis runs',
                    'Secrets in GitOps: Sealed Secrets, SOPS, External Secrets Operator'
                ],
                actividades: [
                    'Desarrollo de Helm chart con templates parametrizados',
                    'Publicación de chart en OCI registry (GitHub Container Registry)',
                    'Setup de ArgoCD y configuración de Applications',
                    'Implementación de ApplicationSet para multi-environment',
                    'Canary deployment con Argo Rollouts y análisis automatizado',
                    'Gestión de secrets con External Secrets Operator'
                ]
            },
            {
                numero: 3,
                titulo: 'Service Mesh y Observability',
                semanas: 'Semana 6-8',
                descripcion: 'Networking avanzado con Istio y observability stack cloud-native.',
                contenidos: [
                    'Service mesh concepts: sidecar proxy, control plane, data plane',
                    'Istio architecture: Pilot, Envoy, Istiod, Ingress/Egress Gateway',
                    'Traffic management: VirtualService, DestinationRule, traffic splitting, mirroring',
                    'Resilience: timeouts, retries, circuit breakers, outlier detection',
                    'Security: mTLS, PeerAuthentication, AuthorizationPolicy, RequestAuthentication',
                    'Prometheus in K8s: ServiceMonitor, PodMonitor, rules, recording rules',
                    'Grafana dashboards: K8s dashboards, custom dashboards, alerting',
                    'Distributed tracing: Jaeger, trace context propagation, sampling strategies',
                    'Kiali: service mesh visualization, traffic flow, configuration validation',
                    'Auto-scaling: HPA, VPA, KEDA, custom metrics scaling'
                ],
                actividades: [
                    'Instalación y configuración de Istio con istioctl',
                    'Implementación de traffic management: canary, A/B testing',
                    'Configuración de mTLS strict mode y AuthorizationPolicies',
                    'Setup de Prometheus stack con ServiceMonitors',
                    'Creación de Grafana dashboards para métricas de aplicación',
                    'Proyecto integrador: App cloud-native con service mesh y observability'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Kubernetes', icon: 'kubernetes-plain', iconType: 'devicon' },
            { nombre: 'Helm', icon: 'helm-original', iconType: 'devicon' },
            { nombre: 'ArgoCD', icon: 'argocd-original', iconType: 'devicon' },
            { nombre: 'Prometheus', icon: 'prometheus-original', iconType: 'devicon' },
            { nombre: 'Grafana', icon: 'grafana-original', iconType: 'devicon' },
            { nombre: 'Istio', icon: 'fa-network-wired', iconType: 'fontawesome' },
            { nombre: 'Jaeger', icon: 'fa-project-diagram', iconType: 'fontawesome' },
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs K8s', ponderacion: 0, descripcion: 'Prácticas en cluster' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Kubernetes basics' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Helm y GitOps' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Cloud-native app' }
        ],
        prerrequisitos: ['Cloud Computing', 'DevOps'],
        conexiones: ['Cloud Native II'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Kubernetes Official Docs', url: 'https://kubernetes.io/docs/' },
            { tipo: 'Documentación', nombre: 'Helm Documentation', url: 'https://helm.sh/docs/' },
            { tipo: 'Documentación', nombre: 'ArgoCD Docs', url: 'https://argo-cd.readthedocs.io/' },
            { tipo: 'Certificación', nombre: 'CKA Certification', url: 'https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/' },
            { tipo: 'Certificación', nombre: 'CKAD Certification', url: 'https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/' },
            { tipo: 'Video', nombre: 'Kubernetes Full Course - TechWorld with Nana', url: 'https://www.youtube.com/watch?v=X48VuDVv0do' },
            { tipo: 'Tutorial', nombre: 'CKAD Exercises - GitHub', url: 'https://github.com/dgkanatsios/CKAD-exercises' },
            { tipo: 'Práctica', nombre: 'Killercoda K8s Labs', url: 'https://killercoda.com/playgrounds/scenario/kubernetes' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-14%20-%20Desarrollo%20App%20Moviles%2C%20Cloud%20Native%20I/Cloud%20Native%20I' }
        ],
        color: 'blue',
        area: 'infraestructura',
        palabrasClave: [
            'Kubernetes', 'Helm Charts', 'ArgoCD', 'GitOps',
            'Istio Service Mesh', 'Observability Stack', 'Prometheus',
            'Grafana', 'Jaeger Tracing', 'CI/CD Pipelines', 'K8s Operators'
        ]
    },

    // =============================================
    // BIMESTRE 15 - CLOUD NATIVE II & SEGURIDAD
    // =============================================

    // CLN15201 - Cloud Native II
    'cloud-native-ii': {
        id: 'cloud-native-ii',
        codigo: 'CLN15201',
        nombre: 'Cloud Native II',
        nombreCorto: 'Cloud Native II',
        bimestre: 15,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura avanzada de cloud-native que cubre multi-cluster, disaster recovery, security y platform engineering.',
        proposito: 'Profundizar en operaciones cloud-native avanzadas, preparando al estudiante para roles de SRE y Platform Engineering.',
        objetivos: [
            'Gestionar múltiples clusters',
            'Implementar disaster recovery',
            'Aplicar security best practices',
            'Desarrollar internal developer platforms',
            'Implementar FinOps',
            'Liderar iniciativas cloud-native'
        ],
        competencias: [
            'Gestión de arquitecturas multi-cluster con federation y cross-cluster networking',
            'Implementación de disaster recovery con Velero, backup strategies y failover automatizado',
            'Aplicación de Kubernetes security: Pod Security Standards, OPA Gatekeeper, Falco',
            'Integración de HashiCorp Vault para secrets management y PKI automation',
            'Desarrollo de Internal Developer Platforms (IDP) con Backstage y service catalogs',
            'Implementación de FinOps: cost allocation, chargebacks, resource optimization',
            'Definición y gestión de SLOs, error budgets y reliability engineering',
            'Liderazgo en iniciativas de platform engineering y DevEx optimization'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Multi-Cluster y HA',
                semanas: 'Semana 1-3',
                descripcion: 'Gestión de múltiples clusters y alta disponibilidad.',
                contenidos: [
                    'Multi-cluster architectures: hub-spoke, mesh, hierarchical topologies',
                    'Kubernetes Federation v2: kubefed, resource propagation, scheduling policies',
                    'Cross-cluster networking: Submariner, Cilium Cluster Mesh, Linkerd multi-cluster',
                    'Service discovery: cross-cluster DNS, service export/import, locality awareness',
                    'Disaster recovery strategies: active-active, active-passive, pilot light',
                    'Velero: backup schedules, restore workflows, resource filtering, hooks',
                    'RTO/RPO planning: impact analysis, recovery procedures, testing schedules',
                    'Storage replication: CSI drivers, cross-region replication, data consistency',
                    'Global load balancing: DNS-based, anycast, traffic management policies',
                    'Chaos engineering: Litmus, Chaos Mesh, fault injection, game days'
                ],
                actividades: [
                    'Setup de arquitectura multi-cluster con Cilium Cluster Mesh',
                    'Configuración de cross-cluster service discovery',
                    'Implementación de backup automatizado con Velero y schedules',
                    'Simulación de disaster recovery con failover entre clusters',
                    'Definición de RTO/RPO y documentación de runbooks',
                    'Proyecto parcial: Multi-cluster con DR automatizado'
                ]
            },
            {
                numero: 2,
                titulo: 'Security y Compliance',
                semanas: 'Semana 4-5',
                descripcion: 'Seguridad avanzada en Kubernetes y compliance.',
                contenidos: [
                    'Pod Security Standards: Privileged, Baseline, Restricted enforcement',
                    'Pod Security Admission: namespace labels, modes (enforce, audit, warn)',
                    'OPA Gatekeeper: ConstraintTemplates, Constraints, audit mode, dry-run',
                    'Kyverno: policies as K8s resources, mutating, validating, generating',
                    'Network Policies avanzadas: egress rules, CIDR blocks, named ports',
                    'Vault integration: Kubernetes auth, secrets injection, PKI management',
                    'Image security: Trivy, Harbor, admission webhooks, signature verification',
                    'Runtime security: Falco, syscall monitoring, anomaly detection',
                    'Compliance frameworks: SOC 2, PCI-DSS, HIPAA mappings to K8s controls',
                    'Security auditing: CIS benchmarks, kube-bench, kubescape, audit logging'
                ],
                actividades: [
                    'Implementación de Pod Security Standards con admission controller',
                    'Desarrollo de Gatekeeper policies para compliance requirements',
                    'Integración de Vault con Kubernetes para secrets injection',
                    'Configuración de image scanning en pipeline con admission webhook',
                    'Setup de Falco para detección de anomalías en runtime',
                    'Auditoría de cluster con kube-bench y plan de remediación'
                ]
            },
            {
                numero: 3,
                titulo: 'Platform Engineering',
                semanas: 'Semana 6-8',
                descripcion: 'Internal Developer Platforms y FinOps.',
                contenidos: [
                    'Platform engineering principles: self-service, golden paths, guardrails',
                    'Developer experience (DevEx): cognitive load, flow state, developer portals',
                    'Backstage architecture: core, plugins, software catalog, templates',
                    'Software catalog: entities, relations, ownership, TechDocs integration',
                    'Software templates: scaffolding, parameters, actions, cookiecutter',
                    'Crossplane: compositions, claims, providers, infrastructure abstraction',
                    'FinOps fundamentals: showback, chargeback, cost allocation, unit economics',
                    'Kubecost: cost monitoring, allocation, optimization recommendations',
                    'SLOs y SLIs: definition, measurement, error budgets, burn rate alerts',
                    'Reliability engineering: toil reduction, automation, capacity planning'
                ],
                actividades: [
                    'Setup de Backstage con software catalog y ownership model',
                    'Desarrollo de software templates para onboarding de servicios',
                    'Implementación de Crossplane para infrastructure self-service',
                    'Configuración de Kubecost con cost allocation por team',
                    'Definición de SLOs y dashboards de error budget',
                    'Proyecto integrador: Internal Developer Platform completa'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Kubernetes', icon: 'kubernetes-plain', iconType: 'devicon' },
            { nombre: 'Vault', icon: 'vault-original', iconType: 'devicon' },
            { nombre: 'Terraform', icon: 'terraform-plain', iconType: 'devicon' },
            { nombre: 'Grafana', icon: 'grafana-original', iconType: 'devicon' },
            { nombre: 'Backstage', icon: 'fa-puzzle-piece', iconType: 'fontawesome' },
            { nombre: 'Crossplane', icon: 'fa-cubes', iconType: 'fontawesome' },
            { nombre: 'Falco', icon: 'fa-eye', iconType: 'fontawesome' },
            { nombre: 'Velero', icon: 'fa-archive', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Avanzados', ponderacion: 0, descripcion: 'Prácticas enterprise' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Multi-cluster' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Security' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Platform project' }
        ],
        prerrequisitos: ['Cloud Native I'],
        conexiones: ['Seguridad y Calidad'],
        recursos: [
            { tipo: 'Certificación', nombre: 'CKS Certification', url: 'https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/' },
            { tipo: 'Documentación', nombre: 'HashiCorp Vault Docs', url: 'https://developer.hashicorp.com/vault/docs' },
            { tipo: 'Documentación', nombre: 'Backstage Docs', url: 'https://backstage.io/docs/overview/what-is-backstage' },
            { tipo: 'Documentación', nombre: 'Crossplane Docs', url: 'https://docs.crossplane.io/' },
            { tipo: 'Video', nombre: 'Platform Engineering - CNCF', url: 'https://www.youtube.com/watch?v=ghzsBm8vOms' },
            { tipo: 'Tutorial', nombre: 'FinOps with Kubecost', url: 'https://www.kubecost.com/kubernetes-cost-optimization/' },
            { tipo: 'Libro', nombre: 'Platform Engineering on Kubernetes', url: 'https://www.manning.com/books/platform-engineering-on-kubernetes' },
            { tipo: 'Curso', nombre: 'Site Reliability Engineering - Google', url: 'https://sre.google/sre-book/table-of-contents/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-15%20-%20Cloud%20Native%20II%2C%20Seguridad%20y%20Calidad/Cloud%20Native%20II' }
        ],
        color: 'blue',
        area: 'infraestructura',
        palabrasClave: [
            'Multi-Cluster K8s', 'Disaster Recovery', 'Velero Backup',
            'HashiCorp Vault', 'Backstage Portal', 'Platform Engineering',
            'FinOps', 'SRE Practices', 'SLOs/SLIs', 'Chaos Engineering'
        ]
    },

    // SEG15201 - Seguridad y Calidad
    'seguridad-calidad': {
        id: 'seguridad-calidad',
        codigo: 'SEG15201',
        nombre: 'Seguridad y Calidad de Software',
        nombreCorto: 'Seguridad y Calidad',
        bimestre: 15,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que integra seguridad de aplicaciones (AppSec) y calidad de software, cubriendo OWASP, SAST/DAST y métricas de calidad.',
        proposito: 'Desarrollar competencias en seguridad y calidad de software, preparando al estudiante para crear aplicaciones seguras y de alta calidad.',
        objetivos: [
            'Aplicar OWASP Top 10 y security best practices',
            'Implementar SAST y DAST en pipelines',
            'Definir y medir métricas de calidad',
            'Realizar security code reviews',
            'Implementar DevSecOps',
            'Gestionar vulnerabilidades'
        ],
        competencias: [
            'Dominio de OWASP Top 10 y aplicación de secure coding practices',
            'Implementación de SAST/DAST/SCA en pipelines CI/CD con SonarQube, Snyk y ZAP',
            'Realización de security code reviews y threat modeling con STRIDE',
            'Configuración de quality gates y enforcement de métricas de calidad',
            'Gestión de vulnerabilidades: priorización, tracking, SLAs de remediación',
            'Implementación de DevSecOps: shift-left security, security champions program',
            'Testing de seguridad avanzado: penetration testing basics, fuzzing, API security',
            'Compliance automation: CIS benchmarks, SOC 2 controls, audit trails'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Application Security',
                semanas: 'Semana 1-3',
                descripcion: 'Fundamentos de seguridad de aplicaciones y secure coding.',
                contenidos: [
                    'OWASP Top 10 2021: A01-Broken Access Control a A10-SSRF con ejemplos',
                    'Injection attacks: SQL, NoSQL, LDAP, Command injection - prevención y sanitización',
                    'Authentication security: password policies, MFA, OAuth 2.0/OIDC, JWT best practices',
                    'Session management: secure cookies, token rotation, session fixation prevention',
                    'XSS prevention: input validation, output encoding, CSP, trusted types',
                    'CSRF protection: tokens, SameSite cookies, double-submit pattern',
                    'Security headers: CSP, HSTS, X-Frame-Options, X-Content-Type-Options',
                    'Secure coding: input validation, parameterized queries, error handling',
                    'Cryptography basics: hashing (bcrypt, Argon2), encryption, key management',
                    'Threat modeling: STRIDE methodology, attack trees, data flow diagrams'
                ],
                actividades: [
                    'Análisis de código vulnerable y desarrollo de fixes para OWASP Top 10',
                    'Implementación de autenticación segura con OAuth 2.0 y MFA',
                    'Configuración completa de security headers con análisis en SecurityHeaders.com',
                    'Desarrollo de input validation layer con sanitización',
                    'Threat modeling de aplicación usando STRIDE y diagramas de flujo',
                    'Proyecto parcial: Hardening de aplicación web existente'
                ]
            },
            {
                numero: 2,
                titulo: 'Security Testing',
                semanas: 'Semana 4-5',
                descripcion: 'Testing de seguridad automatizado en pipelines CI/CD.',
                contenidos: [
                    'SAST: SonarQube rules, custom rules, quality profiles, taint analysis',
                    'SCA: Snyk, Dependabot, license compliance, vulnerability prioritization',
                    'DAST: OWASP ZAP automation, active scan, passive scan, API scanning',
                    'Container scanning: Trivy, Grype, base image analysis, vulnerability layers',
                    'IaC scanning: checkov, tfsec, terrascan, compliance as code',
                    'Secrets detection: GitLeaks, TruffleHog, pre-commit hooks, remediation',
                    'API security testing: OWASP API Top 10, Postman security tests, fuzzing',
                    'Penetration testing basics: reconnaissance, vulnerability scanning, exploitation intro',
                    'Security testing in CI/CD: pipeline integration, fail thresholds, reporting',
                    'Bug bounty basics: responsible disclosure, triage, reward programs'
                ],
                actividades: [
                    'Configuración de SonarQube con quality gates y reglas de seguridad',
                    'Integración de Snyk en pipeline con políticas de bloqueo',
                    'Automatización de OWASP ZAP scans con baseline y full scans',
                    'Implementación de container scanning en CI/CD con Trivy',
                    'Configuración de secrets detection en pre-commit y CI',
                    'Security testing E2E: SAST, SCA, DAST integrados en pipeline'
                ]
            },
            {
                numero: 3,
                titulo: 'Calidad y DevSecOps',
                semanas: 'Semana 6-8',
                descripcion: 'Métricas de calidad, DevSecOps y gestión de vulnerabilidades.',
                contenidos: [
                    'Quality gates: definition, metrics thresholds, enforcement policies',
                    'Code coverage: line, branch, mutation testing con Stryker/PIT',
                    'Technical debt: identification, quantification, remediation prioritization',
                    'Security Champions program: roles, training, embedding security culture',
                    'Vulnerability management: CVSS scoring, prioritization matrix, SLAs',
                    'Security dashboards: metrics visualization, trend analysis, executive reporting',
                    'Incident response: playbooks, communication, post-mortem analysis',
                    'Compliance automation: CIS benchmarks, SOC 2 controls, evidence collection',
                    'Secure SDLC: requirements, design reviews, code reviews, testing, deployment',
                    'DevSecOps culture: shifting left, automation, collaboration, continuous improvement'
                ],
                actividades: [
                    'Configuración de quality gates completos con métricas de seguridad',
                    'Implementación de mutation testing para validar test effectiveness',
                    'Desarrollo de security dashboard con métricas y tendencias',
                    'Diseño de vulnerability management workflow con SLAs',
                    'Creación de incident response playbook para tipos de incidentes comunes',
                    'Proyecto integrador: Pipeline DevSecOps completo con todas las herramientas'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'SonarQube', icon: 'sonarqube-plain', iconType: 'devicon' },
            { nombre: 'Snyk', icon: 'fa-shield-alt', iconType: 'fontawesome' },
            { nombre: 'OWASP ZAP', icon: 'fa-bug', iconType: 'fontawesome' },
            { nombre: 'Trivy', icon: 'fa-search', iconType: 'fontawesome' },
            { nombre: 'GitHub Actions', icon: 'github-original', iconType: 'devicon' },
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' },
            { nombre: 'Burp Suite', icon: 'fa-user-secret', iconType: 'fontawesome' },
            { nombre: 'Checkov', icon: 'fa-check-circle', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Security', ponderacion: 0, descripcion: 'Prácticas de seguridad' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'AppSec fundamentals' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Security testing' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'DevSecOps pipeline' }
        ],
        prerrequisitos: ['Ing. Software II', 'DevOps'],
        conexiones: ['Cloud Native II'],
        recursos: [
            { tipo: 'Documentación', nombre: 'OWASP Foundation', url: 'https://owasp.org/' },
            { tipo: 'Curso', nombre: 'OWASP Top 10 Training', url: 'https://owasp.org/www-project-web-security-testing-guide/' },
            { tipo: 'Herramienta', nombre: 'SonarQube Documentation', url: 'https://docs.sonarqube.org/' },
            { tipo: 'Tutorial', nombre: 'Snyk Learn Security', url: 'https://learn.snyk.io/' },
            { tipo: 'Video', nombre: 'Web Security - Computerphile', url: 'https://www.youtube.com/playlist?list=PLzH6n4zXuckrLBxd2MVWH_a6mlN0cYuOL' },
            { tipo: 'Certificación', nombre: 'CompTIA Security+', url: 'https://www.comptia.org/certifications/security' },
            { tipo: 'Práctica', nombre: 'OWASP WebGoat', url: 'https://owasp.org/www-project-webgoat/' },
            { tipo: 'Libro', nombre: 'The Web Application Hackers Handbook', url: 'https://www.wiley.com/en-us/The+Web+Application+Hacker%27s+Handbook%3A+Finding+and+Exploiting+Security+Flaws%2C+2nd+Edition-p-9781118026472' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-15%20-%20Cloud%20Native%20II%2C%20Seguridad%20y%20Calidad/Seguridad%20y%20Calidad' }
        ],
        color: 'red',
        area: 'seguridad',
        palabrasClave: [
            'OWASP Top 10', 'SAST Analysis', 'DAST Testing', 'SonarQube',
            'Snyk Security', 'DevSecOps', 'Application Security',
            'Quality Gates', 'Vulnerability Scanning', 'Threat Modeling'
        ]
    },

    // =============================================
    // BIMESTRE 16 - GESTIÓN DE PROYECTOS SW
    // =============================================

    // EVP16201 - Evaluación de Proyectos de Software
    'evaluacion-proyectos-sw': {
        id: 'evaluacion-proyectos-sw',
        codigo: 'EVP16201',
        nombre: 'Evaluación de Proyectos de Software',
        nombreCorto: 'Evaluación Proyectos SW',
        bimestre: 16,
        creditos: 2,
        horasTeoricas: 2,
        horasPracticas: 2,
        descripcion: 'Asignatura enfocada en técnicas de estimación, métricas de calidad y evaluación de proyectos de software. Incluye análisis de viabilidad, ROI, TCO y metodologías de valoración técnica.',
        proposito: 'Desarrollar competencias para evaluar proyectos de software de manera objetiva, utilizando métricas, indicadores y técnicas de estimación profesionales.',
        objetivos: [
            'Aplicar técnicas de estimación de esfuerzo y costos',
            'Calcular métricas de calidad de software',
            'Evaluar viabilidad técnica y económica de proyectos',
            'Diseñar dashboards de métricas de proyecto',
            'Analizar ROI y TCO de soluciones de software',
            'Implementar sistemas de monitoreo y evaluación continua'
        ],
        competencias: [
            'Dominio de técnicas de estimación: story points, planning poker, function points, COCOMO II',
            'Cálculo de métricas de calidad: cobertura de tests, complejidad ciclomática, deuda técnica',
            'Análisis financiero de proyectos TI: ROI, TCO, NPV, payback period, break-even analysis',
            'Evaluación de viabilidad técnica: proof of concept, spikes, arquitectura decision records',
            'Construcción de dashboards: KPIs, burndown/burnup charts, CFDs, traffic lights',
            'DORA metrics: deployment frequency, lead time, MTTR, change failure rate',
            'Engineering productivity: SPACE framework, developer experience metrics',
            'Forecasting: Monte Carlo simulation, probabilistic estimation, cone of uncertainty'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Técnicas de Estimación',
                semanas: 'Semana 1-3',
                descripcion: 'Metodologías profesionales de estimación de proyectos de software.',
                contenidos: [
                    'Story points: relative sizing, planning poker, reference stories, calibration',
                    'Velocity: calculation, stabilization, forecasting, common anti-patterns',
                    'Function points: IFPUG method, counting rules, adjustment factors, automation',
                    'COCOMO II: effort estimation, scale factors, cost drivers, COCOMO variants',
                    'Three-point estimation: optimistic, pessimistic, most likely, PERT formula',
                    'T-shirt sizing: quick estimation for roadmap planning, portfolio level',
                    'Cone of uncertainty: how estimates improve over time, re-estimation triggers',
                    'Monte Carlo simulation: probabilistic forecasting, confidence intervals',
                    'Estimation anti-patterns: anchoring, padding, commitment vs forecast',
                    '#NoEstimates movement: when estimation adds value and when it does not'
                ],
                actividades: [
                    'Sesión de planning poker con calibración de historias de referencia',
                    'Cálculo de function points para sistema ERP de ejemplo',
                    'Estimación COCOMO II para proyecto de modernización',
                    'Simulación Monte Carlo con herramienta de forecasting',
                    'Análisis comparativo: story points vs horas para mismo proyecto',
                    'Proyecto parcial: Plan de estimación para proyecto real'
                ]
            },
            {
                numero: 2,
                titulo: 'Métricas y KPIs',
                semanas: 'Semana 4-5',
                descripcion: 'Indicadores clave de rendimiento y métricas de calidad de software.',
                contenidos: [
                    'DORA metrics: deployment frequency, lead time for changes, MTTR, change failure rate',
                    'SPACE framework: satisfaction, performance, activity, communication, efficiency',
                    'Code quality metrics: cyclomatic complexity, code coverage, duplications, tech debt',
                    'Burndown y burnup charts: construction, interpretation, forecasting capacity',
                    'Cumulative flow diagrams: WIP limits, bottlenecks, flow efficiency, lead time',
                    'Lead time y cycle time: measurement, optimization, service level agreements',
                    'Defect metrics: defect density, escape rate, MTBF, severity distribution',
                    'Test metrics: coverage, flakiness, execution time, test pyramid balance',
                    'Team health metrics: happiness surveys, turnover, onboarding time',
                    'Business metrics: feature adoption, user satisfaction, NPS, churn'
                ],
                actividades: [
                    'Configuración de dashboard DORA metrics en Azure DevOps',
                    'Análisis de CFD para identificar bottlenecks en proceso',
                    'Cálculo de métricas de calidad con SonarQube',
                    'Diseño de engineering productivity dashboard',
                    'Implementación de tracking automatizado de lead time',
                    'Correlación de métricas técnicas con outcomes de negocio'
                ]
            },
            {
                numero: 3,
                titulo: 'Evaluación Financiera',
                semanas: 'Semana 6-8',
                descripcion: 'Análisis económico y viabilidad de proyectos de software.',
                contenidos: [
                    'ROI de proyectos de software: direct benefits, indirect benefits, risk-adjusted ROI',
                    'TCO (Total Cost of Ownership): licensing, infrastructure, maintenance, hidden costs',
                    'NPV (Net Present Value): discount rate, cash flow projection, sensitivity analysis',
                    'Payback period: simple payback, discounted payback, when to use each',
                    'Break-even analysis: fixed vs variable costs, scaling economics',
                    'Build vs Buy analysis: evaluation criteria, scoring matrix, total cost comparison',
                    'Technical debt quantification: interest rate, principal, repayment strategies',
                    'Value stream mapping: waste identification, process efficiency, improvement ROI',
                    'Business case construction: problem statement, solution options, recommendation',
                    'Risk-adjusted evaluation: sensitivity analysis, scenario planning, contingencies'
                ],
                actividades: [
                    'Cálculo de ROI para proyecto de automatización',
                    'Análisis TCO: on-premise vs cloud migration',
                    'Construcción de business case para modernización de sistema',
                    'Evaluación Build vs Buy para herramienta de CI/CD',
                    'Cuantificación de deuda técnica con SonarQube y costo de remediación',
                    'Proyecto integrador: Evaluación completa de proyecto con recomendación'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Jira', icon: 'jira-plain', iconType: 'devicon' },
            { nombre: 'Azure DevOps', icon: 'azure-plain', iconType: 'devicon' },
            { nombre: 'SonarQube', icon: 'sonarqube-plain', iconType: 'devicon' },
            { nombre: 'Excel/Sheets', icon: 'fa-file-excel', iconType: 'fontawesome' },
            { nombre: 'Power BI', icon: 'fa-chart-bar', iconType: 'fontawesome' },
            { nombre: 'Grafana', icon: 'grafana-plain', iconType: 'devicon' },
            { nombre: 'Datadog', icon: 'fa-chart-line', iconType: 'fontawesome' },
            { nombre: 'Tableau', icon: 'fa-chart-area', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs de métricas', ponderacion: 0, descripcion: 'Prácticas de medición' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Técnicas de estimación' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Métricas y dashboards' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Business case completo' }
        ],
        prerrequisitos: ['Ing. Software II'],
        conexiones: ['Gestión Proyectos SW', 'Taller Aplicado SW'],
        recursos: [
            { tipo: 'Métricas', nombre: 'DORA Research', url: 'https://dora.dev/' },
            { tipo: 'Framework', nombre: 'SPACE Productivity Framework', url: 'https://queue.acm.org/detail.cfm?id=3454124' },
            { tipo: 'Libro', nombre: 'Accelerate (Forsgren, Humble, Kim)', url: 'https://itrevolution.com/book/accelerate/' },
            { tipo: 'Libro', nombre: 'Software Estimation: Demystifying the Black Art', url: 'https://www.amazon.com/Software-Estimation-Demystifying-Black-Art/dp/0735605351' },
            { tipo: 'Herramienta', nombre: 'SonarQube Documentation', url: 'https://docs.sonarqube.org/' },
            { tipo: 'Certificación', nombre: 'PMI-ACP Certification', url: 'https://www.pmi.org/certifications/agile-acp' },
            { tipo: 'Video', nombre: 'Agile Estimating - Mountain Goat Software', url: 'https://www.mountaingoatsoftware.com/presentations/agile-estimating' },
            { tipo: 'Tutorial', nombre: 'COCOMO II Model Tutorial', url: 'https://csse.usc.edu/csse/research/COCOMOII/cocomo_main.html' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-16%20-%20Evaluacion%20y%20Gestion%20Proyectos%20SW/Evaluacion%20Proyectos%20SW' }
        ],
        color: 'purple',
        area: 'gestion',
        palabrasClave: [
            'Software Estimation', 'COCOMO II', 'Story Points', 'Planning Poker',
            'DORA Metrics', 'KPIs', 'ROI Analysis', 'TCO', 'NPV', 'Business Case',
            'SonarQube Metrics', 'Lead Time', 'Velocity Tracking'
        ]
    },

    // GSP16201 - Gestión de Proyectos de Software
    'gestion-proyectos-sw': {
        id: 'gestion-proyectos-sw',
        codigo: 'GSP16201',
        nombre: 'Gestión de Proyectos de Software',
        nombreCorto: 'Gestión Proyectos SW',
        bimestre: 16,
        creditos: 2,
        horasTeoricas: 2,
        horasPracticas: 2,
        descripcion: 'Asignatura enfocada en metodologías ágiles a escala, liderazgo de equipos técnicos, gestión de stakeholders y comunicación efectiva en proyectos de desarrollo de software.',
        proposito: 'Desarrollar competencias de liderazgo y gestión para dirigir equipos de desarrollo de software, aplicando frameworks ágiles y técnicas de comunicación profesional.',
        objetivos: [
            'Aplicar metodologías ágiles a escala (SAFe, LeSS, Nexus)',
            'Liderar equipos de desarrollo de software',
            'Gestionar stakeholders y expectativas',
            'Facilitar ceremonias ágiles efectivamente',
            'Comunicar técnicamente con audiencias diversas',
            'Manejar conflictos y negociaciones en proyectos'
        ],
        competencias: [
            'Aplicación de frameworks de Agile a escala: SAFe, LeSS, Nexus para organizaciones',
            'Liderazgo de equipos técnicos: 1:1s, feedback efectivo, coaching, mentoring, growth plans',
            'Gestión de stakeholders: mapping, expectativas, comunicación, negociación, reporting',
            'Facilitación de ceremonias ágiles: sprint planning, daily, review, retrospective, PI planning',
            'Technical writing: ADRs, RFCs, design docs, runbooks, documentation as code',
            'Presentaciones técnicas: storytelling, visualización de datos, demos, manejo de Q&A',
            'Gestión de riesgos y dependencias: identificación, mitigación, tracking, escalamiento',
            'Remote leadership: comunicación asíncrona, gestión de timezones, cultura de equipo remoto'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Agile a Escala',
                semanas: 'Semana 1-3',
                descripcion: 'Metodologías ágiles para organizaciones con múltiples equipos.',
                contenidos: [
                    'SAFe fundamentals: core values, principles, competencies, configurations (Essential, Large)',
                    'SAFe roles: Release Train Engineer, Product Manager, System Architect responsibilities',
                    'Program Increment planning: preparation, execution, business objectives, risks, confidence',
                    'Agile Release Trains: cadence, synchronization, inspect and adapt, innovation sprints',
                    'LeSS: principles, structure, Sprint, Product Backlog refinement, coordination',
                    'Nexus: integration team, refinement, retrospective, daily scrum, increment',
                    'Agile portfolio management: portfolio kanban, value streams, strategic themes, budgeting',
                    'Value stream mapping: current state, future state, waste identification, improvement plan',
                    'OKRs: objectives, key results, alignment cascade, tracking, review cadence',
                    'Agile transformation: change management, coaching patterns, maturity models, roadmap'
                ],
                actividades: [
                    'Simulación de PI Planning con 4 equipos y roles asignados',
                    'Mapeo de value stream de proceso de desarrollo actual',
                    'Definición de OKRs para departamento de ingeniería',
                    'Diseño de estructura de Agile Release Train para organización',
                    'Análisis de caso: transformación ágil en empresa real',
                    'Proyecto parcial: Propuesta de adopción SAFe para organización'
                ]
            },
            {
                numero: 2,
                titulo: 'Liderazgo Técnico',
                semanas: 'Semana 4-5',
                descripcion: 'Habilidades de liderazgo para managers y tech leads.',
                contenidos: [
                    '1:1 meetings: estructura, temas, feedback, career conversations, skip levels',
                    'Performance management: goal setting, reviews, improvement plans, recognition programs',
                    'Hiring: job descriptions, technical interviews, system design, behavioral, scorecards',
                    'Onboarding: 30-60-90 day plans, buddy system, documentation, ramp-up metrics',
                    'Team building: norming, storming, performing, retrospectives, team health checks',
                    'Delegation: levels of delegation, accountability, autonomy, trust building',
                    'Conflict resolution: sources of conflict, management styles, mediation, escalation',
                    'Growth frameworks: career ladders, skills matrix, individual development plans',
                    'Difficult conversations: feedback frameworks (SBI, COIN), terminations, PIPs',
                    'Engineering culture: values, practices, decision making, psychological safety'
                ],
                actividades: [
                    'Role-play de 1:1 meeting con feedback y coaching',
                    'Diseño de career ladder para equipo de desarrollo',
                    'Mock technical interview como entrevistador',
                    'Creación de onboarding plan para nuevo developer',
                    'Facilitación de retrospectiva con técnica nueva',
                    'Manejo de conflicto simulado entre miembros de equipo'
                ]
            },
            {
                numero: 3,
                titulo: 'Comunicación y Stakeholders',
                semanas: 'Semana 6-8',
                descripcion: 'Comunicación técnica efectiva y gestión de stakeholders.',
                contenidos: [
                    'Stakeholder mapping: identification, power/interest matrix, engagement strategies',
                    'Communication planning: channels, frequency, format, tailoring to audience',
                    'Executive communication: executive summary, BLUF, so-what test, action items',
                    'Architecture Decision Records: template, context, decision, consequences, status',
                    'RFCs y design docs: problem statement, proposal, alternatives, trade-offs, decision',
                    'Technical presentations: storytelling, visualization, demos, handling tough questions',
                    'Status reporting: traffic lights, risks, blockers, asks, wins, metrics',
                    'Negotiation: principled negotiation, BATNA, trade-offs, win-win solutions',
                    'Cross-functional collaboration: product, design, QA, ops, security partnerships',
                    'Remote communication: async writing, timezone management, video calls, documentation'
                ],
                actividades: [
                    'Creación de stakeholder map para proyecto real',
                    'Escritura de ADR para decisión arquitectónica',
                    'Presentación técnica de 10 minutos con Q&A',
                    'Redacción de executive summary para iniciativa técnica',
                    'Diseño de communication plan para proyecto de 6 meses',
                    'Proyecto integrador: Plan de gestión de proyecto completo'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Jira', icon: 'jira-plain', iconType: 'devicon' },
            { nombre: 'Confluence', icon: 'confluence-plain', iconType: 'devicon' },
            { nombre: 'Notion', icon: 'notion-plain', iconType: 'devicon' },
            { nombre: 'Miro', icon: 'fa-chalkboard', iconType: 'fontawesome' },
            { nombre: 'Slack', icon: 'slack-plain', iconType: 'devicon' },
            { nombre: 'Azure DevOps', icon: 'azure-plain', iconType: 'devicon' },
            { nombre: 'Linear', icon: 'fa-clipboard-list', iconType: 'fontawesome' },
            { nombre: 'Loom', icon: 'fa-video', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Workshops', ponderacion: 0, descripcion: 'Dinámicas de liderazgo' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Agile at scale' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Liderazgo técnico' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Plan de gestión completo' }
        ],
        prerrequisitos: ['Ing. Software II'],
        conexiones: ['Evaluación Proyectos SW', 'Taller Aplicado SW'],
        recursos: [
            { tipo: 'Framework', nombre: 'SAFe Official Site', url: 'https://www.scaledagileframework.com/' },
            { tipo: 'Curso', nombre: 'Atlassian Agile Coach', url: 'https://www.atlassian.com/agile' },
            { tipo: 'Libro', nombre: 'The Managers Path (Camille Fournier)', url: 'https://www.oreilly.com/library/view/the-managers-path/9781491973882/' },
            { tipo: 'Libro', nombre: 'An Elegant Puzzle (Will Larson)', url: 'https://press.stripe.com/an-elegant-puzzle' },
            { tipo: 'Certificación', nombre: 'SAFe Agilist', url: 'https://scaledagile.com/training/leading-safe/' },
            { tipo: 'Video', nombre: 'Google Project Management - Coursera', url: 'https://www.coursera.org/professional-certificates/google-project-management' },
            { tipo: 'Podcast', nombre: 'Software Engineering Daily', url: 'https://softwareengineeringdaily.com/' },
            { tipo: 'Blog', nombre: 'Will Larson - Staff Engineer', url: 'https://staffeng.com/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-16%20-%20Evaluacion%20y%20Gestion%20Proyectos%20SW/Gestion%20Proyectos%20SW' }
        ],
        color: 'purple',
        area: 'gestion',
        palabrasClave: [
            'SAFe Framework', 'LeSS', 'Nexus', 'Agile at Scale', 'PI Planning',
            'Technical Leadership', '1:1 Meetings', 'Stakeholder Management',
            'OKRs', 'ADRs', 'RFCs', 'Executive Communication', 'Scrum of Scrums'
        ]
    },

    // =============================================
    // BIMESTRE 17 - ÉTICA & TALLER APLICADO
    // =============================================

    // ETI17201 - Ética Profesional
    'etica-profesional': {
        id: 'etica-profesional',
        codigo: 'ETI17201',
        nombre: 'Ética Profesional en TI',
        nombreCorto: 'Ética Profesional',
        bimestre: 17,
        creditos: 2,
        horasTeoricas: 2,
        horasPracticas: 2,
        descripcion: 'Asignatura que profundiza en ética profesional, responsabilidad social, privacidad de datos y aspectos legales en tecnología.',
        proposito: 'Formar profesionales éticos y responsables, conscientes del impacto social de la tecnología y las regulaciones vigentes.',
        objetivos: [
            'Aplicar principios éticos en decisiones tecnológicas',
            'Comprender regulaciones de privacidad (GDPR, etc.)',
            'Evaluar impacto social de sistemas',
            'Gestionar dilemas éticos en IA',
            'Promover diversidad e inclusión en tech',
            'Practicar responsabilidad profesional'
        ],
        competencias: [
            'Aplicación de marcos éticos profesionales: ACM Code of Ethics, IEEE Code of Ethics, Software Engineering Code of Ethics',
            'Dominio de regulaciones de privacidad: GDPR, CCPA, LGPD, Privacy by Design, Data Protection Impact Assessments',
            'Gestión de propiedad intelectual: copyright, patents, trade secrets, open source licensing, fair use',
            'Ética en inteligencia artificial: bias detection, fairness metrics, explainability, human oversight, AI governance',
            'Responsabilidad social corporativa: digital divide, accessibility, environmental impact, sustainable computing',
            'Compliance y auditoría: SOC 2, ISO 27001, HIPAA, PCI-DSS, regulatory frameworks',
            'Gestión de dilemas éticos: whistleblowing, conflicts of interest, professional boundaries, ethical decision frameworks',
            'Diversidad e inclusión en tecnología: inclusive design, bias-free hiring, equitable systems, cultural sensitivity'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos Éticos',
                semanas: 'Semana 1-3',
                descripcion: 'Principios éticos fundamentales para profesionales de tecnología.',
                contenidos: [
                    'ACM Code of Ethics: 7 principios generales, 9 responsabilidades profesionales, compliance',
                    'IEEE Code of Ethics: 10 principios, safety commitment, honesty, avoiding conflicts',
                    'Software Engineering Code of Ethics: public interest, client, product, judgment, management, profession',
                    'Responsabilidad profesional: due diligence, duty of care, professional boundaries, competence',
                    'Conflictos de interés: identificación, disclosure, recusal, organizational policies, independence',
                    'Propiedad intelectual: copyright law, patent basics, trade secrets, NDAs, work-for-hire',
                    'Open source licensing: GPL, MIT, Apache, BSD, Creative Commons, license compatibility',
                    'Whistleblowing: legal protections, internal vs external, anonymous reporting, retaliation prevention',
                    'Professional liability: malpractice, negligence, errors and omissions, insurance',
                    'Ethical decision frameworks: utilitarian, deontological, virtue ethics, stakeholder analysis'
                ],
                actividades: [
                    'Análisis de casos éticos reales en la industria tecnológica',
                    'Debate estructurado sobre dilemas éticos con posiciones asignadas',
                    'Redacción de código de ética personal con principios fundamentales',
                    'Evaluación de compatibilidad de licencias open source para proyecto',
                    'Role-play de situación de whistleblowing con decisión fundamentada',
                    'Aplicación de framework de decisión ética a caso de estudio'
                ]
            },
            {
                numero: 2,
                titulo: 'Privacidad y Regulaciones',
                semanas: 'Semana 4-5',
                descripcion: 'Marco regulatorio global de privacidad y protección de datos.',
                contenidos: [
                    'GDPR: 7 principios, bases legales, derechos del titular, DPO, multas, transferencias internacionales',
                    'Privacy by Design: 7 principios de Cavoukian, privacy engineering, privacy patterns, PETs',
                    'Data Protection Impact Assessment: cuándo es obligatorio, metodología, risk assessment, mitigations',
                    'Consent management: opt-in vs opt-out, granular consent, consent withdrawal, CMPs, dark patterns',
                    'Data breach response: detection, notification timelines, incident response plan, communication',
                    'CCPA/CPRA: California rights, categories of personal info, opt-out of sale, private right of action',
                    'Sector-specific: HIPAA (health), FERPA (education), COPPA (children), PCI-DSS (payments)',
                    'Data minimization: collection limitation, purpose limitation, storage limitation, data retention policies',
                    'International data transfers: adequacy decisions, SCCs, BCRs, Privacy Shield, data localization',
                    'Privacy compliance programs: audits, documentation, training, vendor management, continuous monitoring'
                ],
                actividades: [
                    'Realización de DPIA completo para sistema con datos sensibles',
                    'Análisis y mejora de privacy policy de empresa real',
                    'Diseño de consent management flow según regulaciones',
                    'Simulación de data breach con respuesta en 72 horas',
                    'Creación de programa de compliance con checklist verificable',
                    'Evaluación de transferencia internacional de datos con solución legal'
                ]
            },
            {
                numero: 3,
                titulo: 'Impacto Social y AI Ethics',
                semanas: 'Semana 6-8',
                descripcion: 'Responsabilidad social corporativa y ética en inteligencia artificial.',
                contenidos: [
                    'Algorithmic bias: types (historical, representation, measurement), sources, detection, mitigation strategies',
                    'Fairness in ML: definitions (demographic parity, equalized odds, calibration), fairness-accuracy tradeoffs',
                    'Explainable AI: interpretability vs explainability, LIME, SHAP, attention visualization, model cards',
                    'AI governance: EU AI Act risk categories, algorithmic accountability, human oversight requirements',
                    'Environmental impact: carbon footprint of training, Green AI, sustainable computing, energy-efficient algorithms',
                    'Digital divide: access inequality, digital literacy, infrastructure gaps, inclusive technology design',
                    'Accessibility: WCAG 2.1 guidelines, assistive technologies, inclusive UX, disability considerations',
                    'Diversity in tech: representation, bias-free hiring, inclusive workplace, pay equity, mentorship',
                    'AI safety: alignment problem, control problem, robustness, adversarial attacks, value alignment',
                    'Tech for social good: humanitarian tech, crisis response, civic tech, responsible innovation'
                ],
                actividades: [
                    'Auditoría de bias en modelo ML con Fairlearn y AIF360',
                    'Evaluación de sustainability y carbon footprint de sistema cloud',
                    'Diseño de sistema inclusivo siguiendo WCAG 2.1 AA',
                    'Análisis de impacto social de tecnología emergente',
                    'Implementación de explicabilidad en modelo con SHAP',
                    'Proyecto integrador: Ethical review completo de sistema AI'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Fairlearn', icon: 'fa-balance-scale', iconType: 'fontawesome' },
            { nombre: 'AIF360', icon: 'fa-balance-scale-left', iconType: 'fontawesome' },
            { nombre: 'SHAP', icon: 'fa-chart-bar', iconType: 'fontawesome' },
            { nombre: 'OneTrust', icon: 'fa-shield-alt', iconType: 'fontawesome' },
            { nombre: 'Python', icon: 'python-plain', iconType: 'devicon' },
            { nombre: 'Jupyter', icon: 'jupyter-plain', iconType: 'devicon' },
            { nombre: 'WAVE', icon: 'fa-universal-access', iconType: 'fontawesome' },
            { nombre: 'Lighthouse', icon: 'fa-lightbulb', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Debates', ponderacion: 0, descripcion: 'Discusiones éticas' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Fundamentos éticos' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Privacidad' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Ethical review' }
        ],
        prerrequisitos: ['Ética (B03)'],
        conexiones: ['Taller Aplicado Software'],
        recursos: [
            { tipo: 'Código', nombre: 'ACM Code of Ethics', url: 'https://www.acm.org/code-of-ethics' },
            { tipo: 'Código', nombre: 'IEEE Code of Ethics', url: 'https://www.ieee.org/about/corporate/governance/p7-8.html' },
            { tipo: 'Documentación', nombre: 'GDPR Official Portal', url: 'https://gdpr.eu/' },
            { tipo: 'Framework', nombre: 'EU Trustworthy AI Guidelines', url: 'https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai' },
            { tipo: 'Tutorial', nombre: 'Microsoft Responsible AI', url: 'https://www.microsoft.com/en-us/ai/responsible-ai' },
            { tipo: 'Herramienta', nombre: 'Fairlearn Documentation', url: 'https://fairlearn.org/' },
            { tipo: 'Herramienta', nombre: 'IBM AI Fairness 360', url: 'https://aif360.mybluemix.net/' },
            { tipo: 'Video', nombre: 'Ethics in Tech - TED Talks', url: 'https://www.ted.com/topics/technology' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-17%20-%20Etica%20Profesional%2C%20Taller%20Aplicado%20SW/Etica%20Profesional%20en%20TI' }
        ],
        color: 'slate',
        area: 'general',
        palabrasClave: [
            'ACM Code of Ethics', 'GDPR Compliance', 'CCPA', 'Data Privacy',
            'AI Ethics', 'ML Bias Detection', 'Fairlearn', 'WCAG Accessibility',
            'Intellectual Property', 'Open Source Licensing', 'Regulatory Compliance'
        ]
    },

    // TAS17201 - Taller Aplicado Software
    'taller-aplicado-sw': {
        id: 'taller-aplicado-sw',
        codigo: 'TAS17201',
        nombre: 'Taller Aplicado de Software',
        nombreCorto: 'Taller Aplicado SW',
        bimestre: 17,
        creditos: 8,
        horasTeoricas: 2,
        horasPracticas: 10,
        descripcion: 'Asignatura de cierre de carrera donde los estudiantes desarrollan un proyecto integrador de ingeniería de software con cliente real.',
        proposito: 'Consolidar todas las competencias de la carrera mediante el desarrollo de un proyecto real que demuestre las habilidades del ingeniero de software.',
        objetivos: [
            'Desarrollar proyecto de software con cliente real',
            'Aplicar metodologías ágiles en contexto real',
            'Integrar todas las competencias técnicas',
            'Documentar arquitectura y decisiones',
            'Presentar y defender el proyecto',
            'Demostrar profesionalismo y ética'
        ],
        competencias: [
            'Desarrollo end-to-end de producto software: desde requirements hasta deployment y handoff a cliente',
            'Gestión de cliente y stakeholders: expectativas, comunicación, demos, feedback, negociación de alcance',
            'Documentación técnica profesional: ADRs, design docs, API documentation, user guides, runbooks',
            'Presentación y defensa de proyecto: storytelling técnico, demo efectiva, Q&A, elevator pitch',
            'Liderazgo técnico de equipo: code reviews, pair programming, mentoring, technical decisions',
            'Metodologías ágiles aplicadas: Scrum ceremonies, sprint planning, backlog refinement, velocity tracking',
            'DevOps y entrega continua: CI/CD pipelines, automated testing, deployment strategies, monitoring',
            'Ética profesional aplicada: calidad, honestidad en estimaciones, manejo de deuda técnica, responsabilidad'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Inception y Arquitectura',
                semanas: 'Semana 1-3',
                descripcion: 'Discovery, definición del proyecto y diseño arquitectónico.',
                contenidos: [
                    'Client discovery: stakeholder interviews, pain points, business goals, success metrics, constraints',
                    'Requirements engineering: functional vs non-functional, user stories, acceptance criteria, DoD',
                    'User story mapping: backbone, walking skeleton, release planning, MVP identification',
                    'Architecture design: C4 model (context, container, component, code), ADRs, quality attributes',
                    'Tech stack selection: evaluation criteria, POCs, risk assessment, team capabilities, constraints',
                    'MVP definition: minimum viable product, hypothesis testing, lean startup principles, scope negotiation',
                    'Project roadmap: milestones, dependencies, risk register, communication plan, escalation paths',
                    'Team formation: roles (PO, SM, Dev), working agreements, collaboration tools, communication channels',
                    'Infrastructure setup: repository, CI/CD pipeline, environments, monitoring, documentation platform',
                    'Sprint 0: technical spikes, environment setup, team onboarding, initial backlog refinement'
                ],
                actividades: [
                    'Kickoff meeting con cliente real con levantamiento de requisitos',
                    'User story mapping workshop con cliente y equipo',
                    'Diseño de arquitectura con C4 model y ADRs documentados',
                    'Evaluación y selección de tech stack con matriz de decisión',
                    'Presentación de MVP y roadmap al cliente para aprobación',
                    'Sprint 0 planning con backlog inicial priorizado'
                ]
            },
            {
                numero: 2,
                titulo: 'Desarrollo Iterativo',
                semanas: 'Semana 4-5',
                descripcion: 'Implementación ágil con sprints y feedback continuo del cliente.',
                contenidos: [
                    'Sprint execution: sprint goal, daily progress, impediment removal, scope protection, commitment',
                    'Daily standups: timeboxing, three questions, walking the board, async alternatives, effectiveness',
                    'Code reviews: PR templates, review checklist, constructive feedback, approval workflows, pair review',
                    'CI/CD implementation: build automation, test automation, deployment pipelines, environment promotion',
                    'Client demos: demo preparation, storytelling, feature showcasing, feedback collection, next steps',
                    'Feedback incorporation: backlog updates, reprioritization, scope changes, technical debt management',
                    'Sprint retrospectives: formats (sailboat, starfish, 4Ls), action items, improvement tracking',
                    'Backlog refinement: story splitting, estimation, acceptance criteria, ready criteria, prioritization',
                    'Quality assurance: testing strategy, test coverage, bug triage, regression testing, UAT preparation',
                    'Technical debt management: identification, quantification, prioritization, payoff strategies'
                ],
                actividades: [
                    'Ejecución de 2-3 sprints completos con todas las ceremonias',
                    'Sprint demos quincenales con cliente y feedback documentado',
                    'Retrospectivas con action items tracked y mejora continua',
                    'Code reviews con checklist y métricas de calidad',
                    'Implementación de CI/CD con deployment automatizado',
                    'Gestión de backlog con refinement sessions documentadas'
                ]
            },
            {
                numero: 3,
                titulo: 'Entrega y Defensa',
                semanas: 'Semana 6-8',
                descripcion: 'Finalización, deployment a producción, handoff y defensa del proyecto.',
                contenidos: [
                    'Feature completion: feature freeze, bug fixing, polish, performance optimization, final testing',
                    'Quality assurance final: regression testing, UAT, load testing, security scanning, accessibility check',
                    'Documentation completion: user documentation, admin guide, API docs, runbook, troubleshooting guide',
                    'Deployment to production: deployment checklist, rollback plan, smoke testing, monitoring setup',
                    'Client handoff: training sessions, knowledge transfer, support transition, maintenance documentation',
                    'Project defense preparation: presentation structure, demo script, technical deep-dives, anticipated questions',
                    'Defense execution: project overview, architecture walkthrough, live demo, lessons learned, Q&A',
                    'Post-mortem: what went well, what could improve, metrics review, recommendations, team feedback',
                    'Project closure: final sign-off, asset transfer, repository handoff, support agreement, retrospective',
                    'Career reflection: skills developed, portfolio update, LinkedIn update, lessons for future projects'
                ],
                actividades: [
                    'Release final con checklist de calidad completado',
                    'UAT con cliente y sign-off de aceptación',
                    'Deployment a producción con monitoring configurado',
                    'Sesión de training y handoff a cliente',
                    'Defensa formal del proyecto ante comité evaluador',
                    'Post-mortem y documentación de lecciones aprendidas'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'GitHub', icon: 'github-original', iconType: 'devicon' },
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' },
            { nombre: 'GitHub Actions', icon: 'githubactions-plain', iconType: 'devicon' },
            { nombre: 'Vercel', icon: 'vercel-plain', iconType: 'devicon' },
            { nombre: 'Jira', icon: 'jira-plain', iconType: 'devicon' },
            { nombre: 'Notion', icon: 'notion-plain', iconType: 'devicon' },
            { nombre: 'Figma', icon: 'figma-plain', iconType: 'devicon' },
            { nombre: 'Slack', icon: 'slack-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Sprint reviews', ponderacion: 0, descripcion: 'Demos de sprint' },
            { tipo: 'Sumativa', nombre: 'Avance 1', ponderacion: 20, descripcion: 'Arquitectura y MVP' },
            { tipo: 'Sumativa', nombre: 'Avance 2', ponderacion: 30, descripcion: 'Desarrollo iterativo' },
            { tipo: 'Sumativa', nombre: 'Entrega Final', ponderacion: 50, descripcion: 'Proyecto completo y defensa' }
        ],
        prerrequisitos: ['Fullstack III', 'Gestión de Proyectos'],
        conexiones: [],
        recursos: [
            { tipo: 'Template', nombre: 'Architecture Decision Records', url: 'https://adr.github.io/' },
            { tipo: 'Framework', nombre: 'Scrum Guide Official', url: 'https://scrumguides.org/' },
            { tipo: 'Tutorial', nombre: 'User Story Mapping - Jeff Patton', url: 'https://www.jpattonassociates.com/user-story-mapping/' },
            { tipo: 'Tool', nombre: 'Notion for Teams', url: 'https://www.notion.so/product/teams' },
            { tipo: 'Tool', nombre: 'Miro for Collaboration', url: 'https://miro.com/' },
            { tipo: 'Video', nombre: 'How to Present Technical Projects', url: 'https://www.youtube.com/watch?v=Unzc731iCUY' },
            { tipo: 'Tutorial', nombre: 'Git Workflows - Atlassian', url: 'https://www.atlassian.com/git/tutorials/comparing-workflows' },
            { tipo: 'Libro', nombre: 'The Pragmatic Programmer', url: 'https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-17%20-%20Etica%20Profesional%2C%20Taller%20Aplicado%20SW/Taller%20Aplicado%20de%20Software' }
        ],
        color: 'emerald',
        area: 'proyecto',
        palabrasClave: [
            'Capstone Project', 'Real Client', 'Scrum Sprints', 'MVP Development',
            'C4 Model', 'User Story Mapping', 'CI/CD Pipeline', 'Project Defense',
            'UAT Testing', 'Production Deployment', 'Handoff Documentation'
        ]
    }
};

// Función helper para obtener asignaturas por bimestre
export function getAsignaturasByBimestre(bimestre: number): Asignatura[] {
    return Object.values(asignaturas).filter(a => a.bimestre === bimestre);
}

// Función helper para obtener asignatura por ID
export function getAsignaturaById(id: string): Asignatura | undefined {
    return asignaturas[id];
}

// Función helper para obtener asignaturas por área
export function getAsignaturasByArea(area: Asignatura['area']): Asignatura[] {
    return Object.values(asignaturas).filter(a => a.area === area);
}

// Mapeo de nombres cortos a IDs - Todos los bimestres (B01-B17)
export const nombreCortoToId: Record<string, string> = {
    // Bimestre 01
    'Fundamentos Prog.': 'fundamentos-programacion',
    'Modelamiento BD': 'modelamiento-datos',
    'Antropologia': 'antropologia',
    // Bimestre 02
    'POO I': 'poo-i',
    'Computacion Nube': 'computacion-nube',
    'Comunicacion': 'comunicacion',
    // Bimestre 03
    'POO II': 'poo-ii',
    'DevOps': 'devops',
    'Etica': 'etica',
    // Bimestre 04
    'SQL Consultas': 'sql-consultas',
    'Seguridad Informatica': 'seguridad-informatica',
    // Bimestre 05
    'SQL Programacion': 'sql-programacion',
    'Cloud Native': 'cloud-native',
    'Ing. Requisitos': 'ingenieria-requisitos',
    // Bimestre 06
    'Backend I': 'backend-i',
    'Ing. Software I': 'ingenieria-software-i',
    // Bimestre 07
    'Backend II-III': 'backend-ii-iii',
    'Ing. Software II': 'ingenieria-software-ii',
    // Bimestre 08
    'Frontend I-II': 'frontend-i-ii',
    'Arquitectura Software': 'arquitectura-software',
    // Bimestre 09
    'Mobile I': 'mobile-i',
    'Frontend III': 'frontend-iii',
    // Bimestre 10
    'Mobile II': 'mobile-ii',
    'Taller de Titulo': 'taller-titulo',
    // Bimestre 11 - Ingeniería
    'Desarrollo Fullstack I': 'fullstack-i',
    'BD Aplicada': 'bd-aplicada',
    // Bimestre 12
    'Desarrollo Fullstack II': 'fullstack-ii',
    'Cloud Computing': 'cloud-computing',
    // Bimestre 13
    'Desarrollo Fullstack III': 'fullstack-iii',
    // Bimestre 14
    'Desarrollo App Móviles': 'app-moviles',
    'Cloud Native I': 'cloud-native-i',
    // Bimestre 15
    'Cloud Native II': 'cloud-native-ii',
    'Seguridad y Calidad': 'seguridad-calidad',
    // Bimestre 16
    'Evaluación Proyectos SW': 'evaluacion-proyectos-sw',
    'Gestión Proyectos SW': 'gestion-proyectos-sw',
    // Bimestre 17
    'Ética Profesional': 'etica-profesional',
    'Taller Aplicado SW': 'taller-aplicado-sw'
};
