import About from '@/components/About'
import AnimatedTitle from '@/components/AnimatedTitle'
import { getAbout } from '@/sanity/sanity-utils'

export default async function AboutPage() {
    const about = await getAbout()
    return (
        <section className="container">
            <AnimatedTitle>About</AnimatedTitle>

            <About about={about} />
        </section>
    )
}
export const metadata = {
    title: 'About - Ann Provan',
}
