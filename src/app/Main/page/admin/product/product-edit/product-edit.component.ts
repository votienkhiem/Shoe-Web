import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

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
        detail: new FormControl(pro.detail, Validators.required),
        history: new FormControl(pro.history, Validators.required),
        color: new FormControl(pro.color, Validators.required),
        size: new FormControl(pro.size, Validators.required),
      })
    })
  }
  editSubmit(): void {
    if (this.editF.valid) {
      const routeParams = parseInt(this.route.snapshot.params['id'], 10);

      this.crud.update(routeParams, this.editF.value).subscribe(res => {
        this.router.navigate(['/admin'])
        // console.log(this.editF.value)
        console.log(res)
      })
    }
  }
}
