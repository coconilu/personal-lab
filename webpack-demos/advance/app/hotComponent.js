export default function makeHeader() {
  const hotComponent = document.createElement("header");
  hotComponent.innerText = "hello hot module replace!";
  return hotComponent;
}
