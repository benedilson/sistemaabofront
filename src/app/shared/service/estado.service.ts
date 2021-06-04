import { Injectable } from '@angular/core';
import { Estado } from '../model/estado';

@Injectable()
export class EstadoService {

  getEstados() {
    return [
      new Estado('AC'), new Estado('AL'), new Estado('AM'), new Estado('AP'), new Estado('BA'), 
      new Estado('CE'), new Estado('DF'), new Estado('ES'), new Estado('GO'), new Estado('MA'),
      new Estado('MG'), new Estado('MS'), new Estado('MT'), new Estado('PA'), new Estado('PB'), 
      new Estado('PE'), new Estado('PI'), new Estado('PR'), new Estado('RJ'), new Estado('RN'), 
      new Estado('RO'), new Estado('RR'), new Estado('RS'), new Estado('SC'), new Estado('SE'), 
      new Estado('SP'), new Estado('TO')];
  }
}
