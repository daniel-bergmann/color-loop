
// targeting element in the document
const box = document.getElementById('box'),
// defining the color array for the loop
    colors = ['purple', 'yellow', 'orange', 'brown', 'black','purple', 'yellow', 'orange', 'brown', 'black', 'brown', 'black','purple', 'yellow', 'orange', 'brown',];

    // onclick event with a loop that makes the box change color
box.onclick = function () {
    (function loop(){
        // shift method that removes the first element from array and returns it
        var color = colors.shift();
        
        box.style.backgroundColor = color;
        
        if (colors.length) {
            // defining delay so we can see the box changing color
            setTimeout(loop, 1000);
        }
    })();
};