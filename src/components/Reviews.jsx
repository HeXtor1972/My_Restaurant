import React from "react";
import {Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
import './Reviews.css';
import Cheff_1 from '../utils/img/Cheff_1.jpg'
import Chefm_2 from '../utils/img/Chefm_2.jpg'
import Chefm_3 from '../utils/img/Chefm_3.jpg'
import Chff_4 from '../utils/img/Chff_4.jpg'


export function Reviews(){
    return(
        <div className="reviews-section container">
            <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Opiniones</h2>
            <div className="row g-4">
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione eos, libero molestias veritatis laudantium corrupti?
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Cheff_1} alt="" className="img-fluid rounded-circle mx-3 shadow" />
                            <CardTitle className="text-success">Manuela Inostroza</CardTitle>                            
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non vel eum deserunt laboriosam a accusamus!
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Chefm_2} alt="" className="img-fluid rounded-circle mx-3 shadow" />
                            <CardTitle className="text-success">Marcos Arriagada</CardTitle>                            
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab beatae nihil qui doloremque accusamus odio perferendis minima at exercitationem quasi.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Chefm_3} alt="" className="img-fluid rounded-circle mx-3 shadow" />
                            <CardTitle className="text-success">Víctor Cardenas</CardTitle>                            
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam excepturi aliquid, officiis atque tenetur eum aliquam esse voluptatibus delectus. Enim recusandae laborum mollitia in cumque.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Chff_4} alt="" className="img-fluid rounded-circle mx-3 shadow" />
                            <CardTitle className="text-success">Paola Jaramillo</CardTitle>                            
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )

}
