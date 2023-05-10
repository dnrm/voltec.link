import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";
import { toast } from "react-hot-toast";

const DeleteModal = ({ link, closeModal }) => {
    console.log(link)
  const router = useRouter();
  const deleteLink = async () => {
    const res = await fetch(`/api/links/delete-link`, {
      body: JSON.stringify({
        _id: link._id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });

    if (res.status === 200) {
      toast.success("Link deleted!");
      closeModal();
      router.push("/dashboard/links");
    } else {
      toast.error("Something went wrong.");
    }
  };

  return (
    <motion.div
      className="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <div className="bg-white w-[35em] max-w-2xl m-5 flex flex-col gap-8 rounded-2xl">
        <div className="heading relative flex justify-start items-end h-24 bg-[#C6E2F1] rounded-t-2xl">
          <div className="title-and-close z-10 p-5 flex justify-between items-center w-full">
            <h1 className="text-5xl font-bold tracking-tight text-headings dark:text-headings-dark">
              Delete link?
            </h1>
            <div className="close-button cursor-pointer" onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div className="bg-image rounded-t-2xl h-full overflow-hidden absolute top-0 opacity-30">
            <Image
              src="/dashboard-bg.png"
              alt="Header background image"
              className="w-full"
              width={1080}
              height={1080}
            />
          </div>
        </div>
        <div className="px-8 text-neutral-600 text-xl">
          <p>
            Delete &quot;<span className="font-bold italic">{link.name}</span>
            &quot;?
          </p>
          <p>The link will be lost forever. (a long time!)</p>
        </div>
        <div className="buttons gap-4 px-8 pb-8">
          <button
            onClick={deleteLink}
            className="w-full bg-red-100 text-red-400 border-red-300 hover:bg-red-200 border-2 font-semibold cursor-pointer text-center py-3 px-16 rounded-lg text-xl inline-block"
          >
            Confirm deletion
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DeleteModal;
