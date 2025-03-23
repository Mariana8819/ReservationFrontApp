import React from 'react'

const RoomSelector = ({ setRoom}) => {
    const rooms = [ "Habitación Individual", "habitacion Doble", "Suite"];

  return (
    <div>
        <h2>Selecciona una habitación</h2>
        <ul>
            {rooms.map((room, index) => (
                <li key={index} onClick={() => setRoom(room)}>
                    {room}
                </li>
            ))}
        </ul>
    </div>
  );
};

export default RoomSelector;