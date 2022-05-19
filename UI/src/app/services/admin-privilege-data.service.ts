import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { constant } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class AdminPrivilegeDataService {

  constructor(private http: HttpClient) { }

  getPrivilegesData(){
    return this.http.get(constant.firebase+'projectData.json')
    .pipe(
      map(
        (data:any)=>{
          const userD = []
          for (const i in data){
            if(data.hasOwnProperty(i)){
               userD.push({
                pName:data[i].ProjectName,
                pTeam:data[i].teamMem,id:i
              })
            }
          }
          return userD
        }
      )
    )
  }

  postPrivileges(projectId: string,add: any){
    const data = {
      teamMem: [...add],
    }
    return this.http.patch(constant.firebase+"projectData/"+projectId+".json",data)
    .subscribe(data=>{
      console.log("data",data)
    },error=>{
      console.log("error",error)
    })
  }


}
