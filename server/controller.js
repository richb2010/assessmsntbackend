module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }

}

module.exports = {

    getAdvice: (req, res) => {
       const Advice = ["A beautiful, smart, and loving person will be coming into your life, A dubious friend may be an enemy in camouflage, A lifetime of happiness lies ahead of you."];
        
       // choose random Advice
       let randomIndex = math.floor(MAth.random() * Advice.length);
       let randomAdvice = Advice[randomIndex];
       
       res.status(200).send(randomAdvice);
    }   
}