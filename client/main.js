const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://127.0.0.1:5500/client/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getAdvice = () => {
    axios.get("http://127.0.0.1:5500/client/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getAdvice2 = () => {
    axios.get("http://127.0.0.1:5500/client/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getAdvice3 = () => {
    axios.get("http://127.0.0.1:5500/client/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
complimentBtn.addEventListener('click', getCompliment)
AdviceBtn.addEventListener('click', getAdvice)
AdviceBtn.addEventListener('click', getAdvice)
AdviceBtn.addEventListener('click', getAdvice)

