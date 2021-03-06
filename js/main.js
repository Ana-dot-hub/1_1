console.log("" + 1 + 0); //10 (Сложение строк с помощью бинарного плюса, если хотя бы один операнд это строка, другие приобразовываются в строку)

console.log("" - 1 + 0); // -1 (Предыдущее правило работает только с бинарным +, остальные операторы преобразуют операнды в числа)

console.log(true + false); // 1 (бинарный + пребразовал false в 0, true в 1)

console.log(6 / "3"); // 2 (так как все операторы кроме бинарного + преобразуют операнды в числа)

console.log("2" * "3"); // 6 (same rule)

console.log(4 + 5 + "px"); // 9px (сначала считаем 4+5 так как действие было первым, затем наше число пребразовывается в строку из-за строки "px". )

console.log("$" + 4 + 5); // $45 (строка идет первой, поэтому числа пребразуются в строки)

console.log("4" - 2); // 2 (бинарный - преобразует строку в число)

console.log("4px" - 2); // NаN ("не число" - число = NaN)

console.log(7 / 0); // Infinity (деление на ноль)

console.log(" -9 " + 5); //  -9 5 (бинарный + и строка)

console.log(" -9 " - 5); // -14 ( - преобразовал строку в число)

console.log(null + 1); // 1 (0+1)

console.log(undefined + 1); // NaN (undefined = значение не присвоено)

console.log(" \t \n" - 2); // -2 (\t и \n относятся к символьным классам (\t - табуляция и \n - перевод строки) и приравниваются к 0)