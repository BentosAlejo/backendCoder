// class TicketManager {
//     #precioBaseDeGanancia
//     constructor(){
//         this.events = []
//         this.#precioBaseDeGanancia = 0.15
//     }
//     getEvents = () => {return this.events}
//     getNextId = () => {

//         const count = this.events.length

//         if(count > 0) {
//             const lastEvent = this.events[count-1]
//             const id = lastEvent.id +1
//             return id
//         }else{
//             return 1
//         }
//     }
//     addEvent = (name, place, price, capacity, date) => {
//         const id = this.getNextId()
//         const event = {
//             name,
//             place,
//             price: price * (1 + this.#precioBaseDeGanancia),
//             capacity: capacity ?? 50,
//             date: date ?? new Date().toLocaleDateString(),
//             participants: []
//         }
//         this.events.push(event)
//     }
// }

// const ticketManager = new TicketManager()
// ticketManager.addEvent("duki", "bs as", 120, 0, 0)
// console.log(ticketManager)

// ticketManager.addEvent("duketo", 'cali', 100, 0 , 0)
// console.log(ticketManager.getEvents())
class TicketManager {

    #precioBaseDeGanancia
    constructor(){
        this.events = []
        this.#precioBaseDeGanancia = 0.15
    }
    getEvents = () => this.events
    getNextId = () =>{
        const count = this.events.length
        if(count == 0)return 1

        const lastEvent = this.events[count-1]
        const lastId = lastEvent.id
        const nextId = lastId.id +1

        return nextId
    }





    addEvents = (name, place, price, capacity, date) => {
        const id = this.getNextId()
        const event = {
            id,
            name,
            place,
            price: price * (1 + this.#precioBaseDeGanancia),
            capacity: capacity ?? 50,
            date: date ?? new Date().toLocaleDateString(),
            participants: []
        }
        this.events.push(event)
    }

    addParticipant = (eventId, userId)  => {
       const event =  this.events.find(event => event.id == eventId)
       if(event == undefined) return -1

       if(event.participants.includes(userId)){
        event.participants.push(userId)
        return 1
       }else{return -1}
    }
    ponerEventoEnGira = (eventId, placenew, datenew) => {
        const event = this.events.find(event => event.id == eventId)
        const { name, price, capacity } = event
        this.addEvents(name, placenew, price, capacity, datenew)
    }
}

const manager = new TicketManager()

manager.addEvents("Duki", "Capri", 3000, 30, 0)
manager.addEvents("khea", "Catre", 1000, 60, 0)

console.log(manager.addParticipant(1, 333))
console.log(manager.addParticipant(1, 444))
console.log(manager.addParticipant(1, 555))

manager.ponerEventoEnGira(1, "bs as", null)

console.log(manager.events)