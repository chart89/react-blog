const initialState = {
    posts: [
        {
            id: '1',
            title: 'HALO Wars II',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('07-02-2022'),
            author: 'John Doe',
            categoryName: 'Sport'
        },
        {
            id: '2',
            title: 'HALO 5: Guardians',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            author: 'John Does',
            categoryName: 'Sport'
        },
        {
            id: '3',
            title: 'HALO: Infinite',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            author: 'John Doesen',
            categoryName: 'Movies'
        }
    ],

    category: [
        {
            categoryName: 'Sport',
        },
        {
            categoryName: 'News',
        },
        {
            categoryName: 'Movies',
        },
    ]
};


export default initialState;