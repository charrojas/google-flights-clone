import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdSwapHoriz } from "react-icons/md";
import PassengerSelector from './PassengerSelector';


const SearchForm = ({
    origin, setOrigin,
    destination, setDestination,
    departureDate, setDepartureDate,
    returnDate, setReturnDate,
    adults, setAdults,
    childrens, setChildrens,
    infants, setInfants,
    handleSearch }) => {
    const swapOriginDestination = () => {
        setOrigin(destination);
        setDestination(origin);
    };

    return (
        <div className="bg-white p-6 shadow-lg rounded-md">
            <div className="flex flex-wrap gap-3 mb-4">

                <div className="flex-1 min-w-[170px]">
                    <input
                        type="text"
                        placeholder="Origen"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        className="w-full p-2 border  border-gray-300 rounded-lg bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        onClick={swapOriginDestination}
                        className="p-2  text-gray-600 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500">
                        <MdSwapHoriz className="text-xl" />
                    </button>
                </div>
                <div className="flex-1 min-w-[170px]">
                    <input
                        type="text"
                        placeholder="Destino"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full p-2 border  border-gray-300 rounded-lg bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div className="flex-1 min-w-[170px]">
                    <DatePicker
                        selected={departureDate}
                        onChange={(date) => setDepartureDate(date)}
                        className="w-full p-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                        dateFormat="MMMM d, yyyy"
                        placeholderText="Selecciona una fecha" />
                </div>
                <div className="flex-1 min-w-[170px]">
                    <DatePicker
                        selected={returnDate}
                        onChange={(date) => setReturnDate(date)}
                        className="w-full p-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                        dateFormat="MMMM d, yyyy"
                        placeholderText="Selecciona una fecha" />
                </div>
                <div className="flex flex-wrap gap-4">
                    <PassengerSelector
                        adults={adults}
                        setAdults={setAdults}
                        childrens={childrens}
                        setChildrens={setChildrens}
                        infants={infants}
                        setInfants={setInfants}
                        onConfirm={handleSearch}
                    />

                </div>
            </div>


            <div className="mt-6 text-center">
                <button
                    onClick={() => handleSearch()}
                    className="px-6 py-3 bg-custom-green text-white rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-custom-green transition duration-300 ease-in-out">
                    Buscar vuelos
                </button>
            </div>
        </div>
    );
};

export default SearchForm;
