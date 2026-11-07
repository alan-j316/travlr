import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TripData } from '../services/trip-data';
import { TripCard } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-listing',
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
})
export class TripListing implements OnInit {
  trips: Array<any> = [];
  message: string = '';
  constructor(
    private tripDataService: TripData = inject(TripData),
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  private getStuff(): void {
    this.tripDataService.getTrips().subscribe({
      next: (value: any) => {
        this.trips = value;

        if (value.length > 0) {
          this.message = 'There are ' + value.length + ' trips available.';
        } else {
          this.message = 'There were no trips retireved from the database';
        }
        console.log(this.message);
        this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      },
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }
}
