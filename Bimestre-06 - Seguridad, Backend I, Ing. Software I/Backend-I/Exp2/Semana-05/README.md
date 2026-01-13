<div align="center">

![Spring](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=spring-boot&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-05-blue?style=flat-square)

# `Validación y Excepciones`

</div>

---

### 💻 Código

```java
// DTO con validación
public record ProductoDTO(
    Long id,

    @NotBlank(message = "Nombre requerido")
    @Size(min = 2, max = 100)
    String nombre,

    @NotNull @Positive
    Double precio
) {}

// Controller con validación
@PostMapping
public ProductoDTO crear(@Valid @RequestBody ProductoDTO dto) {
    return service.save(dto);
}

// Exception Handler
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(EntityNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> handleNotFound(EntityNotFoundException e) {
        return Map.of("error", e.getMessage());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Map<String, String> handleValidation(MethodArgumentNotValidException e) {
        return e.getBindingResult().getFieldErrors().stream()
            .collect(Collectors.toMap(
                FieldError::getField,
                FieldError::getDefaultMessage));
    }
}
```

---

<div align="center">
<sub>Backend I · Experiencia 2</sub>
</div>
