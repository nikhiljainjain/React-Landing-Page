import React from 'react';
import TopNavBar from './components/TopNavBar';
import SearchHotel from './components/SearchHotel';
import CenterText from './components/CenterText'

function App() {
  return (
	<div className="bg" id="apppage">   
		<TopNavBar /> 
		<CenterText />
		<SearchHotel />
	</div>
  );
}

export default App;
