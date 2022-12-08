

let book = {
  titulo: '',
  portada: '',
  autor: '',
  id: ''
};
let books = [
  {
    id: Math.random(),
    titulo: 'La sombra del viento',
    portada: 'https://kbimages1-a.akamaihd.net/c339246f-1ab3-4916-8fdf-16e2e3a6b3ee/353/569/90/False/la-sombra-del-viento-2.jpg',
    autor: 'Carlos Ruiz Safón'
  },
  {
    id: Math.random(),
    titulo: 'Ensayo sobre la ceguera',
    portada: 'https://www.revistalatinacs.org/071/rese/77PortSaramago.jpg',
    autor: 'Jose Saramago'
  },
  {
    id: Math.random(),
    titulo: 'Oliver Twist',
    portada: 'https://www.juanherranz.com/wp-content/uploads/2019/11/Oliver-Twist.jpg',
    autor: 'Charles Dickens'
  },
  {
    id: Math.random(),
    titulo: 'Mercaderes del espacio',
    portada: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4UjRdnHpUFFl_bB9gX9ON6Lad_aw3Z9It3A&usqp=CAU',
    autor: 'frederik phol'
  },
  {
    id: Math.random(),
    titulo: 'El Evangelio segun Jesucristo',
    portada: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_lr49f39Eru2Lg-qQDzfibMjSlehgl5s8ahUylxnPQDoHoegQB9l_sfwOVqhGl8xr_9Y&usqp=CAU',
    autor: 'Jose Saramago'
  },
  {
    id: Math.random(),
    titulo: 'El Hombre Duplicado',
    portada: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-8r5rP9Eawx-YLfgYaO1-KiDE-we4ZX09Q&usqp=CAU',
    autor: 'Jose Saramago'
  },
  {
    id: Math.random(),
    titulo: 'El juego del angel',
    portada: 'https://images.cdn1.buscalibre.com/fit-in/360x360/a1/c7/a1c73d662f3dae27d7e3ae0f50642d57.jpg',
    autor: 'Carlos Ruiz Safón'
  },
  {
    id: Math.random(),
    titulo: 'El prisionero del cielo',
    portada: 'https://m.media-amazon.com/images/I/91sis2MDQbL.jpg',
    autor: 'Carlos Ruiz Safón'
  },
  {
    id: Math.random(),
    titulo: 'El Laberinto de los Espíritus',
    portada: 'https://images-na.ssl-images-amazon.com/images/I/91T05xND0ZL._AC_UL600_SR600,600_.jpg',
    autor: 'Carlos Ruiz Safón'
  },
  {
    id: Math.random(),
    titulo: 'Todos los nombres',
    portada: 'https://www.euroresidentes.com/libros/novelas/images/todos_los_nombres.jpg',
    autor: 'Jose Saramago'
  },
  {
    id: Math.random(),
    titulo: 'La caverna',
    portada: 'https://imagessl0.casadellibro.com/a/l/t5/40/9788466369640.jpg',
    autor: 'Jose Saramago'
  },

  {
    id: Math.random(),
    titulo: 'El Padrino',
    portada: 'https://m.media-amazon.com/images/I/415tHoDHibL.jpg',
    autor: 'Mario Puzzo'
  }
];

const crearHtml = (item) => {
  const { id, titulo, portada, autor } = item;
  let html = `<div class="card card-group mb-3" style="width: 18rem;">
<img src="${portada}" class="card-img-top" alt="...">
<hr>
<div class="card-body text-end">
  <h5 class="card-title">${titulo} </h5>
  <p class="card-text">${autor}</p>
  <div class="card-text-bottom">
  <a onclick="handlerShowUpdateModal(${id})" class="btn btn-primary update"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-arrow-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"/>
  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
</svg></a>
  <a onclick="handlerShowDeleteModal(${id})" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg></a>
  </div>
</div>
</div>
`

  return html
}

const insertBooks = (galery) => {
  let div = document.getElementById('libreria');
  div.innerHTML = ''
  let stock = '';
  galery.forEach(libro => {
    stock += crearHtml(libro);
  })
  div.innerHTML = stock;
  foundAuthors();
}

let objLibro = '';
let btnGet;



const handlerClickBtnget = () => {

  let newbook = { ...objLibro }
  newbook.portada = document.getElementById("url").value;
  newbook.titulo = document.getElementById("title").value;
  newbook.autor = document.getElementById("autor").value;

  books.push(newbook);
  insertBooks(books);
  document.getElementById("url").value = '';
  document.getElementById("title").value = '';
  document.getElementById("autor").value = '';

}


const updateModal = new bootstrap.Modal(document.getElementById('updateBook'), {})


let idBookToUpdate = 0;

const handlerShowUpdateModal = (id) => {
  idBookToUpdate = id;
  updateModal.toggle();
  const bookFound = books.find(book => book.id === idBookToUpdate);
  document.getElementById("urlUpdate").value = bookFound.portada;
  document.getElementById("titleUpdate").value = bookFound.titulo;
  document.getElementById("autorUpdate").value = bookFound.autor;
}

const handlerClickUpdateItem = () => {
  books = books.filter(book => book.id !== idBookToUpdate);
  let newbook = { ...objLibro, id: idBookToUpdate }
  newbook.portada = document.getElementById("urlUpdate").value;
  newbook.titulo = document.getElementById("titleUpdate").value;
  newbook.autor = document.getElementById("autorUpdate").value;
  books.push(newbook);
  insertBooks(books);
}

let idBooKToDelete = 0;

const deleteModal = new bootstrap.Modal(document.getElementById('deleteBook'), {})

const handlerShowDeleteModal = (id) => {
  idBooKToDelete = id;
  book = books.find(book => book.id === id);
  document.getElementById("book").innerHTML = book.titulo;
  deleteModal.toggle()
}

const handlerClickDeleteItem = () => {
  books = books.filter(book => book.id !== idBooKToDelete);
  deleteModal.toggle()
  insertBooks(books);
}

const addBook = () => {
  const addBookModal = new bootstrap.Modal(document.getElementById('addModal'), {})
  addBookModal.toggle();
  if (document.getElementById("url").value === '' ||
    document.getElementById("title").value === '' ||
    document.getElementById("autor").value === ''
  ) {
    const btnGet = document.getElementById("btnGet");
    btnGet.disabled = true;
  }

}


const checkIfCanSaveBook = () => {
  const btnGet = document.getElementById("btnGet");
  btnGet.disabled = document.getElementById("url").value === '' ||
    document.getElementById("title").value === '' ||
    document.getElementById("autor").value === ''
}


const searchBook = (event) => {
  if (event === '') {
    insertBooks(books);
  }
  let filteredBook = books.filter(book => book.titulo.toLowerCase().includes(event) || book.autor.toLowerCase().includes(event));
  insertBooks(filteredBook);

}


const foundAuthors = () => {
  const authorFounded = books.reduce((acc, book) => {
    acc[book.autor] = ++acc[book.autor] || 1;
    return acc;
  }, {});
  console.log(authorFounded);
  let authorName = Object.keys(authorFounded);
  let numberBook = Object.values(authorFounded);
  console.log(numberBook);
  console.log(authorName);
  let div = document.getElementById('authors');
  div.innerHTML = '';
  let stock = '';
  for (let i = 0; i < authorName.length; i++) {
    stock += listAuthor(authorName[i], numberBook[i])
  }
  div.innerHTML = stock;

}


const listAuthor = (key, value) => {

  let authorsList = `<li onclick="getAuthorCollection('${key}')"><a id="${key}" class="dropdown-item d-flex justify-content-between">
  ${key}
    <span class="badge bg-primary rounded-pill">${value}</span>
  </a></li>`

  return authorsList;
}

const getAuthorCollection = (name) => {
  let filteredBook = books.filter(book => book.autor === name);
  insertBooks(filteredBook);

  let listToActive = document.getElementById(name);
  listToActive.classList.add("active");
}

const btnClear = () => {
  insertBooks(books);
}

insertBooks(books);




