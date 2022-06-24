import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-shoping-list-page',
  templateUrl: './shoping-list-page.component.html',
  styleUrls: ['./shoping-list-page.component.scss']
})
export class ShopingListPageComponent implements OnInit {

  public category: Array<any> = [];
  public show: boolean = false;
  public editShow: boolean = false;
  public editingItem: any = null;
  public item: any = [];
  public data: any = [];
  public filterData: any = [];
  public editData: any = {}
  constructor(public authenticationService: AuthenticationService, private router:Router) {

  }

  ngOnInit(): void {
  let user = localStorage.getItem("item")
    if(user){
      this.updateData()
    }
    else{
      this.router.navigate(['/login'])
    }
  }
  showModal() {
    this.show = !this.show;
  }
  async showEditModal(item: any) {
    this.editingItem = item;
    this.editShow = !this.editShow;
  }
  async onDelete(id: number) {
    await this.authenticationService.deletItem(id)
    this.filterData = this.filterData.filter((prod: any) => prod._id !== id)
  }
  showEdit() {
    this.editShow = !this.editShow;
    this.editingItem = null;
    this.filterData = []
    setTimeout(()=>{
      this.updateData()
    },500)
  }
  onChange(e: any) {

    const value = e.target.value
    if (value !== 'All Category') {
      this.filterData = this.data?.filter((it: { ctname: any; }) => it.ctname === value)
    }
    else {
      this.filterData = this.data
    }
  }


  updateData() {
    this.filterData = []
    this.data = []
    this.authenticationService.getCategory().then(async res => {
      await res;
      this.category = res;
      this.authenticationService.getitem().then(async ress => {
        await ress;
        this.item = ress;
        for (let it of this.item) {
          for (let ct of this.category) {
            if (it.categoty_id == ct._id) {
              this.data.push({
                ...it,
                ctname: ct.name
              })
            }
          }
        }
        this.filterData = this.data
      })
    })
  }

}
