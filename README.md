# Project Readme

## Overview

This project is structured following the principles of Clean Architecture, designed to promote separation of concerns and scalability. The architecture is divided into distinct layers: `config`, `application`, `domain`, and `infrastructure`, each with its specific responsibilities.

### Architecture Breakdown

- **Config**: Contains configuration files and constants used throughout the application.

- **Application**: The layer where the application's core functionality resides. It includes:
  - **GraphQL**: Contains GraphQL resolvers for handling GraphQL queries and mutations.
    - inputs # Signature of inputs 
    - resolvers #Contain Queries and Mutations
    - types # Types of outputs
  - **Services**: Contain the business logic of the application.

- **Domain**: This layer holds the business logic and business objects of the application, including:
  - **Interfaces**: Define the structure of data objects and services.
  - **Models**: Represent the application's data and encapsulate the business logic.

- **Infrastructure**: Deals with external concerns like databases, file systems, etc. It contains:
  - **Modules**: Group related functionalities.
  - **Repositories**: Provide an abstraction layer over data access.
  - **Database**: Includes the database connection and configuration.

## Running the Application with Docker

### Docker and Containers

Docker is a platform that uses containerization to simplify the deployment and management of applications. Containers are isolated environments that contain all the necessary dependencies and configurations to run an application. This isolation ensures that the application runs uniformly and consistently across different environments.

### Importance of Docker

- **Consistent Environment**: Docker containers ensure that the application runs the same way in every environment, from development to production.
- **Dependency Management**: All dependencies are packaged within the container, avoiding issues related to missing or conflicting dependencies.
- **Simplicity and Speed**: Streamlines the deployment process, allowing for faster and more reliable deliveries.

### Running the Application

1. **Prerequisites**: Ensure you have Docker and Docker Compose installed on your machine.


## GraphQL Section

In this project, we use GraphQL for handling data queries and mutations. GraphQL offers a more efficient, powerful, and flexible approach compared to traditional REST APIs. Below are examples of GraphQL mutations for user authentication and creation.

### GraphQL Playground

GraphQL Playground provides a graphical, interactive, in-browser GraphQL IDE. It allows you to write, validate, and test GraphQL queries/mutations. To use these mutations, you would typically enter them in the GraphQL Playground, which is accessible when you run your GraphQL server.

### 1. User Authentication

The `Login` mutation allows users to authenticate. It takes a username and password as inputs and returns a token and user information if the credentials are valid.

#### Mutation

```graphql
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      id
      username
    }
  }
}
```

#### Variables

```json
{
  "username": "yourUsername",
  "password": "yourPassword"
}
```

To use this mutation in the GraphQL Playground, you would paste the mutation in the query window and the variables in the variables window, then execute the mutation.

### 2. Creating a New User

The `CreateNewUser` mutation is used to create a new user in the system. It requires a `CreateUserInput` type, which includes the necessary user information.

#### Mutation

```graphql
mutation CreateNewUser($input: CreateUserInput!) {
  createUser(createUserData: $input) {
    id
    username
    // Include other UserType fields you want returned
  }
}
```

#### Variables

```json
{
  "input": {
    "username": "newUser",
    "password": "userPassword"
  }
}
```

Similarly, for this mutation, paste it in the query window and the variables in the variables window of the GraphQL Playground and execute it.

```json
 http://localhost:3000/graphql
```

2. **Docker Compose**: This project includes a `docker-compose.yml` file, which defines the services, networks, and volumes for your Docker containers.

3. **Running the Application**:
   - Open a terminal and navigate to the root directory of the project.
   - Run the following command to build and start the containers in the background:
     ```bash
     docker-compose up -d
     ```
   - To stop the containers, use:
     ```bash
     docker-compose down
     ```

### Current Testing Strategy: Focused on Repository Tests

My current testing setup, which primarily includes tests for repositories, is a good starting point. Repository tests are crucial as they ensure that the data access layer of your application interacts correctly with your database or data source. Here's how you can run and enhance these tests:

#### Running Repository Tests

1. **Run the Test Suite**: Use your test script (usually `pnpm test`) to execute the repository tests.
2. **Analyze Test Results**: Check the output for any failures and ensure that all test cases for your repositories pass.
3. **Review Test Coverage**: Make sure your repository tests cover various scenarios, including successful data retrieval, handling of non-existent data, and error conditions.

### Points for Improvement

1. **Expand Test Scenarios**: Enhance repository tests by covering a wider range of scenarios, including edge cases. This could involve testing how the repositories handle unusual or unexpected data, testing data validation, and ensuring that errors are handled gracefully.

2. **Introduce Unit Tests for Other Layers**: While repository tests are vital, unit tests for services, controllers, and utility functions are equally important. These tests can ensure that your business logic, request handling, and utility functions behave as expected.

3. **Integration Tests**: Add tests that cover the interaction between different layers of your application. For example, testing how your services interact with repositories can help catch issues that might not be evident in isolation.

4. **Mock External Services**: If your repositories interact with external services or APIs, use mocking to simulate these services. This ensures that your tests are not dependent on external factors and can run reliably at any time.

5. **Continuous Integration (CI)**: Automate your testing process by integrating it into a CI/CD pipeline. This ensures that tests are run automatically on every code change, helping to catch issues early.

6. **Regular Test Maintenance**: Regularly update your tests to reflect changes in the application. As new features are added or existing features are modified, corresponding tests should be added or updated to maintain test relevance and effectiveness.

### Additional Docker Commands

- **View Logs**: To view the logs of running containers, use `docker-compose logs`.
- **Rebuild Containers**: If you make changes to the Dockerfile or dependencies, rebuild the containers with `docker-compose up --build`.

## Conclusion

By leveraging Docker and following Clean Architecture principles, this project provides a robust, scalable, and easy-to-maintain structure, suitable for complex applications requiring a clear separation of concerns and modular design.