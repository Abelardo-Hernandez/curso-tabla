const { crearTabla } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

            
            
// for (let i = 1; i <= 10; i++){
//     for (let j = 1; j <= 10; j++) {
//         console.log(i, ' x ', j, ' = ', i*j);
//     }
// }
//let num = 4;

console.clear();
// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');
// console.log(base);
//console.log(process.argv );
console.clear();
//console.log(argv);
//console.log('base: yargs', argv.b);




crearTabla( argv.b, argv.l, argv.h )
    .then((nombreArchivo) => console.log(nombreArchivo.rainbow, 'creado'))
    .catch((err) => console.log(err));

