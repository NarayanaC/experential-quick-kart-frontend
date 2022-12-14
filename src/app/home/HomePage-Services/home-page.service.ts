import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Home-Interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {



 

  products: IProduct[]=[];
  constructor(private http: HttpClient) 
  {
   
  }

  //Getting the Products from backend API
  getProducts():Observable<IProduct[]>{
    let tempVar = this.http.get<IProduct[]>('https://quick-kart-narayana-team1.azurewebsites.net/api/home/getproducts')
    console.log(tempVar)
    return tempVar
  }

  PostNewSubscriber(emailID:string):Observable<boolean>{
  
    console.log(emailID)

    let tempVar = this.http.get<boolean>('https://quick-kart-narayana-team1.azurewebsites.net/api/customer/AddNewSubscriber?emailID='+emailID)
    console.log(tempVar)
    return tempVar
  }

  
  ValidateUser(userEmailID:string, userPassword:string, type:string):Observable<number>
  {
    var user:User
    user={emailID:userEmailID, password:userPassword,usertype:type};
    console.log(user)
    let result=this.http.post<number>('https://login-fnc1-team1-narayana.azurewebsites.net/api/LoginFunctionNarayana?code=qk5-JPTA0PuZch6DCY1jnNaRMnb_U3yJBemN8YCqgThMAzFu6PGrDw==',user)
    return result

  }

  

  
}

export class User{

  emailID:string='';
  password:string='';
  usertype:string='';


}
