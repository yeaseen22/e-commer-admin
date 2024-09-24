// import React from 'react';
// import CustomInput from '../Components/CustomInput';


// const ForgotPassword = () => {
//     return (
//         <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
//             <div className="my-5 w-25 rounded-3 bg-white mx-auto p-4">
//                 <h3 className='text-center title'>Forgot Password</h3>
//                 <p className='text-center'>Please enter your register email to get reset password</p>
//                 <form action="">
//                     <CustomInput type='text' label='Enter Email' id='email' />
//                     <button className='border-0 px-3 py-2 text-white fw-bold w-100 mt-3' type='submit' style={{ background: "#ffd333" }}>Send Link</button>
//                 </form>

//             </div>
//         </div>
//     )
// }

// export default ForgotPassword



import React from "react";
import CustomInput from "../components/CustomInput";

const Forgotpassword = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Forgot Password</h3>
        <p className="text-center">
          Please Enter your register email to get reset password mail.
        </p>
        <form action="">
          <CustomInput type="password" label="Email Address" id="email" />

          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Send Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgotpassword;
