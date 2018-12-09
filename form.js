

var artDerAnfrage = "0"; // 0=unbekannt, 1=Problem, 2=Anfrage Zusatzleistung

// Ebene 0 = noch keine Kategorie gewählt
var inc0   = ["Problem-Art 1"  ,"Problem-Art 2"  ,"Problem-Art 3"  ,"Problem-Art 4"];


// Ebene 1 = 1 Kategorie gewählt
var inc1   = ["Problem-Art 11" ,"Problem-Art 12","Problem-Art 13"];
var inc2   = ["Problem-Art 21" ,"Problem-Art 22" ,"Problem-Art 23"];
var inc2   = ["Problem-Art 31" ,"Problem-Art 32" ,"Problem-Art 33"];
var inc3   = ["Problem-Art 41" ,"Problem-Art 42" ,"Problem-Art 43"];

// Ebene 2 = 2 Kategorien gewählt 
var inc11  = ["Problem-Art 111" ,"Problem-Art 112" ,"Problem-Art 113"];
var inc12  = ["Problem-Art 121" ,"Problem-Art 122" ,"Problem-Art 123"];
var inc13  = ["Problem-Art 131" ,"Problem-Art 132" ,"Problem-Art 133"];

var inc21  = ["Problem-Art 211" ,"Problem-Art 212" ,"Problem-Art 213"];
var inc22  = ["Problem-Art 221" ,"Problem-Art 222" ,"Problem-Art 223"];
var inc23  = ["Problem-Art 231" ,"Problem-Art 232" ,"Problem-Art 233"];

var inc31  = ["Problem-Art 311" ,"Problem-Art 312" ,"Problem-Art 313"];
var inc32  = ["Problem-Art 321" ,"Problem-Art 322" ,"Problem-Art 323"];
var inc33  = ["Problem-Art 331" ,"Problem-Art 332" ,"Problem-Art 333"];

var inc41  = ["Problem-Art 411" ,"Problem-Art 412" ,"Problem-Art 413"];
var inc42  = ["Problem-Art 421" ,"Problem-Art 422" ,"Problem-Art 423"];
var inc43  = ["Problem-Art 431" ,"Problem-Art 432" ,"Problem-Art 433"];

// Aktuelle Werte der jeweilige Ebene
var incKat1 = "";
var incKat2 = "";
var incKat3 = "";

// Zur Parametrisierung von kategorieInitialisieren 
//var html_katId = "";   // id eines html select-elements 
//var katListe = new Array; // eine beliebige Kategorie Liste wie z.B. inc43


// "Klasse" mit allen Forlumardaten
var formular = { 			
		incident: [inckat1,inckat2,inckat3],
		kat1: "bitte auswählen", // Kategorie 1
		kat2: "bitte auswählen", // Kategorie 2
		kat3: "bitte auswählen", // Kategorie 3
		kat4: "bitte auswählen", // Kategorie 4
		anz: "1",             // vorbelegtes Pflichtfeld Anzahl betroffener Anwendder 
		Bemerkung: ""         // Optional Feld für Erläuterungen an Heldpdesk
			
};


function auswahllisten_initialsieren() {
	for (let i=0; i<document.getElementById('ik1').length; i++) {
		document.getElementById('ik1')[i].innerHTML=inc0[i];
	    //document.getElementById('ik1')[i].value=inc0[i];
	   }
}

function formularInitialsieren() {
	document.getElementById('div_ik2').style.visibility='hidden';
	document.getElementById('div_ik3').style.visibility='hidden';
	kategorieInitialisieren (inc0, ik1);    // Inc1-kategorie initialisieren
	// auswahllisten_initialsieren() 	
}



function kategorieInitialisieren (katListe, html_katId) {	
	
	goId('bem').innerHTML=katListe.length+html_katId.name;
	for (var i=0; i<katListe.length; i++) {	
	goId('bem').innerHTML+="Krosch";
    //var opt = new option(katListe[i],katListe[i]); 
    var opt = document.createElement('OPTION');
    goId('bem').innerHTML+="Krosch";
    goId(html_katId).appendChild(opt); 
    //goId(html_katId).options[i]=opt;   
    goId('bem').innerHTML+="Krosch"
	}	
	document.getElementById('bem').innerHTML+="**schleife durchlaufen";	
}

function inc_designer() {
	//incKat1 = goId(ik1).options[ik1.selectedIndex].value;
	incKat1 = document.ticket.inckat1.selectedIndex;
	if (incKat1 == 1) {
	document.getElementById('bem').innerHTML=incKat1;
		
} 	
	
	
	
//	document.getElementById('bem').innerHTML=goId('k11').value; 
	
	
}



//if (auswahlKatl.options
//	    [auswahlKatl.selectedIndex].
//	    value == "choice1")
//	    {
//		auswahlKatl.options[auswahlKatl.selectedIndex].value = choice1;
//		auswahlKat2.options[0] = new Option("Kategorie 2 wählen");
//	    auswahlKat2.options[1] = new Option(choice11);
//	    auswahlKat2.options[2] = new Option(choice12);
//		auswahlKat2.options[3] = new Option(choice13);
//	    }
		


function goId(id) {
	return document.getElementById(id)
}











