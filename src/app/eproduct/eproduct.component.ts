import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-eproduct',
  imports: [],
  templateUrl: './eproduct.component.html',
  styleUrl: './eproduct.component.css'
})
export class EproductComponent {
   @ Input()item:any
   
}
