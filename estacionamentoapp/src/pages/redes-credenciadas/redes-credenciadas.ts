import { Component,ViewChild } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';

declare var google:any;

@Component({
  selector: 'page-redes-credenciadas',
  templateUrl: 'redes-credenciadas.html'
})
export class RedesCredenciadasPage {

	@ViewChild('map')mapElement;
	map: any;
  constructor(public navCtrl: NavController,platform : Platform) {
  	platform.ready().then(()=>{
  		this.initMap();
  	});
  }

  
  private initMap(){
  	let latLng = new google.maps.LatLng(-23.7218619,-46.5443031);

  	let mapOptions={
  		center: latLng,
  		zoom: 13,
  		mapTypeId: google.maps.MapTypeId.ROADMAP,
  		disableDefaultUI:true,
  		zoomControl: true
  	};


   let element =document.getElementById('map');
   let map = new google.maps.Map(element,mapOptions);
  //this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions);
  
  let marker = new google.maps.Marker({
  	position : latLng,
  	title: 'Hello World!'
  });
  marker.setMap(map);

  }
}
