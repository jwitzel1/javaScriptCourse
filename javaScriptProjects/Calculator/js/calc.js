//creates obj to track vals
const Calculator = {
    //display 0 on screen to start
    Display_Value: '0',
    //1st operand. default null
    First_Operand: null,
    //2nd operand input?
    Wait_Second_Operand: false,
    //this hold operator -set to null default
    operator: null,
};

//mod vals with button click
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    // we are checking to see if Wait_Second_Operand is true and set
    //Display_Value to the key that was clicked
    if(Wait_Second_Operand === true ){
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //this overwrites Dispaly_Value if the current value is 0
        //otherwise it adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}
//this section handles decimal points
function Input_Decimal(dot) {
    //ensures accidental click of decimal pointt no bugs
    if (Calculator.Wait_Second_Operand === true)  return; 
    if (!Calculator.Display_Value.includes(dot)) {
        //if no decimal point - add decimal
        Calculator.Display_Value += dot;
    }
}

//handles operators
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator } = Calculator
    //when an operator key is preesed we convert the current number
    //displayed on screen to number then store in Calculator.First_Operand if it doesn't alreayd exist
    const Value_of_Input = parseFloat(Display_Value);
    //checks if operator already exists and if Wait_Second_Operand is true
    //then updates the operator and exists from func
    if(operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator; 
        return;
    }
    if(First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {//checks if an operator already exists
        const Value_Now = First_Operand || 0;
        //if operator exists, property lookup is performed for the operator
        //in the Perform_Calc object and the func that matches the operator is executed
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //here we add fixed amt of nums after decimal
        result = Number(result).toFixed(9);
        //remove trailing 0s
        result = (result * 1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand

};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
//this func updates screen w contents of Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//this section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
                    //target var object that represents the elenent that was clicked
                    const { target } = event;
                    //if element clicked not button, exit
                    if(!target.matches('button')) {
                        return;
                    }

                    if(target.classList.contains('operator')) {
                        Handle_Operator(target.value);
                        Update_Display();
                        return;
                    }

                    if (target.classList.contains('decimal')) {
                        Input_Decimal(target.value);
                        Update_Display();
                        return;
                    }
                    //ensures AC clears nums from calc
                    if(target.classList.contains('all-clear')) {
                        Calculator_Reset();
                        Update_Display();
                        return;
                    }
                    Input_Digit(target.value);
                    Update_Display();
                })