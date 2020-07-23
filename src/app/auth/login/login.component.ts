import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { showToastError } from '@core/helpers/toastr';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onSubmit(): void {
    this.service.login(this.form.value)
    .subscribe(
      () => this.router.navigate(['clients/list']),
      () => showToastError('Erro ao tentar fazer login. Tente novamente', 'Erro'),
    );
  }

}
