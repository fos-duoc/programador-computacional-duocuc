<div align="center">

![Security](https://img.shields.io/badge/Security-Informática-red?style=flat-square&logo=security&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-05-blue?style=flat-square)

# `SQL Injection`

</div>

---

### 📋 Contenido

| Tipo | Descripción |
|:-----|:------------|
| In-band | Resultado visible |
| Blind | Sin respuesta directa |
| Error-based | Usa mensajes de error |

---

### 💻 Prevención

```java
// ❌ VULNERABLE
String sql = "SELECT * FROM users WHERE id = " + userId;
Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery(sql);

// ✓ SEGURO - PreparedStatement
String sql = "SELECT * FROM users WHERE id = ?";
PreparedStatement ps = conn.prepareStatement(sql);
ps.setInt(1, userId);
ResultSet rs = ps.executeQuery();

// ✓ SEGURO - JPA/Hibernate
@Query("SELECT u FROM User u WHERE u.id = :id")
User findById(@Param("id") Long id);
```

---

<div align="center">
<sub>Seguridad Informática · Experiencia 2</sub>
</div>
