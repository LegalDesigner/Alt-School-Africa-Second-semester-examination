
import "./error.css"
import image from "./Screenshot 2022-10-30 at 7.07.42 PM.png"


function NotFound() {
    return (
        <div className="App-not-found">
            <div className="App-err-image">
          <img src={image} alt="err" height={200} width={200} />
          <h4> 404 Error, Page Not Found </h4> 
            <p>Oopps! sorry, we could not find the page you are looking for, please try again.</p>
          </div>
          </div>

          
           
    );
}
 
export default NotFound;