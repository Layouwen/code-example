fn main() {
    let s = String::from("hello");
    let ss = add_suffix(s);
    println!("ss: {}", ss);
}

fn add_suffix(mut s: String) -> String {
    s.push_str(", world!");
    s
}
