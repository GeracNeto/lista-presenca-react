import './style.css'

export function Card({name, time}){
    // Chamando as propriedades do componente Card por meio do props
    return(
        <div className='card'>
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    )
}

// Outra fomrma de fazer é utilizando o props. Do jeito feito acima, foi desestruturado o props, assim, é possível utilizar apenas os nomes das propriedades

/* export function Card(props){
    // Chamando as propriedades do componente Card por meio do props
    return(
        <div className='card'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}

*/
