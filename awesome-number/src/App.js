import React from 'react';
import './App.css';
import Number from './Number'
import Description from './Description'


const App = () => {
  const [state, setState] = React.useState(0);
  const [description, setDescription] = React.useState('API Description');


  //useEffect instead of componentDidMount
  React.useEffect(() => {
    fetch(`http://numbersapi.com/${state}?json`)
    .then(response => response.json())
    .then(data => 
      setDescription(`${data.text}`))
    .catch(err => console.log(err))
  }, [state]);
  
  return <div style={{
    height: '100vh'
  }}>
    <Number onChange={setState} state={state} />
    <Description description={description} />
  </div>
}

export default App;
