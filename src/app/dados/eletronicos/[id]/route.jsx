import { NextResponse } from "next/server";

export async function GET(request,{params}) {

  const id = params.id;

  if(id > 0 && id <= eletros.length){
    return NextResponse.json(eletros.find((eletro)=> eletro.id == id));
  }else{

    return id == 0 ? NextResponse.json(eletros) : NextResponse.redirect("http://localhost:3000/error")
  }
 
}