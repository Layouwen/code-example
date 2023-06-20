fn main() {
    println!("---------------");
    {
        let s = String::from("hello");
        let ss = add_suffix(s);
        println!("ss: {}", ss);
    }

    println!("---------------");
    {
        let v1 = Box::new(1);
        println!("{}", *v1 + 1);

        let v2 = add_one(v1);
        println!("{}", *v2);

        let mut v3 = Box::new(1);
        add_one_ref(&mut v3);
        println!("{}", *v3);
    }

    println!("---------------");
    {
        let a = [1, 2, 3, 4];
        let b = a;
        println!("{:?}", a);
        println!("{:?}", b);

        let c = Box::new([1, 2, 3, 4]);
        let d = c;
        // println!("{:?}", c); // 所有者转移了
        println!("{:?}", d);
    }
}

fn add_suffix(mut s: String) -> String {
    s.push_str(", world!");
    s
}

fn add_one(mut v: Box<i32>) -> Box<i32> {
    *v += 1;
    v
}

fn add_one_ref(v: &mut Box<i32>) {
    **v += 1;
}
