import { MadLibs } from '../src';

describe('mad-libs', () => {
    describe('MadLibs', () => {
        describe('#constructor', () => {
            it('does not throw on construction with 0 args', () => {
                expect(() => new MadLibs()).not.toThrow();
            });
            it('constructs with default values nouns, verbs, and adjectives when given 0 args', () => {
                const madlibs = new MadLibs();

                expect(madlibs.tagLookup.noun).toBeDefined();
                expect(madlibs.tagLookup.verb).toBeDefined();
                expect(madlibs.tagLookup.adjective).toBeDefined();
                expect(madlibs.tagLookup.noun instanceof Array).toBe(true);
                expect(madlibs.tagLookup.verb instanceof Array).toBe(true);
                expect(madlibs.tagLookup.adjective instanceof Array).toBe(true);
                expect(madlibs.tagLookup.noun.length).toBeGreaterThan(0);
                expect(madlibs.tagLookup.verb.length).toBeGreaterThan(0);
                expect(madlibs.tagLookup.adjective.length).toBeGreaterThan(0);
            });

            it('allows a tag to words map to be passed in', () => {
                const madlibs = new MadLibs({
                    meow: ['wowzers'],
                    woof: ['woah']
                });

                expect(madlibs.tagLookup.meow).toContain('wowzers');
                expect(madlibs.tagLookup.woof).toContain('woah');
            });
        });

        describe('#randomLibs', () => {
            it('can compile a sentence using tagged templates', () => {
                const madlibs = new MadLibs();
    
                const words = madlibs.randomLibs`Hello, ${"noun"}`;
                const sentence = words.join('');
    
                expect(words.length).toBe(3);
                expect(/Hello, noun/.test(sentence)).toBe(false);
                expect(/Hello, \w/.test(sentence)).toBe(true);
            });
    
            it('can take a sentence that starts with a tag', () => {
                const mad = new MadLibs();
    
                const sentence = mad.randomLibs`${"noun"} is what I am. ${"verb"} is what I do.`.join('');
    
                expect(/noun is what I am\. verb is what I do\./.test(sentence)).toBe(false);
                expect(/^[\w]+ is what I am\. [\w]+ is what I do\.$/.test(sentence)).toBe(true);
            });
    
            it('can take a sentence that ends with a tag', () => {
                const madlibs = new MadLibs();
    
                const sentence = madlibs.randomLibs`hi ${"noun"}`.join('');
    
                expect(/^hi [\w]+/.test(sentence)).toBe(true);
            });
        });

        describe('#compile', () => {
            it('puts the words in the correct order', () => {
                const madlibs = new MadLibs({
                    pronoun: ['John', 'Mary'],
                    city: ['Toronto', 'Montreal']
                });

                const sentence = madlibs
                    .compile`${"pronoun"} lives in ${"city"}, however, ${"pronoun"} lives in ${"city"}.`
                    .join('');
                
                expect(sentence).toEqual("John lives in Toronto, however, Mary lives in Montreal.");
            });
        });
    });
});
