import React from "react"
import style from "./Tablist.module.scss"
const Tablist = ({
  selectedTab,
  setShowTab,
}: {
  selectedTab: number
  setShowTab: (index: number) => void
}) => {
  const tabs: string[] = ["All", "My favorites", "Popular"]
  return (
    <div className={style.tabsWrap}>
      <div className={style.сontainer}>
        {tabs.map((el, index) => (
          <React.Fragment key={index}>
            <div
              className={
                selectedTab == index
                  ? `${style.tabs} ${style.tabsActive}`
                  : style.tabs
              }
              key={index}
              onClick={() => setShowTab(index)}
            >
              {el}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
export default Tablist
