import Icon from "../Icon/Icon";
import Input from "../Input/Input";

export default function InviteForm() {
  return (
    <form className="flex self-start items-center gap-5 bg-spanishGreen p-4">
      <div className="flex-1 ">
        <Input type="text" label="Name" />
      </div>
      <div className="flex-1">
        <Input type="email" label="Email" />
      </div>

      <button className="grid place-content-center size-16 rounded-full bg-supernova text-black">
        <Icon id="plus" size={24} />
      </button>
    </form>
  );
}
