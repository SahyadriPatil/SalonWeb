import React from 'react'
import img1 from "../../assets/body.jpg"
import img2 from "../../assets/hair.jpg"
import img3 from "../../assets/bride.jpg"
import img4 from "../../assets/nail.jpg"
import "../../styles/services/Forhim.css"
const Forhim = () => {
  return (
    <>
    <div className='hisheadmain'>
     <div className='one'>
      <h1 className='heading' >SERVICES FOR HIM....!</h1>
  </div>
{/* <div className='hairback'> */}
        <div className='hishair1'>
            <div className='hisimg1'></div>
         <div className='desc'>
            <h3>Hair Cuts & Styling</h3>
            <p>Style your hair with the best hands. At naturals, we create nice looks for all events. Be a show-stopper at all events with our “go-to hairdressers.”</p>
<div className = "pricebtn"><button   type="button"><a href="/services/prices" class="btn btn-primary">VIEW PRICES</a></button></div>
         </div>
        </div>

        <div className='hishair2'>
           
         <div className='desc'>
            <h3>Beard/Trim & Shave</h3>
            <p>Style your hair with the best hands. At naturals, we create nice looks for all events. Be a show-stopper at all events with our “go-to hairdressers.”</p>
<div className = "pricebtn"><button   type="button"><a href="/services/prices" class="btn btn-primary">VIEW PRICES</a></button></div>
         </div>
         <div className='hisimg2'></div>
        </div>

        <div className='hishair1'>
            <div className='hisimg'></div>
         <div className='desc'>
            <h3>Hair colour</h3>
            <p>Hairstyles shine and luster with good chemical free colours. Give that dash of spunk with our super friendly services.</p>
<div className = "pricebtn"><button   type="button"><a href="/services/prices" class="btn btn-primary">VIEW PRICES</a></button></div>
         </div>
        </div>
        
        <div className='hishair2'>
           
         <div className='desc'>
            <h3>Massage</h3>
            <p>Accentuate your best features with the perfect mane! Our hairstylists are skilled in adding movement to your hair and creating a look that defines your face and adds volume.
At Naturals, you can trust our hairstylists to give you the latest hairstyle, while keeping in mind your preferences. New hairstyles come with a relaxing hair wash and conditioning, giving you a natural shine.
Meeting the new you is only a haircut away!</p>
<div className = "pricebtn"><button   type="button"><a href="/services/prices" class="btn btn-primary">VIEW PRICES</a></button></div>
         </div>
         <div className='hisimg'></div>
        </div>
        <div className='blank'></div>
    </div>

    {/* </div> */}
    </>

  )
}

export default Forhim
