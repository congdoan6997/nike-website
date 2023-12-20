const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center
    gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
    ${backgroundColor ? `${backgroundColor}` : `bg-coral-red`}
    ${borderColor ? `${borderColor}` : `border-coral-red`}
    ${fullWidth ? `w-full` : `w-fit`}
    ${textColor ? `${textColor}` : `text-white`}`}
    >
      {label}
      {iconUrl && <img src={iconUrl} alt="icon" />}
    </button>
  )
}

export default Button
