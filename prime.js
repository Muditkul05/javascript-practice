let number = prompt("Enter a number",0);
prime:
for(let i = 2 ; i < number ; i++){
    for(let j = 2 ; j < i; j++){
        if(i % j == 0 ) continue prime;
    }
   alert(i)  
}

