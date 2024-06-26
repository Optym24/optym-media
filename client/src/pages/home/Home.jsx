import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
import "./home.scss"
import { AuthContext } from "../../context/authContext"
import { useContext } from "react"

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser)
  return (
    <div style={{
      backgroundColor: 'black', 
      color: '#fff'}} className="home">
      <Stories />
      <Share />
      <Posts userId={currentUser.id} />
    </div>
  )
}

export default Home