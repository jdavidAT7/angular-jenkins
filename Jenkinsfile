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
        stage('Build') {
            steps {
                sh 'npm run build --prod'
            }
        }
        
    }
}
