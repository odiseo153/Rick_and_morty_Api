import React from 'react'

function ShowData( {nombre,imagen,creacion,origin,ubicacion,status} ) {
  return (
    <div>
     <div className="card">
      <div className="info">
       <div className="name">{nombre}</div>
        <div className="bio">
          Created:
          {creacion}
          <br />
          <hr />
          Origen:{origin}
          <br />
          <hr />
          ubicacion:{ubicacion}
          <hr />
          State:{status}
        </div>
      <div>
    </div>
   </div>
    <div className="photo" style={{
      height: '100%',
      width: '100%',
      backgroundImage: `url(${imagen})`,
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      bottom: 0,
      backgroundSize: '100% 100%',
      borderRadius: '10px',
      transition: ' 0.7s'
    }}>

    </div>
   </div></div>
  )
}

export default ShowData
