//domkniecia - funkcje wewnętrzne (zadeklarowane wewnątrze domknięcia)
// pamiętające środowisko w których zostały utworzone

function makeAdder(x) {
    function add(y) {
        return y + x;
    };

    return add;
}

var plusOne = makeAdder(1);  // x=1, zmienna plusOne przechowuje teraz funkcję wewnętrzą add
var PlusTen = makeAdder(10); // x=10,   -,,-

plusOne(3);  // y=3,  wczesniejszy x = 1  --> po wykonaniu funkci add  3 + 1 --> 4
plusOne(41); // y=41 + x=1 --> 42

plusTen(13); // y=13 + x = 10  --> 23



/////////////////////////////////////////////////////////////////////////

//zmiana wielkości czcionki

function makeSizerFont(size) {
    return function(){
        documrnt.body.style.fontsize = size + 'px';
    };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

