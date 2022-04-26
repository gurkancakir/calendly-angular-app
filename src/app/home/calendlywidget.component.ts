import { 
    Component, 
    NgModule, 
    VERSION, 
    ElementRef,
    ViewChild
} from '@angular/core'

@Component({
  selector: 'calendly-widget',
  template: `
        <div #container class="calendly-inline-widget" style="min-width:320px;height:580px;" data-auto-load="false"></div>
  `
})
export class CalendlyWidgetComponent {
    @ViewChild('container') container: ElementRef;
    
    
    ngOnInit() {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/test-cei',
        parentElement: this.container.nativeElement
      });
    }
}