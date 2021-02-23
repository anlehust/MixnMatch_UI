export function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
  }

export function scrollPrevious() {
    document.getElementsByClassName('exhibition-list')[0].scrollBy(-260,0);
}

export function scrollNext(){
    document.getElementsByClassName('exhibition-list')[0].scrollBy(260,0);
}