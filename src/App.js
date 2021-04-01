import logo from './logo.svg';
import './App.css';
import Header from './Components/header'
import Home from './Components/home'
import React from 'react'

// function App() {
//   return (
//     <>
//     <div className="App">
//       <Header />
//     </div>
//     </>
//   );
// }

// export default App;

const App = () => {
  return (
    <>
      <div className="App">
        <Home />
      </div>
    </>
  );
};

export default App;
