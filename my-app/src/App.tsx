/** @format */

import React from 'react';
import logo from './logo.svg';
import Modi from './Modi';
import './App.css';
import TheBasic from './HandBook-thebasic';
import EveryTypes from './HandBook-EverydayTypes';

function App() {
	return (
		<div className='App'>
			나는 APP 컴포넌트
			<Modi />
			<TheBasic />
			<EveryTypes />
		</div>
	);
}

export default App;
