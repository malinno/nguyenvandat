import {useAppContext} from "../providers/app-provider";
import QuestDetail from "./QuestDetail";

const QuestTypeContainer = () => {
  const {questTypes, setQuestModal} = useAppContext()

  return (
    <div className="flex flex-col gap-3">
      <div className="py-3">
        <span className="font-bold text-xl">Quest types</span>
      </div>
      <div className={'border-b border border-blue-700'} />
      <div>
        <button className="rounded bg-blue-500 text-white py-2 w-full" onClick={() => setQuestModal && setQuestModal({name: ''})}>
          Add new quest type
        </button>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        {questTypes?.length > 0 && questTypes?.map((quest, index) => (
          <QuestDetail id={index} quest={quest} key={index} />
        ))}
      </div>
    </div>
  )
}

export default QuestTypeContainer;
