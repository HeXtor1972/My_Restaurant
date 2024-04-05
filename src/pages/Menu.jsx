import React from 'react';
import './Menu.css'
import {Card, CardBody, CardText, CardTitle } from 'react-bootstrap'
import BreakfastImg from '../utils/img/Desayuno.jpg'
import LunchImg from '../utils/img/Almuerzo.jpg'
import DinnerImg from '../utils/img/Cena.jpg'
import DessertImg from '../utils/img/Postre.jpg'

const breakfast = [
    {
        id:1,
        name:'Consectetur Adipisicing',
        description: 'Lorem, ipsum, dolor, sit, amet, consectetur, adipisicing, elit, Repellat, totam',
        price:'$12.000'
    },

    {
        id:2,
        name:'Lorem Ipsum Sit Amet',
        description: 'Lorem, ipsum, dolor, sit, amet, consectetur',
        price:'$8.000'
    },
    {
        id:3,
        name:'Amet Consectetur',
        description: 'Lorem, ipsum, dolor, sit, amet, consectetur',
        price:'$11.000'
    }
];


const lunch = [
    {
        id: 1,
        name: 'Nisi Repellat',
        description:'Lorem, ipsum, dolor, sit, amet, consectetur',
        price: '$15.000'
    },
    {
        id: 2,
        name: 'Amet Consectetur',
        description:'Lorem, ipsum, dolor, sit, amet, consectetur',
        price: '$14.000'
    },
    {
        id: 3,
        name: 'Elit Nisi Repellat',
        description: 'Lorem, ipsum, dolor, sit, amet, consectetur',
        price: '$12.000'
    }
];

const dinner = [
    {
        id: 1,
        name: 'Adipisicing Elit Vero',
        description: 'Lorem, ipsum, dolor, sit, amet, consectetur',
        price: '$18.000'
    },
    
    {
        id: 2,
        name: 'Cupiditate Quidem',
        description:'dolor, sit, amet, consectetur, adipisicing, elit, Vero',
        price: '$15.000'
    },
    {
        id: 3,
        name: 'Eveniet Nemo Deleniti',
        description: 'dolor, sit, amet, consectetur, adipisicing, elit, Adipisci',
        price: '$12.000'
    }
];


const dessert = [
    {
        id: 1,
        name: 'Fugiat Aliquam',
        description:'dolor, sit, amet, consectetur, adipisicing',
        price: '$9.000'
    },
    {
        id: 2,
        name: 'Adipisicing',
        description:'dolor, sit, amet, consectetur, adipisicing, elit, Pariatur',
        price: '$11.000'
    },
    {
        id: 3,
        name: 'Consequatur Aperiam',
        description:'dolor, sit, amet, consectetur, adipisicing, elit, Esse',
        price: '$8.000'
    }

];



function Menu() {
    return(
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Menu</h1>
                </div>
            </header>
            <div className='breakfast my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Desayunos</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={BreakfastImg} className='img-fluid w-75 mt-4 mt-lg-0' alt='' />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {breakfast.map((breakfast) => (
                                <div key={breakfast.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {breakfast.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {breakfast.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {breakfast.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='lunch bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Almuerzos</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {lunch.map((lunch) => (
                                <div key={lunch.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {lunch.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {lunch.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {lunch.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={LunchImg} className='img-fluid w-75 mt-4 mt-lg-0' alt='' />
                        </div>                    
                    </div>
                </div>
            </div>
            <div className='dinner my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Cenas</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DinnerImg} className='img-fluid w-75 mt-4 mt-lg-0' alt='' />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dinner.map((dinner) => (
                                <div key={dinner.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dinner.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dinner.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dinner.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            <div className='dessert bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Postres</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dessert.map((dessert) => (
                                <div key={dessert.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dessert.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dessert.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dessert.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DessertImg} className='img-fluid w-75 mt-4 mt-lg-0' alt='' />
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu;