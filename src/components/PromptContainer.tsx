import {useAppContext} from "../providers/app-provider";

const PromptContainer = () => {
  const {prompt} = useAppContext()
  return (
    <div className="flex flex-col gap-3">
      <div className="py-3">
        <span className="font-bold text-xl">Prompt</span>
      </div>
      <div className={'border-b border border-blue-700'} />
      <div className="flex-1 bg-gray-700 p-3 rounded break-words" dangerouslySetInnerHTML={{__html: prompt || ''}} />
    </div>
  )
}

export default PromptContainer;
