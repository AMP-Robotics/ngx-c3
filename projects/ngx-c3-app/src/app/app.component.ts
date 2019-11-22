import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-c3-app';

  data = [
    {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ]
    },
    {
      columns: [
        ['data3', 50, 20, 10, 40, 15, 25],
        ['data4', 30, 200, 100, 400, 150, 250]
      ]
    }
  ];
}
