// let sub1 = document.querySelector('#sub-menu');
// let menu1 = document.querySelector('.menu');
// menu1.addEventListener('click',function(e){
//     e.preventDefault
// sub1.classList.toggle('visible');
// });
// // const sub2 = document.getElementById('sub#sub-menu2');
// // const menu2 = document.getElementsByClassName('.menu2');
// // menu2.addEventListener('click',function add(e){
// //     e.preventDefault();
// // sub2.classList.add('visible');
// // return false;

// // });

let bt =document.getElementById("btn"); 
bt.addEventListener('click',function (e){
    e.preventDefault();
    this.classList.toggle("click");
    document.querySelector('.side-bar').classList.toggle("show");
    
});
$('.menu').on('click',function(){
    $('#sub-menu').toggleClass('invisible')
    
});
$('.menu2').on('click',function(){
    $('#sub-menu2').toggleClass('invisible')
});


$('.search-bar i').on('click',function(){
    $('#recherche').toggleClass('invisible',3000)
    $('.search-bar').css({
        'box-shadow': '1px 1px 6px cyan',
    })

});
var longeur_ecrant =$(window).width();
$('.fa-shopping-basket').mouseenter(function(e){
    if(longeur_ecrant > 800){
        e.preventDefault;
        $('.basket').removeClass('invisible');
        $('.heart').addClass('invisible');
        return true;
    
    }
    else{
        return false;
    }
    
});

$(window).on('click',function(){
    $('.basket').addClass('invisible')
});


$('.fa-heart').mouseenter(function(e){
    if(longeur_ecrant > 800){
        e.preventDefault;
        $('.heart').removeClass('invisible');
        $('.basket').addClass('invisible');
        return true;
    
    }
    else{
        return false;
    }
    
});

$(window).on('click',function(){
    $('.heart').addClass('invisible')
});



countdownManager = {
    // Configuration
    targetTime: new Date('2020-12-29 14:55:00'), // Date cible du compte à rebours (00:00:00)
    displayElement: { // Elements HTML où sont affichés les informations
        day:  null,
        hour: null,
        min:  null,
        sec:  null
    },
     
    // Initialisation du compte à rebours (à appeler 1 fois au chargement de la page)
    init: function(){
        // Récupération des références vers les éléments pour l'affichage
        // La référence n'est récupérée qu'une seule fois à l'initialisation pour optimiser les performances
        this.displayElement.day  = jQuery('#countdown_day');
        this.displayElement.hour = jQuery('#countdown_hour');
        this.displayElement.min  = jQuery('#countdown_min');
        this.displayElement.sec  = jQuery('#countdown_sec');
         
        // Lancement du compte à rebours
        this.tick(); // Premier tick tout de suite
        window.setInterval("countdownManager.tick();", 1000); // Ticks suivant, répété toutes les secondes (1000 ms)
    },
     
    // Met à jour le compte à rebours (tic d'horloge)
    tick: function(){
        // Instant présent
        var timeNow  = new Date();
         
        // On s'assure que le temps restant ne soit jamais négatif (ce qui est le cas dans le futur de targetTime)
        if( timeNow > this.targetTime ){
            timeNow = this.targetTime;
        }
         
        // Calcul du temps restant
        var diff = this.dateDiff(timeNow, this.targetTime);
         
        this.displayElement.day.text(  diff.day  );
        this.displayElement.hour.text( diff.hour );
        this.displayElement.min.text(  diff.min  );
        this.displayElement.sec.text(  diff.sec  );
    },
     
    // Calcul la différence entre 2 dates, en jour/heure/minute/seconde
    dateDiff: function(date1, date2){
        var diff = {}                           // Initialisation du retour
        var tmp = date2 - date1;
 
        tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
        diff.sec = tmp % 60;                    // Extraction du nombre de secondes
        tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
        diff.min = tmp % 60;                    // Extraction du nombre de minutes
        tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
        diff.hour = tmp % 24;                   // Extraction du nombre d'heures
        tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
        diff.day = tmp;
 
        return diff;
    }
};
 
jQuery(function($){
    // Lancement du compte à rebours au chargement de la page
    countdownManager.init();
});