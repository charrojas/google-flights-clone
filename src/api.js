const API_KEY = '3437096ba3mshdbbfe311965135dp1df4e9jsnbd5b5c382d7b';
const BASE_URL = 'https://sky-scrapper.p.rapidapi.com/api/v1/flights';

const headers = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
};

export const searchAirport = async (airportName) => {
  try {
    const query = encodeURIComponent(airportName);
    const locale = 'en-US';

    const response = await fetch(`${BASE_URL}/searchAirport?query=${query}&locale=${locale}`, {
      method: 'GET',
      headers,
    });

    const data = await response.json();

    if (!data || !data.data || data.data.length === 0) {
      console.error(`No se encontraron aeropuertos para: ${airportName}`);
      return null;
    }

    return data.data;
  } catch (error) {
    console.error('Error buscando aeropuerto:', error);
    return null;
  }
};

export const flightSearchPage = async (originSkyId, destinationSkyId, originEntityId, destinationEntityId, departureDate, returnDate, adults, childrens, infants) => {
  try {
    const params = {
      originSkyId,
      destinationSkyId,
      originEntityId,
      destinationEntityId,
      date: new Date(departureDate).toISOString().split('T')[0],
      returnDate: new Date(returnDate).toISOString().split('T')[0],
      cabinClass: 'economy',
      adults,
      childrens,
      infants,
      sortBy: 'best',
      currency: 'USD',
      market: 'en-US',
      countryCode: 'US',
    };

    const query = new URLSearchParams(params).toString();
    const url = `${BASE_URL}/searchFlights?${query}`;
    // console.log('URL generada:', url);

    const response = await fetch(url, { method: 'GET', headers });
    const data = await response.json();

    if (!response.ok || !data?.data?.itineraries?.length) {
      console.error('Error o itinerarios vacíos:', response.status, data?.message);
      return { status: false, itineraries: [], message: data?.message || 'Error en la búsqueda de vuelos.' };
    }

    return { status: true, itineraries: data.data.itineraries, message: 'Búsqueda exitosa.' };
  } catch (error) {
    console.error('Error buscando vuelos:', error);
    return { status: false, itineraries: [], message: 'Error buscando vuelos.' };
  }
};



