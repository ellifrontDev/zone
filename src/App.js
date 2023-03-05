import './App.css';
import Header from "./componens/Header";
import Hero from "./componens/Hero";
import Service from "./componens/Service";
import Care from "./componens/Care"
import Meet from "./componens/Meet";
import Get from "./componens/Get";
import Footer from "./componens/Footer";
import Last from "./componens/Last"

function App() {
  return (
    <div className="App">
      <Header/>
        <Hero/>
        <Service/>
      <Care/>
        <Meet/>
        <Get/>
        <Footer/>
        <Last/>
    </div>
  );
}

export default App;
