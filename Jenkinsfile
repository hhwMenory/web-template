pipeline {
    agent {
        dockerfile {
            filename "Dockerfile"
            dir "."
        }
    }
    stages {
        stage('install') {
            steps {
                sh 'npm install'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('deploy') {
            steps {
                sh "cd dist && tar -zcvf dist.tar.gz *"
            }
        }
    }
}
