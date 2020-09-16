import React, { useState, useEffect, useCallback, useMemo } from 'react';
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

const getPlanet = (id) => {
  return fetch(`https://swapi.dev/api/planets/${id}`)
  .then(res => res.json())
  .then(data => data);
}

const useRequest = (request) => {
const initialState = useMemo(() => ({
  data: null,
  loading: true,
  error: false
}), [])

  const [data, setData] = useState(initialState);
  
  useEffect(() => {
      setData(initialState)
      let cancelled = false;
      request()
      .then(data => !cancelled && setData({
        data,
        loading: false,
        error: null
      }))
      .catch(error => !cancelled && setData({
        data: null,
        loading: false,
        error
      }))
      return () => cancelled = true
    }, [ request, initialState ])
  return data;
}

const usePlanetInfo = (id) => {
  const request = useCallback(() => getPlanet(id), [id]);
  
  return useRequest(request)
}

const PlanetInfo = ({id}) => {
  const {data, loading, error} = usePlanetInfo(id)

  if(loading){
    return  <div>loading</div>
  }
  if(error){
    return  <div>error</div>
  }
  return (
      <div>
        {id} - {data.name}
      </div>
  )
}

ReactDOM.render(<App/>,
  document.getElementById('root')
);
