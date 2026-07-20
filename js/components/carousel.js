function inicializarCarousel(){
    let carouselWidth = 0
    let cardWidth = 0
    let index = 0
    let colecaoItens =  $("#carousel-novidades .carousel-item")
    let cloneInicio = $("#carousel-novidades .carousel-item").slice(0, 5)
    let cloneFim = $("#carousel-novidades .carousel-item").slice(-5)
    let itensReais = colecaoItens.length
    let indexReal = 5
    let indexFim = indexReal + itensReais - 1

    cloneInicio.clone().appendTo("#carousel-novidades .carousel-inner")
    cloneFim.clone().prependTo("#carousel-novidades .carousel-inner")

    function recalcular(){
        carouselWidth = $("#carousel-novidades .carousel-inner")[0].scrollWidth
        cardWidth = $("#carousel-novidades .carousel-item").outerWidth(true)
    }
    recalcular()
    $(window).on("resize", recalcular)

    $("#carousel-novidades .carousel-inner").scrollLeft(indexReal * cardWidth)
    index = indexReal

    function avancar(){
        index++
        $("#carousel-novidades .carousel-inner").animate({ scrollLeft: index * cardWidth }, 600, function(){
            if (index > indexFim) {
                $("#carousel-novidades .carousel-inner").scrollLeft(indexReal * cardWidth)
                index = indexReal
            }
        })
    }
    function voltar(){
        if (index > 0) {
            index--
            $("#carousel-novidades .carousel-inner").animate({ scrollLeft: index * cardWidth }, 600, function(){
                if(index < indexReal){
                    $("#carousel-novidades .carousel-inner").scrollLeft(indexFim * cardWidth)
                    index = indexFim
                }
            })
        }
    }

    let intervalo = setInterval(avancar, 6000)
    $("#carousel-novidades .carousel-control-next").on("click", avancar)
    $("#carousel-novidades .carousel-control-prev").on("click", voltar)
    $("#carousel-novidades").on("mouseenter", function(){
        clearInterval(intervalo)
    })
    $("#carousel-novidades").on("mouseleave", function(){
        intervalo = setInterval(avancar, 6000)
    })
}