#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
    // 传入其他 Rectangle 类型的参数
    fn other(&self, rectangle: &Rectangle) -> u32 {
        rectangle.area()
    }
    // 设置宽度, 需要 mut 变量
    fn set_width(&mut self, width: u32) {
        self.width = width;
    }
    // 通过 new 模拟构造函数
    fn new(width: u32, height: u32) -> Rectangle {
        Rectangle { width, height }
    }
}

#[derive(Debug)]
struct A {
    w: u32,
    h: u32,
}

impl A {
    fn max(&self, other: &A) -> A {
        A {
            w: self.w.max(other.w),
            h: self.h.max(other.h),
        }
    }
    // 通过 &mut self 覆盖自身
    fn set_to_max(&mut self, other: A) {
        *self = self.max(&other);
    }

    fn set_self(&mut self) {
        *self = A { w: 999, h: 999 };
    }
}

fn main() {
    const BASE: u32 = 2;
    let rect = Rectangle {
        width: 30,
        height: 50 * BASE,
    };

    let mut rect2 = Rectangle {
        width: 1,
        height: 2,
    };

    println!("{}", rect.area());
    println!("{}", rect.other(&rect2));

    rect2.set_width(200);
    println!("{:#?}", rect2.area());

    Rectangle::set_width(&mut rect2, 100);
    println!("{:#?}", rect2.area());

    let rect3 = Rectangle::new(50, 60);
    println!("{:#?}", rect3.area());

    let mut a = A { w: 1, h: 2 };
    let b = A { w: 3, h: 4 };
    a.set_to_max(b);
    println!("{:#?}", a);
    a.set_self();
    println!("{:#?}", a);

    {
        struct Point {
            x: i32,
            y: i32,
        }
        impl Point {
            fn get_x(&mut self) -> &mut i32 {
                &mut self.x
            }
        }
        let mut p = Point { x: 1, y: 2 };
        let x = p.get_x();
        *x += 1;
        println!("借用的 *x {}", *x);
        println!("借用的 p.y {}", p.y);
        // println!("同时调用会报错 {} {}", *x, p.y);
    }
}
