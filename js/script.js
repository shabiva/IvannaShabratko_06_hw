let point = 0;

let a = prompt('Сколько будет 2+2?') ;

if (a === '4') {
    point += 10;
} else {
    point += 0;
}

let b = prompt('Солнце встает на востоке?','');

if (b === 'Да' || b === 'да') {
    point += 10;
} else {
    point += 0;
}

let c = prompt('Сколько будет 5/0?','');

if (c === '0') {
    point += 10;
} else {
    point += 0;
}

let d = prompt('Какого цвета небо?','');

if (d === 'голубое' || d === 'Голубое') {
    point += 10;
} else {
    point += 0;
}

let e = prompt('Какой правильный ответ на главный вопрос жизни, вселенной и всего такого. ','');

if ( e === '42') {
    point += 10;
} else {
    point += 0;
}

alert('Твой результат: ' + point + ' Ты молодец!' );
