import {Component, OnInit} from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  // Declare a private messageService property - Angular injects the singleton MessageService into it on creating the MessagesComponent.
  constructor(public messageService: MessageService) {
  }

  ngOnInit() {
  }
}
