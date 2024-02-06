"use client";

import { useTransition } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { createProduct, deleteProduct } from "@/lib/actions";
import { cn } from "@/lib/utils";
import LoadingDots from "./loading-dots";
import { useRef } from "react";
import { toast } from "sonner";

export function ActionsForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  return (
    <form
      ref={formRef}
      action={(data) =>
        createProduct(data).then(() => {
          toast.success("Product created!");
          formRef.current?.reset();
          router.refresh();
        })
      }
      className="flex flex-col bg-white rounded-md p-4 w-full max-w-lg space-y-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Enter the name for product..."
        required
        className="h-10 border border-gray-300 rounded-md p-2"
      />
      <input
        type="text"
        name="description"
        placeholder="Enter Description..."
        required
        className="h-10 border border-gray-300 rounded-md p-2"
      />
      <FormButton />
    </form>
  );
}

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        "bg-green-500 transition-all border border-transparent text-white rounded-md p-2",
        pending
          ? "border-gray-300 bg-gray-200 cursor-not-allowed"
          : "hover:bg-green-600 active:bg-green-700"
      )}
    >
      {pending ? <LoadingDots /> : <p>Add To Database</p>}
    </button>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  let [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <button
      onClick={() =>
        startTransition(() =>
          deleteProduct(id).then(() => {
            toast.success("Product deleted!");
            router.refresh();
          })
        )
      }
      disabled={isPending}
      className={cn(
        "bg-red-500 transition-all border border-transparent text-white rounded-md w-20 py-2",
        isPending
          ? "border-gray-300 bg-gray-200 cursor-not-allowed"
          : "hover:bg-red-600 active:bg-red-700"
      )}
    >
      {isPending ? <LoadingDots /> : <p>Delete</p>}
    </button>
  );
};
