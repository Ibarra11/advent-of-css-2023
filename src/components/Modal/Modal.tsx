import { Dialog, Heading, Modal, ModalOverlay } from "react-aria-components";
import { VariantProps, cva } from "class-variance-authority";

const modalVariants = cva(
  [
    "w-full max-w-lg overflow-hidden rounded-2xl p-6 py-8 text-left align-middle shadow-xl",
  ],
  {
    variants: {
      status: {
        invited: "bg-supernova ",
        accepted: "bg-spanishGreen",
        declined: "bg-fireEngineRed",
      },
    },
  }
);

type Props = React.PropsWithChildren<
  VariantProps<typeof modalVariants> & {
    title: string;
  }
>;
export default function SecretSantaModal({ status, title, children }: Props) {
  return (
    <ModalOverlay
      isOpen={true}
      className={({ isEntering, isExiting }) => `
          fixed inset-0 z-10 overflow-y-auto bg-black/80 flex min-h-full items-center justify-center p-4 text-center
          ${isEntering ? "animate-in fade-in duration-300 ease-out" : ""}
          ${isExiting ? "animate-out fade-out duration-200 ease-in" : ""}
        `}
    >
      <Modal
        className={({ isEntering, isExiting }) => `
            ${modalVariants({ status })}
            ${isEntering ? "animate-in zoom-in-95 ease-out duration-300" : ""}
            ${isExiting ? "animate-out zoom-out-95 ease-in duration-200" : ""}
          `}
      >
        <Dialog role="alertdialog" className="outline-none relative text-white">
          {({ close }) => (
            <>
              <Heading
                slot="title"
                className="text-xl text-center font-semibold leading-6 my-0 mb-4 "
              >
                {title}
              </Heading>
              <div className="w-6 h-6  absolute right-0 top-0 stroke-2">
                {/* <AlertIcon size="M" /> */}
              </div>
              <div className="flex justify-center">
                <div className=" w-3/4">{children}</div>
              </div>
              <div className="mt-6 flex justify-center gap-4">
                <button
                  className="uppercase decoration-white underline underline-offset-2"
                  onClick={() => close()}
                >
                  Cancel
                </button>
                <button
                  className="uppercase bg-black px-6 py-2 rounded-full "
                  onClick={() => close()}
                >
                  remove
                </button>
              </div>
            </>
          )}
        </Dialog>
      </Modal>
    </ModalOverlay>
  );
}
