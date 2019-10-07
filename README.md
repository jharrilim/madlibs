# MadLibs

An entirely useless MadLibs library that demonstrates how you can process tagged template strings.

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
