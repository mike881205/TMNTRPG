const importAll = r => {
    let images = [];
    r.keys().forEach(item => {
        images.push({
            name: item.replace('./', ''),
            source: r(item)
        });
    });
    return images;
};

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

console.log(images)

const CharactersArr = () => {
    const array = [
        {
            name: "Leo",
            power: 2,
            speed: 2,
            range: 2,
            level: 1,
            health: ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
            special: [],
            points: 0,
            type: "hero",
            img: () => {
                const filter = images.filter(I => { return I.name.includes('leo') });
                return filter[0];
            },
            selected: false
        },
        {
            name: "Donny",
            power: 2,
            speed: 1,
            range: 3,
            level: 1,
            health: ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
            special: [],
            points: 0,
            type: "hero",
            img: () => {
                const filter = images.filter(I => { return I.name.includes('donny') });
                return filter[0];
            },
            selected: false
        },
        {
            name: "Raph",
            power: 3,
            speed: 2,
            range: 1,
            level: 1,
            health: ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
            special: [],
            points: 0,
            type: "hero",
            img: () => {
                const filter = images.filter(I => { return I.name.includes('raph') });
                return filter[0];
            },
            selected: false
        },
        {
            name: "Mikey",
            power: 2,
            speed: 3,
            range: 1,
            level: 1,
            health: ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
            special: [],
            points: 0,
            type: "hero",
            img: () => {
                const filter = images.filter(I => { return I.name.includes('mikey') });
                return filter[0];
            },
            selected: false
        },
        // {
        //     name: "Splinter",
        //     power: 3,
        //     speed: 1,
        //     range: 2,
        //     level: 1,
        //     health: ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        //     special: [],
        //     points: 0,
        //     type: "hero",
        //     img: {
        //         name: '',
        //         src: '',
        //     },
        //     selected: false
        // },
        // {
        //     name: "April",
        //     power: 1,
        //     speed: 3,
        //     range: 2,
        //     level: 1,
        //     health: ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        //     special: [],
        //     points: 0,
        //     type: "hero",
        //     img: {
        //         name: '',
        //         src: '',
        //     },
        //     selected: false
        // },
        // {
        //     name: "Casey",
        //     power: 2,
        //     speed: 2,
        //     range: 3,
        //     level: 1,
        //     health: ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        //     special: [],
        //     points: 0,
        //     type: "hero",
        //     img: {
        //         name: '',
        //         src: '',
        //     },
        //     selected: false
        // },
        // {
        //     power: 1,
        //     speed: 1,
        //     range: 2,
        //     health: ['.', '.', '.', '.'],
        //     type: "enemy - light",
        //     img: {
        //         name: '',
        //         src: '',
        //     }
        // },
        // {
        //     power: 2,
        //     speed: 2,
        //     range: 2,
        //     health: ['.', '.', '.', '.', '.', '.'],
        //     type: "enemy - medium",
        //     img: {
        //         name: '',
        //         src: '',
        //     }
        // },
        // {
        //     power: 3,
        //     speed: 2,
        //     range: 3,
        //     health: ['.', '.', '.', '.', '.', '.', '.', '.'],
        //     type: "enemy - heavy",
        //     img: {
        //         name: '',
        //         src: '',
        //     }
        // },
        // {
        //     name: "Bebop",
        //     power: 4,
        //     speed: 3,
        //     range: 4,
        //     health: ['.', '.', '.', '.', '.', '.', '.', '.'],
        //     type: "boss",
        //     img: {
        //         name: '',
        //         src: '',
        //     }
        // },
        // {
        //     name: "Rocksteady",
        //     power: 4,
        //     speed: 4,
        //     range: 3,
        //     health: ['.', '.', '.', '.', '.', '.', '.', '.'],
        //     type: "boss",
        //     img: {
        //         name: '',
        //         src: '',
        //     }
        // },
    ];

    return array;
};

export default CharactersArr;