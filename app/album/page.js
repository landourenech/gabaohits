import Image from "next/image";
import { Music } from "../components/client/album/Music";
import { Icon1 } from "../components/client/album/Icon1";
import { Img } from "../components/client/album/Img";
import { Img2 } from "../components/client/album/Img2";
import { Coeur } from "../components/client/album/Coeur";
import { Iconté } from "../components/client/album/Iconté";
import { Iconpoint } from "../components/client/album/Iconpoint";
import { Ply } from "../components/client/album/Ply";
import { Bluetooth } from "../components/client/album/Bluetooth";
import { Player } from "../components/client/album/Player";
import { Acceuil } from "../components/client/album/Acceuil";
import { Recherche } from "../components/client/album/Recherche";
import { Trèpied } from "../components/client/album/Trèpied";
import { Bibliothèque } from "../components/client/album/Bibliothèque";

export default function album () {
    return (
        <div className=" flex flex-col gap-9 w-full justify-center bg-gradient-to-b from-[#C63224] via-[#641D17] via-[#271513] to-[#121212]">
            <div className="flex flex-col gap-3 mt-14">
              <div className="flex w-[95%] mx-auto">
                  <Icon1 />
              </div>
              <Img />
            </div>   
{/* main               */}
              <main className="flex flex-col gap-5">

                <div className=" w-[95%]   flex flex-col gap-5  mx-auto"> 
                  <h1 className="font-bold text-xl">Ma providence</h1>
                  <div className="flex justify-between">
                    <div>
                     <div className="flex flex-col gap-3">
                         <div className="flex gap-2">
                            <Img2 />
                            <p className="text-sm">Diane OMEGA</p>
                         </div>
                         <div>
                            <p>Album . 2024</p>
                         </div> 
                     </div>      
                         <div className="flex gap-8 items-center mt-3">
                            <Coeur />
                            <Iconté />
                            <Iconpoint />
                         </div>
                     </div>    
                     <div>
                          <Ply />
                     </div>
                  </div> 
                </div>
              
                   <Music />
                   <div className="flex items-center w-[95%] mx-auto justify-between">
                     <div className="flex flex-col">
                         <div className="flex gap-2">
                           <img src=" \assets\iconcharge.svg"
                           alt=""
        //                 width={500}
        //                 height={500}
                           className=""
                           > 
                           </img>
                           <h2>J’élève le nom de JESUS </h2>
                        </div> 
                        <div className="flex gap-2">
                        <Iconté />
                        <p className="font-semibold">Diane OMEGA</p>
                        </div> 
                     </div>  
                        <Iconpoint />     
                   </div>
                   <Music />         
                   <Music />   
        
              </main>

{/* footer1 */}
          <footer className="flex flex-col gap-4 w-[95%] mx-auto">
            <footer className="h-45 w-100% bg-[#702F3D] bg-opacity-70 w-full  rounded-lg">
             <div className="flex">
                  <img src=" \assets\img1.svg"
                  alt=""
                  width={50}
                  height={50}
                  className=""
                  > 
                  </img>
               <div className="flex items-center justify-between w-full mr-6">
                <div className=" flex flex-col w-full">  
                  <div className="flex  mt-4 ml-3 items-center justify-between mr-10">
                      <p>J’élève le <br></br> nom de JESUS</p>
                      <p> . The B</p>
                      
                   </div>
                   <div className="flex justify-between mr-3 ">
                    <Bluetooth />
                    <Bluetooth />
                   </div>
                </div>   
                   <Player />
               </div> 
             </div>   
                   <div>
                      <img src=" \assets\line.svg"
                      alt=""
                     //  width={50}
                     //  height={50}
                     className=""
                     > 
                  </img>
                   </div>

            </footer>
{/* footer2             */}
            <footer className="flex justify-between mr-10 ml-10 ">
                  <Acceuil />
                  <div className="flex flex-col gap-8">
                     <Recherche />
                     <Trèpied />
                  </div>
                  <Bibliothèque />
            </footer>
          </footer>   
        </div>
    );
}