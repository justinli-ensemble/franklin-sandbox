export default function decorate(block) {
    const text = block.children[0];
    const button = block.children[1];

    text.children[0].classList.add('text');
    console.log(text);
    console.log(button);
}