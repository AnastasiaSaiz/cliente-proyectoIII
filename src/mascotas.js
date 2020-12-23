const Mascotas =(props) =>{
    const fichaMascota = props.mascotas.map(mascota=>{
        return <li>
            {mascota.nombre}
            {mascota.edad}
            {mascota.raza}
            {mascota.tipo}
            {mascota.alergias}
            <button onClick={editarMascota}>Editar ficha mascota</button>
        </li>
    })
    return <ul>
        {fichaMascota}
    </ul>
}

export default Mascotas;