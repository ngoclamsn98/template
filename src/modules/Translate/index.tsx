
import { Select, SelectItem } from "@nextui-org/react";
import { languages } from "./constants";

export const Translate = () => {
    return (
        <div className="flex w-[80%] m-auto flex-wrap md:flex-nowrap gap-4 mt-10">
            <Select
                color={"primary"}
                label="Select translate type" 
                placeholder="Select an translate type"
                defaultSelectedKeys={[languages[0].value]}
                className="max-w-xs"
            >
            {languages.map((language) => (
                <SelectItem key={language.value} value={language.value}>
                    {language.label}
                </SelectItem>
            ))}
            </Select>
        </div>
    );
};
