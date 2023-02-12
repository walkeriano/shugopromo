import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc} from 'firebase/firestore'; 


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlSVdgPJg3C8pGYOLuWSVILrh9tpxvxws",
  authDomain: "shugo-app.firebaseapp.com",
  projectId: "shugo-app",
  storageBucket: "shugo-app.appspot.com",
  messagingSenderId: "926218855034",
  appId: "1:926218855034:web:bc12b3f94178069f0291c3",
};





// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const isushicreadorTask = ( rellenoLangostinoPanko, rellenoBisteckApanado, rellenoPescadoCrispy, toppingPalta, toppingQuesoCrema, toppingTartaredePollo, cubiertaQuesoDoncs, cubiertaCebichitoChalaco, cubiertaLikeFuray, cubiertaSaltaditoCriollo, cubiertaApaltado, salsAcebichada, salsaDulce, salsaSalada, inkacola, cocaCola, alertaAlergia, nombre, numero, direccion, formaPago, pedidoDetalle ) => 
  addDoc(collection(db, "isushicreadortasks"),{ rellenoLangostinoPanko, rellenoBisteckApanado, rellenoPescadoCrispy, toppingPalta, toppingQuesoCrema, toppingTartaredePollo, cubiertaQuesoDoncs, cubiertaCebichitoChalaco, cubiertaLikeFuray, cubiertaSaltaditoCriollo, cubiertaApaltado, salsAcebichada, salsaDulce, salsaSalada, inkacola, cocaCola, alertaAlergia, nombre, numero, direccion, formaPago, pedidoDetalle });

export const isushipromoTask = ( aClientRellenoLangostinoPanko, aClientRellenoBisteckApanado, aClientRellenoPescadoCrispy, aClientToppingPalta, aClientToppingQuesoCrema, aClientToppingTartaredePollo, aClientCubiertaQuesoDoncs, aClientCubiertaCebichitoChalaco, aClientCubiertaLikeFuray, aClientCubiertaSaltaditoCriollo, aClientCubiertaApaltado, aClientSalsAcebichada, aClientSalsaDulce, aClientSalsaSalada, aClientInkacola, aClientCocaCola, aClientAlertaAlergia, bClientRellenoLangostinoPanko, bClientRellenoBisteckApanado, bClientRellenoPescadoCrispy, bClientToppingPalta, bClientToppingQuesoCrema, bClientToppingTartaredePollo, bClientCubiertaQuesoDoncs, bClientCubiertaCebichitoChalaco, bClientCubiertaLikeFuray, bClientCubiertaSaltaditoCriollo, bClientCubiertaApaltado, bClientSalsAcebichada, bClientSalsaDulce, bClientSalsaSalada, bClientInkacola, bClientCocaCola, bClientAlertaAlergia, nombre, numero, direccion, formaPago, pedidoDetalle ) => 
  addDoc(collection(db, "isushipromotasks"),{ aClientRellenoLangostinoPanko, aClientRellenoBisteckApanado, aClientRellenoPescadoCrispy, aClientToppingPalta, aClientToppingQuesoCrema, aClientToppingTartaredePollo, aClientCubiertaQuesoDoncs, aClientCubiertaCebichitoChalaco, aClientCubiertaLikeFuray, aClientCubiertaSaltaditoCriollo, aClientCubiertaApaltado, aClientSalsAcebichada, aClientSalsaDulce, aClientSalsaSalada, aClientInkacola, aClientCocaCola, aClientAlertaAlergia, bClientRellenoLangostinoPanko, bClientRellenoBisteckApanado, bClientRellenoPescadoCrispy, bClientToppingPalta, bClientToppingQuesoCrema, bClientToppingTartaredePollo, bClientCubiertaQuesoDoncs, bClientCubiertaCebichitoChalaco, bClientCubiertaLikeFuray, bClientCubiertaSaltaditoCriollo, bClientCubiertaApaltado, bClientSalsAcebichada, bClientSalsaDulce, bClientSalsaSalada, bClientInkacola, bClientCocaCola, bClientAlertaAlergia,  nombre, numero, direccion, formaPago, pedidoDetalle });

export const isushicartaTask = (masBebidaIncaKola, masBebidaCocaCola, acebichado, likeFuray, queTalPalta, lomitoSaltado, seijilinho,cliente, numero, direccion, formaPago, pedidoDetalle) => 
  addDoc(collection(db, "isushicartatasks"),{ masBebidaIncaKola,masBebidaCocaCola, acebichado, likeFuray, queTalPalta, lomitoSaltado, seijilinho, cliente, numero, direccion, formaPago, pedidoDetalle});

export const edocartaTask = (masBebidaIncaKola, masBebidaCocaCola, acebichado, likeFuray, queTalPalta, lomitoSaltado, seijilinho,cliente, numero, direccion, formaPago, pedidoDetalle) => 
addDoc(collection(db, "edocartatasks"),{ masBebidaIncaKola,masBebidaCocaCola, acebichado, likeFuray, queTalPalta, lomitoSaltado, seijilinho, cliente, numero, direccion, formaPago, pedidoDetalle});

export const edocreadorTask = (masBebidaIncaKola, masBebidaCocaCola, acebichado, likeFuray, queTalPalta, lomitoSaltado, seijilinho,cliente, numero, direccion, formaPago, pedidoDetalle) => 
addDoc(collection(db, "edocreadortasks"),{ masBebidaIncaKola,masBebidaCocaCola, acebichado, likeFuray, queTalPalta, lomitoSaltado, seijilinho, cliente, numero, direccion, formaPago, pedidoDetalle});
