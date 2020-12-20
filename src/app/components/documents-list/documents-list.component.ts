import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/service/document.service';
import { Document } from '../../model/document';

@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.scss']
})
export class DocumentsListComponent implements OnInit {

  documents: Document[] = []

  constructor(private documentService: DocumentService) { }

  ngOnInit(): void {
    this.documentService.findAll().subscribe(data => {
      this.documents = data;
    })
  }
 // https://shabang.dev/angular-10-upload-multiple-files-images-example-progress-events/
  onFileChange(event: Event) {
      this.documents = event.target.files
  }

}
