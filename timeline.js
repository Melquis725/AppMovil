import { db } from './firebase';

        import { collection, query, getDocs } from 'firebase/firestore';

        const timeline = query(collection(db, "timeline"));

        const querySnapshot = await getDocs(timeline);

        let fecha = document.getElementById('fechaUno');
        let nombre = document.getElementById('nombre');
        let  desc = document.getElementById('desc');
        let  sede = document.getElementById('sede');
        let  img = document.getElementById('img');


        querySnapshot.forEach((doc) => {

            let timeline = doc.data();
            fecha.innerHTML += `${timeline.fecha}`;
            nombre.innerHTML += `${timeline.nombre}`;
            desc.innerHTML += `${timeline.descripcion}`;
            sede.innerHTML += `${timeline.sede_id}`;
            img.innerHTML += `<img src="${timeline.imagen}" alt="">`;


           // console.log((timeline.imagen));
        });