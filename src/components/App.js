import React from 'react';
import Nav from './nav/Nav';
import CampingList from '../components/campingList/campinglist/CampingList';
import './App.css';

export default function App() {
  return (
    <>
      <Nav />
      <CampingList />
    </>
  );
}
