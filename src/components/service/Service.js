import React, { useState } from 'react';
import { Link } from "react-router-dom";
import cat1_image1 from '../../images/cat1_image1.jpeg';
import cat1_image2 from '../../images/cat1_image2.jpeg';
import cat1_image3 from '../../images/cat1_image3.jpeg';
import cat1_image4 from '../../images/cat1_image4.jpeg';
import cat2_image1 from '../../images/cat2_image1.jpeg';
import cat2_image2 from '../../images/cat2_image2.jpeg';
import cat3_image1 from '../../images/cat3_image1.jpeg';
import cat3_image2 from '../../images/cat3_image2.jpeg';
import cat3_image3 from '../../images/cat3_image3.jpeg';
import cat3_image4 from '../../images/cat3_image4.jpeg';
import cat4_image1 from '../../images/cat4_image1.jpeg';


function Service() {
    const [activeTab, setActiveTab] = useState('service1');

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">My Services</h2>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link
                        to
                        className={`nav-link ${activeTab === 'service1' ? 'active' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveTab('service1');
                        }}
                    >
                        Goddes mode
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="#"
                        className={`nav-link ${activeTab === 'service2' ? 'active' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveTab('service2');
                        }}
                    >
                        Wedding vows
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="#"
                        className={`nav-link ${activeTab === 'service3' ? 'active' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveTab('service3');
                        }}
                    >
                        magnitize SP
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to
                        className={`nav-link ${activeTab === 'service4' ? 'active' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveTab('service4');
                        }}
                    >
                        1:1 Call session
                    </Link>
                </li>
            </ul>
            <div className="tab-content mt-3">
                {activeTab === 'service1' && (
                    <div className="tab-pane fade show active">
                        <div className="row">
                            <img src={cat1_image1} className="col-md-4 col-sm-12 my-2" alt="Service 1 Card 1" />
                            <img src={cat1_image2} className="col-md-4 col-sm-12 my-2" alt="Service 1 Card 2" />
                            <img src={cat1_image3} className="col-md-4 col-sm-12 my-2" alt="Service 1 Card 3" />
                            <img src={cat1_image4} className="col-md-4 col-sm-12 my-2" alt="Service 1 Card 4" />
                        </div>
                    </div>
                )}
                {activeTab === 'service2' && (
                    <div className="tab-pane fade show active">
                        <div className="row">
                            <img src={cat2_image1} className="col-md-4 col-sm-12 my-2" alt="Service 2 Card 1" />
                            <img src={cat2_image2} className="col-md-4 col-sm-12 my-2" alt="Service 2 Card 2" />
                        </div>
                    </div>
                )}
                {activeTab === 'service3' && (
                    <div className="tab-pane fade show active">
                        <div className="row">
                            <img src={cat3_image1} className="col-md-4 col-sm-12 my-2" alt="Service 3 Card 1" />
                            <img src={cat3_image2} className="col-md-4 col-sm-12 my-2" alt="Service 3 Card 2" />
                            <img src={cat3_image3} className="col-md-4 col-sm-12 my-2" alt="Service 3 Card 3" />
                            <img src={cat3_image4} className="col-md-4 col-sm-12 my-2" alt="Service 3 Card 4" />
                        </div>
                    </div>
                )}
                {activeTab === 'service4' && (
                    <div className="tab-pane fade show active">
                        <div className="row">
                            <img src={cat4_image1} className="col-md-4 col-sm-12 my-2" alt="Service 4 Card 1" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Service;
