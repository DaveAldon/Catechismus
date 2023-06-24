interface VerseReferenceProps {
  children: React.ReactNode;
}
export const VerseReference = (props: VerseReferenceProps) => {
  return (
    <div className="mx-1 inline-block">
      <div
        className={`tag flex h-4 w-4 items-center justify-center rounded-md px-2 font-karla`}>
        <p className={`tag-text text-sm font-normal`}>{props.children}</p>
      </div>
    </div>
  );
};
