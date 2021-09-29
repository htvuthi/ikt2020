import { HttpClient, HttpHeaders } from '@angular/common/http';
import { content } from './content';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Content} from "@angular/compiler/src/render3/r3_ast";

@Injectable({providedIn:'root'})
export class ApiService {
  constructor() {

  }



 async getAll() {
    const resp = await fetch('http://localhost:3005/entries')
    return resp.json()

  }



}



