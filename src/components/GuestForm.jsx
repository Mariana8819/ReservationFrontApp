import React, { useState } from 'react'

const GuestForm = ({ setGuest }) => {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setGuest({ name, email, phone });
    };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Completa tus datos</h2>
        <input 
        type="text"
        placeholder='Nombre'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        />
        <input 
        type="email"
        placeholder='Correo electrónico'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
        <input 
        type="tel"
        placeholder='Teléfono'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        />
        <button  type='submit'>Guardar</button>
    </form>
  )
};

export default GuestForm;