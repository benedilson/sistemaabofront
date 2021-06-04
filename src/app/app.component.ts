import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Estado } from './shared/model/estado';
import { CandidatoService } from './shared/service/candidato.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CandidatoService]
})
export class AppComponent {
  title = 'candidato-front';

  quantidadeCandidatoPorEstado: number;
  imcMedioPorIdade: number;
  percentualObesos: number;
  mediaIdadePorTipoSanguineo: number;
  quantidadePossiveisDoadores: number;



  constructor(
    private candidatoService: CandidatoService
  ) {
  }

  onChange(sigla: string) {
    this.candidatoService.getQuantidadeCandidatoPorEstado(sigla)
    .subscribe(res => this.quantidadeCandidatoPorEstado = Number(res));
  }
}
