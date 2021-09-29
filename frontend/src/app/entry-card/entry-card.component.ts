import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-entry-card',
  templateUrl: './entry-card.component.html',
  styleUrls: ['./entry-card.component.scss']
})
export class EntryCardComponent implements OnInit {
  @Input() title!: string
  @Input() text!: string

  constructor() {

  }

  ngOnInit(): void {
  }

}
