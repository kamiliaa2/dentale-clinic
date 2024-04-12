import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import './Doctors.css'

const Doctors = () => {
    function scrolll() {
        var left = document.querySelector(".ct");
        left.scrollBy(300,0);
 }
 
 function scrollr() {
        var right=document.querySelector(".ct");
        right.scrollBy(-300,0);
 }
 
    return (
<>
        <div className='containerr'id='our-doctors' >
            <div className='icon2'>
        <button className='sub' onClick={scrollr}><IoIosArrowBack/></button>
        </div>
            <div className="ct">
<div className='cnt1'>
<div id='dct1' className="doctor">
<img src="/doctor1.png" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p>055.25 Expert</p>
</div>

<div id='dct2' className="doctor">
<img src="/doctor2.png" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p>055.25 Expert</p>
</div>

<div id='dct3' className="doctor">
<img src="/doctor3.png" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p>055.25 Expert</p>
</div>

<div id='dct4' className="doctor">
<img src="/doctor4.png" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p>055.25 Expert</p>
</div>
</div>


<div className="cnt2">
<div id='dct1' className="doctor">
<img src="/doctor5.jpg" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p>055.25 Expert</p>
</div>

<div id='dct2' className="doctor">
<img src="/doctor12.jpg" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p>055.25 Expert</p>
</div>

<div id='dct3' className="doctor">
<img src="/doctor7.jpg" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p>055.25 Expert</p>
</div>

<div id='dct4' className="doctor">
<img src="/doctor8.jpg" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p>055.25 Expert</p>
</div>
</div>


<div className="cnt3">
<div id='dct1' className="doctor">
<img src="/doctor9.jpg" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p>055.25 Expert</p>
</div>

<div id='dct2' className="doctor">
<img src="/doctor10.jpg" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p>055.25 Expert</p>
</div>

<div id='dct3' className="doctor">
<img src="/doctor11.jpg" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p>055.25 Expert</p>
</div>

<div id='dct4' className="doctor">
<img src="/doctor6.jpg" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p>055.25 Expert</p>
</div>
</div>

</div>
<div className='icon2'>
<button className='sub' onClick={scrolll}><IoIosArrowForward/></button>
</div>
</div>

</>

    );
}

export default Doctors;
