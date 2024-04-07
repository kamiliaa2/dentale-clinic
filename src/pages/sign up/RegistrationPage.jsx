import './registration.css';

const RegistrationPage = () => {
  return (
    <div className="registration-page-ktb2">
            <div className="left-container-ktb2">
        <h1>
        Join us for a smile-worthy journey towards optimal dental health! Sign up now to become a valued member of our dental family
        </h1>
    </div>
    <div className="right-container-ktb2">
    <h1 className="title-ktb2"> REGISTRATIONS </h1>
    <p className="sous-title-ktb2">Sign up into your account</p>
    
    <form action="" method="post">

        <div className="user-details-ktb2">
            <div className="input-box-ktb2">
                <label htmlFor="name">Fulll Name</label>
                <input type="text" name="name" id="name" placeholder="enter your full name" required />
            </div>
            <div className="input-box-ktb2">
                <label htmlFor="Email">Email</label>
                <input type="email" name="email" id="email" placeholder="info@xyz.com" required />
            </div>
            <div className="input-box-ktb2">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="********" required />
            </div>
            
            <div className="input-box-ktb2">
                <label htmlFor="birthday">Birthday</label>
                <input type="date" name="birthday" id="birthday"  required />
            </div>
            <div className="input-box-ktb2">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" name="phone" id="phone" placeholder="+213 - 555048264" required />
            </div>
            <div className="input-box-ktb2">
                <label htmlFor="confirmPassword">Confim Password</label>
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="******" required />
            </div>
         
            <div className="category-ktb2">
            <span className="gendre-title-ktb2">Gendre</span>
                <input type="radio" name="gender" id="male" />
                <label htmlFor="gender">Female</label>
                <input type="radio" name="gender" id="male" />
                <label htmlFor="gender">Male</label>
                
            </div>
  
            <div className="category-ktb2 ac-ktb2">
            <span className="account-type-ktb2">Account Type</span>
                <input type="radio" name="type" id="patient" />
                <label htmlFor="gender">Patient</label>
                <input type="radio" name="type" id="medcin" />
                <label htmlFor="gender">Medcin</label>
            </div>

        </div>
        <div className="button-contain-ktb2">
                <button type="submit">Sign Up</button>
            </div>
            <div className="loging-container-ktb2">
                <p>Already have an account? <a href="#google">Log in</a> </p>
            </div>
    </form>
    </div>
    </div>

  );
};

export default RegistrationPage;