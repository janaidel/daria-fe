import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from '../model/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private serviceUrl: string;

  constructor(private http: HttpClient) {
    this.serviceUrl = 'http://localhost:8080/files';
  }

  public findAll(): Observable<Document[]> {
    return this.http.get<Document[]>(this.serviceUrl);
  }

  public save(document: Document) {
    return this.http.post<Document>(this.serviceUrl, document);
  }
}
