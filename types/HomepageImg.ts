export type HomepageImg = {
    homepageimg: {
        _id: string;
        metadata: {
            palette: {
                darkMuted: {
                    background: string;
                    foreground: string;
                    population: number;
                    title: string;
                };
            };
            lqip: string;
            dimensions: {
                aspectRatio: number;
                height: number;
                width: number;
            };
        };
    };
};
