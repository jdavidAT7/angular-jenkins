pipeline {
    agent { 
        docker { 
            image 'node:16.17.1-alpine' 
            args '-p 4200:4200'
            } 
        }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }    
}