import { Injectable } from '@angular/core';

import { faHome,
   faLaptopCode,
    faUsers,
    faTools,
    faUserSecret, 
    faUserCircle,
    faPen,
    faTrash,
    faMinusCircle,
    faUserPlus,
    faCheckCircle
 } from '@fortawesome/free-solid-svg-icons';


@Injectable({
  providedIn: 'root'
})
export class WholeServiceService {
  sideNav = false

  newUser = true;

  colors = {
    blue: '#1AA1A1',
    black: '#000000'
  }

  icons = {
    home: faHome,
    Project: faLaptopCode,
    Users: faUsers,
    profile: faUserCircle,
    Tools: faTools,
    Privileges: faUserSecret,
    Edit: faPen,
    Delete: faTrash,
    removeUser: faMinusCircle,
    addUser: faUserPlus,
    success: faCheckCircle
  }

  usersList = [
    {
      id: 1,
      Name: 'laya',
      Email: 'laya@gmail.com',
      Password: '******',
    },
    {
      id: 2,
      Name: 'ayal',
      Email: 'ayal@gmail.com',
      Password: '******',
    },{
      id: 3,
      Name: 'yala',
      Email: 'yala@gmail.com',
      Password: '******',
    },{
      id: 4,
      Name: 'alay',
      Email: 'alay@gmail.com',
      Password: '******',
    },
    {
      id: 5,
      Name: 'laya',
      Email: 'laya@gmail.com',
      Password: '******',
    },
    {
      id: 6,
      Name: 'ayal',
      Email: 'ayal@gmail.com',
      Password: '******',
    },{
      id: 7,
      Name: 'yala',
      Email: 'yala@gmail.com',
      Password: '******',
    },{
      id: 8,
      Name: 'alay',
      Email: 'alay@gmail.com',
      Password: '******',
    },
    {
      id: 9,
      Name: 'laya',
      Email: 'laya@gmail.com',
      Password: '******',
    },
    {
      id: 10,
      Name: 'ayal',
      Email: 'ayal@gmail.com',
      Password: '******',
    },{
      id: 11,
      Name: 'yala',
      Email: 'yala@gmail.com',
      Password: '******',
    },{
      id: 12,
      Name: 'alay',
      Email: 'alay@gmail.com',
      Password: '******',
    },
  ]

  projectsList = [
    {
      id: 1,
      projectName: 'project1',
      description: 'sails tool pot',
    },
    {
      id: 2,
      projectName: 'project2',
      description: 'sails tool pot1',
    },
    {
      id: 3,
      projectName: 'project3',
      description: 'sails tool pot2',
    },
    {
      id: 4,
      projectName: 'project4',
      description: 'sails tool pot3',
    },
    {
      id: 5,
      projectName: 'project5',
      description: 'sails tool pot4',
    },
    {
      id: 6,
      projectName: 'project6',
      description: 'sails tool pot5',
    },
    {
      id: 2,
      projectName: 'project2',
      description: 'sails tool pot1',
    },
    {
      id: 3,
      projectName: 'project3',
      description: 'sails tool pot2',
    },
    {
      id: 4,
      projectName: 'project4',
      description: 'sails tool pot3',
    },
    {
      id: 5,
      projectName: 'project5',
      description: 'sails tool pot4',
    },
    {
      id: 6,
      projectName: 'project6',
      description: 'sails tool pot5',
    },
  ]

  privilegesList = [
    {
      id: 1,
      projectName: 'sails tool pot',
      projectTeam: [
        'laya@gmail.com','ayal@gmail.com','yala@gmail.com','alay@gmail.com'
      ],
    },
    {
      id: 2,
      projectName: 'sails tool pot2',
      projectTeam: [
        'laya@gmail.com','ayal@gmail.com','yala@gmail.com','alay@gmail.com','llay@gmail.com'
      ],
    },
    {
      id: 3,
      projectName: 'sails tool pot3',
      projectTeam: [
        'laya@gmail.com','ayal@gmail.com','yala@gmail.com','alay@gmail.com','llay@gmail.com'
      ],
    },
    {
      id: 4,
      projectName: 'sails tool pot4',
      projectTeam: [
        'laya','ayal','yala','alay','llay'
      ],
    },
    {
      id: 5,
      projectName: 'sails tool pot5',
      projectTeam: [
        'laya','ayal','yala','alay','llay'
      ],
    },
    {
      id: 6,
      projectName: 'sails tool pot6',
      projectTeam: [
        'laya','ayal','yala','alay','llay'
      ],
    },
  ]

  constructor() { }

  toggleNav(){
    this.sideNav = !this.sideNav
    console.log("triggered in service", this.sideNav)
  }
}
