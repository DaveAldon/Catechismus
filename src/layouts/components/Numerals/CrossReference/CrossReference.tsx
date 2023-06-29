enum CrossReferenceType {
  blue = 'blue',
  red = 'red',
  teal = 'teal',
  fuchsia = 'fuchsia',
  gray = 'gray',
}
interface CrossReferenceProps {
  children: React.ReactNode;
  type: 'blue' | 'red' | 'teal' | 'fuchsia' | 'gray';
}
export const CrossReference = (props: CrossReferenceProps) => {
  let background, text, darkBackground, darkText;

  switch (props.type) {
    case CrossReferenceType.blue:
      background = 'bg-blue-100';
      text = 'text-blue-900';
      darkBackground = 'dark:bg-blue-100';
      darkText = 'dark:text-blue-900';
      break;
    case CrossReferenceType.red:
      background = 'bg-rose-100';
      text = 'text-rose-900';
      darkBackground = 'dark:bg-rose-100';
      darkText = 'dark:text-rose-900';
      break;
    case CrossReferenceType.teal:
      background = 'bg-teal-100';
      text = 'text-teal-900';
      darkBackground = 'dark:bg-teal-100';
      darkText = 'dark:text-teal-900';
      break;
    case CrossReferenceType.fuchsia:
      background = 'bg-fuchsia-100';
      text = 'text-fuchsia-900';
      darkBackground = 'dark:bg-fuchsia-100';
      darkText = 'dark:text-fuchsia-900';
      break;
    case CrossReferenceType.gray:
      background = 'bg-stone-200';
      text = 'text-stone-800';
      darkBackground = 'dark:bg-stone-200';
      darkText = 'dark:text-stone-800';
  }
  return (
    <div className="mx-1 inline-block">
      <div
        className={`flex h-5 w-fit items-center justify-center rounded-md ${background} ${darkBackground} px-2 font-karla`}>
        <p className={`font-bold ${text} ${darkText}`}>{props.children}</p>
      </div>
    </div>
  );
};
