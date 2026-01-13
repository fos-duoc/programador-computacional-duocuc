<div align="center">

![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-07-blue?style=flat-square)

# `Pipeline CI/CD`

</div>

---

### 📋 Contenido

| Etapa | Descripción |
|:------|:------------|
| Build | Compilar código |
| Test | Ejecutar pruebas |
| Scan | Análisis de seguridad |
| Deploy | Desplegar |

---

### 💻 Jenkinsfile

```groovy
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'mvn clean compile'
            }
        }

        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }

        stage('Package') {
            steps {
                sh 'mvn package -DskipTests'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker build -t app:latest .'
                sh 'docker push registry/app:latest'
            }
        }
    }
}
```

---

<div align="center">
<sub>DevOps · Experiencia 3</sub>
</div>
