"use client"

import { createContext, useCallback, useContext } from "react"
import { useState } from "react"

// const Toggle = ({ initialValue }) => {
//   const [isOn, setIsOn] = useState(initialValue)
//   return (
//     <div>
//       <button onClick={() => setIsOn(!isOn)}>Switch</button>
//       {isOn ? <span>On</span> : <span>Off</span>}
//     </div>
//   )
// }

const ToggleContext = createContext(false)

const ToggleCompound = ({ children, initialValue }) => {
  const [isOn, setIsOn] = useState(initialValue)

  return (
    <ToggleContext.Provider value={{ isOn, setIsOn }}>
      <div>{children}</div>
    </ToggleContext.Provider>
  )
}

ToggleCompound.TextStatus = function TextStatus() {
  const { isOn } = useContext(ToggleContext)
  return <span>{isOn ? "on" : "off"}</span>
}

ToggleCompound.SwitchButton = function SwitchButton() {
  const { setIsOn } = useContext(ToggleContext)

  return <button onClick={() => setIsOn((prev) => !prev)}>switch</button>
}

const MenuContext = createContext(false)

const MenuAccordion = ({ children }) => {
  const [activeGroup, setActiveGroup] = useState(null)

  const switchGroup = useCallback((groupTitle) => {
    setActiveGroup((activeGroup) =>
      activeGroup === groupTitle ? null : groupTitle
    )
  }, [])

  return (
    <MenuContext.Provider value={{ activeGroup, switchGroup }}>
      {children}
    </MenuContext.Provider>
  )
}

MenuAccordion.Group = function Group({ children, title }) {
  const { activeGroup, switchGroup } = useContext(MenuContext)
  return (
    <div>
      <button
        onClick={() => switchGroup(title)}
        style={{
          border: "1px solid white",
        }}
      >
        {title}
      </button>
      {activeGroup === title && <div>{children}</div>}
    </div>
  )
}

MenuAccordion.Item = function Item({ title }) {
  return <div>{title}</div>
}

export const CompoundComponentPage = () => {
  return (
    <div>
      {/* <Toggle initialValue={false} /> */}
      <ToggleCompound initialValue={false}>
        <ToggleCompound.SwitchButton />
        <ToggleCompound.TextStatus />
      </ToggleCompound>

      <MenuAccordion>
        <MenuAccordion.Group title="Group 1">
          <MenuAccordion.Item title="Item 1" />
          <MenuAccordion.Item title="Item 2" />
        </MenuAccordion.Group>
        <MenuAccordion.Group title="Group 2">
          <MenuAccordion.Item title="Item 1" />
          <MenuAccordion.Item title="Item 2" />
        </MenuAccordion.Group>
      </MenuAccordion>
    </div>
  )
}
