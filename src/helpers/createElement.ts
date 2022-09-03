export function e<K extends keyof HTMLElementTagNameMap>(tagName: K) {
    return document.createElement(tagName)
}