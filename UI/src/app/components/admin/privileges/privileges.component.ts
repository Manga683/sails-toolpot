import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminPrivilegeDataService } from 'src/app/services/admin-privilege-data.service';
import { WholeServiceService } from '../../whole-service.service';

@Component({
  selector: 'app-privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.scss']
})
export class PrivilegesComponent implements OnInit {

  // icons
  remove = this.service.icons.removeUser;
  add = this.service.icons.addUser;

  // add user input
  showInputField = false;
  
  // privileges data
  privData:any = [];

  // loading 
  loading = true;

  // selected project
  projectId:string = '';
  projectIndex!: number;

  // table design
  dtOptions: DataTables.Settings = {}

  // error Handling
  e:any = null;
  showE = false;

  constructor(private service: WholeServiceService,
              private httpService: AdminPrivilegeDataService) { }

  ngOnInit(): void {
    this.getData()
    this.tableDesign()
  }

  // toggle button to show add user form
  btnAddUser(){
    this.showInputField = !this.showInputField;
  }

  // table design
  tableDesign(){
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      processing: true
    }
  }


  // fetching no of users working in project
  getData(){
    this.loading = true;
    this.privData= [];
    this.httpService.getPrivilegesData()
    .subscribe((data:any)=>{
      this.loading = false;
      for (let i of data){
        const p = {...i,sNo:data.indexOf(i)+1}
        this.privData.push(p)
      }
    },error=>{
      this.showE = true;
      this.loading = false;
      this.e = {
        status: error.status,
        statusText: error.statusText
      }
    })
  }

  // form to add user to project
  onSubmit(form: NgForm){
    const prevData = this.privData[this.projectIndex].pTeam

    prevData==undefined ? [form.value.username] : prevData.push(form.value.username)

    const data = prevData==undefined ? [form.value.username] : [...prevData]
    this.httpService.postPrivileges(this.projectId,data)
    form.reset()
    this.showInputField = !this.showInputField;
  }

  // remove user from project
  removeUser(id:any, email:any,projectIndex:any){
    const removeUserIndex = this.privData[projectIndex].pTeam.indexOf(email)
    const data = this.privData.filter((eachItem:any)=>(eachItem.id===id))
    data[0].pTeam.splice(removeUserIndex,1)
    this.httpService.postPrivileges(id,data[0].pTeam)
  }

  // add user to project
  addUserToProject(i:any,j:any){
    this.showInputField = !this.showInputField;
    this.projectId = i;
    this.projectIndex = j;
  }

}
