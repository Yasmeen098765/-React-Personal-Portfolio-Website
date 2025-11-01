import { useContext, useState, useEffect } from "react";
import { refContext } from './Reference';
import img_contact from "../assets/img/contact-img.svg"


export default function Contact() {
    const { contactRef } = useContext(refContext);
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })
    const [email, setEmail] = useState('')
    const updateForm = (key, value) => {
        setFormState({ ...formState, [key]: value })
    }
    const handlerValidate = (event) => {
        const forms = event.currentTarget
        if (!forms.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }
        forms.classList.add('was-validated')
        contactRef.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <section ref={contactRef} className="w-100  contact-background " id='contact'>
                <div className="container    px-4 px-sm-5 ">
                    <div className="row  d-flex flex-column flex-md-row position-relative   ">
                        <div className="col-12  col-sm-6 position-relative   contact-img d-flex justify-content-start  align-items-center     ">
                            <img src={img_contact} className=" img-fluid pt-0 pb-4 pb-md-0 pt-md-5" alt="image header " />
                        </div>
                        <div className="col-12  col-sm-6  contact-contain    ">
                            <h2 className=" text-white fs-1 fw-bold text-capitalize mb-4 ms-1">Get In Touch</h2>
                            <form class="row g-2 needs-validation " noValidate onSubmit={handlerValidate} >
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control text-capitalize  " id="firstname" placeholder="First Name" value={formState.firstName} onChange={(e) => updateForm('firstName', e.target.value)} required />
                                    <div class="valid-feedback fs-6 fw-bold text-capitalize ">
                                        valid.
                                    </div>
                                    <div class="invalid-feedback fs-6  text-capitalize">Please provide a valid First Name.</div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control text-capitalize" id="lastname" placeholder="Last Name" value={formState.lastName} onChange={(e) => updateForm('lastName', e.target.value)} required />
                                    <div class="valid-feedback fs-6 fw-bold text-capitalize ">
                                        valid.
                                    </div>
                                    <div class="invalid-feedback fs-6  text-capitalize">Please provide a valid Last Name.</div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="email" className="form-control text-capitalize" id="email" placeholder="Email Address" value={formState.email} onChange={(e) => updateForm('email', e.target.value)} required />
                                    <div class="valid-feedback fs-6 fw-bold text-capitalize ">
                                        valid.
                                    </div>
                                    <div class="invalid-feedback fs-6  text-capitalize">Please provide a valid Email Address.</div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="tel" className="form-control text-capitalize" id="phone" placeholder="Phone No" value={formState.phone} onChange={(e) => updateForm('phone', e.target.value)} required />
                                    <div class="valid-feedback fs-6 fw-bold text-capitalize ">
                                        valid.
                                    </div>
                                    <div class="invalid-feedback fs-6 text-capitalize">Please provide a valid Phone No.</div>
                                </div>
                                <div className="col-12 ">
                                    <textarea cols={20} className="form-control text-capitalize" id="msg" placeholder="Message" value={formState.message} onChange={(e) => updateForm('message', e.target.value)} required />
                                    <div class="valid-feedback fs-6 fw-bold text-capitalize ">
                                        valid.
                                    </div>
                                    <div class="invalid-feedback fs-6  text-capitalize">Please provide a valid Message.</div>
                                </div>
                                <div className="col-12 mt-4">
                                    <button type="submit" className="contact_btn py-3 px-5 text-capitalize" ><span>sending....</span></button>
                                </div>
                            </form>
                        </div>
                        <div className='Subscribe  d-flex flex-column flex-lg-row justify-content-center align-items-center'>

                            <div className='col-12 col-lg-5  mb-2 mb-lg-0  '>
                                <h3 className='fw-bold  text-dark'>Subscribe to our Newsletter<br></br>& Never miss latest updates</h3>
                            </div>
                            <div className='col-12 col-lg-7  ' >
                                <form >
                                    <div className='input_subscribe d-flex  '>
                                        <div className=' d-flex bg_subscribe'>
                                            <input type="email" className="   text-capitalize " id="emailsubscribe" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                            <button type="submit" className="subscribe_btn  text-capitalize" >submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


