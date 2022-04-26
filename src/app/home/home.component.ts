import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'appointment';
  name!: string;
  email!: string;
  phone!: string;

  constructor(private route: ActivatedRoute) {
      console.log('Called Constructor');
      this.route.queryParams.subscribe(params => {
          this.name = params['name'];
          this.email = params['email'];
          this.phone = params['phone'];
      });
  }

  @ViewChild('container', { static: false }) container: ElementRef;

  ngAfterViewInit() {
    console.log("afterinit");
    setTimeout(() => {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/gurkancakir/review-session?hide_event_type_details=1&hide_gdpr_banner=1&' +
        'name='+this.name+'&email='+this.email+'&a1='+this.phone,
        parentElement: this.container.nativeElement
      });
      console.log(this.container);
    }, 1000);
  }
}
