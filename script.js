let inputs = document.querySelector('#input');
let outputs = document.querySelector('#output');
let itemleft = document.querySelectorAll('.item')
let itemright = document.querySelectorAll('.item_2')
let input_text = document.querySelector('.input-text');
let output_text = document.querySelector('.output-text');




let mez = 'RUB';
let mezsag = 'USD';
inputs.addEventListener('keyup', function () {



  getValueLeft();
})
outputs.addEventListener('keyup', function () {

  getValueRight();
})







itemleft.forEach((item) => {
  item.addEventListener('click', function () {
    itemleft.forEach((item_2) => {
      item_2.classList.remove('active');
      this.classList.add('active');

    });
  })
})

itemleft.forEach((item) => {
  item.addEventListener('click', function () {
    mez = this.innerText;
    getValueLeft()

  });
})




itemright.forEach((item) => {
  item.addEventListener('click', function () {
    itemright.forEach((item) => {
      item.classList.remove('active_2');
      this.classList.add('active_2');

    });
  })
})

itemright.forEach((item) => {
  item.addEventListener('click', function () {
    mezsag = this.innerText;
    getValueLeft()

  });
})


const getValueLeft = async () => {

  const response = await fetch(`https://api.exchangerate.host/latest?base=${mez}&symbols=${mezsag}`);
  const data = await response.json();

  let out = data.rates[`${mezsag}`]
  outputs.value = out * inputs.value
  input_text.innerText = `1 ${mez} = ${out}   ${`${mezsag}`}`
  output_text.innerText = `1 ${`${mezsag}`}= ${1/out}   ${mez}  `
}


const getValueRight = async () => {

  const response = await fetch(`https://api.exchangerate.host/latest?base=${mez}&symbols=${mezsag}`);
  const data = await response.json();

  let out = data.rates[`${mezsag}`]
  inputs.value = outputs.value / out;



}