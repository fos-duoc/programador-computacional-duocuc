# ◈ Backend II-III

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Bimestre 07 · Spring Security · JWT · Testing · Microservicios              │
└──────────────────────────────────────────────────────────────────────────────┘
```

## ⚡ Contenido

- [Spring Security](#-spring-security)
- [Testing](#-testing)
- [Microservicios Spring](#-microservicios)

---

## 📌 Spring Security

```java
// ═══════════════════════════════════════════════════════════════════════
// CONFIGURACIÓN
// ═══════════════════════════════════════════════════════════════════════

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .sessionManagement(session ->
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

// ═══════════════════════════════════════════════════════════════════════
// JWT SERVICE
// ═══════════════════════════════════════════════════════════════════════

@Service
public class JwtService {

    @Value("${jwt.secret}")
    private String secret;

    public String generateToken(UserDetails user) {
        return Jwts.builder()
            .setSubject(user.getUsername())
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + 86400000))
            .signWith(SignatureAlgorithm.HS256, secret)
            .compact();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public String extractUsername(String token) {
        return Jwts.parser()
            .setSigningKey(secret)
            .parseClaimsJws(token)
            .getBody()
            .getSubject();
    }
}
```

---

## 📌 Testing

```java
// ═══════════════════════════════════════════════════════════════════════
// UNIT TEST
// ═══════════════════════════════════════════════════════════════════════

@ExtendWith(MockitoExtension.class)
class ProductoServiceTest {

    @Mock
    private ProductoRepository repository;

    @InjectMocks
    private ProductoService service;

    @Test
    void findById_existente_retornaProducto() {
        Producto producto = new Producto(1L, "Test", 100.0);
        when(repository.findById(1L)).thenReturn(Optional.of(producto));

        Optional<Producto> result = service.findById(1L);

        assertTrue(result.isPresent());
        assertEquals("Test", result.get().getNombre());
        verify(repository).findById(1L);
    }
}

// ═══════════════════════════════════════════════════════════════════════
// INTEGRATION TEST
// ═══════════════════════════════════════════════════════════════════════

@SpringBootTest
@AutoConfigureMockMvc
class ProductoControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void listarProductos_retorna200() throws Exception {
        mockMvc.perform(get("/api/productos"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$").isArray());
    }

    @Test
    void crearProducto_valido_retorna201() throws Exception {
        String json = "{\"nombre\":\"Test\",\"precio\":100}";

        mockMvc.perform(post("/api/productos")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.nombre").value("Test"));
    }
}
```

---

## 📌 Microservicios

```yaml
# ═══════════════════════════════════════════════════════════════════════
# EUREKA SERVER (Service Discovery)
# ═══════════════════════════════════════════════════════════════════════

# application.yml
spring:
  application:
    name: eureka-server
eureka:
  client:
    register-with-eureka: false
    fetch-registry: false

# ═══════════════════════════════════════════════════════════════════════
# API GATEWAY
# ═══════════════════════════════════════════════════════════════════════

spring:
  cloud:
    gateway:
      routes:
        - id: usuarios-service
          uri: lb://USUARIOS-SERVICE
          predicates:
            - Path=/api/usuarios/**
        - id: productos-service
          uri: lb://PRODUCTOS-SERVICE
          predicates:
            - Path=/api/productos/**
```

---

<div align="center">

`{ APIs seguras · Código probado }`

</div>
