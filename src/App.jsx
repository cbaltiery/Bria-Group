import './App.css';
import MemberGarden from './components/MemberGarden';
import Header from './components/Header'
import Footer from './components/Footer'
import RegisterGarden from './components/RegisterGarden';
import DisplayGarden from './components/DisplayGarden';


function App() {
  return (
  <>
  <Header />
  {/* <RegisterGarden/> */}
  <DisplayGarden/>
  <Footer />
  </>
  );
}

export default App;
