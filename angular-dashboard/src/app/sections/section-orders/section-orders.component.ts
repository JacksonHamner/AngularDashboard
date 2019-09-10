import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/Order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {
      id: 1,
      customer:
      {
        id: 1,
        name: 'Main st Bakery',
        state: 'CO',
        email: 'mainstreet@example.com'
      },
      total: 230,
      placed: new Date(2017, 12, 1),
      fulfilled: new Date(2017, 12, 2),
      status: 'completed'
    },
    {
      id: 2,
      customer:
      {
        id: 1,
        name: 'Main st Bakery',
        state: 'CO',
        email: 'mainstreet@example.com'
      },
      total: 230,
      placed: new Date(2017, 12, 1),
      fulfilled: new Date(2017, 12, 2),
      status: 'completed'
    },
    {
      id: 3,
      customer:
      {
        id: 1,
        name: 'Main st Bakery',
        state: 'CO',
        email: 'mainstreet@example.com'
      },
      total: 230,
      placed: new Date(2017, 12, 1),
      fulfilled: new Date(2017, 12, 2),
      status: 'completed'
    },
    {
      id: 4,
      customer:
      {
        id: 1,
        name: 'Main st Bakery',
        state: 'CO',
        email: 'mainstreet@example.com'
      },
      total: 230,
      placed: new Date(2017, 12, 1),
      fulfilled: new Date(2017, 12, 2),
      status: 'completed'
    },
    {
      id: 5,
      customer:
      {
        id: 1,
        name: 'Main st Bakery',
        state: 'CO',
        email: 'mainstreet@example.com'
      },
      total: 230,
      placed: new Date(2017, 12, 1),
      fulfilled: new Date(2017, 12, 2),
      status: 'completed'
    }
  ];


  ngOnInit() {
  }

}
