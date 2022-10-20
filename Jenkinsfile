pipeline {
    agent {
        docker {
            image 'node:16.13.1-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
      stage('Install node modules') {
            steps {
                sh 'npm install'
            }
      }
      stage('Build') {
            steps {
                sh 'npm run build --prod'
            }
      } 
        
    }
}
