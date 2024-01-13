
export function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}


export function generateRandomData() {
    const names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack"];
    const roles = ["Reporter ", "Bot Analyst", "Sales Manager", "Team Editor", 'PPC Expert'];
    const statuses = ["Free", "Busy", "Working", "On Vacation"];

    const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

    const data = [];

    for (let i = 1; i <= 100; i++) {
        const name = `${getRandomElement(names)} ${i}`;
        const email = `${name.toLowerCase().replace(' ', '.')}@example.com`;
        const status = getRandomElement(statuses);
        const role = getRandomElement(roles);


        const entry = {
            name,
            email,
            status,
            role,
        };

        data.push(entry);
    }

    return data;
}

