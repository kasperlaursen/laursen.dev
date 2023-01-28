/* 
* Small DENO script to generate css variables from TailwindCSS color object.
*/
import jsonfile from "./tailwind-colors.json" assert { type: "json" };
import * as colormath from 'https://deno.land/x/colormath/mod.ts';

console.log(jsonfile)

const PREFIX = "--color-";
let css_sting = "";

Object.entries(jsonfile).forEach(([colorName, value]) => {
    css_sting += `
        /* ${colorName} */
        `
    if (typeof value === "object") {
        Object.entries(value).forEach(([variantName, hexColor]) => {
            const rgbColor = colormath.hex.toRgb(hexColor);
            css_sting += `
            ${PREFIX}${colorName}-${variantName}: ${rgbColor.join(" ")};
            `
        })
        css_sting += `

        `
    } else {
        const rgbColor = colormath.hex.toRgb(value);
        css_sting += `
        ${PREFIX}${colorName}: ${rgbColor.join(" ")};
        
        `
    }}
)

await Deno.writeTextFile("./varaibles.css", css_sting);