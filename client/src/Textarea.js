function Textarea (props) {
  return (
    <textarea {...props} className={"bg-verite_light-brightest dark:bg-verite_dark-brightest text-gray-600  dark:text-gray-300 p-2  rounded-md block "+props.className} />
  );
}

export default Textarea;