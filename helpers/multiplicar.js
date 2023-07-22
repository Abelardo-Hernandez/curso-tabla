const colors = require('colors');
const fs = require('fs');

const crearTabla = async( base = 5, l, h ) => {

    try {
        if (l) {
            console.log('========================'.rainbow);
            console.log('    tabla del'.yellow, base);
            console.log('========================'.rainbow);  
        }
        

        let salida = '';
        let consola = '';

        for (let i = 1; i <= h; i++) {

            salida += `${base} x ${i} = ${i*base}\n`;
            consola += ` ${base} ${'x'.red} ${i} ${'='.red} ${i*base}\n`;
        }
        
        if (l) {
            console.log(consola)
        }

    // fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
    //     if(err) throw err;
    // } )
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida );

        return `tabla-${base}.txt`;

    //    let nombreArchivo = await ' ';
    //    nombreArchivo += `tabla-${base}.txt`;
    //    return console.log(nombreArchivo);
    } catch (error) {
        return error;
    }

}

// Exportacion en NODE
module.exports = {
    crearTabla,
}