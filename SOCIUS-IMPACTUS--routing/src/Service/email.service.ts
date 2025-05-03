import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface EmailPayload {
  to: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {}

  sendEmail(payload: EmailPayload): Observable<{ status: string }> {
    // console.log('Simulando envio de email...');
    // console.log(Para: ${payload.to});
    // console.log(Assunto: ${payload.subject});
    // console.log(Mensagem: ${payload.message});

    // Simula um atraso de 2 segundos e retorna sucesso
    return of({ status: 'success' }).pipe(delay(2000));
  }

}
