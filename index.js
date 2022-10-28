/* document.getElementById("clickMe").addEventListener("click", function xyz() {
  console.log("Button Clicked");
});
// xyz will push in the call stack and will be executed.
 */
/* // count how many time the button is cliked and increase count.
let count = 0;
document.getElementById("clickMe").addEventListener("click", function xyz() {
  console.log("Button Clicked", ++count);
}); // -> not a good solution
 */


// Closure

function attachEventListeners() {
  let count1 = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button Clicked", ++count1);
  });
};

attachEventListeners();
