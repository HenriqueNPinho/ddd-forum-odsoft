


<p align="center">
 <img src="https://user-images.githubusercontent.com/6892666/67032637-fc237200-f0e1-11e9-8a46-f5d655e71962.png"/>
</p>
<h1 align="center">DDDForum.com</h1>

<p align="center">
 <a href="https://circleci.com/gh/stemmlerjs/ddd-forum"><img src="https://circleci.com/gh/circleci/circleci-docs.svg?style=svg"></a>
 <a href="#contributors"><img src="https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square"></a>
</p>

> A [SOLID](https://khalilstemmler.com/articles/solid-principles/solid-typescript/) hackernews-inspired forum site built with TypeScript using the [clean architecture](https://khalilstemmler.com/articles/software-design-architecture/organizing-app-logic/) and [DDD best practices](https://khalilstemmler.com/articles/domain-driven-design-intro/).



## About 

This document refers to changes made to the original project. We used Gradle to create multiple tasks to fulfill ou defined "Goals". For pipeline we make usage of a Jenkins Freestyle Job (config file on this reository).

## Goals

1. Create Build Automation using Gradle + Node.js
2. Generate JSDoc documentation
3. Run unit and api tests
4. Create new functionalities
5. Configire Jenkins

## Testing Patterns

There are two types of tests that can be performed on thsi project. 
The first type is unit testing, referencing teh smallest components of the system in terms of code. Those do not require any specifications in order ot be executed.
The second type are API tests, focused on the overall functonality of the program as a system. Consisting on more detailed tests, using endpoints,clients and requests. Given the complexity of the tested cenarios, the backend must be running so that it can serve the tested requests. There are also database interactions.

In order to run unit tests, the following specifications are made:
>npm run test -- --testPathIgnorePatterns=api
This informs Jest, the plugin used for testing, that tests located under directoried with names matching the term "api" must be ignored.

In order to run API tests, the following specifications are made:
> --runInBand --testPathPattern=api
This informs Jest to execute the tests in order and to execute only tests located under directoried with names matching the term "api".

## Gradle Scripts

Gradle was used to compose multiple scripts that have distinct roles. Some are used by Jenkins on the job to act as a pipeline while others were used to simplify debbuging. The following list presents the main scripts and thir role:

1. install_dependencies: Install dependencies from package.json.
2. run_build: Deletes the current dist directry and transpiles the project into a new one
3. generatePopularPosts: Generates popular posts.
4. generate_docs: Generates JSDoc documentation for all files under the src directory.
5. set_db: Creates a new database and migrates it.
6. run_backend: Starts the backend of the system.
7. api_test_set: Setups the databse for api tests
8. run_unit_test: Runs all unit tests. There is another command that generates reports.
9. run_api_test: Runs all api tests. There is another command that generates reports.