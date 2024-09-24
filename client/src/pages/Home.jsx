import React, { useState } from 'react';
import Hero from '../components/Hero/Hero';
import Menu from '../components/Menu/Menu';
import MenuList from '../components/MenuList/MenuList';
import Offer from '../components/Offer/Offer';
import AppInfo from '../components/AppInfo/AppInfo';

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="home">
      <Hero />
      <Menu category={category} setCategory={setCategory} />
      <MenuList category={category} setCategory={setCategory} />
      <Offer />
      <AppInfo />
    </div>
  )
}

export default Home;
