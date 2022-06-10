import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
    return (
        <Popover.Button className='right-5 top-5 absolute text-zinc-400 hover:text-zinc-100' title="Fechar formulário de feedback">
            <X weight="bold" className="h-5 w-5" />
        </Popover.Button>
    )
}