
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';


function App() {
  
  const times = [
    {
      nome: 'Back-end',
      corPrimaria: '#9CCBCC',
      corSecundaria: 'rgba(156, 203, 204, 0.20)',
    },
    {
      nome: 'Front-end',
      corPrimaria: '#A69ACB',
      corSecundaria: 'rgba(166, 154, 203, 0.20)',
    },
    {
      nome:'Programação',
      corPrimaria: '#EE7521',
      corSecundaria: 'rgba(238, 117, 33, 0.20)',
    },
    {
      nome:'Mobile',
      corPrimaria: '#EDCEDD',
      corSecundaria: 'rgba(237, 206, 221, 0.20)',
    },
  ]

  const [colaboradores, setColaboradores ] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);

  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time=>time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      {times.map(time=> <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    </div>
  );
}

export default App;
