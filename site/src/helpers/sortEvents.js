// src/helpers/sortEvents.js
// Cette fonction est un helper Handlebars qui trie et filtre les événements en fonction du type (futur ou passé).
// Elle prend en paramètre un tableau d'événements, le type (future ou past), et les options Handlebars.
module.exports = function (events, type, options) {
    // Assurez-vous que le tableau d'événements est défini, sinon initialisez-le comme un tableau vide.
    events = events || [];
    // Filtrer les événements en fonction du type spécifié (futur ou passé).
    const filteredEvents = events.filter(event => {
        const eventDate = new Date(event.date);
        // On décale d'un jour pour laisser l'événement un jour de plus dans Future
        eventDate.setDate(eventDate.getDate() + 1);
        const currentDate = new Date();
        // Si le type est 'future', retourner les événements dont la date est postérieure à la date actuelle.
        if (type === 'future') {
            return eventDate > currentDate;
        }
        // Si le type est 'past', retourner les événements dont la date est antérieure à la date actuelle.
        else if (type === 'past') {
            return eventDate < currentDate;
        }
        // Si le type n'est pas reconnu, retourner tous les événements par défaut.
        return true;
    });
    // Trier les événements par date, du premier au dernier pour les futurs événements, et du dernier au premier pour les événements passés.
    filteredEvents.sort((a, b) => {
        if (type === 'future') {
            return new Date(a.date) - new Date(b.date);
        } else if (type === 'past') {
            return new Date(b.date) - new Date(a.date);
        }
    });
    // Traiter chaque événement et concaténer les résultats.
    return filteredEvents.map(event => options.fn(event)).join('');
};
