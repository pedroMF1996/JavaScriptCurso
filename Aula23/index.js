/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> true "o valor verdadeiro"

Falsy
    false
    0
    '',"",``
    null
    undefined
    NaN
 */

function falaOi() {
    return 'Aoba';
}

const vaiExecutar = 'aoba';

console.log(vaiExecutar && falaOi())