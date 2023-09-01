function insertData(i) {
  document.form.view.value = document.form.view.value + i;
}
function clearData() {
  const i = document.form.view.value;
  if (i == '') {
    alert('bacod lu belum ada');
  } else {
    document.form.view.value = '';
  }
}

function aqual() {
  const i = document.form.view.value;
  if (i == '') {
    alert('ayok ngebacod');
  } else {
    document.form.view.value = eval(i);
  }
}
function deleteData() {
  const i = document.form.view.value;
  if (i == '') {
    alert('apa bacotan mu hari ini');
  } else {
    document.form.view.value = i.substring(0, i.length - 1);
  }
}
