
function Wrapper(props) {
  return props.children;
}

export default Wrapper
//this wrapper component received jsx element as an props like component were is defined <wrapper>it will return multiple compoenent jsx instead of div</wrapper>
//this props.children method return the another component (jsx child element) in the wrapper component main function.
//they can make a code reausable we can return multiple element on wrapper element <wrapper>tag use addForm compoent.
//because it use <div> unnecessary divs inside the components.