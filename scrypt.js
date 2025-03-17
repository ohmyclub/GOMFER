$(document).ready(function(){
    let index = 0;
    const images = $('.slider img');
    const totalImages = images.length;

    function showSlide() {
        images.hide();
        $(images[index]).show();
        index = (index + 1) % totalImages;
    }

    setInterval(showSlide, 3000); // Cambia la imagen cada 3 segundos
    showSlide(); // Muestra la primera imagen
});
