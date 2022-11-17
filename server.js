const express = require("express"); //since i know im using express for this App, i am going to make sure we have access to express
const app = express(); //storing express in 'app' variable. 'app' can just use all methods that come with express
const cors = require("cors");
const PORT = 8000;

/*first thing we do is setup server to hear request and respond*/

app.use(cors());

const bikiniBottomObject = [
    {
        test123 : {birthName: "this is a test babes",
        birthImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCBWY2T9VHc8igfgQYLD8VU9RdqXuU87d3A&usqp=CAU",
        birthQuote: "hee hee",
       
      },
}
];
//app.get is the request when when users go to main url(it's always '/'), .get is a method that comes with express
//serving up HTML(located in notes)
//you will always see request, response
//when app.get hears the network request, it fires what's inside
app.get("/", (request, response) => {
  //our response is going to be to send file, our main index.html file
  //__dirname tells our server where to look to get index.html file
  response.sendFile(__dirname + "/index.html");
});
//serving up JSON(in notes)
//since they are requesting API, we respond with JSON (response.json)
//after the slash put':' for query parameter
app.get("/api/:ourfish", (request, response) => {
  //whenever a request comes in, if their is rapperName after the slash. i can grab it with request.params,rapperName
  //store in variable
  response.json(bikiniBottomObject);
  response.json(bikiniBottomObject);

/*
  const idurl = request.params.ourfish.toLowerCase();

  console.log(idurl);
  //if the object 'rappers' has a proprtery of 'rappersName' (what we get from the url)
  console.log(bikiniBottomObject[idurl]);

  if (bikiniBottomObject[idurl]) {
    //we respond with that 'rappersName' listed in the 'rappers' object listed above
    response.json(bikiniBottomObject[idurl]);
  } else {
    response.json("no data");
  }*/
});
//telling the app to listen for our app.get request on our PORT
//if it hears the rquest, it will display on our PORT
app.listen(process.env.PORT || PORT, () => {
  console.log(`the server is running on ${PORT}`);
});
