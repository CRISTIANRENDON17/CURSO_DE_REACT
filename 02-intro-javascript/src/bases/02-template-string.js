// template string

const name = 'Cristian';
const lastname = 'Rendon';

// const fullName = name + ' ' + lastname;

const fullName = `${name} ${lastname}`;

console.log(fullName);

function getSaludo(name){
    return 'Hola ' + name;
}

console.log(`Este es un texto ${getSaludo(name)}`);