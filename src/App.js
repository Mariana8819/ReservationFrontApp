import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import PosadaList from "./components/PosadaList";
import Calendar from "./components/Calendar";
import RoomSelector from "./components/RoomSelector";
import GuestForm from "./components/GuestForm";

function App() {
  const [posada, setPosada] = useState(null);
  const [dates, setDates] = useState({ start: null, end: null});
  const [room, setRoom] = useState(null);
  const [guest, setGuest] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
  }, []);

  const handleReservationSubmit = (e) => {
    e.preventDefault();

    //valido que las fechas no sean null
    if (!dates.start || !dates.end) {
      alert("Por favor, selecciona las fechas de tu reserva.");
      return;
    }

    //Formatear las fechas par el mensaje
    const formatDate = (date) => date.toLocaleDateString();

    //Datos de la reserva
    const reservationData = {
      posada: posada,
      dates: {
        start: formatDate(dates.start),
        end: formatDate(dates.end),
      },
      room: room,
      guest: {
        name: guest.name,
        email: guest.email,
      },
    };

 console.log("aqui mis datos de la reserva para email:", reservationData);   

    //Enviar por correo electronico
    emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      reservationData
    )
    .then(
      (response) => {
        console.log("Correo enviado!", response.status, response.text);
      },
      (error) => {
        console.log("error al enviar el correo", error);
      }
    );

    const whatsappMessage = `Reserva realizada:
    Posada: ${posada}
    Fechas: ${formatDate(dates.start)} a ${formatDate(dates.end)}
    Habitación: ${room}
    Huésped: ${guest.name}, ${guest.email}, ${guest.phone}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=+5567999512908&text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="App">
      <Header />
      <PosadaList setPosada={setPosada}/>
      {posada && <Calendar setDates={setDates}/>}
      {dates.start  && dates.end && <RoomSelector setRoom={setRoom}/>}
      {room && <GuestForm setGuest={setGuest}/>}
      {guest.name && guest.email && guest.phone && (
        <div className="container my-4">
          <button
          className="btn btn-success btn-lg w-100"
          onClick={handleReservationSubmit}
          >
            Confirmar Reserva
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
