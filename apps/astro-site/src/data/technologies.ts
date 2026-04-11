/**
 * technologies.ts
 * Datos de tecnologías para la Sala de Estudio
 * Incluye lenguajes, frameworks, herramientas y metodologías
 */

// ============================================
// INTERFACES
// ============================================

export type TechCategory =
    | 'language'        // Python, Java, JavaScript, SQL
    | 'framework'       // Spring, React, Angular, Django
    | 'database'        // PostgreSQL, MongoDB, MySQL
    | 'devops'          // Docker, Kubernetes, Jenkins
    | 'cloud'           // AWS, Azure, GCP
    | 'tool';           // Git, VS Code, Postman

export interface TechResource {
    tipo: 'Documentacion' | 'Tutorial' | 'Video' | 'Certificacion';
    nombre: string;
    url: string;
}

export interface Technology {
    id: string;
    nombre: string;
    nombreCorto: string;
    categoria: TechCategory;
    icon: string;               // Clase CSS (devicon o fontawesome)
    iconType: 'devicon' | 'fontawesome';
    color: string;              // Color hex de la marca
    descripcionCorta: string;
    descripcion: string;
    usosPrincipales: string[];
    ventajas: string[];
    desventajas: string[];
    empresas: string[];         // Empresas que lo usan
    alternativas: string[];     // IDs de tecnologías alternativas
    recursos: TechResource[];
    primerRelease?: string;     // Año de primer release
    mantenidoPor?: string;      // Organización
}

// ============================================
// DATOS DE TECNOLOGÍAS (~35)
// ============================================

export const technologies: Record<string, Technology> = {
    // ========== LANGUAGES ==========
    'python': {
        id: 'python',
        nombre: 'Python',
        nombreCorto: 'Python',
        categoria: 'language',
        icon: 'python-plain',
        iconType: 'devicon',
        color: '#3776AB',
        descripcionCorta: 'Lenguaje de propósito general, simple y versátil',
        descripcion: 'Python es un lenguaje de programación interpretado de alto nivel, conocido por su sintaxis clara y legible. Es extremadamente versátil, usado desde scripts simples hasta machine learning y desarrollo web.',
        usosPrincipales: [
            'Data Science y Machine Learning',
            'Desarrollo web (Django, Flask)',
            'Automatización y scripting',
            'APIs y microservicios',
            'Análisis de datos'
        ],
        ventajas: [
            'Sintaxis simple y legible',
            'Gran ecosistema de librerías',
            'Comunidad enorme y activa',
            'Rápido prototipado',
            'Multiplataforma'
        ],
        desventajas: [
            'Más lento que lenguajes compilados',
            'GIL limita paralelismo real',
            'Tipado dinámico puede causar bugs',
            'Consumo de memoria alto'
        ],
        empresas: ['Google', 'Netflix', 'Spotify', 'Instagram', 'Dropbox'],
        alternativas: ['java', 'javascript', 'ruby'],
        recursos: [
            { tipo: 'Documentacion', nombre: 'Python Official Docs', url: 'https://docs.python.org/3/' },
            { tipo: 'Tutorial', nombre: 'Real Python', url: 'https://realpython.com/' },
            { tipo: 'Certificacion', nombre: 'PCEP – Certified Entry-Level Python', url: 'https://pythoninstitute.org/pcep' }
        ],
        primerRelease: '1991',
        mantenidoPor: 'Python Software Foundation'
    },

    'java': {
        id: 'java',
        nombre: 'Java',
        nombreCorto: 'Java',
        categoria: 'language',
        icon: 'java-plain',
        iconType: 'devicon',
        color: '#ED8B00',
        descripcionCorta: 'Lenguaje robusto para aplicaciones empresariales',
        descripcion: 'Java es un lenguaje orientado a objetos, compilado a bytecode que corre en la JVM. Es el estándar para desarrollo empresarial y Android, conocido por su robustez y portabilidad.',
        usosPrincipales: [
            'Aplicaciones empresariales (Spring)',
            'Desarrollo Android',
            'Sistemas backend de alta escala',
            'Aplicaciones financieras',
            'Big Data (Hadoop, Spark)'
        ],
        ventajas: [
            'Muy robusto y maduro',
            'Excelente rendimiento',
            'Portabilidad (Write Once, Run Anywhere)',
            'Fuerte tipado estático',
            'Gran ecosistema empresarial'
        ],
        desventajas: [
            'Verboso comparado con lenguajes modernos',
            'Curva de aprendizaje media',
            'Consume más memoria que otros',
            'Configuración compleja'
        ],
        empresas: ['Amazon', 'Google', 'Netflix', 'LinkedIn', 'Uber'],
        alternativas: ['kotlin', 'csharp', 'python'],
        recursos: [
            { tipo: 'Documentacion', nombre: 'Oracle Java Docs', url: 'https://docs.oracle.com/en/java/' },
            { tipo: 'Tutorial', nombre: 'Baeldung', url: 'https://www.baeldung.com/' },
            { tipo: 'Certificacion', nombre: 'Oracle Certified Professional', url: 'https://education.oracle.com/java-certification-path' }
        ],
        primerRelease: '1995',
        mantenidoPor: 'Oracle Corporation'
    },

    'javascript': {
        id: 'javascript',
        nombre: 'JavaScript',
        nombreCorto: 'JS',
        categoria: 'language',
        icon: 'javascript-plain',
        iconType: 'devicon',
        color: '#F7DF1E',
        descripcionCorta: 'El lenguaje de la web, frontend y backend',
        descripcion: 'JavaScript es el lenguaje de programación de la web. Originalmente solo para navegadores, ahora con Node.js también corre en servidores. Es esencial para desarrollo frontend moderno.',
        usosPrincipales: [
            'Desarrollo frontend (React, Vue, Angular)',
            'Backend con Node.js',
            'Aplicaciones móviles (React Native)',
            'APIs y microservicios',
            'Serverless functions'
        ],
        ventajas: [
            'Ubicuo en desarrollo web',
            'Gran ecosistema (npm)',
            'Asíncrono por naturaleza',
            'Full-stack con un lenguaje',
            'Comunidad masiva'
        ],
        desventajas: [
            'Tipado dinámico débil',
            'Muchas formas de hacer lo mismo',
            'Callback hell (solucionable)',
            'Fragmentación de ecosistema'
        ],
        empresas: ['Google', 'Facebook', 'Netflix', 'Uber', 'Airbnb'],
        alternativas: ['typescript', 'python'],
        recursos: [
            { tipo: 'Documentacion', nombre: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
            { tipo: 'Tutorial', nombre: 'JavaScript.info', url: 'https://javascript.info/' },
            { tipo: 'Video', nombre: 'Traversy Media JS Crash Course', url: 'https://www.youtube.com/watch?v=hdI2bqOjy3c' }
        ],
        primerRelease: '1995',
        mantenidoPor: 'Ecma International (ECMAScript)'
    },

    'typescript': {
        id: 'typescript',
        nombre: 'TypeScript',
        nombreCorto: 'TS',
        categoria: 'language',
        icon: 'typescript-plain',
        iconType: 'devicon',
        color: '#3178C6',
        descripcionCorta: 'JavaScript con tipos estáticos',
        descripcion: 'TypeScript es un superset de JavaScript que añade tipado estático opcional. Mejora la mantenibilidad y detecta errores en tiempo de compilación.',
        usosPrincipales: [
            'Aplicaciones frontend a escala',
            'Backend con Node.js/NestJS',
            'Librerías y frameworks',
            'Proyectos enterprise',
            'APIs con tipos definidos'
        ],
        ventajas: [
            'Tipado estático opcional',
            'Mejor autocompletado en IDEs',
            'Detecta errores temprano',
            'Excelente refactoring',
            'Interoperable con JS'
        ],
        desventajas: [
            'Paso de compilación adicional',
            'Curva de aprendizaje de tipos',
            'Configuración inicial',
            'A veces verboso'
        ],
        empresas: ['Microsoft', 'Google', 'Airbnb', 'Slack', 'Asana'],
        alternativas: ['javascript'],
        recursos: [
            { tipo: 'Documentacion', nombre: 'TypeScript Official', url: 'https://www.typescriptlang.org/docs/' },
            { tipo: 'Tutorial', nombre: 'TypeScript Deep Dive', url: 'https://basarat.gitbook.io/typescript/' }
        ],
        primerRelease: '2012',
        mantenidoPor: 'Microsoft'
    },

    'sql': {
        id: 'sql',
        nombre: 'SQL',
        nombreCorto: 'SQL',
        categoria: 'language',
        icon: 'fas fa-database',
        iconType: 'fontawesome',
        color: '#336791',
        descripcionCorta: 'Lenguaje estándar para bases de datos relacionales',
        descripcion: 'SQL (Structured Query Language) es el lenguaje estándar para gestionar y consultar bases de datos relacionales. Es fundamental para cualquier desarrollador backend o data.',
        usosPrincipales: [
            'Consultas a bases de datos',
            'ETL y transformación de datos',
            'Reporting y analytics',
            'Procedimientos almacenados',
            'Administración de BD'
        ],
        ventajas: [
            'Estándar universal',
            'Muy expresivo para datos',
            'Optimizado para conjuntos',
            'Bien documentado',
            'Portable entre DBs'
        ],
        desventajas: [
            'No es procedural',
            'Diferencias entre dialectos',
            'No ideal para datos no estructurados'
        ],
        empresas: ['Todas las empresas que usan datos'],
        alternativas: [],
        recursos: [
            { tipo: 'Tutorial', nombre: 'SQLBolt', url: 'https://sqlbolt.com/' },
            { tipo: 'Tutorial', nombre: 'Mode SQL Tutorial', url: 'https://mode.com/sql-tutorial/' }
        ],
        primerRelease: '1974',
        mantenidoPor: 'ISO/IEC'
    },

    // ========== FRAMEWORKS ==========
    'spring': {
        id: 'spring',
        nombre: 'Spring Boot',
        nombreCorto: 'Spring',
        categoria: 'framework',
        icon: 'spring-plain',
        iconType: 'devicon',
        color: '#6DB33F',
        descripcionCorta: 'Framework Java para aplicaciones enterprise',
        descripcion: 'Spring Boot es un framework que simplifica la creación de aplicaciones Java standalone, listas para producción. Es el estándar de facto para backend enterprise en Java.',
        usosPrincipales: [
            'APIs REST',
            'Microservicios',
            'Aplicaciones empresariales',
            'Integración con bases de datos',
            'Seguridad (Spring Security)'
        ],
        ventajas: [
            'Configuración mínima (convention over config)',
            'Ecosistema completo',
            'Gran soporte empresarial',
            'Excelente documentación',
            'Integración con cloud providers'
        ],
        desventajas: [
            'Curva de aprendizaje inicial',
            'Puede ser "mágico"',
            'Pesado para apps pequeñas',
            'Muchas dependencias'
        ],
        empresas: ['Netflix', 'Alibaba', 'Capital One', 'Intuit'],
        alternativas: ['nestjs', 'django'],
        recursos: [
            { tipo: 'Documentacion', nombre: 'Spring.io Docs', url: 'https://spring.io/projects/spring-boot' },
            { tipo: 'Tutorial', nombre: 'Spring Boot Tutorial', url: 'https://spring.io/guides' }
        ],
        primerRelease: '2014',
        mantenidoPor: 'VMware'
    },

    'react': {
        id: 'react',
        nombre: 'React',
        nombreCorto: 'React',
        categoria: 'framework',
        icon: 'react-original',
        iconType: 'devicon',
        color: '#61DAFB',
        descripcionCorta: 'Librería JavaScript para interfaces de usuario',
        descripcion: 'React es una librería declarativa para construir interfaces de usuario basada en componentes. Desarrollada por Facebook, es la más popular para frontend moderno.',
        usosPrincipales: [
            'Single Page Applications (SPA)',
            'Aplicaciones móviles (React Native)',
            'Interfaces interactivas',
            'Dashboards y admin panels',
            'E-commerce frontends'
        ],
        ventajas: [
            'Virtual DOM eficiente',
            'Componentes reutilizables',
            'Gran ecosistema',
            'React Native para móvil',
            'Fuerte comunidad'
        ],
        desventajas: [
            'Solo la vista (necesita más librerías)',
            'JSX puede confundir al inicio',
            'Muchas formas de estructurar',
            'Breaking changes ocasionales'
        ],
        empresas: ['Facebook', 'Instagram', 'Netflix', 'Airbnb', 'Uber'],
        alternativas: ['angular', 'vue'],
        recursos: [
            { tipo: 'Documentacion', nombre: 'React Docs', url: 'https://react.dev/' },
            { tipo: 'Tutorial', nombre: 'React Tutorial', url: 'https://react.dev/learn' }
        ],
        primerRelease: '2013',
        mantenidoPor: 'Meta (Facebook)'
    },

    'angular': {
        id: 'angular',
        nombre: 'Angular',
        nombreCorto: 'Angular',
        categoria: 'framework',
        icon: 'angularjs-plain',
        iconType: 'devicon',
        color: '#DD0031',
        descripcionCorta: 'Framework completo para aplicaciones enterprise',
        descripcion: 'Angular es un framework completo para construir aplicaciones web. Incluye todo lo necesario: routing, formularios, HTTP, testing. Ideal para aplicaciones grandes.',
        usosPrincipales: [
            'Aplicaciones empresariales',
            'Single Page Applications',
            'Dashboards complejos',
            'Aplicaciones con muchos formularios',
            'Enterprise software'
        ],
        ventajas: [
            'Framework completo (todo incluido)',
            'TypeScript por defecto',
            'CLI poderoso',
            'Arquitectura opinada',
            'Buen soporte de Google'
        ],
        desventajas: [
            'Curva de aprendizaje alta',
            'Verboso',
            'Pesado para apps pequeñas',
            'Actualizaciones pueden ser breaking'
        ],
        empresas: ['Google', 'Microsoft', 'Samsung', 'BMW', 'Forbes'],
        alternativas: ['react', 'vue'],
        recursos: [
            { tipo: 'Documentacion', nombre: 'Angular.io', url: 'https://angular.io/docs' },
            { tipo: 'Certificacion', nombre: 'Google Developers Angular', url: 'https://developers.google.com/certification' }
        ],
        primerRelease: '2016',
        mantenidoPor: 'Google'
    },

    // ========== DATABASES ==========
    'postgresql': {
        id: 'postgresql',
        nombre: 'PostgreSQL',
        nombreCorto: 'PostgreSQL',
        categoria: 'database',
        icon: 'postgresql-plain',
        iconType: 'devicon',
        color: '#336791',
        descripcionCorta: 'Base de datos relacional open source avanzada',
        descripcion: 'PostgreSQL es una base de datos relacional open source conocida por su robustez, extensibilidad y cumplimiento de estándares SQL. Es la elección preferida para aplicaciones que requieren integridad de datos.',
        usosPrincipales: [
            'Aplicaciones web transaccionales',
            'Data warehousing',
            'GIS y datos geoespaciales',
            'Análisis de datos',
            'Aplicaciones financieras'
        ],
        ventajas: [
            'Muy robusto y confiable',
            'Extensible (funciones, tipos)',
            'Excelente soporte JSON',
            'ACID compliant',
            'Open source y gratuito'
        ],
        desventajas: [
            'Configuración inicial compleja',
            'Más lento que MySQL en reads simples',
            'Requiere más recursos'
        ],
        empresas: ['Instagram', 'Spotify', 'Reddit', 'Apple', 'Twitch'],
        alternativas: ['mysql', 'mongodb'],
        recursos: [
            { tipo: 'Documentacion', nombre: 'PostgreSQL Docs', url: 'https://www.postgresql.org/docs/' },
            { tipo: 'Tutorial', nombre: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com/' }
        ],
        primerRelease: '1996',
        mantenidoPor: 'PostgreSQL Global Development Group'
    },

    'mongodb': {
        id: 'mongodb',
        nombre: 'MongoDB',
        nombreCorto: 'MongoDB',
        categoria: 'database',
        icon: 'mongodb-plain',
        iconType: 'devicon',
        color: '#47A248',
        descripcionCorta: 'Base de datos NoSQL orientada a documentos',
        descripcion: 'MongoDB es una base de datos NoSQL que almacena datos en documentos JSON flexibles. Ideal para aplicaciones con esquemas cambiantes y datos semi-estructurados.',
        usosPrincipales: [
            'Aplicaciones con esquema flexible',
            'Content management',
            'Real-time analytics',
            'IoT data storage',
            'Catálogos de productos'
        ],
        ventajas: [
            'Esquema flexible',
            'Escala horizontalmente',
            'Desarrollo rápido',
            'JSON nativo',
            'Atlas (cloud) muy fácil'
        ],
        desventajas: [
            'Sin transacciones ACID tradicionales',
            'Joins limitados',
            'Puede consumir más espacio',
            'Menos maduro que SQL DBs'
        ],
        empresas: ['eBay', 'Adobe', 'SAP', 'Cisco', 'Bosch'],
        alternativas: ['postgresql', 'redis'],
        recursos: [
            { tipo: 'Documentacion', nombre: 'MongoDB Docs', url: 'https://www.mongodb.com/docs/' },
            { tipo: 'Certificacion', nombre: 'MongoDB Certified Developer', url: 'https://university.mongodb.com/certification' }
        ],
        primerRelease: '2009',
        mantenidoPor: 'MongoDB Inc.'
    },

    // ========== DEVOPS ==========
    'docker': {
        id: 'docker',
        nombre: 'Docker',
        nombreCorto: 'Docker',
        categoria: 'devops',
        icon: 'docker-plain',
        iconType: 'devicon',
        color: '#2496ED',
        descripcionCorta: 'Plataforma de containerización de aplicaciones',
        descripcion: 'Docker permite empaquetar aplicaciones con todas sus dependencias en contenedores portables. Es el estándar para desarrollo y despliegue de aplicaciones modernas.',
        usosPrincipales: [
            'Containerización de aplicaciones',
            'Ambientes de desarrollo consistentes',
            'CI/CD pipelines',
            'Microservicios',
            'Despliegues reproducibles'
        ],
        ventajas: [
            'Portabilidad total',
            'Aislamiento de aplicaciones',
            'Desarrollo local = producción',
            'Eficiente en recursos',
            'Ecosistema rico (Docker Hub)'
        ],
        desventajas: [
            'Curva de aprendizaje inicial',
            'Overhead en algunos casos',
            'Seguridad requiere atención',
            'Persistencia de datos requiere volúmenes'
        ],
        empresas: ['Google', 'Amazon', 'Microsoft', 'Netflix', 'Spotify'],
        alternativas: ['kubernetes'],
        recursos: [
            { tipo: 'Documentacion', nombre: 'Docker Docs', url: 'https://docs.docker.com/' },
            { tipo: 'Certificacion', nombre: 'Docker Certified Associate', url: 'https://training.mirantis.com/certification/dca-certification-exam/' }
        ],
        primerRelease: '2013',
        mantenidoPor: 'Docker Inc.'
    },

    'kubernetes': {
        id: 'kubernetes',
        nombre: 'Kubernetes',
        nombreCorto: 'K8s',
        categoria: 'devops',
        icon: 'kubernetes-plain',
        iconType: 'devicon',
        color: '#326CE5',
        descripcionCorta: 'Orquestador de contenedores para producción',
        descripcion: 'Kubernetes es un sistema de orquestación de contenedores que automatiza el despliegue, escalado y gestión de aplicaciones containerizadas.',
        usosPrincipales: [
            'Orquestación de microservicios',
            'Auto-scaling',
            'Despliegues blue-green/canary',
            'Service mesh',
            'Multi-cloud deployments'
        ],
        ventajas: [
            'Estándar de la industria',
            'Auto-healing y auto-scaling',
            'Declarativo',
            'Multi-cloud',
            'Gran comunidad'
        ],
        desventajas: [
            'Complejidad alta',
            'Curva de aprendizaje pronunciada',
            'Overhead para apps pequeñas',
            'Requiere expertise'
        ],
        empresas: ['Google', 'Spotify', 'Capital One', 'Adidas', 'Pinterest'],
        alternativas: ['docker'],
        recursos: [
            { tipo: 'Documentacion', nombre: 'Kubernetes.io', url: 'https://kubernetes.io/docs/' },
            { tipo: 'Certificacion', nombre: 'CKA - Certified Kubernetes Administrator', url: 'https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/' }
        ],
        primerRelease: '2014',
        mantenidoPor: 'CNCF'
    },

    'git': {
        id: 'git',
        nombre: 'Git',
        nombreCorto: 'Git',
        categoria: 'tool',
        icon: 'git-plain',
        iconType: 'devicon',
        color: '#F05032',
        descripcionCorta: 'Sistema de control de versiones distribuido',
        descripcion: 'Git es el sistema de control de versiones más usado en el mundo. Permite trackear cambios en código, colaborar con otros desarrolladores y mantener historial completo.',
        usosPrincipales: [
            'Control de versiones de código',
            'Colaboración en equipos',
            'Code review (con GitHub/GitLab)',
            'CI/CD triggers',
            'Gestión de releases'
        ],
        ventajas: [
            'Distribuido (trabajo offline)',
            'Branching eficiente',
            'Estándar universal',
            'Historial completo',
            'Integrado en todo'
        ],
        desventajas: [
            'Curva de aprendizaje',
            'Conflictos de merge',
            'Comandos pueden ser confusos'
        ],
        empresas: ['Toda la industria de software'],
        alternativas: [],
        recursos: [
            { tipo: 'Documentacion', nombre: 'Git SCM', url: 'https://git-scm.com/doc' },
            { tipo: 'Tutorial', nombre: 'Pro Git Book', url: 'https://git-scm.com/book/en/v2' }
        ],
        primerRelease: '2005',
        mantenidoPor: 'Open Source'
    },

    // ========== CLOUD ==========
    'aws': {
        id: 'aws',
        nombre: 'Amazon Web Services',
        nombreCorto: 'AWS',
        categoria: 'cloud',
        icon: 'amazonwebservices-plain-wordmark',
        iconType: 'devicon',
        color: '#FF9900',
        descripcionCorta: 'Plataforma cloud líder del mercado',
        descripcion: 'AWS es la plataforma cloud más grande y completa, ofreciendo más de 200 servicios desde computación hasta machine learning.',
        usosPrincipales: [
            'Hosting de aplicaciones',
            'Almacenamiento (S3)',
            'Bases de datos gestionadas',
            'Machine Learning',
            'Serverless (Lambda)'
        ],
        ventajas: [
            'Más servicios que cualquier otro',
            'Mayor presencia global',
            'Muy maduro',
            'Documentación extensa',
            'Certificaciones reconocidas'
        ],
        desventajas: [
            'Pricing complejo',
            'Curva de aprendizaje',
            'Puede ser costoso sin optimización'
        ],
        empresas: ['Netflix', 'Airbnb', 'NASA', 'Capital One', 'McDonald\'s'],
        alternativas: ['azure', 'gcp'],
        recursos: [
            { tipo: 'Documentacion', nombre: 'AWS Docs', url: 'https://docs.aws.amazon.com/' },
            { tipo: 'Certificacion', nombre: 'AWS Certified Solutions Architect', url: 'https://aws.amazon.com/certification/' }
        ],
        primerRelease: '2006',
        mantenidoPor: 'Amazon'
    },

    'azure': {
        id: 'azure',
        nombre: 'Microsoft Azure',
        nombreCorto: 'Azure',
        categoria: 'cloud',
        icon: 'azure-plain',
        iconType: 'devicon',
        color: '#0078D4',
        descripcionCorta: 'Cloud de Microsoft, ideal para empresas',
        descripcion: 'Azure es la plataforma cloud de Microsoft, muy popular en empresas que ya usan tecnologías Microsoft como .NET, Active Directory y Office 365.',
        usosPrincipales: [
            'Aplicaciones .NET',
            'Integración con Office 365',
            'Hybrid cloud',
            'AI y Machine Learning',
            'DevOps (Azure DevOps)'
        ],
        ventajas: [
            'Integración con Microsoft',
            'Buen soporte empresarial',
            'Azure DevOps completo',
            'Hybrid cloud fuerte',
            'Seguridad enterprise'
        ],
        desventajas: [
            'UI puede ser confusa',
            'Algunos servicios menos maduros',
            'Pricing complejo'
        ],
        empresas: ['BMW', 'Samsung', 'Walmart', 'HP', 'Adobe'],
        alternativas: ['aws', 'gcp'],
        recursos: [
            { tipo: 'Documentacion', nombre: 'Azure Docs', url: 'https://learn.microsoft.com/en-us/azure/' },
            { tipo: 'Certificacion', nombre: 'Azure Fundamentals (AZ-900)', url: 'https://learn.microsoft.com/en-us/certifications/azure-fundamentals/' }
        ],
        primerRelease: '2010',
        mantenidoPor: 'Microsoft'
    }
};

// ============================================
// MAPEO DE ICONOS A TECNOLOGÍAS
// ============================================

// Map from devicon class (without 'devicon-' prefix) to technology id
export const iconToTechId: Record<string, string> = {
    'python-plain': 'python',
    'python-original': 'python',
    'java-plain': 'java',
    'java-original': 'java',
    'javascript-plain': 'javascript',
    'typescript-plain': 'typescript',
    'spring-plain': 'spring',
    'spring-original': 'spring',
    'react-original': 'react',
    'react-plain': 'react',
    'angularjs-plain': 'angular',
    'angular-plain': 'angular',
    'postgresql-plain': 'postgresql',
    'mongodb-plain': 'mongodb',
    'docker-plain': 'docker',
    'kubernetes-plain': 'kubernetes',
    'git-plain': 'git',
    'amazonwebservices-plain-wordmark': 'aws',
    'azure-plain': 'azure',
    'nodejs-plain': 'javascript',
    'html5-plain': 'javascript',
    'css3-plain': 'javascript',
};

// ============================================
// HELPERS
// ============================================

/**
 * Obtiene una tecnología por su ID
 */
export function getTechnology(id: string): Technology | undefined {
    return technologies[id];
}

/**
 * Obtiene una tecnología por la clase de su icono
 */
export function getTechByIconClass(iconClass: string): Technology | undefined {
    const techId = iconToTechId[iconClass];
    return techId ? technologies[techId] : undefined;
}

/**
 * Obtiene tecnologías por categoría
 */
export function getTechByCategory(categoria: TechCategory): Technology[] {
    return Object.values(technologies).filter(t => t.categoria === categoria);
}

/**
 * Obtiene el color CSS para una categoría
 */
export function getCategoryColor(categoria: TechCategory): string {
    const colors: Record<TechCategory, string> = {
        language: '#06b6d4',      // cyan
        framework: '#8b5cf6',     // purple
        database: '#22c55e',      // green
        devops: '#f59e0b',        // amber
        cloud: '#f43f5e',         // rose
        tool: '#64748b'           // gray
    };
    return colors[categoria];
}

/**
 * Obtiene el nombre legible de una categoría
 */
export function getCategoryName(categoria: TechCategory): string {
    const names: Record<TechCategory, string> = {
        language: 'Lenguaje',
        framework: 'Framework',
        database: 'Base de Datos',
        devops: 'DevOps',
        cloud: 'Cloud',
        tool: 'Herramienta'
    };
    return names[categoria];
}
