<div align="center">

![Security](https://img.shields.io/badge/Security-Informática-red?style=flat-square&logo=security&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-07-blue?style=flat-square)

# `HTTPS y Certificados`

</div>

---

### 📋 Contenido

| Concepto | Descripción |
|:---------|:------------|
| TLS | Transport Layer Security |
| Certificado | Identidad verificada |
| CA | Autoridad certificadora |
| HSTS | Forzar HTTPS |

---

### 💻 Spring Security

```java
@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) {
        return http
            .requiresChannel()
                .anyRequest().requiresSecure()  // Forzar HTTPS
            .and()
            .headers()
                .httpStrictTransportSecurity()
                .includeSubDomains(true)
                .maxAgeInSeconds(31536000)
            .and()
            .build();
    }
}
```

```yaml
# application.yml
server:
  ssl:
    key-store: classpath:keystore.p12
    key-store-password: ${SSL_PASSWORD}
```

---

<div align="center">
<sub>Seguridad Informática · Experiencia 3</sub>
</div>
