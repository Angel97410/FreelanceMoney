function CalculGain() {
  let myForm = document.getElementById("formCalculGain")
  let th = Number(document.getElementById('TauxHoraire').value)
  let tjm = Number(document.getElementById("TauxJournalier").value)
  let extras = Number(document.getElementById("TauxExtras").value)
  let QteTH = Number(document.getElementById("QteTH").value)
  let QteTJM = Number(document.getElementById("QteTJM").value)
  let QteExtras = Number(document.getElementById("QteExtras").value)
  let Charges = Number(document.getElementById("Charges").value)

  let brut = (th * QteTH) + (tjm * QteTJM) + (extras * QteExtras)
  let net = brut - (Charges / 100)
  document.getElementById("resultB").innerHTML = "Le tarif BRUT : " + brut + "€";
  document.getElementById("resultN").innerHTML = "Le tarif NET : " + net + "€";
  return brut, net;
}
document.getElementById("TauxHoraire").onkeyup = function() {disableInput()}
document.getElementById("TauxJournalier").onkeyup = function() {disableInput()}
document.getElementById("QteTH").onkeyup = function() {disableInput()}
document.getElementById("QteTJM").onkeyup = function() {disableInput()}

function disableInput() {
  // réferencement button
 let th = Number(document.getElementById('TauxHoraire').value)
  let tjm = Number(document.getElementById("TauxJournalier").value)
  let QteTH = Number(document.getElementById("QteTH").value)
  let QteTJM = Number(document.getElementById("QteTJM").value)
  console.log(th)
  if (th || QteTH != 0){
    document.getElementById("TauxJournalier").disabled = true;
    document.getElementById("QteTJM").disabled = true;
  }
  if (tjm || QteTJM != 0){
    document.getElementById("TauxHoraire").disabled = true;
    document.getElementById("QteTH").disabled = true;
  }
}