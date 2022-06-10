import { useState } from "react";

import bugImgUrl from "../../assets/bug.svg";
import ideaImgUrl from "../../assets/idea.svg";
import thoughtImgUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackWidgets = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImgUrl,
            alt: 'Imagem de um inseto',
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImgUrl,
            alt: 'Imagem de uma lâmpada',
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImgUrl,
            alt: 'Imagem de uma balão de pensamento',
        }
    }
};

export type FeedbackType = keyof typeof feedbackWidgets;

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {!feedbackType ? (
               <FeedbackTypeStep onFeedBackTypeChanged={setFeedbackType} />
            ) : (
                <FeedbackContentStep feedBackType={feedbackType}/>
            )}
            <footer>
                Feito com 💜 pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}