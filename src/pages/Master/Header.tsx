import { useParams } from "react-router-dom";
import { capitalize, cn } from "@/lib/utils";
import { CirclePlus, CircleX, SaveAll, Settings } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import CommonDialog from "@/components/CommonDialog";
import { useState } from "react";
import { v4 as uid } from "uuid";
import { ControlsType } from "@/types";
import { Input } from "@/components/ui/input";

const Header = () => {
  const { formName } = useParams();

  const [controlsList] = useState<ControlsType[]>([
    {
      id: uid(),
      type: "text",
      name: "companyName",
      label: "Company Name",
      autoFocus: true,
      value: "",
      maxLength: 40,
    },
    {
      id: uid(),
      type: "tel",
      name: "mobileNo",
      label: "Mobile No",
      autoFocus: false,
      value: "",
      maxLength: 10,
    },
    {
      id: uid(),
      type: "text",
      name: "emailId",
      label: "Email Id",
      autoFocus: false,
      value: "",
      maxLength: 30,
    },
    {
      id: uid(),
      type: "text",
      name: "address1",
      label: "Address 1",
      autoFocus: false,
      value: "",
      maxLength: 50,
    },
    {
      id: uid(),
      type: "text",
      name: "address2",
      label: "Address 2",
      autoFocus: false,
      value: "",
      maxLength: 50,
    },
    {
      id: uid(),
      type: "text",
      name: "city",
      label: "City",
      autoFocus: false,
      value: "",
      maxLength: 20,
    },
    {
      id: uid(),
      type: "number",
      name: "pincode",
      label: "Pincode",
      autoFocus: false,
      value: "",
      maxLength: 6,
    },
    {
      id: uid(),
      type: "text",
      name: "state",
      label: "State",
      autoFocus: false,
      value: "",
      maxLength: 20,
    },
    {
      id: uid(),
      type: "text",
      name: "country",
      label: "Country",
      autoFocus: false,
      value: "",
      maxLength: 20,
    },
  ]);

  return (
    <div className={cn("flex justify-between items-center mt-1")}>
      <h3 className="font-medium text-lg">{capitalize(formName)} Master</h3>
      <div className="flex gap-1 text-sm bg-white rounded-md">
        <Dialog>
          <DialogTrigger asChild>
            <div className="flex items-center gap-1 p-2 cursor-pointer hover:bg-slate-50">
              <CirclePlus size={17} />
              <p className="text-sm">New</p>
            </div>
          </DialogTrigger>
          <CommonDialog
            title="Add New Role"
            buttonText="Add Role"
            controlsList={controlsList}
            renderItem={(item) => (
              <Input
                key={item.id}
                type={item.type}
                placeholder={item.label}
                maxLength={item.maxLength}
              />
            )}
          />
        </Dialog>
        <div className="flex items-center gap-1 p-2 cursor-pointer hover:bg-slate-50">
          <SaveAll size={17} />
          <p className="text-sm">Save</p>
        </div>
        <div className="flex items-center gap-1 p-2 cursor-pointer hover:bg-slate-50">
          <Settings size={17} />
          <p className="text-sm">Setting</p>
        </div>
        <div className="flex items-center gap-1 p-2 cursor-pointer hover:bg-slate-50">
          <CircleX size={17} />
          <p className="text-sm">Close</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
