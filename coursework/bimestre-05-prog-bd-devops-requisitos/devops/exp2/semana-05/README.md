<div align="center">

![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-05-blue?style=flat-square)

# `Git Avanzado`

</div>

---

### 📋 Contenido

| Comando | Descripción |
|:--------|:------------|
| `branch` | Crear ramas |
| `merge` | Unir ramas |
| `rebase` | Reorganizar commits |
| `stash` | Guardar cambios |

---

### 💻 Comandos

```bash
# Ramas
git branch feature/login
git checkout -b feature/login
git branch -d feature/login

# Merge
git checkout main
git merge feature/login

# Rebase
git rebase main

# Stash
git stash
git stash pop
git stash list

# Ver historial
git log --oneline --graph

# Revertir
git revert <commit>
git reset --hard HEAD~1
```

---

<div align="center">
<sub>DevOps · Experiencia 2</sub>
</div>
