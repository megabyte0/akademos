<?php

function carry($arr) {
    //https://stackoverflow.com/questions/12832557/divide-integer-and-get-integer-value
    $arrCopy=$arr;//https://stackoverflow.com/a/1532632
    $hasNonZero=true;
    $res=0;
    while ($hasNonZero) {
        $hasNonZero=false;
        $lastDigitSum=0;
        foreach ($arrCopy as &$elem) {
            $lastDigitSum+=$elem%10;
            $elem=intdiv($elem,10);
            if ($elem) {
                $hasNonZero=true;
            }
        }
        $res+=intdiv($lastDigitSum,10);
    }
    return $res;
}

echo carry([123, 456]),"\n"; // 0
echo carry([555, 555]),"\n"; // 3
echo carry([123, 594]),"\n"; // 1

//Support of arbitrary number of operands will be a plus:
echo carry([123, 123, 804]),"\n"; // 2

