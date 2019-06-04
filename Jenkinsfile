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
                sh "/usr/local/bin/docker-compose up graphql"
            }            
        }

        stage("Remove containers") {
            steps {
                sh "/usr/local/bin/docker-compose down"
            }
        }
    }
    
}