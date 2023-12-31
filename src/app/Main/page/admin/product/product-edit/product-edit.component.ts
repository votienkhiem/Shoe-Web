import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  public editF: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    quantity: new FormControl('1', Validators.required),
    brand: new FormControl('', Validators.required),
    status: new FormControl('Status', Validators.required),
    gender: new FormControl('Gender', Validators.required),
    detail: new FormControl('', Validators.required),
    history: new FormControl('', Validators.required),
    color: new FormControl('Color', Validators.required),
    size: new FormControl('', Validators.required),
  })
  constructor(
    private crud: CrudService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    // First get the product id from the current route
    const routeParams = parseInt(this.route.snapshot.params['id'], 10);
    this.crud.getById(routeParams).subscribe(res => {
      let pro = res;
      this.editF = new FormGroup({
        name: new FormControl(pro.name, Validators.required),
        image: new FormControl(pro.image, Validators.required),
        price: new FormControl(pro.price, Validators.required),
        description: new FormControl(pro.description, Validators.required),
        quantity: new FormControl('1', Validators.required),
        brand: new FormControl(pro.brand, Validators.required),
        status: new FormControl(pro.status, Validators.required),
        gender: new FormControl(pro.gender, Validators.required),
        detail: new FormControl((pro.detail), Validators.required),
        history: new FormControl(pro.history, Validators.required),
        color: new FormControl(pro.color, Validators.required),
        size: new FormControl((pro.size), Validators.required),
      })
    })
  }
  editSubmit(): void {
    const data = {
      name: this.editF.get('name')?.value,
      image: this.editF.get('image')?.value,
      price: this.editF.get('price')?.value,
      description: this.editF.get('description')?.value,
      quantity: this.editF.get('quantity')?.value,
      brand: this.editF.get('brand')?.value,
      status: this.editF.get('status')?.value,
      gender: this.editF.get('gender')?.value,
      history: this.editF.get('history')?.value,
      color: this.editF.get('color')?.value,
      detail: (typeof ((this.editF.get('detail')?.value)) === 'object' ? (this.editF.get('detail')?.value).concat() : (this.editF.get('detail')?.value).split(',')),
      size: (typeof ((this.editF.get('size')?.value)) === 'object' ? (this.editF.get('size')?.value).concat() : (this.editF.get('size')?.value).split(',')),
    }
    if (this.editF.valid) {
      const routeParams = parseInt(this.route.snapshot.params['id'], 10);

      this.crud.update(routeParams, data).subscribe(res => {
        Swal.fire({
          icon: 'success',
          title: 'Successfully',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/admin'])
      })
    }
  }
}
