# 🚀 Full-Stack DevOps: A Node.js API with Docker, Kubernetes & Datadog Monitoring
![as](https://github.com/hirdeshkumar2407/nodejs-calculator-docker-kubernetes-datadog-admission-control/assets/79218874/3a1ecb2f-f5c3-4167-9d0b-36b15d375b52)
 

## 🎯 Project Mission
This project is a comprehensive, end-to-end demonstration of modern DevOps and MLOps principles. The goal was to not just build a simple Node.js application, but to architect a complete, production-ready ecosystem around it.
This includes containerization with Docker, orchestration with Kubernetes, and implementing advanced, real-time observability using a Datadog Admission Controller. It's a practical case study in building, deploying, and monitoring a scalable and resilient microservice in a cloud-native environment.



## ✨ Core Features & Technologies
- Application: A RESTful API for arithmetic operations, built with Node.js.
- Containerization: Fully containerized using Docker for portability and consistency. The image is publicly available on Docker Hub.
- Orchestration: Deployed on a local Kubernetes cluster (Minikube) for scalable management.
- Observability: Integrated with a Datadog Agent and Admission Controller to provide comprehensive, real-time monitoring of metrics, logs, and application performance.

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

#### Addition

`curl -X POST -H "Content-Type: application/json" -d '{"a": 5, "b": 3, "op": "add"}' http://localhost:3000`

#### Multiplication

`curl -X POST -H "Content-Type: application/json" -d '{"a": 4, "b": 6, "op": "mul"}' http://localhost:3000`

#### Division

`curl -X POST -H "Content-Type: application/json" -d '{"a": 10, "b": 2, "op": "div"}' http://localhost:3000`

#### Subtraction

`curl -X POST -H "Content-Type: application/json" -d '{"a": 8, "b": 3, "op": "sub"}' http://localhost:3000`


## Docker Deployment

(The image is available in docker hub as well https://hub.docker.com/r/hirdeshkumar2407/nodejs-calculator)

To deploy the Node.js application using Docker:



1. (a) Build the Docker image (Opitional):

`docker build -t nodejs-calculator .`

1. (b) Pull Docker image (Opitional):

`docker pull hirdeshkumar2407/nodejs-calculator`

2. Run the Docker container:

`docker run -d -p 3000:3000 --name calculator nodejs-calculator`


## Kubernetes Deployment 
To deploy the application on Kubernetes:

1. Start Minikube (Optional if you are running Kubernetes on Minikube otherwise you start with step 2 with your preconfigured Kubernetes environment)
   
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


## DataDog Admission Control with NodeJS App Deployment

Start by applying the deployment configuration defined in the deployment.yaml file using the following command:

`kubectl apply -f deployment.yaml`
This command orchestrates the deployment of the Node.js application on the Kubernetes cluster.

Verify the status of the deployment to ensure that it was successfully created and is running as expected:

`kubectl get deployment`

List all the pods created as part of the deployment to monitor their status and health:


`kubectl get pods`


![image](https://github.com/hirdeshkumar2407/calculator-api-deployed-on-nodejsapp-docker-kubernetes-with-datadog-addmisson-control-method/assets/79218874/23d2192f-b7d2-468d-b84a-1cce937aae03)


Expose the deployed application as a service to make it accessible externally. Use the following command:


`kubectl expose deployment nodejs-calculator --type=NodePort --port=3000`

This command exposes the application on a specific port, allowing external access. (For all cases except for 
If you are using Minikube, port forwarding might be necessary to access services running inside the cluster from your local machine. Minikube runs a single-node Kubernetes cluster locally, and it provides a way to access services deployed within the cluster from your local environment).


To access the deployed application locally for testing or debugging, set up port forwarding with the following command:
`kubectl port-forward svc/nodejs-calculator 30371:3000` (For MiniKube only)

This command forwards traffic from a local port (30371 in this example) to the application's port on a pod within the Kubernetes cluster.

Lastly, retrieve the logs of a specific pod to diagnose issues or monitor the application's behavior:

`kubectl logs nodejs-calculator-684686c6b7-srvsb`

Replace nodejs-calculator-684686c6b7-srvsb with the actual name of the pod.
By following these steps, you can effectively deploy and manage a Node.js application on Kubernetes, utilizing various commands to ensure smooth deployment, monitoring, and debugging processes.


Make some curls requests and check the datadog account.

![image](https://github.com/hirdeshkumar2407/calculator-api-deployed-on-nodejsapp-docker-kubernetes-with-datadog-addmisson-control-method/assets/79218874/91e695d4-80d1-4c87-83da-bb537c72a781)

![image](https://github.com/hirdeshkumar2407/calculator-api-deployed-on-nodejsapp-docker-kubernetes-with-datadog-addmisson-control-method/assets/79218874/3114285e-d76a-46d8-9e7c-40a69d7c71f8)


