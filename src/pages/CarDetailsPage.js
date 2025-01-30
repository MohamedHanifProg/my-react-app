import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBarTop from "../components/navbars/NavBarTop";
import NavBarSide from "../components/navbars/NavBarSide";
import Footer from "../components/footer/Footer";
import carsData from "../data/cars.json";
import "../components/content/CarDetails.css";

function CarDetails() {
    const { id } = useParams();
    const [selectedCar, setSelectedCar] = useState(null);
    const [favorite, setFavorite] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Track the selected image index

    useEffect(() => {
        console.log("URL ID:", id);
        const carId = parseInt(id, 10);
        const foundCar = carsData.find(car => car.id === carId);

        if (foundCar) {
            console.log("Selected Car:", foundCar);
            setSelectedCar(foundCar);
            // Check if the car is already in favorites
            const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
            setFavorite(favorites.includes(foundCar.id));
        } else {
            console.error(`Car with ID ${carId} not found`);
            setSelectedCar(null);
        }
    }, [id]);

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        if (favorite) {
            const updatedFavorites = favorites.filter(favId => favId !== selectedCar.id);
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        } else {
            favorites.push(selectedCar.id);
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
        setFavorite(!favorite);
    };

    const handleImageClick = (index) => {
        setSelectedImageIndex(index); // Update the selected image index
    };

    if (!selectedCar) return <div>Loading or Car not found</div>;

    const carImage = selectedCar?.images?.[selectedImageIndex] || "/assets/default.jpg";

    return (
        <div className="car-details-container">
            {/* Navigation */}
            <NavBarTop />
            <div className="car-details-content">
                <NavBarSide
                    cars={carsData}
                    onFilterChange={() => { }}
                    selectedFilters={{}}
                    minPrice={0}
                    maxPrice={0}
                />

                {/* Main Content Wrapper */}
                <div className="car-details-main">
                    <h1 className="car-details-header">Car Details</h1>

                    {/* Car Details Section */}
                    <div className="car-details-wrapper">
                        {/* Car View Section */}
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
                        {/* View 1 */}
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

                        {/* View 2 */}
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

                        {/* View 3 */}
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
                {/* Car Details Information */}
                <div className="detailcar-container">
                    <div className="car-name-detail">
                        <h2 className="car-name-text-detail">{selectedCar.name}</h2>
                        <div className="vuesax-heart-container" onClick={toggleFavorite}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M16.44 3.10001C14.63 3.10001 13.01 3.98001 12 5.33001C10.99 3.98001 9.37 3.10001 7.56 3.10001C4.49 3.10001 2 5.60001 2 8.69001C2 9.88001 2.19 10.98 2.52 12C4.1 17 8.97 19.99 11.38 20.81C11.72 20.93 12.28 20.93 12.62 20.81C15.03 19.99 19.9 17 21.48 12C21.81 10.98 22 9.88001 22 8.69001C22 5.60001 19.51 3.10001 16.44 3.10001Z" fill={favorite ? "#ED3F3F" : "#90A3BF"} />
                            </svg>
                        </div>
                    </div>

                    <div className="reviews-container">
                        <div className="review-stars">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="18"
                                    viewBox="0 0 20 18"
                                    fill="none"
                                >
                                    {i < Math.round(selectedCar.stars) ? (
                                        // Full Star SVG
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.16664 1.65835C9.2242 1.47581 9.33846 1.31638 9.49281 1.20321C9.64717 1.09004 9.83358 1.02902 10.025 1.02902C10.2164 1.02902 10.4028 1.09004 10.5571 1.20321C10.7115 1.31638 10.8257 1.47581 10.8833 1.65835L12.4333 6.42502H17.4333C17.6315 6.41752 17.8268 6.47513 17.9892 6.58905C18.1516 6.70296 18.2723 6.86692 18.3327 7.05586C18.3932 7.24481 18.3902 7.44835 18.324 7.63539C18.2579 7.82244 18.1324 7.9827 17.9666 8.09168L13.9083 11.0333L15.4583 15.8083C15.5196 15.9902 15.5212 16.187 15.4627 16.3698C15.4043 16.5526 15.2889 16.712 15.1335 16.8246C14.9781 16.9372 14.7907 16.9972 14.5988 16.9958C14.4068 16.9943 14.2204 16.9316 14.0666 16.8167L9.99998 13.8417L5.94164 16.7917C5.7879 16.9066 5.60145 16.9693 5.40951 16.9708C5.21758 16.9722 5.03022 16.9122 4.87479 16.7996C4.71936 16.687 4.604 16.5276 4.54557 16.3448C4.48713 16.162 4.48868 15.9652 4.54998 15.7833L6.09998 11.0083L2.04164 8.06668C1.87588 7.9577 1.75035 7.79744 1.68424 7.61039C1.61813 7.42335 1.61508 7.21981 1.67554 7.03086C1.736 6.84192 1.85666 6.67796 2.01907 6.56405C2.18149 6.45013 2.37673 6.39252 2.57498 6.40002H7.57498L9.16664 1.65835Z" fill="#FBAD39" />
                                    ) : (
                                        // Empty Star SVG
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.16664 1.65835C9.2242 1.47581 9.33846 1.31638 9.49281 1.20321C9.64717 1.09004 9.83358 1.02902 10.025 1.02902C10.2164 1.02902 10.4028 1.09004 10.5571 1.20321C10.7115 1.31638 10.8257 1.47581 10.8833 1.65835L12.4333 6.42502H17.4333C17.6315 6.41752 17.8268 6.47513 17.9892 6.58905C18.1516 6.70296 18.2723 6.86692 18.3327 7.05586C18.3932 7.24481 18.3902 7.44835 18.324 7.63539C18.2579 7.82244 18.1324 7.9827 17.9666 8.09168L13.9083 11.0333L15.4583 15.8083C15.5196 15.9902 15.5212 16.187 15.4627 16.3698C15.4043 16.5526 15.2889 16.712 15.1335 16.8246C14.9781 16.9372 14.7907 16.9972 14.5988 16.9958C14.4068 16.9943 14.2204 16.9316 14.0666 16.8167L9.99998 13.8417L5.94164 16.7917C5.7879 16.9066 5.60145 16.9693 5.40951 16.9708C5.21758 16.9722 5.03022 16.9122 4.87479 16.7996C4.71936 16.687 4.604 16.5276 4.54557 16.3448C4.48713 16.162 4.48868 15.9652 4.54998 15.7833L6.09998 11.0083L2.04164 8.06668C1.87588 7.9577 1.75035 7.79744 1.68424 7.61039C1.61813 7.42335 1.61508 7.21981 1.67554 7.03086C1.736 6.84192 1.85666 6.67796 2.01907 6.56405C2.18149 6.45013 2.37673 6.39252 2.57498 6.40002H7.57498L9.16664 1.65835Z" stroke="#90A3BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    )}
                                </svg>
                            ))}
                        </div>

                        <span className="reviews">{selectedCar.stars} ({selectedCar.reviews} reviews)</span>
                    </div>


                    {/* Description */}
                    <p className="cardetailstextcontainer">{selectedCar.description}</p>

                    {/* Specifications */}
                    <div className="specifications-container">
                        <div className="spec1">
                            <div className="type">
                                <span className="label">Type</span>
                                <span className="value">{selectedCar.type}</span>
                            </div>
                            <div className="steering">
                                <span className="label">Steering</span>
                                <span className="value">{selectedCar.transmission}</span>
                            </div>
                        </div>
                        <div className="spec2">
                            <div className="capacity">
                                <span className="label">Capacity</span>
                                <span className="value">{selectedCar.capacity}</span>
                            </div>
                            <div className="gasoline">
                                <span className="label">Gasoline</span>
                                <span className="value">{selectedCar.gasoline}</span>
                            </div>
                        </div>
                    </div>

                    {/* Price Section */}
                    <div className="price-detail">
                        <div className="price-amount-detail">${selectedCar.price.toFixed(2)}</div>
                        <div className="price-subtext-detail">/ day</div>
                    </div>

                    {/* Rent Button */}
                    <button className="rental-button-detail">
                        <span className="rental-text-detail">Rent Now</span>
                    </button>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default CarDetails;


