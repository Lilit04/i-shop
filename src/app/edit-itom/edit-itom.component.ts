import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-edit-itom',
  templateUrl: './edit-itom.component.html',
  styleUrls: ['./edit-itom.component.scss']
})
export class EditItomComponent implements OnInit {

  @Output() hideModale: EventEmitter<any> = new EventEmitter
  @Input() category: Array<any> = [];
  @Input() editingItem: any = null;

  addnewitem = new FormGroup({
    categoty: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.addnewitem.setValue({ categoty: this.editingItem.ctname, name: this.editingItem.name, description: this.editingItem.description });
  }

  hide() {
    this.hideModale.emit()
  }
  onClick() {
    if(!this.addnewitem.invalid) {
      let categoryId = this.category.find(e => e.name === this.addnewitem.value.categoty)
      this.authenticationService.updateItem(this.addnewitem.value, this.editingItem._id, categoryId._id);
      this.hide();
    } else {
      alert("Please fill in all fields.")
    }
  }

}
