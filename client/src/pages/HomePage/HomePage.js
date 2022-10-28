import React from 'react';
import { 
  MDBCarousel, 
  MDBCarouselItem, 
} from 'mdb-react-ui-kit';

export default function HomePage() {
  return (
    <MDBCarousel showControls dealy={3000}>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://www.essexapartmenthomes.com/-/media/Project/EssexPropertyTrust/Sites/EssexApartmentHomes/Blog/2019/2019-11-08-The-Pet-Owners-Guide-to-Apartment-Life/The-Pet-Owners-Guide-to-Apartment-Life-1.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://www.madpaws.com.au/wp-content/uploads/2019/02/Building-a-Bond-During-a-Pet-Sit.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://kittyreporter.com/wp-content/uploads/2018/10/Fotolia_93266687_Subscription_Monthly_M.jpg'
        alt='...'
      />
        <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://media.istockphoto.com/photos/closeup-of-a-black-and-white-cat-cuddled-by-a-beard-man-picture-id1270572039?b=1&k=20&m=1270572039&s=170667a&w=0&h=WJ2DCaSZdB8kn3sI0mHp2QneLmoG4Fp-0PEseVdFk9M='
        alt='...'
      />
    </MDBCarousel>
    
  );
}






