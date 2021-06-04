import { HEMOCE_API } from './config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';

@Injectable()
export class CandidatoService {

  private baseUrlService:string = '';
  private headers:Headers;
  private options:RequestOptions;

  constructor(
    private httpClient: HttpClient,
    //private configService: ConfigService
  ) {
    //this.baseUrlService = this.configService.getUrlService() + "/candidatos"; 
  }
  
  getQuantidadeCandidatoPorEstado(estado: string) {
    return this.httpClient.get(`${HEMOCE_API}/candidatos/filterquantidadeporestado?estado=${estado}`);
  }

  // getIMCMedioPorIdade(idadeInicial: number, idadeFinal: number) {
  //   return this.http.get(this.baseUrlService + 
  //     "/filteridade?idadeinicial=" + idadeInicial + "&idadefinal=" + idadeFinal);
  // }

  // getPercentualObesos(sexo: any) {
  //   return this.http.get(this.baseUrlService + "/filterpercentualobesos?sexo=" + sexo);
  // }

  // getMediaIdadeTipoSanguineo(tipo_sanguineo: any) {
  //   return this.http.get(this.baseUrlService + "/filtermediaidadetiposanguineo?tiposanguineo=" + tipo_sanguineo);
  // }

  // getQuantidadePossiveisDoadores(tipo_sanguineo: any) {
  //   return this.http.get(this.baseUrlService + "/filterquantidadepossiveisdoadores?tiposanguineo=" + tipo_sanguineo);
  // }
}
