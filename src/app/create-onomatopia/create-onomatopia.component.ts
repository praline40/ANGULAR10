import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})

export class CreateOnomatopiaComponent implements OnInit {
  
  newOnomatopia : string; 

  @Output()
  public getOnomatopia:EventEmitter<any> = new EventEmitter(); 

  public sendOnomatopiaToParent() {
    console.log(this.newOnomatopia);
    this.getOnomatopia.emit(this.newOnomatopia);
    
  }

  constructor() { }

  ngOnInit(): void {}

}
