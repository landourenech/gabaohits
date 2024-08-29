import { Bloc1 } from "./Bloc1";
import { Iconté } from "./Iconté";
import { Iconpoint } from "./Iconpoint";
import { Text } from "./Text";


export function Music () {
    return (
        <div className=" flex w-[95%] mx-auto justify-between">
          <div className="flex items-center">
            <Iconté />
            <div className="flex flex-col">
             <Bloc1 />
             <Text />
            </div>
          </div>
          <Iconpoint />
          
        </div>
    );
}