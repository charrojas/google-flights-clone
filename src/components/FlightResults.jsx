import React from 'react';

const formatFecha = (fecha) => {
    const date = new Date(fecha);
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    return date.toLocaleTimeString('es-CO', options);
};

const calculateDuration = (departure, arrival) => {
    const departureDate = new Date(departure);
    const arrivalDate = new Date(arrival);
    const diffMs = arrivalDate - departureDate;
    const diffMinutes = Math.round(diffMs / (1000 * 60));
    const horas = Math.floor(diffMinutes / 60);
    const minutosRestantes = diffMinutes % 60;
    return `${horas}h ${minutosRestantes}min`;
};


const FlightResults = ({ flights }) => (
    <div>
        {flights.length > 0 ? (
            <ul className="space-y-6">
                <h2 className="text-2xl font-bold my-4">Resultados de vuelos:</h2>
                {flights.map((flight) => (
                    <li
                        key={flight.id}
                        className="border border-gray-300 p-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">
                                    {flight.legs[0]?.origin.name} ({flight.legs[0]?.origin.displayCode}) → {flight.legs[0]?.destination.name} ({flight.legs[0]?.destination.displayCode})
                                </h3>
                                <p className="text-gray-500">
                                    Salida: {formatFecha(flight.legs[0]?.departure)} - Llegada: {formatFecha(flight.legs[0]?.arrival)}
                                </p>
                                <p className="text-gray-500">
                                    Duración: {calculateDuration(flight.legs[0]?.departure, flight.legs[0]?.arrival)}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-xl font-bold text-custom-green">{flight.price.formatted}</p>
                                <p className="text-gray-500 text-sm">{flight.legs[0]?.carriers.marketing[0]?.name}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        ) : (
            <p></p>
        )}
    </div>
);

export default FlightResults;
