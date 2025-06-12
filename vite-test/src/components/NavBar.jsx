import BellPopover from './Popover'


function NavBar ({ setName,name }) {
   const askForName = () => {
        
        const newName = prompt("Vad heter du?")
        if (newName) {
            sessionStorage.setItem("name", newName)
            setName(newName)
        }
    }
    return (
<>

<div className="NavBar">
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">FunFacts</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        
        <BellPopover name={name} />
        <button onClick={(askForName)}>Berätta vem du är</button>
      </ul>
    </div>
  </div>
</nav>
</div>
</>
    )
}

export default NavBar;