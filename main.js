var items = [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
    "item7",
    "item8"
];

const initialbox = document.getElementById("initial-box");
const finalbox = document.getElementById("final-box");

for(let i=0; i<items.length; i++) {
    var containedBox = document.createElement("div");
    containedBox.innerHTML = items[i];
    containedBox.classList.add("initials");
    if(i%2 === 1) {
        containedBox.classList.add("even");
    } else {
        containedBox.classList.add("odd");
    }
    containedBox.id = `boxes${i}`;
    containedBox.setAttribute('draggable', "true");
    initialbox.append(containedBox);
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}
function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}
function dragLeave(e) {
    e.target.classList.remove('drag-over');
}
function dragDrop(e) {
    e.target.classList.remove('drag-over');
    
        // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    console.log(id);
    const draggable = document.getElementById(id);
    
        // add it to the drop target
    e.target.appendChild(draggable);
    
        // display the draggable element
    draggable.classList.remove('hide');
    succ();
    
}
function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);

}
function dragEnd() {
    console.log('drag ended');
}
finalbox.addEventListener('dragover', dragOver);
finalbox.addEventListener('dragenter', dragEnter);
finalbox.addEventListener('dragleave', dragLeave);
finalbox.addEventListener('drop', dragDrop);

initialbox.addEventListener('dragover', dragOver);
initialbox.addEventListener('dragenter', dragEnter);
initialbox.addEventListener('dragleave', dragLeave);
initialbox.addEventListener('drop', dragDrop);
const boxes = document.querySelectorAll(".initials");
console.log(boxes);
boxes.forEach(box => {
    box.addEventListener('dragstart' , dragStart);
    box.addEventListener('dragend' , dragEnd);
})

document.getElementById('reset').addEventListener('click', (e) => {
    e.preventDefault();
    initialbox.innerHTML = "";
    finalbox.innerHTML = "";
    for(let i=0; i<items.length; i++) {
        var containedBox = document.createElement("div");
        containedBox.innerHTML = items[i];
        containedBox.classList.add("initials");
        if(i%2 === 1) {
            containedBox.classList.add("even");
        } else {
            containedBox.classList.add("odd");
        }
        containedBox.id = `boxes${i}`;
        containedBox.setAttribute('draggable', "true");
        initialbox.append(containedBox);
    }
})

const succ = () => {
    document.querySelector(".notify").classList.add("active");
    document.querySelector("#notifyType").classList.add("success");
    
    setTimeout(() => {
        document.querySelector(".notify").classList.remove("active");
        document.querySelector("#notifyType").classList.remove("success");
    },2000);
}