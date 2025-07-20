

const ScrollLink = ({to, name, className, children}) => {
  return (
    <a href={to} className={className}>
      {name}
      {children}
    </a>
  );
};

export default ScrollLink;