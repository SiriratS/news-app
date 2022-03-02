# News application created by vue version 2 generate by [vue-cli](https://cli.vuejs.org/)

## Overview

![overview](https://user-images.githubusercontent.com/29428218/156417804-bda6c643-694e-4d4b-93d9-f7671ee2b41a.gif)

## Feature
- Display news headline from multiple news sources, country
- Able to see more news detail and link to original sources
- Support filter news headline by keyword, sources, country and category
- Error handling
  - Wrong route website
  - General http request error
  - News not found

## Prerequisite
- [node.js](https://nodejs.org/en/)
- run `npm install -g yarn` 

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

### Unit test
```
yarn run test:unit
```
- unit test with generate code coverage report
```
yarn run test:unit --coverage 
```
- unit test with option watch and generate code coverage report
```
yarn run test:unit --watchAll --runInBand --coverage 
```

### End to end test
```
yarn run test:e2e
```

## Commit message guide
- angular conventional commits https://www.conventionalcommits.org/en/v1.0.0-beta.4/

## Dependencies
- [vuetify](https://vuetifyjs.com/en/) - UI Framework
- [vue-router](https://router.vuejs.org/) - Router
- [vuex](https://vuex.vuejs.org/) - State management
- [axios](https://github.com/axios/axios) - Promise based HTTP client  
- [jest](https://jestjs.io/) - Unit testing
- [cypress](https://docs.cypress.io/) - Javascript automated test tools
- [eslint](https://eslint.org/) - Javascript linter following [airbnb's standard guide](https://github.com/airbnb/javascript)
- [typescript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [sass](https://sass-lang.com/) - CSS framework

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
