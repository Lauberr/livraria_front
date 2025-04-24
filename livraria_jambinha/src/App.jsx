
import React from 'react';
import LoginForm from './pages/loginBiblio';  
import { Home } from './pages/Home';
import { Sidebar } from './components/Sidebar';
import { Layout } from './pages/Layout';

const App = () => {
  return (
    <div className="App">
      <LoginForm />
      {/* <Home/> */}
      <Layout/>
    </div>
  );
}

export default App;
