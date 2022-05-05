import {ChatTeardropDots} from 'phosphor-react';
import { Popover } from "@headlessui/react";
import { WidgetForm } from './WidgetForm/Index';

export function Widget() {
    return (
        <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>

            <Popover.Button className="
                bg-brand-500 text-white hover:bg-violet-500
                rounded-full
                px-3
                h-12
                flex items-center
                group
            ">
                <h1><ChatTeardropDots className="h-6 w-6"/></h1>

                <span className="
                    max-w-0
                    overflow-hidden
                    group-hover:max-w-xs
                    transition-all duration-700 ease-liner
                ">
                    <span className="pl-2"/>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}
