<div align="center">

![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-07-blue?style=flat-square)

# `Lambda - Serverless`

</div>

---

### 📋 Contenido

| Concepto | Descripción |
|:---------|:------------|
| Función | Código sin servidor |
| Trigger | Evento que invoca |
| Runtime | Python, Node, Java |
| Timeout | Tiempo máximo |

---

### 💻 Lambda Python

```python
import json

def lambda_handler(event, context):
    nombre = event.get('nombre', 'Mundo')

    return {
        'statusCode': 200,
        'body': json.dumps({
            'mensaje': f'Hola, {nombre}!'
        })
    }
```

```bash
# Invocar función
aws lambda invoke \
  --function-name mi-funcion \
  --payload '{"nombre": "Juan"}' \
  response.json
```

---

<div align="center">
<sub>Computación en la Nube · Experiencia 3</sub>
</div>
