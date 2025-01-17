const fs = require('fs');

let rawdata = fs.readFileSync('names.json');
let names = JSON.parse(rawdata);
let output = "";

names.forEach(function (item) {
	var link = item.link.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");
	link = link.split("?")[0];
	ghUsername = link.split("github.com/")[1];
	if(ghUsername != undefined) {
		if(ghUsername.length > 6) { //basic sanity check
			output += `a[href*="${ghUsername.replace(/\/+$/, '')}"], `; //remove the trailing backslash
		} else {
			return;
		}
	}
	else {
		if(link.length > 6) { //basic sanity check
			output += `a[href*="${link}"], `;
		} else {
			return;
		}
	}
});

console.log(output.slice(0, -2));
console.log("\{background-color: Crimson;\}");