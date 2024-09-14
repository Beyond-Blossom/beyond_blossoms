import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div id="home">
            {/* Carousel Section */}
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ height: '400px', backgroundColor: '#EAE6F9', position: 'relative' }}>
                        <div className="position-absolute top-50 start-50 translate-middle text-center p-5">
                            <h2 className="font-weight-bold text-muted">"Manifest your dream life"</h2>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ height: '400px', backgroundColor: '#EAE6F9', position: 'relative' }}>
                        <div className="position-absolute top-50 start-50 translate-middle text-center p-5">
                            <h2 className="font-weight-bold text-muted">"Your whole life is a manifestation of the thoughts that go on in your mind."</h2>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ height: '400px', backgroundColor: '#EAE6F9', position: 'relative' }}>
                        <div className="position-absolute top-50 start-50 translate-middle text-center p-5">
                            <h2 className="font-weight-bold text-muted">"Imagination is everything. It is the preview of life's coming attractions."</h2>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" style={{ filter: 'invert(1)' }}></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" style={{ filter: 'invert(1)' }}></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Main Content Section */}
            <div id="mainContent" className="text-center p-5 my-5" style={{ backgroundColor: '#B8E4C9' }}>
                <h3 className="font-weight-bold mb-4" style={{ fontSize: '2.5rem' }}>Unlock Your Potential: Begin Your Manifestation Journey Today</h3>
                <p className="lead" style={{ lineHeight: '1.8', fontSize: '1.2rem' }}>
                    Discover the power within you to manifest your dreams and create the life you desire. At <strong>Beyond Blossoms</strong>, we guide you through personalized manifestation techniques that align your energy with the universe. Whether you're seeking abundance, love, or personal growth, our proven methods will help you attract and manifest your true desires. Connect with us today and step into a life of clarity, confidence, and limitless possibilities.
                </p>
            </div>

            {/* Contact Section */}
            <div className="text-center p-5" id="connect" style={{ backgroundColor: '#F9F9F9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <h4 className="font-weight-bold mb-4" style={{ fontSize: '2rem', color: '#333' }}>Start Your Manifestation Journey with Me</h4>
                <p className="lead mb-4" style={{ fontSize: '1.2rem', color: '#555' }}>
                    Ready to transform your life? Let me guide you on your path to manifesting your dreams and achieving abundance. Whether it's love, success, or personal growth, let's make your vision a reality together.
                </p>
                <Link to="https://wa.me/918639206854" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg" style={{ backgroundColor: '#28a745', borderColor: '#28a745', fontSize: '1.1rem', padding: '10px 20px', borderRadius: '50px' }}>
                    Connect with Me on WhatsApp
                </Link>
                <p className="mt-4" style={{ fontSize: '1rem', color: '#666' }}>
                    For further inquiries, contact me at <Link to="mailto:beyondblossom01@gmail.com" style={{ color: '#007bff' }}>beyondblossom01@gmail.com</Link>
                </p>
            </div>

        </div>
    );
}

export default Home;
