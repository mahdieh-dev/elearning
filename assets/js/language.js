function onLanguageClick(x) {
    const rustCode = `//fn main() {
    // Statements here are executed when the compiled binary is called.

    // Print text to the console.
    println!("Hello World!");
}`

    const goCode = `package main
import "fmt"
func main() {
    fmt.Println("hello world")
}`
    const pythonCode = `# This program prints Hello, world!

print('Hello, world!')`
    let code = ''
    if (x && x === 'Python') {
        code = pythonCode
    } else if (x && x === 'Go') {
        code = goCode
    } else {
        code = rustCode
    }

    document.getElementById('language-title').innerHTML = `<p>${x ?? 'Rust'}</p>`
    document.getElementById('code-snippet-box').innerHTML = `<pre><code id="code-snippet">${code}</code></pre>`
}

const languagePassed = new URL(document.location).searchParams.get("language")
onLanguageClick(languagePassed ?? 'Rust')

function copyToClipboard() {
    navigator.clipboard.writeText(document.getElementById('code-snippet').innerText).then(r => {
        console.log("Copied the code to the clipboard!", r)
    });
}