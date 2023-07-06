import React from 'react'

const Body = () => {
  return (
    <div className='skin'>
       <div className='one'>
      <h1 className='heading' > SERVICES....!</h1>
  </div>

  <div className='hair1'>
            <div className='imgs1'></div>
         <div className='desc'>
            <h3>MANICURE</h3>
            <p>Everyday pollution, tanning and stress take a toll on your face. Treating your face weekly to remove dirt and tan is vital for facial skin health.
At Naturals, we offer face clean up options for all skin types. A face scrub to remove any impurities hidden in your pores followed by a face massage nourishes your face from within, giving your skin a Naturals glow!
Keep your skin healthy, hydrated and glowing!
VIEW PRICES!</p>
<div className = "pricebtn"><button   type="button"><a href="/services/prices" class="btn btn-primary">VIEW PRICES</a></button></div>
         </div>
        </div>

        <div className='hair2'>
           
         <div className='desc'>
            <h3>Pedicure</h3>
            <p>A facial adds the ‘value’ in ‘face value’!
A facial is not just about pampering yourself, it also does wonders for your skin! A facial done by a professional, deep cleans and hydrates your skin as well as relieves acne. A good facial also improves blood circulation, giving your skin a healthy glow.
At Naturals, our facial options cater to all skin types. We use products containing vital minerals and nutrients that reduce wrinkles and remove dead skin, giving your skin a youthful appearance. Black mud, fruit acids, vitamins, enzymes, gold and anti-oxidants are just a few of the special ingredients found in our facials.!</p>
<div className = "pricebtn"><button   type="button"><a href="/services/prices" class="btn btn-primary">VIEW PRICES</a></button></div>
         </div>
         <div className='imgs'></div>
        </div>

        <div className='hair1'>
            <div className='imgs'></div>
         <div className='desc'>
            <h3>Body Spa</h3>
            <p>Accentuate your best features with the perfect mane! Our hairstylists are skilled in adding movement to your hair and creating a look that defines your face and adds volume.
At Naturals, you can trust our hairstylists to give you the latest hairstyle, while keeping in mind your preferences. New hairstyles come with a relaxing hair wash and conditioning, giving you a natural shine.
Meeting the new you is only a haircut away!</p>
<div className = "pricebtn"><button   type="button"><a href="/services/prices" class="btn btn-primary">VIEW PRICES</a></button></div>
         </div>
        </div>
        <div className='blank'></div>
    </div>
  )
}

export default Body
