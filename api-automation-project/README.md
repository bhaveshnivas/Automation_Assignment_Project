# API Automation Framework

## Overview
This repository contains an API automation framework designed to test the "JSONPlaceholder" API. The framework is built using JavaScript, Mocha for testing, Chai for assertions, and Axios for making HTTP requests.

## Features
1. Comprehensive testing of multiple API endpoints.
2. Positive, negative, and edge test cases covering various scenarios.
3. Support for multiple HTTP methods: GET, POST, PUT, DELETE.
4. Scalable and maintainable framework structure.

## Technologies Used
1. JavaScript: Programming language
2. Mocha: Framework for running tests.
3. Chai: Assertion library to perform assertions on the API responses.
4. Axios: HTTP client for making API requests.

## Description
This Repo contains "apiTests" and "helpers" folders 
1. apiTest - This folder is used to structure the CRUD operations seperately
2. helpers - It contains the modules like axios to easily maintain the code and reuse it

## Execution
1. First navigate to the "api-automation-project" directory - cd api-automation-project
2. Run the "npm test" command - To run the tests in the project
3. Now run the command "npx mocha test/apiTests/getTests.js" - To execute the GET Command scripts


