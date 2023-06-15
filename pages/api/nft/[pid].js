const data = [
    {
        id: 0,
        name: 'Octopus',
        image: 'https://aquadream-vercel.vercel.app/images/octopus0.jpg',
        desc: 'Octopus'
    },
    {
        id: 1,
        name: 'Silver Octopus',
        image: 'https://aquadream-vercel.vercel.app/images/octopus1.jpg',
        desc: 'Silver Octopus'
    },
    {
        id: 2,
        name: 'Gold Octopus',
        image: 'https://aquadream-vercel.vercel.app/images/octopus2.jpg',
        desc: 'Gold Octopus'
    }
]

export default async function handler(req, res) {
    const Silver = [1, 2, 3]
    const Gold = [4, 5]
    const { pid } = req.query;
    var Type = 0;
    if (Silver.includes(Number(pid))) {
        console.log("Silver")
        Type = 1;
    }

    if (Gold.includes(Number(pid))) {
        Type = 2;
    }

    if (Type == 0) {
        data[Type].name = `Octopus #${pid}`;
        data[Type].nftType = 0;
        data[Type].id = pid;
    } else if (Type == 1) {
        data[Type].name = `Silver Octopus #${pid}`;
        data[Type].nftType = 1;
        data[Type].id = pid;
    } else if (Type == 2) {
        data[Type].name = `Gold Octopus #${pid}`;
        data[Type].nftType = 2;
        data[Type].id = pid;
    }

    res.send(data[Type]);
}