import { Component } from '@angular/core';
import { Service } from 'src/app/interfaces/service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services!: Service[];

  constructor( private serviceService: ServiceService ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.serviceService.getServices().subscribe( data => {
      console.log( data );

      this.services = data.data;
    });
  }

}
