# My Pokédex

Welcome new Pokémon trainers! Here you will find everything you need to prepare you for the battles you will face along the way and maybe even work your way up to be a legendary Gym Leader! As part of your training, you've been tasked with adding some functionality to the Pursuit Town Gym automated systems.

To complete this project, you will need to write a number of difficult functions that will help your Pokémon gain experience on your way to your first Gym Badge. Use the Pokémon data located in your Pokédex (`data` folder) to aid you in completing your tasks. 

## Project setup

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your local directory.

```
npm test
```

This will run the test output once.

### Test watcher

If you'd like, you can have the tests run constantly. This means that each time you save your file, your tests will re-run. To do so, you can run the following:

```
npm run watch
```

Follow the on-screen prompts to exit out of the constant runner.

### Run test files individually

There are a lot of tests that are contained in this project. You can run a single test file individually by putting the name of the file after `npm test`. You can even only put part of the file name.

```
npm test facts
```

### Run tests individually

_After choosing a specific file to run,_ you can also specific which test you want to run, specifically. Add `.only` after either `test` or `describe` for the specific test you'd like to run.

```js
test.only("should return the names of pokemon with matching type", () => {
```

This will either run the specific `test` or, in the case of adding `.only` to a `describe`, all of the tests for a specific function.

> **NOTE:** Don't forget to remove this after you get the test to pass!

### Run file

If you want to manually test out your file, you can do so by running the following command.

```
node index.js
```

The output will be printed to your terminal.

## Instructions

### Project overview

Each file under the `src/` directory contains two or three functions that you will need to complete. Follow the JSDoc comments and tests to understand what needs to be completed.

Each of these functions is quite challenging. You will need to apply everything you've learned to solve each one.

Before you start coding, remember Polya's problem solving methodology; begin by _understanding the problem,_ then _devise a plan._ Only after accomplishing those two steps should you start writing your code.
