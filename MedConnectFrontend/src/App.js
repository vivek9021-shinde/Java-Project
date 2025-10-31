import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './Pages/Home';
import Reminder from './Pages/Reminder';
import RemindDesc from './Pages/RemindDesc';
import Contact from './Pages/Contact';
import OurProducts from './Pages/OurProducts';
import SummaryPage from "./Pages/SummaryPage";
import CheckoutPage from './Pages/CheckoutPage';
import DiseaseCheck from './Pages/DiseaseChek';
import DiseaseDesc from './Pages/ChekerDesc';
import UserRegistration from './Pages/UserRegistration';
import UserHistory from "./component/UserHistory";


function App() {
    return (
       <Router> {/* here we Wrap entire application in Router */}
        <Navbar />
        <div className="container-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ourproducts" element={<OurProducts />} />
            <Route path="/CheckoutPage" element={<CheckoutPage />} /> 
            <Route path="/summary" element={<SummaryPage />} />
            <Route path="/Reminder" element={<Reminder />} />
           <Route path="/Desc" element={<RemindDesc />} /> 
           <Route path="/Cheker" element={<DiseaseCheck/>} /> 
           <Route path="/Description" element={<DiseaseDesc/>} /> 
           <Route path="/Rgisteration" element={<UserRegistration/>} /> 
           <Route path="/UserHistory" element={<UserHistory/>} />
           
          


            


          </Routes>
        </div>
        <Footer />
       </Router> 
    );
}

export default App;
