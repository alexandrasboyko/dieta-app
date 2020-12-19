function createField(id, placeholder = "") {
    const divItem = document. createElement('div')
    divItem.style = 'width: 240px; height: 60px'
  const fieldInput = document.createElement("input");
  fieldInput.style = "width:100%;"

  fieldInput.id = id;
  fieldInput.placeholder = placeholder;

  divItem.appendChild(fieldInput)
  document.body.appendChild(divItem)
}

createField('food', "Введите название блюда");
createField('food_protein', "ВВедите количество белка");
createField('food_energy', "Введите количество калорий");
