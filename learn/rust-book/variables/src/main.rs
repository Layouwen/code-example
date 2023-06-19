fn main() {
    // 元组
    let a: (u32, f32, i32) = (1, 0.2, -44);
    let (a0, _, a2) = a;
    println!("a 0 = {}, {}", a.0, a0);
    println!("a 1 = {}", a.1);
    println!("a 2 = {}, {}", a.2, a2);

    // 数组
    let b = [1; 5];
    println!("b 0 = {}", b[0]);

    let c = [2, 1];
    let [b0, b1] = c;
    println!("{}", b0 + b1);

    // 综合
    let t = ([1; 2], [3; 4]);
    let (d, _) = t;
    println!("{}", d[0] + t.1[0]);
}
