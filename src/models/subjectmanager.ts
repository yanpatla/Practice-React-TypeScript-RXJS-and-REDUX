import { Subject } from 'rxjs';
//! Esto lo que va a hacer es  recivir un type, crea un obsevable de tipo subject 
export class SubjectManager<T> {
  private subject = new Subject<T>();

  get getSubject() {
    return this.subject.asObservable();
  }

  set setSubject(value: T) {
    this.subject.next(value);
  }
}