# Memoteca

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
## Project Structure

The project is organized into the following directories:

- `src/app`: This is where the main application code resides. Each component, service, and module has its own directory under this folder.
- `src/assets`: This folder contains static assets like images and styles.
- `src/environments`: This folder contains configuration files for different environments like development and production.

## Component Functionality

- `AppComponent`: This is the root component of the application.
- `HeaderComponent`: This component displays the header of the application.
- `FooterComponent`: This component displays the footer of the application.
- `CreateNewThoughtComponent`: This component is used to create new thoughts.
- `ThoughtsListComponent`: This component is used to display a list of thoughts.
- `ThoughtComponent`: This component is used to display a single thought.
- `DeleteThoughtComponent`: This component is used to delete a thought.
- `EditThoughtComponent`: This component is used to edit a thought.


## Running the Backend

To run the backend for testing HTTP requests, follow these steps:

1. Navigate to the backend directory: `cd backend`
2. Install the dependencies: `npm install`
3. Start the server: `npm start`

The server will start on `http://localhost:3000/`. You can test the API endpoints using a tool like Postman or Insomnia.

## Testing HTTP Requests

To test HTTP requests, you can use the `HttpClientTestingModule` and `HttpTestingController` provided by Angular. These allow you to mock HTTP requests in your tests.

Remember to import `HttpClientTestingModule` in the `beforeEach` of your test and inject `HttpTestingController` in your tests.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request