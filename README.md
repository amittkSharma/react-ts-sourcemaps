# react-ts-sourcemaps

[![](https://img.shields.io/npm/v/@amittksharma/react-ts-sourcemaps.svg)](https://www.npmjs.com/package/@amittksharma/react-ts-sourcemaps)
[![](https://img.shields.io/npm/dm/@amittksharma/react-ts-sourcemaps.svg)](https://www.npmjs.com/package/@amittksharma/react-ts-sourcemaps)
[![](https://img.shields.io/npm/l/@amittksharma/react-ts-sourcemaps.svg)](https://img.shields.io/npm/l/@amittksharma/react-ts-sourcemaps)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Introduction

react-ts-sourcemaps package is a multi-purpose package performing the following tasks:

- Bootstrapping and building an react app.
- Attaching the source maps to the react app.
- Attaching some of the meta information from GIT repository to the "window" variable.

## Installation

```installation
npm i @amittksharma/react-ts-sourcemaps
```

## Usage

```json
"scripts" : {
  "start": "react-ts-sourcemaps-git --actionType start --craVersion cra",
  "build": "react-ts-sourcemaps-git --actionType build --craVersion cra"
}
```

## API

| Name       | Type   | Required | Description                                                                                                                                                                        | Default |
| ---------- | ------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| actionType | string | yes      | Action that needs to be initiated. actionType takes either 'start' or 'build'. Default value is 'start'                                                                            | start   |
| craVersion | string | optional | It is the create react app version name used in the application. craVersion takes either 'cra' or 'cra2'. Default value is 'cra'. (cra: Create React App, cra2: Create React App2) | cra     |

## GIT Information

This package gives developer liberty to check some of the meta information about the deployed package from "window" variable of the html page. The meta information that is attached is as follows:

- Branch Name
- Commit Hash
- Node Environment Variable
- Version
