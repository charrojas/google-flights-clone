# Proyecto de Búsqueda de Vuelos con SkyScraper API

Este proyecto es una aplicación web que permite a los usuarios buscar vuelos utilizando la API de **SkyScraper**. Los usuarios pueden especificar los parámetros de **origen**, **destino**, **fecha de ida**, **fecha de vuelta** y **cantidad de personas** para obtener una lista de vuelos disponibles. La aplicación devuelve detalles clave de cada vuelo, como la **fecha de salida**, **fecha de llegada**, **precio**, **duración**, **origen**, **destino** y **operadora**.

## Funcionalidades

### Búsqueda de Vuelos

La aplicación permite realizar búsquedas de vuelos según los siguientes parámetros:

- **Origen**: El nombre del aeropuerto desde el cual se desea partir.
- **Destino**: El nombre del aeropuerto al que se desea llegar.
- **Fecha de ida**: La fecha de salida del vuelo.
- **Fecha de vuelta**: La fecha en la que se desea regresar.
- **Cantidad de personas**: El número de pasajeros para la búsqueda.

La aplicación consume la API de **SkyScraper** para obtener los vuelos disponibles que cumplen con los parámetros de búsqueda. Para cada vuelo encontrado, se proporcionan los siguientes detalles:

- **Fecha de salida**: Momento en que el vuelo sale del aeropuerto de origen.
- **Fecha de llegada**: Momento en que el vuelo llega al destino.
- **Precio**: Costo total del vuelo.
- **Duración**: Tiempo total del vuelo.
- **Origen**: Aeropuerto de salida.
- **Destino**: Aeropuerto de llegada.
- **Operadora**: Aerolínea que opera el vuelo.

### Búsqueda de Aeropuertos

Para realizar la búsqueda de vuelos, la API de **SkyScraper** requiere los códigos IATA de los aeropuertos de origen y destino. Dado que los usuarios ingresan el nombre de los aeropuertos, la aplicación primero consume la API para buscar los aeropuertos por nombre y obtener sus respectivos códigos IATA.

Con esta información, la aplicación puede realizar la búsqueda de vuelos, proporcionando resultados precisos y completos.

## Uso

Búsqueda de aeropuertos: El usuario ingresa el nombre de un aeropuerto y la aplicación obtiene el código IATA correspondiente utilizando la API de SkyScraper.
Búsqueda de vuelos: Una vez que se obtiene el código IATA de los aeropuertos de origen y destino, el usuario puede ingresar los detalles de la búsqueda de vuelos (fecha de ida, fecha de vuelta y cantidad de personas).
Visualización de resultados: La aplicación muestra una lista de vuelos disponibles con la información relevante, como la fecha, duración, precio, operadora y más.
Este proyecto interactúa con la API de SkyScraper para realizar ambas búsquedas y devolver la información necesaria de manera fluida.



