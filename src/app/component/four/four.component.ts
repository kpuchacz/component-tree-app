import {Component} from '@angular/core';


interface Person {
  firstName: string;
  surName: string;
}

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent {
  person: Person = {
    firstName: 'Karol',
    surName: 'Puchacz'
  };

}
