import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ordenes: []
    };
  }

  obtenerOrdenes = () => {
    fetch(`${process.env.REACT_APP_ENDPOINT}`)
      .then(response => response.json())
      .then(data => this.setState({ ordenes: data }));
  };

  render() {
    return (
      <div><h2>Información de las órdenes:</h2>
        <button onClick={this.obtenerOrdenes}>Obtener Órdenes</button>
        {this.state.ordenes.length > 0 && (
          <div >
            
            {this.state.ordenes.map(orden => (
              <div className="contenedor_card" key={orden.id}>
                <p>Nombre: {orden.nombre}</p>
                <p>Correo: {orden.email}</p>
                <p>Servicio: {orden.servicio}</p>
                <p>Cantidad: {orden.cantidad}</p>
                <p>Precio: {orden.precio}</p>
                <p>Profesional: {orden.profesional}</p>
                <p>Día y Hora: {orden.diaHora}</p>
                <p>Estado de pago: {orden.estadoPago}</p>
                <p>Payment ID: {orden.payment_id}</p>
                <p>Tipo de pago: {orden.payment_type}</p>
                <p>Merchant Order ID: {orden.merchant_order_id}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
