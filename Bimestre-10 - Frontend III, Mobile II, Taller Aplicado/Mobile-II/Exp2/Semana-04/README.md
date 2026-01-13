<div align="center">

![Auth](https://img.shields.io/badge/Firebase-Auth-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Semana](https://img.shields.io/badge/Semana-04-blue?style=flat-square)

# `Autenticación Firebase`

</div>

---

### 🔐 Login & Registro

```typescript
// auth.service.ts
@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = getAuth();

  async register(email: string, password: string): Promise<User> {
    const result = await createUserWithEmailAndPassword(
      this.auth, email, password
    );
    return result.user;
  }

  async login(email: string, password: string): Promise<User> {
    const result = await signInWithEmailAndPassword(
      this.auth, email, password
    );
    return result.user;
  }

  async loginWithGoogle(): Promise<User> {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(this.auth, provider);
    return result.user;
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
  }

  getCurrentUser(): Observable<User | null> {
    return new Observable(subscriber => {
      onAuthStateChanged(this.auth, user => {
        subscriber.next(user);
      });
    });
  }
}
```

| Método | Uso |
|:-------|:----|
| Email/Password | Registro tradicional |
| Google | OAuth social |
| Phone | SMS verification |

---

<div align="center">
<sub>Mobile II · Experiencia 2</sub>
</div>
