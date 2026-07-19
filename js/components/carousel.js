function inicializarCarousel(){
    let carouselWidth = 0
    let cardWidth = 0
    let index = 0

    function recalcular(){
        carouselWidth = $("#carousel-novidades .carousel-inner")[0].scrollWidth
        cardWidth = $("#carousel-novidades .carousel-item").outerWidth(true)
    }
    recalcular()
    $(window).on("resize", recalcular)
    $("#carousel-novidades .carousel-control-next").on("click", function () {
        const maxIndex = Math.ceil((carouselWidth / cardWidth) - 4)
        if (index < maxIndex) {
            index++
            $("#carousel-novidades .carousel-inner").animate({ scrollLeft: index * cardWidth }, 600)
        }
    });
    $("#carousel-novidades .carousel-control-prev").on("click", function () {
        if (index > 0) {
            index--
            $("#carousel-novidades .carousel-inner").animate({ scrollLeft: index * cardWidth }, 600)
        }
    });
}