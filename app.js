const kiritilganParol = prompt("Parolni kiriting:"); 
const togriParol = "najottalim"; 
if (kiritilganParol === togriParol) {
  
} else {
  window.close()
}

const hisoblash = document.getElementById("btn");
hisoblash.addEventListener("click", () => {
  const sonInput = document.getElementById("input1");
  const son = Number(sonInput.value);

  let onliklar = Math.floor((son / 10) % 10); 
  let yuzliklar = Math.floor(son / 100); 
  let yangiSon = son - yuzliklar * 100 + onliklar * 100 + yuzliklar;

  console.log(yangiSon); // Yangi sonni ekranga chiqarish
  const natijaElement = document.getElementById("natija");
  natijaElement.textContent = "Natija: " + yangiSon;
});


const son = prompt("Katta sonni kiriting:"); 
const sonNumber = Number(son); 

const yuzliklar = Math.floor(sonNumber / 100);    

console.log("Yuzliklar xonasidagi son:", yuzliklar);      
