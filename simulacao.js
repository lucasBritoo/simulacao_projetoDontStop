console.log('[Brito] Simulação Dont Stop');

const sprites = new Image();
sprites.src = './sprites/sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

var valor;
var posicao;
var iniciar = 0;
var aberto = 0;
var codigoRFID;

var flagPortaoEntrada = 0;
var flagPortaoSaida = 0;

var flagSensorSaida = 0;
var flagSensorEntrada = 0;

//[Cenario]
const cenario = {
	spriteX: 0,
	spriteY: 0,
	largura: 869,
	altura: 565,
	x: 0,
	y: 0,

	desenha(){
		contexto.drawImage(sprites, cenario.spriteX, cenario.spriteY,cenario.largura, cenario.altura,cenario.x, cenario.y,cenario.largura, cenario.altura);
		
	}
}

// [Caminhão Entrando]
const caminhao = {
	spriteX: 892,
	spriteY: 7,
	largura: 232,
	altura: 85,
	x: 10,
	y:350,
	velocidade: 0,
	aceleracao: 0.5,
	pare: 0,
	andarFrente(){
		if(caminhao.x < 900){
			if(flagPortaoEntrada == 1 && caminhao.x > 240){
					caminhao.pare = 1;
				}
			else{
				caminhao.pare = 0;
			}

			if(caminhao.x < 240 || caminhao.pare == 1){
				caminhao.velocidade =  caminhao.velocidade + caminhao.aceleracao;
				caminhao.x =  caminhao.x + caminhao.velocidade;
			}
			
		}
	},
	desenha(){
		contexto.drawImage(sprites, caminhao.spriteX, caminhao.spriteY, caminhao.largura, caminhao.altura, caminhao.x, caminhao.y,
			caminhao.largura, caminhao.altura);
	},
	reset(){
		caminhao.x = 10;
		caminhao.y = 350;
		caminhao.velocidade = 0;
	}
}

// [Carro Entrando]
const carroEntrando = {
	spriteX: 895,
	spriteY: 106,
	largura: 133,
	altura: 63,
	x: 10,
	y:360,
	velocidade: 0,
	aceleracao: 0.075,
	andarFrente(){
		if(carroEntrando.x < 900){
			if(carroEntrando.x < 350 || flagPortaoEntrada == 1 || carroEntrando.x > 390){
				carroEntrando.velocidade =  carroEntrando.velocidade + carroEntrando.aceleracao;
				carroEntrando.x =  carroEntrando.x + carroEntrando.velocidade;	
			}
		}
		
	},
	desenha(){
		contexto.drawImage(sprites, carroEntrando.spriteX, carroEntrando.spriteY, carroEntrando.largura, carroEntrando.altura, carroEntrando.x, 
			carroEntrando.y, carroEntrando.largura, carroEntrando.altura);
	},
	reset(){
		carroEntrando.x = 10;
		carroEntrando.y = 360;
		carroEntrando.velocidade = 0;
	}
}

// [Carro Saindo]
const carroSaindo = {
	spriteX: 938,
	spriteY: 392,
	largura: 133,
	altura: 67,
	x: 800,
	y:180,
	velocidade: 0,
	aceleracao: 0.075,
	andarFrente(){
		if(carroSaindo.x > -200){
			if(carroSaindo.x > 550 || flagPortaoSaida == 1 || carroSaindo.x < 500){
				carroSaindo.velocidade =  carroSaindo.velocidade + carroSaindo.aceleracao;
				carroSaindo.x =  carroSaindo.x - carroSaindo.velocidade;
			}

		}
		
	},
	desenha(){
		contexto.drawImage(sprites, carroSaindo.spriteX, carroSaindo.spriteY, carroSaindo.largura, carroSaindo.altura, carroSaindo.x, 
			carroSaindo.y, carroSaindo.largura, carroSaindo.altura);
	},
	reset(){
		carroSaindo.x = 800;
		carroSaindo.y = 180;
		carroSaindo.velocidade = 0;
	}
}

// [Saveiro Entrando]
const saveiroEntrando = {
	spriteX: 892,
	spriteY: 199,
	largura: 142,
	altura: 69,
	x: 10,
	y:360,
	velocidade: 0,
	aceleracao: 0.005,
	andarFrente(){
		if(saveiroEntrando.x < 900){
			if(saveiroEntrando.x < 350 || flagPortaoEntrada == 1 || saveiroEntrando.x > 390){
				saveiroEntrando.velocidade =  saveiroEntrando.velocidade + saveiroEntrando.aceleracao;
				saveiroEntrando.x =  saveiroEntrando.x + saveiroEntrando.velocidade;
			}
		}
		
	},
	desenha(){
		contexto.drawImage(sprites, saveiroEntrando.spriteX, saveiroEntrando.spriteY, saveiroEntrando.largura, saveiroEntrando.altura, saveiroEntrando.x, 
			saveiroEntrando.y, saveiroEntrando.largura, saveiroEntrando.altura);
	},
	reset(){
		saveiroEntrando.x = 10;
		saveiroEntrando.y = 360;
		saveiroEntrando.velocidade = 0;
	}
}


// [Saveiro Saindo]
const saveiroSaindo = {
	spriteX: 933,
	spriteY: 285,
	largura: 142,
	altura: 68,
	x: 800,
	y:180,
	velocidade: 0,
	aceleracao: 0.075,
	andarFrente(){
		if(saveiroSaindo.x > -200){
			if(saveiroSaindo.x > 550 || flagPortaoSaida == 1 || saveiroSaindo.x < 500){
				saveiroSaindo.velocidade =  saveiroSaindo.velocidade + saveiroSaindo.aceleracao;
				saveiroSaindo.x =  saveiroSaindo.x - saveiroSaindo.velocidade;
			}
			
		}
		
	},
	desenha(){
		contexto.drawImage(sprites, saveiroSaindo.spriteX, saveiroSaindo.spriteY, saveiroSaindo.largura, saveiroSaindo.altura, saveiroSaindo.x, 
			saveiroSaindo.y, saveiroSaindo.largura, saveiroSaindo.altura);
	},
	reset(){
		saveiroSaindo.x = 800;
		saveiroSaindo.y = 180;
		saveiroSaindo.velocidade = 0;
	}
}


// [Portão Entrada]
const portaoEntrada = {
	spriteX: 895,
	spriteY: 419,
	largura: 9,
	altura: 117,
	x: 503,
	y:346,
	abrir(){
		if(portaoEntrada.y < 450){
			portaoEntrada.y = portaoEntrada.y + 1;
		}
		else {
			flagPortaoEntrada = 1;
		}
	},
	fechar(){
		if(portaoEntrada.y > 346){
			portaoEntrada.y = portaoEntrada.y -1;
		}
		else {
			flagPortaoEntrada = 0;
		}
	},
	desenha(){
		contexto.drawImage(sprites, portaoEntrada.spriteX, portaoEntrada.spriteY, portaoEntrada.largura, portaoEntrada.altura, portaoEntrada.x, 
			portaoEntrada.y, portaoEntrada.largura, portaoEntrada.altura);
	}
}

// [Portão Saida]
const portaoSaida = {
	spriteX: 897,
	spriteY: 285,
	largura: 10,
	altura: 115,
	x: 504,
	y:155,
	abrir(){
		if(portaoSaida.y > 56){
			portaoSaida.y = portaoSaida.y - 1;
		}
		else {
			flagPortaoSaida = 1;
		}
	},
	fechar(){
		if(portaoSaida.y < 155){
			portaoSaida.y = portaoSaida.y +1;
		}
		else{
			flagPortaoSaida = 0;
		}
	},
	desenha(){
		contexto.drawImage(sprites, portaoSaida.spriteX, portaoSaida.spriteY, portaoSaida.largura, portaoSaida.altura, portaoSaida.x, 
			portaoSaida.y, portaoSaida.largura, portaoSaida.altura);
	}
}

function resetarVeiculos(){
	switch(valor){
		case "1":
			carroEntrando.reset();
			carroSaindo.reset();
			break;
		case "2":
			saveiroEntrando.reset();
			saveiroSaindo.reset();
			break;
		case "3":
			caminhao.reset();
			caminhao.reset();
			break;
	}
}

// [Inserção do Veículo na animação]
function insercaoVeiculos(){
	var selected = document.getElementById("opcoesVeiculos");
	valor = selected.options[selected.selectedIndex].value;

	var entrar = document.getElementById("veiculoEntrando");
	var sair = document.getElementById("veiculoSaindo");

	if(entrar.checked){
		posicao = 1;
	}

	if(sair.checked){
		posicao = 0;
	}

	resetarVeiculos();
}


// [Inserção do Código RFID ao veículo]
function insercaoRFID(){
	codigoRFID = document.getElementById("textRFID").value;
	console.log(codigoRFID);
}


function carrosParados(){
	if(posicao == 1){
		switch(valor){
			case "1":
				carroEntrando.desenha();
				break;
			case "2":
				saveiroEntrando.desenha();
				break;
			case "3":
				caminhao.desenha();
				break;
		}
	}
	else{
		switch(valor){
			case "1":
				carroSaindo.desenha();
				break;
			case "2":
				saveiroSaindo.desenha();
				break;
			case "3":
				caminhao.desenha();
				break;
		}
	}
	
}
function iniciaSimulacao(){
	iniciar = 1;

	if(posicao == 1){
		switch(valor){
			case "1":
				carroEntrando.andarFrente();
				carroEntrando.desenha();
				break;
			case "2":
				saveiroEntrando.andarFrente();
				saveiroEntrando.desenha();
				break;
			case "3":
				caminhao.andarFrente();
				caminhao.desenha();
				break;
		}
	}
	else{
		switch(valor){
			case "1":
				carroSaindo.andarFrente();
				carroSaindo.desenha();
				break;
			case "2":
				saveiroSaindo.andarFrente();
				saveiroSaindo.desenha();
				break;
			case "3":
				caminhao.andarFrente();
				caminhao.desenha();
				break;
		}
	}
	
}

function pausaSimulacao(){
	iniciar = 0;
}

function abrePortao(){
	aberto = 1;
	portaoEntrada.abrir();
	portaoSaida.abrir();
}

function fechaPortao(){
	analisaSensor();

	if(flagSensorEntrada == 0){
		aberto = 0;
		portaoEntrada.fechar();
	}
	
	if(flagPortaoSaida == 0){
		aberto = 0;
		portaoSaida.fechar();
	}
	
}

function analisaSensor(){
	if(caminhao.x > 250 && caminhao.x < 520 || carroEntrando.x > 385 && carroEntrando.x < 520 || saveiroEntrando.x > 355 && saveiroEntrando.x < 520){
		flagSensorEntrada = 1;
	}
	else {
		flagSensorEntrada = 0;
	}

	if(carroSaindo.x < 511 && carroSaindo.x > 347 || saveiroSaindo.x < 516 && saveiroSaindo.x > 347){
		flagPortaoSaida = 1;
	}
	else{
		flagPortaoSaida = 0;
	}

}

function loop(){
	
	cenario.desenha();
	portaoSaida.desenha();
	portaoEntrada.desenha();

	if(iniciar == 1){
		iniciaSimulacao();
		
	}
	else{
		carrosParados();
	}

	if(aberto == 1){
		abrePortao();
	}
	else{
		fechaPortao();
	}

	requestAnimationFrame(loop);

}

loop();