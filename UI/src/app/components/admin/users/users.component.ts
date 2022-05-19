import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminUserDataService } from 'src/app/services/admin-user-data.service';
import { WholeServiceService } from '../../whole-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  // error msg while adding the user
  msg: null | undefined | string;

  // reactive add user form
  addUser = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('sails@123', [Validators.required])
  })

  // loading view
  loading = true;

  // error handling
  errorMsg = null;
  s: any = null;
  edi = false;
  delSuccess: any = null;

  // table design
  dtOptions: DataTables.Settings = {}

  formShow = false;

  // icons
  edit = this.service.icons.Edit;
  delete = this.service.icons.Delete;
  success = this.service.icons.success;

  // users list
  usersList: any = [];

  constructor(private service: WholeServiceService,
    private httpService: AdminUserDataService) { }

  ngOnInit(): void {
    this.tableDesign();
    this.fetchUsers();
  }

  // table design
  tableDesign() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    }
  }

  // show add user form
  showForm() {
    this.formShow = !this.formShow;
    this.edi = false;
    this.addUser.reset();
    this.errorMsg = null;
  }

  // add user details
  addUserDetails() {
    if (this.edi) {
      this.httpService.updateUserData(this.s, this.addUser.value)
        .subscribe(success => {
          console.log("update user", success)
        }, error => {
          console.log("update error", error)
          this.errorMsg = error
        })
      this.addUser.reset();
      this.msg = null;

    } else {
      this.httpService.postUserData(this.addUser.value)
        .subscribe(success => {
          console.log("post success", success);
          this.msg = "success"
        }, error => {
          console.log("post error", error);
          this.msg = error.statusText
        })
      this.addUser.reset();
      this.msg = null;
    }
  }

  // get users data
  fetchUsers() {
    this.loading = true;

    this.httpService.getUsersData()
      .subscribe(data => {
        this.loading = false;
        this.usersList = data
      }, error => {
        this.loading = false;
        this.errorMsg = error.statusText
      })
  }

  // edit user data
  editMode(i: any) {
    this.s = i.id
    this.formShow = true;
    const data = {
      Name: i.Name,
      Email: i.Email,
      Password: i.Password
    }

    this.addUser.patchValue(data)
    this.edi = true;
  }

  // delete user
  deleteUser(i: any) {
    this.httpService.deleteUserData(i.id)
      .subscribe(success => {
        this.delSuccess = true;
      }, error => {
        console.log("delete error", error)
        this.delSuccess = false;
      });

  }

}
