export const TextFile = (nama_file) => {
  const element = document.createElement("a");
  const file = new Blob([document.getElementById("nota_ganerate").value], {
    type: "text/plain;charset=utf-8",
  });
  element.href = URL.createObjectURL(file);
  element.download = nama_file + ".txt";
  document.body.appendChild(element);
  element.click();
};
