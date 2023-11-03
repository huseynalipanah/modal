const btn = document.createElement("button");
btn.textContent = "Şeiri Oxu";
document.body.append(btn);
btn.classList.add("btn");

btn.addEventListener("click", function mdl() {
  const modal = document.createElement("div");
  document.body.append(modal);
  modal.classList.add("modal");

  const mcard = document.createElement("div");
  modal.append(mcard);
  mcard.classList.add("mcard");
  

  const mtext = document.createElement("div");
  mcard.append(mtext);
  mtext.textContent = "Qismət Bu İmiş...";
  mtext.classList.add("mtext");

  const mseir = document.createElement("div");
  mcard.append(mseir);
  mseir.textContent =
    "Qismət bu imiş məndən uzaaqlardasan indi , Yoxdur xəbərim bilmirəm heç hardasan indi.";
  mseir.classList.add("mseir");

  const clsbtn = document.createElement("div");
  mcard.append(clsbtn);
  const clbutton = document.createElement("button");
  clbutton.textContent = "Bağla";
  clsbtn.append(clbutton);
  clsbtn.classList.add("clsbtn");
  clbutton.classList.add("clbutton");
  clbutton.addEventListener("click", function close() {
    modal.remove();
  });
  modal.style.display = "flex";
});
