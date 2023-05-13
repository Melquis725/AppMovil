import {db} from '../firebase';

import {collection, query, getDocs} from 'firebase/firestore';

const artistas = query(collection(db, "artistas"));

const querySnapshot = await getDocs(artistas);

let artistas_contenedor = document.getElementById('artistas');
let name = document.getElementById('name');


querySnapshot.forEach((doc) => {

    let artistas = doc.data()
    artistas_contenedor.innerHTML += `<li>${artistas.nombres} - ${artistas.nacionalidad}-
    <img src="${artistas.imagen}" class="w-48 h-48 rounded-full">
    </li>`;
    
    name.innerHTML += `${artistas.nombres}`;
    // console.log(doc.id, "=>" ,doc.data())
});