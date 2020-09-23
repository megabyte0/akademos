function addDashes(num) {
    return num.toString().replace(/([13579]+)/g,'-$1-').replace(/^-|-$/g,'');
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_string_as_a_parameter
    //https://stackoverflow.com/a/32516190
}

console.log(addDashes(645545965)); // '64-55-4-59-6-5'
console.log(addDashes(411222333)); // '4-11-222-333'
console.log(addDashes(81229576231)); // '8-1-22-957-62-31'
