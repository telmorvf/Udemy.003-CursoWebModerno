import React from 'react'
// ou import React { Fragment }from 'react' 
// assim retiro o React do Export

export default props => [
    <h1 key='h1'>Bom Dia {props.nome} !</h1>,
    <h2 key='h2'>Até Breve</h2>   
]

    // OU  <>
    //       <h1>Bom Dia {props.nome} !</h1>
    //       <h2>Até Breve</h2> 
    //     </>

    // export default props => 
    //     <React.Fragment>
    //         <h1>Bom Dia {props.nome} !</h1>
    //         <h2>Até Breve</h2>   
    //     </React.Fragment>
    
    // export default props => 
    //     <div>
    //         <h1>Bom Dia {props.nome} !</h1>
    //         <h2>Até Breve</h2>   
    //     </div>