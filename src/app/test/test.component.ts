import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AnnotationService,
  BookmarkViewService,
  FormDesignerService,
  FormFieldsService,
  LinkAnnotationService,
  MagnificationService,
  NavigationService,
  PageOrganizerService,
  PdfViewerComponent,
  PdfViewerModule,
  PrintService,
  TextSearchService,
  TextSelectionService,
  ThumbnailViewService,
  ToolbarService,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-test',
  imports: [PdfViewerModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService,
  ],
})
export class TestComponent implements OnDestroy {
  @ViewChild('pdfViewer') pdfViewer: PdfViewerComponent | undefined;

  public document: string =
    window.location.origin + '/_pkpadmin,+1008-4741-1-CE.pdf';
  public resource: string = window.location.origin + '/ej2-pdfviewer-lib';

  changeDocument() {
    this.pdfViewer?.unload();
    if (this.document.startsWith('https')) {
      this.document = window.location.origin + '/_pkpadmin,+1008-4741-1-CE.pdf';
    } else {
      this.document =
        'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    }
  }

  ngOnDestroy(): void {
    if (this.pdfViewer) {
      if (this.pdfViewer) {
        this.pdfViewer?.unload();
        this.pdfViewer?.destroy();
      }
    }
  }
}
