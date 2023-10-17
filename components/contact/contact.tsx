'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  name: string
  email: string
  company: string
  message: string
}

export default function Contact() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  const ContactForms = () => {
    return (
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="Name" {...register('name')} />
        {errors.company && <span>This field is required</span>}

        <input defaultValue="Email" {...register('email', { required: true })} />
        {errors.company && <span>This field is required</span>}

        <input defaultValue="Company" {...register('company')} />
        {errors.company && <span>This field is required</span>}

        <input type="text" defaultValue="Message" {...register('message')} />
        {errors.company && <span>This field is required</span>}

        <input type="submit" />
      </form>
    )
  }

  return (
    <section id="contact">
      <div className="flex min-h-screen flex-row items-center justify-center">
        <ContactInfo />
        <ContactForms />
      </div>
    </section>
  )
}

const ContactInfo = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-1/2 flex-col bg-primary">
        <h1 className="mb-2 items-center justify-center text-4xl font-bold text-white md:text-7xl">
          Let&apos;s work together
        </h1>
        <div className="mb-4 flex flex-col">
          <p className="font-bold text-white">Email</p>
          <a href="mailto:saldanaj97@gmail.com" className="text-white">
            Saldanaj97@gmail.com
          </a>
        </div>
        <div className="mb-4 flex flex-col">
          <p className="font-bold text-white">LinkedIn</p>
          <a href="https://www.linkedin.com/in/juan-saldana/" className="text-white">
            Juan Saldana
          </a>
        </div>
        <div className="mb-4 flex flex-col">
          <p className="font-bold text-white">Location</p>
          <p className="text-white">Dallas, TX</p>
        </div>
      </div>
    </div>
  )
}
