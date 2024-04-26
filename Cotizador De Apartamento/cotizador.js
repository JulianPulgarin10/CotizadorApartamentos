function valorInmueble(valorMetro, area) {
  return valorMetro * area;
}

function subsidio(valorInmueble) {
  return valorInmueble * 0.15;
}

function valorParqueadero(valorMetro, areaParqueadero) {
  return valorMetro * areaParqueadero * 1.2;
}

function habitacionAdicional(tipo) {
  if (tipo === "1") {
    return 20000000;
  } else if (tipo === "2") {
    return 35000000;
  } else {
    return 0;
  }
}

function gastosMatricula(valorInmueble) {
  return valorInmueble * 0.15;
}

function cotizar() {
  const valorMetro = parseFloat(document.getElementById("valorMetro").value);
  const area = parseFloat(document.getElementById("area").value);
  const areaParqueadero = area * 0.1; 
  const tipoHabitacion = document.getElementById("tipoHabitacion").value;

  const valorInmuebleResult = valorInmueble(valorMetro, area);
  const subsidioResult = subsidio(valorInmuebleResult);
  const valorParqueaderoResult = valorParqueadero(valorMetro, areaParqueadero);
  const habitacionAdicionalResult = habitacionAdicional(tipoHabitacion);
  const gastosMatriculaResult = gastosMatricula(valorInmuebleResult);
  const valorApartamentoResult = valorInmuebleResult - subsidioResult + valorParqueaderoResult + habitacionAdicionalResult + gastosMatriculaResult;

  document.getElementById("valorInmueble").innerText = `Valor del Inmueble: $${valorInmuebleResult.toLocaleString()}`;
  document.getElementById("subsidio").innerText = `Subsidio: $${subsidioResult.toLocaleString()}`;
  document.getElementById("valorParqueadero").innerText = `Valor del Parqueadero: $${valorParqueaderoResult.toLocaleString()}`;
  document.getElementById("habitacionAdicional").innerText = `Valor Habitación Adicional: $${habitacionAdicionalResult.toLocaleString()}`;
  document.getElementById("gastosMatricula").innerText = `Gastos de Matrícula: $${gastosMatriculaResult.toLocaleString()}`;
  document.getElementById("valorApartamento").innerText = `Valor del Apartamento: $${valorApartamentoResult.toLocaleString()}`;

  document.getElementById("resultado").style.display = "block";
}

document.getElementById("cotizarButton").addEventListener("click", cotizar);



