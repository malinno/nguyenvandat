import {useAppContext} from "../providers/app-provider";
import {IoAddOutline} from "react-icons/io5";
import {BsTrashFill} from "react-icons/bs";

const ConfigContainer = () => {
  const {assumptions} = useAppContext()
  return (
    <div className="flex flex-col gap-5">
      <button className="rounded bg-green-500 text-white py-4 w-full">
        Generate Quest
      </button>
      <button className="rounded bg-gray-400 text-white py-2 w-full">
        Export Configs
      </button>
      <button className="rounded bg-gray-400 text-white py-2 w-full">
        Import Configs
      </button>
      <button className="rounded bg-gray-400 text-white py-2 w-full">
        Reset configs to default
      </button>

      <div className={'border-b border border-blue-700'} />

      <span className="font-bold text-xl">User description</span>

      <textarea rows={3} className="min-h-[5rem] p-3 bg-gray-700 w-full focus-visible:outline-none"/>

      <div className={'border-b border border-blue-700'} />

      <span className="font-bold text-xl">Assumption</span>

      <div className="flex gap-2">
        <input className="flex-1 rounded focus-visible:outline-none bg-gray-700 px-3"/>
        <button className="">
          <IoAddOutline className="w-[30px] h-[30px] rounded bg-green-500  p-1"/>
        </button>
      </div>

      {/* {assumptions?.length > 0  && assumptions?.map((ass, index) => (
        <div className="flex gap-2 items-center" key={index}>
          <span className="flex-1">{ass}</span>
          <button className="">
            <BsTrashFill className="w-[30px] h-[30px] rounded bg-red-600 p-2"/>
          </button>
        </div>
      ))} */}
      {assumptions && assumptions.length > 0 && assumptions.map((ass, index) => (
  <div className="flex gap-2 items-center" key={index}>
    <span className="flex-1">{ass}</span>
    <button className="">
      <BsTrashFill className="w-[30px] h-[30px] rounded bg-red-600 p-2"/>
    </button>
  </div>
))}

    </div>
  )
}

export default ConfigContainer;
