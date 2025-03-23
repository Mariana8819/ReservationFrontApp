import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const Calendar = ({ setDates }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleDateChange = (dates) => {
      if (dates && Array.isArray(dates)){
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        setDates({ start, end });
      }
    };

  return (
    <div className='container my-4'>
        <h2 className='mb-3'>Selecciona tus fechas</h2>
        <DatePicker 
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={handleDateChange}
        inline
        />
    </div>
  );
};

export default Calendar;