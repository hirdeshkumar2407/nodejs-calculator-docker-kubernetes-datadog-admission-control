# Use Ubuntu 22.04 as base image
FROM ubuntu:22.04

# Install curl and Node.js dependencies
RUN apt-get update \
    && apt-get install -y curl nodejs npm

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 (the port your app runs on)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]

