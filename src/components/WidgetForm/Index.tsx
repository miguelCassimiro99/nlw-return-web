import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoghtImageUrl from '../../assets/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoghtImageUrl,
      alt: 'Imagem de um pensamento'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
      // Form
      <div className="
      bg-zinc-900 shadow-lg 
      p-4 mb-4 
      relative flex flex-col items-center 
      rounded-2xl
      w-[calc(100vw-2rem)] md:w-auto
      ">

        {feedbackSent ? (
          <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
        ) : (
          <>
            {!feedbackType ? (
              <FeedbackTypeStep onFeedbackTypeStepChanged={setFeedbackType}/>
            ) : (
                  <FeedbackContentStep
                    onFeedbackSent={() => setFeedbackSent(true)}
                    feedbackType={feedbackType} 
                    onFeedbackRestartRequested={handleRestartFeedback}
                  />
                )}
          </>
        )}

        <footer className="text-xs text-neutral-400">
          <span>
            feito com 💜 pela <a href="https://www.rocketseat.com.br" target="_blank" className="underline underline-offset-2">Rocketseat</a>
          </span>
        </footer>
      </div>
  )
}