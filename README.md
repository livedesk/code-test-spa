React App: code-test-spa

used:
visual studo code,
node version 16.14.2

to run:  
npm install
npm start


expected url/port: http://localhost:3000/

--------------------------------------------------------

Answers to Questions:
======================


Scalability

How would you scale the application for many users?

A number of things could be done to help with scaling going forward:

1. Token Validation: Implement token validation more efficiently. Make sure to avoid unnecessary database queries for each token validation.

2. Could look at implementing load balancing to distribute requests accross multiple servers.

3. Horizontal scalability - adding more servers as userbase grows. 


Testability

How would you make sure every part of your application is tested?

1. Unit Testing for the React App tools like Jest to write unit tests for individual components and functions.  

2. Integration Testing to test for interactions between components with tools like Cypress.

3. For the REST API using testing frameworks like xUnit or MSTest.

4. Write unit tests for each API endpoint and you can also mock data sources and services, so the tests can be isolated and repeatable.

5. Set up a CI/CD pipeline such as Jenkins, CircleCI and configure CI to run the tests automatically whenever you push code.



Maintainability
What practicces have you followed to ensure the code is maintainable?

1. I've written the react and c# code in components/classes  which makes it easier to update functionality. 
 
2. Version control with GIT/GitHub.

3. C# and React use package managers to manage dependencies.


Readability
How have you ensured that your code can be easily understood by others?

1. I have used a consistent coding style with models, views, controllers which should help with readability in future.

2. I have commented the code explaining the purpose of features where needed.


Reusability

How have you ensured that parts of your code can be reused in other projects or parts of the same project?

1. I have kept blocks of code together in a reusable way such as Utils class for common methods.

2. I have used middleware components to encapsulate and reuse common behaviors, such as authentication.

3. I've used for example DTOs to shape the data that the API sends and receives. DTOs can be reused for different endpoints or clients.



Performance

What measures have you teken or would take to ensure the applicaton runs efficiently?

1. I used asynchronous calls to avoid blocking the execution of the program/code.

2. Could have applied lazy loading to load components or assets asynchronously when they are needed, reducing the initial page load time.

3. You could compress and optimise images to reduce their size - Use responsive image techniques.
