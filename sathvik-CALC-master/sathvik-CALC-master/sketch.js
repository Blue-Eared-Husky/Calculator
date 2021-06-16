var number1,number2, btn_add, btn_sub, btn_div, btn_mult,total;
function setup() {
  createCanvas(600, 400);
 number1 = createInput();
 number1.position(20,80);
 number2 = createInput();
 number2.position(300,80);

 btn_Add = createButton("ADD");
 btn_Add.position(170,250);

 btn_Add.mousePressed(sum);
 
 btn_sub = createButton("SUBTRACT");
 btn_sub.position(250,250);
 btn_sub.mousePressed(subtract);
 
 btn_mult = createButton("MULTIPLY");
 btn_mult.position(150,290);
 btn_mult.mousePressed(multiply);

 btn_mult = createButton("DIVIDE");
 btn_mult.position(265,290);
 btn_mult.mousePressed(divide);
}

function draw() {
  background("black");
  if(total != NaN){
    fill("white");
    text(total,210,230)
  }
}

function sum(){
  total = parseInt(number1.value()) + parseInt(number2.value());
  console.log (total);
}

function subtract(){
  total = parseInt(number1.value()) - parseInt(number2.value());
  console.log (total);
}

function multiply(){
  total = parseInt(number1.value()) * parseInt(number2.value());
  console.log (total);
}

function divide(){
  total = parseInt(number1.value()) / parseInt(number2.value());
  console.log (total);
}