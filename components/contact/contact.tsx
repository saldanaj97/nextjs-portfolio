'use client'

import emailjs from '@emailjs/browser'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  name: string
  email: string
  company: string
  message: string
}

const variants = {
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
    y: 0,
  },
  initial: {
    opacity: 0,
  },
}

const ContactInfo = () => {
  return (
    <motion.div className="flex flex-col items-center">
      <motion.div className="flex flex-col items-center justify-between bg-primary md:w-3/4 lg:items-start">
        <h1 className="mb-2 text-2xl font-extrabold text-white md:text-7xl">Let&apos;s work together</h1>
        <div className="flex flex-col justify-around text-center lg:text-left">
          <motion.div className="mb-4 flex flex-col justify-center">
            <p className="font-bold text-white">Email</p>
            <a href="mailto:saldanaj97@gmail.com" className="text-white">
              Saldanaj97@gmail.com
            </a>
          </motion.div>
          <motion.div className="mb-4 flex flex-col">
            <p className="font-bold text-white">LinkedIn</p>
            <a href="https://www.linkedin.com/in/juan-saldana/" className="text-white">
              Juan Saldana
            </a>
          </motion.div>
          <motion.div className="mb-4 flex flex-col">
            <p className="font-bold text-white">Location</p>
            <p className="text-white">Dallas, TX</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Contact() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Inputs>()
  const ref = useRef(null)
  const formRef = useRef(null)
  const [formHasError, setFormHasError] = useState(false)
  const [successfullySentForm, setSuccessfullySentForm] = useState(false)
  const isInView = useInView(ref, { margin: '-100px' })

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

  const ContactForms = () => {
    return (
      <motion.div className="flex w-3/4 flex-col items-center p-2 md:p-4 lg:w-1/4">
        <motion.div
          className="phoneSvg -z-1 absolute"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
          onAnimationComplete={() => {}}
        >
          <svg width="300px" height="300px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
              strokeWidth={0.2}
              stroke={'#D33F49'}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
            />
          </svg>
        </motion.div>

        <motion.form
          ref={formRef}
          className="z-10 flex w-full flex-col gap-10"
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          {/* <motion.p className="text-center text-2xl font-semibold text-white lg:text-left">Reach out</motion.p> */}
          <motion.div>
            <motion.p className="text-sm text-white">Name</motion.p>
            <input placeholder="Name" {...register('name')} className="w-full rounded-md p-2 text-sm" />
            {errors.company && <span>This field is required</span>}
          </motion.div>
          <motion.div>
            <motion.p className="text-sm text-white">Email</motion.p>
            <input
              placeholder="Email"
              className="w-full rounded-md p-2 text-sm"
              {...register('email', { required: true })}
            />
            {errors.company && <span>This field is required</span>}
          </motion.div>
          <motion.div>
            <motion.p className="text-sm text-white">Company name</motion.p>
            <input placeholder="Company" className="w-full rounded-md p-2 text-sm" {...register('company')} />
            {errors.company && <span>This field is required</span>}
          </motion.div>
          <motion.div>
            <motion.p className="text-sm text-white">Message</motion.p>
            <textarea
              placeholder="Message"
              className="h-48 w-full resize-none rounded-md p-2 text-sm"
              {...register('message')}
            />
            {errors.company && <span>This field is required</span>}
          </motion.div>
          <div className="flex flex-col items-center justify-center">
            {successfullySentForm && <p className="mb-4 text-green-500">Success</p>}
            {formHasError && <p className="mb-4 text-red-500">Error submitting form</p>}
            <motion.div className="flex flex-row justify-center">
              <input
                type="submit"
                className="mx-auto rounded-md bg-accent px-8 py-3 text-lg font-semibold text-white hover:cursor-pointer"
              />
            </motion.div>
          </div>
        </motion.form>
      </motion.div>
    )
  }

  return (
    <div id="contact">
      <motion.div
        className="flex h-full w-full flex-col items-center justify-center lg:flex-row"
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <ContactInfo />
        <ContactForms />
      </motion.div>
    </div>
  )
}
