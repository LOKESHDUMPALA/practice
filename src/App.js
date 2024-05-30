import { useState } from "react";
import axios from 'axios';
import Gallery from './Gallery';

const apikey = "636e1481b4f3c446d26b8eb6ebfe7127"
function App() {
  let [search,setsearch] = useState("");
  let [data,setdata] = useState([]);
   let changehandler = (e)=> {
          setsearch(e.target.value);
   }
   let submithandler =async (e)=>{
    e.preventDefault();
      await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then((response)=> { 
        setdata(response.data.photos.photo)
       })
    
   }
  return (
      <div>
        <center>
          <h2>Gallery Snapshots</h2>
            <form onSubmit={submithandler}>
              <input type="text" value={search} onChange={changehandler}/><br/>
              <input type="submit" name="search"/>
            </form>
            <br/>
            {data.length>=1?<Gallery data={data}></Gallery>:<h2>no data</h2>}
        </center>
      </div>
  )
}

export default App;
