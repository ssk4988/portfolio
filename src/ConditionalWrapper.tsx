// https://blog.hackages.io/conditionally-wrap-an-element-in-react-a8b9a47fab2

const ConditionalWrapper = ({ condition, wrapper, children }: any) => 
  condition ? wrapper(children) : children;

export default ConditionalWrapper;
