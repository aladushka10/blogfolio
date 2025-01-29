import MyFavorite from "../../../Pages/MyFavorite/MyFavorite"
import PostCard from "../../PostCard/PostCard"

const TabContent = ({ selectedTab }: { selectedTab: number }) => {
  const tabsContent: React.ReactNode[] = [<PostCard />, <MyFavorite />]

  return <>{tabsContent[selectedTab]}</>
}
export default TabContent
