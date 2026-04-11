<div align="center">

![Spring Security](https://img.shields.io/badge/Spring-Security-6DB33F?style=flat-square&logo=springsecurity&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-01-blue?style=flat-square)

# `Spring Security Fundamentos`

</div>

---

### 🔐 Configuración Base

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http)
            throws Exception {
        return http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

| Concepto | Descripción |
|:---------|:------------|
| `Authentication` | Verificar identidad |
| `Authorization` | Verificar permisos |
| `FilterChain` | Cadena de filtros |

---

<div align="center">
<sub>Backend II-III · Experiencia 1</sub>
</div>
