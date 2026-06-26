import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
const Home = () => {
  return (
    <div
      className="
flex
w-full
max-w-6xl
sm:h-[450px]
md:h-[550px]
rounded-xl
overflow-hidden
bg-white/10
backdrop-blur-md
border border-white/20
shadow-2xl
"
    >
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
