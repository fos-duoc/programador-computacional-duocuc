<div align="center">

<!-- HEADER -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:667eea,25:764ba2,50:f093fb,75:5ee7df,100:b8c6db&height=180&section=header&animation=fadeIn" width="100%"/>

<br>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=800&size=42&duration=3000&pause=1000&color=667EEA&center=true&vCenter=true&multiline=true&repeat=false&width=800&height=50&lines=ANALISTA+PROGRAMADOR" alt="Title"/>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=28&duration=2500&pause=800&color=764BA2&center=true&vCenter=true&repeat=false&width=600&height=40&lines=COMPUTACIONAL" alt="Subtitle"/>

<br>

<img src="https://img.shields.io/badge/DUOC_UC-Escuela_de_Informática-667eea?style=for-the-badge&logo=academia&logoColor=white&labelColor=764ba2" alt="DuocUC"/>

<br><br>

<img src="https://img.shields.io/badge/MODALIDAD-ONLINE-5ee7df?style=flat-square&logo=wifi&logoColor=white&labelColor=667eea"/>
<img src="https://img.shields.io/badge/DURACIÓN-17_BIMESTRES-f093fb?style=flat-square&logo=calendar&logoColor=white&labelColor=764ba2"/>
<img src="https://img.shields.io/badge/2025_2026-ACTUALIZADO-b8c6db?style=flat-square&logo=checkmarx&logoColor=white&labelColor=667eea"/>
<img src="https://img.shields.io/badge/TÍTULO-TÉCNICO_NIVEL_SUPERIOR-5ee7df?style=flat-square&logo=mortarboard&logoColor=white&labelColor=764ba2"/>

<br><br>

<sub>Portafolio académico del programa <b>Analista Programador Computacional</b> (DuocUC Online).<br>
Coursework por bimestre + sitio Astro con Tutor Académico + recursos institucionales.</sub>

</div>

---

## 📑 Índice

- [Quickstart](#-quickstart)
- [Stack](#-stack)
- [Estructura del repo](#-estructura-del-repo)
- [Bimestres](#-bimestres)
- [Mallas curriculares](#-mallas-curriculares)
- [Trayectoria académica](#-trayectoria-académica)
- [Documentación](#-documentación)

---

## 🚀 Quickstart

```bash
# 1. Clonar
git clone https://github.com/fos-duoc/programador-computacional-duocuc.git
cd programador-computacional-duocuc

# 2. Python coursework (uv)
uv sync

# 3. Instalar pre-commit hooks (gatekeeper + lint)
./scripts/install-hooks.sh

# 4. Sitio Astro (opcional)
cd apps/astro-site
npm ci
npm run dev       # http://localhost:4321
```

Requisitos: Python 3.13 (via [uv](https://github.com/astral-sh/uv)), Node 20.x (via `.nvmrc`), Git.

---

## 🛠️ Stack

<div align="center">

| Categoría | Tecnologías |
|:----------|:------------|
| **Lenguajes** | Java · Python · TypeScript · JavaScript · Kotlin · SQL · HTML/CSS |
| **Backend** | Spring Boot · Node.js · Express · JPA/Hibernate |
| **Frontend** | Angular · React · Astro · Bootstrap · TailwindCSS |
| **Mobile** | Android (Kotlin) · Ionic |
| **Bases de datos** | Oracle · PostgreSQL · MySQL |
| **Cloud & DevOps** | AWS · Azure · Docker · Kubernetes · GitHub Actions |
| **Tooling repo** | uv · ruff · ESLint · Prettier · pre-commit · commitlint |

</div>

---

## 📂 Estructura del repo

```
programador-computacional-duocuc/
├── apps/astro-site/       Sitio público (Astro 5 + TS) → GitHub Pages
├── coursework/            17 bimestres académicos (bimestre-XX-slug/)
├── resources/             Mallas curriculares, reglamentos, plantillas
├── docs/                  Conventions, architecture deep-dives, setup
├── scripts/               Hooks, gatekeeper anti-IA, context tooling
├── sessions/              Bitácora cronológica de sesiones de trabajo
├── ARCHITECTURE.md        Arquitectura, CI/CD, deploy, gatekeeping
├── CONTRIBUTING.md        Guía de contribución
└── SECURITY.md            Policy de seguridad
```

Detalle completo en [ARCHITECTURE.md](ARCHITECTURE.md).

---

## 📚 Bimestres

<div align="center">

<table>
<tr>
<td width="50%" valign="top">

**📘 Año 1**

- B01 — [Fundamentos Prog. + Antropología](coursework/bimestre-01-fundamentos-prog-antropologia/)
- B02 — [POO I + Comunicación](coursework/bimestre-02-poo-i-comunicacion/)
- B03 — [POO II + Modelamiento BD](coursework/bimestre-03-poo-ii-modelamiento-bd/)
- B04 — [Consulta BD + Cloud Computing](coursework/bimestre-04-consulta-bd-cloud-computing/)

**📗 Año 2**

- B05 — [Prog. BD + DevOps + Requisitos](coursework/bimestre-05-prog-bd-devops-requisitos/)
- B06 — [Seguridad + Backend I + Ing. Soft. I](coursework/bimestre-06-seguridad-backend-i-ing-software-i/)
- B07 — [Cloud Native + Backend II + Ing. Soft. II](coursework/bimestre-07-cloud-native-backend-ii-ing-software-ii/)
- B08 — [Backend III + Frontend I + Arq. Soft.](coursework/bimestre-08-backend-iii-frontend-i-arq-software/)

</td>
<td width="50%" valign="top">

**📙 Año 3**

- B09 — [Frontend II + Mobile I](coursework/bimestre-09-frontend-ii-mobile-i/)
- B10 — [Frontend III + Mobile II + Taller](coursework/bimestre-10-frontend-iii-mobile-ii-taller-aplicado/)
- B11 — [Full-stack I + BD Aplicada](coursework/bimestre-11-fullstack-i-bd-aplicada/)
- B12 — [Full-stack II + Cloud Computing](coursework/bimestre-12-fullstack-ii-cloud-computing/)

**📕 Año 4**

- B13 — [Full-stack III + DevOps](coursework/bimestre-13-fullstack-iii-devops/)
- B14 — [Apps Móviles + Cloud Native I](coursework/bimestre-14-app-moviles-cloud-native-i/)
- B15 — [Cloud Native II + Seguridad + Calidad](coursework/bimestre-15-cloud-native-ii-seguridad-calidad/)
- B16 — [Evaluación + Gestión de Proyectos](coursework/bimestre-16-evaluacion-gestion-proyectos-sw/)
- B17 — [Ética + Taller Aplicado 🎓](coursework/bimestre-17-etica-taller-aplicado-sw/)

</td>
</tr>
</table>

</div>

Cada bimestre tiene su propio `README.md` con índice de asignaturas y cheatsheets copy-paste-ready.

---

## 🎓 Mallas curriculares

<details>
<summary><b>📋 Ver mallas 2025</b> (online + presencial)</summary>

### 🌐 Online

<table>
<tr>
<td align="center">

**🥈 Analista Programador Computacional**

<sub>10 Bimestres · Título Técnico</sub>

<a href="resources/mallas/malla-tecnico-2025.jpg">
<img src="resources/mallas/malla-tecnico-2025.jpg" width="450" alt="Malla Técnico 2025"/>
</a>

</td>
<td align="center">

**🥇 Ingeniería en Desarrollo de Software**

<sub>7 Bimestres · Continuidad</sub>

<a href="resources/mallas/malla-ing-software-2025.jpg">
<img src="resources/mallas/malla-ing-software-2025.jpg" width="450" alt="Malla Ing Software 2025"/>
</a>

</td>
</tr>
</table>

### 🏫 Presencial

<table>
<tr>
<td align="center">

**💻 Desarrollo de Software**

<a href="resources/mallas/malla-presencial-desarrollo-software.png">
<img src="resources/mallas/malla-presencial-desarrollo-software.png" width="280"/>
</a>

</td>
<td align="center">

**📊 Ingeniería de Datos**

<a href="resources/mallas/malla-presencial-ingenieria-datos.jpg">
<img src="resources/mallas/malla-presencial-ingenieria-datos.jpg" width="280"/>
</a>

</td>
<td align="center">

**🤖 Inteligencia Artificial**

<a href="resources/mallas/malla-presencial-inteligencia-artificial.jpg">
<img src="resources/mallas/malla-presencial-inteligencia-artificial.jpg" width="280"/>
</a>

</td>
</tr>
<tr>
<td align="center">

**⚙️ Automatización**

<a href="resources/mallas/malla-presencial-automatizacion.jpg">
<img src="resources/mallas/malla-presencial-automatizacion.jpg" width="280"/>
</a>

</td>
<td align="center">

**🔬 Ciencia de Datos**

<a href="resources/mallas/malla-presencial-ciencia-datos.jpg">
<img src="resources/mallas/malla-presencial-ciencia-datos.jpg" width="280"/>
</a>

</td>
<td align="center">

**🎓 Ingeniería en Informática**

<a href="resources/mallas/malla-presencial-informatica.png">
<img src="resources/mallas/malla-presencial-informatica.png" width="280"/>
</a>

</td>
</tr>
</table>

</details>

---

## 🎯 Trayectoria académica

<div align="center">

<table>
<tr>
<td align="center" width="220">
<img src="https://capsule-render.vercel.app/api?type=rounded&color=2E7D32&height=40&section=header&text=AÑO%201&fontSize=14&fontColor=ffffff&fontAlignY=55" width="180"/>
<br><sub><b>FUNDAMENTOS</b></sub>
<br><br>
<img src="https://img.shields.io/badge/B01--B04-Python_·_Java_·_SQL_·_Cloud-2E7D32?style=flat-square"/>
</td>
<td align="center" width="280">
<img src="https://capsule-render.vercel.app/api?type=rounded&color=gradient&customColorList=27&height=55&section=header&text=🏆%20SALIDA%20B10&fontSize=12&fontColor=ffffff&fontAlignY=55" width="250"/>
<br>
<img src="https://img.shields.io/badge/Título-Técnico_Programador-FF6600?style=for-the-badge"/>
</td>
<td align="center" width="220">
<img src="https://capsule-render.vercel.app/api?type=rounded&color=1565C0&height=40&section=header&text=AÑO%202-4&fontSize=14&fontColor=ffffff&fontAlignY=55" width="180"/>
<br><sub><b>ESPECIALIZACIÓN</b></sub>
<br><br>
<img src="https://img.shields.io/badge/B11--B17-Full--stack_·_Mobile_·_DevOps-1565C0?style=flat-square"/>
</td>
</tr>
</table>

<br>

<img src="https://capsule-render.vercel.app/api?type=rounded&color=gradient&customColorList=20&height=70&section=header&text=🎓%20INGENIERÍA%20EN%20DESARROLLO%20DE%20SOFTWARE&fontSize=14&fontColor=ffffff&fontAlignY=55" width="450"/>

</div>

---

## 📖 Documentación

- **[ARCHITECTURE.md](ARCHITECTURE.md)** — monorepo, CI/CD, deploy, gatekeeping
- **[CONTRIBUTING.md](CONTRIBUTING.md)** — cómo contribuir, workflow, convenciones
- **[SECURITY.md](SECURITY.md)** — policy y reporting
- **[docs/conventions.md](docs/conventions.md)** — naming, branches, Conventional Commits
- **[docs/architecture/astro-site.md](docs/architecture/astro-site.md)** — deep-dive tech debt Astro
- **[docs/recursos-github.md](docs/recursos-github.md)** — herramientas externas para perfiles GitHub

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:667eea,50:764ba2,100:f093fb&height=120&section=footer" width="100%"/>

**DuocUC** · Escuela de Informática y Telecomunicaciones

<sub>_{ código limpio · buenas prácticas · aprendizaje continuo }_</sub>

</div>
