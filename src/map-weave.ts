export const mapWeave = (
    mapArg: (arg: any, i: number) => any = a => a,
    mapTemplate: (template: string, i: number) => string = t => t
) => (templateStrings: TemplateStringsArray, ...templateStringArguments: any[]) =>
        templateStrings
            .flatMap(
                (v, i) => i < templateStringArguments.length
                    ? [mapTemplate(v, i), mapArg(templateStringArguments[i], i)]
                    : [mapTemplate(v, i)]
            );
