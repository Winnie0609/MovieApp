import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function CastCorousel({ Cast }) {
    const items = (Cast.filter(item => item.profile_path)).map((item) =>
      <div className="carouselItem" style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"10px"}}>
      <img 
          src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
          alt={item.name}
          style={{width:"70px", height:"75px", objectFit:"cover"}}
      />
      <p style={{fontSize:"8px", textAlign:"center", margin: "10px"}}>{item.name}</p>
      </div>
    )
    
    const responsive = {
        0: {
          items: 3,
        },
        512: {
          items: 5,
        },
        1024: {
          items: 5,
        },
    }

    return (
      <AliceCarousel 
          mouseTracking
          infinite
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={items}
          autoPlay
      />
    )
}

export default CastCorousel