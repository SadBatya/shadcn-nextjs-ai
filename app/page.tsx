import { DialogRequestForm } from "@/widgets"

export default function Page() {
  return (
    <div className="flex h-[calc(100vh-68px)] w-screen flex-col items-center justify-center overflow-hidden">
      <div className="mb-10 flex flex-col gap-8">
        <h1 className="text-4xl font-bold">
          Services for traveling around Russia
        </h1>
        <DialogRequestForm />
      </div>
    </div>
  )
}
