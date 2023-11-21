"use client"
import { useState } from 'react';

const DateOfBirthPicker = () => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const handleDayChange = (e: any) => {
        setDay(e.target.value);
    };

    const handleMonthChange = (e: any) => {
        setMonth(e.target.value);
    };

    const handleYearChange = (e: any) => {
        setYear(e.target.value);
    };

    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    return (
        <div className='d-flex flex-row justify-between' style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div className='outerDiv'>
                <select id="day" value={day} onChange={handleDayChange} className='mx-5 dob'>
                    {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
                        <option key={day} value={day}>
                            {
                                day > 9 ? day : `0${day}`
                            }
                        </option>
                    ))}
                </select>
            </div>

            <div className='outerDiv'>
                <select id="month" value={month} onChange={handleMonthChange} className='mx-5 dob'>
                    {monthNames.map((month, index) => (
                        <option key={index + 1} value={index + 1}>
                            {month}
                        </option>
                    ))}
                </select>
            </div>

            <div className='outerDiv'>
                <select id="year" value={year} onChange={handleYearChange} className='mx-5 dob'>
                    {Array.from({ length: 100 }, (_, index) => new Date().getFullYear() - index).map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default DateOfBirthPicker;
