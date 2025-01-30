import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBarTop from "../components/navbars/NavBarTop";
import NavBarSide from "../components/navbars/NavBarSide";
import Footer from "../components/footer/Footer";
import carsData from "../data/cars.json";
import "../components/content/CarDetails.css";

function CarDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
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

                    {/* Reviews Section */}
                    <div className="reviews-container">
                        <div className="review-stars">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="star-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.16664 0.658349C8.22421 0.475814 8.33846 0.316382 8.49281 0.20321C8.64717 0.0900392 8.83358 0.0290222 9.02498 0.0290222C9.21637 0.0290222 9.40279 0.0900392 9.55714 0.20321C9.71149 0.316382 9.82575 0.475814 9.88331 0.658349L11.4333 5.42501H16.4333C16.6315 5.41752 16.8268 5.47513 16.9892 5.58905C17.1516 5.70296 17.2723 5.86692 17.3327 6.05586C17.3932 6.24481 17.3902 6.44835 17.324 6.63539C17.2579 6.82244 17.1324 6.9827 16.9666 7.09168L12.9083 10.0333L14.4583 14.8083C14.5196 14.9902 14.5212 15.187 14.4627 15.3698C14.4043 15.5526 14.2889 15.712 14.1335 15.8246C13.9781 15.9372 13.7907 15.9972 13.5988 15.9958C13.4068 15.9943 13.2204 15.9316 13.0666 15.8167L8.99998 12.8417L4.94164 15.7917C4.7879 15.9066 4.60145 15.9693 4.40951 15.9708C4.21758 15.9722 4.03022 15.9122 3.87479 15.7996C3.71936 15.687 3.604 15.5276 3.54557 15.3448C3.48713 15.162 3.48868 14.9652 3.54998 14.7833L5.09998 10.0083L1.04164 7.06668C0.875879 6.9577 0.750352 6.79744 0.684243 6.61039C0.618134 6.42335 0.615077 6.21981 0.675539 6.03086C0.736001 5.84192 0.856658 5.67796 1.01907 5.56405C1.18149 5.45013 1.37673 5.39252 1.57498 5.40002H6.57498L8.16664 0.658349Z" fill="#FBAD39" />
                                    </svg>
                                </div>
                            ))}
                        </div>
                        <span className="reviews">4.5 (120 reviews)</span>
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