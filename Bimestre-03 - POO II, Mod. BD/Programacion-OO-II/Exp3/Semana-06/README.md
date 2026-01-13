<div align="center">

![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-06-blue?style=flat-square)

# `JDBC`

</div>

---

### 📋 Contenido

| Componente | Descripción |
|:-----------|:------------|
| Connection | Conexión a BD |
| Statement | Ejecutar SQL |
| ResultSet | Resultado de query |
| PreparedStatement | SQL parametrizado |

---

### 💻 Código

```java
String url = "jdbc:mysql://localhost:3306/mydb";

try (Connection conn = DriverManager
        .getConnection(url, "user", "pass")) {

    String sql = "SELECT * FROM usuarios WHERE id = ?";
    PreparedStatement ps = conn.prepareStatement(sql);
    ps.setInt(1, userId);

    ResultSet rs = ps.executeQuery();
    while (rs.next()) {
        String nombre = rs.getString("nombre");
        int edad = rs.getInt("edad");
    }

} catch (SQLException e) {
    e.printStackTrace();
}
```

---

<div align="center">
<sub>Programación OO II · Experiencia 3</sub>
</div>
