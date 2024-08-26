import Link from "next/link";
import Image from "next/image";



export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center gap-12 w-full justify-center">

        <div className="flex flex-col gap-5">
          <Image className="" src="/GabaoLogo.svg"  alt="Picture of the author"width={500} height={500}/>

          <h1 className="w-full text-blue-400 text-xl text-center">GABAO-HITS</h1>

        </div>

      <p className=" text-center w-full ">LE MEILLEUR DE LA MUSIQUE GABONAISE<br/>
        SUR GABAO-HITS</p>


    <div className="flex flex-col gap-7  w-full justify-center items-center ">

    <button className="w-[90%] text-xl text-black-500 py-4 bg-[#F3F637] text-black px-10 rounded-full border-whith-500 border-2">
  <Link href="/auth">Inscription gratuite</Link>
</button >
  <button className="w-[90%] text-xl py-4 px-10 rounded-full border-whith-500 border-2"><Link href="/auth">Continuer avec google</Link></button>


  <button className="w-[90%] text-xl py-4 px-10 rounded-full border-whith-500 border-2"><Link href="/auth">Continuer avec Facebook</Link></button>


  <button className="w-[90%] text-xl py-4 px-10 rounded-full border-whith-500 border-2"><Link href="/auth">Continuer avec Apple</Link></button>


      <Link className="text-xl justify-center" href="#">SE CONNECTER</Link>   
    </div>

        <button className=""><Link href="/admin/">connexion admin</Link></button>
        <button className=""><Link href="/client/">connexion client</Link></button>

    </div>
    </>
  );
}
 