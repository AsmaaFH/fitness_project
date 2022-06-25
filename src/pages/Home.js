import React from 'react';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </>
  );
};

export default Home;
