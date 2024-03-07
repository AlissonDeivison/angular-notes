import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Thought } from './thought.type';
import { Observable } from 'rxjs';

// This service will be used to manage the thoughts in the application. It will be used to add, remove, and retrieve thoughts from the application. It will also be used to manage the state of the thoughts in the application with DEPENDENCY INJECTION.

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/thoughts';
  constructor(private http : HttpClient) { }
//The Observable is a generic type that will be used to return the thoughts from the API. The getThoughts method will be used to retrieve the thoughts from the API. The getThoughts method will use the HttpClient to make a GET request to the API and return the thoughts as an Observable.
 getThoughts():Observable<Thought[]>{
  return this.http.get<Thought[]>(this.API);
 }
 setThoughts(thought: Thought):Observable<Thought>{
  return this.http.post<Thought>(this.API, thought);
 }
 

}
