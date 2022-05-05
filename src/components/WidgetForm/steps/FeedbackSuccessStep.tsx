import { CloseButton } from "../../CloseButton";

import successImageUrl from '../../../assets/success.svg';

export interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void
}

export function FeedbackSuccessStep({ onFeedbackRestartRequested}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImageUrl} alt="Imagem de check"></img>
        <span className="text-xl text-zinc-100">Agradecemos pelo feedback!</span>

        <button
          onClick={onFeedbackRestartRequested}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  )
}