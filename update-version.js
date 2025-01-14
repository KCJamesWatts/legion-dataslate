// UPDATE_VERSION.JS
// Author: Keith Watts (keith.c.j.watts@gmail.com)

// the require directive isn't supported for module packages so
// we need to register the directive before setting up the
// FileSystem (fs) library.
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require('fs');

const packageJson = await import("./package.json", {
    assert: {type: "json" }
});

// get the current version and split it into version components.
const currentVersion = packageJson.default.version;

let [major, minor, patch, build] = currentVersion.split(".");
major = parseInt(major ?? 0);
minor = parseInt(minor ?? 0);
patch = parseInt(patch ?? 0);
build = parseInt(build ?? 0);

// get the increment type, if not provided then default to 'build'.
let incrementType = process.argv[2] ?? 'build';
const allowedIncrementTypes = ['major', 'minor', 'patch', 'build'];

// check that the increment type is a valid option.
if (!allowedIncrementTypes.includes(incrementType))
    throw new Error('Argument increment type (' + incrementType + ') is not valid.  Expected major, minor, patch or build.');

// increment the version for the given type and assign the new value to 'newValue'.
let newValue;
eval('newValue = ++' + incrementType);

// if incrementing anything other than build then set all lower version
// components to 0.
if (incrementType !== 'build') {
    const indexOfType = allowedIncrementTypes.indexOf(incrementType);
    for (let idx=indexOfType+1; idx < allowedIncrementTypes.length; idx++) {
        eval(allowedIncrementTypes[idx] + ' = 0');
    }
}

// build the new version.
let newVersion = `${major}.${minor}.${patch}.${build}`;

// write the new version back to the file.
packageJson.default.version = newVersion;
fs.writeFileSync('./package.json', JSON.stringify(packageJson.default, null, 2));

// show the updated version number.
console.log('Version updated: ' + newVersion);