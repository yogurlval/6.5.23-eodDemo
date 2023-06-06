const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


let videoGame = {
    name: "Legend of Zelda",
    releaseDate: "May 2023",
    console: "Nintendo Switch",
    description: "The Legend of Zelda: Tears of the Kingdom is an ${genre} game where you play as a hero named Link, saving the world from a great evil.",
    imageURL: "https://www.zeldadungeon.net/wp-content/uploads/2022/09/totk_1270x720.jpg"

}

let mario = {
    name: "Super Mario Bros",
    releaseDate: "sometime in the 90s",
    console: "Nintendo Entertainment System (NES)",
    description: "Super Mario Bros is a platforming game where you play the titular hero Mario, and save Princess Peach from an evil turtle named Bowser",
    imageURL: "https://images.nintendolife.com/c229220f2279a/when-did-the-legend-begin.large.jpg"
}

app.get('/api/test', (req,res) =>{
    res.status(200).send(`<h1> This is a test string</h1>`)
    // res.status(200).send({name: "Valentina Bowman"})
})

app.get('/game/:game', (req,res)=>{
    let { game } = req.params
    if( game === 'zelda'){
        res.status(200).send(videoGame)
    } else {
        res.status(200).send(mario)
    }
    
})







app.listen(4000, console.log(`Server running on localhost:4000`))