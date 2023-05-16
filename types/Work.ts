export type Work = {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    year: string;
    materials: {
        length: number;
        map(arg0: (material: any, index: number) => JSX.Element): import('react').ReactNode;
        name: string;
    };
    width: number;
    height: number;
    depth: number;
    media: [
        {
            asset: {
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
        }
    ];
    description: string;
    category: {
        name: string;
        slug: {
            current: string;
        };
    };
};
