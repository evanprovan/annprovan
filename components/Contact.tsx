'use client'
import { urlFor } from '@/sanity/sanity-utils'
import { Contact } from '@/types/Contact'
import { ValidationError, useForm } from '@formspree/react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {
    contact: Contact
}

const Contact = ({ contact }: Props) => {
    const fadeInForm = {
        visible: {
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.2,
            },
        },
        hidden: {
            transition: {
                duration: 0.2,
                delayChildren: 0,
                staggerChildren: 0.1,
            },
        },
    }
    const fadeInDesc = {
        visible: {
            opacity: 1,
            color: 'rgb(22, 22, 22)',
            transition: {
                delay: 0.3,
                duration: 1,
            },
        },
        hidden: {
            opacity: 0,
            color: '#ff0037',
            transition: {
                duration: 0.4,
            },
        },
    }
    const fadeInInput = {
        visible: {
            opacity: 1,
            color: 'rgb(22, 22, 22)',
            transition: {
                duration: 1,
            },
        },
        hidden: {
            opacity: 0,
            color: '#ff0037',
            transition: {
                duration: 0.4,
            },
        },
    }

    const [state, handleSubmit] = useForm('mrgvwppz')

    return (
        <div className="contactwrapper">
            {state.succeeded && (
                <motion.div
                    className="success"
                    variants={fadeInDesc}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <h2>Thank you!</h2>
                    <p>Your message has been sent.</p>
                </motion.div>
            )}
            {!state.succeeded && (
                <div className="contactform">
                    <motion.p
                        className="contactdesc"
                        variants={fadeInDesc}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {contact.description}
                    </motion.p>

                    <motion.form
                        className="form"
                        name="contact"
                        variants={fadeInForm}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <motion.div className="splitinput" variants={fadeInInput}>
                            <div className="inputgroup">
                                <label htmlFor="name" className="headline-font">
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    enterKeyHint="next"
                                    autoComplete="name"
                                />
                            </div>
                            <div className="inputgroup">
                                <label htmlFor="email" className="headline-font">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    enterKeyHint="next"
                                    autoComplete="email"
                                />
                            </div>
                        </motion.div>
                        <motion.div variants={fadeInInput}>
                            <label htmlFor="message" className="headline-font">
                                Message
                            </label>
                            <textarea id="message" name="message" required />
                        </motion.div>
                        <ValidationError
                            className="error"
                            field="name"
                            prefix="Full Name"
                            errors={state.errors}
                        />
                        <ValidationError
                            className="error"
                            field="email"
                            prefix="Email Address"
                            errors={state.errors}
                        />
                        <ValidationError
                            className="error"
                            field="message"
                            prefix="Message"
                            errors={state.errors}
                        />
                        <motion.button
                            type="submit"
                            className="primary headline-font"
                            variants={fadeInInput}
                            whileTap={{ scale: 0.95 }}
                            disabled={state.submitting}
                        >
                            Submit
                        </motion.button>
                    </motion.form>
                </div>
            )}
            <div className="contactimage">
                <motion.div
                    style={{ display: 'flex', justifyContent: 'center' }}
                    variants={fadeInDesc}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <Image
                        src={urlFor(contact.image._id).width(650).url()}
                        quality={60}
                        alt="Ann Provan"
                        width={contact.image.metadata.dimensions.width}
                        height={contact.image.metadata.dimensions.height}
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Contact
