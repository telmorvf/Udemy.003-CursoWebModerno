function tratarErroELancar(erro){
    //throw new Error('...');
    //throw 10;
    //throw true;
    //throw mensagem;
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date()
    }
}

function imprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!' )
    }
    catch (e){
        tratarErroELancar(e)    
    }
    finally{
        console.log('Finally')
    }
}

//const obj = {name: 'Roberto' }        // ROBERTO!!!
const obj = {nome: 'Roberto' }          // ERRO e mostra o objeto como está no throw
imprimirNomeGritando(obj)