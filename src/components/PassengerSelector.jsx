import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

const PassengerSelector = ({ adults, setAdults, childrens, setChildrens, infants, setInfants, onConfirm }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleConfirm = () => {
        onConfirm();
        setIsOpen(false);
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    const totalPassengers = adults + childrens + infants;

    return (
        <div className="relative">
            <button
                onClick={toggleMenu}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500">
                <FaUser />
                <span>{totalPassengers}{totalPassengers > 1}</span>
            </button>

            {isOpen && (
                <div className="">
                    {isOpen && (
                        <div className="absolute z-10 mt-2 w-72 bg-white border-2 border-gray-300 rounded-lg shadow-lg p-4 space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700">Adultos</span>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setAdults((prev) => Math.max(prev - 1, 1))}
                                        className="px-3 py-1 bg-gray-200 text-black rounded-full transition-all duration-200 hover:bg-gray-300">
                                        -
                                    </button>
                                    <span className="text-lg font-semibold">{adults}</span>
                                    <button
                                        onClick={() => setAdults((prev) => prev + 1)}
                                        className="px-3 py-1 bg-gray-200 text-black rounded-full transition-all duration-200 hover:bg-gray-300">
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-gray-700">Niños (2-12 años)</span>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setChildrens((prev) => Math.max(prev - 1, 0))}
                                        className="px-3 py-1 bg-gray-200 text-black rounded-full transition-all duration-200 hover:bg-gray-300">
                                        -
                                    </button>
                                    <span className="text-lg font-semibold">{childrens}</span>
                                    <button
                                        onClick={() => setChildrens((prev) => prev + 1)}
                                        className="px-3 py-1 bg-gray-200 text-black rounded-full transition-all duration-200 hover:bg-gray-300">
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-gray-700">Bebés (menores de 2 años)</span>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setInfants((prev) => Math.max(prev - 1, 0))}
                                        className="px-3 py-1 bg-gray-200 text-black rounded-full transition-all duration-200 hover:bg-gray-300">
                                        -
                                    </button>
                                    <span className="text-lg font-semibold">{infants}</span>
                                    <button
                                        onClick={() => setInfants((prev) => prev + 1)}
                                        className="px-3 py-1 bg-gray-200 text-black rounded-full transition-all duration-200 hover:bg-gray-300">
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-center gap-2 mt-6">
                                <button
                                    onClick={handleCancel}
                                    className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-400 transition-all duration-300">
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleConfirm}
                                    className="px-6 py-2 bg-custom-green text-white rounded-lg hover:bg-green-600 transition-all duration-300">
                                    Listo
                                </button>
                            </div>

                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default PassengerSelector;
