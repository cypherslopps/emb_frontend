import React from 'react';
import Image from 'next/image';
import { IoPaperPlane, IoPerson } from 'react-icons/io5';
import { Meta, FormInput, Button, ContactInfoBox } from '@/components';
import GuestLayout from '@/components/layouts/GuestLayout';
import { contactInfo, customerServiceTeam } from '@/lib/constants/contact';
import useHandleFormInputs from '@/hooks/useHandleFormInputs';


function Contact() {
  const { formData: contact, setFormData: setContactData, handleChange, errors, setErrors } = useHandleFormInputs({
    name: "",
    company_email: "",
    company_name: "",
    message: ""
  });
  console.log(contact, contactInfo, "info");

  return (
    <>
      <Meta 
        title="Contact - Empowered Blockchain Firm"
        keywords="contact us"
        description="get in touch us, contact us"
      />

      <section className="pt-12 flex flex-col gap-16 items-center">
        {/* Contact Header */}
        <header className="contact-header w-[50%] flex flex-col items-center text-center">
          <p className="border-2 border-gray-900 w-[max-content] flex items-center gap-x-2 rounded-lg px-4 py-0.5 text-[.9rem] text-gray-900">
            <IoPerson className="text-[.8rem]" />
            <span>lorem ipsum malador</span>
          </p>
          <h4 className="text-4xl mt-3 font-noto_sans dark:text-white font-bold leading-[1.14] w-9/12">Get in touch with us for more info...</h4>
          <p className="font-noto_sans w-9/12 dark:text-white/70 leading-[1.7] text-gray-600 mt-3 mb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, eius? Corrupti unde delectus ad illo molestiae eligendi?</p>
          <div className="customer-service flex gap-x-6 items-center justify-center">
            {customerServiceTeam.map((image, index) => (
              <figure key={index} className="bg-gray-200 rounded-full overflow-hidden">
                <Image 
                  src={image}
                  alt="customer-1"
                  className="w-[3rem] h-[3rem] object-cover"
                  priority
                />
              </figure>
            ))}
          </div>
        </header>

        {/* Content */}
        <section className="contact-info grid grid-cols-[max-content_37vw] items-center justify-between pt-10 pb-14">
          <div className="info flex flex-col gap-y-4 px-7">
            {/* Contact Info */}
            {contactInfo.map(contact => (
              <ContactInfoBox 
                key={contact.info} 
                {...contact} 
              />
            ))}
          </div>

          {/* Form */}
          <form className="contact-form flex flex-col bg-white dark:bg-black rounded-md bg-gray-300/5 py-10 px-8 gap-y-4">
            <FormInput 
              type="text"
              name="name"
              placeholder="Name"
              value={contact.name}
              error={errors?.name}
              variant="white"
              onChange={handleChange}
            />

            <FormInput 
              type="email"
              name="company_email"
              placeholder="Company email"
              value={contact.company_email}
              error={errors?.company_email}
              variant="white"
              onChange={handleChange}
            />

            <FormInput 
              type="text"
              name="company_name"
              placeholder="Company name"
              value={contact.company_name}
              error={errors?.company_name}
              variant="white"
              onChange={handleChange}
            />

            <FormInput 
              type="textarea"
              name="message"
              placeholder="Message"
              value={contact.message}
              error={errors?.message}
              variant="white"
              onChange={handleChange}
              className="resize-none"
            />

            <Button
              type="submit"
              role="submit"
              variant="fill-primary"
              classname="py-3 mt-1"
            >
              Send mail
              <IoPaperPlane className="text-base" />
            </Button>
          </form>
        </section>

      </section>
    </>
  )
}

export default Contact;

Contact.getLayout = (page) => {
  return (
    <GuestLayout>
      {page}
    </GuestLayout>
  )
}