pipeline {
    agent {
        dockerfile {
            filename "Dockerfile"
            dir "."
            args '-v /storage-workspace/web:/web-space'
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
                sh "/usr/bin/rsync -R ./dist /web-space/ && /bin/ls -l /web-space/"
            }
        }
    }
}
