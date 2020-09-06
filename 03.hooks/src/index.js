import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


const App = () => {

  const [visible, setVisible] = useState(true);
  const [value, setValue] = useState(1);

  if(visible){
    return(
      <div>
        <button onClick={() => setVisible(v => !v)}>
          hide/show
        </button>
        <button onClick={() => setValue(v => v + 1)}>
          +
        </button>

        <PlanetInfo id={value}/>
      </div>
    )
  }else{
    return(
      <button onClick={() => setVisible(v => !v)}>
      hide
    </button>
    )
  }
};

const usePlanetInfo = (id) => {
  const [name, setName] = useState('name');

  useEffect(
    () => {
      let cancelled = false;
      fetch(`https://swapi.dev/api/planets/${id}`)
      .then(res => res.json())
      .then(data => !cancelled && setName(data.name));

      return () => cancelled = true
    }, [id]
  )
  return name;
}

const PlanetInfo = ({id}) => {
  const name = usePlanetInfo(id)


  return (
      <div style={{marginTop: '20px'}}>
        {id} - {name}
      </div>
  )
}

ReactDOM.render(<App/>,
  document.getElementById('root')
);
