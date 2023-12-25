import FileUpload from "../FileUpload/FileUpload";
import Input from "../Input/Input";
import LayoutTitle from "../LayoutTitle/LayoutTitle";

export default function InvitationAcception() {
  return (
    <div className="mt-14">
      <p className="font-handwriting font-bold text-3xl mb-4 text-white text-center">
        Awesome
      </p>
      <LayoutTitle>Sign Up</LayoutTitle>
      <form className="mt-4 space-y-4">
        <div className="space-y-6">
          <Input type="password" label="Password" />
          <FileUpload label="Avatar" />
        </div>

        <button className=" w-full h-20 rounded-full bg-supernova text-black font-handwriting font-bold text-3xl">
          Submit
        </button>
      </form>
    </div>
  );
}
