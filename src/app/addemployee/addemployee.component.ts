import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openModel(){
     const modelDiv=document.getElementById('myModal');
     if(modelDiv!=null){
      modelDiv.style.display='block';
     }
  }

  closeModel(){
    const modelDiv=document.getElementById('myModal');
    if(modelDiv!=null){
     modelDiv.style.display='none';
    }
 }
}
