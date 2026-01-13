<div align="center">

![Spring](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=spring-boot&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-01-blue?style=flat-square)

# `Introducción Spring Boot`

</div>

---

### 💻 Estructura del Proyecto

```
src/main/java/
├── com.ejemplo.app/
│   ├── Application.java
│   ├── controller/
│   ├── service/
│   ├── repository/
│   └── model/
src/main/resources/
├── application.properties
└── static/
```

```java
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

```bash
mvn spring-boot:run
# http://localhost:8080
```

---

<div align="center">
<sub>Backend I · Experiencia 1</sub>
</div>
