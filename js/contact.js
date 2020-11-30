$(window).ready(()=>{
    $('.inscription').hide()
})
var $up=$('.contact').not('.logo-contact');
$('.btn-inscription').on('click',()=>{
    $('.inscription').show()
    $up.slideUp(1000)
});
$('.btn-inscription-2').click(()=>{
    alert('bienvenu un mail de confirmation vien de vous ètre envoyer'),
    $('.inscription').hide(1000)
    $up.slideDown(1000)
});