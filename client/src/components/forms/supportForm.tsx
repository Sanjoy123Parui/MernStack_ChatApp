import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Label } from "../ui/label.tsx";
import { Input } from "../ui/input.tsx";
import { Textarea } from "../ui/textarea.tsx";
import { Button } from "../ui/button.tsx";
import { supportFormProps } from "../models/contentModel.ts";

// define Support Form component
const SupportForm: React.FC<supportFormProps> = ({
  supportState,
  supportFormAction,
  supportIsPending,
}) => {
  // destruct data
  const { success, errors }: any = supportState;

  // declare state manage of phone number with country code
  const [phone, setPhone] = useState<any>(supportState.data.phone || "");
  const [countryCode, setCountryCode] = useState<string>("us");

  // define function for get support validation
  const getSupportErrors = (fieldName: any) => errors?.[fieldName] || "";

  // declare variables of formFields
  const formFields: any = [
    {
      fieldLabel: "First Name",
      fieldType: "text",
      fieldName: "first_name",
    },

    {
      fieldLabel: "Last Name",
      fieldType: "text",
      fieldName: "last_name",
    },

    {
      fieldLabel: "Phone",
      fieldType: "phone",
      fieldName: "phone",
    },

    {
      fieldLabel: "Feedback",
      fieldType: "textarea",
      fieldName: "messages",
    },
  ];

  // here will be appear useEffect hook
  useEffect(() => {
    // here was component mount
    const intervalId: any = setInterval(() => {}, 1000);
    if (success) console.log(supportState);
    // here was component will unmount with cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, [success, supportState]);

  return (
    <>
      <form
        action={(formData: FormData) => {
          formData.set("phone", phone);
          supportFormAction(formData);
          setPhone(
            `+${phone.startsWith("+") ? phone.split("+")[1].slice(0, 2) : ""}`
          );
        }}
        className="space-y-6"
      >
        {/* start this div for first_name, last_name fields */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {formFields.slice(0, 2).map((fields: any, i: any) => {
            const { fieldLabel, fieldType, fieldName }: any = fields;

            return (
              <div key={i} className="relative mb-2">
                {fieldType === "text" && (
                  <>
                    <Label
                      className="block text-gray-700 text-base lg:text-lg 
                    font-medium mb-2"
                    >
                      {fieldLabel}
                    </Label>
                    <div className="relative">
                      <Input
                        type={fieldType}
                        name={fieldName}
                        className={`shadow appearance-none border-[1px] ${
                          getSupportErrors(fieldName)
                            ? `border-red-300 focus:ring-red-700`
                            : `border-indigo-300 focus:ring-indigo-400`
                        } rounded-xl w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring focus:ring-gray-700`}
                      />
                    </div>
                    {getSupportErrors(fieldName) && (
                      <p className="text-red-500 text-sm lg:text-base">
                        {getSupportErrors(fieldName)}
                      </p>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
        {/* end div */}

        {/* start this div for phone, message fields */}
        <div className="flex flex-col">
          {formFields.slice(2).map((fields: any, i: any) => {
            const { fieldLabel, fieldType, fieldName }: any = fields;

            return (
              <div key={i} className="relative mb-2">
                {fieldType === "phone" && (
                  <>
                    <Label
                      className="block text-gray-700 text-base lg:text-lg 
                    font-medium mb-2"
                    >
                      {fieldLabel}
                    </Label>
                    <div className="relative">
                      <PhoneInput
                        country={countryCode}
                        value={phone}
                        onChange={(value: any, data: any) => {
                          setPhone(`+${value}`);
                          setCountryCode(data.countryCode);
                        }}
                        inputProps={{
                          name: fieldName,
                          type: fieldType,
                          required: true,
                        }}
                        containerClass="!w-full"
                        inputClass={`!shadow !appearance-none !border-[1px] ${
                          getSupportErrors(fieldName)
                            ? `!border-red-300 !focus:ring-red-700`
                            : `!border-indigo-300 !focus:ring-indigo-400`
                        } !rounded-xl !w-full !h-10 !sm:h-11 !md:h-12 !py-2 !pl-12 !pr-4 !text-gray-900 !leading-tight !focus:outline-none !focus:ring !focus:ring-gray-700`}
                      />
                    </div>
                    {getSupportErrors(fieldName) && (
                      <p className="text-red-500 text-sm lg:text-base">
                        {getSupportErrors(fieldName)}
                      </p>
                    )}
                  </>
                )}

                {fieldType === "textarea" && (
                  <>
                    <Label
                      className="block text-gray-700 text-base lg:text-lg 
                    font-medium mb-2"
                    >
                      {fieldLabel}
                    </Label>
                    <div className="relative">
                      <Textarea
                        name={fieldName}
                        className={`shadow appearance-none border-[1px] ${
                          getSupportErrors(fieldName)
                            ? `border-red-300 focus:ring-red-700`
                            : `border-indigo-300 focus:ring-indigo-400`
                        } rounded-xl w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring focus:ring-gray-700`}
                      />
                    </div>
                    {getSupportErrors(fieldName) && (
                      <p className="text-red-500 text-sm lg:text-base">
                        {getSupportErrors(fieldName)}
                      </p>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
        {/* end div */}

        {/* start this div for send feedback button */}
        <div className="flex items-center justify-between">
          <Button
            type="submit"
            disabled={supportIsPending}
            className={`w-full bg-gray-700 hover:bg-gray-950 text-white font-bold rounded-2xl py-2 px-4 focus:outline-none focus:shadow-outline`}
          >
            {supportIsPending ? "Please wait..." : "Send"}
          </Button>
        </div>
        {/* end div */}
      </form>
    </>
  );
};

// exporting Support form component
export default SupportForm;
