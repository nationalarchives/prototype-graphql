pipeline{
    agent any
    stages{
        stage("Checkout") {
            steps {
                checkout(scm)
            }
        }
        stage("Run containers"){
            steps{
                sh "/usr/local/bin/docker-compose up -d mysql"
                sh "/usr/local/bin/docker-compose up --exit-code-from graphql graphql"
            }            
        }

        stage("Remove containers") {
            steps {
                sh "/usr/local/bin/docker-compose down"
            }
        }

        stage("Copy junit xml report") {
            steps {
                sh "docker cp graphql:/tdr-graphql/junit.xml ."
            }
        }
    }
    post {
        always {
            junit 'junit.xml'
        }
    }
    
}