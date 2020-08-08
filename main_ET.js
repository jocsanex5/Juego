(function(){
	//Variables
			const WIDTH = 400;
			const HEIGTH = 400;



		//Funciones
			function getRandomNumber(size){

				return Math.floor(Math.random() * size); //Floor para retornar un valor NO decimal
			}

			function getDistance(e, target){

				let diffX = e.offsetX - target.x; //Donde dio clic el usuario
				let diffY = e.offsetY - target.y;

				return Math.sqrt( (diffX * diffX) + (diffY + diffY) );
			}

			getDistanceMint = function(distace){

				if( distace < 30 ){

					return 'Esta muy cerca';
				} 
				else if( distace < 40 ){

					return 'Muy Caliente xd';
				}
				else if( distace < 60 ){

					return 'Caliente!!!';
				}

				else if( distace < 100 ){

					return 'Calido';
				}
				else if( distace < 180 ){

					return 'helado';
				}
				else if( distace < 360 ){

					return 'Muy frio';
				}
				else{

					return 'Te congelastes Master';
				}
			}

			//Eventos
				let target = {

					x : getRandomNumber(WIDTH),
					y : getRandomNumber(HEIGTH) 
				}
			
			let $map = document.getElementById('mapa');
			let $distance = document.getElementById('distancia');
			let clics = 0;

			$map.addEventListener('click', function(e){
				clics++;

				let distance = getDistance(e, target);
				let distanceMint = getDistanceMint(distance);

				distanceMint.className = 'pista';

				$distance.innerHTML = distanceMint;

				if (distance < 20) {

					alert('Encontrastes el tesoro!!! en ' + clics + ' clics');

					location.reload()
				} 

			})

}())