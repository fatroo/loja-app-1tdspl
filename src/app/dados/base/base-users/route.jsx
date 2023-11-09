import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';

const handleLogin = async (email,senha) => {
    //Lendo o arquivo JSON e armazenando em uma constante.
    const file = await fs.readFile(process.cwd() + "/src/app/dados/base/db.json", "utf8"); 

    //Converter o arquivo para uma FORMATO possível de ser manipulado.
    const dados = await JSON.parse(file);

    //Lógica de validação, ou seja, verificar se o email e senha são válidos, comparando com os dados da base.
    const user = await dados.usuarios.find((ObjUsuario) => ObjUsuario.email === email && ObjUsuario.senha === senha);

    //Retornar o objeto usuário.
    //Este objeto será utilizado para gerar o token de autenticação e pode estar vazio.
    return user;
}


export async function POST(request,response){

    //Capturar o request e tratar os dados:
    //Desestruturar o request.(Destrucuring)
    const {info,email,senha} = await request.json();

    //Estrutura de decisão:switch/case para definir o tipo de requisição. Se é login ou cadastro.    
    switch (info) {
        case "login":
            //Chamar a função de validação.
            const user = await handleLogin(email,senha);   
            if(user){
                return NextResponse.json({"status":true});
            }else{
                return NextResponse.json({"status":false});
            }
        case "cadastro":
            break;
        default:
            break;
    }

    //Gerando uma resposta:response.
    return NextResponse.json({"status":false});

}
    //Exercício
    //Crie uma lógica onde seja os dados que são enviados pelo insomnia, sejam comparados contra os dados da base JSON, caso seja validado, a comparação se encerra e é retornado o status de true, caso contrário retorne o status de false.
    //PLUS
    //Crie uma view para realizar esta validação, com CSS/TAILWIND + ícones[0,5 PT na GS]
    //GRUPO