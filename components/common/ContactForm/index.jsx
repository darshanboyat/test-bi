import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BsArrowRight } from "react-icons/bs";


const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    contactNumber: Yup.string().required('Contact Number is required'),
    companyName: Yup.string().required('Company Name is required'),
    message: Yup.string().required('Message is required'),
});

const ContactForm = () => {
    const initialValues = {
        fullName: '',
        email: '',
        contactNumber: '',
        companyName: '',
        message: '',
    };

    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm();
    };

    return (
        <div className='grid xs:grid-rows-2 lg:grid-cols-2 lg:ml-20' id='talk'>
            <div className="px-4 lg:px-12 lg:w-full h-fit">
                <h1 className='text-5xl font-bold py-8'>Have an idea? Get in touch, we’d be happy to hear from you</h1>
                <p>We are always looking out for new collaborations, whether you are a client who is passionate about a project or a talent who is interested in joining our team, our doors are always open.</p>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, errors, touched }) => (
                    <Form className='px-8 lg:my-4'>
                        <div className='flex flex-col'>
                            <Field className="my-[15px] backdrop-blur-sm rounded-xl px-2 py-2 w-[80vw] lg:w-[520px]" type="text" id="fullName" name="fullName" placeholder="Full Name" />
                            <p className='text-red-500'>
                                <ErrorMessage name="fullName" />
                            </p>
                        </div>

                        <div className='flex flex-col'>
                            <Field className="my-[15px] backdrop-blur-sm rounded-xl px-2 py-2 w-[80vw] lg:w-[520px]" type="email" id="email" name="email" placeholder="Email Address" />
                            <p className='text-red-500'>
                                <ErrorMessage name="email" />
                            </p>
                        </div>

                        <div className='flex flex-col'>
                            <Field className="my-[15px] backdrop-blur-sm rounded-xl px-2 py-2 w-[80vw] lg:w-[520px]" type="text" id="contactNumber" name="contactNumber" placeholder="Contact Number" />
                            <p className='text-red-500'>
                                <ErrorMessage name="contactNumber" />
                            </p>
                        </div>

                        <div className='flex flex-col'>
                            <Field className="my-[15px] backdrop-blur-sm rounded-xl px-2 py-2 w-[80vw] lg:w-[520px]" type="text" id="companyName" name="companyName" placeholder="Company Name" />
                            <p className='text-red-500'>
                                <ErrorMessage name="companyName" />
                            </p>
                        </div>

                        <div className='flex flex-col'>
                            <Field className="my-[15px] backdrop-blur-sm rounded-xl px-2 py-2 w-[80vw] lg:w-[520px] resize-none"
                                as="textarea"
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Tell us, Everything!`"
                            ></Field >
                            <p className='text-red-500'>
                                <ErrorMessage name="message" />
                            </p>
                        </div>


                        <div className="col-end-7 col-span-2 bg-gradient-to-r from-[#000076] to-[#7600EB] w-[80vw] lg:w-fit h-fit px-5 py-4 rounded-2xl mt-4 pr-20 lg:ml-0">
                            <button type="submit" disabled={Object.keys(errors).length > 0} className="flex w-[80vw] lg:w-[420px] justify-center Gilroy">
                                <span className="flex items-center justify-center w-full">
                                    Submit &nbsp; <BsArrowRight />
                                </span>
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ContactForm;
