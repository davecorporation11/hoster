function sendMail(params) {
    var tempParams ={
        from_name:document.getElementById('name').value,
        message:document.getElementById('pozadavky').value,
        email:document.getElementById('e-mail').value,
    };
    emailjs.send('service_74zks7g','template_dapxlql',tempParams)
    .then(function(res){
        window.open("https://davecorporation11.github.io/hoster/finish.mp3")
        document.write("Váš požadavek zpracováváme.Pošleme vám e-mail s odkazem na vaši e-mailovou adresu.Naše e-mailová adresa je davecorporation@outlook.cz kde můžete poslat i zpětnou vazbu.!")
        security();
    })
}
