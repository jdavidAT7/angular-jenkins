pipeline {
    agent {
        docker {
            image 'node:16.13.1-alpine'
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

