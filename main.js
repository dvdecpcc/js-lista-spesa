const list = [
    'acqua',
    'caffe',
    'pasta',
    'pane',
    'vino'
];
let grocery = document.getElementById('mylist');
let x = 0;

while (x < list.length){
    grocery.innerHTML += `<li>${list[x]}</li>`;
    x++;
}