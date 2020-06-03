import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'challenge10';
  public onomatopeias: string[];

  ngOnInit() {
    this.onomatopeias=['broom', 'binggg'];
  }

  onReceiveNewOnomatopia($event) {
    this.onomatopeias.push($event);
     
  }
}
