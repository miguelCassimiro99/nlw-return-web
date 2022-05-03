import {ChatTeardropDots} from 'phosphor-react';
import { Popover } from "@headlessui/react";

export function Widget() {


    return (
        <Popover className="absolute bottom-4 right-5">
            <Popover.Panel className="bg-indigo-400 text-black rounded-full text-center">Hello world</Popover.Panel>

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
                    transition-all duration-500 ease-liner
                ">
                    <span className="pl-2"/>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}
