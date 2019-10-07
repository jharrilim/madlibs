# MadLibs

[![Build Status](https://dev.azure.com/josephharrisonlim/josephharrisonlim/_apis/build/status/jharrilim.madlibs?branchName=master)](https://dev.azure.com/josephharrisonlim/josephharrisonlim/_build/latest?definitionId=4&branchName=master)
![Version](https://img.shields.io/npm/v/jharrilim/madlibs?style=flat-square)
![Downloads](https://img.shields.io/npm/dt/jharrilim/madlibs?style=flat-square)

> An entirely useless MadLibs library that demonstrates how you can process tagged template strings.

## Install

```sh
npm i @jharrilim/madlibs
```

## Usage

```ts
import { MadLibs } from '@jharrilim/madlibs';

const madlibs = new MadLibs({
    adjective: ['speedy'],
    noun: ['sloth', 'ocean'],
    'verb ending in ing': ['flying'],
});

console.log(madlibs.compile`
The ${"adjective"} ${"noun"} was ${"verb ending in ing"} over the ${"noun"}
`.join(''));

// Output: The speedy sloth was flying over the ocean
```
