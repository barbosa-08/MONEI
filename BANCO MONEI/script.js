const teclado = require('prompt-sync')({sigint:true});


//--------------------------------variaveis globais
const contas = [];
var verificacao = 0;
var apt=0;
var aptV = false;
var acesso=0;




//------------------------------classe conta bancaria
class CB{
    
    constructor(tit,cpf,saldo,numC){

        this.tit= tit;
        this.cpf = cpf;
        this.saldo = saldo;
        this.numC = numC;
    }
    
    depositar(valor){
        
        this.saldo = this.saldo + valor

    }


    sacar(valor){

        this.saldo = this.saldo - valor
        
    }


    consultar(){
        
        console.log("O valor do seu saldo é ")
        console.log(this.saldo)

    }

}



//------------------------------Começo das funcoes 
//Função para criação da classe do cliente
function newCB(tit,cpf){

    i=0

    while(contas[i]!=null){
            i++
        }
    numC = geradorNumCB();
    contas[i] = new CB(tit,cpf,0,numC);

}

//Função para listagem de todas as contas
function listCB(){

    for(i=0;i<contas.length;i++){
        console.log(contas[i])
    };

}

//Função para busca de contas que retorna conta encontrada e o indice para o acesso
function buscaCB(busca){

    for(i=0;i<contas.length;i++){

        if(contas[i].cpf==busca){
            
            apt = i
            return aptV = true

        }
        
    }

    console.log("Verifique se você digitou o CPF certo ou conta INEXISTENTE")
    apt = 0
    aptV = false
}

//Função acesso para poder acessar e executar acoes na conta
function acessoCB(apt){

    let ver = 0

    do{

        console.log(" ")
        console.log('---------------------------Bem Vindo(a) '+ contas[apt].tit +'----------------------')
        console.log(" ")
        console.log('---------------------------O seu saldo é de R$: '+ contas[apt].saldo +'-------------------------')
        console.log("---------------------------(1) = Depositar-------------------------------")
        console.log("---------------------------(2) = Sacar-----------------------------------")
        console.log("---------------------------(3) = Transferir------------------------------")
        console.log("---------------------------(0) = sair do conta---------------------------")
        ver=parseInt(teclado())
    
        switch(ver){
    
            case 1:
                
                console.log("Certo vamos fazer um depósito na sua conta!")
                console.log("Informe o valor a ser depositado :")
                
                contas[apt].depositar(parseFloat(teclado()))
                console.log("Depósito bem sucedido")
                break;
    
            case 2:

                console.log("Certo vamos fazer um saque na sua conta!")
                console.log("Informe o valor a ser sacado :")
                
                let validador = parseFloat(teclado())

                if(validador>contas[i].saldo){
                    console.log("Você NÃO tem saldo o SUFICIENTE para sacar!!")
                }
                else(
                    contas[i].sacar(validador)
                    
                )
                
                break;
    
            case 3:
                transferir()
                
                break;
    
            
        }
    
        
        
    
    }while(ver!==0);

}

function transferir(){

    let valT = 2

    do{
        console.log("Vamos fazer uma transferencia!")
        console.log("Para qual conta você deseja fazer uma transferencia?")
        console.log("Digite o CPF o qual vai ser transferido o dinheiro: ")
        console.log("exemplo( 0000000000 ):")

        let cpfT = parseInt(teclado())
        
        buscaCB(cpfT)
        if(aptV==false){
            break
        }
        console.log('Foi encontrada a conta no nome de ' + contas[apt].tit + ' CPF ' + contas[apt].cpf +' !')
        console.log("Essa conta pertence a pessoa desejada para realizar a transferencia? ")
        console.log("Para confirmar aperte (1)")
        console.log("Para corrigir  aperte (2)")
        console.log("Para sair  aperte (0)")

        valT = parseInt(teclado())
        if(valT==1){

            console.log("Digite o valor desejado para enviar a conta :")
            let transf = parseFloat(teclado())

            if(transf>contas[acesso].saldo){

            console.log("Você não tem dinheiro o suficiente para realizar a transferecia!")
            break

            } else{
                
                contas[apt].depositar(transf)
                contas[acesso].sacar(transf)
                console.log(contas[apt])
                console.log(contas[acesso])
            }

        }
        else if(valT==0){
            break
        }


    }while(valT==2)

}


function geradorNumCB() {
    return parseInt(Math.random() * (99999 - 00000));
  }


console.log("██████╗  █████╗ ███╗   ██╗ ██████╗ ██████╗     ███╗   ███╗ ██████╗ ███╗   ██╗███████╗██╗")
console.log("██╔══██╗██╔══██╗████╗  ██║██╔════╝██╔═══██╗    ████╗ ████║██╔═══██╗████╗  ██║██╔════╝██║")
console.log("██████╔╝███████║██╔██╗ ██║██║     ██║   ██║    ██╔████╔██║██║   ██║██╔██╗ ██║█████╗  ██║")
console.log("██╔══██╗██╔══██║██║╚██╗██║██║     ██║   ██║    ██║╚██╔╝██║██║   ██║██║╚██╗██║██╔══╝  ██║")
console.log("██████╔╝██║  ██║██║ ╚████║╚██████╗╚██████╔╝    ██║ ╚═╝ ██║╚██████╔╝██║ ╚████║███████╗██║")
console.log("╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═════╝     ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝")
console.log("-------------------------Olá seje(a) bem vindo ao Banco Monei---------------------------")


//Criacao de algumas contas apenas para teste 
newCB("juca",12345)
newCB("marcio",11412415)
newCB("julio",123)
newCB("manoella",54321)
newCB("marcos",5464564857)
newCB("juca",15465428)
  


do{

    
    console.log(" ")
    console.log("-----------------------------Escolha uma das opções abaixo----------------------------")
    console.log(" ")
    console.log("-----------------------------(1) = Acessar sua conta----------------------------------")
    console.log("-----------------------------(2) = Criar uma conta nova-------------------------------")
    console.log("-----------------------------(3) = Excluir sua conta----------------------------------")
    console.log("-----------------------------(4) = Consultar contas de nossos clientes----------------")
    console.log("-----------------------------(0) = sair do programa-----------------------------------")
    verificacao=parseInt(teclado())

    switch(verificacao){

        case 1:

            console.log("Certo então vamos ACESSAR sua conta!")
            console.log(" ")
            console.log("Digite seu CPF para acessar sua conta:")
            console.log("exemplo( 0000000000 ):")
            
            let cpfJ = parseInt(teclado())

            buscaCB(cpfJ)
            if(aptV==true){
                acesso = apt
                acessoCB(apt)
            }
            break;

        case 2:

            console.log("Certo então vamos CRIAR sua conta!")

            console.log("Digite seu nome:")
            
            let nomeV = teclado()

            console.log("Digite seu CPF:")
            console.log("exemplo( 0000000000 ):")
            let cpfV = parseInt(teclado())

            newCB(nomeV,cpfV)

            break;

        case 3:

            console.log("Vamos excluir as contas")
            console.log("Digite o CPF da conta a ser excluida")
            let cpfX = 0
            let numCBX = 0
            let titX = ""
            cpfX = parseInt(teclado())
            buscaCB(cpfX)
            if(aptV==false){
                break
            }
            console.log("Digite o numero da conta a ser excluida")
            numCBX = parseInt(teclado())

            console.log("Digite o nome do TITULAR da conta a ser excluida")
            titX = teclado()

            if(contas[apt].tit==titX && contas[apt].numC==numCBX){
                
                contas.splice(apt,1)

            }
            else(console.log("Algo foi digitado incorretamente!"))


            break;

        case 4:
        
            listCB();

            break;
            
    }

    
    

}while(verificacao!==0);





                                                                                             
                                                                                             


                                                                                            
    
                                                         
                                                         



