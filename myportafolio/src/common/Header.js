import "./Header.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import runway from "../assets/runway.jpg";

function header() {
  return (
    <div>
      <header className="App-header">
        <div className="blackbox" >
          <ul>
            <li> <a> <h2>PG</h2> </a></li>
            <li> <a> Portafolio</a></li>
            <li> <a> Blog Personal</a></li>
            <li> <a> Media</a></li>
          </ul>
        </div>
        <div>
          <img src={runway  } className="" alt="" />
        </div>  
      </header>
    </div>
  );
}

export default header;
