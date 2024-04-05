import React from "react";
import Plato_1 from '../utils/img/Plato_1.jpg';
import Plato_2 from '../utils/img/Plato_2.jpg';
import Plato_3 from '../utils/img/Plato_3.jpg';
import Plato_4 from '../utils/img/Plato_4.jpg';
import Plato_5 from '../utils/img/Plato_5.jpg';
import Plato_6 from '../utils/img/Plato_6.jpg';

export function ImageGallery() {
    return(
        <div className="container py-5">
            <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold"></h2>
                <div className="row">
                    <div className="col-md-4 px-2">
                        <div className="my-3">
                            <img src={Plato_1} className="img-fluid" alt="" />                            
                        </div>
                        <div className="my-3">
                            <img src={Plato_2} className="img-fluid" alt="" />                            
                        </div>
                    </div>
                    
                    <div className="col-md-4 px-2">
                        <div className="my-3">
                            <img src={Plato_3} className="img-fluid" alt="" />                            
                        </div>
                        <div className="my-3">
                            <img src={Plato_4} className="img-fluid" alt="" />                            
                        </div>
                    </div>

                    <div className="col-md-4 px-2">
                        <div className="my-3">
                            <img src={Plato_5} className="img-fluid" alt="" />                            
                        </div>
                        <div className="my-3">
                            <img src={Plato_6} className="img-fluid" alt="" />                            
                        </div>
                    </div>

                    

                </div>
        </div>

    )
}