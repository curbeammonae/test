const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers = {
    'test123' : {
        'birthName': "this is a test babes",
    'birthImage':
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCBWY2T9VHc8igfgQYLD8VU9RdqXuU87d3A&usqp=CAU",
    'birthQuote': "hee hee",
   
  },
  's3h0' : {
    'birthName': "Squilliam Fancyson",
  'birthImage':
    "https://static.wikia.nocookie.net/spongebob/images/9/91/Band_Geeks_012.png/revision/latest?cb=20191124031401",
  'birthQuote': "Squidward Tentacles has the fanciest restaurant in Bikini Bottom, and he does not suck eggs",
 
 //faith
 
},
's6p91' : {
  'birthName': "Mr.Krabs",
'birthImage':
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9c0yJd2-ynTKwp4DaDPCYFNKFy7flmq9jZA&usqp=CAU",
'birthQuote': "The money is always right!",
//rach
},
'q6y3k' : {
  'birthName': 
  "Spongebob",
 'birthImage':
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8VAO1DBAt4GhyWdHUFlw5jyQsjD0wTxDDA&usqp=CAU",
 'birthQuote': "I'm ugly and I'm proud!",
//stef
},
'r43zr' : {'birthName': "Squidward",
 'birthImage':
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW9kOWGhjiLHSJJvlPqhAwjOGL26ulHsOj_w&usqp=CAU",
 'birthQuote': "I hate all of you.",
//ale
},
'x60k' : {'birthName': "Gary",
 'birthImage':
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8PqgzNYgpjPNacoDSGdXjZ5Ia3PMq9Iutw&usqp=CAU",
 'birthQuote': "meow",
//kevin
},
 't79s2' : {'birthName': "Plankton",
 'birthImage': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlLetVQsOgXXXGzupnCJNt4VCUvd5NObFWzQ&usqp=CAU",
  'birthQuote': "“I will destroy all of you!",
//jade
},

'raj6' : {
  'birthName': "Larry the Lobster",
 'birthImage': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR33ulIKTTYUYiUcCmhAa07ikoVviWt35Vn8Q&usqp=CAU",
 'birthQuote': "You guys wanna go lift some weights?",
//jasmin
},
'u1zi4' : {
  'birthName': "Mrs.Puff",
 'birthImage': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVW4aVnHYgvqUmAcd7rFrhkYZy6zslBkAGgQ&usqp=CAU",
 'birthQuote': "You need six hundred to pass, you got six.",
//jeemo
},
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json('OOPS')
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})