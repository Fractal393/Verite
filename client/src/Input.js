function Input (props) {
  return (
    <input {...props} className={"bg-verite_light-brightest dark:bg-verite_dark-brightest text-gray-500 dark:text-gray-400 p-2 border border-verite_light-brightest dark:border-verite_dark-brightest  rounded-md block "+props.className} />
  );
}

export default Input;