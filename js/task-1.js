const listCategories = document.querySelector('ul#categories');
const listChild = listCategories.children;
console.log('Number of categories: ' + listChild.length);

[...listChild].forEach(element => {
  const title = element.firstElementChild.textContent;
  console.log('Categorie: ' + title);

  const listElements = element.lastElementChild.children;
  console.log('Elements : ' + listElements.length);
});
