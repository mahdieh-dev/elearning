function onLanguageClick(x) {
  const rustCode = `struct Sheep { naked: bool, name: &'static str }

    trait Animal {
        fn new(name: &'static str) -> Self;
    
        fn name(&self) -> &'static str;
        fn noise(&self) -> &'static str;
    
        fn talk(&self) {
            println!("{} says {}", self.name(), self.noise());
        }
    }
    
    impl Sheep {
        fn is_naked(&self) -> bool {
            self.naked
        }
    
        fn shear(&mut self) {
            if self.is_naked() {
                println!("{} is already naked...", self.name());
            } else {
                println!("{} gets a haircut!", self.name);
    
                self.naked = true;
            }
        }
    }
    
    impl Animal for Sheep {
        fn new(name: &'static str) -> Sheep {
            Sheep { name: name, naked: false }
        }
    
        fn name(&self) -> &'static str {
            self.name
        }
    
        fn noise(&self) -> &'static str {
            if self.is_naked() {
                "baaaaah?"
            } else {
                "baaaaah!"
            }
        }
        
        fn talk(&self) {
            println!("{} pauses briefly... {}", self.name, self.noise());
        }
    }
    
    fn main() {
        let mut dolly: Sheep = Animal::new("Dolly");
    
        dolly.talk();
        dolly.shear();
        dolly.talk();
    }`;

  const goCode = `
    package main
    
    import (
        "fmt"
        "net/http"
    )
    
    func hello(w http.ResponseWriter, req *http.Request) {
        fmt.Fprintf(w, "hello\n")
    }
    
    func headers(w http.ResponseWriter, req *http.Request) {
    
        for name, headers := range req.Header {
            for _, h := range headers {
                fmt.Fprintf(w, "%v: %v\n", name, h)
            }
        }
    }
    
    func main() {
        http.HandleFunc("/hello", hello)
        http.HandleFunc("/headers", headers)
    
        http.ListenAndServe(":8090", nil)
    }
    `;
  const pythonCode = `
  def add(x, y):
      return x + y
  
  def subtract(x, y):
      return x - y
  
  def multiply(x, y):
      return x * y
  
  def divide(x, y):
      return x / y
  
  
  print("Select operation.")
  print("1.Add")
  print("2.Subtract")
  print("3.Multiply")
  print("4.Divide")
  
  while True:
      choice = input("Enter choice(1/2/3/4): ")
  
      if choice in ('1', '2', '3', '4'):
          try:
              num1 = float(input("Enter first number: "))
              num2 = float(input("Enter second number: "))
          except ValueError:
              print("Invalid input. Please enter a number.")
              continue
  
          if choice == '1':
              print(num1, "+", num2, "=", add(num1, num2))
  
          elif choice == '2':
              print(num1, "-", num2, "=", subtract(num1, num2))
  
          elif choice == '3':
              print(num1, "*", num2, "=", multiply(num1, num2))
  
          elif choice == '4':
              print(num1, "/", num2, "=", divide(num1, num2))
          
          next_calculation = input("Let's do next calculation? (yes/no): ")
          if next_calculation == "no":
            break
      else:
          print("Invalid Input")`;
  let code = "";
  if (x && x === "Python") {
    code = pythonCode;
  } else if (x && x === "Go") {
    code = goCode;
  } else {
    code = rustCode;
  }

  document.getElementById("language-title").innerHTML = `<p>${x ?? "Rust"}</p>`;
  document.getElementById(
    "code-snippet-box"
  ).innerHTML = `<pre><code id="code-snippet">${code}</code></pre>`;
}

const languagePassed = new URL(document.location).searchParams.get("language");
onLanguageClick(languagePassed ?? "Rust");

function copyToClipboard() {
  navigator.clipboard
    .writeText(document.getElementById("code-snippet").innerText)
    .then((r) => {
      console.log("Copied the code to the clipboard!", r);
    });
}
