import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../../Service/service.service';
import {Persona} from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas: Persona[];
  isLoading: boolean;

  constructor(private service: ServiceService, private router: Router) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.service.getPersonas()
      .subscribe(data => {
        if (data.length === 0) { this.isLoading = false; }
        this.personas = data;
      });
  }

  Editar(persona: Persona): void {
    localStorage.setItem('id', persona.id.toString());
    this.router.navigate(['edit']);
  }

  Delete(persona: Persona) {
    this.service.deletePersona(persona)
      .subscribe(data => {
        this.personas = this.personas.filter(p => p !== persona);
        alert('Usuario eliminado...');
      });
  }

}
