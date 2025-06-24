
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';//Behövs kanske inte
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Card from './components/Card.jsx'
import Welcome from './components/Welcome.jsx'

function App() {
  const [name, setName] = useState(null)

    useEffect (()=>{
        const storedName = sessionStorage.getItem("name");
        
    if (storedName) {
        setName(storedName)
    } 

}, []);

  return (
    
    <div className="root">
    <NavBar  />
    <Welcome name= {name} />
    <Card setName = {setName}
    name={name}/>
    <Footer />
    </div>
    
  )
}

export default App;
