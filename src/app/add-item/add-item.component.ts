import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Output() hideModale: EventEmitter<any> = new EventEmitter
  @Output() addnewData: EventEmitter<any> = new EventEmitter
  @Input() category : Array<any> = [];

  addnewitem = new FormGroup({
    categoty: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  
  }

  hide() {
    this.hideModale.emit()
  }
  onClick(){
    if(!this.addnewitem.invalid){
      let categoryId = this.category.find(e=>e.name === this.addnewitem.value.categoty)
      this.authenticationService.addNewItem(categoryId._id , this.addnewitem.value.name ,this.addnewitem.value.description )
      this.addnewData.emit()
      this.hide()
    } else {
      alert("Please fill in all fields.")
    }
  }

}
