import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import{interval, pipe, Subscription} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'usense-test';
  abc = '123456abcdefghijklmnopqrstuvwxyz';  
  text = ''; 
  textClass = 0
 
  makeStr(){
    for(let i=0; i< 5; i++) {
      this.text += this.abc.charAt(Math.floor(Math.random() * this.abc.length));  

      let palindromeStr = this.text.split('').reverse().join('');
    
      if(palindromeStr === this.text) this.textClass = 1;
  
      if(this.text.includes('0')) this.textClass = 2;

      let d = this.text.charCodeAt(i)
      if(d < 48 || d>57) this.textClass = 3
    }    
  }

  sub: Subscription
  constructor(){
    const intervalStream$ = interval(3000)
    this.sub = intervalStream$
    .subscribe((value)=>{
      
      this.makeStr();
    })
  }
  
  stop(){
    this.sub.unsubscribe()
  }
}
