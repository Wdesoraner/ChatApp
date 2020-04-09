const initState = {
    user: null,
    room: null,
    messages: [
        // {
        //     content: "Han, Maské et Maître Grims",
        //     author: 'Maské',
        //     created_at: new Date()
        // },
        // {
        //     content: "Hou Yeah",
        //     author: 'Maitre Grims',
        //     created_at: new Date()
        // },
        // {
        //     content: "De retour parce qu'on revient et ainsi de suite",
        //     author: 'Maské',
        //     created_at: new Date()
        // },
        // {
        //     content: "Ho Ho",
        //     author: 'Maitre Grims',
        //     created_at: new Date()
        // },
        // {
        //     content: "Y'a trop de trucs qui m'énervent sur Terre",
        //     author: 'Maské',
        //     created_at: new Date()
        // },
        // {
        //     content: "Les chômeurs sans travail, les orphelins sans père",
        //     author: 'Maské',
        //     created_at: new Date()
        // },
        // {
        //     content: "Plus rien ne tourne rond et personne veut l'admettre",
        //     author: 'Maské',
        //     created_at: new Date()
        // },
        // {
        //     content: "Et ça m'vénère, dis leur Maître",
        //     author: 'Maské',
        //     created_at: new Date()
        // },
        // {
        //     content: "Ça m'vénère ! Quand je marche en chaussettes dans la salle de bains",
        //     author: 'Maitre Grims',
        //     created_at: new Date()
        // },
        // {
        //     content: "Et qu'y a de l'eau partout j'fais ça tout les matins",
        //     author: 'Maitre Grims',
        //     created_at: new Date()
        // },
        // {
        //     content: "Je tire mal mon rideau qu'y a des motifs indiens",
        //     author: 'Maitre Grims',
        //     created_at: new Date()
        // },
        // {
        //     content: "Oh ça m'vénère, oui ça m'vénère !",
        //     author: 'Maitre Grims',
        //     created_at: new Date()
        // },
        // {
        //     content: "Okay D’accord, j’te comprends mais j’pensais pas à ça",
        //     author: 'Maské',
        //     created_at: new Date()
        // },
        // {
        //     content: "Plus aux problèmes de la jeunesse tu vois les trucs comme ça",
        //     author: 'Maské',
        //     created_at: new Date()
        // },
    ]
}


export const chat = function (state = initState, action) {
    switch (action.type) {
        case 'JOIN_REQUEST':
            return {
                ...state,
                user: action.user,
                room: action.room
            }
        case 'JOIN_SUCCESS':
            return {
                ...state,
                messages: action.messages
            }
    }

    return state;
}