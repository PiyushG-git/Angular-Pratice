import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  firstexperience=true;
  undobutton=false;
  hidebutton=true;

  onHide(){
    this.firstexperience=false;
    this.undobutton=true;
    this.hidebutton=false;
  }

  onUndo(){
    this.firstexperience=true;
    this.hidebutton=true;
    this.undobutton=false;

  }
  // table ={
  // Row : [" ","Header1","Header2","Header3","Header4"],
  // Column : ["1","2","3","4","5"],
  // }
  header = ["S.no" ,"Header1","Header2","Header3","Header4"];
  detail = [
    {
      0 : "1.",
      1 : " " ,
      2 :  " ",
      3 : " ",
      4 : " ",
    },
    {
      0 : "2.",
      1 : " ",
      2 :  " ",
      3 : " ",
      4 : " ",
    },
    {
      0 : "3.",
      1 : " " ,
      2 :  " ",
      3 : " ",
      4 : " ",
    },
    {
      0 : "4.",
      1 : " ",
      2 :  " ",
      3 : " ",
      4 : " ",
    },
    
    //   0 : ["1.","2.","3.","4."],
    //   1 : ["2.", " "," "," "," "],
    //   2 : [" ", " "," "," "," "],
    //   3 : [" ", " "," "," "," "],
    // }

  ]

  

}
