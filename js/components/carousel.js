function inicializarCarousel(){
    let carouselWidth = $("#carousel-novidades .carousel-inner")[0].scrollWidth
    let cardWidth = $("#carousel-novidades .carousel-item").width()
    let scrollPosicao = 0
    $("#carousel-novidades .carousel-control-next").on("click", function () {
        if (scrollPosicao < (carouselWidth - cardWidth * 4)) {
            scrollPosicao += cardWidth
            $("#carousel-novidades .carousel-inner").animate({ scrollLeft: scrollPosicao }, 600)
        }
    });
    $("#carousel-novidades .carousel-control-prev").on("click", function () {
        if (scrollPosicao > 0) {
            scrollPosicao -= cardWidth
            $("#carousel-novidades .carousel-inner").animate({ scrollLeft: scrollPosicao }, 600)
        }
    });
}