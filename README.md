
## API Endpoints

Implement a RESTful API with the following endpoints:

- **GET /tasks**: Retrieve all tasks.

- **GET /tasks/:id**: Retrieve a single task by its ID.

- **POST /tasks**: Create a new task.

- **PUT /tasks/:id**: Update an existing task by its ID.

- **DELETE /tasks/:id**: Delete a task by its ID.

Use an in-memory data store (e.g., an array) to store the tasks.

## Error Handling

Implement proper error handling for invalid requests.

## Input Validation

Add input validation for task creation and updates. Validate that the title and description are not empty, and that the completion status is a boolean value.

## Testing

Test the API using Postman or Curl to ensure it works as expected.

## Optional Extension

Implement filtering and sorting for the GET /tasks endpoint. For example, users should be able to filter tasks based on completion status and sort them by creation date.

Allow users to assign a priority level (e.g., low, medium, high) to each task. Update the API to support this new attribute in task creation, updates, and retrieval.

Implement an endpoint to retrieve tasks based on priority level: **GET /tasks/priority/:level**.
