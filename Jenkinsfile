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
                sh 'npm install'
            }
        }
        stage("Test") {
          steps{
            sh "npm run test-headless"
          }
    }
        stage("Copy") {
          steps{
          sh "cp -a /var/jenkins_home/workspace/angular-test/. /var/www/jenkins_test/html/"
        }
    }
  }
}
