import { Peliculas } from './peliculas.interface';

export interface Respuesta {
    page: number;
    total_results: number;
    total_pages: number;
    results: Peliculas[];
  }
