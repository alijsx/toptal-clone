import { useState, useEffect } from 'react';
import Header from '../Components/Home/Header';
import Partners from '../Components/Home/Patners'; // Corrected typo
import Tenant from '../Components/Home/Tenant';
import WorldClass from '../Components/Home/WorldClass';
import BenefitsSection from '../Components/Home/BenefitsSection';
import Navbar from '../Components/Navbar/Navbar';
import HiringProcess from '../Components/Home/HiringProcess';

const Home = () => {
  const [tenantData, setTenantData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchTenantData = async () => {
      try {
        const response = await fetch('/data.json'); // Adjust path as needed
        const data = await response.json();
        setTenantData(data);
      } catch (error) {
        console.error('Error fetching tenant data:', error);
      }
    };

    fetchTenantData();
  }, []);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
          <Navbar />
      <Header tenantData={tenantData} activeIndex={activeIndex} />
      <Partners />
      <Tenant data={tenantData} onCardClick={handleCardClick} />
      <WorldClass />
      <BenefitsSection/>
      <HiringProcess/>
    </div>
  );
};

export default Home;
