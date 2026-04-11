<div align="center">

![Security](https://img.shields.io/badge/Security-Informática-red?style=flat-square&logo=security&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-03-blue?style=flat-square)

# `Criptografía`

</div>

---

### 📋 Contenido

| Tipo | Descripción |
|:-----|:------------|
| Simétrica | Misma clave (AES) |
| Asimétrica | Par de claves (RSA) |
| Hash | Huella digital (SHA) |
| Digital Sign | Firma electrónica |

---

### 💻 Código

```java
// Hash SHA-256
MessageDigest md = MessageDigest.getInstance("SHA-256");
byte[] hash = md.digest(password.getBytes());

// BCrypt para contraseñas
String hashed = BCrypt.hashpw(password, BCrypt.gensalt());
boolean valid = BCrypt.checkpw(password, hashed);

// AES
SecretKey key = new SecretKeySpec(keyBytes, "AES");
Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
cipher.init(Cipher.ENCRYPT_MODE, key);
byte[] encrypted = cipher.doFinal(data);
```

---

<div align="center">
<sub>Seguridad Informática · Experiencia 1</sub>
</div>
