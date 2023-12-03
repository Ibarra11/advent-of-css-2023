import AvatarWithSantaHat from "./components/Avatar/AvatarWithSantaHat";
import AvatarWithStatus from "./components/Avatar/AvatarWithStatus";
import Icon from "./components/Icon/Icon";

function App() {
  return (
    <div className="min-h-screen bg-slate-600">
      <Icon id="check" size={24} />
      <AvatarWithSantaHat size={"md"} src="/avatars/avatar-02.png" />
      <AvatarWithStatus
        size={"md"}
        src="/avatars/avatar-02.png"
        status="invited"
      />
    </div>
  );
}

export default App;
