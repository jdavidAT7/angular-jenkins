pipeline {
    agent { 
        docker { 
            image 'node:16.17.1-alpine' 
            args '-p 4200:4200'
            } 
        }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
            }
        }
    }
}