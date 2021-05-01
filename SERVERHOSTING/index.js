function sendMail(params) {
    var tempParams ={
        from_name:document.getElementById('name').value,
        message:document.getElementById('pozadavky').value,
    };
    emailjs.send('service_74zks7g','template_dapxlql',tempParams)
    .then(function(res){
        alert("Váš požadavek zpracováváme.Pošleme vám e-mail s odkazem na vaši e-mailovou adresu.Naše e-mailová adresa je davecorporation@outlook.cz kde můžete poslat i zpětnou vazbu.!")
    })
}