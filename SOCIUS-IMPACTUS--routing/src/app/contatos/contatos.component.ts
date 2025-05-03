import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent {
  contactForm: FormGroup;
  isSending = false;
  messageSent = false;
  errorMessage = '';


  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      assunto: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  async sendEmail() {
    if (this.contactForm.valid) {
      this.isSending = true;
      this.errorMessage = '';
      try {
        const response = await emailjs.send(
          'service_s64xyih', // Substitua pelo seu Service ID do EmailJS
          'template_br4e0ak', // Substitua pelo seu Template ID do EmailJS
          {
            name: this.contactForm.value.name,
            assunto: this.contactForm.value.assunto,
            message: this.contactForm.value.message,
          },
          'WT4NGRt8ioYeab-QT' // Substitua pela sua Public Key do EmailJS
        );
        console.log('SUCCESS!', response.text);
        this.messageSent = true;
        this.contactForm.reset();
      } catch (error: any) {
        console.error('FAILED...', error);
        this.errorMessage = 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.';
      } finally {
        this.isSending = false;
      }
    } else {
      this.errorMessage = 'Por favor, preencha todos os campos corretamente.';
    }
  }
}
