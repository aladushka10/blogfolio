import PostCard from "../../PostCard/PostCard"

const TabContent = ({ selectedTab }: { selectedTab: number }) => {
  const tabsContent: string[] = [
    "1Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "2beatae natus vero omnis autem repellat maxime adipisci nesciunt quod",
    "3alias laudantium minima dolorum suscipit illum quibusdam, recusandae",
  ]
  //{tabsContent[selectedTab]}
  return <PostCard />
}
export default TabContent
