module.exports.mockHostedbyData = [
    {
        id: 1,
        duringYourStay:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Viverra justo nec ultrices dui sapien. Tortor id aliquet lectus proin nibh nisl. Habitasse platea dictumst quisque sagittis purus sit. In metus vulputate eu scelerisque felis imperdiet proin. Morbi tristique senectus et netus et malesuada fames ac turpis. Odio tempor orci dapibus ultrices in iaculis nunc sed. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper',
        responseTime: 9,
        responseRate: 25,
        HostId: 1,
        PropertyId: 1,
        Host: {
            id: 1,
            name: 'Konnor',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            numberOfReviews: 453,
            identityVerified: true,
            isSuperhost: false,
            avatar: 'https://randomuser.me/api/portraits/men/0.jpg',
            joinedOn: '2013-11-22T08:00:00.000Z',
            HostLanguages: [
                {
                    LanguageId: 7,
                    Language: {
                        name: 'Russian',
                    },
                },
                {
                    LanguageId: 2,
                    Language: {
                        name: 'French',
                    },
                },
            ],
        },
        CoHosts: [
            {
                id: 1,
                HostId: 101,
                HostedById: 1,
                Host: {
                    name: 'Elvis',
                    avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
                },
            },
            {
                id: 2,
                HostId: 102,
                HostedById: 1,
                Host: {
                    name: 'Sidney',
                    avatar: 'https://randomuser.me/api/portraits/women/51.jpg',
                },
            },
        ],
    },
    {
        id: 80,
        duringYourStay:
            'Sit amet mauris commodo quis imperdiet. In iaculis nunc sed augue lacus viverra vitae congue eu. Commodo elit at imperdiet dui. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Magna eget est lorem ipsum dolor sit. Quis hendrerit dolor magna eget est lorem ipsum dolor. Bibendum enim facilisis gravida neque. Nisl tincidunt eget nullam non nisi est sit. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Orci phasellus egestas tellus rutrum tellus pellentesque',
        responseTime: 113,
        responseRate: 51,
        HostId: 80,
        PropertyId: 80,
        Host: {
            id: 80,
            name: 'Kathryn',
            about: 'Quam id leo in vitae turpis massa sed elementum',
            numberOfReviews: 974,
            identityVerified: true,
            isSuperhost: false,
            avatar: 'https://randomuser.me/api/portraits/women/29.jpg',
            joinedOn: '2012-06-03T07:00:00.000Z',
            HostLanguages: [
                {
                    LanguageId: 7,
                    Language: {
                        name: 'Russian',
                    },
                },
                {
                    LanguageId: 8,
                    Language: {
                        name: 'Italian',
                    },
                },
            ],
        },
        CoHosts: [],
    },
];

module.exports.mockReviewsData = [
    {
        rating: '4.28',
        numberOfReviews: 50,
    },
    {
        rating: '4.00',
        numberOfReviews: 50,
    },
];
