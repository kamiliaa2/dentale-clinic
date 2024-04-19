import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import './Doctors.css'

const Doctors = () => {
    function scrolll() {
        var left = document.querySelector(".ct-odct");
        left.scrollBy(300,0);
 }
 
 function scrollr() {
        var right=document.querySelector(".ct-odct");
        right.scrollBy(-300,0);
 }
 
    return (
<>
              
      

        <div className='containerr-odct' >
            <div className='icon2-odct'>
        <button className='sub-odct' onClick={scrollr}><IoIosArrowBack/></button>
        </div>
            <div className="ct-odct">
<div className='cnt1-odct'>
<div id='dct1' className="doctor-odct">
<img src="/doctor1.png" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p className='p-odct'>055.25 Expert</p>
</div>

<div id='dct2' className="doctor-odct">
<img src="/doctor2.png" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p className='p-odct'>055.25 Expert</p>
</div>

<div id='dct3' className="doctor-odct">
<img src="/doctor3.png" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p className='p-odct'>055.25 Expert</p>
</div>

<div id='dct4' className="doctor-odct">
<img src="/doctor4.png" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p className='p-odct'>055.25 Expert</p>
</div>
</div>


<div className="cnt2-odct">
<div id='dct1' className="doctor-odct">
<img src="/doctor5.jpg" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p className='p-odct'>055.25 Expert</p>
</div>

<div id='dct2' className="doctor-odct">
<img src="/doctor12.jpg" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p className='p-odct'>055.25 Expert</p>
</div>

<div id='dct3' className="doctor-odct">
<img src="/doctor7.jpg" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p className='p-odct'>055.25 Expert</p>
</div>

<div id='dct4' className="doctor-odct">
<img src="/doctor8.jpg" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p className='p-odct'>055.25 Expert</p>
</div>
</div>


<div className="cnt3-odct">
<div id='dct1' className="doctor-odct">
<img src="/doctor9.jpg" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p className='p-odct'>055.25 Expert</p>
</div>

<div id='dct2' className="doctor-odct">
<img src="/doctor10.jpg" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p className='p-odct'>055.25 Expert</p>
</div>

<div id='dct3' className="doctor-odct">
<img src="/doctor11.jpg" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p className='p-odct'>055.25 Expert</p>
</div>

<div id='dct4' className="doctor-odct">
<img src="/doctor6.jpg" alt="doctorr" />
<h2>D.boucherb snani</h2>
<p className='p-odct'>055.25 Expert</p>
</div>
</div>

</div>
<div className='icon2-odct'>
<button className='sub-odct' onClick={scrolll}><IoIosArrowForward/></button>
</div>
</div>

</>

    );
}

export default Doctors;
