import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminDataService } from '../../app/services/admin-data.service'
import { WholeServiceService } from '../../app/components/whole-service.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  submitted = false;

  //constructor() { }

  // ngOnInit(): void {
  // }
  msg: null | undefined | string;

  // reactive add project form
  addProject = new FormGroup({
    ProjectName: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    PEmail: new FormControl('', Validators.compose([Validators.required, Validators.email, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")])),
    description: new FormControl(' ', [Validators.required, Validators.minLength(4),
    Validators.maxLength(30),
    Validators.pattern('^[a-zA-Z ]*$')]),
    Ptools: new FormControl(' ', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    status: new FormControl(' ', Validators.required),
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

  // project list
  projectList: any = [];

  constructor(private service: WholeServiceService,
    private httpService: AdminDataService) { }

  ngOnInit(): void {
    this.tableDesign();
    this.fetchProjects();
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
    this.addProject.reset();
    this.errorMsg = null;
  }

  // add project details
  addProjectDetails() {
    this.submitted = true;
    console.log("trail=>", this.addProject.get('ProjectName')?.errors, this.submitted)

    if (this.edi) {
      this.httpService.updateProject(this.s, this.addProject.value)
        .subscribe(success => {
          console.log("update check project", success)
        }, error => {
          console.log("update error", error)
          this.errorMsg = error
        })
      this.addProject.reset();
      this.msg = null;

    } else {
      // console.log("add project", this.addProject.value)
      this.httpService.addProjects(this.addProject.value)
        .subscribe(success => {
          console.log("add success", success);
          this.msg = "success"
        }, error => {
          console.log("add error", error);
          this.msg = error.statusText
        })
      this.addProject.reset();
      this.msg = null;
    }
  }

  // get users data
  fetchProjects() {
    this.loading = true;

    this.httpService.getProjectDetails()
      .subscribe(data => {
        this.loading = false;
        this.projectList = data
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
      ProjectName: i.ProjectName,
      PEmail: i.PEmail,
      description: i.description,
      Ptools: i.Ptools,
      status: i.status

    }

    this.addProject
      .patchValue(data)
    this.edi = true;
  }

  // delete user
  deleteProject(i: any) {
    this.httpService.deleteProject(i.id)
      .subscribe(success => {
        this.delSuccess = true;
      }, error => {
        console.log("delete error", error)
        this.delSuccess = false;
      });

  }

}



