import Link from 'next/link';

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numeros.unshift(0);
  numeros.push(11)
  let removeNumber5 = numeros.indexOf(5);
  if (removeNumber5 !== -1){
    numeros.splice(removeNumber5, 1)
  }

  let removeNumber8 = numeros.indexOf(8);
  if (removeNumber8 !== -1){
    numeros.splice(removeNumber8, 1, 20, 21, 22)
  }

  const dados = [
    {id: 1, nome: 'Liz', idade: 2},
    {id: 2, nome: 'Thaís', idade: 32},
    {id: 3, nome: 'Jonathan', idade: 30},
    {id: 4, nome: 'Thainá', idade: 29},
    {id: 5, nome: 'Fabiano', idade: 45}
  ];

export default function nextFase(){
    return(
        
        <main className='h-screen bg-zinc-950 text-white px-2'>
            <h1 className=' text-white uppercase flex flex-initialitems-center justify-center'>Proxima fase</h1>
            <h2 className=''>Desafio Array:</h2>
        <p className='p-1'>{numeros.join(', ')}</p>
        <br></br>
        <h2 className=''>Desafio Array Parte 2:</h2>
        <h3>Dados:</h3>
        {dados.map((item) => (
            <h3 className='p-1' key={item.id}> ID: {item.id} - Nome: {item.nome} - Idade: {item.idade} anos</h3>
        ))}
        <br></br>
        </main>
    )
}