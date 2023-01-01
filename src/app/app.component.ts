import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'veeru';
  constructor(){
    console.log();
   //console.log(this.(4,5,6,"add"));

  let value = "-";
  switch (value) {
    case "+":
      console.log(1+2+3);
      break;
    case "-":
      console.log( 1-2-3);
      break;
    case "/":
     console.log( 1/2/3);
      break;
    case "%":
      console.log(1%2%3);
      break;
    default:
    console.log(1*2*3);
      break;
      
  }   
   } 
   // new project// 
  }
  {
    var a = 10;
    var b = 5;
  
  
    var c = a;
    var a =b;
    var b = c;
  
    }
   console.log( a ,b);
   {
    
    let i = 10;
    let multi =1;
  
    for(i=10;i>=1;i--){
      multi = multi*i;
      
      console.log(i);
      console.log(multi);


    }
    
   }
   // printing the stars
  {
    let i=6;
    let multi = 1;
     let sum = 1
    for (i=6;i>=1;i--){
    multi = sum*i;
    sum = i * sum;
      console.log(i)
      console.log(sum);
    }
  }
  {
    // sum of natural number 1  to 10
    let i=1;
    let sum = 0;
    while(i<=10){
      sum+=i;
      i++;

    }
    console.log(sum);
  }
    {
 let i=-1;
    let sum = 0;
    while(i<=-10){
      sum+=i;
      i++;

    }
    console.log(i);
    }

 