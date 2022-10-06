import * as express from 'express';

const app = express();
const port = 3000;

app.get ('/', (request,response) => {
    response.send('Hello World');
});

app.get ('/bsm', (request,response) => {
    response.send('HABILIDADES  <br>1= Trabalho em equipe.' +
 '<br>2= Atenção aos detalhes. <br>3= Proatividade <br>4= Comunicação <br><br> MENTALIDADES' +
 '<br>1= Persistência. <br>2= Responsabilidade Pessoal. <br>3= Orienta aos Futuro. <br>4= Mentalidade de Crescimento.');
});

app.get ('/Semana', (request,response) => {
    response.send('Metas de aprendizagem da semana.'+
'<br>1= aprimimoramanto das BSMs. <br>2= aprimorar o conhecimento em banco de dados.' +
'<br>3= revisar materias do bloco anterior para tirar alguma duvida. <br>4= aprender novas materias que possa surgir.');
});

app.listen( port,() => {
console.log(`Você está na porta ${port}!`);
});