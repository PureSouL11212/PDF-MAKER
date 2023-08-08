import { Component,ViewChild,ElementRef } from '@angular/core';
import {jsPDF} from "jspdf";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  @ViewChild('content', {static:false}) el!:ElementRef;
  title = 'Angular Cli and pdf';
  makepdf(){
    let pdf= new jsPDF('p','pt','a4');
    // pdf.text("HELLO SAMEER",10,10);
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("demo.pdf");}
    });

   
  }
}
