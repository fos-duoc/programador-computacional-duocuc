# Herramientas para tu GitHub Profile

> Colección curada de herramientas para crear perfiles de GitHub profesionales y repositorios atractivos. Movido del README principal para mantenerlo enfocado en el portafolio académico — ver [README.md](../README.md).

<div align="center">

## 🏆 TIER S — Imprescindibles

<table>
<tr>
<td align="center" width="200">

**📊 GitHub Readme Stats**

<a href="https://github.com/anuraghazra/github-readme-stats">
<img src="https://img.shields.io/badge/⭐_69k+-Stats_Cards-667eea?style=for-the-badge&labelColor=1a1a2e" height="28"/>
</a>

<sub>Stats, Top Langs, Repo Cards</sub>

</td>
<td align="center" width="200">

**🔥 Streak Stats**

<a href="https://github.com/DenverCoder1/github-readme-streak-stats">
<img src="https://img.shields.io/badge/⭐_5k+-Streak_Fire-f093fb?style=for-the-badge&labelColor=1a1a2e" height="28"/>
</a>

<sub>Racha de contribuciones</sub>

</td>
<td align="center" width="200">

**📈 Metrics**

<a href="https://github.com/lowlighter/metrics">
<img src="https://img.shields.io/badge/⭐_13k+-Advanced_Stats-5ee7df?style=for-the-badge&labelColor=1a1a2e" height="28"/>
</a>

<sub>+50 plugins personalizables</sub>

</td>
<td align="center" width="200">

**⌨️ Typing SVG**

<a href="https://github.com/DenverCoder1/readme-typing-svg">
<img src="https://img.shields.io/badge/⭐_5k+-Animated_Text-764ba2?style=for-the-badge&labelColor=1a1a2e" height="28"/>
</a>

<sub>Texto animado tipo terminal</sub>

</td>
</tr>
</table>

---

## 🎨 Headers & Banners

| Herramienta | Descripción | Enlace |
|:------------|:------------|:------:|
| **Capsule Render** | Headers/footers con gradientes y animaciones | [↗](https://github.com/kyechan99/capsule-render) |
| **SVG Banners** | Banners minimalistas estilo terminal | [↗](https://github.com/Akshay090/svg-banners) |
| **Header Generator** | Generador visual de headers | [↗](https://leviarista.github.io/github-profile-header-generator/) |
| **Profile Header Generator** | Headers con imágenes de fondo | [↗](https://github.com/khalby786/REHeader) |

---

## 📊 Stats & Métricas

| Herramienta | Tipo | Enlace |
|:------------|:-----|:------:|
| **GitHub Profile Trophy** | Trofeos por logros | [↗](https://github.com/ryo-ma/github-profile-trophy) |
| **GitHub Profile Views Counter** | Contador de visitas | [↗](https://github.com/antonkomarev/github-profile-views-counter) |
| **GitHub Trends** | Gráficas de tendencias | [↗](https://github.com/avgupta456/github-trends) |
| **GitHub Profile Summary Cards** | Resumen visual completo | [↗](https://github.com/vn7n24fzkq/github-profile-summary-cards) |
| **WakaTime Stats** | Tiempo de coding por lenguaje | [↗](https://github.com/anmol098/waka-readme-stats) |
| **GitHub Contribution 3D** | Contribuciones en 3D | [↗](https://github.com/yoshi389111/github-profile-3d-contrib) |

---

## 🛠️ Generadores de README

| Herramienta | Nota | Enlace |
|:------------|:-----|:------:|
| **GPRM** | ⭐ El más completo | [↗](https://gprm.itsvg.in/) |
| **Profile Generator** | Visual y fácil | [↗](https://rahuldkjain.github.io/gh-profile-readme-generator/) |
| **Profilinator** | Drag & drop | [↗](https://profilinator.rishav.dev/) |
| **readme.so** | Editor markdown visual | [↗](https://readme.so/) |

---

## 🐍 Snake Animation

Animación de serpiente que "come" las contribuciones.

```yaml
# .github/workflows/snake.yml
name: Generate Snake

on:
  schedule:
    - cron: "0 */12 * * *"  # Cada 12 horas
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: Platane/snk@v3
        with:
          github_user_name: ${{ github.repository_owner }}
          outputs: |
            dist/github-snake.svg
            dist/github-snake-dark.svg?palette=github-dark
```

Repo: [Platane/snk](https://github.com/Platane/snk).

---

## 🎯 Recursos adicionales

**📚 Íconos & Badges**
- [Skill Icons](https://skillicons.dev/) — Íconos de tecnologías
- [Simple Icons](https://simpleicons.org/) — +2800 logos de marcas
- [Devicon](https://devicon.dev/) — Íconos de desarrollo
- [Shields.io](https://shields.io/) — Badges personalizables

**✨ Decoración**
- [Animated Fluent Emojis](https://github.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis) — Emojis animados
- [GitHub Readme Activity Graph](https://github.com/Ashutosh00710/github-readme-activity-graph) — Gráfico de actividad
- [Spotify Now Playing](https://github.com/novatorem/novatorem) — Widget de Spotify
- [Blog Post Workflow](https://github.com/gautamkrishnar/blog-post-workflow) — Posts de blog automáticos

</div>
