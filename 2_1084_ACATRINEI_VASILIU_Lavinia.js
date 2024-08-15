function aplicatie() {
    var listaVideoclipuri = ["video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4"];
    
    var video = document.querySelector("#videoPrincipal");
    var canvas = document.querySelector("#canvasVideo");
    var context = canvas.getContext("2d");

    var i = 0;
    setInterval(function () {

            var W = canvas.width = video.clientWidth * 2;
            var H = canvas.height = video.clientHeight * 2;

        context.drawImage(video, 0, 0, W, H);
        context.putImageData(imageData, 0, 0);
 
    }, 30);


    //trecere automata la filmul urmator
    video.addEventListener("ended", function () {
        i += 1;
        if (i >= listaVideoclipuri.length) {
            i = 0;
        }
        video.src = 'media/' + listaVideoclipuri[i];
        video.load();
        video.play();
    })

    //posibilitate navigare prin playlist
    document.querySelector('#video1').addEventListener("click", function () {
        video.src = document.querySelector('#video1').src;
        video.play();
    })

    document.querySelector('#video2').addEventListener("click", function () {
        video.src = document.querySelector('#video2').src;
        video.play();
    })

    document.querySelector('#video3').addEventListener("click", function () {
        video.src = document.querySelector('#video3').src;
        video.play();
    })

    document.querySelector('#video4').addEventListener("click", function () {
        video.src = document.querySelector('#video4').src;
        video.play();
    })

    //adaugare de noi filme prin intermediul unui control de tip input
    let j = 5;
    document.querySelector('#btnAdaugaVideo').addEventListener("click", function () {
        var fisierIncarcat = document.querySelector('#btnAlegeVideo');
        var fisier = fisierIncarcat.files[0];
        if (fisier) {
            var url = URL.createObjectURL(fisier);
            var clipNou = document.createElement('video');
            clipNou.src = url;
            clipNou.classList.add('videoclipuriAdaugate');
            clipNou.addEventListener("click", function () {
                video.src = clipNou.src;
                video.play();
            });
            clipNou.addEventListener("dblclick", function () {
                divNou.remove();
                for (j = 0; j < listaVideoclipuri.length; j++) {
                    if (clipNou.src === listaVideoclipuri[i]) {
                        sterge(j);
                        break;
                    }
                }
            });

            var idDivNou = `id_nou${j}`;
            var divNou = document.createElement('div');
            divNou.id = idDivNou;
            document.querySelector('#playlist').append(divNou);
            divNou.append(clipNou);
            j++;
        }
    })

    //stergere filme din playlist la click
    function sterge(i) {
        listaVideoclipuri.splice(i, 1);
    }

    document.querySelector('#video1').addEventListener("dblclick", function () {
        for (j = 0; j < listaVideoclipuri.length; j++) {
            if (document.querySelector('#video1').getAttribute('src') === listaVideoclipuri[j]) {
                sterge(j);
                break;
            }
        }
        document.querySelector('#play1').remove();
    });
    document.querySelector('#video2').addEventListener("dblclick", function () {
        for (j = 0; j < listaVideoclipuri.length; j++) {
            if (document.querySelector('#video2').getAttribute('src') === listaVideoclipuri[j]) {
                sterge(j);
                break;
            }
        }
        document.querySelector('#play2').remove();
    });
    document.querySelector('#video3').addEventListener("dblclick", function () {
        for (j = 0; j < listaVideoclipuri.length; j++) {
            if (document.querySelector('#video3').getAttribute('src') === listaVideoclipuri[j]) {
                break;
            }
        }
        document.querySelector('#play3').remove();
    });
    document.querySelector('#video4').addEventListener("dblclick", function () {
        for (j = 0; j < listaVideoclipuri.length; j++) {
            if (document.querySelector('#video4').getAttribute('src') === listaVideoclipuri[j]) {
                sterge(j);
                break;
            }
        }
        document.querySelector('#play4').remove();
    });

}

document.addEventListener("DOMContentLoaded", function () {
    aplicatie();
});
