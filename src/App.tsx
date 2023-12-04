import AvatarWithSantaHat from "./components/Avatar/AvatarWithSantaHat";
import AvatarWithStatus from "./components/Avatar/AvatarWithStatus";
import Icon from "./components/Icon/Icon";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="min-h-screen grid place-content-center bg-slate-600">
      <div className=" w-96">
        <form onSubmit={(e) => e.preventDefault()}>
          <Input label="Email" type="email" />
        </form>
      </div>
    </div>
  );
}

export default App;
