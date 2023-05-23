import { getHeaderItems } from '@/sanity/sanity-utils'
import Navbar from './Navbar'
import { HeaderItems } from '@/types/HeaderItems'

export default async function Header(): Promise<JSX.Element> {
    const { works, category }: HeaderItems = await getHeaderItems()
    return (
        <header>
            <Navbar category={category} works={works} />
        </header>
    )
}
