function Button(props) {
  let classNames = "border Dark:border-gray-300 border-gray-500 rounded-full px-3 text-sm font-bold ";
  if (props.outline) {
    classNames += "text-gray-500 dark:text-gray-300 ";
  } else {
    classNames += "bg-verite_light-brighter dark:verite_light_brightest border border-verite_light-brighter dark:border-verite_dark-brighter text-gray-600 dark:text-gray-600 ";
  }
  return (
    <button {...props} className={classNames + props.className} />
  );
}

export default Button;