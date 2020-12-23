import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Cabecera from "./cabecera";
import Mascotas from "./mascotas";



function App() {

  const [mascotas, setMascotas] = useState([]);
  const [edad, setEdad] = useState("");
  useEffect(() => {
    console.log(edad);
  }, [edad])


  const [raza, setRaza] = useState("");
  useEffect(() => {
    console.log(raza);
  }, [raza])

  const [alergias, setAlergias] = useState("");
  useEffect(() => {
    console.log(alergias);
  }, [alergias])

  const [tipo, setTipo] = useState("");
  useEffect(() => {
    console.log(tipo);
  }, [tipo])

  const [nombre, setNombre] = useState("");
  useEffect(() => {
    console.log(nombre);
  }, [nombre])


  const [animal, setAnimal] = useState([]);
  useEffect(() => {
    console.log(animal);
  }, [animal])

  const mascota = {
    nombre,
    edad,
    raza,
    alergias,
    tipo
  }

  useEffect(() => {
    fetch("http://localhost:3000/mostrarmascotas")
      .then((res) => res.json())
      .then((res) => {
        setMascotas(res)
      });
  }, []);

  //metodo PUT modificar ficha mascota//

  const editarMascota = () => {
    fetch("http://localhost:3000/editarmascota", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(mascota)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
      });
  }

  const mostrarMascotas = mascotas.map((mascota) => {
    return (<div>
      <h4>{mascota.nombre}</h4>
      <p>Alergias: {mascota.alergias}</p>
      <p>Edad: {mascota.edad}</p>
      <p>Tipo de animal: {mascota.tipo}</p>
      <p>Raza: {mascota.raza}</p>
      <button onClick={editarMascota}>Editar ficha mascota</button>
    </div>)

  })





  const registrarMascota = () => {
    fetch("http://localhost:3000/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(mascota)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
      });
  };






  const handleChange = (e) => {
    setNombre(e.target.value);
  }

  const cambiarEdad = (e) => {
    setEdad(e.target.value);
  }

  const nuevaEdad = (e) => {
    setEdad(e.target.value);
  }

  const cambiarRaza = (e) => {
    setRaza(e.target.value);
  }
  const cambiarAlergias = (e) => {
    setAlergias(e.target.value);
  }
  const nuevasAlergias = (e) => {
    setAlergias(e.target.value);
  }
  const cambiarTipo = (e) => {
    setTipo(e.target.value);
  }
  return (
    <BrowserRouter>

      <Route path="./inicio">
        <Cabecera />
      </Route>
      <div class="fichaMascota">
        <h1>Ficha mascota</h1>
        <h1>{mostrarMascotas}</h1>
        <label for="nombre">Nombre</label>
        <input type="text" value={nombre} onChange={handleChange} />
        <label for="edad">Edad</label>
        <input type="text" value={edad} onChange={cambiarEdad} />
        <label for="raza">Raza</label>
        <input type="text" value={raza} onChange={cambiarRaza} />
        <label for="alergias">Alergias</label>
        <input type="text" value={alergias} onChange={cambiarAlergias} />
        <label for="tipo">Tipo</label>
        <input type="text" value={tipo} onChange={cambiarTipo} />
        <button onClick={registrarMascota}>Registrar mascota</button>
        <h4>Ficha modificada mascota</h4>
        <label for="edad">nuevaEdad</label>
        <input type="text" value={edad} onChange={nuevaEdad} />
        <label for="alergias">nuevasAlergias</label>
        <input type="text" value={alergias} onChange={nuevasAlergias} />
        <button onClick={editarMascota}>Editar ficha mascota</button>
      </div>
    </BrowserRouter>
  );
}

export default App;
