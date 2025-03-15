import { cn } from "../../lib/utils";

type PropsType = {
  subtitle?: string;
  title: string;
  margin: "left" | "center";
};

export const SubTitle = ({ subtitle, title, margin }: PropsType) => {
  return (
    <div
      className={cn(
        "mb-16 flex flex-col gap-5",
        margin === "center" ? "justify-center" : "justify-start",
      )}
    >
      <div
        className={
          margin === "center"
            ? "flex flex-col justify-center text-center"
            : "text-left"
        }
      >
        {subtitle && (
          <h1 className="text-sm font-normal uppercase tracking-widest text-highlightColor">
            {subtitle}
          </h1>
        )}
        <h2
          className={
            "font-Inter text-3xl font-extrabold tracking-tight text-primaryColor lg:text-4xl"
          }
        >
          {title}
        </h2>
      </div>
      <div
        className={cn(
          "flex flex-row items-center gap-2",
          margin === "center" ? "justify-center" : "justify-start",
        )}
      >
        <span className="h-4 w-4 rounded-full bg-highlightColor"></span>
        <span className="h-4 w-4 rounded-full bg-primaryColor"></span>
        <span className="h-4 w-4 rounded-full bg-secondaryColor"></span>
        <span className="h-4 w-4 rounded-full bg-hoverColor"></span>
      </div>
    </div>
  );
};
