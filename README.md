![image](https://github.com/hirdeshkumar2407/calculator-api-deployed-on-nodejsapp-docker-kubernetes-with-datadog-addmisson-control-method/assets/79218874/111dda53-0737-4731-8c0b-bdf809a551a3)# Node.js Calculator API Deployed with NodeApp, Docker, and Kubernetes

This repository contains a Node.js calculator API that is deployed using npm, Docker, and Kubernetes (with Minikube). 

## Overview

This Node.js app provides a simple calculator API that allows users to perform basic arithmetic operations. It is deployed using npm for local development, Docker for containerization, and Kubernetes (Minikube) for container orchestration.

This repository contains a simple Node.js application that provides a RESTful API for performing basic arithmetic operations. The application is designed to be deployed using Docker containers and Kubernetes (Minikube). Additionally, it includes instructions for integrating with Datadog for monitoring purposes.

## Node.js Application
The Node.js application exposes several endpoints for arithmetic operations:

- `/add`: Adds two numbers.
- `/subtract`: Subtracts one number from another.
- `/multiply`: Multiplies two numbers.
- `/divide`: Divides one number by another.

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine
- Docker installed on your local machine
- Minikube installed for Kubernetes deployment

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.

### Running the App

To start the Node.js app locally, run:

npm start

#### Using npm:

- To install dependencies: `npm install`
- To start the app in development mode: `npm run dev`
- To run tests: `npm test`

#### Using curl:

Use curl to interact with the API endpoints. For example:


##### Addition
`curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"a": 5, "b": 3}' \
  http://localhost:3000/add`

##### Subtraction
`curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"a": 5, "b": 3}' \
  http://localhost:3000/subtract`

##### Multiplication
`curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"a": 5, "b": 3}' \
  http://localhost:3000/multiply`

##### Division
`curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"a": 10, "b": 2}' \
  http://localhost:3000/divide`


## Docker Deployment
(The image is available in docker hub as well https://hub.docker.com/r/hirdeshkumar2407/nodejs-calculator)
To deploy the Node.js application using Docker:



1. (a) Build the Docker image (Opitional):

`docker build -t nodejs-calculator .`

1. (b) Pull Docker image (Opitional):

`docker pull hirdeshkumar2407/nodejs-calculator`

2. Run the Docker container:

`docker run -d -p 3000:3000 --name calculator nodejs-calculator`


## Kubernetes Deployment (Minikube)
To deploy the application on Kubernetes using Minikube:

1. Start Minikube (Optional if you are running Kubernetes on Minikube):
`minikube start`

2. Get all pods related to Kubernetes infrastructure 
`kubectl get all --all-namespaces`


## DataDog Agent Deployment 
By deploying the DataDog agent alongside your applications, you can harness its rich features for metrics, logs, traces, and alerting, all tailored specifically for Kubernetes environments. To get started, you can utilize the following commands:

`helm repo add datadog https://helm.datadoghq.com`
`helm install datadog-operator datadog/datadog-operator`
`kubectl create secret generic datadog-secret --from-literal api-key=Secret-key`

To monitor the Node.js application using DataDog, deploy the DataDog Agent alongside your application. Use the provided YAML configuration to deploy the DataDog Agent to your Kubernetes cluster.

`kubectl apply -f data-dog-agent.yaml`

Verify the status of the deployment to ensure that it was successfully created and is running as expected:

`kubectl get deployment`


List all the pods created as part of the deployment to monitor their status and health:

`kubectl get pods`


## DataDog Addmission Control with NodeJS App Deployment
Admission control plays a crucial role in ensuring the smooth operation of applications deployed on Kubernetes clusters. By injecting instrumentation libraries and tagging pods, admission control enables comprehensive monitoring and observability, vital for managing complex containerized environments. In this article, we'll explore how DataDog, a leading observability platform, integrates admission control into Kubernetes deployments, focusing on a Node.js application deployment as an example.

Start by applying the deployment configuration defined in the deployment.yaml file using the following command:

`kubectl apply -f deployment.yaml`
This command orchestrates the deployment of the Node.js application on the Kubernetes cluster.

Verify the status of the deployment to ensure that it was successfully created and is running as expected:

`kubectl get deployment`

List all the pods created as part of the deployment to monitor their status and health:


`kubectl get pods`

Expose Deployment as Service: Expose the deployed application as a service to make it accessible externally. Use the following command:


`kubectl expose deployment nodejs-calculator --type=NodePort --port=3000`
This command exposes the application on a specific port, allowing external access.

To access the deployed application locally for testing or debugging, set up port forwarding with the following command:
`kubectl port-forward svc/nodejs-calculator 30371:3000`

This command forwards traffic from a local port (30371 in this example) to the application's port on a pod within the Kubernetes cluster.

Lastly, retrieve the logs of a specific pod to diagnose issues or monitor the application's behavior:

`kubectl logs nodejs-calculator-684686c6b7-srvsb`

Replace nodejs-calculator-684686c6b7-srvsb with the actual name of the pod.
By following these steps, you can effectively deploy and manage a Node.js application on Kubernetes, utilizing various commands to ensure smooth deployment, monitoring, and debugging processes.
