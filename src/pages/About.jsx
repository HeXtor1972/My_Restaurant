import React from 'react';
import './About.css'
import AboutChef1 from '../utils/img/Cocina_1.jpg'
import AboutChef2 from '../utils/img/Cocina_2.jpg'
import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';


function About() {
    return(
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Acerca de Nosotros</h1>
                </div>
            </header>

            <div className='container my-5'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore tenetur non commodi nam quae voluptas ipsum neque? Eum ea repellendus ullam animi! Corporis, provident reprehenderit. Inventore quas velit ab hic quo aperiam blanditiis saepe voluptatem officia incidunt, culpa laudantium obcaecati error sed eius totam repudiandae. Quis eum ex adipisci corrupti.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sed? Dolor cum reprehenderit facilis laboriosam aperiam harum nisi quidem ut commodi impedit fugiat repudiandae, dolorem natus, dicta dignissimos nesciunt atque ducimus. Qui cupiditate numquam optio, reiciendis molestias non modi error quae soluta saepe ut aperiam illo voluptatum vitae sequi necessitatibus expedita eaque voluptatem in maxime laborum. Dignissimos quae quisquam et accusamus! Magnam animi illo praesentium, tenetur veniam cum tempora cumque saepe perspiciatis earum architecto accusantium!</p>
            
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid my-4' alt=''/>
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid my-4' alt=''/>
                    </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia vitae error dolores fuga accusamus sequi nisi exercitationem earum quo natus aut, necessitatibus dicta repellendus ullam laboriosam! Eius modi, vitae recusandae provident exercitationem dolore commodi incidunt corrupti, iusto nesciunt deleniti dolor? Odio hic labore nam ut ea esse quidem cum necessitatibus veritatis explicabo, dolor aperiam eligendi ratione, sapiente, nesciunt at nostrum id! Dicta quasi facere nam obcaecati error mollitia temporibus, ut officiis officia sequi vel dignissimos qui minus labore quod facilis. Dolorem doloremque exercitationem facere esse sunt! Minima doloribus maiores ex delectus deleniti? Odit accusamus voluptas voluptatibus cumque esse, sed sunt?</p>
            </div>
            <div className='bg-dark text-light'>
                <ImageGallery />
            </div>
            <div className='my-5'>
                <Reviews />
            </div>
        </div>
    )
}
export default About;