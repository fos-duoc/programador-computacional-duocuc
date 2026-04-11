# Ingeniería en Desarrollo de Software
## Guía Completa de Conceptos, Arquitectura y Aplicaciones Avanzadas

**Institución:** DuocUC - Escuela de Informática y Telecomunicaciones
**Modalidad:** 100% Online (Continuidad de Analista Programador)
**Duración Total:** 17 Bimestres (34 meses)
**Título:** Ingeniero(a) en Desarrollo de Software
**Requisito Previo:** Título de Analista Programador Computacional

---

## Tabla de Contenidos

1. [Perfil de la Carrera](#1-perfil-de-la-carrera)
2. [Competencias Avanzadas](#2-competencias-avanzadas)
3. [Arquitectura de Software](#3-arquitectura-de-software)
4. [Patrones de Diseño](#4-patrones-de-diseño)
5. [Desarrollo Fullstack Avanzado](#5-desarrollo-fullstack-avanzado)
6. [Microservicios y Sistemas Distribuidos](#6-microservicios-y-sistemas-distribuidos)
7. [DevOps y CI/CD](#7-devops-y-cicd)
8. [Cloud Computing Avanzado](#8-cloud-computing-avanzado)
9. [Seguridad en Software](#9-seguridad-en-software)
10. [Ingeniería de Datos](#10-ingeniería-de-datos)
11. [Inteligencia Artificial y Machine Learning](#11-inteligencia-artificial-y-machine-learning)
12. [Gestión de Proyectos de Software](#12-gestión-de-proyectos-de-software)
13. [Calidad de Software y Testing Avanzado](#13-calidad-de-software-y-testing-avanzado)
14. [Arquitecturas Modernas](#14-arquitecturas-modernas)
15. [Ética y Profesionalismo](#15-ética-y-profesionalismo)
16. [Campo Laboral Avanzado](#16-campo-laboral-avanzado)
17. [Referencias y Fuentes Oficiales](#17-referencias-y-fuentes-oficiales)

---

## 1. Perfil de la Carrera

### Descripción General

El **Ingeniero(a) en Desarrollo de Software** es un profesional capaz de diseñar, desarrollar, implementar y desplegar soluciones informáticas que abordan problemas complejos dentro de su especialización. Evalúa y aplica estándares, frameworks, requisitos regulatorios, tecnologías y metodologías, fomentando la innovación y el trabajo colaborativo en proyectos interdisciplinarios.

### Diferencia con Analista Programador

| Aspecto | Analista Programador | Ingeniero en Software |
|---------|---------------------|----------------------|
| **Enfoque** | Desarrollo de aplicaciones | Arquitectura y sistemas complejos |
| **Alcance** | Componentes y módulos | Soluciones empresariales |
| **Liderazgo** | Técnico individual | Equipos y proyectos |
| **Decisiones** | Implementación | Diseño arquitectónico |
| **Complejidad** | Media | Alta |

### Trayectoria Formativa Completa

```
ANALISTA PROGRAMADOR COMPUTACIONAL (10 Bimestres)
├── Año 1 (B01-B04): Fundamentos
│   ├── Programación
│   ├── Bases de Datos
│   └── Desarrollo Web Básico
│
├── Año 2 (B05-B10): Especialización
│   ├── Fullstack Development
│   ├── Mobile Development
│   └── Cloud Computing
│
└── [TÍTULO INTERMEDIO] Analista Programador Computacional

INGENIERÍA EN DESARROLLO DE SOFTWARE (7 Bimestres adicionales)
├── Año 3 (B11-B14): Desarrollo Avanzado
│   ├── Arquitectura de Software
│   ├── DevOps & CI/CD
│   └── Seguridad
│
├── Año 4 (B15-B17): Ingeniería Avanzada
│   ├── Gestión de Proyectos
│   ├── IA y Machine Learning
│   └── Proyecto de Título
│
└── [TÍTULO FINAL] Ingeniero(a) en Desarrollo de Software
```

---

## 2. Competencias Avanzadas

### Competencias Técnicas Especializadas

| Competencia | Descripción |
|-------------|-------------|
| **Arquitectura de Software** | Diseñar arquitecturas escalables, mantenibles y seguras |
| **Liderazgo Técnico** | Guiar equipos de desarrollo en decisiones técnicas |
| **Ingeniería de Requisitos** | Elicitar, analizar y especificar requisitos de software |
| **DevOps** | Implementar pipelines CI/CD y automatización |
| **Cloud Native** | Desarrollar aplicaciones nativas para la nube |
| **Seguridad** | Aplicar principios de seguridad en todo el ciclo de vida |
| **Data Engineering** | Diseñar pipelines de datos y arquitecturas de datos |
| **AI/ML Integration** | Integrar modelos de IA en aplicaciones |

### Competencias de Gestión

- Evaluación y gestión de proyectos de software
- Estimación de esfuerzo y planificación
- Gestión de riesgos técnicos
- Comunicación con stakeholders
- Documentación técnica y arquitectónica

### Competencias Transversales Avanzadas

- Pensamiento sistémico
- Toma de decisiones bajo incertidumbre
- Innovación y emprendimiento
- Responsabilidad social y sostenibilidad
- Visión estratégica de negocio

---

## 3. Arquitectura de Software

### Fundamentos de Arquitectura

La **arquitectura de software** define la estructura fundamental de un sistema, incluyendo sus componentes, relaciones y principios de diseño.

#### Atributos de Calidad (Quality Attributes)

| Atributo | Descripción | Métricas |
|----------|-------------|----------|
| **Performance** | Tiempo de respuesta, throughput | Latencia < 100ms, 10K req/s |
| **Scalability** | Capacidad de crecer | Horizontal/Vertical |
| **Availability** | Tiempo operativo | 99.9% uptime (8.7h/año downtime) |
| **Security** | Protección de datos | OWASP compliance |
| **Maintainability** | Facilidad de modificación | Bajo acoplamiento |
| **Testability** | Facilidad de pruebas | Cobertura > 80% |

### Clean Architecture

Propuesta por Robert C. Martin (Uncle Bob), separa el software en capas concéntricas.

```
┌───────────────────────────────────────────────────────────┐
│                    FRAMEWORKS & DRIVERS                   │
│  ┌─────────────────────────────────────────────────────┐  │
│  │              INTERFACE ADAPTERS                     │  │
│  │  ┌───────────────────────────────────────────────┐  │  │
│  │  │           APPLICATION BUSINESS RULES          │  │  │
│  │  │  ┌─────────────────────────────────────────┐  │  │  │
│  │  │  │      ENTERPRISE BUSINESS RULES         │  │  │  │
│  │  │  │                                         │  │  │  │
│  │  │  │           ENTITIES                      │  │  │  │
│  │  │  │                                         │  │  │  │
│  │  │  └─────────────────────────────────────────┘  │  │  │
│  │  │               USE CASES                       │  │  │
│  │  └───────────────────────────────────────────────┘  │  │
│  │     Controllers, Gateways, Presenters               │  │
│  └─────────────────────────────────────────────────────┘  │
│         Web, DB, External Interfaces, Devices             │
└───────────────────────────────────────────────────────────┘
```

#### Regla de Dependencia

Las dependencias solo apuntan hacia adentro. Las capas internas no conocen las externas.

```java
// Entidad (Capa más interna)
public class Usuario {
    private Long id;
    private String email;
    private String nombreCompleto;

    public boolean esEmailValido() {
        return email != null && email.contains("@");
    }
}

// Caso de Uso (Application Business Rules)
public class RegistrarUsuarioUseCase {
    private final UsuarioRepository repository;
    private final EmailService emailService;

    public RegistrarUsuarioUseCase(
            UsuarioRepository repository,
            EmailService emailService) {
        this.repository = repository;
        this.emailService = emailService;
    }

    public Usuario ejecutar(RegistrarUsuarioRequest request) {
        Usuario usuario = new Usuario(request.getEmail(), request.getNombre());

        if (!usuario.esEmailValido()) {
            throw new EmailInvalidoException();
        }

        if (repository.existePorEmail(request.getEmail())) {
            throw new UsuarioYaExisteException();
        }

        Usuario guardado = repository.guardar(usuario);
        emailService.enviarBienvenida(guardado.getEmail());

        return guardado;
    }
}

// Interface Adapter (Controller)
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {
    private final RegistrarUsuarioUseCase registrarUsuario;

    @PostMapping
    public ResponseEntity<UsuarioDTO> registrar(@RequestBody RegistrarUsuarioRequest request) {
        Usuario usuario = registrarUsuario.ejecutar(request);
        return ResponseEntity.status(201).body(UsuarioDTO.from(usuario));
    }
}
```

### Hexagonal Architecture (Ports & Adapters)

Separa la lógica de negocio de los detalles de infraestructura.

```
                    ┌─────────────────────┐
                    │    REST API         │
                    │    (Adapter)        │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │    Input Port       │
                    │    (Interface)      │
                    └──────────┬──────────┘
                               │
┌───────────────────┐ ┌────────▼────────┐ ┌───────────────────┐
│  PostgreSQL       │ │                 │ │  Email Service    │
│  (Adapter)        │◄│   DOMAIN        │►│  (Adapter)        │
└───────────────────┘ │   (Core)        │ └───────────────────┘
                      │                 │
┌───────────────────┐ └────────▲────────┘ ┌───────────────────┐
│  Redis Cache      │          │          │  Message Queue    │
│  (Adapter)        │◄─────────┴─────────►│  (Adapter)        │
└───────────────────┘                      └───────────────────┘
                    ┌──────────┴──────────┐
                    │    Output Ports     │
                    │    (Interfaces)     │
                    └─────────────────────┘
```

```java
// Puerto de entrada (Input Port)
public interface RegistrarUsuarioPort {
    Usuario registrar(RegistrarUsuarioCommand command);
}

// Puerto de salida (Output Port)
public interface UsuarioRepositoryPort {
    Usuario guardar(Usuario usuario);
    Optional<Usuario> buscarPorEmail(String email);
}

// Dominio (Implementa el puerto de entrada)
@Service
public class UsuarioService implements RegistrarUsuarioPort {
    private final UsuarioRepositoryPort repository;

    @Override
    public Usuario registrar(RegistrarUsuarioCommand command) {
        // Lógica de dominio
        return repository.guardar(new Usuario(command.email(), command.nombre()));
    }
}

// Adaptador de infraestructura (Implementa puerto de salida)
@Repository
public class UsuarioJpaAdapter implements UsuarioRepositoryPort {
    private final UsuarioJpaRepository jpaRepository;

    @Override
    public Usuario guardar(Usuario usuario) {
        UsuarioEntity entity = UsuarioMapper.toEntity(usuario);
        UsuarioEntity saved = jpaRepository.save(entity);
        return UsuarioMapper.toDomain(saved);
    }
}
```

### Domain-Driven Design (DDD)

Enfoque de diseño centrado en el dominio del negocio.

#### Conceptos Clave

| Concepto | Descripción |
|----------|-------------|
| **Ubiquitous Language** | Lenguaje común entre desarrolladores y expertos de dominio |
| **Bounded Context** | Límite donde un modelo de dominio es válido |
| **Entity** | Objeto con identidad única que persiste en el tiempo |
| **Value Object** | Objeto inmutable sin identidad, definido por sus atributos |
| **Aggregate** | Cluster de entidades tratadas como una unidad |
| **Aggregate Root** | Entidad principal que controla el acceso al aggregate |
| **Domain Event** | Evento significativo que ocurre en el dominio |
| **Repository** | Abstracción para acceso a datos del aggregate |

```java
// Value Object
public record Dinero(BigDecimal monto, String moneda) {
    public Dinero {
        if (monto.compareTo(BigDecimal.ZERO) < 0) {
            throw new MontoNegativoException();
        }
    }

    public Dinero sumar(Dinero otro) {
        if (!this.moneda.equals(otro.moneda)) {
            throw new MonedasDiferentesException();
        }
        return new Dinero(this.monto.add(otro.monto), this.moneda);
    }
}

// Entity
public class LineaPedido {
    private final ProductoId productoId;
    private int cantidad;
    private Dinero precioUnitario;

    public Dinero calcularSubtotal() {
        return new Dinero(
            precioUnitario.monto().multiply(BigDecimal.valueOf(cantidad)),
            precioUnitario.moneda()
        );
    }
}

// Aggregate Root
public class Pedido {
    private final PedidoId id;
    private final ClienteId clienteId;
    private List<LineaPedido> lineas = new ArrayList<>();
    private EstadoPedido estado;
    private List<DomainEvent> eventos = new ArrayList<>();

    public void agregarLinea(ProductoId productoId, int cantidad, Dinero precio) {
        if (estado != EstadoPedido.BORRADOR) {
            throw new PedidoNoModificableException();
        }
        lineas.add(new LineaPedido(productoId, cantidad, precio));
    }

    public void confirmar() {
        if (lineas.isEmpty()) {
            throw new PedidoVacioException();
        }
        this.estado = EstadoPedido.CONFIRMADO;
        eventos.add(new PedidoConfirmadoEvent(this.id, LocalDateTime.now()));
    }

    public Dinero calcularTotal() {
        return lineas.stream()
            .map(LineaPedido::calcularSubtotal)
            .reduce(Dinero.ZERO, Dinero::sumar);
    }
}

// Domain Event
public record PedidoConfirmadoEvent(PedidoId pedidoId, LocalDateTime fecha)
    implements DomainEvent {}
```

---

## 4. Patrones de Diseño

### Patrones Creacionales

#### Singleton
Garantiza una única instancia de una clase.

```java
public class ConfiguracionApp {
    private static volatile ConfiguracionApp instancia;
    private Properties propiedades;

    private ConfiguracionApp() {
        propiedades = cargarPropiedades();
    }

    public static ConfiguracionApp getInstancia() {
        if (instancia == null) {
            synchronized (ConfiguracionApp.class) {
                if (instancia == null) {
                    instancia = new ConfiguracionApp();
                }
            }
        }
        return instancia;
    }
}
```

#### Factory Method
Define una interfaz para crear objetos, permitiendo a las subclases decidir qué clase instanciar.

```java
// Producto
public interface Notificacion {
    void enviar(String mensaje);
}

public class NotificacionEmail implements Notificacion {
    public void enviar(String mensaje) {
        System.out.println("Enviando email: " + mensaje);
    }
}

public class NotificacionSMS implements Notificacion {
    public void enviar(String mensaje) {
        System.out.println("Enviando SMS: " + mensaje);
    }
}

// Factory
public abstract class NotificacionFactory {
    public abstract Notificacion crearNotificacion();

    public void notificar(String mensaje) {
        Notificacion notificacion = crearNotificacion();
        notificacion.enviar(mensaje);
    }
}

public class EmailFactory extends NotificacionFactory {
    @Override
    public Notificacion crearNotificacion() {
        return new NotificacionEmail();
    }
}
```

#### Builder
Construye objetos complejos paso a paso.

```java
public class Usuario {
    private final String nombre;
    private final String email;
    private final String telefono;
    private final String direccion;
    private final LocalDate fechaNacimiento;

    private Usuario(Builder builder) {
        this.nombre = builder.nombre;
        this.email = builder.email;
        this.telefono = builder.telefono;
        this.direccion = builder.direccion;
        this.fechaNacimiento = builder.fechaNacimiento;
    }

    public static class Builder {
        private final String nombre; // Requerido
        private final String email;  // Requerido
        private String telefono;
        private String direccion;
        private LocalDate fechaNacimiento;

        public Builder(String nombre, String email) {
            this.nombre = nombre;
            this.email = email;
        }

        public Builder telefono(String telefono) {
            this.telefono = telefono;
            return this;
        }

        public Builder direccion(String direccion) {
            this.direccion = direccion;
            return this;
        }

        public Builder fechaNacimiento(LocalDate fecha) {
            this.fechaNacimiento = fecha;
            return this;
        }

        public Usuario build() {
            return new Usuario(this);
        }
    }
}

// Uso
Usuario usuario = new Usuario.Builder("Juan", "juan@email.com")
    .telefono("+56912345678")
    .direccion("Av. Principal 123")
    .build();
```

### Patrones Estructurales

#### Adapter
Permite que interfaces incompatibles trabajen juntas.

```java
// Interfaz existente en nuestro sistema
public interface ProcesadorPago {
    void procesar(double monto, String moneda);
}

// Librería externa con interfaz diferente
public class StripePaymentGateway {
    public void makePayment(PaymentDetails details) {
        // Lógica de Stripe
    }
}

// Adapter
public class StripeAdapter implements ProcesadorPago {
    private final StripePaymentGateway stripe;

    public StripeAdapter(StripePaymentGateway stripe) {
        this.stripe = stripe;
    }

    @Override
    public void procesar(double monto, String moneda) {
        PaymentDetails details = new PaymentDetails(monto, moneda);
        stripe.makePayment(details);
    }
}
```

#### Decorator
Agrega funcionalidad a objetos dinámicamente.

```java
public interface DataSource {
    void writeData(String data);
    String readData();
}

public class FileDataSource implements DataSource {
    private String filename;

    @Override
    public void writeData(String data) {
        // Escribir a archivo
    }

    @Override
    public String readData() {
        // Leer de archivo
        return "";
    }
}

// Decorator base
public abstract class DataSourceDecorator implements DataSource {
    protected DataSource wrappee;

    public DataSourceDecorator(DataSource source) {
        this.wrappee = source;
    }
}

// Decorator concreto
public class EncryptionDecorator extends DataSourceDecorator {
    public EncryptionDecorator(DataSource source) {
        super(source);
    }

    @Override
    public void writeData(String data) {
        String encrypted = encrypt(data);
        wrappee.writeData(encrypted);
    }

    @Override
    public String readData() {
        return decrypt(wrappee.readData());
    }

    private String encrypt(String data) { /* ... */ return data; }
    private String decrypt(String data) { /* ... */ return data; }
}

// Uso: composición de decoradores
DataSource source = new EncryptionDecorator(
    new CompressionDecorator(
        new FileDataSource("file.txt")
    )
);
```

### Patrones de Comportamiento

#### Strategy
Define una familia de algoritmos intercambiables.

```java
// Estrategia
public interface EstrategiaDescuento {
    double calcular(double precio);
}

public class DescuentoPorcentaje implements EstrategiaDescuento {
    private double porcentaje;

    public DescuentoPorcentaje(double porcentaje) {
        this.porcentaje = porcentaje;
    }

    @Override
    public double calcular(double precio) {
        return precio * (1 - porcentaje / 100);
    }
}

public class DescuentoFijo implements EstrategiaDescuento {
    private double monto;

    @Override
    public double calcular(double precio) {
        return Math.max(0, precio - monto);
    }
}

// Contexto
public class CarritoCompras {
    private EstrategiaDescuento estrategia;

    public void setEstrategiaDescuento(EstrategiaDescuento estrategia) {
        this.estrategia = estrategia;
    }

    public double calcularTotal(List<Producto> productos) {
        double subtotal = productos.stream()
            .mapToDouble(Producto::getPrecio)
            .sum();

        return estrategia != null
            ? estrategia.calcular(subtotal)
            : subtotal;
    }
}
```

#### Observer
Define una dependencia uno-a-muchos entre objetos.

```java
public interface Observer {
    void update(String evento, Object datos);
}

public interface Subject {
    void attach(Observer observer);
    void detach(Observer observer);
    void notify(String evento, Object datos);
}

public class SistemaPedidos implements Subject {
    private List<Observer> observers = new ArrayList<>();

    @Override
    public void attach(Observer observer) {
        observers.add(observer);
    }

    @Override
    public void notify(String evento, Object datos) {
        for (Observer observer : observers) {
            observer.update(evento, datos);
        }
    }

    public void crearPedido(Pedido pedido) {
        // Lógica de creación
        notify("PEDIDO_CREADO", pedido);
    }
}

public class NotificadorEmail implements Observer {
    @Override
    public void update(String evento, Object datos) {
        if ("PEDIDO_CREADO".equals(evento)) {
            Pedido pedido = (Pedido) datos;
            // Enviar email de confirmación
        }
    }
}

public class ActualizadorInventario implements Observer {
    @Override
    public void update(String evento, Object datos) {
        if ("PEDIDO_CREADO".equals(evento)) {
            Pedido pedido = (Pedido) datos;
            // Actualizar inventario
        }
    }
}
```

---

## 5. Desarrollo Fullstack Avanzado

### Arquitectura de Aplicaciones Modernas

```
┌─────────────────────────────────────────────────────────────────┐
│                         CDN (CloudFlare)                        │
│                    Caché de assets estáticos                    │
└───────────────────────────────┬─────────────────────────────────┘
                                │
┌───────────────────────────────▼─────────────────────────────────┐
│                    LOAD BALANCER (AWS ALB)                      │
│                    Distribución de tráfico                      │
└───────────────────────────────┬─────────────────────────────────┘
                                │
         ┌──────────────────────┼──────────────────────┐
         │                      │                      │
┌────────▼────────┐   ┌────────▼────────┐   ┌────────▼────────┐
│   Frontend 1    │   │   Frontend 2    │   │   Frontend 3    │
│  (Next.js SSR)  │   │  (Next.js SSR)  │   │  (Next.js SSR)  │
└────────┬────────┘   └────────┬────────┘   └────────┬────────┘
         │                     │                      │
         └─────────────────────┼──────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────────┐
│                       API GATEWAY                                │
│                 Rate limiting, Auth, Routing                     │
└──────────────────────────────┬──────────────────────────────────┘
                               │
      ┌────────────────────────┼────────────────────────┐
      │                        │                        │
┌─────▼─────┐           ┌─────▼─────┐           ┌─────▼─────┐
│  User     │           │  Order    │           │  Product  │
│  Service  │           │  Service  │           │  Service  │
└─────┬─────┘           └─────┬─────┘           └─────┬─────┘
      │                       │                       │
┌─────▼─────┐           ┌─────▼─────┐           ┌─────▼─────┐
│PostgreSQL │           │ MongoDB   │           │PostgreSQL │
└───────────┘           └───────────┘           └───────────┘
```

### TypeScript Avanzado

```typescript
// Tipos avanzados
type Optional<T> = T | null | undefined;

interface Usuario {
  id: string;
  nombre: string;
  email: string;
  rol: 'admin' | 'usuario' | 'invitado';
  metadata?: Record<string, unknown>;
}

// Utility types
type UsuarioCreacion = Omit<Usuario, 'id'>;
type UsuarioActualizacion = Partial<Omit<Usuario, 'id'>>;
type UsuarioPublico = Pick<Usuario, 'id' | 'nombre'>;

// Generics
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

async function fetchApi<T>(url: string): Promise<ApiResponse<T>> {
  const response = await fetch(url);
  const data = await response.json();
  return {
    data: data as T,
    status: response.status,
    message: response.statusText
  };
}

// Discriminated unions
type ResultadoOperacion<T> =
  | { success: true; data: T }
  | { success: false; error: string };

function manejarResultado<T>(resultado: ResultadoOperacion<T>): T | null {
  if (resultado.success) {
    return resultado.data;
  } else {
    console.error(resultado.error);
    return null;
  }
}
```

### Next.js 14+ (App Router)

```typescript
// app/usuarios/page.tsx (Server Component)
import { Suspense } from 'react';
import { ListaUsuarios } from './ListaUsuarios';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';

export default function UsuariosPage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Usuarios</h1>
      <Suspense fallback={<LoadingSkeleton />}>
        <ListaUsuarios />
      </Suspense>
    </main>
  );
}

// app/usuarios/ListaUsuarios.tsx (Server Component con data fetching)
import { getUsuarios } from '@/lib/api';

export async function ListaUsuarios() {
  const usuarios = await getUsuarios();

  return (
    <ul className="space-y-2">
      {usuarios.map((usuario) => (
        <li key={usuario.id} className="p-4 border rounded">
          {usuario.nombre} - {usuario.email}
        </li>
      ))}
    </ul>
  );
}

// app/usuarios/[id]/page.tsx (Dynamic Route)
import { notFound } from 'next/navigation';
import { getUsuario } from '@/lib/api';

interface Props {
  params: { id: string };
}

export default async function UsuarioPage({ params }: Props) {
  const usuario = await getUsuario(params.id);

  if (!usuario) {
    notFound();
  }

  return (
    <div className="p-4">
      <h1>{usuario.nombre}</h1>
      <p>{usuario.email}</p>
    </div>
  );
}

// app/api/usuarios/route.ts (API Route)
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');

  const usuarios = await prisma.usuario.findMany({
    skip: (page - 1) * limit,
    take: limit,
  });

  return NextResponse.json(usuarios);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const usuario = await prisma.usuario.create({
    data: body,
  });

  return NextResponse.json(usuario, { status: 201 });
}
```

---

## 6. Microservicios y Sistemas Distribuidos

### Arquitectura de Microservicios

```
┌──────────────────────────────────────────────────────────────┐
│                     API GATEWAY                               │
│            (Kong / AWS API Gateway / NGINX)                   │
│    ┌─────────────────────────────────────────────────────┐   │
│    │  • Autenticación/Autorización                       │   │
│    │  • Rate Limiting                                    │   │
│    │  • Request/Response Transformation                  │   │
│    │  • Circuit Breaker                                  │   │
│    └─────────────────────────────────────────────────────┘   │
└──────────────────────────────┬───────────────────────────────┘
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
┌───────▼───────┐     ┌───────▼───────┐     ┌───────▼───────┐
│    Users      │     │    Orders     │     │   Products    │
│   Service     │     │   Service     │     │   Service     │
│  ┌─────────┐  │     │  ┌─────────┐  │     │  ┌─────────┐  │
│  │ Node.js │  │     │  │  Java   │  │     │  │ Python  │  │
│  │+Express │  │     │  │ Spring  │  │     │  │ FastAPI │  │
│  └────┬────┘  │     │  └────┬────┘  │     │  └────┬────┘  │
│       │       │     │       │       │     │       │       │
│  ┌────▼────┐  │     │  ┌────▼────┐  │     │  ┌────▼────┐  │
│  │Postgres │  │     │  │MongoDB  │  │     │  │Postgres │  │
│  └─────────┘  │     │  └─────────┘  │     │  └─────────┘  │
└───────┬───────┘     └───────┬───────┘     └───────┬───────┘
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              │
               ┌──────────────▼──────────────┐
               │      MESSAGE BROKER         │
               │    (RabbitMQ / Kafka)       │
               │  ┌────────────────────────┐ │
               │  │ Events:                │ │
               │  │ • user.created         │ │
               │  │ • order.placed         │ │
               │  │ • product.updated      │ │
               │  └────────────────────────┘ │
               └─────────────────────────────┘
```

### Comunicación entre Servicios

#### Comunicación Síncrona (REST/gRPC)

```java
// Servicio de Órdenes llama a Servicio de Usuarios
@Service
public class OrdenService {
    private final WebClient usuarioClient;

    public OrdenService(WebClient.Builder builder) {
        this.usuarioClient = builder
            .baseUrl("http://user-service:8080")
            .build();
    }

    public Mono<Usuario> obtenerUsuario(String usuarioId) {
        return usuarioClient.get()
            .uri("/api/usuarios/{id}", usuarioId)
            .retrieve()
            .bodyToMono(Usuario.class)
            .timeout(Duration.ofSeconds(5))
            .onErrorResume(e -> {
                log.error("Error obteniendo usuario: {}", e.getMessage());
                return Mono.empty();
            });
    }
}
```

#### Comunicación Asíncrona (Eventos)

```java
// Productor de eventos
@Service
public class OrdenService {
    private final KafkaTemplate<String, OrdenCreadaEvent> kafkaTemplate;

    public void crearOrden(Orden orden) {
        // Guardar orden
        ordenRepository.save(orden);

        // Publicar evento
        OrdenCreadaEvent evento = new OrdenCreadaEvent(
            orden.getId(),
            orden.getUsuarioId(),
            orden.getTotal(),
            LocalDateTime.now()
        );
        kafkaTemplate.send("ordenes.creadas", orden.getId(), evento);
    }
}

// Consumidor de eventos
@Service
public class NotificacionService {
    @KafkaListener(topics = "ordenes.creadas", groupId = "notificaciones")
    public void manejarOrdenCreada(OrdenCreadaEvent evento) {
        // Enviar notificación al usuario
        emailService.enviarConfirmacionOrden(evento.getUsuarioId(), evento.getOrdenId());
    }
}
```

### Patrones de Resiliencia

#### Circuit Breaker

```java
@Service
public class ProductoServiceClient {

    @CircuitBreaker(name = "productoService", fallbackMethod = "fallbackObtenerProducto")
    @Retry(name = "productoService")
    @TimeLimiter(name = "productoService")
    public CompletableFuture<Producto> obtenerProducto(String id) {
        return CompletableFuture.supplyAsync(() ->
            webClient.get()
                .uri("/api/productos/{id}", id)
                .retrieve()
                .bodyToMono(Producto.class)
                .block()
        );
    }

    public CompletableFuture<Producto> fallbackObtenerProducto(String id, Exception e) {
        log.warn("Fallback para producto {}: {}", id, e.getMessage());
        return CompletableFuture.completedFuture(
            new Producto(id, "Producto no disponible", BigDecimal.ZERO)
        );
    }
}

// Configuración en application.yml
resilience4j:
  circuitbreaker:
    instances:
      productoService:
        registerHealthIndicator: true
        slidingWindowSize: 10
        minimumNumberOfCalls: 5
        permittedNumberOfCallsInHalfOpenState: 3
        automaticTransitionFromOpenToHalfOpenEnabled: true
        waitDurationInOpenState: 5s
        failureRateThreshold: 50
```

---

## 7. DevOps y CI/CD

### Pipeline CI/CD Completo

```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  # 1. Análisis de código
  lint-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linting
        run: npm run lint

      - name: Run tests
        run: npm run test:coverage

      - name: Upload coverage
        uses: codecov/codecov-action@v3

  # 2. Análisis de seguridad
  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Run Snyk security scan
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}

      - name: Run SAST with CodeQL
        uses: github/codeql-action/analyze@v2

  # 3. Build y push de imagen Docker
  build-and-push:
    needs: [lint-and-test, security-scan]
    runs-on: ubuntu-latest
    if: github.event_name == 'push'
    steps:
      - uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Log in to Container Registry
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Build and push Docker image
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: |
            ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}
            ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:latest
          cache-from: type=gha
          cache-to: type=gha,mode=max

  # 4. Deploy a staging
  deploy-staging:
    needs: build-and-push
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/develop'
    environment: staging
    steps:
      - name: Deploy to Kubernetes (Staging)
        uses: azure/k8s-deploy@v4
        with:
          namespace: staging
          manifests: k8s/staging/
          images: |
            ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}

  # 5. Deploy a producción
  deploy-production:
    needs: build-and-push
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    environment: production
    steps:
      - name: Deploy to Kubernetes (Production)
        uses: azure/k8s-deploy@v4
        with:
          namespace: production
          manifests: k8s/production/
          images: |
            ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}
          strategy: canary
          percentage: 20
```

### Kubernetes Manifests

```yaml
# k8s/production/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-service
  namespace: production
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api-service
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    metadata:
      labels:
        app: api-service
    spec:
      containers:
        - name: api
          image: ghcr.io/mi-org/mi-app:latest
          ports:
            - containerPort: 3000
          env:
            - name: DATABASE_URL
              valueFrom:
                secretKeyRef:
                  name: db-credentials
                  key: url
            - name: NODE_ENV
              value: "production"
          resources:
            requests:
              memory: "256Mi"
              cpu: "250m"
            limits:
              memory: "512Mi"
              cpu: "500m"
          livenessProbe:
            httpGet:
              path: /health
              port: 3000
            initialDelaySeconds: 30
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /ready
              port: 3000
            initialDelaySeconds: 5
            periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: api-service
  namespace: production
spec:
  selector:
    app: api-service
  ports:
    - port: 80
      targetPort: 3000
  type: ClusterIP
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: api-service-hpa
  namespace: production
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api-service
  minReplicas: 3
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
```

### Infrastructure as Code (Terraform)

```hcl
# main.tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket = "mi-terraform-state"
    key    = "prod/terraform.tfstate"
    region = "us-east-1"
  }
}

provider "aws" {
  region = var.aws_region
}

# VPC
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.0.0"

  name = "mi-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["us-east-1a", "us-east-1b", "us-east-1c"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]

  enable_nat_gateway = true
  single_nat_gateway = true

  tags = {
    Environment = var.environment
    Project     = "mi-proyecto"
  }
}

# EKS Cluster
module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "19.0.0"

  cluster_name    = "mi-cluster"
  cluster_version = "1.28"

  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets

  eks_managed_node_groups = {
    general = {
      desired_size = 3
      min_size     = 2
      max_size     = 5

      instance_types = ["t3.medium"]
      capacity_type  = "ON_DEMAND"
    }
  }
}

# RDS PostgreSQL
resource "aws_db_instance" "postgres" {
  identifier           = "mi-db"
  engine               = "postgres"
  engine_version       = "15.4"
  instance_class       = "db.t3.medium"
  allocated_storage    = 20
  storage_encrypted    = true

  db_name  = "miapp"
  username = var.db_username
  password = var.db_password

  vpc_security_group_ids = [aws_security_group.db.id]
  db_subnet_group_name   = aws_db_subnet_group.main.name

  backup_retention_period = 7
  multi_az               = true
  skip_final_snapshot    = false

  tags = {
    Environment = var.environment
  }
}
```

---

## 8. Cloud Computing Avanzado

### Arquitectura Serverless

```
┌─────────────────────────────────────────────────────────────────┐
│                        AWS CLOUD                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────┐                                           │
│  │   API Gateway    │◄─────────── HTTPS Requests                │
│  └────────┬─────────┘                                           │
│           │                                                      │
│  ┌────────▼─────────┐     ┌──────────────┐                      │
│  │  Lambda: Auth    │────►│   Cognito    │                      │
│  └────────┬─────────┘     └──────────────┘                      │
│           │                                                      │
│  ┌────────▼─────────┐     ┌──────────────┐                      │
│  │  Lambda: API     │────►│   DynamoDB   │                      │
│  └────────┬─────────┘     └──────────────┘                      │
│           │                                                      │
│           │               ┌──────────────┐                      │
│           └──────────────►│      S3      │                      │
│                           └──────┬───────┘                      │
│                                  │                               │
│                           ┌──────▼───────┐                      │
│                           │  CloudFront  │──────► Users         │
│                           └──────────────┘                      │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    EVENT-DRIVEN                          │   │
│  │  ┌──────────┐    ┌──────────┐    ┌──────────────────┐  │   │
│  │  │   SQS    │───►│  Lambda  │───►│    SNS/SES       │  │   │
│  │  │  Queue   │    │ Process  │    │  Notifications   │  │   │
│  │  └──────────┘    └──────────┘    └──────────────────┘  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### AWS Lambda con TypeScript

```typescript
// handler.ts
import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

interface Usuario {
  id: string;
  nombre: string;
  email: string;
}

export const obtenerUsuario: APIGatewayProxyHandler = async (event) => {
  try {
    const id = event.pathParameters?.id;

    if (!id) {
      return respuesta(400, { error: 'ID requerido' });
    }

    const result = await docClient.send(new GetCommand({
      TableName: process.env.USERS_TABLE!,
      Key: { id }
    }));

    if (!result.Item) {
      return respuesta(404, { error: 'Usuario no encontrado' });
    }

    return respuesta(200, result.Item);
  } catch (error) {
    console.error('Error:', error);
    return respuesta(500, { error: 'Error interno' });
  }
};

export const crearUsuario: APIGatewayProxyHandler = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}') as Omit<Usuario, 'id'>;

    if (!body.nombre || !body.email) {
      return respuesta(400, { error: 'Nombre y email requeridos' });
    }

    const usuario: Usuario = {
      id: crypto.randomUUID(),
      nombre: body.nombre,
      email: body.email
    };

    await docClient.send(new PutCommand({
      TableName: process.env.USERS_TABLE!,
      Item: usuario
    }));

    return respuesta(201, usuario);
  } catch (error) {
    console.error('Error:', error);
    return respuesta(500, { error: 'Error interno' });
  }
};

function respuesta(statusCode: number, body: object): APIGatewayProxyResult {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(body)
  };
}
```

### Serverless Framework

```yaml
# serverless.yml
service: mi-api-serverless

provider:
  name: aws
  runtime: nodejs20.x
  region: us-east-1
  stage: ${opt:stage, 'dev'}
  environment:
    USERS_TABLE: ${self:service}-users-${self:provider.stage}
  iam:
    role:
      statements:
        - Effect: Allow
          Action:
            - dynamodb:GetItem
            - dynamodb:PutItem
            - dynamodb:UpdateItem
            - dynamodb:DeleteItem
            - dynamodb:Query
            - dynamodb:Scan
          Resource:
            - !GetAtt UsersTable.Arn

functions:
  obtenerUsuario:
    handler: src/handlers/usuarios.obtenerUsuario
    events:
      - http:
          path: usuarios/{id}
          method: get
          cors: true

  crearUsuario:
    handler: src/handlers/usuarios.crearUsuario
    events:
      - http:
          path: usuarios
          method: post
          cors: true

resources:
  Resources:
    UsersTable:
      Type: AWS::DynamoDB::Table
      Properties:
        TableName: ${self:provider.environment.USERS_TABLE}
        BillingMode: PAY_PER_REQUEST
        AttributeDefinitions:
          - AttributeName: id
            AttributeType: S
        KeySchema:
          - AttributeName: id
            KeyType: HASH

plugins:
  - serverless-esbuild
  - serverless-offline
```

---

## 9. Seguridad en Software

### OWASP Top 10 (2021)

| # | Vulnerabilidad | Mitigación |
|---|----------------|------------|
| 1 | Broken Access Control | RBAC, validación en servidor |
| 2 | Cryptographic Failures | TLS, cifrado en reposo |
| 3 | Injection | Prepared statements, ORM |
| 4 | Insecure Design | Threat modeling, revisión |
| 5 | Security Misconfiguration | Hardening, auditorías |
| 6 | Vulnerable Components | Actualizar dependencias |
| 7 | Auth Failures | MFA, políticas de contraseñas |
| 8 | Software & Data Integrity | Firmas, CI/CD seguro |
| 9 | Security Logging Failures | Logging centralizado |
| 10 | SSRF | Validar URLs, allowlists |

### Implementación de Seguridad

#### Autenticación con JWT

```typescript
// auth.service.ts
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

interface JWTPayload {
  userId: string;
  email: string;
  rol: string;
}

export class AuthService {
  private readonly JWT_SECRET = process.env.JWT_SECRET!;
  private readonly JWT_EXPIRATION = '15m';
  private readonly REFRESH_EXPIRATION = '7d';

  async login(email: string, password: string): Promise<TokenPair> {
    const usuario = await this.usuarioRepository.findByEmail(email);

    if (!usuario) {
      throw new UnauthorizedError('Credenciales inválidas');
    }

    const passwordValido = await bcrypt.compare(password, usuario.passwordHash);

    if (!passwordValido) {
      throw new UnauthorizedError('Credenciales inválidas');
    }

    return this.generarTokens(usuario);
  }

  private generarTokens(usuario: Usuario): TokenPair {
    const payload: JWTPayload = {
      userId: usuario.id,
      email: usuario.email,
      rol: usuario.rol
    };

    const accessToken = jwt.sign(payload, this.JWT_SECRET, {
      expiresIn: this.JWT_EXPIRATION
    });

    const refreshToken = jwt.sign(
      { userId: usuario.id },
      this.JWT_SECRET,
      { expiresIn: this.REFRESH_EXPIRATION }
    );

    return { accessToken, refreshToken };
  }

  verificarToken(token: string): JWTPayload {
    try {
      return jwt.verify(token, this.JWT_SECRET) as JWTPayload;
    } catch (error) {
      throw new UnauthorizedError('Token inválido');
    }
  }
}

// auth.middleware.ts
export function authMiddleware(requiredRol?: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Token requerido' });
    }

    const token = authHeader.substring(7);

    try {
      const payload = authService.verificarToken(token);

      if (requiredRol && payload.rol !== requiredRol) {
        return res.status(403).json({ error: 'Acceso denegado' });
      }

      req.user = payload;
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Token inválido' });
    }
  };
}
```

#### Prevención de SQL Injection

```java
// MAL: Vulnerable a SQL Injection
public Usuario buscarPorEmail(String email) {
    String query = "SELECT * FROM usuarios WHERE email = '" + email + "'";
    // ¡PELIGROSO!
}

// BIEN: Usando Prepared Statements
public Usuario buscarPorEmail(String email) {
    String query = "SELECT * FROM usuarios WHERE email = ?";
    PreparedStatement stmt = connection.prepareStatement(query);
    stmt.setString(1, email);
    ResultSet rs = stmt.executeQuery();
    // Seguro
}

// MEJOR: Usando JPA/Hibernate
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByEmail(String email);
}
```

#### Validación de Entrada

```typescript
// validation.ts
import { z } from 'zod';

const usuarioSchema = z.object({
  nombre: z.string()
    .min(2, 'Nombre muy corto')
    .max(100, 'Nombre muy largo')
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'Nombre contiene caracteres inválidos'),

  email: z.string()
    .email('Email inválido')
    .toLowerCase(),

  password: z.string()
    .min(8, 'Mínimo 8 caracteres')
    .regex(/[A-Z]/, 'Debe contener mayúscula')
    .regex(/[a-z]/, 'Debe contener minúscula')
    .regex(/[0-9]/, 'Debe contener número')
    .regex(/[^A-Za-z0-9]/, 'Debe contener carácter especial'),

  fechaNacimiento: z.string()
    .datetime()
    .refine(fecha => {
      const edad = calcularEdad(new Date(fecha));
      return edad >= 18;
    }, 'Debe ser mayor de 18 años')
});

// Uso
export async function crearUsuario(req: Request, res: Response) {
  const resultado = usuarioSchema.safeParse(req.body);

  if (!resultado.success) {
    return res.status(400).json({
      error: 'Validación fallida',
      detalles: resultado.error.errors
    });
  }

  // resultado.data está validado y tipado
  const usuario = await usuarioService.crear(resultado.data);
  return res.status(201).json(usuario);
}
```

---

## 10. Ingeniería de Datos

### Arquitectura de Data Pipeline

```
┌─────────────────────────────────────────────────────────────────┐
│                     DATA SOURCES                                 │
├─────────────┬─────────────┬─────────────┬─────────────┬────────┤
│  Databases  │    APIs     │    Files    │   Streams   │  IoT   │
│  (OLTP)     │   (REST)    │  (CSV/JSON) │  (Kafka)    │Devices │
└──────┬──────┴──────┬──────┴──────┬──────┴──────┬──────┴────────┘
       │             │             │             │
       └─────────────┴─────────────┴─────────────┘
                            │
              ┌─────────────▼─────────────┐
              │       INGESTION LAYER     │
              │   (Kafka / Fivetran)      │
              └─────────────┬─────────────┘
                            │
    ┌───────────────────────▼───────────────────────┐
    │               DATA LAKE (S3)                   │
    ├───────────────────────────────────────────────┤
    │  ┌─────────┐   ┌─────────┐   ┌─────────────┐  │
    │  │ Bronze  │──►│ Silver  │──►│    Gold     │  │
    │  │  (Raw)  │   │(Cleaned)│   │(Aggregated) │  │
    │  └─────────┘   └─────────┘   └─────────────┘  │
    └───────────────────────┬───────────────────────┘
                            │
              ┌─────────────▼─────────────┐
              │    TRANSFORMATION (dbt)    │
              │   Modelos, Tests, Docs     │
              └─────────────┬─────────────┘
                            │
              ┌─────────────▼─────────────┐
              │    DATA WAREHOUSE         │
              │  (Snowflake / BigQuery)   │
              └─────────────┬─────────────┘
                            │
       ┌────────────────────┼────────────────────┐
       │                    │                    │
┌──────▼──────┐      ┌──────▼──────┐      ┌─────▼─────┐
│  BI Tools   │      │  ML Models  │      │   APIs    │
│(Power BI)   │      │ (Training)  │      │ (Serving) │
└─────────────┘      └─────────────┘      └───────────┘
```

### dbt (Data Build Tool)

```sql
-- models/staging/stg_orders.sql
{{ config(materialized='view') }}

with source as (
    select * from {{ source('raw', 'orders') }}
),

cleaned as (
    select
        order_id,
        customer_id,
        order_date,
        cast(total_amount as decimal(10,2)) as total_amount,
        status,
        created_at,
        updated_at
    from source
    where order_id is not null
)

select * from cleaned

-- models/marts/fact_orders.sql
{{ config(
    materialized='incremental',
    unique_key='order_id'
) }}

with orders as (
    select * from {{ ref('stg_orders') }}
),

customers as (
    select * from {{ ref('dim_customers') }}
),

final as (
    select
        o.order_id,
        o.customer_id,
        c.customer_name,
        c.segment,
        o.order_date,
        o.total_amount,
        o.status,
        {{ dbt_utils.generate_surrogate_key(['o.order_id']) }} as order_key
    from orders o
    left join customers c on o.customer_id = c.customer_id
    {% if is_incremental() %}
    where o.updated_at > (select max(updated_at) from {{ this }})
    {% endif %}
)

select * from final
```

---

## 11. Inteligencia Artificial y Machine Learning

### Integración de ML en Aplicaciones

```python
# model_service.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI()

# Cargar modelo entrenado
modelo = joblib.load('models/predictor_churn.joblib')
scaler = joblib.load('models/scaler.joblib')

class ClienteInput(BaseModel):
    antiguedad_meses: int
    monto_mensual: float
    num_productos: int
    tiene_tarjeta_credito: bool
    es_miembro_activo: bool

class PrediccionOutput(BaseModel):
    probabilidad_churn: float
    riesgo: str
    recomendaciones: list[str]

@app.post("/predecir-churn", response_model=PrediccionOutput)
async def predecir_churn(cliente: ClienteInput):
    try:
        # Preparar features
        features = np.array([[
            cliente.antiguedad_meses,
            cliente.monto_mensual,
            cliente.num_productos,
            int(cliente.tiene_tarjeta_credito),
            int(cliente.es_miembro_activo)
        ]])

        # Normalizar
        features_scaled = scaler.transform(features)

        # Predecir
        probabilidad = modelo.predict_proba(features_scaled)[0][1]

        # Determinar riesgo y recomendaciones
        if probabilidad > 0.7:
            riesgo = "ALTO"
            recomendaciones = [
                "Contactar inmediatamente",
                "Ofrecer descuento de retención",
                "Asignar ejecutivo dedicado"
            ]
        elif probabilidad > 0.4:
            riesgo = "MEDIO"
            recomendaciones = [
                "Enviar encuesta de satisfacción",
                "Ofrecer beneficios adicionales"
            ]
        else:
            riesgo = "BAJO"
            recomendaciones = [
                "Mantener comunicación regular"
            ]

        return PrediccionOutput(
            probabilidad_churn=round(probabilidad, 4),
            riesgo=riesgo,
            recomendaciones=recomendaciones
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
```

### LangChain para Aplicaciones con LLMs

```python
# rag_service.py
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Pinecone
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate

class RAGService:
    def __init__(self):
        self.embeddings = OpenAIEmbeddings()
        self.vectorstore = Pinecone.from_existing_index(
            index_name="documentos",
            embedding=self.embeddings
        )
        self.llm = ChatOpenAI(model="gpt-4", temperature=0)

        self.prompt_template = PromptTemplate(
            template="""Eres un asistente experto en desarrollo de software.
            Usa el siguiente contexto para responder la pregunta.
            Si no sabes la respuesta, di que no lo sabes.

            Contexto: {context}

            Pregunta: {question}

            Respuesta:""",
            input_variables=["context", "question"]
        )

        self.qa_chain = RetrievalQA.from_chain_type(
            llm=self.llm,
            chain_type="stuff",
            retriever=self.vectorstore.as_retriever(search_kwargs={"k": 3}),
            chain_type_kwargs={"prompt": self.prompt_template}
        )

    def responder(self, pregunta: str) -> str:
        return self.qa_chain.run(pregunta)
```

---

## 12. Gestión de Proyectos de Software

### Estimación de Esfuerzo

#### Planning Poker (Fibonacci)

| Puntos | Complejidad | Ejemplo |
|--------|-------------|---------|
| 1 | Trivial | Cambiar un texto |
| 2 | Simple | Agregar validación |
| 3 | Conocido | CRUD básico |
| 5 | Moderado | Integración con API externa |
| 8 | Complejo | Nueva funcionalidad con lógica |
| 13 | Muy complejo | Refactoring mayor |
| 21 | Épico | Dividir en historias menores |

### Métricas de Proyecto

```
┌─────────────────────────────────────────────────────────────────┐
│                    DASHBOARD DE PROYECTO                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  VELOCITY (últimos 4 sprints)         BURNDOWN CHART            │
│  ┌─────────────────────────┐         ┌────────────────────┐    │
│  │ Sprint 1: 32 pts        │         │  \                 │    │
│  │ Sprint 2: 28 pts        │         │   \   Ideal        │    │
│  │ Sprint 3: 35 pts        │         │    \__             │    │
│  │ Sprint 4: 30 pts        │         │       \__ Real     │    │
│  │ Promedio: 31 pts        │         │          \___      │    │
│  └─────────────────────────┘         └────────────────────┘    │
│                                                                  │
│  MÉTRICAS DE CALIDAD                                            │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Cobertura de Tests: 85%  │ Bugs en Prod: 2/sprint      │   │
│  │ Deuda Técnica: 4 días    │ Lead Time: 3 días           │   │
│  │ Code Review Time: 4h     │ Deployment Freq: 2/día      │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 13. Calidad de Software y Testing Avanzado

### Test-Driven Development (TDD)

```java
// 1. RED: Escribir test que falla
@Test
void calcularDescuento_clienteVIP_aplicaDescuento20Porciento() {
    // Arrange
    Cliente clienteVIP = new Cliente("Juan", TipoCliente.VIP);
    Producto producto = new Producto("Laptop", new BigDecimal("1000"));

    // Act
    BigDecimal precioFinal = calculadoraDescuento.calcular(clienteVIP, producto);

    // Assert
    assertEquals(new BigDecimal("800.00"), precioFinal);
}

// 2. GREEN: Implementar mínimo código para pasar
public class CalculadoraDescuento {
    public BigDecimal calcular(Cliente cliente, Producto producto) {
        if (cliente.getTipo() == TipoCliente.VIP) {
            return producto.getPrecio().multiply(new BigDecimal("0.80"));
        }
        return producto.getPrecio();
    }
}

// 3. REFACTOR: Mejorar código manteniendo tests verdes
public class CalculadoraDescuento {
    private static final Map<TipoCliente, BigDecimal> DESCUENTOS = Map.of(
        TipoCliente.VIP, new BigDecimal("0.20"),
        TipoCliente.PREMIUM, new BigDecimal("0.10"),
        TipoCliente.REGULAR, BigDecimal.ZERO
    );

    public BigDecimal calcular(Cliente cliente, Producto producto) {
        BigDecimal descuento = DESCUENTOS.getOrDefault(cliente.getTipo(), BigDecimal.ZERO);
        return producto.getPrecio().multiply(BigDecimal.ONE.subtract(descuento))
            .setScale(2, RoundingMode.HALF_UP);
    }
}
```

### Contract Testing (Pact)

```javascript
// consumer.pact.spec.js
const { Pact } = require('@pact-foundation/pact');

const provider = new Pact({
  consumer: 'OrderService',
  provider: 'UserService'
});

describe('User Service Contract', () => {
  beforeAll(() => provider.setup());
  afterAll(() => provider.finalize());

  it('get user by id', async () => {
    // Definir expectativa
    await provider.addInteraction({
      state: 'user with id 1 exists',
      uponReceiving: 'a request for user 1',
      withRequest: {
        method: 'GET',
        path: '/api/users/1',
        headers: { Accept: 'application/json' }
      },
      willRespondWith: {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: {
          id: '1',
          name: Matchers.string('John'),
          email: Matchers.email()
        }
      }
    });

    // Ejecutar test
    const response = await userClient.getUser('1');

    expect(response.id).toBe('1');
    expect(response.name).toBeDefined();
  });
});
```

---

## 14. Arquitecturas Modernas

### Event Sourcing

```java
// Evento de dominio
public sealed interface PedidoEvent permits
    PedidoCreado, ProductoAgregado, PedidoConfirmado, PedidoCancelado {

    String pedidoId();
    Instant timestamp();
}

public record PedidoCreado(
    String pedidoId,
    String clienteId,
    Instant timestamp
) implements PedidoEvent {}

public record ProductoAgregado(
    String pedidoId,
    String productoId,
    int cantidad,
    BigDecimal precio,
    Instant timestamp
) implements PedidoEvent {}

// Aggregate que reconstruye estado desde eventos
public class Pedido {
    private String id;
    private String clienteId;
    private List<LineaPedido> lineas = new ArrayList<>();
    private EstadoPedido estado;

    // Reconstruir desde eventos
    public static Pedido fromEvents(List<PedidoEvent> eventos) {
        Pedido pedido = new Pedido();
        eventos.forEach(pedido::apply);
        return pedido;
    }

    private void apply(PedidoEvent evento) {
        switch (evento) {
            case PedidoCreado e -> {
                this.id = e.pedidoId();
                this.clienteId = e.clienteId();
                this.estado = EstadoPedido.CREADO;
            }
            case ProductoAgregado e -> {
                this.lineas.add(new LineaPedido(
                    e.productoId(),
                    e.cantidad(),
                    e.precio()
                ));
            }
            case PedidoConfirmado e -> this.estado = EstadoPedido.CONFIRMADO;
            case PedidoCancelado e -> this.estado = EstadoPedido.CANCELADO;
        }
    }
}
```

### CQRS (Command Query Responsibility Segregation)

```
┌─────────────────────────────────────────────────────────────────┐
│                          CLIENT                                  │
└──────────────────────────┬──────────────────────────────────────┘
                           │
          ┌────────────────┴────────────────┐
          │                                 │
    ┌─────▼─────┐                    ┌─────▼─────┐
    │  COMMANDS │                    │  QUERIES  │
    │  (Write)  │                    │  (Read)   │
    └─────┬─────┘                    └─────┬─────┘
          │                                │
    ┌─────▼─────┐                    ┌─────▼─────┐
    │  Command  │                    │   Query   │
    │  Handler  │                    │  Handler  │
    └─────┬─────┘                    └─────┬─────┘
          │                                │
    ┌─────▼─────┐                    ┌─────▼─────┐
    │  Domain   │                    │   Read    │
    │  Model    │                    │   Model   │
    └─────┬─────┘                    └─────┬─────┘
          │                                │
    ┌─────▼─────┐    SYNC      ┌─────▼─────┐
    │  Write    │────────────►│   Read    │
    │   DB      │   (Events)   │    DB     │
    └───────────┘              └───────────┘
```

---

## 15. Ética y Profesionalismo

### Código de Ética del Ingeniero de Software

Basado en el código de ética ACM/IEEE-CS:

1. **Público**: Actuar en interés público
2. **Cliente y Empleador**: Actuar en el mejor interés de cliente y empleador
3. **Producto**: Asegurar que los productos cumplan estándares profesionales
4. **Juicio**: Mantener integridad e independencia en el juicio profesional
5. **Gestión**: Promover un enfoque ético en la gestión de proyectos
6. **Profesión**: Avanzar la integridad y reputación de la profesión
7. **Colegas**: Ser justo y apoyar a los colegas
8. **Uno mismo**: Participar en aprendizaje continuo

### Consideraciones de IA Responsable

- **Fairness**: Evitar sesgos discriminatorios
- **Transparency**: Explicabilidad de decisiones
- **Privacy**: Protección de datos personales
- **Security**: Robustez ante ataques adversariales
- **Accountability**: Responsabilidad por decisiones automatizadas

---

## 16. Campo Laboral Avanzado

### Roles de Ingeniería de Software

| Rol | Descripción | Salario Referencial (CLP) |
|-----|-------------|---------------------------|
| **Software Engineer** | Desarrollo de sistemas | $2.500.000 - $4.000.000 |
| **Senior Software Engineer** | Liderazgo técnico | $4.000.000 - $6.000.000 |
| **Tech Lead** | Líder de equipo técnico | $5.000.000 - $7.000.000 |
| **Software Architect** | Diseño de arquitecturas | $6.000.000 - $9.000.000 |
| **Engineering Manager** | Gestión de equipos | $6.500.000 - $10.000.000 |
| **DevOps Engineer** | Automatización e infra | $3.500.000 - $6.000.000 |
| **SRE** | Confiabilidad de sistemas | $4.500.000 - $7.000.000 |
| **Data Engineer** | Pipelines de datos | $4.000.000 - $7.000.000 |
| **ML Engineer** | Sistemas de ML | $5.000.000 - $8.000.000 |

### Certificaciones Avanzadas Recomendadas

| Certificación | Proveedor | Área |
|---------------|-----------|------|
| AWS Solutions Architect | Amazon | Cloud |
| CKA (Kubernetes Admin) | CNCF | DevOps |
| Azure DevOps Engineer | Microsoft | DevOps |
| Professional Scrum Master | Scrum.org | Agile |
| TOGAF | The Open Group | Arquitectura |
| Google Professional Cloud Architect | Google | Cloud |
| Terraform Associate | HashiCorp | IaC |
| MongoDB Developer | MongoDB | Databases |

---

## 17. Referencias y Fuentes Oficiales

### Fuentes DuocUC

- [Página oficial Ingeniería en Informática](https://www.duoc.cl/carreras/ingenieria-en-informatica/)
- [Malla Curricular 2025 (PDF)](https://www.duoc.cl/wp-content/uploads/2025/10/Malla-Curricular-1446116-2024-Ingenieroa-en-Informa%CC%81tica-Especializacio%CC%81n-en-Desarrollo-de-Software.pdf)
- [Escuela de Informática y Telecomunicaciones](https://www.duoc.cl/escuela/informatica-telecomunicaciones/)

### Estándares Internacionales

- [SWEBOK v4.0 - IEEE Computer Society](https://www.computer.org/education/bodies-of-knowledge/software-engineering)
- [ISO/IEC 25010 - Calidad de Software](https://iso25000.com/index.php/normas-iso-25000/iso-25010)
- [OWASP Top 10](https://owasp.org/Top10/)

### Documentación Técnica

- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)
- [Martin Fowler's Architecture](https://martinfowler.com/architecture/)
- [Microsoft Azure Architecture Center](https://learn.microsoft.com/azure/architecture/)
- [12 Factor App](https://12factor.net/)

### Libros Recomendados

- "Clean Architecture" - Robert C. Martin
- "Domain-Driven Design" - Eric Evans
- "Designing Data-Intensive Applications" - Martin Kleppmann
- "Building Microservices" - Sam Newman
- "Site Reliability Engineering" - Google
- "The Phoenix Project" - Gene Kim

---

## Glosario de Términos Avanzados

| Término | Definición |
|---------|------------|
| **API Gateway** | Punto de entrada único para microservicios |
| **Blue-Green Deployment** | Estrategia de despliegue con dos ambientes |
| **Canary Release** | Despliegue gradual a un subset de usuarios |
| **CQRS** | Separación de comandos y consultas |
| **DDD** | Diseño guiado por el dominio |
| **Event Sourcing** | Persistir estado como secuencia de eventos |
| **GitOps** | Infraestructura declarativa versionada |
| **Idempotency** | Operación con mismo resultado si se repite |
| **Saga Pattern** | Coordinación de transacciones distribuidas |
| **Service Mesh** | Infraestructura para comunicación entre servicios |
| **SLA/SLO/SLI** | Acuerdos y objetivos de nivel de servicio |
| **Strangler Pattern** | Migración gradual de monolito a microservicios |

---

*Documento generado como material educativo para la carrera de Ingeniería en Desarrollo de Software de DuocUC.*

*Última actualización: Diciembre 2025*
