/* This example requires Tailwind CSS v2.0+ **/
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import React, { Fragment, useState } from "react"
import '../App.css';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SelectMenu({ defaultOption, options,onChange,changeTypeOfCarpet }) {
  const [ selectedOption, setSelectedOption ] = useState(defaultOption)

  function selectOption(option){
    setSelectedOption(option)
    changeTypeOfCarpet(option.value)
  }

  return (
    <Menu as="div" className="relative inline-block text-left z-50 ">
      <div>
        <Menu.Button  onChange={onChange} className="inline-flex justify-center max-w-32 h-9 w-32 outline-none truncate rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  focus:ring-offset-2  ">
          {selectedOption ? selectedOption.label : 'Select'}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items style={{zIndex: 99}}  className=" origin-top-right absolute left-0 mt-2 w-32  h-8 md:h-18  z-50 overflow-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none  ">
          {options.map((option, idx) => (
            <div key={idx} className={"py-"+idx + " "}>
              <Menu.Item  key={idx} onClick={()=> {selectOption(option)}}>
                {({ active }) => (
                  <a
                    href="/#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 ' : 'text-gray-700',
                      'block px-4 py-2 text-sm '
                    )}
                  >
                    {option.label}
                  </a>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
