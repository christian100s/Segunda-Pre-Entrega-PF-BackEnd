import mongoose from 'mongoose';

export const init = async ()=>{
    try {
        const URI = '' //agregar la URI

        await mongoose.connect(URI);
        console.log('La base de datos se ha conectado correctamente:🙌');
    } catch (error) {
        console.error('Ha surgido un Error', error.message);
    }
};
