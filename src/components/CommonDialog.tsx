import { ReactNode } from "react";
import { DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";

type CommonDialogPropType<T> = {
  title: string;
  buttonText: string;
  controlsList: T[];
  renderItem: (item: T) => ReactNode;
};

export default function CommonDialog<T>({
  title,
  buttonText,
  controlsList,
  renderItem,
}: CommonDialogPropType<T>) {
  return (
    <DialogContent className="min-w-[900px]">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>

      <div className="mt-2 grid grid-cols-3 gap-4">
        {controlsList.map((item) => renderItem(item))}
      </div>
      <div className="flex justify-end mt-3">
        <Button variant="default" className="p-4">
          {buttonText}
        </Button>
      </div>
    </DialogContent>
  );
}
