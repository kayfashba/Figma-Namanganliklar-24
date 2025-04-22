// JS для открытия и закрытия
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

openBtn.onclick = () => {
  modal.classList.add("show");
};

closeBtn.onclick = () => {
  modal.classList.remove("show");
};

// Закрытие по клику вне модального окна
modal.onclick = (e) => {
  if (e.target === modal) modal.classList.remove("show");
};







