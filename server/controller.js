const fortunes = [
    "Your dreams are worth your best efforts to achieve them",
"Your energy returns and you get things done",
"Your mind is creative, original and alert","A hunch is creativity trying to tell you something",
"A lifetime friend shall soon be made",
"A lifetime of happiness lies ahead of you",
"A light heart carries you through all the hard times",
"A new perspective will come with the new year",]
const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
module.exports = {
    getFortune: (req, res) => {
        let randomIndex = getRandomIndex(fortunes);
        const randomFortunes = fortunes[randomIndex];

        res.status(200).send(randomFortunes);
    },
    

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = getRandomIndex(compliments);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }
    addCompliment: (req, res) => {
        const { compliments } = req.body;
        compliments.push(compliment):
        res.senStatus(200); 
    }

}


