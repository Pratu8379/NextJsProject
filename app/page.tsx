"use client"
import Link from 'next/link';
import { useState } from 'react';
import './pages/page.css'

import { useRouter } from 'next/navigation'
import { useMyContext } from './context/Context';
import ProductLogo from './pages/Components/logoComp/ProductLogo';
import HeaderText from './pages/Components/headerComp/HeaderText';
import DateOfBirthPicker from './pages/Components/dobPicker/DateOfBirthPicker';


export default function Home() {
  const { setData } = useMyContext();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: 'male', // Default value for gender
    panNumber: '',

  });



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const router = useRouter(); // Initialize the router

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validation logic (e.g., PAN number validation)
    const panNumberPattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    if (panNumberPattern.test(formData.panNumber)) {
      // Validation successful, navigate to the Confirmation page
      setData(formData)
      router.push(`/pages`);

    } else {
      alert('Invalid PAN number. Please enter a valid PAN number.');
    }
  };

  return (
    <div>
      <HeaderText header={'Enter Personal Details'} subtext={'Confirm your details on your PAN Card.'} />
      <div>
        <form onSubmit={handleSubmit} style={{ width: '65%', cursor: 'pointer' }}>
          <div className='flex flex-row justify-between flex-wrap my-6'>
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <DateOfBirthPicker />
          </div>
          <div className='flex flex-row justify-start flex-wrap'>
            <div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="flex justify-around ml-10 pl-10">
              <label className="flex items-center genderLabel">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleInputChange}
                  className="mr-2 w-12"
                />
                <span>Male</span>
              </label>

              <label className="flex items-center genderLabel">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleInputChange}
                  className="mr-2 w-12"
                />
                <span>Female</span>
              </label>
            </div>

          </div>
          <div className='my-6'>
            <input
              type="text"
              name="panNumber"
              value={formData.panNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className='mt-5 confirmBtn'>Confirm</button>
        </form>
      </div>
    </div>
  );
}
