'use client'

import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMailSharp } from 'react-icons/io5'

import { contactInfo, socialMediaLinks } from '../portfolioData'

type Inputs = {
  name: string
  email: string
  company: string
  message: string
}

const ContactInfo = () => {
  return (
    <motion.div className="flex flex-col items-center">
      <motion.div className="flex flex-col items-center justify-between bg-primary md:w-3/4 lg:items-start">
        <h1 className="mb-2 text-center text-2xl font-extrabold text-white md:text-3xl lg:text-left lg:text-4xl xl:text-5xl">
          {contactInfo.title}
        </h1>
        <div className="flex flex-col justify-around text-center lg:text-left">
          <motion.div className="mb-4 flex flex-col justify-center">
            <p className="font-bold text-white">Email</p>
            <a href={`mailto:${socialMediaLinks.gmail}`} className="text-white">
              {socialMediaLinks.gmail}
            </a>
          </motion.div>
          <motion.div className="mb-4 flex flex-col">
            <p className="font-bold text-white">LinkedIn</p>
            <a href={contactInfo.linkedIn} className="text-white">
              {contactInfo.name}
            </a>
          </motion.div>
          <motion.div className="mb-4 flex flex-col">
            <p className="font-bold text-white">Location</p>
            <p className="text-white">{contactInfo.location}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const ContactForms = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, translateY: 20 },
    show: { opacity: 1, translateY: 0 },
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Inputs>()
  const formRef = useRef(null)
  const [formHasError, setFormHasError] = useState(false)
  const [successfullySentForm, setSuccessfullySentForm] = useState(false)

  const onSubmit: SubmitHandler<Inputs> = () => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(
        (result) => {
          setSuccessfullySentForm(true)
          console.log(result.text)
        },
        (error) => {
          setFormHasError(true)
          console.log(error.text)
        },
      )
  }

  return (
    <motion.div
      className="flex w-3/4 flex-col items-center p-2 md:w-1/2 md:p-4 lg:w-1/3"
      variants={container}
      animate="show"
      initial="hidden"
    >
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0, duration: 1 }}>
        <SocialMediaButtons />
        <p className="my-8 text-center font-bold text-white">OR</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex w-full"
      >
        <motion.form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-10">
          <motion.div variants={item}>
            <motion.p className="text-sm text-white">Name</motion.p>
            <input placeholder="Name" {...register('name')} className="w-full rounded-md p-2 text-sm" />
            {errors.name && <span>This field is required</span>}
          </motion.div>
          <motion.div variants={item}>
            <motion.p className="text-sm text-white">Email</motion.p>
            <input
              placeholder="Email"
              className="w-full rounded-md p-2 text-sm"
              {...register('email', { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </motion.div>
          <motion.div variants={item}>
            <motion.p className="text-sm text-white">Company name</motion.p>
            <input placeholder="Company" className="w-full rounded-md p-2 text-sm" {...register('company')} />
            {errors.company && <span>This field is required</span>}
          </motion.div>
          <motion.div variants={item}>
            <motion.p className="text-sm text-white">Message</motion.p>
            <textarea
              placeholder="Message"
              className="h-48 w-full resize-none rounded-md p-2 text-sm"
              {...register('message')}
            />
            {errors.message && <span>This field is required</span>}
          </motion.div>
          <div className="flex flex-col items-center justify-center">
            {successfullySentForm && <p className="mb-4 text-green-500">Success</p>}
            {formHasError && <p className="mb-4 text-red-500">Error submitting form</p>}
            <motion.div variants={item} className="flex flex-row justify-center">
              <input
                type="submit"
                className="mx-auto rounded-md bg-accent px-8 py-3 text-lg font-semibold text-white hover:cursor-pointer"
              />
            </motion.div>
          </div>
        </motion.form>
      </motion.div>
    </motion.div>
  )
}

const SocialMediaButtons = () => {
  return (
    <motion.div className="flex flex-row justify-evenly">
      <a href={socialMediaLinks.linkedin} target="_blank" rel="noreferrer">
        <FaLinkedin size={50} className="mx-4 cursor-pointer text-white" />
      </a>
      <a href={socialMediaLinks.github} className="mx-4 cursor-pointer text-white" target="_blank" rel="noreferrer">
        <FaGithub size={50} />
      </a>
      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="mx-4 cursor-pointer text-white"
        target="_blank"
        rel="noreferrer"
      >
        <IoMailSharp size={50} />
      </a>
    </motion.div>
  )
}

export default function Contact() {
  return (
    <div id="contact">
      <div className="flex h-full w-full flex-col items-center justify-center lg:flex-row">
        <ContactInfo />
        <ContactForms />
      </div>
    </div>
  )
}
