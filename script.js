var now=new Date();
var sek=now.getSeconds();
var min=now.getMinutes();
var chas=now.getHours();
if (chas>=12)
	{chas=chas-12;}
var sSek=document.getElementById('sek');
var sMin=document.getElementById('minuta');
var sChas=document.getElementById('chas');
var shestGr=6*Math.PI/180;
var start_sSek=sek*shestGr;
var start_sMin=min*shestGr;
var nCu=30*Math.PI/180;
//console.log(nCu);
var start_sChas=chas*nCu;
/*console.log('UgolChas 1 ='+nCu);
console.log('S kakogo ugla poydet chasovaya? = '+start_sChas);
console.log('SEK = '+sek);
console.log('MIN = '+min);
console.log('CHAS = '+chas);
*/
/*Секундная стрелка каждые 1000 милисек поворачивается на 6 град.
Минутная стрелка каждые 60000 милисек поворачивается на 6 град. а каждую 1000 - 6/60=0,1
Часовая стрелка каждые 720000 милисек поворачивается на 6 град. а каждую 1000 - 6/720=0,0083
//1градус = PI/180 =>6градусов = 6*PI/180 */
function sekStr(){
    start_sSek=start_sSek+shestGr;
    sSek.style.transform='rotate('+start_sSek+'rad)';
}
function minStr(){
	start_sMin=start_sMin+shestGr;
	sMin.style.transform='rotate('+start_sMin+'rad)';
}
function chasStr(){
	start_sChas=start_sChas+shestGr;
	sChas.style.transform='rotate('+start_sChas+'rad)';
}
//Установим в начало отсчета часы
sSek.style.transform='rotate('+start_sSek+'rad)';
sMin.style.transform='rotate('+start_sMin+'rad)';
sChas.style.transform='rotate('+start_sChas+'rad)';

//А теперь считаем
setInterval(sekStr, 1000);
setInterval(minStr, 60000);
setInterval(chasStr, 720000);