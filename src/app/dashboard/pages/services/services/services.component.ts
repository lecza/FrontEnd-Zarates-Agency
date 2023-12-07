import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/interfaces/service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services!: Service[];

  constructor(
    private serviceService: ServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.serviceService.getAllServices().subscribe( data => {
      console.log( data );
      this.services = data.data;
    });
  }
}
