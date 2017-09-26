import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

//stops the error when calling google.maps below
declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapRef:ElementRef;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad(){
    this.showMap();
  }

  showMap(){
    //needs location
    const location = new google.maps.LatLng(38.857, -77.009003);
  
    //set up map options
    const options = {
      center: location,
      zoom: 10,
      //streetViewControl: false,
      mapTypeId: 'hybrid'
    }

    const  map = new google.maps.Map(this.mapRef.nativeElement, options);
  
    this.addMarker(location, map);
  }

    addMarker(position, map){
      return new google.maps.Marker({
        position, 
        map
      })
    }

}
