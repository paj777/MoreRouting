import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root-partners',
  templateUrl: './root-partners.component.html',
  styleUrls: ['./root-partners.component.css']
})
export class RootPartnersComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  public addPartner(): void {
    this.router.navigate([
      {
        outlets: {
          editArea: ['addRootPartner']
        }
      }
    ],
      {
        relativeTo: this.activatedRoute
      }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}