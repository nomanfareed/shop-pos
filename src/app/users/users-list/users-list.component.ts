import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor() { }
  displayedColumns = ['name', 'lastUpdated', 'latestLocation', 'distance', 'temprature', 'actions'];
  dataSource = [
    {
      name: 'Ammad Hassan',
      lastUpdated: new Date(),
      latestLocation: 'Darline Hotel',
      distance: '5 km',
      temprature: '25°C'
    },
    {
      name: 'Noman Fareed',
      lastUpdated: new Date(),
      latestLocation: 'Darline Hotel',
      distance: '7 km',
      temprature: '28°C'
    },
    {
      name: 'Sameer Kamran',
      lastUpdated: new Date(),
      latestLocation: 'Darline Hotel',
      distance: '9 km',
      temprature: '21°C'
    },
    {
      name: 'Sheraz Ahmad',
      lastUpdated: new Date(),
      latestLocation: 'Darline Hotel',
      distance: '14 km',
      temprature: '27°C'
    },
    {
      name: 'Asad Ilyas',
      lastUpdated: new Date(),
      latestLocation: 'Darline Hotel',
      distance: '10 km',
      temprature: '20°C'
    },
    {
      name: 'Tayyab Fareed',
      lastUpdated: new Date(),
      latestLocation: 'Darline Hotel',
      distance: '6 km',
      temprature: '23°C'
    }
  ];
  ngOnInit(): void {
  }

}
