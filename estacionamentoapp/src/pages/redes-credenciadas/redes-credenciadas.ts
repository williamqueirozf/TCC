import { Component,ViewChild } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google:any;

@Component({
  selector: 'page-redes-credenciadas',
  templateUrl: 'redes-credenciadas.html'
})
export class RedesCredenciadasPage {

	//@ViewChild('map')mapElement;
	//map: any;
  constructor(public navCtrl: NavController,private geolocation: Geolocation) {

  }

  ionViewDidLoad(){//garante que o metodo só será carregado após a aplicação ser carregada
  		this.initMap();
  }


  private initMap(){
  	this.geolocation.getCurrentPosition().then(result => {
  		this.loadMap(result.coords.latitude,result.coords.longitude);

  	});

  }

  private getAddress(latLng,sucessCallback){
  	let geocoder = new google.maps.Geocoder;

  	geocoder.geocode({location:latLng},(results,status)=>{
  		if(status === google.maps.GeocoderStatus.OK){
  			if(results[0]){
  				sucessCallback(results[0].formatted_address);
  			}
  		}
  	});
  }

  
  private loadMap(lat,lng){
  	let latLng = new google.maps.LatLng(lat,lng);
  	//let latLng1 = new google.maps.LatLng(-23.6982429,-46.5538633);
  	

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
  	position : latLng
  	
  	
  });
  /*  let marker1 = new google.maps.Marker({
  	position : latLng1
  	
  	
  });*/



  marker.setMap(map);

  this.getAddress(latLng,address => {
  	alert(address);
  })
  



 // marker1.setMap(map);


  }
}
