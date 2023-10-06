import React from 'react'
import { Formik, Form, useField} from 'formik'
import * as Yup from 'yup';
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className='py-4'>
      <label className='reg-text' htmlFor={props.id || props.name}>{label}</label>
      <input className='px-2 py-4 w-full rounded-lg outline-yellow' {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyTextArea = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
      <div className='py-4'>
          <label htmlFor={props.id || props.name}>{label}</label>
          <textarea className="px-2 py-4 rounded-lg w-full outline-yellow" {...field} {...props} />
          {meta.touched && meta.error ? (
              <div className="error">{meta.error}</div>
          ) : null}
      </div>
  );
};

const ContactMe = () => {
  return (
    <div className='flex flex-col p-10 lg:p-20'>
      <div className='flex font-semibold text-5xl mb-16 justify-left text-white'>
        Let's have a chat!
      </div>
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: ''
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required('Required'),
            email: Yup.string()
              .email('Invalid Email Address')
              .required('Please provide a valid Email Address'),
            message: Yup.string()
                .min(10, "Please tell me a little bit about yourself!.")
          })}
          onSubmit={(values, actions) => {
            try {
              emailjs.send('service_2snvt7w', 'template_ae5py8k', values, 'FGQukGB0HlsTJriNM')
                .then(() => {
                  toast.success(`Thank you for your submission ${values.name}! I will reach back out to you shortly.`)
                  actions.setSubmitting(false);
                  actions.resetForm();
                });
              }
              catch {
                  toast.error(`Your form was not submitted. Please try again later.`);
                  actions.setSubmitting(false);
              }
            }
          }
        >
          <div className='flex flex-col text-center-4 p-8 border-2 justify-center rounded-lg bg-gray text-black'>
            <Form>
              <MyTextInput
                label=''
                name='name'
                type='text'
                placeholder='Name'
              />

              <MyTextInput
                label=''
                name='email'
                type='email'
                placeholder='Email Address'
              />

              <MyTextArea
                label=''
                name='message'
                rows='4'
                placeholder='Please tell me a little about yourself!'
              />

              <button className='text-blue bg-rblack rounded-lg p-4' type='submit'>Submit</button>
            </Form>
          </div>
        </Formik>
      </div>
  )
}

export default ContactMe