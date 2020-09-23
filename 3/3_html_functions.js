if (window.addEventListener) {
    window.addEventListener('load', onLoad, false);
} else { // IE
    window.attachEvent('onload', onLoad);
}

var wordsMap;

function onLoad() {
    document.getElementById('autocomplete').addEventListener('keyup',key);
    document.getElementById('words').addEventListener('change',wordsChange);
    preComputeOuter(words);
    document.getElementById('words').value=words.join('\n');
}

function key(event) {
    //console.log(event.target.value,event);
    var s=event.target.value;
    console.time('autocomplete');
    var res=autocompleteInner(s,wordsMap);
    console.timeEnd('autocomplete');
    document.getElementById('result').innerText='['+(res.toString())+']';
}

function preComputeOuter(array) {
    console.time('preCompute');
    wordsMap=preCompute(array);
    console.timeEnd('preCompute');
}

function wordsChange(event) {
    //console.log(event.target.value.split('\n'));
    preComputeOuter(event.target.value.split('\n'));
}