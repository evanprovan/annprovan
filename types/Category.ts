export type Category = {
    category: {
        name: string;
        slug: {
            current: string;
        };
    };
    works: {
        map(arg0: (work: any) => JSX.Element): import('react').ReactNode;
        _id: string;
        title: string;
        slug: {
            current: string;
        };
        year: string;
        materials: {
            name: string;
        };
        width: number;
        height: number;
        depth: number;
        media: {
            _id: string;
            metadata: {
                lqip: string;
                dimensions: {
                    aspectRatio: number;
                    height: number;
                    width: number;
                };
            };
        };
        description: string;
        category: {
            name: string;
            slug: {
                current: string;
            };
        };
    };
};
