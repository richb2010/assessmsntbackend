const { getFortune } = require("../server/controller");

const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/complimaent/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click',getCompliment)
const fortunesBtn = document.getElementById("fortuneButton")
const complimaentInput = document.getElementById("complimentInput")
const addComplimentButton = document.getElementById("addComplimentButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const addCompliment = () => {
    const complimaentInput = document.getElementById('complimentInput')
    const body ={
        compliment: complimaentInput.value
    }
    axios.post(`http://localhost:4000/api/compliment`, body)
    .then(() => alert('compliment has been added'))
    .catch ((err) => console.log(err) )
}

complimentBtn.addEventListener('click', getAlertData)
fortuneBtn.addEventListener('click',getAlertData)
addcomplimentBtn.addEventListener('click', addCompliment)
