const TimerInfo = document.querySelector('.TimerInfo');
const FormSubmit = document.querySelector('.Calculadora')

FormSubmit.addEventListener('submit', (e) => {
    e.preventDefault()
    const DataAtual = new Date();
    const DataSelecionada = new Date(document.getElementById('InputData').value)

    const diferencaEmMilissegundos = DataSelecionada - DataAtual;
    const diferencaEmDias = Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

    const dias = diferencaEmDias % 30;
    const meses = Math.floor((diferencaEmDias % 365) / 30);
    const anos = Math.floor(diferencaEmDias / 365);

    if (dias > 0) {
        TimerInfo.textContent = `Faltam ${dias} dias, ${meses} meses e ${anos} anos `;
    } else if (dias < 0) {
        TimerInfo.textContent = `Foram há ${Math.abs(dias)} dias, ${Math.abs(meses + 1)} meses e ${Math.abs(anos + 1)} anos `;
    } else if (dias === 0 && meses === 0 && anos === 0) {
        TimerInfo.textContent = "É hoje";
    }
})