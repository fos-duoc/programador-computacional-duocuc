<div align="center">

![JWT](https://img.shields.io/badge/JWT-Token-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-02-blue?style=flat-square)

# `JWT Authentication`

</div>

---

### 🎫 Generación de Token

```java
@Service
public class JwtService {

    @Value("${jwt.secret}")
    private String secretKey;

    public String generateToken(UserDetails user) {
        return Jwts.builder()
            .setSubject(user.getUsername())
            .setIssuedAt(new Date())
            .setExpiration(new Date(
                System.currentTimeMillis() + 86400000))
            .signWith(getSigningKey(), SignatureAlgorithm.HS256)
            .compact();
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }
}
```

| Parte | Contenido |
|:------|:----------|
| Header | Algoritmo, tipo |
| Payload | Claims, datos |
| Signature | Firma HMAC |

---

<div align="center">
<sub>Backend II-III · Experiencia 1</sub>
</div>
