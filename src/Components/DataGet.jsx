import { useState,useEffect } from 'react'
import React from 'react'
import ShowData from './ShowData'

export default function DataGet() {

const [datas,SetData] = useState([])
const [pagina,SetPagina] = useState(0)


  const refresh = ()=>
  {
    
    let url =`https://rickandmortyapi.com/api/character/?page=${pagina}`
    fetch(url)
    .then(res => res.json())
    .then(data => SetData(data.results))
    .catch(err => console.error(err));
  }      

refresh()

return (
 <div>

  <br />
  <h2 style={{color:"red"}}>Seleccione una Pagina</h2>

<div className='campo'>
<label>!!MAX 41</label> <br />
<input type='number' min='1' max='41' id='campo' onChange={e =>SetPagina(e.target.value)}/>
</div>


    <div> 

        {datas.map(e=>
        {

     return( 
          <div id='com'>
             <ShowData key={e.id}
              nombre={e.name}
              imagen={e.image} 
              creacion={e.created}
              origin={e.origin.name}
              ubicacion={e.location.name}
              status={e.status}
              />
          </div>
     )
        })}

    </div>

</div>
  )
}

