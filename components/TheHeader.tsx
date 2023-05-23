import { getHeaderItems } from '@/sanity/sanity-utils'
import Navbar from './Navbar'
import { HeaderItems } from '@/types/HeaderItems'

{
    /* @ts-expect-error Async Server Component */
}
export default async function TheHeader() {
    const { works, category }: HeaderItems = await getHeaderItems()
    return (
        <header>
            <Navbar category={category} works={works} />
        </header>
    )
}
