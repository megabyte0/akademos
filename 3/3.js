function autocomplete(input,candidates) {
    var map=preCompute(candidates);//can call one time at all
    return autocompleteInner(input,map);
}

function preCompute(array) {
    var res={};
    array.forEach(function (str) {
        var strLower=str.toLowerCase();
        for (var i=1;i<=strLower.length;++i) {
            var s=strLower.slice(0,i);
            if (res[s]===undefined) {
                res[s]=[];
            }
            res[s].push(str);
        }
    });
    return res;
}

function autocompleteInner(input,map) {
    var s=input.replace(/[^A-Za-z]/g,'');
    while (s.length && (map[s]===undefined)) {
        s=s.slice(0,-1);
    }
    return map[s]?map[s].slice(0,5):[];
}
