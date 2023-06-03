export type About = {
    artiststatement: string
    bio: string
    education: string[]
    awardsgrants: string
    collections: string
    bibliography: string
}
export type Exhibitions = {
    map?(arg0: (work: any) => JSX.Element): import('react').ReactNode
    title: string
    year: number
    institution: string
    location: string
}

export type AboutPage = {
    about: About
    exhibitions: Exhibitions[]
}
