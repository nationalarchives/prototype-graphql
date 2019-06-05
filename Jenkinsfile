pipeline{
    agent any
    stages{
        stage("Checkout") {
            steps {
                checkout(scm)
            }
        }

        stage("Build containers") {
            steps {
                sh "/usr/local/bin/docker-compose build"
            }
        }

        stage("Run containers"){
            steps{
                sh "/usr/local/bin/docker-compose up -d mysql"
                sh "/usr/local/bin/docker-compose up --exit-code-from graphql graphql"
            }            
        }

        stage("Copy junit xml report") {
            steps {
                sh "docker cp graphql:/tdr-graphql/junit.xml ."
            }
        }

        stage("Remove containers") {
            steps {
                sh "/usr/local/bin/docker-compose down"
            }
        }
    }
    post {
        always {
            junit 'junit.xml'
        }
    }
    
}