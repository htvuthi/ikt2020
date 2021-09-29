import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Note} from "../../shared/entry.module";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.scss']
})
export class DetailedViewComponent implements OnInit {

  note!: Note;
  readonly ROOT_URL ='http://localhost:3005/'

  newPost!: any

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.note = new Note();

  }
  onSubmit(form: NgForm) {
    console.log(form)
    const body = {
      title: form.value.title,
      text: form.value.text
    }
    this.newPost = this.http.post(this.ROOT_URL + 'entries', body)
    console.log((this.newPost))

  }
}
