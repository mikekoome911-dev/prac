// if...else
    let price;
    let member = true;
    let age = 20;
    if (member === true)
        if (age < 18){
            price =10;
        }
        else {
            price = 15;
        
        }
        else {
            price = 20;
        }
         
    switch (true) {
        case (member && age < 18):
            price = 10;
            break;
        case (member && age >18):
            price = 15;
            break;
            default:
                price = 20;
                break;
    }
   //we use switch when you have multiple distict combinations or conditions to check sequentially,while we use ternary operator when you are cleanly assigning a value based on sinple binary outcomes.