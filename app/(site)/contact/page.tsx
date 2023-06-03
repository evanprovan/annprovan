import AnimatedTitle from '@/components/AnimatedTitle'
import Contact from '@/components/Contact'
import { getContact } from '@/sanity/sanity-utils'

export default async function ContactPage() {
    const contact = await getContact()
    return (
        <section className="container">
            <AnimatedTitle>Contact</AnimatedTitle>
            <Contact contact={contact} />
        </section>
    )
}
export const metadata = {
    title: 'Contact - Ann Provan',
}
