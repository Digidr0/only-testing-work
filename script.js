// Выбираем все элементы с классом "adaptive-btn" и сохраняем их в коллекцию
const buttons = document.querySelectorAll(".adaptive-btn");

// Функция, обрабатывающая клик по кнопке
function handleclick(e) {
  // Переключаем содержимое кнопки и добавляем/удаляем класс "clicked"
  e.target.innerHTML = e.target.classList.contains("clicked")
    ? (e.target.innerHTML = `<img src="./src/plus-icon.svg" />`)
    : (e.target.innerHTML = `<img src="./src/minus-icon.svg" /><span>${
        e.target.dataset?.name || "объект"
      }</span>`);

  e.target.classList.toggle("clicked");
}

// Для каждой кнопки в коллекции выполняем следующие действия
buttons.forEach((btn) => {
  // Устанавливаем позиционирование кнопки с использованием процентных значений
  btn.style.setProperty("left", `${btn.dataset.x}%`);
  btn.style.setProperty("top", `${btn.dataset.y}%`);

  // Добавляем обработчик события "click" для каждой кнопки
  btn.addEventListener("click", (e) => handleclick(e));

  // Устанавливаем начальное содержимое кнопки (иконка плюса)
  btn.innerHTML = `<img src="./src/plus-icon.svg" />`;
});