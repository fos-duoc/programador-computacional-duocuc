<div align="center">

![Spring](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=spring-boot&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-08-blue?style=flat-square)

# `Testing`

</div>

---

### 💻 Código

```java
// Unit Test - Service
@ExtendWith(MockitoExtension.class)
class ProductoServiceTest {

    @Mock
    private ProductoRepository repository;

    @InjectMocks
    private ProductoService service;

    @Test
    void findAll_DebeRetornarLista() {
        when(repository.findAll()).thenReturn(List.of(new Producto()));

        List<ProductoDTO> result = service.findAll();

        assertThat(result).hasSize(1);
        verify(repository).findAll();
    }
}

// Integration Test - Controller
@SpringBootTest
@AutoConfigureMockMvc
class ProductoControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void listar_DebeRetornar200() throws Exception {
        mockMvc.perform(get("/api/productos"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$").isArray());
    }
}
```

---

<div align="center">
<sub>Backend I · Experiencia 3</sub>
</div>
