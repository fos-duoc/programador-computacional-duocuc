<div align="center">

![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-07-blue?style=flat-square)

# `DAO Pattern`

</div>

---

### 📋 Contenido

| Componente | Descripción |
|:-----------|:------------|
| Interface | Contrato de operaciones |
| Implementación | Lógica de acceso |
| Modelo | Entidad de datos |

---

### 💻 Código

```java
// Interface
public interface UsuarioDAO {
    Usuario findById(int id);
    List<Usuario> findAll();
    void save(Usuario u);
    void delete(int id);
}

// Implementación
public class UsuarioDAOImpl implements UsuarioDAO {

    @Override
    public Usuario findById(int id) {
        String sql = "SELECT * FROM usuarios WHERE id = ?";
        // ... ejecutar query
    }

    @Override
    public void save(Usuario u) {
        String sql = "INSERT INTO usuarios VALUES (?,?)";
        // ... ejecutar insert
    }
}
```

---

<div align="center">
<sub>Programación OO II · Experiencia 3</sub>
</div>
