const correctAnswers = ['B', 'B', 'B', 'B']; 
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
form.addEventListener('submit', function(e){
    e.preventDefault();//stops 'submit' event from refreshing the page

    //LOAD ANSWERS 

    let score = 0;//default score will be 0

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //CHECK ANSWERS 

    //remember that we can get the value(answer) and its index
    userAnswers.forEach(function(answer, index){
        if(answer === correctAnswers[index]){
            score +=25;
        }
    });

    //SHOW RESULT ON PAGE
    scrollTo(0,0); //scrollTo(x-Axis, y-Axis);
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(function(){
        result.querySelector('span').textContent=`${output}%`;
       if(output ===score){
           clearInterval(timer);
       }else{
           output++;
       }
    },10);
});


//HOW THE "SHOW RESULT ON PAGE" WORKS 
//scrollTo(); sends the user to the top of the page 
//result.classList.remove('d-none); removes the class
//that hides the <div> container where our score is displayed 

//'let output =0;' we initialize a variable that will 
//output the score in the <span> textContent property, where we display 
//the score. 

//next we create a constant "timer" where we load a 
//setInterval(); window method 
//within the setInterval(callbackFunction());
//we take a reference for our <span> element 
//and we do this by using the querySelector(); over our 
//"result" <div class="result"> handle  and search for 
//the first <span> element within the <div class ="result">
// result.querySelector('span')    and directly access
// the textContent property of the handle: 
// result.querySelector('span').textContent = `${output}%'; 
//setting its value to the value of our 'output' variable.

//now our output variable is initially 0 
//and we want it to increment to the final score our user 
//got after he submited his quiz. 
//the user's score is stored in the variable 'score'
//Now we want the output to display on the page and increment 
//from 0% to (100% ex) the user's score, incrementing 
//by one % until it reaches the score. 
// We do this by incrementing the output++ as long as the 
// output is lesser than the user's 'score' 
//if(output ===score){
//    clearInterval(timer);
//}else{
//   output++;
//}
// if the output value is equal to the score 
// the Interval will stop iterating and output will not 
//iterate again.






