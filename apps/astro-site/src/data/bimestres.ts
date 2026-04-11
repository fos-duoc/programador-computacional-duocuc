export interface Subject {
    icon: string;
    iconType?: 'devicon' | 'fontawesome';
    name: string;
}

export interface Bimestre {
    number: string;
    title: string;
    techIcons: string[];
    subjects: Subject[];
    featured?: boolean;
}

export const bimestresYear1: Bimestre[] = [
    {
        number: "01",
        title: "Fundamentos",
        techIcons: ["python-plain", "oracle-original"],
        subjects: [
            { icon: "python-plain", name: "Fundamentos Prog." },
            { icon: "oracle-original", name: "Modelamiento BD" },
            { icon: "fas fa-book", iconType: "fontawesome", name: "Antropologia" }
        ]
    },
    {
        number: "02",
        title: "POO & Cloud",
        techIcons: ["java-plain", "amazonwebservices-plain-wordmark"],
        subjects: [
            { icon: "java-plain", name: "POO I" },
            { icon: "amazonwebservices-plain-wordmark", name: "Computacion Nube" },
            { icon: "fas fa-comments", iconType: "fontawesome", name: "Comunicacion" }
        ]
    },
    {
        number: "03",
        title: "POO & DevOps",
        techIcons: ["java-plain", "docker-plain"],
        subjects: [
            { icon: "java-plain", name: "POO II" },
            { icon: "docker-plain", name: "DevOps" },
            { icon: "fas fa-balance-scale", iconType: "fontawesome", name: "Etica" }
        ]
    },
    {
        number: "04",
        title: "SQL & Security",
        techIcons: ["oracle-original"],
        subjects: [
            { icon: "oracle-original", name: "SQL Consultas" },
            { icon: "fas fa-shield-alt", iconType: "fontawesome", name: "Seguridad Informatica" }
        ]
    }
];

export const bimestresYear2: Bimestre[] = [
    {
        number: "05",
        title: "SQL & Cloud Native",
        techIcons: ["oracle-original", "kubernetes-plain"],
        featured: true,
        subjects: [
            { icon: "oracle-original", name: "SQL Programacion" },
            { icon: "kubernetes-plain", name: "Cloud Native" },
            { icon: "fas fa-clipboard-list", iconType: "fontawesome", name: "Ing. Requisitos" }
        ]
    },
    {
        number: "06",
        title: "Backend I",
        techIcons: ["spring-plain"],
        subjects: [
            { icon: "spring-plain", name: "Backend I" },
            { icon: "fas fa-project-diagram", iconType: "fontawesome", name: "Ing. Software I" }
        ]
    },
    {
        number: "07",
        title: "Backend II-III",
        techIcons: ["spring-plain"],
        subjects: [
            { icon: "spring-plain", name: "Backend II-III" },
            { icon: "fas fa-project-diagram", iconType: "fontawesome", name: "Ing. Software II" }
        ]
    },
    {
        number: "08",
        title: "Frontend & Arq.",
        techIcons: ["angularjs-plain"],
        subjects: [
            { icon: "angularjs-plain", name: "Frontend I-II" },
            { icon: "fas fa-sitemap", iconType: "fontawesome", name: "Arquitectura Software" }
        ]
    },
    {
        number: "09",
        title: "Mobile & Frontend",
        techIcons: ["kotlin-plain", "angularjs-plain"],
        subjects: [
            { icon: "kotlin-plain", name: "Mobile I" },
            { icon: "angularjs-plain", name: "Frontend III" }
        ]
    },
    {
        number: "10",
        title: "Mobile II & Titulo",
        techIcons: [],
        subjects: [
            { icon: "fas fa-mobile-alt", iconType: "fontawesome", name: "Mobile II" },
            { icon: "fas fa-graduation-cap", iconType: "fontawesome", name: "Taller de Titulo" }
        ]
    }
];

// Ingeniería en Desarrollo de Software (B11-B17)
export const bimestresYear3: Bimestre[] = [
    {
        number: "11",
        title: "Fullstack I & BD",
        techIcons: ["react-original", "postgresql-plain"],
        subjects: [
            { icon: "react-original", name: "Desarrollo Fullstack I" },
            { icon: "postgresql-plain", name: "BD Aplicada" }
        ]
    },
    {
        number: "12",
        title: "Fullstack II & Cloud",
        techIcons: ["nodejs-plain", "amazonwebservices-plain-wordmark"],
        subjects: [
            { icon: "nodejs-plain", name: "Desarrollo Fullstack II" },
            { icon: "amazonwebservices-plain-wordmark", name: "Cloud Computing" }
        ]
    },
    {
        number: "13",
        title: "Fullstack III & DevOps",
        techIcons: ["typescript-plain", "docker-plain"],
        subjects: [
            { icon: "typescript-plain", name: "Desarrollo Fullstack III" },
            { icon: "docker-plain", name: "DevOps" }
        ]
    },
    {
        number: "14",
        title: "Mobile & Cloud Native",
        techIcons: ["flutter-plain", "kubernetes-plain"],
        subjects: [
            { icon: "flutter-plain", name: "Desarrollo App Móviles" },
            { icon: "kubernetes-plain", name: "Cloud Native I" }
        ]
    }
];

export const bimestresYear4: Bimestre[] = [
    {
        number: "15",
        title: "Cloud Native II & Seguridad",
        techIcons: ["amazonwebservices-plain-wordmark", "fas fa-shield-alt"],
        subjects: [
            { icon: "amazonwebservices-plain-wordmark", name: "Cloud Native II" },
            { icon: "fas fa-shield-alt", iconType: "fontawesome", name: "Seguridad y Calidad" }
        ]
    },
    {
        number: "16",
        title: "Gestión de Proyectos",
        techIcons: ["jira-plain"],
        subjects: [
            { icon: "jira-plain", name: "Evaluación Proyectos SW" },
            { icon: "fas fa-tasks", iconType: "fontawesome", name: "Gestión Proyectos SW" }
        ]
    },
    {
        number: "17",
        title: "Ética & Título Ing.",
        techIcons: [],
        subjects: [
            { icon: "fas fa-balance-scale", iconType: "fontawesome", name: "Ética Profesional" },
            { icon: "fas fa-graduation-cap", iconType: "fontawesome", name: "Taller Aplicado SW" }
        ]
    }
];
