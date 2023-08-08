//*? Creación de variables
let deleteHTML = document.getElementById('delete')
let pointHTML = document.getElementById('point')
let zeroHTML = document.getElementById('zero')
let oneHTML = document.getElementById('one')
let twoHTML = document.getElementById('two')
let threeHTML = document.getElementById('three')
let fourHTML = document.getElementById('four')
let fiveHTML = document.getElementById('five')
let sixHTML = document.getElementById('six')
let sevenHTML = document.getElementById('seven')
let eightHTML = document.getElementById('eight')
let nineHTML = document.getElementById('nine')
var acHTML = document.getElementById('ac')
let parenthesisHTML = document.getElementById('parenthesis')
let percentageHTML = document.getElementById('percentage')
let divisionHTML = document.getElementById('division')
let multiplicationHTML = document.getElementById('multiplication')
let subtractionHTML = document.getElementById('subtraction')
let additionHTML = document.getElementById('addition')
let equalHTML = document.getElementById('equal')
var secondFieldHTML = document.getElementById('secondField')
var centerFieldHTML = document.getElementById('centerField')
var operator = 0
var replacementOne
var replacementTwo


//*? Desarrollo de la funcionalidad

function functionSecondField()  {
  let value = centerFieldHTML.value.split('')
  let valueU = value[value.length -1]
  if(value.indexOf('+') == -1 && value.indexOf('-') == -1 && value.indexOf('*') == -1 && value.indexOf('/') == -1 && value.indexOf('%') == -1)  {
    secondFieldHTML.value = ''
  } else if(valueU == '+' || valueU == '-' || valueU == '*' || valueU == '/' || valueU == '%' || valueU == '(' || valueU == ',' || operator == 1)  {
    secondFieldHTML.value = ''
  } else  {
    replacementOne = centerFieldHTML.value.replace(/%/g, '/100*')
    replacementTwo = replacementOne.replace(/,/g, '.')
    secondFieldHTML.value = eval(replacementTwo)
  }
}

function reset()  {
  acHTML.value = 'AC'
  operator = 0
}
acHTML.addEventListener('click', reset)

function result() {
  replacementOne = centerFieldHTML.value.replace(/%/g, '/100*')
  replacementTwo = replacementOne.replace(/,/g, '.')
  centerFieldHTML.value = eval(replacementTwo)
  secondFieldHTML.value = ''
}
equalHTML.addEventListener('click', result)

function deleteNumber() {
  centerFieldHTML.value = centerFieldHTML.value.slice(0, -1)
  let newField = centerFieldHTML.value
  let openingParenthesis = newField.lastIndexOf('(')
  let closingParenthesis = newField.lastIndexOf(')')
  if(openingParenthesis > closingParenthesis) {
    operator = 1
  } else if(closingParenthesis > openingParenthesis || closingParenthesis == openingParenthesis)  {
    operator = 0
  }

  if(centerFieldHTML.value == '') {
    acHTML.value = 'AC'
  }

  functionSecondField()
}
deleteHTML.addEventListener('click', deleteNumber)



function eleccion(elemento) {
  acHTML.value = 'C'
  centerFieldHTML.value += elemento

  functionSecondField()
}

zeroHTML.onclick = function() {
  eleccion('0')
}
oneHTML.onclick = function() {
  eleccion('1')
}
twoHTML.onclick = function() {
  eleccion('2')
}
threeHTML.onclick = function() {
  eleccion('3')
}
fourHTML.onclick = function() {
  eleccion('4')
}
fiveHTML.onclick = function() {
  eleccion('5')
}
sixHTML.onclick = function() {
  eleccion('6')
}
sevenHTML.onclick = function() {
  eleccion('7')
}
eightHTML.onclick = function() {
  eleccion('8')
}
nineHTML.onclick = function() {
  eleccion('9')
}
pointHTML.onclick = function() {
  eleccion(',')
}
additionHTML.onclick = function() {
  eleccion('+')
}
subtractionHTML.onclick = function()  {
  eleccion('-')
}
multiplicationHTML.onclick = function() {
  eleccion('*')
}
divisionHTML.onclick = function() {
  eleccion('/')
}
percentageHTML.onclick = function() {
  eleccion('%')
}


function parenthesisHandling()  {
  acHTML.value = 'C'
  operator = operator + 1
  if(operator == 1) {
    centerFieldHTML.value += '('
  } else if(operator == 2)  {
    centerFieldHTML.value += ')'
    operator = 0
  }

  functionSecondField()
}
parenthesisHTML.onclick = function()  {
  parenthesisHandling()
}