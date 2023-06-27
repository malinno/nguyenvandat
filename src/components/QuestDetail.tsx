import { useAppContext } from "../providers/app-provider";

interface QuestDetailProps {
  id: number;
  quest: any;
}

const QuestDetail = ({ id, quest }: QuestDetailProps) => {
  const { setQuestModal, setQuestTypes } = useAppContext();

  return (
    <div className="flex flex-col gap-2">
      <span className="font-bold text-xl">Quest type: {quest.name}</span>
      <p>{quest.description}</p>
      <div className="flex gap-2">
        <button
          className="w-full bg-blue-500 rounded py-2"
          onClick={() => {
            if (setQuestModal) {
              setQuestModal({
                id,
                ...quest,
              });
            }
          }}
        >
          Edit Quest Type
        </button>
        <button
          className="w-full bg-blue-500 rounded py-2"
          onClick={() => {
            if (setQuestTypes) {
              setQuestTypes((prep: any) => prep.filter((x: any, i: number) => i !== id));
            }
          }}
        >
          Delete Quest Type
        </button>
      </div>
    </div>
  );
};

export default QuestDetail;
