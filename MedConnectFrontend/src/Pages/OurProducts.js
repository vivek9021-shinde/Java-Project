import React from 'react';
import './OurProduct.css';
import { useNavigate } from 'react-router-dom';
import agmentin from '../images/medicine.jpg';
import cetrizine1 from '../images/medicine1.jpg';
import paracetamol from '../images/medicine2.jpg';
import cimetidine from '../images/medicine3.jpg';
import brufin from '../images/medicine5.jpg';
import aspirin from '../images/medicine6.jpg';
import cetrizine2 from '../images/medicinee.jpp.jpg';
import corex from '../images/medicine7.jpg';
import vitaminC from '../images/medicine9.jpg';
import Thyroxin from '../images/medicine8.jpg';
import Oral from '../images/medicine11.jpg';
import Salt from '../images/medicine12.jpg';
import Insulin from '../images/medicine13.jpg';
import Syrup from '../images/medicine14.jpg';
import Pantoprazole from '../images/medicine15.jpg';
import VitaminB from '../images/medicine16.jpg';
import Nafcillin from '../images/medicine17.jpg';
import penicilin from '../images/medicine18.jpg';
import Tempra from '../images/medicine19.jpg';
import Antacid from '../images/medicine2.jpg';

const OurProduct = [
  { name: 'Agmintine', image: agmentin,use:'Use-Respiratory tract infections,Ear infections ,Sinus infections..', price: '₹100', discount: '40% off', rating: '4.5' },
  { name: 'Becool', image: cetrizine1,use:'Use-Skin Allergies, runny nose, sneezing, and itchy throat..', price: '₹120', discount: '20% off', rating: '4.0' },
  { name: 'Paracetamol', image: paracetamol,use:'Use-Joint pain,fever,headaches, body aches,Cold and Flu..', price: '₹80', discount: '30% off', rating: '4.7' },
  { name: 'Cimetidine', image: cimetidine, use:'Use-Gastroesophageal Reflux Disease,Zollinger-Ellison Syndrome..',price: '₹150', discount: '25% off', rating: '4.2' },
  { name: 'Brufin', image: brufin, use:'Use-Headaches,Muscle pain,back pain,Toothaches,Menstrual cramps..',price: '₹90', discount: '15% off', rating: '4.3' },
  { name: 'Aspirin', image: aspirin,use:'Use-Prevention of Blood Clots,Menstrual cramps,Minor injuries like sprains..',price: '₹60', discount: '10% off', rating: '4.1' },
  { name: 'Cetrizine', image: cetrizine2,use:'Use-Sneezing,Runny nose,Itchy nose, throat,Nasal congestion,Watery eyes..', price: '₹50', discount: '5% off', rating: '4.6' },
  { name: 'Corex', image: corex,use:'Use-Cough Relief,Cold,Sneezing,Itchy or runny nose,hay fever,sinusitis..', price: '₹200', discount: '35% off', rating: '4.8' },
  { name: 'Vitamin C', image: vitaminC, use:'Use-Prevention and Treatment of Vitamin C Deficiency ,Immune System Support..',price: '₹70', discount: '50% off', rating: '4.9' },
  { name: 'Thyroxin', image: Thyroxin,use:'Use-Treatment of Hypothyroidism,Goiter Treatment,Thyroid Cancer..', price: '₹70', discount: '50% off', rating: '4.9' },
  { name: 'Oral Pills', image: Oral, use:'Use-Diabetes,Cholesterol,Allergic Reactions,Infection Prevention..',price: '₹70', discount: '50% off', rating: '4.9' },
  { name: 'Iodized Salt', image: Salt, use:'Use-Prevention of Iodine Deficiency,Thyroid and Mental Heath..',price: '₹70', discount: '50% off', rating: '4.9' },
  { name: 'Insulin', image: Insulin, use:'Use-Managing Diabetes,Blood Sugar Regulation,During Stress..',price: '₹70', discount: '50% off', rating: '4.9' },
  { name: 'Cough Syrup', image:Syrup, Oral, use:'Use-Relieving Dry Cough,Relieving Wet or Productive Cough..',price: '₹70', discount: '50% off', rating: '4.9' },
  { name: 'Pantoprazole', image: Pantoprazole, use:'Use-Gastroesophageal Reflux Disease,Peptic Ulcers,Erosive Esophagitis..',price: '₹70', discount: '50% off', rating: '4.9' },
  { name: 'Vitamin B Complex', image: VitaminB, use:'Use-Energy Production,Support for the Nervous System,Cardiovascular Health..',price: '₹70', discount: '50% off', rating: '4.9' },
  
  { name: 'Nafcillin', image: Nafcillin, use:'Use-Skin and soft tissue infections,Bone and joint infections,Prophylaxis..',price: '₹70', discount: '50% off', rating: '4.9' },
  { name: 'Penicillin G', image: penicilin, use:'Use-Respiratory tract infections,Skin and soft tissue infections..',price: '₹70', discount: '50% off', rating: '4.9' },
  { name: 'Tempra', image: Tempra, use:'Use-Pain Relief,Fever Reduction,Post-Vaccination Discomfort..',price: '₹70', discount: '50% off', rating: '4.9' },
  { name: 'Antacid', image: Antacid, use:'Use-Relief of Heartburn,Treatment of Acid Indigestion,Stomach Ulcers..',price: '₹70', discount: '50% off', rating: '4.9' },

];
<h1>Our Products</h1>
const OurProducts = () => {
  const navigate = useNavigate();

  
   // Check if user is logged in
   const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';

   const handleBuyNow = (product) => {
     if (!isAuthenticated) {
       alert('You must be logged in to buy products. Please log in first.');
       navigate('/Rgisteration'); 
     } else {
       
       navigate('/CheckoutPage', { state: { product } });
     }
   };
  return (
    <div className="product-container">
         <h1>Our Products</h1>
    <div className="product-grid">
      {OurProduct.map((product, index) => (
        <div className="product-card" key={index}>
          <img className="product-image" src={product.image} alt={product.name} />
          <p className="product-name">{product.name}</p>
          <p className="product-use">{product.use}</p>
          <p className="product-price">{product.price}</p>
          <p className="product-discount">{product.discount}</p>
          <p className="product-rating">⭐ {product.rating}</p>
          <button className="buy-now-button" onClick={() => handleBuyNow(product)}>
            Buy Now
          </button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default OurProducts;







  
