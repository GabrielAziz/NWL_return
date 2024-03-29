import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assets/bug.svg"
import ideaImageUrl from "../../assets/idea.svg"
import thoughtImageUrl from "../../assets/thought.svg"
import { FeedbackTypeStap } from "./Staps/FeedbackTypeStep";
import { FeedbackContentStap } from './Staps/FeedbackContentStep';

export const feedbackTypes = {
  BUG:{
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA:{
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada',
    },
  },
  THOUGHT:{
    title: 'Pensamento',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balao de pensamento',
    },
  },
}


// Object.entries(feedbackTypes) =>
/**
 *  [
 *    ['BUG', {...}],
 *    ['IDEIA', {...}],
 *    ['THOUGHT', {...}], 
 *  ]
**/
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){

  function handleRestartFeedback(){
    setFeedbackType(null);
  }

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStap onFeedbackTypeChanged={setFeedbackType}/>
      ) : (
        <FeedbackContentStap feedbackType={feedbackType} onFeedbackRestartRequest={handleRestartFeedback}/>
      )}

      <footer className="text-xs text-neutral-400">
      Feito com ❤ por <a className="underline underline-offset-2" href="https://github.com/GabrielAziz">mim</a>
      </footer>
    </div>
  );
}