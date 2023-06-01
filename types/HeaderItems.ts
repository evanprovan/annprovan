export type Category = {
    map?(arg0: (work: any) => JSX.Element): import('react').ReactNode
    name: string
    slug: {
        current: string
    }
}
export type Works = {
    map(arg0: (work: any) => JSX.Element): import('react').ReactNode
    title: string
    slug: {
        current: string
    }
    category: Category
}

export type HeaderItems = {
    category: Category[]
    works: Works[]
}
