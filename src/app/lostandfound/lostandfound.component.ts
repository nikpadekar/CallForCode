import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { HelpinghandService } from '../service/helpinghand.service';
@Component({
  selector: 'app-lostandfound',
  templateUrl: './lostandfound.component.html',
  styleUrls: ['./lostandfound.component.css'],
  host: {
    class:'w-full'
  }
})
export class LostandfoundComponent implements OnInit {

  constructor(private helpinghandservice : HelpinghandService) { }
userDetails:any = {};
  ngOnInit() {

  }

  lostFindFunction (obj){
  var Data =  $( obj ).serialize();
  this.helpinghandservice.postnewData(Data).subscribe(res => {
    this.userDetails= res
    console.log(this.userDetails)
    });
  console.log(Data)
  }


}
