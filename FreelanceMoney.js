function CalculGain(){
  let myForm = document.getElementById("formCalculGain")
  let th = Number(document.getElementById('TauxHoraire').value)
  let tjm = Number(document.getElementById("TauxJournalier").value)
  let extras = Number(document.getElementById("TauxExtras").value)
  let QteTH = Number(document.getElementById("QteTH").value)
  let QteTJM = Number(document.getElementById("QteTJM").value)
  let QteExtras = Number(document.getElementById("QteExtras").value)
  let Charges = Number(document.getElementById("Charges").value)

  let brut = (th * QteTH) + (tjm * QteTJM) + (extras * QteExtras)
  let net = brut - (Charges/100)
  document.getElementById("resultB").innerHTML = "Le tarif BRUT : " + brut + "€";
  document.getElementById("resultN").innerHTML = "Le tarif NET : " + net + "€";
  return brut, net;
}