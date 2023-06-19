fn main() {
    println!(
        "{}",
        add(
            {
                let a = 1;
                a + 1
            },
            {
                let a = 0;
                4
            },
        )
    );
}

fn add(a: i32, b: i32) -> i32 {
    a + b
}
