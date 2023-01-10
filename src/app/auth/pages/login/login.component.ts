import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from '../../servicios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm!:FormGroup;

  constructor(private fb:FormBuilder,
    private routerprd:Router) { }


 


  ngOnInit(): void {
   
    console.log(this.routerprd);
    this.myForm = this.createMyForm();
    
      
  
  }


  handleCredentialResponse(response:any){

    console.log(response);
    console.log(this.routerprd);
    if(response.credential){
     //sessionStorage.setItem("token",response.credential);
     document.location.href = "/sesion/principal";
    }
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      usuario:['',[Validators.required]],
      password:['',Validators.required]
    });
  }

  public submitFormulario(){
    console.log("hago clikc")
    if(this.myForm.invalid){
        Object.values(this.myForm.controls).forEach(control=>{
          control.markAllAsTouched();
        });
        return;
    }

    console.log("aaa: ",)
    localStorage.setItem('login',JSON.stringify(this.myForm.controls['usuario'].value))
      document.location.href = "/heroes/listado";
     
  }

  public get f():any{
    return this.myForm.controls;
  }

}