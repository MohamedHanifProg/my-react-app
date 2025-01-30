import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBarTop from "../components/navbars/NavBarTop";
import NavBarSide from "../components/navbars/NavBarSide";
import Footer from "../components/footer/Footer";
import carsData from "../data/cars.json";
import "../components/content/CarDetails.css";
import { useNavigate } from "react-router-dom"; // Import this for navigation

function CarDetailsPage({ favoriteCars, toggleFavorite, showFavorites, setShowFavorites }) {
    const { id } = useParams();
    const navigate = useNavigate(); // Initialize navigation
    const [selectedCar, setSelectedCar] = useState(null);
    const [favorite, setFavorite] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    useEffect(() => {
        if (showFavorites) {
            navigate("/"); // Redirect to HomePage if showFavorites is active
            return;
        }

        const carId = parseInt(id, 10);
        const foundCar = carsData.find(car => car.id === carId);

        if (foundCar) {
            setSelectedCar(foundCar);
            setFavorite(favoriteCars.has(foundCar.id));
        } else {
            console.error(`Car with ID ${carId} not found`);
            setSelectedCar(null);
        }
    }, [id, favoriteCars, showFavorites, navigate]);

    const toggleFavoriteStatus = () => {
        toggleFavorite(selectedCar.id);
        setFavorite(!favorite);
    };

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    if (!selectedCar) return <div>Loading or Car not found</div>;

    const carImage = selectedCar?.images?.[selectedImageIndex] || "/assets/default.jpg";

    return (
        <div className="car-details-container">
            {/* ✅ FIXED: Pass showFavorites and setShowFavorites to NavBarTop */}
            <NavBarTop
                onToggleFavorites={setShowFavorites}
                showFavorites={showFavorites}
            />

            <div className="car-details-content">
                <NavBarSide
                    cars={carsData}
                    onFilterChange={() => { }}
                    selectedFilters={{}}
                    minPrice={0}
                    maxPrice={0}
                />

                <div className="car-details-main">
                    <h1 className="car-details-header">Car Details</h1>

                    <div className="car-details-wrapper">
                        <div className="car-view-container">
                            <div className="car-title-container">
                                <h2 className="car-title-text">
                                    {selectedCar.name} - {selectedCar.type}
                                </h2>
                                <p className="car-description-text">
                                    {selectedCar.description}
                                </p>
                            </div>

                            <div className="car-details-bg">
                                <div
                                    className="car-details-image"
                                    style={{
                                        backgroundImage: `url(${process.env.PUBLIC_URL + carImage})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="view1-container">
                        <div
                            className={`view-1 ${selectedImageIndex === 0 ? "stroke-selected" : ""}`}
                            onClick={() => handleImageClick(0)}
                        >
                            <div className="stroke">
                                <div className="view-1-1">
                                    <img
                                        className="car-details-image-thumb"
                                        src={selectedCar?.images?.[0] || "/assets/default.jpg"}
                                        alt="View 1"
                                        onError={(e) => { e.target.src = "/assets/default.jpg"; }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            className={`view-2 ${selectedImageIndex === 1 ? "stroke-selected" : ""}`}
                            onClick={() => handleImageClick(1)}
                        >
                            <img
                                src={selectedCar?.images?.[1] || "/assets/View2.png"}
                                alt="View 2"
                                onError={(e) => { e.target.src = "/assets/default.jpg"; }}
                            />
                        </div>

                        <div
                            className={`view-3 ${selectedImageIndex === 2 ? "stroke-selected" : ""}`}
                            onClick={() => handleImageClick(2)}
                        >
                            <img
                                src={selectedCar?.images?.[2] || "/assets/View3.png"}
                                alt="View 3"
                                onError={(e) => { e.target.src = "/assets/default.jpg"; }}
                            />
                        </div>
                    </div>
                </div>

                <div className="detailcar-container">
                    <div className="car-name-detail">
                        <h2 className="car-name-text-detail">{selectedCar.name}</h2>
                        <div className="vuesax-heart-container" onClick={toggleFavoriteStatus}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M16.44 3.10001C14.63 3.10001 13.01 3.98001 12 5.33001C10.99 3.98001 9.37 3.10001 7.56 3.10001C4.49 3.10001 2 5.60001 2 8.69001C2 9.88001 2.19 10.98 2.52 12C4.1 17 8.97 19.99 11.38 20.81C11.72 20.93 12.28 20.93 12.62 20.81C15.03 19.99 19.9 17 21.48 12C21.81 10.98 22 9.88001 22 8.69001C22 5.60001 19.51 3.10001 16.44 3.10001Z"
                                    fill={favorite ? "#ED3F3F" : "#90A3BF"}
                                />
                            </svg>
                        </div>
                    </div>

                    <p className="cardetailstextcontainer">{selectedCar.description}</p>

                    <div className="price-detail">
                        <div className="price-amount-detail">${selectedCar.price.toFixed(2)}</div>
                        <div className="price-subtext-detail">/ day</div>
                    </div>

                    <button className="rental-button-detail">
                        <span className="rental-text-detail">Rent Now</span>
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default CarDetailsPage;
