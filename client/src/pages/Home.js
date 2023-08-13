import React from 'react';
import Slider from '../components/Slider';
import { Container } from 'react-bootstrap';
import s4 from '../assets/4.png';
import s6 from '../assets/6.jpg';
import s7 from '../assets/7.jpg';
import s8 from '../assets/8.jpeg';
import CustomerReviews from '../components/CustomerReviews';

const Home = () => {
    return (
        <>
        <Slider></Slider>
        <Container>
            <div style={{marginTop:'75px'}}>
            <h3 style={{textAlign:'center'}}>Our Aim</h3>
            <div style={{marginTop:'15px', display:'flex'}}>
               <div><img style={{width:'400px',height:'400px',marginRight:'200px',marginLeft:'100px'}} src={s4}/></div>
               <div style={{marginTop:'150px',fontSize:'20px',textAlign:'justify'}}>
               Currently, the animals are in a dangerous state. The biggest reason for this is environmental pollution, climate change, deforestation etc. Because of these animals are not able to live their normal life. They are leaving the forest and entering the locality. As humans we should keep pets. Even very good people, loving people are also observing. We think about those people and our company aims to help them.
               </div>
            </div>
            </div>

            <div style={{marginTop:'75px'}}>
            <h2 style={{fontSize:'40px',textAlign:'center'}}>Services provided by us</h2>
            
            <div>
            <h3 style={{textAlign:'center',marginTop:'30px'}}>Doctor Service</h3>
            <div style={{marginTop:'15px', display:'flex'}}>
               
               <div style={{marginTop:'100px',fontSize:'20px',textAlign:'justify'}}>
               We provide 24 hours doctor service. Pet owners will always get medical care here. The owner can chat with the doctor and avail the service. Besides, if the owner wants, he can take the service by making payment through video call with the doctor. We always provide treatment by best doctors.
               </div>
               <div><img style={{width:'400px',height:'400px',marginLeft:'200px',marginRight:'100px'}} src={s6}/></div>
            </div>
            </div>

            <div>
            <h3 style={{textAlign:'center',marginTop:'30px'}}>Vaccine Service</h3>
            <div style={{marginTop:'15px', display:'flex'}}>
                <div><img style={{width:'400px',height:'400px',marginRight:'200px',marginLeft:'100px'}} src={s7}/></div>
               <div style={{marginTop:'100px',fontSize:'20px',textAlign:'justify'}}>
               We are providing vaccine services for pet diseases. Many times the owner does not understand whether his pet needs vaccinations. In that case, the owner can buy the necessary vaccine here with the doctor's advice. We have the best quality vaccines here.
               </div>
               
            </div>
            </div>

            <div>
            <h3 style={{textAlign:'center',marginTop:'30px'}}>Rental services</h3>
            <div style={{marginTop:'15px', display:'flex'}}>
                
               <div style={{marginTop:'100px',fontSize:'20px',textAlign:'justify'}}>
               Some kind people think of these helpless creatures and keep them for themselves. There is no end to their thoughts about these animals. But when they have to go out for work, these animals make them think more. Who will take care of his pets? Keeping their thoughts in mind, we offer pet rental services with us. Owners can rent their animals to us and go out for their work. We are responsible for all the care of their animals.
               </div>
               <div><img style={{width:'400px',height:'400px',marginLeft:'200px',marginRight:'100px'}} src={s8}/></div>
            </div>
            </div>


            </div>
        </Container>
        <h2 style={{fontSize:'40px',textAlign:'center'}}>Customer Reviews</h2>
        <CustomerReviews></CustomerReviews>
        
        
    </>
    );
};

export default Home;