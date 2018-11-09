import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Emp } from './emp';
import { toBase64String } from '../../node_modules/@angular/compiler/src/output/source_map';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class EmpService {

  private empApiUrl = 'http://localhost:8080/SpringRESTEmployeeCRUDEx/employee';
  private empUpdateApiUrl = 'http://localhost:8080/SpringRESTEmployeeCRUDEx/employeeUpdate';

  constructor(private http: HttpClient) { }

  saveEmployee(emp: Emp): Observable<any> {
    console.log('inside saveEmployee()' + emp.name);
    return this.http.post<String>(this.empApiUrl, emp, httpOptions);
    /*.pipe(
      tap(id => this.log(`added emp with id=${id}`)),
      catchError(this.handleError<Emp>('saveEmp'))
    );*/
  }

  updateEmployee(emp: Emp): Observable<any> {
    console.log('inside updateEmployee()' + emp.name);
    return this.http.put<String>(this.empApiUrl, emp, httpOptions);
    // return this.http.put<Emp>(
    //   this.empApiUrl, emp, httpOptions).pipe(
    //     tap((emp: Emp) => this.log(`added emp with id=${emp.id}`)),
    //     catchError(this.handleError<Emp>('saveEmp'))
    //   );
  }

  listEmployee(): Observable<Emp[]> {

    return this.http.get<Emp[]>(this.empApiUrl);
    //.pipe(
    //map(res: Response) => res.json().response);
    /* map(res => {
       return res.json().results.map(item => {
         return new Emp(
           item.id,
           item.name,
           item.age,
           item.gender
         );
       });
     });*/
  }

  deleteEmp(id: string): Observable<Object> {
    return this.http.delete(this.empApiUrl + "/" + id);

    /*let param = new HttpParams();
    param.append('empId', id);
    return this.http.delete(this.empApiUrl, params: { param });*/
  }
  getEmp(id: string): Observable<Emp> {
    return this.http.get<Emp>(this.empApiUrl + "/" + id);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`EmpService: ${message}`);
  }
}
