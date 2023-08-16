export function ScrollTo(targetId : string) {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
}