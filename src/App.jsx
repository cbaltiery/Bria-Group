import './App.css';
import MemberGarden from './Components/MemberGarden';
import Header from './Components/Header'
import Footer from './Components/Footer'
import RegisterGarden from './Components/RegisterGarden';
import RegisterRoundtable from './Components/RegisterRoundtable';



function App() {
  return (
  <>
  <Header />
  <h1> Hello from App.jsx</h1>
  <RegisterGarden/>
  <RegisterRoundtable />
  <Footer />
  </>
  );
}

export default App;
