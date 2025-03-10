import { cn } from "../../tools/cn";

type PropsType = {
  subtitle?: string;
  title: string;
  margin: "left" | "center";
};

export const SubTitle = ({ subtitle, title, margin }: PropsType) => {
  return (
    <div
      className={cn(
        "flex flex-col  gap-10 mb-16",
        margin === "center" ? "justify-center" : "justify-start"
      )}
    >
      <div
        className={
          margin === "center"
            ? "flex flex-col justify-center text-center "
            : "text-left"
        }
      >
        {subtitle && (
          <h1 className="text-base  font-light tracking-widest uppercase text-highlightColor">
            {subtitle}
          </h1>
        )}
        <p
          className={
            "text-3xl lg:text-5xl font-extrabold italic tracking-tight text-primaryColor "
          }
        >
          {title}
        </p>
      </div>
      <div
        className={cn(
          "flex flex-row items-center  gap-2 ",
          margin === "center" ? "justify-center" : "justify-start"
        )}
      >
        <span className="w-4 h-4 bg-highlightColor rounded-full"></span>
        <span className="w-4 h-4 bg-primaryColor rounded-full"></span>
        <span className="w-4 h-4 bg-secondaryColor rounded-full"></span>
        <span className="w-4 h-4 bg-hoverColor rounded-full"></span>
      </div>
    </div>
  );
};
