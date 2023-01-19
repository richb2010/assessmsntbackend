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
const complimentInput = document.getElementById("complimentInput")
const addComplimentButton = document.getElementById("addComplimentButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortunes/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortunesBtn.addEventListener('click', getFortune)

const addCompliment = () => {
    const complimentInput = document.getElementById('complimentInput')
    const body ={
        compliment: complimentInput.value
    }
    axios.post(`http://localhost:4000/api/compliment`, body)
    .then(() => alert('compliment has been added'))
    .catch ((err) => console.log(err) )
}
const getAlertData = (type) => {
    axios.get((`http://localhost:4000/api/${type}`)
        .then(res => {
            const data = re.data;
            alert (data);
        })
};
complimentBtn.addEventListener('click', () => getAlertData)
fortuneBtn.addEventListener('click',getAlertData)
addComplimentBtn.addEventListener('click', () => addCompliment('compliment'));
