<div align="center">

![Security](https://img.shields.io/badge/Security-Informática-red?style=flat-square&logo=security&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-04-blue?style=flat-square)

# `Autenticación y Autorización`

</div>

---

### 📋 Contenido

| Método | Descripción |
|:-------|:------------|
| Password | Algo que sabes |
| Token | Algo que tienes |
| Biométrico | Algo que eres |
| MFA | Multi-factor |

---

### 💻 JWT

```java
// Crear token
String token = Jwts.builder()
    .setSubject(username)
    .setIssuedAt(new Date())
    .setExpiration(new Date(System.currentTimeMillis() + 3600000))
    .signWith(SignatureAlgorithm.HS256, secretKey)
    .compact();

// Validar token
Claims claims = Jwts.parser()
    .setSigningKey(secretKey)
    .parseClaimsJws(token)
    .getBody();

String user = claims.getSubject();
```

---

<div align="center">
<sub>Seguridad Informática · Experiencia 2</sub>
</div>
