// Init and populate map of Denmark
var map = L.map('leaflet_map', {
    center: [56.25, 11],
    zoom: 6,
    minZoom: 6,
    maxZoom: 18
});

var markers = new L.MarkerClusterGroup({ // For grouping markers near each other
    'maxClusterRadius': 25,
    'showCoverageOnHover': false,
    'zoomToBoundsOnClick': true
});

var myIcon = L.icon({ // Use custom marker icon
    iconUrl: 'img/marker.png',
    iconSize: [32, 32]
});

function trackMarkerHit(txt) {
    // Do nothing
}
    
markers.addLayer(
    new L.Marker(
        [ 55.682550 , 12.576227 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank" href="http://www.dedrikkerderhjemme.dk/">De Drikker Derhjemme &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Suhmsgade 4, 3. sal<br />1125 K&oslash;benhavn K</p></div>'
    + 'Tel: <a href="tel:3317 2010">3317 2010</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('De Drikker Derhjemme');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.6878665044785 , 12.5613911384613 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank" href="http://www.headspace.dk/kobenhavn">Headspace København &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Ravnsborggade 2-4<br />2200 K&oslash;benhavn N</p></div>'
    + 'Tel: <a href="tel:5373 3001">5373 3001</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Headspace København');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.6781096253332 , 12.4543618683445 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank" href="http://www.headspace.dk/rodovre">Headspace Rødovre &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />T&aring;rnvej 97<br />2610 R&oslash;dovre</p></div>'
    + 'Tel: <a href="tel:5373 3003">5373 3003</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Headspace Rødovre');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.7643462507829 , 12.5191576195729 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank" href="http://novavi.dk/ung-revers/boern-og-unge/">Novavi Ung Revers Lyngby &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />J&aelig;gersborgvej 66A, 1. sal<br />2800 Lyngby</p></div>'
    + 'Tel: <a href="tel:2370 8582">2370 8582</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Novavi Ung Revers Lyngby');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.1014643217941 , 14.6982714688358 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank" href="http://tuba.dk/tuba-afdeling/bornholm">TUBA Bornholm &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ventetid: 3 m&aring;neder<br />Snellemark 51, 2.<br />3700 R&oslash;nne</p></div>'
    + 'Tel: <a href="tel:2119 5198">2119 5198</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Bornholm');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.6725744220048 , 12.5512415684509 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank" href="http://tuba.dk/tuba-afdeling/koebenhavn">TUBA København &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Vesterbrogade 69, 1. tv<br />1620 K&oslash;benhavn V</p></div>'
    + 'Tel: <a href="tel:4396 2080">4396 2080</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA København');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.3562892907178 , 8.61808742761758 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.holstebro.dk/Alkoholbehandling-for-familie-og-paaroerende-6552.aspx">Alkoholbehandlingen Holstebro &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />S&oslash;nderlandsgade 8<br />Helgolandsgade 2 (op ad rampen)<br />7500 Holstebro</p></div>'
    + 'Tel: <a href="tel:9611 4050">9611 4050</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Alkoholbehandlingen Holstebro');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.8631975120682 , 9.85138099563054 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.headspace.dk/horsens">Headspace Horsens &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Skolegade 7<br /> 8700 Horsens</p></div>'
    + 'Tel: <a href="tel:5373 3005">5373 3005</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Headspace Horsens');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.1540233819811 , 10.2036613129393 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://tuba.dk/tuba-afdeling/aarhus">TUBA Århus &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Frederiksgade 75, 1.<br /> 8000 &Aring;rhus C</p></div>'
    + 'Tel: <a href="tel:8611 8890">8611 8890</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Århus');
    })
);
markers.addLayer(
    new L.Marker(
        [ 57.0418451072366 , 9.93052341642772 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.barnetsblaahus.dk/Blaa_Kors-Barnets_Blaa_Hus/Om_Barnets_Blaa_Hus/Barnets_Blaa_Hus_Aalborg.aspx">Barnets Blå Hus Aalborg &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>S&oslash;nderbro 2<br /> 9000 Aalborg</p></div>'
    + 'Tel: <a href="tel:9810 0020">9810 0020</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Barnets Blå Hus Aalborg');
    })
);
markers.addLayer(
    new L.Marker(
        [ 57.051187918317 , 9.91779722263647 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.headspace.dk/aalborg">Headspace Aalborg &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Borgergade 6<br /> 9000 Aalborg</p></div>'
    + 'Tel: <a href="tel:5373 3006">5373 3006</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Headspace Aalborg');
    })
);
markers.addLayer(
    new L.Marker(
        [ 57.0465846549858 , 9.92193019002285 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.tuba.dk/tuba-afdeling/aalborg">TUBA Aalborg &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><div class="field field--name-field-street field--type-text field--label-hidden"> <div class="field__items"> <div class="field__item even"><br />M&oslash;llegade&nbsp;8, 1. tv</div> </div> </div> <div class="field field--name-field-zipcode field--type-number-integer field--label-hidden"> <div class="field__items"> <div class="field__item even">9000&nbsp;Aalborg</div> </div> </div></div>'
    + 'Tel: <a href="tel:3093 9117">3093 9117</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Aalborg');
    })
);
markers.addLayer(
    new L.Marker(
        [ 57.4440525957387 , 10.5385403594552 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.tuba.dk/tuba-afdeling/frederikshavn">TUBA Frederikshavn &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Danmarksgade 16, 1.<br /> 9900 Frederikshavn</p></div>'
    + 'Tel: <a href="tel:4022 8357">4022 8357</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Frederikshavn');
    })
);
markers.addLayer(
    new L.Marker(
        [ 57.4583782427193 , 9.98807338333842 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.tuba.dk/tuba-afdeling/hjoerring">TUBA Hjørring &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Brinck Seidelinsgade 12A<br /> 9800 Hj&oslash;rring</p></div>'
    + 'Tel: <a href="tel:3067 2479">3067 2479</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Hjørring');
    })
);
markers.addLayer(
    new L.Marker(
        [ 57.0458625236115 , 9.91570016282254 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.aalborg.dk/familie-og-boern/unge/%C3%A5ben-raadgivning">Ungerådgivningen Aalborg &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Jernbanegade 23<br /> 9000 Aalborg</p></div>'
    + 'Tel: <a href="tel:9931 5750">9931 5750</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Ungerådgivningen Aalborg');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.6271246260341 , 12.0838466099227 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.headspace.dk/roskilde">Headspace Roskilde &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Basgangen 5<br /> 4000 Roskilde</p></div>'
    + 'Tel: <a href="tel:5373 3002">5373 3002</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Headspace Roskilde');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.4035156417335 , 11.3632714660809 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://rusmiddelcenter.slagelse.dk/til-paaroerende/boerne-og-ungegrupper">Rusmiddelcenter Slagelse &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Ingemannsvej 26A<br /> 4200 Slagelse</p></div>'
    + 'Tel: <a href="tel:5857 4890">5857 4890</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Rusmiddelcenter Slagelse');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.2307382119728 , 11.7630241146993 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://tuba.dk/tuba-afdeling/naestved">TUBA Næstved &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Jernbanegade 9, 2. sal<br /> 4700 N&aelig;stved</p></div>'
    + 'Tel: <a href="tel:2968 9620">2968 9620</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Næstved');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.4822916715372 , 9.44205543327747 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.kolding.dk/borger/alkoholbehandling/misbrug/born-og-unge-i-familier-med-alkoholproblemer">Alkoholbehandlingen Kolding &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Elvej 2A<br /> 6000&nbsp;Kolding</p></div>'
    + 'Tel: <a href="tel:3047 3222">3047 3222</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Alkoholbehandlingen Kolding');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.3934913794276 , 10.3871007308981 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.headspace.dk/odense">Headspace Odense &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Klosterbakken 13-15, 2.sal<br /> 5000 Odense C</p></div>'
    + 'Tel: <a href="tel:5373 3004">5373 3004</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Headspace Odense');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.4651755891396 , 8.46002187197039 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.freewebsite-service.com/kontakten-es/forside.php">Kontakten Esbjerg &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Vindrosen&nbsp;- De frivilliges hus<br /> Teglv&aelig;rksgade 1<br /> 6700 Esbjerg</p></div>'
    + 'Tel: <a href="tel:3032 1648">3032 1648</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Kontakten Esbjerg');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.2536327467658 , 9.47815493062078 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.haderslev.dk/files/12770/%C5benanonymr%E5dgivningfoldertildistrikterne.pdf">Åben rådgivning Haderslev &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Moltrupvej 1<br /> 6100 Haderslev</p></div>'
    + 'Tel: <a href="tel:7434  3434">7434  3434</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Åben rådgivning Haderslev');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.0461548395421 , 9.41846463149279 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://tuba.dk/tuba-afdeling/aabenraa">TUBA Aabenraa &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ramsherred 31A, 1.<br /> 6200 Aabenraa</p></div>'
    + 'Tel: <a href="tel:3093 9103">3093 9103</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Aabenraa');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.4897177339306 , 9.47221185290715 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://tuba.dk/tuba-afdeling/kolding">TUBA Kolding &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ny Vestergade 3, 3.<br /> 6000 Kolding</p></div>'
    + 'Tel: <a href="tel:3093 9102">3093 9102</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Kolding');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.3965278503436 , 10.3817884286978 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://tuba.dk/tuba-afdeling/odense">TUBA Odense &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><div class="field field--name-field-street field--type-text field--label-hidden"> <div class="field__items"> <div class="field__item even">Kongensgade 31A, 1. og 2. th<br />5000 Odense</div> </div> </div></div>'
    + 'Tel: <a href="tel:2968 9645">2968 9645</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Odense');
    })
);
markers.addLayer(
    new L.Marker(
        [ 54.9119715772727 , 9.79245584067613 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://tuba.dk/tuba-afdeling/soenderborg">TUBA Sønderborg &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Perlegade 44, 1.<br /> 6400 S&oslash;nderborg</p></div>'
    + 'Tel: <a href="tel:3067 2481">3067 2481</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Sønderborg');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.7145973838058 , 9.54388480142807 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.vejle.dk/borger/mit-liv/sundhed-og-omsorg/alkohol-og-stofmisbrug/tilbud-til-paaroerende/">Den åbne rådgivning Vejle &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />orsensvej 35<br /> 7100 Vejle</p></div>'
    + 'Tel: <a href="tel:2338 3425">2338 3425</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Den åbne rådgivning Vejle');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.0483758577115 , 9.42080501791481 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.misbrugscenteraabenraa.dk/familiebehandling/boernesamtaler/">Børn & Unge Samtaler &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Reberbanen 3<br />6200 Aabenraa</p></div>'
    + 'Tel: <a href="tel:7376 8216">7376 8216</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Børn & Unge Samtaler');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.6657607684899 , 12.3924530545142 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://novavi.dk/ung-revers/boern-og-unge/">Novavi Ung Revers Glostrup &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Hovedvejen 140-146<br /> 2600 Glostrup</p></div>'
    + 'Tel: <a href="tel:2370 8956">2370 8956</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Novavi Ung Revers Glostrup');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.7231866007438 , 12.4418339655333 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://novavi.dk/ung-revers/boern-og-unge/">Novavi Ung Revers Herlev &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Herlev Ringvej 2C, 2.tv<br />2730 Herlev</p></div>'
    + 'Tel: <a href="tel:2370 8956">2370 8956</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Novavi Ung Revers Herlev');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.2706794061866 , 9.90776360024001 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.assens.dk/borger/sundhed-og-sygdom/alkohol/drikker-din-far-eller-mor-for-meget/">Ungesamtaler Assens &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Assens Misbrugscenter<br />Odensevej 29<br />5610 Assens</p></div>'
    + 'Tel: <a href="tel:6474 7970">6474 7970</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Ungesamtaler Assens');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.2491329151035 , 12.1066421221189 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://rus.faxekommune.dk/boerne-ungegruppe-0">Faxe børne- og ungegrupper &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Rusmiddelcenteret<br />Faxe Sundhedscenter<br /> Pr&aelig;st&oslash;vej 78, byg 18<br /> 4640 Faxe</p></div>'
    + 'Tel: <a href="tel:5620 2720">5620 2720</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Faxe børne- og ungegrupper');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.7361683265489 , 12.4743078541626 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.gladsaxe.dk/rusmiddelcentret/paaroerende/for_8-12_aarige">Gladsaxe børne- og ungegrupper &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Rusmiddelcenter<br />&Oslash;stmarken 4B<br />2860 S&oslash;borg</p></div>'
    + 'Tel: <a href="tel:3957 3900">3957 3900</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Gladsaxe børne- og ungegrupper');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.4652870109362 , 10.0383651332167 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.projektbrus.dk/randers">BRUS Randers &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Rusmiddelcenter Randers<br />Gammel Hadsundvej 1<br />8900 Randers C</p></div>'
    + 'Tel: <a href="tel:2016 3204">2016 3204</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('BRUS Randers');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.31732999 , 10.78787116 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.nyborg.dk/da/Borger/Sundhed/Rusmidler/BornUnge">Nyborg børn og unge &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Rusmiddelcenter Nyborg<br />Alkohol- og Stofmisbrugsbehandling<br />Vestergade 11<br />5800 Nyborg</p></div>'
    + 'Tel: <a href="tel:6333 8190">6333 8190</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Nyborg børn og unge');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.3173299868998 , 10.7878711574272 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.nyborg.dk/da/Borger/Sundhed/Rusmidler/BornUnge">Nyborg børn og unge &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Rusmiddelcenter Nyborg<br />Vestergade 11<br />5800 Nyborg</p></div>'
    + 'Tel: <a href="tel:6333 8190">6333 8190</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Nyborg børn og unge');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.9556814418095 , 8.69774098399014 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.thisted.dk/Institutioner/institution/Behandlerhuset/Andre%20tilbud/Born%20som%20lever%20i%20familier%20med%20alkohol-%20og%20stofproblemer.aspx">Børn & Unge Rådgivning &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Behandlerhuset Farverstr&aelig;de<br />Farverstr&aelig;de 2<br />7700 Thisted</p></div>'
    + 'Tel: <a href="tel:2120 7022">2120 7022</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Børn & Unge Rådgivning');
    })
);
markers.addLayer(
    new L.Marker(
        [ 54.9378616456172 , 8.87424168615122 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.justbeyou.dk/care-4-you">Børn & Unge Samtaler &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>R&aring;dgivningscenter T&oslash;nder<br />&Oslash;stergade 65<br />6270 T&oslash;nder</p></div>'
    + 'Tel: <a href="tel:2014 1384">2014 1384</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Børn & Unge Samtaler');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.4576068934993 , 9.41782765853543 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://https://kommune.viborg.dk/Borger/Boern,-unge-og-familie/Raadgivning-og-stoette-til-familier/Ungeindsatsen-Viborg">Børn & Unge Grupper &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Sct. Laurentii Vej 14<br />8800 Viborg</p></div>'
    + 'Tel: <a href="tel:8787 7800">8787 7800</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Børn & Unge Grupper');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.0175051781335 , 11.907569846592 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.vordingborg.dk/borger/sundhed/alkoholraadgivning/">Børn & Unge Samtaler Vordingborg &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Center for Rusmidler<br />Sankelmarksvej 10a<br />4760 Vordingborg</p></div>'
    + 'Tel: <a href="tel:5536 4000">5536 4000</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Børn & Unge Samtaler Vordingborg');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.9721446317834 , 12.0193083361852 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.halsnaes.dk/Borger/Voksne/Alkohol-%20og%20stofraadgivning.aspx">Børn og unge samtaler Halsnæs &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Alkohol og Stofr&aring;dgivningen<br />Hermannsgade 3, 1<br />3300 Frederiksv&aelig;rk</p></div>'
    + 'Tel: <a href="tel:4793 0329">4793 0329</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Børn og unge samtaler Halsnæs');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.7438812029497 , 12.5412630203343 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.gentofte.dk/Borger/Familie-og-B%C3%B8rn/B%C3%B8rn-og-unge-med-s%C3%A6rlige-behov/Udsatte-b%C3%B8rn/%C3%85ben-Anonym-R%C3%A5dgivning">Åben anonym rådgivning Gentofte &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Alkoholr&aring;dgivningen<br />Gentoftegade 71<br />2820 Charlottenlund</p> <p>Indgang p&aring; bagsiden af huset</p></div>'
    + 'Tel: <a href="tel:4043 3012">4043 3012</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Åben anonym rådgivning Gentofte');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.3272354400847 , 8.77706034217363 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.freewebsite-service.com/kontakten-es/forside.php">Kontakten Ribe &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Vindrosen - De frivilliges hus<br />Tangevej 6<br />6700 Ribe</p></div>'
    + 'Tel: <a href="tel:3032 1648">3032 1648</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Kontakten Ribe');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.2456629680556 , 9.2903724301735 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.haderslev.dk/files/12770/%C5benanonymr%E5dgivningfoldertildistrikterne.pdf">Åben rådgivning Vojens &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />R&aring;dhuscentret 7<br />6500 Vojens</p></div>'
    + 'Tel: <a href="tel:7434 3434">7434 3434</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Åben rådgivning Vojens');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.0401435240516 , 12.6061115993315 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://tuba.dk/tuba-afdeling/helsingoer">TUBA Helsingør &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><div class="field field--name-field-street field--type-text field--label-hidden"> <div class="field__items"> <div class="field__item even">TUBA Helsing&oslash;r<br />Lundegade 17b<br />3000 Helsing&oslash;r</div> </div> </div></div>'
    + 'Tel: <a href="tel:3085 8185">3085 8185</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Helsingør');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.9310177871239 , 12.2994911253419 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://tuba.dk/tuba-afdeling/hilleroed">TUBA Hillerød &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><div class="field field--name-field-streetnumber field--type-text field--label-hidden"> <div class="field__items"> <div class="field__item even">Slotsgade 34, 1. sal</div> </div> </div> <div class="field field--name-field-zipcode field--type-number-integer field--label-hidden"> <div class="field__items"> <div class="field__item even">3400 Hiller&oslash;d</div> </div> </div></div>'
    + 'Tel: <a href="tel:3067 2484">3067 2484</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Hillerød');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.6537113048009 , 12.4748877963605 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://tuba.dk/tuba-afdeling/hvidovre">TUBA Hvidovre &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><div class="field field--name-field-street field--type-text field--label-hidden"> <div class="field__items"> <div class="field__item even">Hvidovrevej 137</div> </div> </div> <div class="field field--name-field-zipcode field--type-number-integer field--label-hidden"> <div class="field__items"> <div class="field__item even">2650 Hvidovre</div> </div> </div></div>'
    + 'Tel: <a href="tel:2968 9658">2968 9658</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Hvidovre');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.3115764757848 , 12.3914277032809 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://tuba.dk/tuba-afdeling/stevns">TUBA Stevns &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><div class="field field--name-field-street field--type-text field--label-hidden"> <div class="field__items"> <div class="field__item even">Egestr&aelig;de 14<br /> <div class="field field--name-field-zipcode field--type-number-integer field--label-hidden"> <div class="field__items"> <div class="field__item even">4660 Store Heddinge</div> </div> </div> </div> </div> </div></div>'
    + 'Tel: <a href="tel:2968 9620">2968 9620</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Stevns');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.7147693322194 , 11.7152302421422 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://tuba.dk/tuba-afdeling/holbaek">TUBA Holbæk &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><div class="field field--name-field-street field--type-text field--label-hidden"> <div class="field__items"> <div class="field__item even">Smedelundsgade 22 G, 1. sal</div> </div> </div> <div class="field field--name-field-zipcode field--type-number-integer field--label-hidden"> <div class="field__items"> <div class="field__item even">4300 Holb&aelig;k</div> </div> </div></div>'
    + 'Tel: <a href="tel:2119 5199">2119 5199</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Holbæk');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.676911641432 , 11.0986400146122 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://tuba.dk/tuba-afdeling/kalundborg">TUBA Kalundborg &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><div class="field field--name-field-street field--type-text field--label-hidden"> <div class="field__items"> <div class="field__item even">&Oslash;stre Havnevej 12, 1. Sal</div> </div> </div> <div class="field field--name-field-zipcode field--type-number-integer field--label-hidden"> <div class="field__items"> <div class="field__item even">4400 Kalundborg</div> </div> </div></div>'
    + 'Tel: <a href="tel:2119 7174">2119 7174</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Kalundborg');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.40838313 , 11.35345092 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://tuba.dk/tuba-afdeling/slagelse">TUBA Slagelse &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><div class="field field--name-field-street field--type-text field--label-hidden"> <div class="field__items"> <div class="field__item even">Lindevej 2, 2. sal</div> </div> </div> <div class="field field--name-field-zipcode field--type-number-integer field--label-hidden"> <div class="field__items"> <div class="field__item even">4200 Slagelse</div> <div class="field__item even"></div> </div> </div></div>'
    + 'Tel: <a href="tel:2968 9620">2968 9620</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Slagelse');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.0112518831708 , 11.9070228762196 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://tuba.dk/tuba-afdeling/vordingborg">TUBA Vordingborg &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><div class="field field--name-field-street field--type-text field--label-hidden"> <div class="field__items"> <div class="field__item even">Valdemarsgade 54</div> </div> </div> <div class="field field--name-field-zipcode field--type-number-integer field--label-hidden"> <div class="field__items"> <div class="field__item even">4760 Vordingborg</div> </div> </div></div>'
    + 'Tel: <a href="tel:3067 2474">3067 2474</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Vordingborg');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.0594168139378 , 10.6118851918406 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://tuba.dk/tuba-afdeling/svendborg">TUBA Svendborg &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><div class="field field--name-field-street field--type-text field--label-hidden"> <div class="field__items"> <div class="field__item even">Kloster Plads 11, 1. sal</div> </div> </div> <div class="field field--name-field-zipcode field--type-number-integer field--label-hidden"> <div class="field__items"> <div class="field__item even">5700 Svendborg</div> </div> </div></div>'
    + 'Tel: <a href="tel:3067 2480">3067 2480</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Svendborg');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.25171047 , 9.4896382 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://tuba.dk/tuba-afdeling/haderslev">TUBA Haderslev &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><div class="field field--name-field-street field--type-text field--label-hidden"> <div class="field__items"> <div class="field__item even"> <div class="field field--name-field-street field--type-text field--label-hidden"> <div class="field__items"> <div class="field__item even">N&oslash;rregade&nbsp;38E 1.sal</div> </div> </div> </div> </div> </div> <div class="field field--name-field-zipcode field--type-number-integer field--label-hidden"> <div class="field__items"> <div class="field__item even">6100 Haderslev</div> </div> </div></div>'
    + 'Tel: <a href="tel:3093 9102">3093 9102</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Haderslev');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.4491610133613 , 9.40517939139617 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://tuba.dk/tuba-afdeling/viborg">TUBA Viborg &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><div class="field field--name-field-street field--type-text field--label-hidden"> <div class="field__items"> <div class="field__item even">Sct. Mathias Gade 38, 2. sal</div> </div> </div> <div class="field field--name-field-zipcode field--type-number-integer field--label-hidden"> <div class="field__items"> <div class="field__item even">8800 Viborg</div> </div> </div></div>'
    + 'Tel: <a href="tel:3094 4186">3094 4186</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Viborg');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.64067223 , 9.79399593 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://tuba.dk/tuba-afdeling/mariagerfjord">TUBA Mariagerfjord &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><div class="field field--name-field-street field--type-text field--label-hidden"> <div class="field__items"> <div class="field__item even">Adelgade 4, 2. sal</div> </div> </div> <div class="field field--name-field-zipcode field--type-number-integer field--label-hidden"> <div class="field__items"> <div class="field__item even">9500 Hobro</div> </div> </div></div>'
    + 'Tel: <a href="tel:2968 9649">2968 9649</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Mariagerfjord');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.2608828383772 , 10.0736831903367 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://tuba.dk/tuba-afdeling/favrskov">TUBA Favrskov  &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><div class="field field--name-field-street field--type-text field--label-hidden"> <div class="field__items"> <div class="field__item even"> <div class="field field--name-field-street field--type-text field--label-hidden"> <div class="field__items"> <div class="field__item even">Herredsvej&nbsp;22</div> </div> </div> <div class="field field--name-field-zipcode field--type-number-integer field--label-hidden"> <div class="field__items"> <div class="field__item even">8382&nbsp;Hinnerup</div> </div> </div> </div> </div> </div></div>'
    + 'Tel: <a href="tel:2968 9637">2968 9637</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Favrskov ');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.5702843150209 , 9.03013720344692 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.projektbrus.dk/skive">BRUS Skive &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Sundhedsafdelingen - Rusmiddelcentret<br />Resenvej 10 A<br />7800 Skive</p> <p></p> <p></p></div>'
    + 'Tel: <a href="tel:9915 7373">9915 7373</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('BRUS Skive');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.1298887951807 , 8.97382529198286 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.projektbrus.dk/herning">BRUS Herning &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Misbrugscenter Herning<br />Tietgensgade 5C<br />7400 Herning</p> <p></p></div>'
    + 'Tel: <a href="tel:2938 1185">2938 1185</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('BRUS Herning');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.1338667289707 , 9.13232517921102 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.projektbrus.dk/ikast-brande">BRUS Ikast-brande &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Center for rusmiddelbehandling<br />Svaneparken 8<br />7430 Ikast</p></div>'
    + 'Tel: <a href="tel:3093 9013">3093 9013</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('BRUS Ikast-brande');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.7785718552569 , 9.71201932145897 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.projektbrus.dk/hedensted">BRUS Hedensted &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Rusmiddelcentret<br />Hecovej 6<br />8722 Hedensted</p></div>'
    + 'Tel: <a href="tel:2498 7753">2498 7753</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('BRUS Hedensted');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.9708477441895 , 10.1541153892923 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.projektbrus.dk/odder">BRUS Odder &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Stof- og Alkoholbehandlingen i Odder<br />Vitaparkvej 11<br />8300 Odder</p></div>'
    + 'Tel: <a href="tel:5171 0457">5171 0457</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('BRUS Odder');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.8001054011866 , 10.5557058330808 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.projektbrus.dk/samso">BRUS Samsø &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Center for Alkoholbehandling<br />J&aelig;gerg&aring;rdsgade 66<br />8000 Aarhus C</p></div>'
    + 'Tel: <a href="tel:4187 2529">4187 2529</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('BRUS Samsø');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.0353697770174 , 9.9305758668615 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.projektbrus.dk/skanderborg">BRUS Skanderborg &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Skanderborg Rusmiddelcenter<br />Ole Lund Kirkegaards Str&aelig;de 2f<br />8660 Skanderborg</p> <p></p></div>'
    + 'Tel: <a href="tel:2476 5857">2476 5857</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('BRUS Skanderborg');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.3010707958997 , 10.4735094643787 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.projektbrus.dk/syddjurs">BRUS Syddjurs &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Rusmiddelcenter Syddjurs<br />Hovedgaden 61<br />8410 R&oslash;nde</p></div>'
    + 'Tel: <a href="tel:4012 6153">4012 6153</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('BRUS Syddjurs');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.412078797093 , 10.8748279512383 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.projektbrus.dk/norddjurs">BRUS Norddjurs &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Rusmiddelcenteret<br />S&oslash;nderport 10<br />8500 Gren&aring;</p></div>'
    + 'Tel: <a href="tel: 2135 3297"> 2135 3297</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('BRUS Norddjurs');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.1480257725328 , 10.2013300529478 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.projektbrus.dk/aarhus">BRUS Aarhus &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Center for Alkoholbehandling<br />J&aelig;gerg&aring;rdsgade 66<br />8000 Aarhus C</p></div>'
    + 'Tel: <a href="tel:4187 2529">4187 2529</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('BRUS Aarhus');
    })
);
markers.addLayer(
    new L.Marker(
        [ 57.4218322971903 , 10.5071287931359 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.barnetsblaahus.dk/afdelinger/frederikshavn">Barnets Blå Hus Frederikshavn &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Vrangb&aelig;kvej 115<br />9900 Frederikshavn</p></div>'
    + 'Tel: <a href="tel:2124 1492">2124 1492</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Barnets Blå Hus Frederikshavn');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.1060730854101 , 14.7070890139628 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.barnetsblaahus.dk/afdelinger/bornholm">Barnets Blå Hus Bornholm &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Dr. Kabellsvej 24A<br />3700 R&oslash;nne</p></div>'
    + 'Tel: <a href="tel:6124 1473">6124 1473</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Barnets Blå Hus Bornholm');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.80265802259 , 9.51181298137338 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.barnetsblaahus.dk/afdelinger/vesthimmerland">Barnets Blå Hus Vesthimmerland &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Baneg&aring;rdsvej 8<br />9600 Aars</p></div>'
    + 'Tel: <a href="tel:6124 1472">6124 1472</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Barnets Blå Hus Vesthimmerland');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.4573058398725 , 12.1787311370053 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://novavi.dk/ung-revers/boern-og-unge/">Novavi Ung Revers Køge &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Vestergade 18, Opgang A, 1.th.<br />4600 K&oslash;ge</p></div>'
    + 'Tel: <a href="tel:2370 0688">2370 0688</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Novavi Ung Revers Køge');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.4448813683041 , 11.7884674715579 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://novavi.dk/ung-revers/boern-og-unge/">Novavi Ung Revers Ringsted &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Torvet 1, 1. mf.<br />4100 Ringsted</p></div>'
    + 'Tel: <a href="tel:2369 8791">2369 8791</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Novavi Ung Revers Ringsted');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.0303715732073 , 12.6065441249794 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://novavi.dk/ung-revers/boern-og-unge/">Novavi Ung Revers Helsingør &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />S&oslash;ndre Strandvej 10, k&aelig;lderen<br />3000 Helsing&oslash;r</p></div>'
    + 'Tel: <a href="tel:2370 8582">2370 8582</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Novavi Ung Revers Helsingør');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.3983744707895 , 10.3796056163023 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://novavi.dk/ung-revers/boern-og-unge/">Novavi Ung Revers Odense &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Kongensgade 70, 2. sal<br />5000 Odense C</p></div>'
    + 'Tel: <a href="tel:2370 7963">2370 7963</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Novavi Ung Revers Odense');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.0207794543747 , 12.5860212994742 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.headspace.dk/helsingor">Headspace Helsingør &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Egev&aelig;nget 10<br />3000 Helsing&oslash;r</p></div>'
    + 'Tel: <a href="tel:5373 3010">5373 3010</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Headspace Helsingør');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.64068811 , 12.08914644 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://novavi.dk/ung-revers/boern-og-unge/">Novavi Ung Revers Roskilde &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Algade 49, 1.th.<br />4000 Roskilde</p></div>'
    + 'Tel: <a href="tel:2370 0688">2370 0688</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Novavi Ung Revers Roskilde');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.3603508996186 , 8.61805410788468 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://tuba.dk/tuba-afdeling/holstebro">TUBA Holstebro &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>N&oslash;rregade 32, 1.<br />7500 Holstebro</p></div>'
    + 'Tel: <a href="tel:3067 2482">3067 2482</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('TUBA Holstebro');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.0590668221193 , 10.6118524936166 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.barnetsblaahus.dk/afdelinger/svendborg">Barnets Blå Hus Svendborg &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Klosterplads 13, 1<br />5700 Svendborg</p></div>'
    + 'Tel: <a href="tel:2333 4468">2333 4468</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Barnets Blå Hus Svendborg');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.17798429 , 9.55562105 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://rusmiddelcenter-silkeborg.silkeborgkommune.dk/Vores-tilbud/Paaroerende">Rusmiddelcenter Silkeborg &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />F&aelig;rgevej 1<br />8600 Silkeborg</p></div>'
    + 'Tel: <a href="tel:8970 4700">8970 4700</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Rusmiddelcenter Silkeborg');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.166449839557 , 9.54471075260161 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.selvhjaelpsilkeborg.dk/p%C3%A5r%C3%B8rende-til-alkoholiker">Selvhjælp Silkeborg &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Estrupsgade 4, 1. sal<br />8600 Silkeborg</p> <p>(indgang fra skolegade)</p></div>'
    + 'Tel: <a href="tel:8680 5878">8680 5878</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Selvhjælp Silkeborg');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.4651138205787 , 8.44837091386527 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.projektballast.dk/">Ballast Esbjerg &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Kirkegade 4<br />6700 Esbjerg</p></div>'
    + 'Tel: <a href="tel:2144 0365">2144 0365</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Ballast Esbjerg');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.9569717162916 , 8.69314864488839 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.projektballast.dk/">Ballast Thisted &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Allestr&aelig;de 3<br />7700 Thisted</p></div>'
    + 'Tel: <a href="tel:2452 7825">2452 7825</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Ballast Thisted');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.329383673372 , 11.1406101696484 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://novavi.dk/ung-revers/boern-og-unge/">Novavi Ung Revers Korsør &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Jens Baggesens Gade 35, st.<br />4220 Kors&oslash;r</p></div>'
    + 'Tel: <a href="tel:2369 8791">2369 8791</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Novavi Ung Revers Korsør');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.0428686376604 , 9.41676557886595 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.headspace.dk/aabenraa">Headspace Aabenraa &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Sct. Nicolai Gade 5, 1. th.<br />6200 Aabenraa</p></div>'
    + 'Tel: <a href="tel:2597 8800">2597 8800</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Headspace Aabenraa');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.7301799192847 , 12.3616912921007 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.headspace.dk/ballerup">Headspace Ballerup &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Linde Alle 7<br />2750 Ballerup</p></div>'
    + 'Tel: <a href="tel:2597 2009">2597 2009</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Headspace Ballerup');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.1379532065192 , 8.97780610558864 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.headspace.dk/herning">Headspace Herning &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Huset no. 7, N&oslash;rregade 7<br />7400 Herning</p></div>'
    + 'Tel: <a href="tel:5373 3008">5373 3008</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Headspace Herning');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.7592325828332 , 8.93129326657758 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.headspace.dk/billund">Headspace Billund &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />&Oslash;stergade 27b<br />7200 Grindsted</p></div>'
    + 'Tel: <a href="tel:5373 3007">5373 3007</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Headspace Billund');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.4660410215894 , 8.44901784632797 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.headspace.dk/esbjerg">Headspace Esbjerg &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Kirkegade 15<br /> 6700 Esbjerg</p></div>'
    + 'Tel: <a href="tel:3045 2581">3045 2581</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Headspace Esbjerg');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.6563847872327 , 12.3507573579168 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.headspace.dk/albertslund">Headspace Albertslund &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Vognporten 3<br />2620 Albertslund</p></div>'
    + 'Tel: <a href="tel:5373 3003">5373 3003</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Headspace Albertslund');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.6407885203529 , 12.4791306755701 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.headspace.dk/hvidovre">Headspace Hvidovre &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Hvidovrevej 253B, 1. sal<br />2650 Hvidovre</p></div>'
    + 'Tel: <a href="tel:2597 3163">2597 3163</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Headspace Hvidovre');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.5890897972145 , 12.2992076106536 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.headspace.dk/greve">Headspace Greve &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Borgerhus, Greveager 9, 1. sal<br />2670 Greve</p></div>'
    + 'Tel: <a href="tel:2597 7171">2597 7171</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Headspace Greve');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.930291941097 , 12.2972514996655 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.ung3400.dk/">Ung 3400 Hillerød &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />M&oslash;llestr&aelig;de 13b<br />3400 Hiller&oslash;d</p></div>'
    + 'Tel: <a href="tel:7232 5550">7232 5550</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Ung 3400 Hillerød');
    })
);
markers.addLayer(
    new L.Marker(
        [ 56.1552763 , 10.21303375 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.desmaaskuldre.dk">De Små Skuldre Aarhus &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Hack Kampmanns Plads 1<br />8000 Aarhus C</p></div>'
    + 'Tel: <a href="tel:7020 4080">7020 4080</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('De Små Skuldre Aarhus');
    })
);
markers.addLayer(
    new L.Marker(
        [ 57.08842336 , 9.26310185 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.projektballast.dk/">Ballast Fjerritslev &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Kirkecenteret<br />Vestergade 16<br />9690 Fjerritslev</p> <p></p></div>'
    + 'Tel: <a href="tel:2452 7825">2452 7825</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Ballast Fjerritslev');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.6694386 , 12.3849533 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.ditrum.nu">Dit rum Glostrup &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Bakken 1<br />2600 Glostrup</p></div>'
    + 'Tel: <a href="tel:2423 0300">2423 0300</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Dit rum Glostrup');
    })
);
markers.addLayer(
    new L.Marker(
        [ 57.05129724 , 9.9125806 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://www.aalborg.dk/sundhed-og-sygdom/alkohol-og-stoffer/tilbud-til-paaroerende">Misbrugsafsnittet Aalborg Kommune &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Badehusvej 1<br />9000 Aalborg</p></div>'
    + 'Tel: <a href="tel:9931 5740">9931 5740</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Misbrugsafsnittet Aalborg Kommune');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.63507134 , 12.08704948 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://boerne-ogfamiliecenter.roskilde.dk/aabenanonymraadgivning.asp">Roskilde Børne- og Familiecenter &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />Gormsvej 9 B<br />4000&nbsp;Roskilde&nbsp;</p></div>'
    + 'Tel: <a href="tel:4632 3363">4632 3363</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Roskilde Børne- og Familiecenter');
    })
);
markers.addLayer(
    new L.Marker(
        [ 55.64014708 , 12.08335048 ]
    ).bindPopup(
        '<h3>'
    + '<a target="_blank"  href="http://unge-ogfamiliecenter.roskilde.dk/aabenanonymraadgivning.asp">Roskilde Unge- og Familiecenter &#10095;&#10095;</a>'
    + '</h3>'
    + '<div><p>Ingen venteliste<br />L&aelig;derstr&aelig;de 6<br />4000 Roskilde</p></div>'
    + 'Tel: <a href="tel:4632 1132">4632 1132</a>'
    ).setIcon(myIcon).on('click', function(e) {
        trackMarkerHit('Roskilde Unge- og Familiecenter');
    })
);

map.addLayer(markers);

map.attributionControl.setPrefix(''); // Don't show the 'Powered by Leaflet' text.

L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', { // Show a map using OSM mapdata
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> og <a href="http://www.hope.dk">hope.dk</a>'
}).addTo(map);
