const sizeMapping = {
  sm: "w-8 h-8",
  base: "w-12 h-12",
  lg: "w-16 h-16",
};

function Avatar(props) {
  const { size = "base", className, ...restProps } = props;

  return (
    <img
      className={`rounded-full ${sizeMapping[size]} `}
      src="https://secure.meetupstatic.com/photos/member/6/a/0/0/thumb_289767136.jpeg"
      alt="avatar"
    />
  );
}

export default Avatar;
