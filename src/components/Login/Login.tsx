import Input from "../Input/Input";

export default function Login() {
  return (
    <>
      <form className="space-y-4 mb-3" onSubmit={(e) => e.preventDefault()}>
        <Input label="Username" type="text" />
        <Input label="Password" type="password" />
        <button className=" w-full font-handwriting text-3xl font-bold text-blackPearl bg-supernova h-20 rounded-full">
          Submit
        </button>
      </form>
      <a className="font-sans text-base text-blackPearl text-center underline-offset-2 underline">
        Need an Account?
      </a>
    </>
  );
}
