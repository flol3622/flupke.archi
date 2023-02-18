type IntroCardProps = {
  title: string;
  color: string;
  children: any;
  position?: "end" | "start";
  start?: number;
};

export default function IntroCard(props: IntroCardProps) {
  return (
    <div
      className={`col-start-3 col-end-13 row-span-2 row-start-${props.start} pb-2 pt-1`}
    >
      <div
        className="flex"
        style={{ justifyContent: `${props.position || "start"}` }}
      >
        <h2 className={`border-b-2 border-dotted ${props.color} font-title`}>
          {props.title}
        </h2>
      </div>
      {props.children}
    </div>
  );
}
