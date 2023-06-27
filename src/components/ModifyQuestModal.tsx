import Modal from "../utils/modal";
import { useAppContext } from "../providers/app-provider";
import { useEffect, useState, ChangeEvent } from "react";

interface QuestData {
  name: string;
  dataType: string;
  description: string;
}

const ModifyQuestModal = () => {
  const { questModal, setQuestModal, setQuestTypes } = useAppContext();

  const defaultData: QuestData = {
    name: "",
    dataType: "string",
    description: "",
  };
  const [data, setData] = useState<QuestData>({ ...defaultData, ...questModal });

  useEffect(() => {
    setData({ ...defaultData, ...questModal });
  }, [questModal]);

  const onClick = () => {
    if (questModal?.id !== undefined) {
      if (setQuestTypes) {
        setQuestTypes((prep) => {
          const updatedPrep = [...prep];
          updatedPrep[questModal.id] = data;
          return updatedPrep;
        });
      }
    } else {
      if (setQuestTypes) {
        setQuestTypes((prep) => [...prep, data]);
      }
    }
    if (setQuestModal) {
      setQuestModal(undefined);
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({
      ...prevData,
      name: e.target.value,
    }));
  };

  const handleDataTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setData((prevData) => ({
      ...prevData,
      dataType: e.target.value,
    }));
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({
      ...prevData,
      description: e.target.value,
    }));
  };

  return (
    <Modal
      title={"Add Quest"}
      isOpen={!!questModal}
      onClose={() => setQuestModal && setQuestModal(undefined)}
      body={
        <div className="p-5 flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <span className="w-1/4">TypeID</span>
            <input
              className="border rounded flex-1 px-3 py-1"
              value={data.name}
              onChange={handleNameChange}
            />
          </div>
          <div className="flex gap-3 items-center">
            <span className="w-1/4">TypeData</span>
            <select
              className="border rounded flex-1 px-3 py-1"
              value={data.dataType}
              onChange={handleDataTypeChange}
            >
              <option value="string">string</option>
              <option value="number">number</option>
              <option value="boolean">boolean</option>
            </select>
          </div>
          <div className="flex gap-3 items-center">
            <span className="w-1/4">Description</span>
            <input
              className="border rounded flex-1 px-3 py-1"
              value={data.description}
              onChange={handleDescriptionChange}
            />
          </div>
          <button onClick={onClick}>Save</button>
        </div>
      }
    />
  );
};

export default ModifyQuestModal;
