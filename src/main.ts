function makeDraggable(element: HTMLElement) {
  element.addEventListener("pointerdown", () => {
    element.style.cursor = "move";
  });
  element.addEventListener("pointerup", () => {
    element.style.cursor = "unset";
  });
}

window.addEventListener("DOMContentLoaded", () => {
  makeDraggable(document.getElementById("draggable")!);
});

