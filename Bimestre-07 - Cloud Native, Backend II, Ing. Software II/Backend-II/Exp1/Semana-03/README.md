<div align="center">

![OAuth2](https://img.shields.io/badge/OAuth2-Social-EB5424?style=flat-square&logo=auth0&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-03-blue?style=flat-square)

# `OAuth2 & Social Login`

</div>

---

### 🔗 Configuración Google OAuth2

```yaml
# application.yml
spring:
  security:
    oauth2:
      client:
        registration:
          google:
            client-id: ${GOOGLE_CLIENT_ID}
            client-secret: ${GOOGLE_CLIENT_SECRET}
            scope: openid, profile, email
```

```java
@Configuration
public class OAuth2Config {

    @Bean
    public SecurityFilterChain oauth2FilterChain(HttpSecurity http)
            throws Exception {
        return http
            .oauth2Login(oauth -> oauth
                .loginPage("/login")
                .defaultSuccessUrl("/home")
                .userInfoEndpoint(user -> user
                    .userService(customOAuth2UserService))
            )
            .build();
    }
}
```

| Flujo | Descripción |
|:------|:------------|
| Authorization Code | Web apps |
| Client Credentials | M2M |
| PKCE | Mobile/SPA |

---

<div align="center">
<sub>Backend II-III · Experiencia 1</sub>
</div>
