<?php

function getNumOfUniqueCharacters($str, $n) {
    // https://stackoverflow.com/a/4601066
    $array = str_split(strtolower($str));
    $symbolCounts=[];
    foreach ($array as $char) {
        if (!array_key_exists($char,$symbolCounts)) {
            $symbolCounts[$char]=0;
        }
        ++$symbolCounts[$char];
    }
    $res=0;
    foreach ($symbolCounts as $count) {
        if ($count>=$n) {
            ++$res;
        }
    }
    return $res;
}

//Examples:
echo "Task 1\n";
echo getNumOfUniqueCharacters('A1B2C3', 2),"\n"; // 0
echo getNumOfUniqueCharacters('A1a1C1', 2),"\n"; // 2, because A and 1 both occur 2 or more times.
echo getNumOfUniqueCharacters('Alabama', 3),"\n"; // 1

