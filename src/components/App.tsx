import {AppProvider} from "../providers/app-provider";
import QuestTypeContainer from "./QuestTypeContainer";
import ConfigContainer from "./ConfigContainer";
import GenQuestContainer from "./GenQuestContainer";
import PromptContainer from "./PromptContainer";

function App() {
  return (
    <AppProvider>
      <div className="grid grid-cols-4 gap-5 px-3 py-5 bg-gray-900 min-h-screen text-white">
        <QuestTypeContainer/>
        <ConfigContainer/>
        <GenQuestContainer />
        <PromptContainer/>
      </div>
    </AppProvider>

  )
}

export default App
