import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  bookingForm: FormGroup = this.fb.group({
    name: [''],

    desc: [''],

    price: [''],
  });

  constructor(
    private aptService: ProductService,

    private router: Router,

    public fb: FormBuilder
  ) {}

  ngOnInit() {}

  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      console.log('teste');
      return this.aptService
        .createProduct(this.bookingForm.value)
        .then((res: any) => {
          console.log(res);

          this.bookingForm.reset();

          this.router.navigate(['/']);
        })

        .catch((error: any) => console.log(error));
    }
  }
}
