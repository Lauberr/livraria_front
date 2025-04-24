
import React from 'react';
import LoginBiblio from './pages/LoginBiblio';  
import Login from './pages/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Rota de login */}
        <Route path="/" element={<Login />} />

        {/* <Route path="/" element={<Layout showSidebar={true} />}> */}
          <Route path="loginBiblio" element={<LoginBiblio />} />
        {/* </Route> */}

        {/* Rota para página 404 */}
        {/* <Route path="*" element={<Pagina404 />} /> */}
      </Routes>
    </Router>
  );
}




// const App = () => {
//   return (
//     <div className="App">
//       <LoginForm />
//     </div>
//   );
// }

// export default App;
