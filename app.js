let billAmount, tipPercentage, satisfactionLevel, tipAmount, suggestedTip
let totalAmount = 0
const unkownPercentage = document.getElementById('unknownpercentages')
const form =document.getElementById('my-form')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    form.reset()

})

const getValue = ()=>{
    billAmount = document.getElementById('bill').value
    if (!billAmount){
        return displayError('Please input Bill Amount')
    }
    tipPercentage = document.getElementById('tip-percentage').value
    satisfaction = document.getElementsByName('satisifcation')
    if(!tipPercentage && !unkownPercentage.checked){
        return displayError('Please input tip percentage or select I dont know to get suggested tip amount')
    }
    if (unkownPercentage.checked) {
        for(i = 0; i < satisfaction.length; i++) { 
            if(satisfaction[i].checked) {
            satisfactionLevel = satisfaction[i].id
            suggestedTip = satisfaction[i].value}
    }}
    calcTip(billAmount, tipPercentage, satisfactionLevel, suggestedTip)
}

const calcTip = (bill, tip, happiness, suggestedTip)=>{
    bill = Number(bill)
    suggestedTip= Number(suggestedTip)
    tip=Number(tip)
    if(!tip){
        tipAmount= bill* (suggestedTip/100)
       
        
    } else {
    tipAmount = bill* (tip/100)
  }
    totalAmount = Number(bill) + Number(tipAmount)
 
     displayResult(bill, totalAmount, tipAmount, happiness,suggestedTip)

}

const init = ()=>
{
    document.querySelector('.output-container').innerHTML = ""
}


const displayError = (errorMsg)=>{
    init()
    const html = `<p class="error-p"> ${errorMsg} </p>`
    document.querySelector('.output-container').insertAdjacentHTML('beforeend', html)

}
const displayResult = (bill, totalBill, tipAmount, happiness, suggestedTip)=>{
    init()
    if (happiness){
        const second = `<p class="suggested-p"> General tip % is 15%. You feel ${happiness}, so ${suggestedTip}% tip is suggested. </p>`
        document.querySelector('.output-container').insertAdjacentHTML('beforeend', second)
    
        }
    const first = `<p> Your bill amount is $${bill}.</p> <p class="result-p"> You should tip <span class="strong">$${Number(tipAmount).toFixed(2)}</span>.</p> <p class="result-p">Total bill should be <span class="strong">$${Number(totalBill).toFixed(2)}</span>.</p>`
    document.querySelector('.output-container').insertAdjacentHTML('beforeend', first)

    
}