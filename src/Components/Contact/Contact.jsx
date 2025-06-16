import React from 'react';
import HeadContact from './HeadContact';
import Approach from './Approach';
import Form from './Form';
function Contact() {
  return (
    <div className="pt-20 mb-50 ">
     <div className="flex flex-col pt-10 space-y-10 items-center  w-9/12 mx-auto ">

     <HeadContact/>
     <Approach/>
     <Form/>
     
     </div>

    </div>
  )
}

export default Contact
