import dbConnect from "./dbConnect.js"
export function createCoffee(req, res) {
    // connect to firestore
    const db = dbConnect()
    // add a new doc to coffes collection
    db.collection('coffees').add(req.body)
    // send back a response ( err or not)
.then(doc => res.status(201).send({ success: true, message: 'Created coffee: ' + doc.id}))
.catch(err => res.status(500).send({success: false, message: err}))
}

export function getAllCoffess(re,res) {
    const db = dbConnect()
    db.collection('coffees').get()
    .then(collection => {
        const coffeeList = collection.docs.map(doc => doc.data())
        res.send(coffeeList)
    })
   
    .catch(err => res.status(500).send({ success: false, message: err }))

}