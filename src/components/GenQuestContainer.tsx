import QuestDetail from "./QuestDetail";

const GenQuestContainer = () => {
  const string1 = `<pre>{
  "typeId": "pay_bills_via_qr",
  "typeData": {
    "amount": 1000
  }
}</pre>`
  return (
    <div className="flex flex-col gap-3">
      <div className="py-3">
        <span className="font-bold text-xl">Generated Quests</span>
      </div>
      <div className={'border-b border border-blue-700'} />

      <div className="bg-gray-500 p-2 rounded">
        Receive at least 500
      </div>
      <div className="bg-gray-500 p-2 rounded">
        Pay bills multiple times
      </div>

      <div className="p-3 bg-indigo-900 rounded" dangerouslySetInnerHTML={{__html: string1}}/>
      <div className="p-3 bg-indigo-900 rounded" dangerouslySetInnerHTML={{__html: string1}}/>

    </div>
  )
}

export default GenQuestContainer;
