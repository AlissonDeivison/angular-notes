import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// This service will be used to manage the thoughts in the application. It will be used to add, remove, and retrieve thoughts from the application. It will also be used to manage the state of the thoughts in the application with DEPENDENCY INJECTION.

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  constructor(private http : HttpClient) { }


}
