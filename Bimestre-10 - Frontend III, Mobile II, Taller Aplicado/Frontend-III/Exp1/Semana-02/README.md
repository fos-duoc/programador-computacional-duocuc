<div align="center">

![E2E](https://img.shields.io/badge/Cypress-E2E-17202C?style=flat-square&logo=cypress&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-02-blue?style=flat-square)

# `Testing E2E`

</div>

---

### 🔄 Cypress

```typescript
// cypress/e2e/login.cy.ts
describe('Login Flow', () => {

  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login successfully', () => {
    cy.get('[data-testid="email"]').type('user@test.com');
    cy.get('[data-testid="password"]').type('password123');
    cy.get('[data-testid="submit"]').click();

    cy.url().should('include', '/dashboard');
    cy.contains('Bienvenido').should('be.visible');
  });

  it('should show error on invalid credentials', () => {
    cy.get('[data-testid="email"]').type('wrong@test.com');
    cy.get('[data-testid="password"]').type('wrong');
    cy.get('[data-testid="submit"]').click();

    cy.get('.error-message')
      .should('be.visible')
      .and('contain', 'Credenciales inválidas');
  });

  it('should intercept API calls', () => {
    cy.intercept('POST', '/api/login', { token: 'fake-token' });
    // ...
  });
});
```

| Comando | Acción |
|:--------|:-------|
| `cy.visit()` | Navegar |
| `cy.get()` | Seleccionar |
| `cy.type()` | Escribir |
| `cy.click()` | Click |
| `cy.intercept()` | Mock API |

---

<div align="center">
<sub>Frontend III · Experiencia 1</sub>
</div>
