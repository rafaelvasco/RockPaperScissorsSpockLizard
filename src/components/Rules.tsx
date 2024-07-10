import { useRef } from 'react';
import rulesImg from '@/assets/rps/image-rules-bonus.svg';

const Rules = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <div className="p-10 self-end">
        <button
          className="btn w-[200px] btn-primary rounded-lg btn-outline"
          onClick={() => modalRef.current?.showModal()}
        >
          RULES
        </button>
      </div>
      <dialog
        ref={modalRef}
        id="rules-modal"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-primary btn-sm btn-circle absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-wh">RULES</h3>
          <div className="w-full h-full flex justify-center items-center p-10">
            <img className="select-none" src={rulesImg} alt="Rules" />
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Rules;
