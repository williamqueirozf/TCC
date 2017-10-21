import { Component,ViewChild } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


declare var google:any;

var iconBase ="assets/img/model4-32.png";

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
  	let latLng = new google.maps.LatLng(lat,lng);//atual
  	let latLng1 = new google.maps.LatLng(-23.6681915,-46.5356007); //sa
  	let latLng2 = new google.maps.LatLng(-23.723221,-46.5453837);//sbc
  	

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
    
    //setar local atual
  	var localAtual = 'Local Atual'
  	var myinfowindowlocalAtual = new google.maps.InfoWindow({
   	content: localAtual
	});
  
    var marker = new google.maps.Marker({
    position: latLng,
    icon:iconBase,
    
    infowindow: myinfowindowlocalAtual
	});

	google.maps.event.addListener(marker, 'click', function() {
        this.infowindow.open(map, this);

	});
	marker.setMap(map); 

	/*this.getAddress(latLng,address => {  //ao inicializar Aplicativo Traz alert endereco
		alert(address);
	});*/


    //credenciado A  	
  	var credenciadoA = 'Av. Pereira Barreto, 42 - Vila Gilda, Santo André - SP, 09190-210'
  	var myinfowindowcredenciadoA = new google.maps.InfoWindow({
   	content: credenciadoA
	});

    let marker1 = new google.maps.Marker({
  	position : latLng1,
  	
	infowindow: myinfowindowcredenciadoA
	});

	google.maps.event.addListener(marker1, 'click', function() {
        this.infowindow.open(map, this);

	});

	marker1.setMap(map);



	//credenciado b  	
  	var credenciadoB = 'Av. Rotary, 624 - Ferrazópolis, São Bernardo do Campo - SP, 09721-000'
  	var myinfowindowcredenciadoB = new google.maps.InfoWindow({
   	content: credenciadoB
	});

    let marker2 = new google.maps.Marker({
  	position : latLng2,
  	//icon: myicon,
  	title:'Shopping A',

	infowindow: myinfowindowcredenciadoB
	});

	google.maps.event.addListener(marker2, 'click', function() {
        this.infowindow.open(map, this);

	});

	marker2.setMap(map);
}

}