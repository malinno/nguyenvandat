import {createContext, useContext, useState} from "react";
import ModifyQuestModal from "../components/ModifyQuestModal";

export const AppContext = createContext<
  Partial<{
    questTypes: any[],
    assumptions: string[],
    prompt: string,
    setQuestModal: (x: any) => void,
    questModal: any,
    setQuestTypes: (x: (prep) => any[]) => void
}>>({})

export function AppProvider(props: any) {

  const defaultQuestType = [
    {
      name: "receive_money",
      dataType: "number",
      description: "Receive money from another source. This quest requires users to receive more than a certain amount of money"
    },
    {
      name: "pay_bill_via_pr",
      dataType: "number",
      description: "This quest requires users to pay his bill multiple times"
    },
    {
      name: "transfer",
      dataType: "boolean",
      description: "This quest requires user to make transfer transactions"
    },
    {
      name: "saving",
      dataType: "string",
      description: "This quest requires user to deposit money into his saving account"
    },
  ]

  const defaultAssumption = [
    'User usually spend 1k to pay bills',
    'User with income more than 5k often deposit 1k to his saving account',
    'Don\'t show \"pay_bills_via_qr\" to user without saving account.'
  ]

  const defaultPrompt = `Generate quests (wrapped in <quests> tag) based on the assumptions provided in <assumptions> and the user description provided in <user_description>, strictly follow the format instructions provided in <format-instructions>.
      Generated quests must fit the description of the available quest types, provided in <quest-types>.

      Quest types:
      <quest-types>
      - Quest type "receive_money". Receive money from another sources. This quest requires user to receive more than a certain amount of money. Its typeData must have a field named amount. the minimum amount that user should receive to complete the quest
      - Quest type "pay_bills_via_qr". This quest requires user to pay his bills multiple times. Its typeData must have a field named amount. The amount user is willing to pay
      - Quest type "end_of_day_balance". This quest requires user to keep his balance till the end of day. Its typeData must have a field named amount. The amount user have to keep in his balance
      - Quest type "transfer". This quest requires user to make transfer transactions. Its typeData must have a field named amount. The amount user have to transfer
      - Quest type "saving". This quest requires user to deposit money into his saving account. Its typeData must have a field named amount. The amount user have to deposit
      </quest-types>

      Assumptions:
      <assumptions>
      - User usually spend 1k to pay bills
      - User with income more than 5k often deposit 1k to his saving account
      - Don't show "pay_bills_via_qr" to user without saving account.
      - Encourage user with income less than 5k to receive at least 500 a day.
      - generate exactly 2 quests
      </assumptions>

      User description:
      <user_description>
      This user often pay the bills. His income is 2k. He doesn't have a saving account
      </user_description>

      Format instructions:
      <format-instructions>
      Output a json object or array fitting the schema provided in <schema>, based on the PROMPT section below.
      Code only, no commentary, no introduction sentence, no codefence block.
      You are generating json - make sure to escape any double quotes.
      If you are not sure or cannot generate something for any possible reason, return:
      {{"error" : <the reason of the error>}};

      <schema>
      {"type":"array","items":{"type":"object","properties":{"typeId":{"type":"string"}, "typeData":{"type":"object", "additionalProperties":{}},"minimalHumanTitle":{"type":"string"}},"required":["typeId","typeData","minimalHumanTitle"],"additionalProperties":false},"$schema":"http://json-schema.org/draft-07/schema#"}
      </schema>
      </format-instructions>
`


  const [questTypes, setQuestTypes] = useState(defaultQuestType)
  const [assumptions, setAssumptions] = useState(defaultAssumption)
  const [prompt, setPrompt] = useState(defaultPrompt)

  const [questModal, setQuestModal] = useState(undefined)

  // useEffect(() => {
  //
  // }, [questModal])

  return (
    <AppContext.Provider
      value={{
        questTypes,
        assumptions,
        prompt,
        setQuestModal,
        questModal,
        setQuestTypes
      }}
    >
      {props.children}
      <ModifyQuestModal/>
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
