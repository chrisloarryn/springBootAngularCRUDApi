import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

import {Router} from '@angular/router';
import {ServiceService} from 'src/app/Service/service.service';
import {Persona} from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  employeForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    cuenta: new FormControl('', Validators.required)
  });
  loadingTxt = 'Loading...';

  constructor(private router: Router, private service: ServiceService) {
  }

  ngOnInit() {
    this.Editar();
  }

  Editar() {
    const id = localStorage.getItem('id');
    this.service.getPersonaId(+id)
      .subscribe(data => {
        this.employeForm.controls.name.setValue(data.name);
        this.employeForm.controls.apellidos.setValue(data.apellidos);
        this.employeForm.controls.cuenta.setValue(data.cuenta);
        this.employeForm.controls.id.setValue(data.id);
        // this.employeForm.valueChanges.subscribe(changes => console.log(changes));
      });

  }

  Actualizar(persona?: Persona) {
    if (this.employeForm.invalid) {
      return;
    } else {
      persona = this.employeForm.value;
    }
    this.service.updatePersona(persona)
      .subscribe(data => {
        alert('Se Actualizo con Exito...!!!');
        this.router.navigate(['listar']);
      });
  }

}
