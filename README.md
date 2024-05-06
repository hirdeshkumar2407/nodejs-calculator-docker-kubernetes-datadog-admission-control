# Node.js Calculator API Deployed with NodeApp, Docker, and Kubernetes

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

2. Apply the Kubernetes deployment and service configurations:

`kubectl apply -f deployment.yaml`

## DataDog Agent Deployment (Optional)
To monitor the Node.js application using DataDog, deploy the DataDog Agent alongside your application. Use the provided YAML configuration to deploy the DataDog Agent to your Kubernetes cluster.

`kubectl apply -f data-dog-agent.yaml`
