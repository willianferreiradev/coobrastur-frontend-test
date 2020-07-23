import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ClientService } from '../client.service';
import { showToastError, showToastSuccess } from '@core/helpers/toastr';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: ClientService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      job: [null, Validators.required]
    });

    this.route.params.pipe(
      switchMap(({ id }) => {
        // tslint:disable-next-line: curly
        if (id) return this.service.findById(id);
        return new Observable(null);
      })).subscribe(
        ({data}) => this.form.patchValue({
          id: data.id,
          name: `${data.first_name} ${data.last_name}`
        }),
        () => showToastError(`Erro ao buscar usuário`, 'Erro')
      );
  }

  onSubmit(): void {
    const { id } = this.form.value;
    console.log(id);
    if (id == null) {
      this.service.create(this.form.value).subscribe(
        () => showToastSuccess('Usuário cadastrado!', 'Salvo'),
        () => showToastError('Erro', 'Erro ao cadastrar usuário!', 'Erro'),
      );
      return;
    }

    this.service.update(this.form.value).subscribe(
      () => showToastSuccess('Usuário atualizado!', 'Salvo'),
      () => showToastError('Erro ao atualizar usuário!', 'Erro'),
    );
  }

  back(): void {
    this.location.back();
  }
}
