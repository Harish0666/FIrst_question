const fs=require('fs');
const cheerio = require("cheerio");


let htmlkadata=fs.readFileSync("html and css\index.html");
let ch =  cheerio.load(htmlkadata);
let h1kadata=ch("h1").text();
console.log(h1kadata);