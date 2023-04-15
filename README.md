Descripción de la aplicación

La aplicación es una página web que muestra información de órdenes de servicio. Al hacer clic en un botón, la aplicación consume un endpoint que devuelve una lista de objetos JSON que contienen información sobre órdenes de servicio, como el nombre del cliente, el correo electrónico, el servicio contratado, la cantidad, el precio, el profesional asignado, la fecha y hora de la orden, el estado de pago y el tipo de pago utilizado.

La aplicación muestra la información de la primera orden en la lista y permite al usuario obtener información de otras órdenes haciendo clic en el botón correspondiente.
Consumo de un endpoint en una variable de entorno

La aplicación utiliza una variable de entorno para determinar el endpoint del cual debe obtener la información de las órdenes de servicio. Esta variable de entorno se define en un archivo .env que se encuentra en la raíz del proyecto. El archivo .env debe tener la siguiente variable definida:

EJEMPLO

REACT_APP_ORDENES_ENDPOINT=http://localhost:3001/ordenes/orden

En este ejemplo, el valor de REACT_APP_ORDENES_ENDPOINT es http://localhost:3001/ordenes/orden, que es la URL del endpoint que la aplicación debe consumir para obtener la información de las órdenes de servicio.

En la aplicación, la variable de entorno se utiliza en el método obtenerOrdenes para obtener los datos de las órdenes de servicio. El código que utiliza la variable de entorno es el siguiente:

obtenerOrdenes = () => {
  fetch(process.env.REACT_APP_ORDENES_ENDPOINT)
    .then(response => response.json())
    .then(data => this.setState({ ordenes: data }));
};

Este código utiliza fetch para hacer una solicitud GET al endpoint especificado en la variable de entorno. El resultado se convierte en un objeto JSON y se guarda en el estado de la aplicación.

Es importante destacar que la variable de entorno debe tener el prefijo REACT_APP_ para que React la reconozca como una variable de entorno válida. Además, esta variable de entorno solo se puede acceder en el lado del cliente (en el navegador), no en el servidor, ya que es una variable de entorno específica de React.





