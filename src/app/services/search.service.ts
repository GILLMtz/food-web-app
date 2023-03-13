import { Injectable } from '@angular/core';
import { Subject,Observable, BehaviorSubject } from 'rxjs';
import { SearchMenu } from '../models/search-menu.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchQuerySubject = new  BehaviorSubject<SearchMenu>({term:''});
  private searchQuery:Observable<SearchMenu> = this.searchQuerySubject.asObservable();
  
/*   private signupDataSubject = new BehaviorSubject<SignupData>(null);
  private signupData: Observable<SignupData> = this.signupDataSubject.asObservable(); */

  constructor() { }
  public saveData(query: SearchMenu): Observable<SearchMenu> {
    return new Observable((observer) => {
    //  const { username, email, phoneNumber, country, state } = data || {} as any;
      //this.signupDataSubject.next({ username, email, phoneNumber, country, state });
      console.log("emitiendo query ");
      this.searchQuerySubject.next(query);
      observer.complete();
    });
  }
/*   public saveData(data: any): Observable<SignupData> {
    return new Observable((observer) => {
      const { username, email, phoneNumber, country, state } = data || {} as any;
      this.signupDataSubject.next({ username, email, phoneNumber, country, state });
      observer.complete();
    });
  } */

  public getData():Observable<SearchMenu> {
    //return this.signupData;
    console.log("getdata () ....");
    return this.searchQuery;
  }
}
