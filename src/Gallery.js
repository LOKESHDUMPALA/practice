///
const Gallery = (prop) =>{
    return(
        <>
            <div className="row">
           {
            prop.data.map(
                (images) => {
                    return(
                            <div key={images.id} className="col-md-2"> 
                             <img src={`https://farm${images.farm}.staticflickr.com/${images.server}/${images.id}_${images.secret}_m.jpg`} alt="img" height="200" width="250"/>
                        
                    </div>)
            
                    
                }
            )
           }
           </div>
        </>
    )
}

export default Gallery;
