node {
    stage('Checkout SCM') {
        git branch: 'master', url: 'https://github.com/jdavidAT7/angular-jenkins.git'
    }

    stage('Install node modules') {
        sh "npm install"
    }

    stage("Test") {
        sh "npm run test-headless"
    }

    stage("Build") {
        sh "npm run build --prod"
    }
    
    stage("Copy") {
        sh "cp -a /var/jenkins_home/workspace/angular-test/. /var/www/jenkins_test/html/"
    }
}