import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent {
  cityList : any [] = [];
  constructor(private http : HttpClient){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllCity();
  }
  getAllCity(){
    this.http.get(`https://freeapi.gerasim.in/api/FlightBooking/GetAllCity`).subscribe((res: any) => {
      this.cityList = res.data;
      this.cityList.forEach(element => {
        element.isEdit = false;
      });
    });
  }

  bulkUpdateCity(){
    this.http.post(`https://freeapi.gerasim.in/api/FlightBooking/AddUpdateBulkCity`, this.cityList).subscribe((res: any) => {
      if(res.result){
        alert('Bulk Update Success')
        console.log("bulkUpdateSuccess")
      }
      else{
        alert(res.message);
      }
    });
  }

  addNew(){
    const obj = {
      cityId : 0,
      cityName: ''
    };
    this.cityList.unshift(obj)
  }


}
