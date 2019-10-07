import { mapWeave } from './map-weave';

interface Lookup<T> { [key: string]: T[] }

const nouns = ['dude', 'cat', 'apple', 'car', 'lamp', 'pidgeon'];
const verbsEndingInIng = ['walking', 'talking', 'barking', 'eating', 'sniffing', 'coughing'];
const adjectives = ['purple', 'humongous', 'flappy', 'whimsical', 'opaque', 'stinky'];

const randItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

export class MadLibs {

    constructor(public tagLookup: Lookup<string> = {
        noun: nouns,
        verb: verbsEndingInIng,
        adjective: adjectives
    }) { }

    get randomLibs() {
        return mapWeave(t => randItem(this.tagLookup[t]));
    }

    get compile() {
        const tagCount: { [tag: string]: number } = {};

        const replacer = (t: string) => {
            tagCount[t] = typeof tagCount[t] !== 'undefined' ? ++tagCount[t] : 0;
            return this.tagLookup[t][tagCount[t]];
        }
        return mapWeave(replacer);
    };
}

export default MadLibs;
