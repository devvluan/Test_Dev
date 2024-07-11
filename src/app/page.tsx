import Link from 'next/link';

//impares
const array = Array.from({ length: 31 }, (_, index) => index);
const impNumbers = array.filter(num => num % 2 !== 0);

//Palindromos
const namesPalin = ["arara", "amor", "asa", "longo", "ele", "dinossauro", "esse", "peppa", "mamam", "tartaruga", "bandolin", "matam", "desodorante", "mundo", "metem", "terra", "agua", "mirim", "fogo", "sopapos"]
const isPalin = (namesPalin: any) =>{
  const reversePalin = namesPalin.split('').reverse().join('');
  return namesPalin === reversePalin;
  };
  const palindromos = namesPalin.filter(isPalin);

  const gerarFibonacci = (max: any) =>{
    const sequence = [0, 1];
    let i = 1;
  
    while (sequence[i] + sequence[i - 1] <= max) {
      sequence.push(sequence[i] + sequence[i - 1]);
      i++;
    }
      return sequence;
    };
    const fibonacciSequence = gerarFibonacci(100);

export default function Arrays() {
  const handleClick = () =>{
    
  }
  return (
    <main className="h-screen bg-zinc-950 px-1 p-2">
      <div className="text-white">
        <h1>Um Array contendo os numerais de 0 à 30 e filtrada todos números são ímpares:</h1>
        <h2 className='p-1'>Array de 0 a 30:</h2>
        <p className='p-1'>{array.join(', ')}</p>
        <h2 className='p-1'>Números Ímpares de 0 a 30:</h2>
        <p className='p-1'>{impNumbers.join(', ')}</p>
        <br></br>
        <br></br>
      </div>

      <div className="text-white">
        <h1 className=''>Um Array contendo a lista de palavras abaixo e com filtrada apenas quais dessas palavras são palíndromos:</h1>
        <h2 className='p-1'>Array Original:</h2>
        <p className='p-1'>{namesPalin.join(', ')}</p>
        <h2 className='p-1'>Array com filtro:</h2>
        <p className='p-1'>{palindromos.join(', ')}</p>
        <br></br>
        <br></br>
      </div>
      
      <div className="text-white">
        <h1 className=''>Uma automação que calcula a sequencia fibonacci até o número máximo 100:</h1>
        <h2 className='p-1'>Sequência de Fibonacci até 100</h2>
        <p className="p-1">{fibonacciSequence.join(',')}</p>
      </div>
      <br></br>
      <Link href="/NextFase">
        <button className="bg-emerald-500 rounded font-semibold - text-white h-10 hover:bg-emerald-600">Proxima fase</button>
      </Link>
      
    </main>
  );
};
