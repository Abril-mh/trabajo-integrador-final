const contacts = [
    {
        id: 1,
        name: 'Legolas',
        description: 'Solo vives una vez, pero no te olvides de mi',
        avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Legolas600ppx.jpg/250px-Legolas600ppx.jpg",
        lastConnection: '15:23',
        connectionStatus: 'online',
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'legolas ¿estas en camino?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'estoy en camino ¿estan todos reunidos?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'estamos casi todos ¿vienes con Aragon?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'si, no tardaremos mucho ¡No empiecen sin nosotros!',
                status: 'visto'
            }
        ]
    },
    {
        id: 2,
        name: 'Gimli',
        description: 'rie ama y sueña',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAhZldJVVwmuHkiA5pGoD-1CfFQKT8ZIDYSg&s',
        lastConnection: 'ahora',
        connectionStatus: 'online',
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: '¡Hola, Gimli!',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: '¿Qué quieres, hada con orejas de punta?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Siempre tan cordial. Quería saber si vos también vas a ir a La Comarca para el cumpleaños de Frodo',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'Por supuesto. La última vez que nos reunimos dije que iría. Y un enano siempre cumple su palabra',
                status: 'visto'
            },
            {
            emisor: 'YO',
            hora: '23:12',
            id: 3,
            texto: 'Excelente. No olvides llevarte tu banquito especial.',
            status: 'visto'
        },
        {
        emisor: 'OTRO',
            hora: '23:11',
            id: 2,
            texto: 'Ya veremos quién ríe mejor cuando te derrote en el concurso de cervezas. Está vez te ganaré. ¡Por mis barbas,que te ganaré!',
            status: 'visto'
        }
        ]
    },
    {
        id: 3,
        name: 'rodo',
        description: 'rie ama y sueña',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ99VBSnnohw28dRgJkxVFqJ6bDVJ74bHixvg&s',
        lastConnection: '18:26',
        connectionStatus: 'online',
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Oye, frodo! ¿Ya estás listo? Sam nos está esperando.',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'Dame 5 minutos, aún no termino mi segundo desayuno.',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Te dije que estés listo para las 11.',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'Tranquilo, utilizaremos el transbordador en el rio y llegaremos a Bree antes del final.',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Eso espero. Sam apartó el día y debe regresar con su familia al anochecer',
                status: 'visto'
            }
        ]
    }
];

export const getContactList = () => {
    return contacts
}

export const getContactById = (contact_id) => {
    for (const contact of contacts) {
        if (Number(contact.id) === Number(contact_id)) {
            return contact
        }
    }
    return null
}